# HTML5, CSS3 & JavaScript (Course 20480B) - Comprehensive MCQ Bank

> **Total Questions:** 210  
> **Coverage:** Comprehensive coverage based on official course materials.  
> **Interactive Features:** Click *"View Answer & Explanation"* below each question to test your knowledge.

---


## Module 1: Overview of HTML and CSS

### Question 451

What is the correct and official DOCTYPE declaration for an HTML5 document?  

- [x] **A) <!DOCTYPE html>**
- [ ] **B) <!DOCTYPE HTML5 PUBLIC>**
- [ ] **C) <!DOCTYPE html SYSTEM "HTML5.dtd">**
- [ ] **D) <doctype html5>**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
HTML5 drastically simplified the document type declaration to case-insensitive '<!DOCTYPE html>', which triggers standard rendering mode across all modern browsers.

</details>

---

### Question 452

Which meta tag is used to specify the UTF-8 character encoding in an HTML5 document?  

- [x] **A) <meta charset="utf-8">**
- [ ] **B) <meta encoding="utf-8">**
- [ ] **C) <meta http-equiv="character-set" content="utf-8">**
- [ ] **D) <meta type="charset/utf-8">**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
In HTML5, character encoding is declared compactly using '<meta charset="utf-8">', placed early in the <head> element.

</details>

---

### Question 453

What is the recommended method for linking an external CSS stylesheet to an HTML document?  

- [x] **A) <link rel="stylesheet" href="styles.css">**
- [ ] **B) <style src="styles.css"></style>**
- [ ] **C) <stylesheet>styles.css</stylesheet>**
- [ ] **D) <import href="styles.css">**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The '<link>' tag inside the <head> element with attributes 'rel="stylesheet"' and 'href="path/to/file.css"' is the standard way to attach an external stylesheet.

</details>

---

### Question 454

What is the main drawback of applying inline CSS styles directly on HTML elements via the 'style' attribute?  

- [ ] **A) Inline styles are ignored by modern browsers**
- [x] **B) They tightly couple presentation with structure, make site-wide maintenance difficult, and cannot be cached by the browser**
- [ ] **C) Inline styles only work for font colors**
- [ ] **D) Inline styles require JavaScript to execute**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Inline styles violate separation of concerns, lead to duplicated code, are difficult to maintain globally, and cannot be cached separately like external CSS files.

</details>

---

### Question 455

Which HTML element is the root element of an HTML page?  

- [ ] **A) <body>**
- [ ] **B) <head>**
- [x] **C) <html>**
- [ ] **D) <!DOCTYPE>**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `C`

**Explanation:**  
The '<html>' element is the top-level root element that wraps all other HTML tags (both <head> and <body>) in the document.

</details>

---

### Question 456

What CSS syntax consists of a selector, property, and value?  

- [x] **A) Selector { property: value; }**
- [ ] **B) Selector = (property -> value);**
- [ ] **C) [property = value] => Selector;**
- [ ] **D) Selector : { property = value };**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
A standard CSS rule-set consists of a selector pointing to the HTML element to style, followed by a declaration block enclosed in curly braces containing 'property: value;' pairs.

</details>

---

### Question 457

Where should the <title> tag be placed in an HTML document?  

- [ ] **A) Directly inside the <body> tag**
- [x] **B) Inside the <head> container tag**
- [ ] **C) Before the <!DOCTYPE html> tag**
- [ ] **D) In the <footer> tag**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The <title> tag must be located inside the <head> block, defining the title displayed in the browser's tab or title bar.

</details>

---

### Question 458

What is an HTML 'void' or self-closing element that does not have an end tag?  

- [ ] **A) <div>**
- [x] **B) <img>**
- [ ] **C) <p>**
- [ ] **D) <span>**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Void elements cannot contain child nodes or closing tags. Examples include <img>, <input>, <br>, <hr>, and <meta>.

</details>

---

### Question 459

Which CSS property is used to change the background color of an element?  

- [ ] **A) color**
- [x] **B) background-color**
- [ ] **C) bgcolor**
- [ ] **D) fill-color**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
'background-color' sets the background color of an element in CSS. The 'color' property sets the foreground text color.

</details>

---

### Question 460

How do you write comments in HTML vs CSS?  

- [x] **A) HTML: <!-- comment --> | CSS: /* comment */**
- [ ] **B) HTML: // comment | CSS: <!-- comment -->**
- [ ] **C) HTML: /* comment */ | CSS: // comment**
- [ ] **D) HTML: # comment | CSS: # comment**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
HTML comments use '<!-- comment -->' delimiters. CSS comments use '/* comment */' delimiters.

</details>

---

### Question 461

What is the primary purpose of the '<meta name="description">' tag in an HTML document?  

- [x] **A) Provides a concise summary of the page for search engine results pages (SERP snippet) and social shares**
- [ ] **B) Configures CSS font styles**
- [ ] **C) Connects to a database description table**
- [ ] **D) Defines internal browser memory limits**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The meta description tag provides search engines with a summary of the page, frequently used as the snippet preview under the title in search engine results pages (SEO).

</details>

---

### Question 462

What is the key difference between '<script defer>' and '<script async>'?  

- [x] **A) 'defer' downloads in parallel and executes in document order after the DOM is fully parsed; 'async' downloads in parallel and executes immediately as soon as downloaded, pausing DOM parsing**
- [ ] **B) 'defer' is for external scripts; 'async' is for inline scripts**
- [ ] **C) 'async' executes after DOMContentLoaded; 'defer' does not**
- [ ] **D) There is no difference**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'defer' guarantees execution order after HTML parsing finishes. 'async' executes asynchronously as soon as the script arrives, without guaranteeing order.

</details>

---

### Question 463

What is the difference between a CSS Reset (e.g. Meyerweb) and Normalize.css?  

- [x] **A) CSS Reset strips all default browser styling to zero; Normalize.css preserves useful browser defaults while correcting bugs and unifying cross-browser inconsistencies**
- [ ] **B) Normalize.css removes all styles**
- [ ] **C) CSS Reset is built into Chrome only**
- [ ] **D) Normalize.css is a JavaScript library**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
A CSS Reset resets margins, paddings, and font sizes to a blank slate. Normalize.css preserves useful defaults (like headings and list bullets) while standardizing element styling across different browsers.

</details>

---

### Question 464

What do the components in the CSS color function 'hsl(210, 100%, 50%)' represent?  

- [x] **A) Hue (0-360 degrees on the color wheel), Saturation (percentage), and Lightness (percentage)**
- [ ] **B) Height, Size, and Length**
- [ ] **C) High, Standard, and Low**
- [ ] **D) Hexadecimal, Standard, and Luminescence**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
HSL stands for Hue (angle on color wheel: 0=red, 120=green, 240=blue), Saturation (0% grey to 100% full color), and Lightness (0% black to 100% white).

</details>

---

### Question 465

Which tag and attribute configure the small icon displayed in the browser tab (Favicon)?  

- [x] **A) <link rel="icon" href="favicon.ico">**
- [ ] **B) <meta name="icon" content="favicon.ico">**
- [ ] **C) <img src="favicon.ico" type="tab">**
- [ ] **D) <favicon src="favicon.ico">**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The '<link rel="icon" type="image/x-icon" href="favicon.ico">' element inside the <head> section specifies the favicon displayed next to the page title in browser tabs.

</details>

---


## Module 2: HTML5 Document Structure & DOM

### Question 466

What is the semantic purpose of the HTML5 <header> element?  

- [ ] **A) It replaces the <head> tag for metadata**
- [x] **B) It represents introductory content or a set of navigational links for its nearest sectioning ancestor or page**
- [ ] **C) It defines the primary heading <h1> of the page only**
- [ ] **D) It creates an HTTP request header**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The <header> element represents a container for introductory content (such as a logo, heading, author info) or navigational links for an article or page.

</details>

---

### Question 467

Which HTML5 element represents an independent, self-contained piece of content that could be distributed or syndicated separately (e.g. a blog post, forum post)?  

- [ ] **A) <section>**
- [x] **B) <article>**
- [ ] **C) <aside>**
- [ ] **D) <div>**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
<article> represents a self-contained composition in a document, page, application, or site that is intended to be independently distributable or reusable (e.g., news story, blog entry).

</details>

---

### Question 468

What does the HTML5 <aside> element represent?  

- [x] **A) Content that is separate and tangentially related to the content around it (like sidebars, pull quotes, or related links)**
- [ ] **B) Hidden comments not visible to screen readers**
- [ ] **C) Pop-up alert boxes**
- [ ] **D) Deprecated code**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The <aside> element represents a portion of a document whose content is only tangentially related to the document's main content, commonly presented as a sidebar or callout.

</details>

---

### Question 469

Which element wraps self-contained visual media (like an image, illustration, or code listing) together with an optional <figcaption>?  

- [ ] **A) <picture>**
- [x] **B) <figure>**
- [ ] **C) <media>**
- [ ] **D) <illustration>**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The <figure> element specifies self-contained content, frequently with a caption declared using the <figcaption> element.

</details>

---

### Question 470

What is the Document Object Model (DOM)?  

- [x] **A) A programming interface (API) that represents an HTML document as a tree of objects that can be manipulated programmatically**
- [ ] **B) A database management system for web browsers**
- [ ] **C) A CSS compilation tool**
- [ ] **D) A web hosting provider protocol**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The DOM represents an HTML/XML document in memory as a logical tree hierarchy of nodes (elements, attributes, text), enabling languages like JavaScript to dynamically modify content and structure.

</details>

---

### Question 471

Which HTML5 element represents a section of a page whose purpose is to provide navigation links?  

- [x] **A) <nav>**
- [ ] **B) <menu>**
- [ ] **C) <links>**
- [ ] **D) <dir>**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The <nav> element represents a major navigation block containing links either to other pages or to parts within the current page.

</details>

---

### Question 472

What is the semantic role of the <main> element in HTML5?  

- [x] **A) It specifies the dominant, central content unique to the document, excluding headers, footers, and sidebars**
- [ ] **B) It designates the main JavaScript execution entry point**
- [ ] **C) It wraps the entire <html> body**
- [ ] **D) It can appear multiple times inside an <article>**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The <main> element represents the dominant, unique content of the <body> of a document. It should not contain content repeated across pages (like headers, footers, or navigation).

</details>

---

### Question 473

In the DOM tree, what type of node represents the actual text inside an element (e.g. the text 'Hello' in <p>Hello</p>)?  

- [ ] **A) Element Node**
- [x] **B) Text Node**
- [ ] **C) Attribute Node**
- [ ] **D) Comment Node**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
In the W3C DOM model, plain text contained inside elements is represented by Text nodes (nodeType 3), which are child nodes of the parent Element node.

</details>

---

### Question 474

What is the purpose of semantic HTML elements over generic <div> and <span> tags?  

- [x] **A) They provide clear meaning to search engines, screen readers, assistive devices, and developers about the content's role**
- [ ] **B) They render with built-in 3D GPU animations**
- [ ] **C) They prevent web pages from being downloaded**
- [ ] **D) They speed up internet bandwidth**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Semantic tags describe their meaning and purpose to the browser, assistive technologies (screen readers for accessibility), search engine bots (SEO), and human maintainers.

</details>

---

### Question 475

Which HTML5 element represents a thematic grouping of content, typically with a heading?  

- [x] **A) <section>**
- [ ] **B) <span>**
- [ ] **C) <group>**
- [ ] **D) <block>**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
<section> represents a standalone generic section of a document that does not have a more specific semantic element to represent it, typically starting with a heading element (h1-h6).

</details>

---

### Question 476

What is the semantic purpose of the HTML5 '<time>' element?  

- [x] **A) Encodes a machine-readable date/time using the 'datetime' attribute while presenting human-readable text**
- [ ] **B) Displays an analog clock on the page**
- [ ] **C) Starts a JavaScript countdown timer**
- [ ] **D) Records user time spent on the page**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The <time> element provides machine-readable dates and times (via the 'datetime' attribute in ISO format, e.g. datetime="2026-09-14") to search engines and calendar apps.

</details>

---

### Question 477

Which HTML5 element represents text highlighted for reference or notation purposes due to its relevance in another context?  

- [x] **A) <mark>**
- [ ] **B) <highlight>**
- [ ] **C) <b>**
- [ ] **D) <em>**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The <mark> element represents text marked or highlighted for reference purposes (such as search result term matches), typically rendered with a yellow background.

</details>

---

### Question 478

Which HTML5 pair creates a native disclosure widget that the user can click to expand and collapse content without any JavaScript?  

- [x] **A) <details> and <summary>**
- [ ] **B) <accordion> and <tab>**
- [ ] **C) <collapse> and <header>**
- [ ] **D) <toggle> and <item>**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The <details> element creates an interactive disclosure widget, with <summary> defining the visible heading. Clicking the summary toggles the visibility of the remaining details content.

</details>

---

### Question 479

What is the difference between the HTML5 '<progress>' element and the '<meter>' element?  

- [x] **A) <progress> represents task completion progress (0% to 100%); <meter> represents a scalar measurement within a known range (like disk space, battery level, or exam grade)**
- [ ] **B) <meter> is animated; <progress> is static**
- [ ] **C) <progress> only works in forms**
- [ ] **D) There is no distinction**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
<progress> denotes the progress of an ongoing task. <meter> denotes a gauge or scalar measurement within a known minimum/maximum range (e.g. CPU usage, storage space).

</details>

---

### Question 480

Which DOM properties allow navigating to an element's parent, child, and sibling elements excluding whitespace text nodes?  

- [x] **A) parentElement, children, nextElementSibling, previousElementSibling**
- [ ] **B) parentNode, childNodes, nextSibling, previousSibling**
- [ ] **C) topElement, subElements, siblingLeft, siblingRight**
- [ ] **D) getParent(), getChildren(), getSibling()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The Element traversal properties (parentElement, children, nextElementSibling, previousElementSibling) only return Element nodes (nodeType 1), ignoring whitespace text nodes.

</details>

---


## Module 3: CSS Selectors & Cascading

### Question 481

Which CSS selector targets an element by its unique ID attribute?  

- [ ] **A) .header**
- [x] **B) #header**
- [ ] **C) *header**
- [ ] **D) @header**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
In CSS, the hash symbol '#' denotes an ID selector (e.g. #header matches <div id="header">). The period '.' denotes a class selector.

</details>

---

### Question 482

What is the difference between the descendant combinator (div p) and the child combinator (div > p)?  

- [x] **A) 'div p' matches any <p> nested at any depth inside a <div>; 'div > p' matches only <p> elements that are DIRECT children of a <div>**
- [ ] **B) 'div > p' matches all paragraphs; 'div p' matches only the first paragraph**
- [ ] **C) 'div > p' matches siblings only**
- [ ] **D) There is no difference**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The space character is the descendant selector (matching nested descendants at any depth). The '>' symbol is the child combinator, matching only direct immediate children.

</details>

---

### Question 483

Which attribute selector matches an element whose attribute value begins with a specific string?  

- [x] **A) [href^="https"]**
- [ ] **B) [href$="https"]**
- [ ] **C) [href*="https"]**
- [ ] **D) [href~="https"]**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'[attr^=val]' matches values starting with 'val'. '[attr$=val]' matches values ending with 'val'. '[attr*=val]' matches values containing the substring 'val'.

</details>

---

### Question 484

What is the CSS specificity order from HIGHEST to LOWEST?  

- [x] **A) Inline style > ID selector > Class/Attribute/Pseudo-class > Element/Pseudo-element**
- [ ] **B) Element > Class > ID > Inline style**
- [ ] **C) ID selector > Inline style > Element > Class**
- [ ] **D) Class > ID > Inline style > Element**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
CSS specificity is calculated in categories: Inline styles (1,0,0,0) > IDs (0,1,0,0) > Classes, attributes, and pseudo-classes (0,0,1,0) > Elements and pseudo-elements (0,0,0,1).

</details>

---

### Question 485

What does the adjacent sibling combinator '+' select in 'h2 + p'?  

- [ ] **A) All <p> elements inside an <h2>**
- [x] **B) The very first <p> element that immediately follows an <h2> at the same hierarchy level**
- [ ] **C) All <p> elements that share a parent with <h2>**
- [ ] **D) Both <h2> and <p> elements together**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The adjacent sibling combinator '+' matches an element that immediately follows the specified element and shares the same direct parent.

</details>

---

### Question 486

What happens when '!important' is added to a CSS property value declaration?  

- [x] **A) It overrides standard cascade specificity and applies the rule over other normal declarations**
- [ ] **B) It causes a compilation error in modern browsers**
- [ ] **C) It encrypts the CSS rule**
- [ ] **D) It only applies when the page is printed**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Adding '!important' gives the declaration priority over normal specificity rules in the cascade, overriding other author styles.

</details>

---

### Question 487

Which pseudo-class applies when the user hovers a pointing device over an element without activating it?  

- [ ] **A) :focus**
- [x] **B) :hover**
- [ ] **C) :active**
- [ ] **D) :visited**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The ':hover' CSS pseudo-class matches when the user interacts with an element with a pointing device (like hovering a mouse cursor over a button or link).

</details>

---

### Question 488

What is the difference between a pseudo-class (e.g. :hover) and a pseudo-element (e.g. ::before)?  

- [x] **A) Pseudo-classes select elements based on state; pseudo-elements style specific parts of an element or create virtual elements**
- [ ] **B) Pseudo-elements are written with single colons only**
- [ ] **C) Pseudo-classes only work on input fields**
- [ ] **D) There is no distinction in CSS3**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Pseudo-classes (:hover, :first-child, :checked) select elements based on state or DOM position. Pseudo-elements (::before, ::after, ::first-line) target sub-parts or generate decorative content.

</details>

---

### Question 489

What does the general sibling combinator '~' select in 'h1 ~ p'?  

- [x] **A) All <p> elements that follow an <h1> element anywhere as siblings under the same parent**
- [ ] **B) Only the immediate next sibling**
- [ ] **C) All child paragraphs**
- [ ] **D) Paragraphs with identical font size**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The general sibling combinator '~' selects all subsequent siblings of an element that match the selector, not just the immediately adjacent one.

</details>

---

### Question 490

Which pseudo-class selects every odd row in a table body?  

- [x] **A) tbody tr:nth-child(odd)**
- [ ] **B) tbody tr:nth-row(1)**
- [ ] **C) tbody tr:odd**
- [ ] **D) tbody tr:first-child(2)**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
':nth-child(odd)' (or ':nth-child(2n+1)') targets all odd-numbered elements in a sequence, creating zebra-striped tables.

</details>

---

### Question 491

What does the ':not()' pseudo-class do in CSS?  

- [x] **A) Matches elements that do NOT match the specified selector: input:not([type="checkbox"])**
- [ ] **B) Disables CSS styles**
- [ ] **C) Inverts the color palette**
- [ ] **D) Hides elements from screen readers**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The negation pseudo-class ':not(selector)' targets every element that does not match the selector passed as its parameter.

</details>

---

### Question 492

How do you declare and consume a CSS Custom Property (CSS variable)?  

- [x] **A) Declaration: --brand-color: #38bdf8; Consumption: color: var(--brand-color);**
- [ ] **B) Declaration: $brand-color: #38bdf8; Consumption: color: $brand-color;**
- [ ] **C) Declaration: @brand-color: #38bdf8; Consumption: color: @brand-color;**
- [ ] **D) Declaration: &brand-color = #38bdf8; Consumption: color: get(&brand-color);**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
CSS variables are declared with two leading hyphens (e.g. '--main-color: blue;') and consumed using the 'var(--main-color)' function, cascading down the DOM hierarchy.

</details>

---

### Question 493

What is the difference between ':is()' and ':where()' pseudo-classes regarding CSS specificity?  

- [x] **A) ':is()' takes the specificity of its most specific argument; ':where()' always has a specificity score of 0**
- [ ] **B) ':where()' has higher specificity than ':is()'**
- [ ] **C) ':is()' cannot accept class selectors**
- [ ] **D) There is no difference**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Both :is() and :where() group selectors concisely, but :where() deliberately zeroes out specificity (0-0-0), making rules easier to override downstream.

</details>

---

### Question 494

Which pseudo-element styles the portion of a document that has been selected/highlighted by the user?  

- [x] **A) ::selection**
- [ ] **B) ::highlight**
- [ ] **C) ::active-text**
- [ ] **D) ::selected**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The '::selection' pseudo-element applies styles (such as background and color) to the portion of text that has been highlighted or selected by the user.

</details>

---

### Question 495

Which selector matches any <button> element that has the 'disabled' attribute present, regardless of its value?  

- [x] **A) button[disabled]**
- [ ] **B) button:disabled-attribute**
- [ ] **C) button.disabled()**
- [ ] **D) button->disabled**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'button[disabled]' matches any button with the attribute present. ':disabled' is also available as a pseudo-class for disabled form controls.

</details>

---


## Module 4: HTML5 Forms & Controls

### Question 496

Which HTML5 input type automatically validates that the entered value conforms to an email address format upon form submission?  

- [ ] **A) <input type="mail">**
- [x] **B) <input type="email">**
- [ ] **C) <input type="text" validate="email">**
- [ ] **D) <input type="address">**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
<input type="email"> provides built-in browser validation, verifying that the input contains a valid email format, and displays an optimized email keyboard on mobile devices.

</details>

---

### Question 497

What attribute displays light grey hint text inside an input field that disappears when the user starts typing?  

- [ ] **A) value**
- [x] **B) placeholder**
- [ ] **C) tooltip**
- [ ] **D) hint**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The 'placeholder' attribute specifies a short hint (such as a sample format) that describes the expected value of an input field before the user enters text.

</details>

---

### Question 498

Which boolean attribute prevents a form from being submitted if the input field is empty?  

- [ ] **A) validate**
- [ ] **B) mandatory**
- [x] **C) required**
- [ ] **D) notnull**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `C`

**Explanation:**  
The 'required' attribute specifies that an input field must be filled out before the browser permits the enclosing form to be submitted.

</details>

---

### Question 499

Which HTML5 element provides a predefined list of autocomplete options for an <input> element via its 'list' attribute?  

- [ ] **A) <select>**
- [x] **B) <datalist>**
- [ ] **C) <autocomplete>**
- [ ] **D) <optionlist>**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The <datalist> tag contains <option> items that offer suggested autocomplete values for an associated <input list="id"> without restricting the user from typing custom text.

</details>

---

### Question 500

Which input type provides a graphical slider control for selecting a numeric value within a range?  

- [ ] **A) <input type="slider">**
- [x] **B) <input type="range">**
- [ ] **C) <input type="number">**
- [ ] **D) <input type="scroll">**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
<input type="range"> renders a visual slider bar control for choosing an imprecise numeric value between 'min' and 'max' bounds.

</details>

---

### Question 501

What attribute allows you to enforce a custom regular expression pattern on an <input> element?  

- [ ] **A) regex**
- [x] **B) pattern**
- [ ] **C) match**
- [ ] **D) validate**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The 'pattern' attribute specifies a JavaScript regular expression that the input field's value must match against for the input to be considered valid upon submission.

</details>

---

### Question 502

Which attribute automatically focuses the cursor on a specified input field when the web page finishes loading?  

- [ ] **A) active**
- [x] **B) autofocus**
- [ ] **C) focus-on-load**
- [ ] **D) selected**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The 'autofocus' boolean attribute automatically places the input cursor into the target element as soon as the page loads (only one element per page should have it).

</details>

---

### Question 503

What input type renders a native date picker control allowing the user to select day, month, and year?  

- [ ] **A) <input type="calendar">**
- [x] **B) <input type="date">**
- [ ] **C) <input type="datetime-local">**
- [ ] **D) <input type="time">**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
<input type="date"> displays a browser-native date picker widget for inputting dates formatted in the ISO YYYY-MM-DD standard.

</details>

---

### Question 504

What attributes define the minimum value, maximum value, and increment intervals for an <input type="number">?  

- [ ] **A) low, high, and interval**
- [x] **B) min, max, and step**
- [ ] **C) start, end, and skip**
- [ ] **D) floor, ceiling, and delta**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
'min' defines the lower bound, 'max' defines the upper bound, and 'step' sets the legal numeric step interval (e.g. step="0.5").

</details>

---

### Question 505

Which attribute can be added to a <form> or submit button to bypass native HTML5 browser validation upon submit?  

- [x] **A) novalidate (or formnovalidate)**
- [ ] **B) skip-validation**
- [ ] **C) disable-check**
- [ ] **D) no-pattern**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Adding 'novalidate' to the <form> element or 'formnovalidate' to a submit button instructs the browser to skip constraint validation when submitting the form.

</details>

---

### Question 506

What input type provides an optimized virtual telephone keypad on mobile devices?  

- [x] **A) <input type="tel">**
- [ ] **B) <input type="phone">**
- [ ] **C) <input type="mobile">**
- [ ] **D) <input type="digits">**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
<input type="tel"> designates a telephone number input and triggers a numeric telephone keypad on smartphones and mobile tablets.

</details>

---

### Question 507

Which attribute on an <input type="file"> allows users to select more than one file for upload?  

- [x] **A) multiple**
- [ ] **B) multi-select**
- [ ] **C) allow-many**
- [ ] **D) batch**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The 'multiple' boolean attribute allows users to select multiple files in an input type="file" or multiple options in a <select> element.

</details>

---

### Question 508

Which input type renders a search text box that typically includes a clear (x) button?  

- [x] **A) <input type="search">**
- [ ] **B) <input type="query">**
- [ ] **C) <input type="find">**
- [ ] **D) <input type="lookup">**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
<input type="search"> is styled specifically for search queries and frequently renders with an integrated 'x' clear button across browsers.

</details>

---

### Question 509

How do you disable browser autocomplete suggestions on a specific form or input field?  

- [x] **A) autocomplete="off"**
- [ ] **B) no-autocomplete**
- [ ] **C) suggestions="disabled"**
- [ ] **D) disable-cache="true"**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Setting 'autocomplete="off"' on a <form> or <input> informs the browser not to suggest or auto-fill previous values entered by the user.

</details>

---

### Question 510

Which attributes define the visible text dimensions of a '<textarea>' element?  

- [x] **A) rows and cols**
- [ ] **B) width and height**
- [ ] **C) lines and characters**
- [ ] **D) size and length**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'rows' specifies the visible number of text lines, and 'cols' specifies the average visible character width of a <textarea>.

</details>

---


## Module 5: Form Validation & Accessibility

### Question 511

How do you associate a <label> element with an <input> element so screen readers can identify it and clicking the label focuses the input?  

- [x] **A) Set the label's 'for' attribute to match the input's 'id' attribute**
- [ ] **B) Set the label's 'name' attribute to match the input's 'name'**
- [ ] **C) Set the input's 'label' attribute to the label text**
- [ ] **D) Place the label after the input tag with no attributes**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The 'for' attribute of a <label> must match the unique 'id' of the corresponding input control: <label for="userEmail">Email</label><input id="userEmail">.

</details>

---

### Question 512

Which CSS pseudo-class matches form input elements whose values satisfy all validation constraints?  

- [ ] **A) :correct**
- [x] **B) :valid**
- [ ] **C) :success**
- [ ] **D) :accepted**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The ':valid' CSS pseudo-class matches any form control whose current contents pass all HTML5 constraint validations. ':invalid' matches elements failing validation.

</details>

---

### Question 513

In the JavaScript Constraint Validation API, what method checks if an element satisfies its validity constraints without submitting the form?  

- [x] **A) checkValidity()**
- [ ] **B) testInput()**
- [ ] **C) validateNow()**
- [ ] **D) verifyRules()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
inputElement.checkValidity() returns true if the element satisfies all validity constraints; if invalid, it fires an 'invalid' DOM event on the element and returns false.

</details>

---

### Question 514

What JavaScript method sets a custom validation error message on a form control, marking it invalid?  

- [ ] **A) setErrorMessage()**
- [x] **B) setCustomValidity(message)**
- [ ] **C) markInvalid(message)**
- [ ] **D) addValidationError()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Calling 'setCustomValidity("Error text")' marks the element as invalid and sets the error message displayed in the browser's tooltip. Passing an empty string '""' marks it valid.

</details>

---

### Question 515

Which property of the 'validity' object (input.validity) is true if an input fails its 'pattern' attribute regex?  

- [ ] **A) validity.typeMismatch**
- [x] **B) validity.patternMismatch**
- [ ] **C) validity.rangeOverflow**
- [ ] **D) validity.valueMissing**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
'validity.patternMismatch' is true when the input's value does not conform to the regular expression specified in the 'pattern' attribute.

</details>

---

### Question 516

What does ARIA stand for in web accessibility?  

- [x] **A) Accessible Rich Internet Applications**
- [ ] **B) Advanced Responsive Interface Architecture**
- [ ] **C) Automated Rendering Information API**
- [ ] **D) Assistive Reader Integration Algorithm**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
W3C WAI-ARIA stands for Accessible Rich Internet Applications, defining roles, states, and properties (e.g. aria-required, aria-hidden) to make dynamic web content accessible.

</details>

---

### Question 517

Which ARIA attribute informs screen readers that an input field is currently in an invalid state?  

- [x] **A) aria-invalid="true"**
- [ ] **B) aria-error="active"**
- [ ] **C) aria-status="fail"**
- [ ] **D) aria-alert="yes"**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'aria-invalid="true"' announces to screen readers that the value entered into the form field does not conform to the expected format or rules.

</details>

---

### Question 518

Which property on the validity object is true if a required field is left empty?  

- [ ] **A) validity.emptyField**
- [x] **B) validity.valueMissing**
- [ ] **C) validity.noInput**
- [ ] **D) validity.requiredError**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
'validity.valueMissing' is true when an element has the 'required' attribute but contains no user value upon validation.

</details>

---

### Question 519

Why is client-side HTML5 validation NOT sufficient on its own for web security?  

- [x] **A) Because client-side validation can be bypassed, disabled, or intercepted by attackers; all input MUST also be re-validated on the server**
- [ ] **B) Because HTML5 validation only works on Chrome**
- [ ] **C) Because regex slows down database queries**
- [ ] **D) Because client validation drops SSL encryption**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Client-side validation provides immediate, friendly user feedback but can easily be bypassed by manipulating HTTP requests or turning off scripts. Server-side validation is non-negotiable for security.

</details>

---

### Question 520

What does the method reportValidity() do in modern browsers?  

- [x] **A) Evaluates constraints, returns a boolean, AND displays the browser's native error bubble tooltip to the user if invalid**
- [ ] **B) Sends an email report to the webmaster**
- [ ] **C) Clears all invalid form fields**
- [ ] **D) Logs validation statistics to Google Analytics**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
reportValidity() checks whether the element satisfies its constraints (returning true or false) and actively displays the browser's native validation popup message if invalid.

</details>

---

### Question 521

Which property of 'input.validity' is true if a user types non-numeric characters into an <input type="number">?  

- [x] **A) validity.badInput**
- [ ] **B) validity.typeMismatch**
- [ ] **C) validity.stepMismatch**
- [ ] **D) validity.rangeUnderflow**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'validity.badInput' is true when the browser cannot convert user input into the expected data type (such as entering letters into an input type="number").

</details>

---

### Question 522

Which property of 'input.validity' is true if a custom validation error was set using setCustomValidity()?  

- [x] **A) validity.customError**
- [ ] **B) validity.customInvalid**
- [ ] **C) validity.userError**
- [ ] **D) validity.manualError**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'validity.customError' returns true whenever setCustomValidity() was called with a non-empty error message string.

</details>

---

### Question 523

What is the difference between 'aria-live="polite"' and 'aria-live="assertive"'?  

- [x] **A) 'polite' waits until the screen reader finishes speaking before announcing updates; 'assertive' interrupts current speech immediately to announce the dynamic change**
- [ ] **B) 'polite' uses lower volume**
- [ ] **C) 'assertive' plays an alarm sound**
- [ ] **D) There is no difference**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
ARIA live regions notify screen readers of dynamic UI changes. 'polite' queues notifications until speech pauses; 'assertive' interrupts immediately for urgent alerts.

</details>

---

### Question 524

Which HTML elements should be used to group related form controls and assign a caption to the group for accessibility?  

- [x] **A) <fieldset> and <legend>**
- [ ] **B) <group> and <title>**
- [ ] **C) <panel> and <header>**
- [ ] **D) <div> and <span>**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The <fieldset> element groups related form controls (like a group of radio buttons or address fields), and <legend> provides an accessible caption read by screen readers.

</details>

---

### Question 525

What CSS pseudo-class matches optional form inputs that do NOT have the 'required' attribute?  

- [x] **A) :optional**
- [ ] **B) :not-required**
- [ ] **C) :arbitrary**
- [ ] **D) :empty**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The ':optional' pseudo-class matches any form control that does not have the 'required' attribute set.

</details>

---


## Module 6: JavaScript Fundamentals & DOM

### Question 526

What is the modern standard method for selecting the FIRST element in the DOM matching a specified CSS selector string?  

- [x] **A) document.querySelector(selector)**
- [ ] **B) document.querySelectorAll(selector)**
- [ ] **C) document.getElementBySelector(selector)**
- [ ] **D) document.findFirst(selector)**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
document.querySelector(selector) returns the first Element that matches the specified CSS selector group, or null if no matches are found.

</details>

---

### Question 527

What does document.querySelectorAll(selector) return?  

- [x] **A) A static NodeList containing all matching Element nodes**
- [ ] **B) A live HTMLCollection that updates dynamically**
- [ ] **C) A JavaScript Array with map and filter methods**
- [ ] **D) A JSON string of attributes**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
querySelectorAll returns a static (non-live) NodeList representing a snapshot of all elements in the document matching the given CSS selectors.

</details>

---

### Question 528

What is the key difference between 'let' and 'var' declarations in JavaScript?  

- [x] **A) 'let' is block-scoped and not hoisted with initialization; 'var' is function-scoped and hoisted with undefined**
- [ ] **B) 'let' variables cannot be reassigned**
- [ ] **C) 'var' cannot be used inside loops**
- [ ] **D) 'let' is only supported in Node.js**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'let' provides block scoping (confined within '{ ... }' blocks) and enforces a Temporal Dead Zone (TDZ). 'var' is hoisted to the top of its enclosing function scope and defaults to undefined.

</details>

---

### Question 529

Which property is safest to use when inserting user-provided text into a DOM element to prevent Cross-Site Scripting (XSS)?  

- [ ] **A) innerHTML**
- [x] **B) textContent**
- [ ] **C) outerHTML**
- [ ] **D) document.write()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
textContent inserts text as raw text without parsing it as HTML markup, safely escaping characters like '<' and '&' and preventing script injection.

</details>

---

### Question 530

How do you add a CSS class 'highlight' to an element using modern DOM methods?  

- [x] **A) element.classList.add('highlight');**
- [ ] **B) element.className += ' highlight';**
- [ ] **C) element.addClass('highlight');**
- [ ] **D) element.style.class = 'highlight';**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The 'element.classList' API provides clean, standardized methods: add(), remove(), toggle(), and contains() for managing CSS classes without manual string manipulation.

</details>

---

### Question 531

What method creates a new HTML element node in memory before appending it to the DOM tree?  

- [x] **A) document.createElement('tagName')**
- [ ] **B) document.newElement('tagName')**
- [ ] **C) document.buildNode('tagName')**
- [ ] **D) window.makeElement('tagName')**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
document.createElement(tagName) creates the HTML element specified by tagName, ready to have attributes set and be attached to the tree via appendChild() or append().

</details>

---

### Question 532

What does the strict equality operator '===' compare in JavaScript?  

- [x] **A) Compares both value and type without performing implicit type coercion**
- [ ] **B) Converts types automatically before comparing**
- [ ] **C) Compares only object memory addresses**
- [ ] **D) Always returns false for strings**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The strict equality operator '===' evaluates both value and data type without type conversion. (e.g. 5 === '5' is false, whereas 5 == '5' is true).

</details>

---

### Question 533

What method removes a child element from its parent node in the DOM?  

- [x] **A) parentNode.removeChild(childNode)**
- [ ] **B) document.delete(childNode)**
- [ ] **C) childNode.destroy()**
- [ ] **D) parentNode.detach(childNode)**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
parentNode.removeChild(childNode) removes the specified child node from the DOM tree and returns the removed node.

</details>

---

### Question 534

What happens when declaring a variable with 'const' in JavaScript?  

- [x] **A) The variable binding cannot be reassigned after initialization**
- [ ] **B) The properties of an object assigned to const are completely immutable and frozen**
- [ ] **C) It can only hold primitive numbers**
- [ ] **D) It can be declared without an initial value**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'const' creates an immutable variable binding (it cannot be reassigned with '='). However, if the value is an object or array, its internal properties or items can still be mutated.

</details>

---

### Question 535

How do you set an inline style property (e.g. color to blue) on a DOM element in JavaScript?  

- [x] **A) element.style.color = 'blue';**
- [ ] **B) element.css('color', 'blue');**
- [ ] **C) element.setAttribute('style-color', 'blue');**
- [ ] **D) element.color = 'blue';**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Inline styles are set via the 'element.style' object using camelCase property names (e.g. element.style.color = 'blue'; element.style.backgroundColor = 'red').

</details>

---

### Question 536

How does the 'this' keyword behave inside an ES6 Arrow Function '() => {}' compared to a standard function?  

- [x] **A) Arrow functions do not bind their own 'this'; they inherit 'this' lexically from their enclosing execution context**
- [ ] **B) 'this' in arrow functions always refers to the window object**
- [ ] **C) Arrow functions cannot use 'this'**
- [ ] **D) 'this' refers to the calling button**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Arrow functions capture the 'this' value of the enclosing lexical scope at the time they are created, eliminating issues where callback functions lose outer context.

</details>

---

### Question 537

How do you access custom data attributes (e.g. '<div data-user-id="42">') on an element in JavaScript?  

- [x] **A) element.dataset.userId**
- [ ] **B) element.data.userId**
- [ ] **C) element.customData('userId')**
- [ ] **D) element.attributes.userId**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The 'dataset' property exposes all 'data-*' attributes on the element in camelCase: 'data-user-id' becomes accessible via 'element.dataset.userId'.

</details>

---

### Question 538

Which DOM method traverses UP the tree from the current element to find the closest ancestor matching a CSS selector?  

- [x] **A) element.closest(selector)**
- [ ] **B) element.findParent(selector)**
- [ ] **C) element.parentElementMatching(selector)**
- [ ] **D) element.up(selector)**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'element.closest(selector)' inspects the current element and traverses up through its ancestors, returning the first element that matches the specified selector, or null.

</details>

---

### Question 539

Which array method transforms each element in an array and returns a new array with the mapped results?  

- [x] **A) Array.prototype.map()**
- [ ] **B) Array.prototype.forEach()**
- [ ] **C) Array.prototype.filter()**
- [ ] **D) Array.prototype.reduce()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
map() calls a provided callback function once for each element in an array and constructs a new array from the returned values.

</details>

---

### Question 540

What feature in ES6 allows embedding expressions and multi-line strings using backticks (`` ` ``)?  

- [x] **A) Template Literals**
- [ ] **B) String Formatters**
- [ ] **C) Interpolated Text**
- [ ] **D) Dynamic Strings**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Template literals (enclosed in backticks) support multi-line strings and string interpolation with embedded expressions: `${expression}`.

</details>

---


## Module 7: DOM Event Handling

### Question 541

What standard method registers an event handler function on a DOM element?  

- [x] **A) element.addEventListener('click', handler);**
- [ ] **B) element.attachEvent('onclick', handler);**
- [ ] **C) element.registerEvent('click', handler);**
- [ ] **D) element.bind('click', handler);**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
addEventListener(type, listener [, options]) is the standard W3C method for attaching an event listener to a target DOM node without overwriting existing listeners.

</details>

---

### Question 542

What are the three sequential phases of DOM event propagation?  

- [x] **A) Capturing phase -> Target phase -> Bubbling phase**
- [ ] **B) Bubbling phase -> Target phase -> Capturing phase**
- [ ] **C) Capture phase -> Commit phase -> Render phase**
- [ ] **D) Dispatch phase -> Execute phase -> Dispose phase**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Event flow travels: 1. Capturing phase (traveling down from Window to the target), 2. Target phase (executing on the target element), 3. Bubbling phase (traveling up from target back to Window).

</details>

---

### Question 543

What method prevents the browser's default action associated with an event (such as navigating when clicking a link or submitting a form)?  

- [x] **A) event.preventDefault()**
- [ ] **B) event.stopPropagation()**
- [ ] **C) event.cancelBubble()**
- [ ] **D) event.halt()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
event.preventDefault() cancels the default behavior of the event without stopping its propagation along the DOM tree.

</details>

---

### Question 544

What method stops an event from bubbling or capturing further up or down the DOM hierarchy?  

- [x] **A) event.stopPropagation()**
- [ ] **B) event.preventDefault()**
- [ ] **C) event.exit()**
- [ ] **D) event.terminate()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
event.stopPropagation() prevents further propagation of the current event in the capturing and bubbling phases.

</details>

---

### Question 545

What is the difference between 'event.target' and 'event.currentTarget' inside an event handler?  

- [x] **A) event.target is the element that actually triggered the event; event.currentTarget is the element to which the event handler is currently attached**
- [ ] **B) event.target is always the document window**
- [ ] **C) event.currentTarget is the next element in the DOM**
- [ ] **D) There is no difference**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
event.target refers to the innermost element where the event originated (e.g. a clicked button). event.currentTarget refers to the element that currently owns the active event listener.

</details>

---

### Question 546

What is 'Event Delegation' in JavaScript?  

- [x] **A) Attaching a single event listener to a common parent element to handle events for all current and future child elements by leveraging event bubbling**
- [ ] **B) Handing off event processing to a background server thread**
- [ ] **C) Cloning event handlers to every element on the page**
- [ ] **D) Using setTimeout to delay event execution**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Event delegation is a design pattern where an event listener is placed on a parent container to manage events triggered by any descendant, relying on bubbling and event.target.

</details>

---

### Question 547

How do you configure an event listener to execute during the CAPTURING phase instead of the default bubbling phase?  

- [x] **A) Pass true (or { capture: true }) as the third argument to addEventListener**
- [ ] **B) Prefix the event name with 'capture:'**
- [ ] **C) Use element.captureEventListener()**
- [ ] **D) Set event.phase = 'capturing'**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The third argument of addEventListener specifies options or 'useCapture'. Passing 'true' (or '{ capture: true }') causes the handler to fire during the capture phase.

</details>

---

### Question 548

Which event fires when the initial HTML document has been completely parsed and DOM tree built, without waiting for stylesheets and images to finish loading?  

- [x] **A) DOMContentLoaded**
- [ ] **B) load**
- [ ] **C) readystatechange**
- [ ] **D) init**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'DOMContentLoaded' fires as soon as the DOM tree is constructed. The 'load' event fires later, once all stylesheets, images, and sub-resources have completely finished downloading.

</details>

---

### Question 549

What method removes an event listener previously added with addEventListener?  

- [x] **A) element.removeEventListener(type, handler);**
- [ ] **B) element.detachEvent(type, handler);**
- [ ] **C) element.deleteEventListener(type);**
- [ ] **D) element.unbind(type);**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
removeEventListener(type, handler) detaches the listener. It requires an exact reference to the original function handler (anonymous functions cannot be detached this way).

</details>

---

### Question 550

What method stops the event immediately and prevents ANY other listeners on the same element from being executed?  

- [x] **A) event.stopImmediatePropagation()**
- [ ] **B) event.stopPropagation()**
- [ ] **C) event.preventDefault()**
- [ ] **D) event.break()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
event.stopImmediatePropagation() stops the event propagation to parent elements AND prevents any remaining event listeners registered on the same element from being invoked.

</details>

---

### Question 551

How do you create and dispatch a custom event with custom data in modern JavaScript?  

- [x] **A) const ev = new CustomEvent('userLogin', { detail: { id: 10 } }); element.dispatchEvent(ev);**
- [ ] **B) element.fireEvent('userLogin', { id: 10 });**
- [ ] **C) document.trigger('userLogin', 10);**
- [ ] **D) window.broadcast('userLogin', 10);**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'new CustomEvent(name, { detail: data })' initializes a custom event. Calling 'element.dispatchEvent(event)' fires the event through standard DOM event propagation.

</details>

---

### Question 552

What does the option '{ once: true }' do when passed to addEventListener?  

- [x] **A) Automatically removes the event listener after it is triggered the first time**
- [ ] **B) Prevents other listeners from firing**
- [ ] **C) Limits the page to one click per second**
- [ ] **D) Disables event bubbling**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Passing '{ once: true }' in the addEventListener options object causes the listener to be invoked at most once and then automatically detached.

</details>

---

### Question 553

What is the benefit of passing '{ passive: true }' to touch or scroll event listeners?  

- [x] **A) Informs the browser that the handler will NEVER call preventDefault(), allowing the browser to scroll smoothly on the compositor thread without waiting for JS execution**
- [ ] **B) Delays execution of the event handler**
- [ ] **C) Makes touch events work with a mouse**
- [ ] **D) Prevents CPU sleep**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Passive event listeners promise that preventDefault() will not be called, enabling browser rendering engines to perform butter-smooth scrolling and touch interactions asynchronously.

</details>

---

### Question 554

What method returns the array of all DOM elements traversed by an event during propagation?  

- [x] **A) event.composedPath()**
- [ ] **B) event.path**
- [ ] **C) event.getElements()**
- [ ] **D) event.ancestorList()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'event.composedPath()' returns the event's path as an array of EventTarget objects through which the event bubbles, from source to Window.

</details>

---

### Question 555

What is 'Debouncing' an event handler (such as a search input or window resize listener)?  

- [x] **A) Delaying the execution of a function until a specified idle duration has elapsed since the last time the event was triggered**
- [ ] **B) Running the function at regular intervals**
- [ ] **C) Canceling the event permanently**
- [ ] **D) Disabling keyboard input**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Debouncing ensures that a function is not executed until a quiet period has passed since the last event invocation, preventing costly repetitive operations during rapid typing or resizing.

</details>

---


## Module 8: CSS3 Box Model & Layout

### Question 556

What are the four components of the standard CSS Box Model from inside out?  

- [x] **A) Content -> Padding -> Border -> Margin**
- [ ] **B) Content -> Margin -> Border -> Padding**
- [ ] **C) Margin -> Border -> Padding -> Content**
- [ ] **D) Content -> Outline -> Border -> Margin**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
From innermost to outermost, the CSS box model consists of: Content area, Padding (space around content), Border (around padding), and Margin (clearance outside border).

</details>

---

### Question 557

What does the CSS property 'box-sizing: border-box' do?  

- [x] **A) Includes padding and border within the specified element's total width and height calculations**
- [ ] **B) Adds a 3D border around the box**
- [ ] **C) Forces the element to render as a table cell**
- [ ] **D) Removes all margins from the element**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
With 'border-box', an element's declared width and height include both content, padding, and border, preventing layout breakage when adding padding or borders.

</details>

---

### Question 558

Which CSS display property turns a container into a flexible flexbox layout context?  

- [x] **A) display: flex;**
- [ ] **B) display: flexbox;**
- [ ] **C) flex-container: true;**
- [ ] **D) display: grid-flex;**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'display: flex' creates a flex container, establishing a flex formatting context for all its direct children.

</details>

---

### Question 559

In CSS Flexbox, which property aligns flex items along the MAIN axis?  

- [x] **A) justify-content**
- [ ] **B) align-items**
- [ ] **C) align-content**
- [ ] **D) flex-direction**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'justify-content' aligns flex items along the main axis (e.g. flex-start, center, space-between, space-around). 'align-items' aligns items along the cross axis.

</details>

---

### Question 560

Which CSS property rounds the outer corners of an element's border?  

- [x] **A) border-radius**
- [ ] **B) corner-curve**
- [ ] **C) border-curve**
- [ ] **D) box-round**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'border-radius' specifies the radius of the element's corners, allowing rounded corners or pill/circular shapes (e.g. border-radius: 50%).

</details>

---

### Question 561

What is the difference between 'display: none' and 'visibility: hidden'?  

- [x] **A) 'display: none' removes the element entirely from document flow; 'visibility: hidden' hides the element while still reserving its physical space in layout**
- [ ] **B) 'visibility: hidden' removes the element from the DOM**
- [ ] **C) 'display: none' only hides background colors**
- [ ] **D) There is no difference**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'display: none' causes the element not to be rendered at all, taking 0 space. 'visibility: hidden' makes the element invisible, but preserves its width and height in the layout flow.

</details>

---

### Question 562

In Flexbox, which property controls whether flex items are forced onto a single line or can wrap onto multiple lines?  

- [x] **A) flex-wrap**
- [ ] **B) flex-flow**
- [ ] **C) line-wrap**
- [ ] **D) white-space**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'flex-wrap: wrap' allows flex items to wrap onto multiple lines as needed, instead of shrinking to fit on a single line (nowrap).

</details>

---

### Question 563

Which CSS property defines the transition animation between different property states?  

- [x] **A) transition**
- [ ] **B) transform**
- [ ] **C) keyframe**
- [ ] **D) morph**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The 'transition' shorthand property specifies the CSS property to animate, duration, timing function, and delay (e.g. transition: all 0.3s ease-in-out).

</details>

---

### Question 564

What CSS property applies 2D or 3D transformations like rotating, scaling, or skewing an element?  

- [x] **A) transform (e.g. transform: rotate(45deg);)**
- [ ] **B) transition**
- [ ] **C) animation**
- [ ] **D) perspective**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The 'transform' property modifies the visual rendering of an element (rotate, scale, translate, skew) without affecting the normal document flow.

</details>

---

### Question 565

What CSS property adds shadow effects around an element's frame?  

- [x] **A) box-shadow**
- [ ] **B) text-shadow**
- [ ] **C) element-shadow**
- [ ] **D) border-shadow**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'box-shadow' adds shadow effects around an element's box using offset-x, offset-y, blur-radius, spread-radius, and color.

</details>

---

### Question 566

Which CSS Grid declaration creates responsive columns that automatically fit as many minimum 250px columns as possible into the container?  

- [x] **A) grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));**
- [ ] **B) grid-columns: auto 250px;**
- [ ] **C) display: grid-responsive(250px);**
- [ ] **D) grid-template-columns: fit(250px);**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'repeat(auto-fit, minmax(250px, 1fr))' generates an adaptive grid layout that fits as many columns of at least 250px into the available space, expanding them to fill remaining room.

</details>

---

### Question 567

What is the CSS 'gap' property used for in Flexbox and Grid containers?  

- [x] **A) Defines the spacing (gutters) between grid cells or flex items without applying margin to outer edges**
- [ ] **B) Sets empty space around the outside of the page**
- [ ] **C) Creates holes inside text**
- [ ] **D) Sets font letter spacing**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The 'gap' (row-gap and column-gap) property sets gutter spacing between adjacent flex or grid items, replacing hacky margin offsets.

</details>

---

### Question 568

What is a Stacking Context in CSS?  

- [x] **A) A 3D conceptualization of HTML elements along an imaginary Z-axis, determining which elements visually overlap in front of others**
- [ ] **B) The order of CSS stylesheets in <head>**
- [ ] **C) A JavaScript call stack**
- [ ] **D) A flexbox direction model**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Stacking contexts manage element layering on the z-axis. They are formed by conditions like position (relative/absolute) with z-index, opacity < 1, transform, or filter.

</details>

---

### Question 569

Which CSS at-rule is used to define keyframe stages in CSS animations?  

- [x] **A) @keyframes animationName { 0% { ... } 100% { ... } }**
- [ ] **B) @animation animationName { ... }**
- [ ] **C) @frames animationName { ... }**
- [ ] **D) @transitions animationName { ... }**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The '@keyframes' rule defines the CSS properties that change over the course of an animation cycle using percentage markers (0% to 100% or from/to).

</details>

---

### Question 570

What is the default value of the CSS 'position' property?  

- [x] **A) static**
- [ ] **B) relative**
- [ ] **C) absolute**
- [ ] **D) fixed**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'static' is the default CSS positioning. Static elements render in normal document flow and ignore top, right, bottom, left, and z-index properties.

</details>

---


## Module 9: Responsive Web Design

### Question 571

What is the purpose of the viewport meta tag '<meta name="viewport" content="width=device-width, initial-scale=1.0">'?  

- [x] **A) Sets the viewport width to match the device's physical screen width and establishes an initial 1:1 zoom ratio on mobile browsers**
- [ ] **B) Forces desktop monitor dimensions on smartphones**
- [ ] **C) Prevents users from scrolling**
- [ ] **D) Enables offline website caching**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The viewport meta tag instructs mobile browsers to render the page at the screen's actual device width and scale it 100%, preventing mobile browsers from shrinking pages down as if on desktop.

</details>

---

### Question 572

Which CSS at-rule is used to apply style blocks only when specified device criteria (like screen width or orientation) are met?  

- [x] **A) @media**
- [ ] **B) @responsive**
- [ ] **C) @device**
- [ ] **D) @screen**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The '@media' rule declares media queries, conditionally applying CSS rules based on features like min-width, max-width, resolution, or orientation.

</details>

---

### Question 573

What does the media query '@media screen and (max-width: 768px)' target?  

- [x] **A) Screens with a viewport width of 768 pixels or narrower (typically tablets and mobile phones)**
- [ ] **B) Screens wider than 768 pixels only**
- [ ] **C) Printers printing pages under 768mm wide**
- [ ] **D) Screens with exactly 768 physical pixels**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'(max-width: 768px)' activates the enclosed styles only when the viewport width is less than or equal to 768 pixels.

</details>

---

### Question 574

What is the 'Mobile-First' responsive design approach?  

- [x] **A) Designing base CSS styles for mobile viewports first, using min-width media queries to progressively enhance the layout for larger tablet and desktop screens**
- [ ] **B) Designing only for smartphones and ignoring desktop computers**
- [ ] **C) Writing native iOS Objective-C code before HTML**
- [ ] **D) Compressing all images to under 10 KB**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Mobile-first establishes base default styles for small screens without media queries, then uses progressive '@media (min-width: ...)' queries to enhance layouts for larger displays.

</details>

---

### Question 575

What is the difference between 'rem' and 'em' units in CSS typography?  

- [x] **A) 'rem' is relative to the root <html> font size; 'em' is relative to the font size of the immediate parent element**
- [ ] **B) 'rem' is absolute pixels; 'em' is relative**
- [ ] **C) 'em' is relative to the root; 'rem' is relative to parent**
- [ ] **D) There is no difference**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'rem' (root em) always scales relative to the root <html> element's font size (preventing compounding issues). 'em' scales relative to the immediate element's inherited parent font-size.

</details>

---

### Question 576

What do the viewport units 'vw' and 'vh' represent?  

- [x] **A) 1% of the viewport width and 1% of the viewport height, respectively**
- [ ] **B) Virtual width and virtual height in pixels**
- [ ] **C) Vector weight and vector hue**
- [ ] **D) Video window measurements**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'1vw' equals 1% of the width of the current viewport, and '1vh' equals 1% of the height of the current viewport.

</details>

---

### Question 577

Which media type targets content specifically when being printed or formatted in print preview?  

- [x] **A) @media print**
- [ ] **B) @media paper**
- [ ] **C) @media printer**
- [ ] **D) @media hardcopy**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'@media print' applies styles specifically for printing (such as hiding navigation bars, switching backgrounds to white, and displaying link URLs).

</details>

---

### Question 578

How do you make an image responsive so that it never overflows its container but preserves its aspect ratio?  

- [x] **A) img { max-width: 100%; height: auto; }**
- [ ] **B) img { width: 100vw; height: 100vh; }**
- [ ] **C) img { width: auto; height: 100%; }**
- [ ] **D) img { resize: both; }**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Setting 'max-width: 100%; height: auto;' ensures the image scales down proportionally if its container shrinks, without stretching or exceeding container bounds.

</details>

---

### Question 579

What media feature detects whether a device is in landscape or portrait orientation?  

- [x] **A) orientation (e.g. @media (orientation: landscape))**
- [ ] **B) device-aspect**
- [ ] **C) screen-direction**
- [ ] **D) rotation**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The 'orientation' media feature matches based on whether the viewport width is greater than its height ('landscape') or height is greater than or equal to width ('portrait').

</details>

---

### Question 580

What are 'Breakpoints' in responsive web design?  

- [x] **A) Specific viewport widths (e.g. 576px, 768px, 992px, 1200px) where the layout reorganizes via media queries for optimal viewing**
- [ ] **B) Points in JavaScript where the debugger pauses**
- [ ] **C) Network disconnection points**
- [ ] **D) Page load time timeouts**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Breakpoints are predefined screen width thresholds where media query rules alter navigation, columns, or font sizing to optimize UX across different device classes.

</details>

---

### Question 581

Which media query feature detects whether the operating system is set to Dark Mode?  

- [x] **A) @media (prefers-color-scheme: dark)**
- [ ] **B) @media (theme: dark)**
- [ ] **C) @media (color-mode: night)**
- [ ] **D) @media (os-appearance: dark)**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'prefers-color-scheme: dark' is a CSS media feature that matches when the user's operating system or browser theme is configured for dark appearance.

</details>

---

### Question 582

What does the CSS feature query '@supports (display: grid)' do?  

- [x] **A) Conditionally applies CSS blocks only if the user's browser supports the specified CSS property/value pair**
- [ ] **B) Downloads polyfills automatically**
- [ ] **C) Submits browser bug reports**
- [ ] **D) Checks operating system specs**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The '@supports' at-rule provides native CSS feature detection, applying styles only if the browser engine supports the queried CSS capability.

</details>

---

### Question 583

Which HTML5 element provides art direction by allowing multiple '<source>' elements with media queries for different image crops on mobile vs desktop?  

- [x] **A) <picture>**
- [ ] **B) <responsive-image>**
- [ ] **C) <gallery>**
- [ ] **D) <canvas>**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The <picture> element wraps multiple <source media="..."> definitions alongside a fallback <img>, enabling the browser to pick optimal image crops for varying device viewports.

</details>

---

### Question 584

What does the CSS 'clamp(1rem, 2.5vw, 2rem)' function achieve for fluid responsive font sizing?  

- [x] **A) Sets a preferred fluid size (2.5vw) while enforcing an absolute minimum of 1rem and an absolute maximum of 2rem**
- [ ] **B) Sets three font sizes for small, medium, and large screens**
- [ ] **C) Rounds font sizes to nearest integers**
- [ ] **D) Restricts font weight**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'clamp(min, val, max)' restricts a value between lower and upper bounds, popular for fluid typography that scales smoothly with viewport width without growing too large or small.

</details>

---

### Question 585

Why should media queries in a Mobile-First responsive stylesheet primarily use 'min-width' rather than 'max-width'?  

- [x] **A) Because base styles target small screens, and 'min-width' progressively applies rules as screen space expands without needing style resets**
- [ ] **B) 'max-width' is deprecated in CSS3**
- [ ] **C) 'min-width' loads faster on 4G networks**
- [ ] **D) 'min-width' disables desktop monitors**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Mobile-first sets baseline mobile styles cleanly, using progressive 'min-width' queries to layer layout enhancements as viewport width increases without overriding mobile rules.

</details>

---


## Module 10: Drag & Drop and Geolocation

### Question 586

What attribute must be added to an HTML element to make it draggable using the HTML5 Drag and Drop API?  

- [x] **A) draggable="true"**
- [ ] **B) drag="enabled"**
- [ ] **C) movable="true"**
- [ ] **D) allow-drag="yes"**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Setting 'draggable="true"' on an element enables the native HTML5 Drag and Drop capabilities for that element.

</details>

---

### Question 587

Which event fires on the element being dragged as soon as the user starts dragging it?  

- [x] **A) dragstart**
- [ ] **B) dragenter**
- [ ] **C) draginit**
- [ ] **D) dragbegin**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'dragstart' fires on the source element when dragging begins, typically used to initialize data via the dataTransfer object.

</details>

---

### Question 588

What MUST be done in the 'dragover' event handler on a drop target to allow elements to be dropped onto it?  

- [x] **A) Call event.preventDefault()**
- [ ] **B) Call event.stopPropagation()**
- [ ] **C) Return true**
- [ ] **D) Set target.allowDrop = true**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
By default, browsers reject drops on elements. Calling 'event.preventDefault()' in the 'dragover' event listener overrides this default behavior and designates the element as a valid drop zone.

</details>

---

### Question 589

Which object on the drag event is used to hold and retrieve data transferred during drag operations?  

- [x] **A) event.dataTransfer**
- [ ] **B) event.clipboardData**
- [ ] **C) event.dragPayload**
- [ ] **D) window.dragStore**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The 'event.dataTransfer' object stores the payload during drag operations via setData(format, data) and retrieves it in the drop event via getData(format).

</details>

---

### Question 590

What API in HTML5 enables web applications to access the geographical location of the user's device?  

- [x] **A) Geolocation API (navigator.geolocation)**
- [ ] **B) GPS Service API**
- [ ] **C) MapPosition API**
- [ ] **D) LocationTracker API**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The W3C Geolocation API is exposed via 'navigator.geolocation', providing asynchronous methods to obtain latitude and longitude.

</details>

---

### Question 591

Which method of navigator.geolocation retrieves the user's current physical position once?  

- [x] **A) getCurrentPosition(successCallback, errorCallback, options)**
- [ ] **B) getCoordinates()**
- [ ] **C) fetchLocation()**
- [ ] **D) readPosition()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'navigator.geolocation.getCurrentPosition(success, error, options)' requests a single snapshot of the device's current coordinates.

</details>

---

### Question 592

Which method of navigator.geolocation continuously monitors and notifies updates whenever the device moves?  

- [x] **A) watchPosition()**
- [ ] **B) trackPosition()**
- [ ] **C) streamCoordinates()**
- [ ] **D) followUser()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'navigator.geolocation.watchPosition()' registers a handler that is called repeatedly whenever the position changes, returning a watch ID that can be cleared with clearWatch().

</details>

---

### Question 593

What privacy protection is strictly enforced by modern browsers when an application calls Geolocation API methods?  

- [x] **A) The browser must explicitly prompt the user for permission to share their location, and it requires a secure context (HTTPS)**
- [ ] **B) Geolocation works silently without notifying the user**
- [ ] **C) It only works when connected via Ethernet cable**
- [ ] **D) It requires payment to the cellular carrier**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
To safeguard user privacy, browsers mandate an explicit user permission dialog before disclosing coordinates and restrict Geolocation strictly to secure origins (HTTPS or localhost).

</details>

---

### Question 594

Where are latitude and longitude values found in the position object passed to the Geolocation success callback?  

- [x] **A) position.coords.latitude and position.coords.longitude**
- [ ] **B) position.location.lat and position.location.lng**
- [ ] **C) position.geo.x and position.geo.y**
- [ ] **D) position.latitude and position.longitude**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The success callback receives a Geoposition object containing 'coords' (Coordinates object) which exposes latitude, longitude, accuracy, altitude, etc.

</details>

---

### Question 595

Which option can be passed to getCurrentPosition to request high accuracy (e.g. turning on mobile GPS)?  

- [x] **A) { enableHighAccuracy: true }**
- [ ] **B) { accuracy: 'maximum' }**
- [ ] **C) { useGPS: true }**
- [ ] **D) { highPrecision: true }**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Passing '{ enableHighAccuracy: true }' in the PositionOptions object hints the browser to use more accurate positioning methods like device GPS, albeit at higher battery consumption.

</details>

---

### Question 596

Which event fires on the dragged element when the user finishes dragging, whether dropped successfully or canceled?  

- [x] **A) dragend**
- [ ] **B) dragleave**
- [ ] **C) dragfinish**
- [ ] **D) dropcomplete**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'dragend' fires on the source draggable element when the drag operation completes (whether successfully dropped or canceled with ESC), used for visual cleanup.

</details>

---

### Question 597

What property on dataTransfer specifies the types of drag operations allowed (e.g. 'copy', 'move', 'link')?  

- [x] **A) dataTransfer.effectAllowed**
- [ ] **B) dataTransfer.dropEffect**
- [ ] **C) dataTransfer.mode**
- [ ] **D) dataTransfer.permission**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'effectAllowed' is set in dragstart on the source element to declare permissible operations ('copy', 'move', 'copyMove'). 'dropEffect' is set on the drop target.

</details>

---

### Question 598

Which error code is returned in the Geolocation error callback when the user clicks 'Block' on the browser's location permission dialog?  

- [x] **A) error.PERMISSION_DENIED (code 1)**
- [ ] **B) error.POSITION_UNAVAILABLE (code 2)**
- [ ] **C) error.TIMEOUT (code 3)**
- [ ] **D) error.USER_REFUSED (code 4)**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
GeolocationPositionError.PERMISSION_DENIED (value 1) is returned when the user denies permission to share their location or system permissions are turned off.

</details>

---

### Question 599

What does the 'maximumAge' option in Geolocation API calls specify?  

- [x] **A) The maximum age in milliseconds of a cached position that the application is willing to accept instead of querying hardware GPS again**
- [ ] **B) The user's age limit**
- [ ] **C) How long coordinates remain in localStorage**
- [ ] **D) GPS satellite expiration date**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'maximumAge' sets the acceptable age of a cached position in milliseconds. Passing 0 forces the device to retrieve an immediate fresh fix.

</details>

---

### Question 600

Why does dropping an element onto another element fail by default unless preventDefault() is called in dragover?  

- [x] **A) Default browser behavior for dragover rejects drops on elements to protect against accidental file navigations**
- [ ] **B) Because HTML requires an external drop library**
- [ ] **C) Because CSS disables drop zones**
- [ ] **D) Dropping only works in iframes**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Browsers default to not allowing drops on web page elements. Canceling the 'dragover' event via preventDefault() announces that the element is an active drop target.

</details>

---


## Module 11: Offline Support & Web Storage

### Question 601

What is the primary difference between localStorage and sessionStorage?  

- [x] **A) localStorage persists data across browser restarts until explicitly cleared; sessionStorage data is cleared when the browser tab/session closes**
- [ ] **B) sessionStorage is stored on the server; localStorage is on the client**
- [ ] **C) localStorage only stores numbers; sessionStorage stores strings**
- [ ] **D) sessionStorage has a 100 GB limit**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
localStorage persists indefinitely until programmatically removed or cleared by the user. sessionStorage is scoped strictly to the current browser tab lifecycle.

</details>

---

### Question 602

What data type do both localStorage and sessionStorage store for both keys and values?  

- [x] **A) Strings only**
- [ ] **B) Binary byte arrays**
- [ ] **C) Any JavaScript objects natively**
- [ ] **D) JSON documents automatically**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Web Storage APIs store data strictly as key/value pairs of UTF-16 DOMString. Non-string types are automatically converted via .toString().

</details>

---

### Question 603

How do you store a complex JavaScript object in localStorage?  

- [x] **A) Serialize it to a JSON string using JSON.stringify(obj) before saving**
- [ ] **B) Pass the object directly into localStorage.setItem() without conversion**
- [ ] **C) Use localStorage.setObject()**
- [ ] **D) Cast the object to XML**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Because localStorage only stores strings, objects must be serialized using 'JSON.stringify(myObj)' before calling setItem(), and parsed back via 'JSON.parse()' upon retrieval.

</details>

---

### Question 604

What method completely empties all keys stored in localStorage for the current domain origin?  

- [x] **A) localStorage.clear()**
- [ ] **B) localStorage.removeAll()**
- [ ] **C) localStorage.reset()**
- [ ] **D) localStorage.drop()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'localStorage.clear()' removes all key/value pairs stored in local storage for the calling origin.

</details>

---

### Question 605

What is the typical storage capacity limit for localStorage per origin in modern browsers?  

- [x] **A) ~5 MB to 10 MB**
- [ ] **B) 4 KB**
- [ ] **C) 1 GB**
- [ ] **D) 100 MB**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Modern browsers allocate approximately 5 MB (some up to 10 MB) of storage per origin for Web Storage, vastly exceeding HTTP cookies (which are capped at 4 KB).

</details>

---

### Question 606

How does Web Storage differ fundamentally from HTTP Cookies regarding network traffic?  

- [x] **A) Cookies are sent with every single HTTP request header to the server; Web Storage data stays purely on the client and is never transmitted automatically**
- [ ] **B) Cookies cannot be read by JavaScript**
- [ ] **C) Web Storage is transmitted automatically with image downloads**
- [ ] **D) Cookies are stored on disk; Web Storage is in RAM only**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Cookies are transmitted with every HTTP request header to the server, adding network overhead. Web Storage remains client-side only, accessible solely by local JavaScript.

</details>

---

### Question 607

In the HTML5 Application Cache (AppCache), what file must be served with MIME type 'text/cache-manifest' to list resources for offline caching?  

- [x] **A) Cache manifest file (e.g. app.manifest)**
- [ ] **B) offline.json**
- [ ] **C) cache.xml**
- [ ] **D) robots.txt**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
AppCache relied on a manifest file (linked via <html manifest="app.appcache">) with the MIME type text/cache-manifest listing files to store offline.

</details>

---

### Question 608

What are the three core sections in an AppCache manifest file?  

- [x] **A) CACHE, NETWORK, and FALLBACK**
- [ ] **B) ONLINE, OFFLINE, and CACHE**
- [ ] **C) HEADER, BODY, and FOOTER**
- [ ] **D) STATIC, DYNAMIC, and ERROR**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
An AppCache manifest contains: CACHE: (files to download and cache locally), NETWORK: (files that always require an internet connection), and FALLBACK: (substitutes when offline).

</details>

---

### Question 609

What property on the 'window.navigator' object indicates whether the browser currently has network connectivity?  

- [x] **A) navigator.onLine**
- [ ] **B) navigator.connected**
- [ ] **C) navigator.isOffline**
- [ ] **D) navigator.networkStatus**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'navigator.onLine' returns a boolean (true if the browser has an active network connection, false if offline). Window events 'online' and 'offline' notify state changes.

</details>

---

### Question 610

What event fires on the window object in OTHER tabs/windows of the same domain whenever a storage entry is modified?  

- [x] **A) storage event**
- [ ] **B) dataupdate event**
- [ ] **C) sync event**
- [ ] **D) changestorage event**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The 'storage' event fires on 'window' in other open tabs or windows sharing the same origin, providing key, oldValue, newValue, and url to synchronize state.

</details>

---

### Question 611

What browser technology is the modern, powerful asynchronous transactional database for storing rich structured data offline, replacing Web SQL?  

- [x] **A) IndexedDB**
- [ ] **B) SQLite Native**
- [ ] **C) AppCache DB**
- [ ] **D) CloudStore**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
IndexedDB is the W3C standard asynchronous, transactional, object-oriented database in modern browsers for storing significant amounts of structured data, objects, and blobs.

</details>

---

### Question 612

What is the modern standard technology that replaced Application Cache (AppCache) for reliable offline web experiences and background sync?  

- [x] **A) Service Workers and Cache API**
- [ ] **B) Web Sockets**
- [ ] **C) Flash Local Storage**
- [ ] **D) WebRTC**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Service Workers provide a programmable proxy layer capable of intercepting network requests, caching fine-grained assets, and providing offline functionality, officially superseding AppCache.

</details>

---

### Question 613

What happens if a user duplicates a browser tab regarding sessionStorage?  

- [x] **A) The new tab receives a snapshot copy of the previous tab's sessionStorage, but subsequent changes in either tab remain completely isolated**
- [ ] **B) The new tab's sessionStorage is completely empty**
- [ ] **C) Both tabs share and synchronize changes in real time**
- [ ] **D) The browser throws a security warning**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Duplicating a tab copies the existing sessionStorage snapshot into the new tab, but both tabs diverge independently; mutations in one tab do not affect the other.

</details>

---

### Question 614

What properties does the 'storage' event object contain when another tab updates localStorage?  

- [x] **A) key, oldValue, newValue, url, and storageArea**
- [ ] **B) target, bubbles, type, and detail**
- [ ] **C) id, data, hash, and timestamp**
- [ ] **D) action, status, and rows**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The StorageEvent provides key (the modified key), oldValue (previous value), newValue (new value), url (document where change occurred), and storageArea.

</details>

---

### Question 615

What API provides insight into how much storage space is currently used and available to the origin?  

- [x] **A) navigator.storage.estimate()**
- [ ] **B) window.getStorageQuota()**
- [ ] **C) document.diskSpace()**
- [ ] **D) localStorage.getCapacity()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The StorageManager API ('navigator.storage.estimate()') returns a Promise resolving to an object containing 'usage' and 'quota' byte values.

</details>

---


## Module 12: Graphics (SVG vs Canvas)

### Question 616

What is the primary conceptual difference between SVG and HTML5 Canvas?  

- [x] **A) SVG is XML-based vector graphics where elements exist as DOM nodes; Canvas is a pixel-based raster bitmap drawn procedurally via JavaScript**
- [ ] **B) Canvas can be scaled indefinitely without pixelation; SVG cannot**
- [ ] **C) SVG only works in Internet Explorer**
- [ ] **D) Canvas requires Flash player to render**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
SVG is vector-based: shapes (<circle>, <rect>) are XML DOM elements that can be styled with CSS and receive event handlers. Canvas is a procedural 2D/3D pixel bitmap.

</details>

---

### Question 617

What happens to a Canvas drawing when the user zooms in on a browser window?  

- [x] **A) It can become pixelated or blurry because it is a raster bitmap**
- [ ] **B) It automatically rescales its vectors with infinite sharpness**
- [ ] **C) It redraws itself using SVG nodes**
- [ ] **D) The browser throws an error**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Because Canvas renders to a fixed resolution bitmap of pixels, zooming in enlarges pixels and results in pixelation unless manually redrawn at higher pixel density.

</details>

---

### Question 618

How do you obtain the 2D drawing context on an HTML5 <canvas id="myCanvas"> element?  

- [x] **A) const ctx = canvas.getContext('2d');**
- [ ] **B) const ctx = canvas.getDrawingContext();**
- [ ] **C) const ctx = canvas.createContext2D();**
- [ ] **D) const ctx = canvas.graphics;**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'canvas.getContext('2d')' returns the CanvasRenderingContext2D object used to issue drawing commands like fillRect, strokeText, and beginPath.

</details>

---

### Question 619

Can individual shapes drawn inside an HTML5 <canvas> have DOM event listeners attached directly to them (e.g. circle.addEventListener('click'))?  

- [x] **A) No, because once drawn, shapes are just flat pixels on a bitmap; hit testing must be calculated mathematically via coordinates**
- [ ] **B) Yes, each shape drawn on canvas is an HTML element**
- [ ] **C) Yes, using canvas.attachShapeEvent()**
- [ ] **D) Only if the shape is drawn in red**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Canvas has no DOM nodes for drawn objects. Event listeners must be attached to the <canvas> element itself, and developers must compute coordinates to detect clicks on shapes.

</details>

---

### Question 620

Which technology is best suited for complex UI icons, scalable logos, and interactive vector maps?  

- [x] **A) SVG**
- [ ] **B) Canvas**
- [ ] **C) WebGL**
- [ ] **D) GIF**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
SVG is ideal for user interface icons, logos, and charts because it scales crisply across all display resolutions (Retina/High-DPI), supports CSS styling, and allows DOM accessibility.

</details>

---

### Question 621

Which technology is best suited for fast-paced pixel games, particle simulations, and real-time video manipulation?  

- [x] **A) Canvas**
- [ ] **B) SVG**
- [ ] **C) Plain HTML tables**
- [ ] **D) XML stylesheets**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
HTML5 Canvas is ideal for high-frame-rate rendering (games, particle systems) where thousands of objects are redrawn repeatedly without the overhead of thousands of DOM nodes.

</details>

---

### Question 622

How do you draw a filled rectangle on a Canvas 2D context?  

- [x] **A) ctx.fillRect(x, y, width, height);**
- [ ] **B) ctx.drawRect(x, y, width, height);**
- [ ] **C) ctx.rectangle(x, y, width, height, 'fill');**
- [ ] **D) ctx.renderBox(x, y, width, height);**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'ctx.fillRect(x, y, width, height)' fills a rectangle using the current fillStyle at the specified canvas coordinates.

</details>

---

### Question 623

Which SVG elements are used to provide text descriptions for screen readers to make SVG accessible?  

- [x] **A) <title> and <desc>**
- [ ] **B) <alt> and <caption>**
- [ ] **C) <aria-text> and <meta>**
- [ ] **D) <label> and <info>**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Inside an <svg> element, adding a '<title>' (accessible name) and '<desc>' (extended description) elements ensures assistive screen readers can interpret the graphic.

</details>

---

### Question 624

How do you style the interior color and outline border of an SVG circle using CSS?  

- [x] **A) fill: red; stroke: blue; stroke-width: 2px;**
- [ ] **B) background-color: red; border: 2px solid blue;**
- [ ] **C) color: red; outline: blue;**
- [ ] **D) paint: red; border-color: blue;**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
SVG shapes use vector styling properties: 'fill' defines interior color, 'stroke' defines the outline color, and 'stroke-width' sets outline thickness.

</details>

---

### Question 625

Which method in Canvas clears specified pixels to transparent black within a rectangular area?  

- [x] **A) ctx.clearRect(x, y, width, height)**
- [ ] **B) ctx.eraseRect(x, y, width, height)**
- [ ] **C) ctx.deletePixels(x, y, width, height)**
- [ ] **D) ctx.reset()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'ctx.clearRect(x, y, width, height)' clears all pixels in the designated rectangular area, typically called at the beginning of each frame in an animation loop.

</details>

---

### Question 626

What SVG element is the most versatile for drawing any complex custom shape using commands like MoveTo (M), LineTo (L), and ClosePath (Z)?  

- [x] **A) <path>**
- [ ] **B) <polygon>**
- [ ] **C) <polyline>**
- [ ] **D) <shape>**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The '<path>' element with its 'd' attribute defines shapes through a sequence of path commands (M = moveto, L = lineto, C = curveto, Z = closepath).

</details>

---

### Question 627

What do the four values in the SVG 'viewBox="min-x min-y width height"' attribute define?  

- [x] **A) The internal coordinate system and aspect ratio mapping onto the SVG viewport**
- [ ] **B) The monitor screen resolution**
- [ ] **C) The margin and padding in pixels**
- [ ] **D) The 3D camera angle**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The viewBox defines the internal user coordinate space of the SVG graphic, allowing it to scale responsively and preserve aspect ratio across any outer container dimensions.

</details>

---

### Question 628

How do you export the current bitmap contents of an HTML5 <canvas> as a Base64 encoded PNG data URL?  

- [x] **A) const dataUrl = canvas.toDataURL('image/png');**
- [ ] **B) const dataUrl = canvas.saveAsImage();**
- [ ] **C) const dataUrl = canvas.exportPNG();**
- [ ] **D) const dataUrl = ctx.getPixelsAsBase64();**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'canvas.toDataURL(type)' returns a data URI containing a representation of the image in the specified format (defaults to image/png).

</details>

---

### Question 629

Where is the coordinate origin (0, 0) located by default on both an HTML5 Canvas and an SVG element?  

- [x] **A) Top-left corner (X increases rightward, Y increases downward)**
- [ ] **B) Bottom-left corner (Cartesian system)**
- [ ] **C) Center of the element**
- [ ] **D) Top-right corner**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Computer graphics coordinate systems place (0, 0) at the top-left corner, with the X axis extending to the right and the Y axis extending downwards.

</details>

---

### Question 630

Which Canvas 2D method renders filled text onto the drawing canvas?  

- [x] **A) ctx.fillText(text, x, y [, maxWidth])**
- [ ] **B) ctx.drawText(text, x, y)**
- [ ] **C) ctx.write(text, x, y)**
- [ ] **D) ctx.print(text, x, y)**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'ctx.fillText(text, x, y)' fills a given text at the specified coordinates using the current font and fillStyle.

</details>

---


## Module 13: Remote Data & AJAX

### Question 631

What does AJAX stand for?  

- [x] **A) Asynchronous JavaScript and XML**
- [ ] **B) Automated JSON Application eXchange**
- [ ] **C) Advanced JavaScript Async Kernel**
- [ ] **D) Application Java Access XML**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
AJAX stands for Asynchronous JavaScript and XML, a suite of technologies that allows web pages to send and retrieve data from a web server asynchronously in the background.

</details>

---

### Question 632

Which core browser object is historically used to initiate HTTP requests in AJAX?  

- [x] **A) XMLHttpRequest**
- [ ] **B) HttpRequest**
- [ ] **C) WebConnector**
- [ ] **D) SocketRequest**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The 'XMLHttpRequest' (XHR) object is the foundational browser API used to send HTTP/HTTPS requests to servers and receive responses asynchronously.

</details>

---

### Question 633

In XMLHttpRequest, which readyState value indicates that the operation is complete ('DONE')?  

- [x] **A) 4**
- [ ] **B) 3**
- [ ] **C) 1**
- [ ] **D) 200**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The readyState values are: 0 (UNSENT), 1 (OPENED), 2 (HEADERS_RECEIVED), 3 (LOADING), and 4 (DONE - request finished and response is ready).

</details>

---

### Question 634

Which HTTP status code signifies that the server successfully processed the request?  

- [x] **A) 200 OK**
- [ ] **B) 304 Not Modified**
- [ ] **C) 404 Not Found**
- [ ] **D) 500 Internal Server Error**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
HTTP 200 OK indicates that the client request succeeded and the server returned the requested payload.

</details>

---

### Question 635

What method parses a JSON formatted string into a JavaScript object?  

- [x] **A) JSON.parse(jsonString)**
- [ ] **B) JSON.stringify(object)**
- [ ] **C) JSON.toObject(jsonString)**
- [ ] **D) eval(jsonString)**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'JSON.parse()' safely parses a JSON string, constructing the corresponding JavaScript value or object. 'JSON.stringify()' converts an object into a JSON string.

</details>

---

### Question 636

What security policy restricts a web application from making AJAX requests to a different domain, port, or protocol than the origin that served the page?  

- [x] **A) Same-Origin Policy (SOP)**
- [ ] **B) Secure Sockets Policy**
- [ ] **C) Content Security Encryption**
- [ ] **D) Cross-Domain Block Protocol**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The Same-Origin Policy (SOP) is an essential browser security mechanism that prohibits scripts from loading resources or querying endpoints on an origin with a different protocol, host, or port.

</details>

---

### Question 637

What standard HTTP header mechanism allows a server to explicitly permit cross-origin AJAX requests from other domains?  

- [x] **A) CORS (Cross-Origin Resource Sharing)**
- [ ] **B) JSONP**
- [ ] **C) HTTPS Tunneling**
- [ ] **D) FTP Proxy**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
CORS (Cross-Origin Resource Sharing) uses HTTP response headers (such as 'Access-Control-Allow-Origin: *') to permit browsers to access resources from external domains.

</details>

---

### Question 638

What order of calls must be made on an XMLHttpRequest object to initiate an asynchronous GET request?  

- [x] **A) const xhr = new XMLHttpRequest(); xhr.open('GET', url, true); xhr.send();**
- [ ] **B) xhr.send(); xhr.open();**
- [ ] **C) xhr.execute('GET', url);**
- [ ] **D) xhr.connect(url); xhr.fetch();**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The sequence is: instantiate the object with 'new XMLHttpRequest()', configure request method and URL with 'xhr.open()', wire event listeners, and transmit the request with 'xhr.send()'.

</details>

---

### Question 639

What property on an XMLHttpRequest object contains the response data as text?  

- [x] **A) xhr.responseText**
- [ ] **B) xhr.data**
- [ ] **C) xhr.content**
- [ ] **D) xhr.body**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'xhr.responseText' contains the text received from the server as a string (or xhr.responseXML if the response is valid XML).

</details>

---

### Question 640

What HTTP method should be used when submitting data via AJAX to create a new record on the server?  

- [x] **A) POST**
- [ ] **B) GET**
- [ ] **C) OPTIONS**
- [ ] **D) HEAD**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
HTTP POST is used to submit entity data to a specified resource, resulting in state change or record creation on the server.

</details>

---

### Question 641

What is the key difference between the modern Fetch API and XMLHttpRequest?  

- [x] **A) Fetch is native Promise-based with cleaner syntax; XMLHttpRequest is callback-based and event-driven**
- [ ] **B) XMLHttpRequest does not support HTTP POST**
- [ ] **C) Fetch only works with XML**
- [ ] **D) XMLHttpRequest is faster than Fetch**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The Fetch API provides a modern Promise-based interface that integrates seamlessly with async/await, avoiding the verbose event-driven callback model of XMLHttpRequest.

</details>

---

### Question 642

How do you set custom request headers (such as Content-Type) on an XMLHttpRequest before sending?  

- [x] **A) xhr.setRequestHeader('Content-Type', 'application/json');**
- [ ] **B) xhr.addHeader('Content-Type', 'application/json');**
- [ ] **C) xhr.header('Content-Type', 'application/json');**
- [ ] **D) xhr.headers['Content-Type'] = 'application/json';**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'xhr.setRequestHeader(header, value)' sets HTTP request headers. It must be invoked after xhr.open() but prior to xhr.send().

</details>

---

### Question 643

What is the difference between HTTP status code 401 Unauthorized and 403 Forbidden?  

- [x] **A) 401 indicates authentication is required or credentials are invalid; 403 indicates authentication succeeded but the authenticated user lacks permissions to access the resource**
- [ ] **B) 401 is a server crash; 403 is client offline**
- [ ] **C) 403 is for guest users only**
- [ ] **D) There is no difference**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
401 Unauthorized denotes missing or invalid credentials (who are you?). 403 Forbidden denotes that credentials are authenticated, but the user is forbidden access (you cannot do this).

</details>

---

### Question 644

How do you cancel or abort an active Fetch API request in modern JavaScript?  

- [x] **A) Using an AbortController: pass controller.signal in fetch options and call controller.abort()**
- [ ] **B) Calling fetch.cancel()**
- [ ] **C) Deleting the promise**
- [ ] **D) Calling window.stop()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
AbortController allows canceling fetch requests by passing its 'signal' property into the fetch options and calling 'controller.abort()'.

</details>

---

### Question 645

Why should calls to JSON.parse() be wrapped in a try...catch block?  

- [x] **A) If the incoming string is malformed or invalid JSON, JSON.parse() throws a synchronous SyntaxError exception that can crash execution**
- [ ] **B) Because JSON.parse() returns a Promise**
- [ ] **C) To prevent memory corruption**
- [ ] **D) Because JSON.parse() is asynchronous**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Passing invalid, truncated, or non-JSON strings (like HTML error pages returned from servers) into JSON.parse() throws a fatal SyntaxError unless caught in a try/catch block.

</details>

---


## Module 14: Web Workers

### Question 646

What fundamental limitation in JavaScript's standard execution model do Web Workers solve?  

- [x] **A) JavaScript's single-threaded nature where heavy computations block the UI thread and freeze user interactions**
- [ ] **B) Inability to make network requests**
- [ ] **C) Lack of support for mathematical arithmetic**
- [ ] **D) Lack of local storage**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
JavaScript is single-threaded; long-running synchronous code freezes the main UI thread. Web Workers run scripts in background worker threads concurrently without interrupting the UI.

</details>

---

### Question 647

How do you instantiate a dedicated Web Worker in JavaScript?  

- [x] **A) const worker = new Worker('worker.js');**
- [ ] **B) const worker = window.createThread('worker.js');**
- [ ] **C) const worker = new BackgroundProcess('worker.js');**
- [ ] **D) const worker = Thread.fork('worker.js');**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'new Worker("script.js")' creates and starts a dedicated background worker running the specified JavaScript file.

</details>

---

### Question 648

How does the main UI thread communicate and exchange data with a Web Worker?  

- [x] **A) By posting serialized messages using postMessage() and receiving them via the 'onmessage' event listener**
- [ ] **B) By directly modifying shared global variables in window**
- [ ] **C) By reading and writing to the DOM tree**
- [ ] **D) Using SQL queries in tempdb**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Communication between workers and the main thread is strictly message-based: 'worker.postMessage(data)' sends messages, and 'worker.onmessage = function(e) { ... }' handles received messages.

</details>

---

### Question 649

Which of the following objects is completely INACCESSIBLE inside a Web Worker thread?  

- [x] **A) document and window (the DOM)**
- [ ] **B) navigator**
- [ ] **C) location**
- [ ] **D) setTimeout / setInterval**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Web Workers have no direct access to the DOM, 'window', or 'document' objects to avoid multi-threaded race conditions. Workers can access navigator, location, setTimeout, and XMLHttpRequest/fetch.

</details>

---

### Question 650

How does a Web Worker script terminate ITSELF from within the worker script?  

- [x] **A) close();**
- [ ] **B) terminate();**
- [ ] **C) exit();**
- [ ] **D) destroy();**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Inside the worker's own scope, calling 'close()' stops the worker immediately. From the main thread, 'worker.terminate()' terminates the worker.

</details>

---

### Question 651

What event handler catches and handles uncaught runtime exceptions occurring inside a Web Worker?  

- [x] **A) worker.onerror**
- [ ] **B) worker.onfail**
- [ ] **C) worker.oncatch**
- [ ] **D) worker.onexception**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The 'onerror' event handler on the Worker object receives an ErrorEvent containing filename, lineno, and message when an unhandled error occurs in the worker.

</details>

---

### Question 652

How does data passed via postMessage() typically travel between threads in standard Web Workers?  

- [x] **A) It is cloned via the Structured Clone algorithm (deep copy), ensuring memory isolation**
- [ ] **B) It shares identical memory pointers directly**
- [ ] **C) It is converted to binary and written to hard drive files**
- [ ] **D) It is transmitted over WebSockets**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Data sent via postMessage is duplicated using the Structured Clone algorithm, giving each thread its own independent copy to maintain thread isolation (unless using Transferable objects like ArrayBuffer).

</details>

---

### Question 653

What is a Shared Worker in JavaScript?  

- [x] **A) A worker that can be accessed and shared across multiple browser tabs, windows, or iframes running under the same origin**
- [ ] **B) A worker shared between different computers on a LAN**
- [ ] **C) A worker that shares DOM access with the main thread**
- [ ] **D) A peer-to-peer torrent client**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
A SharedWorker ('new SharedWorker()') can communicate with multiple browsing contexts (different tabs, windows, or iframes) via MessagePorts.

</details>

---

### Question 654

What function can be used inside a Web Worker to synchronously load and execute external JavaScript libraries?  

- [x] **A) importScripts('library.js');**
- [ ] **B) require('library.js');**
- [ ] **C) include('library.js');**
- [ ] **D) loadScript('library.js');**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The 'importScripts(url1, url2, ...)' function loads and executes external script files synchronously inside the worker's global scope.

</details>

---

### Question 655

What global scope object represents the worker's context inside a dedicated Web Worker?  

- [x] **A) self (or DedicatedWorkerGlobalScope)**
- [ ] **B) window**
- [ ] **C) document**
- [ ] **D) parent**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Inside a worker, the global execution context is referenced by 'self' (DedicatedWorkerGlobalScope). Calling postMessage() or addEventListener('message', ...) operates on 'self'.

</details>

---

### Question 656

What are 'Transferable Objects' (such as ArrayBuffer) in Web Worker communication?  

- [x] **A) Objects whose ownership and memory buffer are transferred instantly with zero copying overhead, making them inaccessible in the sending context**
- [ ] **B) Objects transferred via Bluetooth**
- [ ] **C) Objects converted to text strings**
- [ ] **D) Objects saved to the cloud**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Transferable objects transfer memory ownership directly between contexts with zero-copy overhead. Once transferred, the object is detached and becomes unusable in the sender context.

</details>

---

### Question 657

What property on the 'window.navigator' object reports the number of logical processor cores available on the user's computer?  

- [x] **A) navigator.hardwareConcurrency**
- [ ] **B) navigator.cpuCores**
- [ ] **C) navigator.processors**
- [ ] **D) navigator.threadCount**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'navigator.hardwareConcurrency' returns the number of logical processors, enabling web applications to spawn an optimal pool of Web Workers without overloading the CPU.

</details>

---

### Question 658

What is the difference between calling 'worker.terminate()' and 'self.close()'?  

- [x] **A) 'worker.terminate()' is called from the main UI thread to kill the worker immediately; 'self.close()' is called by the worker script inside itself to stop its own execution**
- [ ] **B) 'terminate' is asynchronous; 'close' is synchronous**
- [ ] **C) 'self.close()' restarts the worker**
- [ ] **D) There is no difference**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
From the parent thread, calling 'worker.terminate()' forcibly stops the worker thread. From inside the worker, calling 'self.close()' stops its own event loop and terminates itself.

</details>

---

### Question 659

Why does an error inside a Web Worker script not trigger the main thread's 'window.onerror' handler automatically?  

- [x] **A) Web Workers run in an isolated execution context with their own global scope (DedicatedWorkerGlobalScope), dispatching errors to 'worker.onerror' on the Worker instance**
- [ ] **B) Worker errors are suppressed by browsers**
- [ ] **C) Workers cannot have syntax errors**
- [ ] **D) Worker errors trigger alert boxes**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Because Web Workers execute in separate thread contexts, unhandled exceptions do not bubble to 'window'. Instead, they fire the 'error' event on the Worker instance in the main script.

</details>

---

### Question 660

Can Web Workers initiate network requests using fetch() or XMLHttpRequest?  

- [x] **A) Yes, Web Workers have full access to network APIs like fetch() and XMLHttpRequest to download and upload data in the background**
- [ ] **B) No, Web Workers are completely disconnected from the network**
- [ ] **C) Only via WebSockets**
- [ ] **D) Only if running on HTTPS**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Web Workers can freely make network requests using fetch() or XMLHttpRequest to fetch data, parse it in the background thread, and send processed results back to the UI thread.

</details>

---

