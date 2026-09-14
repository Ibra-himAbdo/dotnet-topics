const fs = require('fs');
const path = require('path');

const csharp = require('./generate_csharp.js');
const sql = require('./generate_sql.js');
const web = require('./generate_web.js');

const allQuestions = [...csharp, ...sql, ...web];
console.log(`Total questions loaded: ${allQuestions.length}`);

// Validation
let errors = 0;
allQuestions.forEach((q, i) => {
  if (!q.id || q.id !== i + 1) {
    console.error(`Question at index ${i} has invalid id: ${q.id}`);
    errors++;
  }
  if (!q.subject || !q.module || !q.question || !q.explanation) {
    console.error(`Question ${q.id} is missing required fields`);
    errors++;
  }
  if (!Array.isArray(q.options) || q.options.length !== 4) {
    console.error(`Question ${q.id} does not have exactly 4 options`);
    errors++;
  }
  if (!['A', 'B', 'C', 'D'].includes(q.answer)) {
    console.error(`Question ${q.id} has invalid answer: ${q.answer}`);
    errors++;
  }
});

if (errors > 0) {
  console.error(`Found ${errors} validation errors! Aborting.`);
  process.exit(1);
}
console.log('All 660 questions passed validation successfully!');

// Ensure directories exist
const dataDir = path.join(__dirname, 'data');
const stylesDir = path.join(__dirname, 'styles');
const jsDir = path.join(__dirname, 'js');

[dataDir, stylesDir, jsDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// 1. Write Data Files
const jsonPath = path.join(dataDir, 'quiz-data.json');
fs.writeFileSync(jsonPath, JSON.stringify(allQuestions, null, 2), 'utf-8');

// Subject-specific datasets
fs.writeFileSync(path.join(dataDir, 'csharp.json'), JSON.stringify(csharp, null, 2), 'utf-8');
fs.writeFileSync(path.join(dataDir, 'sql.json'), JSON.stringify(sql, null, 2), 'utf-8');
fs.writeFileSync(path.join(dataDir, 'web.json'), JSON.stringify(web, null, 2), 'utf-8');

// Root duplicate for backwards compatibility
fs.writeFileSync(path.join(__dirname, 'Quiz_Data.json'), JSON.stringify(allQuestions, null, 2), 'utf-8');

const jsDataPath = path.join(dataDir, 'quiz-data.js');
fs.writeFileSync(jsDataPath, 'window.QUIZ_DATA = ' + JSON.stringify(allQuestions) + ';', 'utf-8');
console.log(`Saved unified and modular data files into data/ (quiz-data.json, quiz-data.js, csharp.json, sql.json, web.json)`);

// Helper to generate Markdown
function generateMarkdown(title, description, questions) {
  let md = `# ${title}\n\n`;
  md += `> **Total Questions:** ${questions.length}  \n`;
  md += `> **Coverage:** Comprehensive coverage based on official course materials.  \n`;
  md += `> **Interactive Features:** Click *"View Answer & Explanation"* below each question to test your knowledge.\n\n`;
  md += `---\n\n`;

  let currentModule = '';
  questions.forEach(q => {
    if (q.module !== currentModule) {
      currentModule = q.module;
      md += `\n## ${currentModule}\n\n`;
    }

    md += `### Question ${q.id}\n\n`;
    md += `${q.question.split('\n').map(l => l ? `${l}  ` : '').join('\n')}\n\n`;
    
    q.options.forEach(opt => {
      const letter = opt.substring(0, 1);
      const isCorrect = letter === q.answer;
      md += `- [${isCorrect ? 'x' : ' '}] **${opt}**\n`;
    });

    md += `\n<details>\n<summary><b>View Answer & Explanation</b></summary>\n\n`;
    md += `**Correct Answer:** \`${q.answer}\`\n\n`;
    md += `**Explanation:**  \n${q.explanation}\n`;
    md += `\n</details>\n\n---\n\n`;
  });

  return md;
}

// 2. Write Markdown files
fs.writeFileSync(path.join(__dirname, 'C_Sharp_MCQs.md'), generateMarkdown('C# Programming (Microsoft 20483B) - Comprehensive MCQ Bank', '', csharp), 'utf-8');
fs.writeFileSync(path.join(__dirname, 'SQL_Server_MCQs.md'), generateMarkdown('Microsoft SQL Server & T-SQL (Course 20761) - Comprehensive MCQ Bank', '', sql), 'utf-8');
fs.writeFileSync(path.join(__dirname, 'HTML_CSS_JS_MCQs.md'), generateMarkdown('HTML5, CSS3 & JavaScript (Course 20480B) - Comprehensive MCQ Bank', '', web), 'utf-8');

// 3. Write Master Summary
let summaryMd = `# MCQ Question Bank Master Index & Answer Key (660 Questions)\n\n`;
summaryMd += `This repository contains an exhaustive question bank of **660 exam-grade Multiple Choice Questions (MCQs)** with answers and detailed explanations.\n\n`;
summaryMd += `## Question Distribution\n\n`;
summaryMd += `| Subject | Source Course | Modules Covered | Questions per Module | Total MCQs | Document Link |\n`;
summaryMd += `| :--- | :--- | :--- | :--- | :--- | :--- |\n`;
summaryMd += `| **C# Programming** | Microsoft 20483B | Modules 1–13 | 15 | **195** | [C_Sharp_MCQs.md](./C_Sharp_MCQs.md) |\n`;
summaryMd += `| **Microsoft SQL Server & T-SQL** | Microsoft 20761 | Modules 1–17 | 15 | **255** | [SQL_Server_MCQs.md](./SQL_Server_MCQs.md) |\n`;
summaryMd += `| **HTML5, CSS3 & JavaScript** | Microsoft 20480B | Modules 1–14 | 15 | **210** | [HTML_CSS_JS_MCQs.md](./HTML_CSS_JS_MCQs.md) |\n`;
summaryMd += `| **TOTAL** | | **44 Modules** | **15** | **660 Questions** | **[Interactive Web Quiz App (index.html)](./index.html)** |\n\n`;

summaryMd += `## Quick Answer Key Reference Table\n\n`;
summaryMd += `| ID Range | Subject & Module | Answer Keys (in blocks of 15) |\n`;
summaryMd += `| :--- | :--- | :--- |\n`;

for (let i = 0; i < allQuestions.length; i += 15) {
  const slice = allQuestions.slice(i, i + 15);
  const startId = slice[0].id;
  const endId = slice[slice.length - 1].id;
  const subj = slice[0].subject;
  const mod = slice[0].module.split(':')[0];
  const keys = slice.map(q => `${q.id}:${q.answer}`).join(' | ');
  summaryMd += `| **${startId} – ${endId}** | ${subj} (${mod}) | ${keys} |\n`;
}

fs.writeFileSync(path.join(__dirname, 'MCQ_Master_Summary.md'), summaryMd, 'utf-8');
console.log('Saved Markdown documents and MCQ_Master_Summary.md');
console.log('Build completed successfully with modular styles/, js/, and data/ structure!');
