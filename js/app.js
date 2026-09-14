/**
 * Developer Certification MCQ Bank
 * Professional Application Logic & State Machine
 * --------------------------------------------------
 * Modular, Accessible, LocalStorage-Persistent
 */

(function () {
  'use strict';

  // Questions dataset safely loaded from data/quiz-data.js
  const questionsData = window.QUIZ_DATA || [];

  // Application State
  const state = {
    currentMode: 'practice', // 'practice' | 'exam'
    statusFilter: 'ALL',     // 'ALL' | 'UNANSWERED' | 'ANSWERED' | 'CORRECT' | 'INCORRECT' | 'BOOKMARKED'
    
    // Persistent user state
    userAnswers: JSON.parse(localStorage.getItem('mcq_user_answers') || '{}'),
    bookmarks: new Set(JSON.parse(localStorage.getItem('mcq_bookmarks') || '[]')),
    flagged: new Set(JSON.parse(localStorage.getItem('mcq_flagged') || '[]')),
    soundEnabled: localStorage.getItem('mcq_sound_enabled') !== 'false',
    
    // Exam mode state
    examAnswers: {},
    currentExamQuestions: [],
    examStartTime: null,
    timerInterval: null,
    
    // Navigation state
    activeQuestionIndex: 0
  };

  // =========================================================================
  // Web Audio Synthesizer (No external assets required)
  // =========================================================================
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
  }

  function playSound(type) {
    if (!state.soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      if (ctx.state === 'suspended') ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;

      if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(300, now + 0.04);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.start(now);
        osc.stop(now + 0.04);
      } else if (type === 'correct') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      } else if (type === 'incorrect') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(260, now);
        osc.frequency.exponentialRampToValueAtTime(180, now + 0.18);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.2);
      } else if (type === 'fanfare') {
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        notes.forEach((freq, idx) => {
          const noteOsc = ctx.createOscillator();
          const noteGain = ctx.createGain();
          noteOsc.connect(noteGain);
          noteGain.connect(ctx.destination);
          const t = now + idx * 0.12;
          noteOsc.type = 'triangle';
          noteOsc.frequency.setValueAtTime(freq, t);
          noteGain.gain.setValueAtTime(0.15, t);
          noteGain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
          noteOsc.start(t);
          noteOsc.stop(t + 0.3);
        });
      }
    } catch (e) {
      // Ignore audio failure if user has not interacted
    }
  }

  window.toggleSound = function () {
    state.soundEnabled = !state.soundEnabled;
    try {
      localStorage.setItem('mcq_sound_enabled', state.soundEnabled);
    } catch (e) {}
    updateSoundIcon();
    showToast(state.soundEnabled ? 'Sound Effects Enabled' : 'Sound Effects Muted', 'fa-solid fa-volume-high');
  };

  function updateSoundIcon() {
    const icon = document.getElementById('soundIcon');
    if (icon) {
      icon.className = state.soundEnabled ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark';
    }
  }

  // =========================================================================
  // Canvas Confetti Engine
  // =========================================================================
  function launchConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#38bdf8', '#6366f1', '#10b981', '#f59e0b', '#ec4899', '#a855f7'];
    const particles = [];
    const count = 120;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: canvas.width * 0.5,
        y: canvas.height * 0.35,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.7) * 16,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 12,
        decay: Math.random() * 0.015 + 0.008,
        alpha: 1
      });
    }

    let animId;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = 0;

      particles.forEach(p => {
        if (p.alpha <= 0) return;
        alive++;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // gravity
        p.rotation += p.rotationSpeed;
        p.alpha -= p.decay;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      if (alive > 0) {
        animId = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(animId);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    animate();
  }

  // =========================================================================
  // Toast Notifications
  // =========================================================================
  function showToast(message, iconClass = 'fa-solid fa-circle-check') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="${iconClass}"></i> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.transition = 'opacity 0.3s, transform 0.3s';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 2400);
  }

  // =========================================================================
  // LocalStorage Persistence
  // =========================================================================
  function saveAnswers() {
    try {
      localStorage.setItem('mcq_user_answers', JSON.stringify(state.userAnswers));
    } catch (e) {
      console.warn('Unable to persist answers:', e);
    }
  }

  function saveBookmarks() {
    try {
      localStorage.setItem('mcq_bookmarks', JSON.stringify([...state.bookmarks]));
      const badge = document.getElementById('bookmarkCount');
      if (badge) badge.textContent = state.bookmarks.size;
    } catch (e) {
      console.warn('Unable to persist bookmarks:', e);
    }
  }

  function saveFlags() {
    try {
      localStorage.setItem('mcq_flagged', JSON.stringify([...state.flagged]));
    } catch (e) {
      console.warn('Unable to persist flagged items:', e);
    }
  }

  window.toggleBookmark = function (id) {
    playSound('click');
    if (state.bookmarks.has(id)) {
      state.bookmarks.delete(id);
      showToast(`Question #${id} removed from bookmarks`, 'fa-regular fa-star');
    } else {
      state.bookmarks.add(id);
      showToast(`Question #${id} bookmarked!`, 'fa-solid fa-star');
    }
    saveBookmarks();
    updateAnalyticsDashboard();
    renderQuestions();
    renderPalette();
  };

  window.toggleFlag = function (id) {
    playSound('click');
    if (state.flagged.has(id)) {
      state.flagged.delete(id);
      showToast(`Question #${id} unflagged`, 'fa-regular fa-flag');
    } else {
      state.flagged.add(id);
      showToast(`Question #${id} flagged for review`, 'fa-solid fa-flag');
    }
    saveFlags();
    renderQuestions();
    renderPalette();
  };

  window.copyQuestion = function (id) {
    const q = questionsData.find(item => item.id === id);
    if (!q) return;

    let text = `Question #${q.id} [${q.subject} - ${q.module}]\n\n${q.question}\n\n`;
    q.options.forEach(opt => {
      text += `${opt}\n`;
    });
    text += `\nCorrect Answer: ${q.answer}\nExplanation: ${q.explanation}\n`;

    navigator.clipboard.writeText(text).then(() => {
      playSound('click');
      showToast(`Question #${id} copied to clipboard!`, 'fa-solid fa-copy');
    }).catch(() => {
      showToast('Could not copy to clipboard', 'fa-solid fa-circle-exclamation');
    });
  };

  // =========================================================================
  // Reset Progress Confirmation
  // =========================================================================
  window.promptResetProgress = function () {
    playSound('click');
    const modal = document.getElementById('resetModal');
    if (modal) modal.style.display = 'flex';
  };

  window.closeResetModal = function () {
    const modal = document.getElementById('resetModal');
    if (modal) modal.style.display = 'none';
  };

  window.confirmResetProgress = function () {
    state.userAnswers = {};
    saveAnswers();
    closeResetModal();
    updateAnalyticsDashboard();
    renderQuestions();
    renderPalette();
    showToast('All answers and progress have been reset.', 'fa-solid fa-rotate-left');
  };

  // =========================================================================
  // Module Population & Dropdowns
  // =========================================================================
  function populateModules() {
    const subjSelect = document.getElementById('subjectFilter');
    const modSelect = document.getElementById('moduleFilter');
    if (!subjSelect || !modSelect) return;

    const subj = subjSelect.value;
    const prevVal = modSelect.value;
    modSelect.innerHTML = '<option value="ALL">All Modules</option>';

    const filtered = subj === 'ALL' 
      ? questionsData 
      : questionsData.filter(q => q.subject === subj);

    const modules = [...new Set(filtered.map(q => q.module))];

    modules.forEach(m => {
      const opt = document.createElement('option');
      opt.value = m;
      opt.textContent = m;
      modSelect.appendChild(opt);
    });

    if (modules.includes(prevVal)) {
      modSelect.value = prevVal;
    }
  }

  window.onSubjectChange = function () {
    playSound('click');
    populateModules();
    if (state.currentMode === 'exam') {
      startNewExam();
    } else {
      renderQuestions();
      renderPalette();
    }
  };

  function getTagInfo(subj) {
    switch (subj) {
      case 'C#':
        return { class: 'tag-csharp', icon: 'fa-brands fa-microsoft' };
      case 'SQL Server':
        return { class: 'tag-sql', icon: 'fa-solid fa-database' };
      default:
        return { class: 'tag-web', icon: 'fa-brands fa-html5' };
    }
  }

  // =========================================================================
  // Filtering Algorithm
  // =========================================================================
  function getFilteredQuestions() {
    const subjElem = document.getElementById('subjectFilter');
    const modElem = document.getElementById('moduleFilter');
    const searchElem = document.getElementById('searchInput');

    const subj = subjElem ? subjElem.value : 'ALL';
    const mod = modElem ? modElem.value : 'ALL';
    const term = searchElem ? searchElem.value.trim().toLowerCase() : '';

    return questionsData.filter(q => {
      // Subject filter
      if (subj !== 'ALL' && q.subject !== subj) return false;
      // Module filter
      if (mod !== 'ALL' && q.module !== mod) return false;
      // Status pill filter
      if (state.statusFilter === 'BOOKMARKED' && !state.bookmarks.has(q.id)) return false;
      if (state.statusFilter === 'UNANSWERED' && state.userAnswers[q.id] !== undefined) return false;
      if (state.statusFilter === 'ANSWERED' && state.userAnswers[q.id] === undefined) return false;
      if (state.statusFilter === 'CORRECT' && state.userAnswers[q.id] !== q.answer) return false;
      if (state.statusFilter === 'INCORRECT' && (state.userAnswers[q.id] === undefined || state.userAnswers[q.id] === q.answer)) return false;

      // Keyword search
      if (term) {
        const matchQ = q.question.toLowerCase().includes(term);
        const matchOpt = q.options.some(o => o.toLowerCase().includes(term));
        const matchExp = q.explanation.toLowerCase().includes(term);
        if (!matchQ && !matchOpt && !matchExp) return false;
      }
      return true;
    });
  }

  window.setStatusFilter = function (status) {
    playSound('click');
    state.statusFilter = status;

    // Update active pill button
    const buttons = document.querySelectorAll('.pill-filter-btn');
    buttons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.status === status);
    });

    renderQuestions();
    renderPalette();
  };

  // =========================================================================
  // Analytics Dashboard Updater
  // =========================================================================
  function updateAnalyticsDashboard() {
    const totalCount = questionsData.length;
    const answeredCount = Object.keys(state.userAnswers).length;
    
    let correctCount = 0;
    let csharpAns = 0, csharpCor = 0;
    let sqlAns = 0, sqlCor = 0;
    let webAns = 0, webCor = 0;

    questionsData.forEach(q => {
      const ans = state.userAnswers[q.id];
      if (ans !== undefined) {
        const isCor = ans === q.answer;
        if (isCor) correctCount++;

        if (q.subject === 'C#') {
          csharpAns++;
          if (isCor) csharpCor++;
        } else if (q.subject === 'SQL Server') {
          sqlAns++;
          if (isCor) sqlCor++;
        } else {
          webAns++;
          if (isCor) webCor++;
        }
      }
    });

    const incorrectCount = answeredCount - correctCount;
    const overallPct = totalCount > 0 ? Math.round((answeredCount / totalCount) * 100) : 0;
    const accuracyPct = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

    // Update Overall Progress Bar
    const progressFill = document.getElementById('dashOverallFill');
    const progressText = document.getElementById('dashOverallText');
    if (progressFill) progressFill.style.width = overallPct + '%';
    if (progressText) progressText.textContent = `${overallPct}% (${answeredCount}/${totalCount})`;

    // Update Accuracy Badges
    const accuracyBadge = document.getElementById('dashAccuracyBadge');
    if (accuracyBadge) accuracyBadge.textContent = `${accuracyPct}%`;
    const headerAccuracy = document.getElementById('headerAccuracyCount');
    if (headerAccuracy) headerAccuracy.textContent = `${accuracyPct}%`;

    // Update Subject Mastery Cards
    const csPct = Math.round((csharpAns / 195) * 100);
    const sqlPct = Math.round((sqlAns / 255) * 100);
    const webPct = Math.round((webAns / 210) * 100);

    const elCsText = document.getElementById('masteryCsText');
    const elCsFill = document.getElementById('masteryCsFill');
    if (elCsText) elCsText.textContent = `${csharpAns}/195 (${csPct}%)`;
    if (elCsFill) elCsFill.style.width = csPct + '%';

    const elSqlText = document.getElementById('masterySqlText');
    const elSqlFill = document.getElementById('masterySqlFill');
    if (elSqlText) elSqlText.textContent = `${sqlAns}/255 (${sqlPct}%)`;
    if (elSqlFill) elSqlFill.style.width = sqlPct + '%';

    const elWebText = document.getElementById('masteryWebText');
    const elWebFill = document.getElementById('masteryWebFill');
    if (elWebText) elWebText.textContent = `${webAns}/210 (${webPct}%)`;
    if (elWebFill) elWebFill.style.width = webPct + '%';

    // Update Status Pills Counts
    const pillAll = document.getElementById('pillCountAll');
    const pillUnanswered = document.getElementById('pillCountUnanswered');
    const pillAnswered = document.getElementById('pillCountAnswered');
    const pillCorrect = document.getElementById('pillCountCorrect');
    const pillIncorrect = document.getElementById('pillCountIncorrect');
    const pillBookmarked = document.getElementById('pillCountBookmarked');

    if (pillAll) pillAll.textContent = totalCount;
    if (pillUnanswered) pillUnanswered.textContent = totalCount - answeredCount;
    if (pillAnswered) pillAnswered.textContent = answeredCount;
    if (pillCorrect) pillCorrect.textContent = correctCount;
    if (pillIncorrect) pillIncorrect.textContent = incorrectCount;
    if (pillBookmarked) pillBookmarked.textContent = state.bookmarks.size;

    // Update Stats Bar counts
    const totalCountElem = document.getElementById('totalCount');
    const bookmarkCountElem = document.getElementById('bookmarkCount');
    const answeredCountElem = document.getElementById('answeredCount');
    if (totalCountElem) totalCountElem.textContent = totalCount;
    if (bookmarkCountElem) bookmarkCountElem.textContent = state.bookmarks.size;
    if (answeredCountElem) answeredCountElem.textContent = answeredCount;
  }

  // =========================================================================
  // Question Rendering Engine
  // =========================================================================
  function formatQuestionText(text) {
    if (!text) return '';
    // Format inline backticks `code`
    return text.replace(/`([^`]+)`/g, '<code>$1</code>');
  }

  function renderQuestions() {
    const container = document.getElementById('questionsContainer');
    if (!container) return;

    container.innerHTML = '';

    const list = state.currentMode === 'exam' 
      ? state.currentExamQuestions 
      : getFilteredQuestions();

    const visibleCountElem = document.getElementById('visibleCount');
    if (visibleCountElem) visibleCountElem.textContent = list.length;

    if (list.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 4.5rem 1.5rem; color: var(--text-secondary); background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
          <i class="fa-solid fa-magnifying-glass" style="font-size: 3rem; margin-bottom: 1.25rem; color: var(--accent-blue);"></i>
          <h3 style="color: var(--text-primary); font-size: 1.25rem;">No Questions Match Current Criteria</h3>
          <p style="margin-top: 0.5rem; font-size: 0.92rem;">Try clearing search terms or selecting a different status pill filter.</p>
          <button class="btn-dash-action" onclick="setStatusFilter('ALL')" style="margin-top: 1.25rem;">
            <i class="fa-solid fa-arrows-rotate"></i> Show All Questions
          </button>
        </div>
      `;
      return;
    }

    list.forEach((q, index) => {
      const card = document.createElement('article');
      card.className = 'question-card';
      card.id = 'card-' + q.id;
      card.tabIndex = 0;

      const isAnswered = state.currentMode === 'practice' 
        ? state.userAnswers[q.id] !== undefined 
        : state.examAnswers[q.id] !== undefined;

      const selectedLetter = state.currentMode === 'practice'
        ? state.userAnswers[q.id]
        : state.examAnswers[q.id];

      const isBookmarked = state.bookmarks.has(q.id);
      const isFlagged = state.flagged.has(q.id);

      let optionsHtml = '';
      q.options.forEach(opt => {
        const letter = opt.substring(0, 1);
        let btnClass = 'option-btn';
        let statusIcon = '';

        if (state.currentMode === 'practice' && isAnswered) {
          if (letter === q.answer) {
            btnClass += ' correct';
            statusIcon = '<i class="fa-solid fa-circle-check opt-status-icon"></i>';
          } else if (letter === selectedLetter) {
            btnClass += ' incorrect';
            statusIcon = '<i class="fa-solid fa-circle-xmark opt-status-icon"></i>';
          }
        } else if (state.currentMode === 'exam') {
          if (letter === selectedLetter) btnClass += ' selected';
        }

        optionsHtml += `
          <button class="${btnClass}" onclick="handleOptionClick(${q.id}, '${letter}')" ${state.currentMode === 'practice' && isAnswered ? 'disabled' : ''}>
            <span class="opt-letter">${letter}</span>
            <span>${opt.substring(3)}</span>
            ${statusIcon}
          </button>
        `;
      });

      const showExp = state.currentMode === 'practice' && isAnswered ? 'show' : '';
      const tagInfo = getTagInfo(q.subject);

      card.innerHTML = `
        <div class="card-header">
          <div class="tags-container">
            <span class="tag ${tagInfo.class}"><i class="${tagInfo.icon}"></i> ${q.subject}</span>
            <span class="module-badge">${q.module}</span>
          </div>
          <div class="card-actions">
            <span class="q-number">#${q.id}</span>
            ${state.currentMode === 'exam' ? `
              <button class="btn-card-action btn-flag ${isFlagged ? 'flagged' : ''}" onclick="toggleFlag(${q.id})" title="${isFlagged ? 'Unflag Question' : 'Flag for Review'}">
                <i class="${isFlagged ? 'fa-solid' : 'fa-regular'} fa-flag"></i>
              </button>
            ` : ''}
            <button class="btn-card-action btn-copy" onclick="copyQuestion(${q.id})" title="Copy Question to Clipboard">
              <i class="fa-solid fa-copy"></i>
            </button>
            <button class="btn-card-action btn-star ${isBookmarked ? 'bookmarked' : ''}" onclick="toggleBookmark(${q.id})" title="${isBookmarked ? 'Remove Bookmark' : 'Bookmark Question'}">
              <i class="${isBookmarked ? 'fa-solid' : 'fa-regular'} fa-star"></i>
            </button>
          </div>
        </div>
        <div class="question-text">${formatQuestionText(q.question)}</div>
        <div class="options-grid">
          ${optionsHtml}
        </div>
        <div class="explanation-box ${showExp}" id="exp-${q.id}">
          <div class="exp-title"><i class="fa-solid fa-circle-check" style="color: var(--accent-emerald);"></i> Correct Answer: ${q.answer}</div>
          <div>${formatQuestionText(q.explanation)}</div>
        </div>
      `;

      container.appendChild(card);
    });
  }

  window.renderQuestions = renderQuestions;

  // =========================================================================
  // Option Click Handler
  // =========================================================================
  window.handleOptionClick = function (qId, letter) {
    const q = questionsData.find(item => item.id === qId);
    if (!q) return;

    if (state.currentMode === 'practice') {
      // Practice Mode: Instant evaluation, audio chime, and persistence
      const isCorrect = letter === q.answer;
      state.userAnswers[qId] = letter;
      saveAnswers();

      if (isCorrect) {
        playSound('correct');
      } else {
        playSound('incorrect');
      }

      updateAnalyticsDashboard();
      renderQuestions();
      renderPalette();
    } else {
      // Exam Mode: Record answer silently without revealing correctness
      playSound('click');
      state.examAnswers[qId] = letter;

      const card = document.getElementById('card-' + qId);
      if (card) {
        const btns = card.querySelectorAll('.option-btn');
        btns.forEach(btn => {
          const l = btn.querySelector('.opt-letter').textContent.trim();
          if (l === letter) btn.classList.add('selected');
          else btn.classList.remove('selected');
        });
      }
      renderPalette();
    }
  };

  // =========================================================================
  // Question Navigator Palette Drawer
  // =========================================================================
  window.togglePalette = function (forceState) {
    playSound('click');
    const drawer = document.getElementById('paletteDrawer');
    const overlay = document.getElementById('paletteDrawerOverlay');
    if (!drawer || !overlay) return;

    const isOpen = drawer.classList.contains('open');
    const nextState = forceState !== undefined ? forceState : !isOpen;

    if (nextState) {
      renderPalette();
      drawer.classList.add('open');
      overlay.classList.add('open');
    } else {
      drawer.classList.remove('open');
      overlay.classList.remove('open');
    }
  };

  function renderPalette() {
    const container = document.getElementById('paletteBody');
    if (!container) return;

    container.innerHTML = '';
    const list = state.currentMode === 'exam' 
      ? state.currentExamQuestions 
      : getFilteredQuestions();

    const titleElem = document.getElementById('paletteTitleCount');
    if (titleElem) titleElem.textContent = `(${list.length})`;

    list.forEach(q => {
      const btn = document.createElement('button');
      btn.className = 'palette-btn';
      btn.textContent = q.id;
      btn.title = `Jump to Question #${q.id}`;

      if (state.flagged.has(q.id)) {
        btn.classList.add('is-flagged');
      }

      if (state.currentMode === 'practice') {
        const userAns = state.userAnswers[q.id];
        if (userAns !== undefined) {
          if (userAns === q.answer) {
            btn.classList.add('ans-correct');
          } else {
            btn.classList.add('ans-incorrect');
          }
        }
      } else {
        if (state.examAnswers[q.id] !== undefined) {
          btn.classList.add('ans-exam-selected');
        }
      }

      btn.onclick = () => {
        jumpToQuestion(q.id);
        if (window.innerWidth <= 768) {
          togglePalette(false);
        }
      };

      container.appendChild(btn);
    });
  }

  function jumpToQuestion(id) {
    const card = document.getElementById('card-' + id);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      card.classList.add('active-focused');
      setTimeout(() => card.classList.remove('active-focused'), 2000);
      card.focus();
    }
  }

  // =========================================================================
  // Mode Controller: Practice vs Exam
  // =========================================================================
  window.setMode = function (mode) {
    playSound('click');
    state.currentMode = mode;
    const btnPractice = document.getElementById('btnPracticeMode');
    const btnExam = document.getElementById('btnExamMode');
    const banner = document.getElementById('examBanner');
    const countGroup = document.getElementById('examCountGroup');

    if (btnPractice) btnPractice.classList.toggle('active', mode === 'practice');
    if (btnExam) btnExam.classList.toggle('active', mode === 'exam');
    if (banner) banner.style.display = mode === 'exam' ? 'flex' : 'none';
    if (countGroup) countGroup.style.display = mode === 'exam' ? 'flex' : 'none';

    if (mode === 'exam') {
      startNewExam();
    } else {
      clearInterval(state.timerInterval);
      renderQuestions();
      renderPalette();
    }
  };

  function startNewExam() {
    state.examAnswers = {};
    const countElem = document.getElementById('examCountSelect');
    const countVal = countElem ? countElem.value : '25';
    let pool = [...getFilteredQuestions()];

    // Fisher-Yates shuffle
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    const count = countVal === 'ALL' 
      ? pool.length 
      : Math.min(parseInt(countVal, 10), pool.length);

    state.currentExamQuestions = pool.slice(0, count);

    // Reset & Start Countdown Timer
    clearInterval(state.timerInterval);
    state.examStartTime = Date.now();
    state.timerInterval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - state.examStartTime) / 1000);
      const mins = String(Math.floor(elapsed / 60)).padStart(2, '0');
      const secs = String(elapsed % 60).padStart(2, '0');
      const timerElem = document.getElementById('examTimer');
      if (timerElem) {
        timerElem.textContent = `${mins}:${secs}`;
      }
    }, 1000);

    renderQuestions();
    renderPalette();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast(`Started Exam with ${state.currentExamQuestions.length} Questions!`, 'fa-solid fa-stopwatch');
  }

  window.startNewExam = startNewExam;

  // =========================================================================
  // Exam Submission & Certification Scoring
  // =========================================================================
  window.submitExam = function () {
    const total = state.currentExamQuestions.length;
    const answeredCount = Object.keys(state.examAnswers).length;
    const unansweredCount = total - answeredCount;

    if (unansweredCount > 0) {
      const confirmSubmit = confirm(`You have ${unansweredCount} unanswered questions out of ${total}.\n\nDo you want to submit your exam anyway?`);
      if (!confirmSubmit) return;
    }

    clearInterval(state.timerInterval);
    let correct = 0;
    let csTot = 0, csCor = 0;
    let sqlTot = 0, sqlCor = 0;
    let webTot = 0, webCor = 0;

    state.currentExamQuestions.forEach(q => {
      const isCor = state.examAnswers[q.id] === q.answer;
      if (isCor) correct++;

      if (q.subject === 'C#') {
        csTot++;
        if (isCor) csCor++;
      } else if (q.subject === 'SQL Server') {
        sqlTot++;
        if (isCor) sqlCor++;
      } else {
        webTot++;
        if (isCor) webCor++;
      }
    });

    const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
    const isPassed = pct >= 70; // Microsoft 700 / 1000 passing threshold

    // Visual Celebration & Tone
    if (isPassed) {
      playSound('fanfare');
      launchConfetti();
    } else {
      playSound('incorrect');
    }

    // Modal Population
    const scoreCircle = document.getElementById('modalScoreCircle');
    const scorePctElem = document.getElementById('modalScorePercent');
    const scoreTitleElem = document.getElementById('modalScoreTitle');
    const scoreDetailsElem = document.getElementById('modalScoreDetails');
    const domainBreakdownElem = document.getElementById('modalDomainBreakdown');
    const timerElem = document.getElementById('examTimer');
    const modal = document.getElementById('scoreModal');

    if (scoreCircle) {
      scoreCircle.className = `score-circle ${isPassed ? 'passed' : 'failed'}`;
    }
    if (scorePctElem) scorePctElem.textContent = pct + '%';
    if (scoreTitleElem) {
      scoreTitleElem.innerHTML = isPassed 
        ? `<i class="fa-solid fa-circle-check" style="color: var(--accent-emerald);"></i> Examination Passed!`
        : `<i class="fa-solid fa-circle-xmark" style="color: var(--accent-rose);"></i> Examination Completed`;
    }

    if (scoreDetailsElem) {
      scoreDetailsElem.innerHTML = `
        <strong>Result:</strong> ${isPassed ? '<span style="color: var(--accent-emerald); font-weight: 700;">PASSED (Target: 70%+)</span>' : '<span style="color: var(--accent-rose); font-weight: 700;">NEEDS PRACTICE (Target: 70%+)</span>'}<br>
        <strong>Score:</strong> ${correct} / ${total} Correct (${pct}%) &bull; <strong>Time:</strong> ${timerElem ? timerElem.textContent : '00:00'}
      `;
    }

    if (domainBreakdownElem) {
      let html = '';
      if (csTot > 0) {
        const csP = Math.round((csCor / csTot) * 100);
        html += `<div class="domain-breakdown-item"><strong>C# (.NET):</strong> ${csCor}/${csTot} (${csP}%)</div>`;
      }
      if (sqlTot > 0) {
        const sqlP = Math.round((sqlCor / sqlTot) * 100);
        html += `<div class="domain-breakdown-item"><strong>SQL Server:</strong> ${sqlCor}/${sqlTot} (${sqlP}%)</div>`;
      }
      if (webTot > 0) {
        const webP = Math.round((webCor / webTot) * 100);
        html += `<div class="domain-breakdown-item"><strong>Web Development:</strong> ${webCor}/${webTot} (${webP}%)</div>`;
      }
      domainBreakdownElem.innerHTML = html;
    }

    if (modal) modal.style.display = 'flex';
  };

  window.closeScoreModal = function () {
    const modal = document.getElementById('scoreModal');
    if (modal) modal.style.display = 'none';

    // Copy exam answers to userAnswers so they can review in Practice Mode
    Object.assign(state.userAnswers, state.examAnswers);
    saveAnswers();
    setMode('practice');
    updateAnalyticsDashboard();
  };

  window.reviewMissedQuestions = function () {
    const modal = document.getElementById('scoreModal');
    if (modal) modal.style.display = 'none';

    Object.assign(state.userAnswers, state.examAnswers);
    saveAnswers();
    setMode('practice');
    setStatusFilter('INCORRECT');
    updateAnalyticsDashboard();
  };

  // =========================================================================
  // Theme Toggle (Dark / Light) with Persistence
  // =========================================================================
  function initTheme() {
    const savedTheme = localStorage.getItem('mcq_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    const icon = document.getElementById('themeIcon');
    if (icon) {
      icon.className = savedTheme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    }
  }

  window.toggleTheme = function () {
    playSound('click');
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('mcq_theme', next);
    } catch (e) {}
    const icon = document.getElementById('themeIcon');
    if (icon) {
      icon.className = next === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    }
    showToast(`Switched to ${next} theme`, next === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon');
  };

  // =========================================================================
  // Keyboard Shortcuts Guide Modal
  // =========================================================================
  window.openShortcutsModal = function () {
    playSound('click');
    const modal = document.getElementById('shortcutsModal');
    if (modal) modal.style.display = 'flex';
  };

  window.closeShortcutsModal = function () {
    const modal = document.getElementById('shortcutsModal');
    if (modal) modal.style.display = 'none';
  };

  // Keyboard Event Listener
  window.addEventListener('keydown', (e) => {
    // If typing in search box or any input, skip shortcuts
    if (['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      if (e.key === 'Escape') {
        document.activeElement.blur();
      }
      return;
    }

    if (e.key === '?') {
      openShortcutsModal();
      return;
    }

    if (e.key === 'Escape') {
      closeScoreModal();
      closeShortcutsModal();
      closeResetModal();
      togglePalette(false);
      return;
    }

    if (e.key === '/') {
      e.preventDefault();
      const search = document.getElementById('searchInput');
      if (search) search.focus();
      return;
    }

    if (e.key === 'm' || e.key === 'M') {
      togglePalette();
      return;
    }

    // Option keys: 1-4 or A-D
    const keyMap = { '1': 'A', '2': 'B', '3': 'C', '4': 'D', 'a': 'A', 'b': 'B', 'c': 'C', 'd': 'D' };
    const focusedCard = document.querySelector('.question-card:focus') || document.querySelector('.question-card:hover');

    if (focusedCard && keyMap[e.key.toLowerCase()]) {
      const qId = parseInt(focusedCard.id.replace('card-', ''), 10);
      const chosenLetter = keyMap[e.key.toLowerCase()];
      if (qId) {
        handleOptionClick(qId, chosenLetter);
      }
      return;
    }

    // Question jumping: J (Next), K (Previous)
    if (e.key === 'j' || e.key === 'ArrowDown') {
      navigateQuestionCard(1);
    } else if (e.key === 'k' || e.key === 'ArrowUp') {
      navigateQuestionCard(-1);
    }
  });

  function navigateQuestionCard(delta) {
    const cards = Array.from(document.querySelectorAll('.question-card'));
    if (cards.length === 0) return;

    let currentIndex = cards.findIndex(c => c === document.activeElement);
    if (currentIndex === -1) currentIndex = 0;
    else currentIndex = Math.max(0, Math.min(cards.length - 1, currentIndex + delta));

    cards[currentIndex].focus();
    cards[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // Shuffle currently displayed questions
  window.shuffleCurrentQuestions = function () {
    playSound('click');
    const container = document.getElementById('questionsContainer');
    if (!container) return;
    const cards = Array.from(container.children);
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      container.appendChild(cards[j]);
    }
    showToast('Questions shuffled randomly!', 'fa-solid fa-shuffle');
  };

  // =========================================================================
  // Initialization
  // =========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    updateSoundIcon();
    populateModules();
    updateAnalyticsDashboard();
    renderQuestions();
    renderPalette();
  });

})();
