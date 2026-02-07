#!/usr/bin/env node
/**
 * Framer Source Analyzer
 * Extracts all critical design values from the Framer HTML source
 */

const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const outDir = path.join(__dirname, 'analysis');

// ========================================
// 1. EXTRACT APPEAR ANIMATION CSS
// ========================================
console.log('\n=== APPEAR ANIMATIONS ===');
// Framer uses data-framer-appear-id with CSS keyframes
const appearIds = html.match(/data-framer-appear-id="([^"]+)"/g) || [];
console.log(`Found ${appearIds.length} appear animation elements:`);
appearIds.forEach(id => console.log(`  ${id}`));

// Find the appear animation CSS rules
const appearCSSRegex = /\[data-framer-appear-id[^\]]*\]\s*\{[^}]+\}/g;
const appearCSS = html.match(appearCSSRegex) || [];
console.log(`\nAppear CSS rules: ${appearCSS.length}`);
appearCSS.forEach(rule => console.log(`  ${rule.substring(0, 200)}`));

// ========================================
// 2. EXTRACT TOKEN COLOR VALUES
// ========================================
console.log('\n=== COLOR TOKENS ===');
const tokenRegex = /--token-([a-f0-9-]+):\s*([^;,)]+)/g;
const tokens = {};
let match;
while ((match = tokenRegex.exec(html)) !== null) {
  tokens[match[1]] = match[2].trim();
}
Object.entries(tokens).forEach(([k, v]) => console.log(`  --token-${k}: ${v}`));

// ========================================
// 3. EXTRACT SECTIONS AND THEIR STYLES
// ========================================
console.log('\n=== SECTION STRUCTURE ===');
const sectionRegex = /data-framer-name="([^"]+)"/g;
const sections = new Set();
while ((match = sectionRegex.exec(html)) !== null) {
  sections.add(match[1]);
}
console.log('Named elements:');
[...sections].sort().forEach(s => console.log(`  ${s}`));

// ========================================
// 4. EXTRACT HERO SECTION DOM
// ========================================
console.log('\n=== HERO SECTION ANALYSIS ===');
const heroStart = html.indexOf('data-framer-name="Hero"');
if (heroStart > -1) {
  // Find the section tag that contains it
  let heroSectionStart = html.lastIndexOf('<section', heroStart);
  let depth = 0;
  let heroEnd = heroSectionStart;
  for (let i = heroSectionStart; i < html.length; i++) {
    if (html.substring(i, i + 8) === '<section') depth++;
    if (html.substring(i, i + 10) === '</section>') {
      depth--;
      if (depth === 0) {
        heroEnd = i + 10;
        break;
      }
    }
  }
  const heroHTML = html.substring(heroSectionStart, heroEnd);
  fs.writeFileSync(path.join(outDir, 'hero-section.html'), heroHTML);
  console.log(`Hero section extracted: ${heroHTML.length} chars`);
  
  // Extract class names within hero
  const heroClasses = heroHTML.match(/class="([^"]+)"/g) || [];
  console.log(`Hero class elements: ${heroClasses.length}`);
}

// ========================================
// 5. EXTRACT WORK SECTION DOM
// ========================================
console.log('\n=== WORK SECTION ANALYSIS ===');
const workStart = html.indexOf('data-framer-name="Work"');
if (workStart > -1) {
  let workSectionStart = html.lastIndexOf('<section', workStart);
  let depth = 0;
  let workEnd = workSectionStart;
  for (let i = workSectionStart; i < html.length; i++) {
    if (html.substring(i, i + 8) === '<section') depth++;
    if (html.substring(i, i + 10) === '</section>') {
      depth--;
      if (depth === 0) {
        workEnd = i + 10;
        break;
      }
    }
  }
  const workHTML = html.substring(workSectionStart, workEnd);
  fs.writeFileSync(path.join(outDir, 'work-section.html'), workHTML);
  console.log(`Work section extracted: ${workHTML.length} chars`);
}

// ========================================
// 6. EXTRACT ABOUT SECTION DOM
// ========================================
console.log('\n=== ABOUT SECTION ANALYSIS ===');
const aboutStart = html.indexOf('data-framer-name="About"');
if (aboutStart > -1) {
  let aboutSectionStart = html.lastIndexOf('<section', aboutStart);
  if (aboutSectionStart === -1) {
    // Might be a div
    aboutSectionStart = html.lastIndexOf('<div', aboutStart);
  }
  // Extract ~5000 chars from the about section
  const aboutHTML = html.substring(aboutSectionStart, aboutSectionStart + 8000);
  fs.writeFileSync(path.join(outDir, 'about-section.html'), aboutHTML);
  console.log(`About section extracted: ${aboutHTML.length} chars`);
}

// ========================================
// 7. EXTRACT FOOTER/CTA SECTION DOM
// ========================================
console.log('\n=== FOOTER/CTA ANALYSIS ===');
const ctaStart = html.indexOf('data-framer-name="CTA"');
if (ctaStart > -1) {
  let ctaSectionStart = html.lastIndexOf('<section', ctaStart);
  if (ctaSectionStart === -1) ctaSectionStart = ctaStart - 500;
  const ctaEnd = html.indexOf('</footer>', ctaStart);
  const ctaHTML = html.substring(ctaSectionStart > 0 ? ctaSectionStart : ctaStart - 200, ctaEnd > 0 ? ctaEnd + 9 : ctaStart + 5000);
  fs.writeFileSync(path.join(outDir, 'footer-section.html'), ctaHTML);
  console.log(`Footer section extracted: ${ctaHTML.length} chars`);
}

// ========================================
// 8. EXTRACT HEADER/NAV DOM
// ========================================
console.log('\n=== HEADER ANALYSIS ===');
const headerStart = html.indexOf('data-framer-name="Header Section"');
if (headerStart > -1) {
  let headerSectionStart = html.lastIndexOf('<div', headerStart);
  const headerHTML = html.substring(headerSectionStart, headerSectionStart + 5000);
  fs.writeFileSync(path.join(outDir, 'header-section.html'), headerHTML);
  console.log(`Header section extracted: ${headerHTML.length} chars`);
}

// ========================================
// 9. EXTRACT ALL CSS CLASSES WITH THEIR STYLES
// ========================================
console.log('\n=== EXTRACTING CSS CLASS DEFINITIONS ===');
// Get all style block content
const styleBlocks = [];
const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/g;
while ((match = styleRegex.exec(html)) !== null) {
  styleBlocks.push(match[1]);
}
const allCSS = styleBlocks.join('\n');
fs.writeFileSync(path.join(outDir, 'all-css-clean.css'), allCSS);
console.log(`Total CSS: ${allCSS.length} chars across ${styleBlocks.length} style blocks`);

// Extract key class definitions for layout components
const keyClasses = [
  'framer-c6378y', // Hero
  'framer-1umilaq', // Hero Container
  'framer-1llba4z', // Profile Section
  'framer-7o4si6', // Name
  'framer-p3zcd6', // First Name
  'framer-19i4xg', // Work
  'framer-txbo53', // Work Container
  'framer-pcf6c',  // Grid
  'framer-127ea2h', // Divider
  'framer-1fvxecq', // Divider inner
  'framer-ga4x4w',  // Section header
  'framer-1rlt24d', // About main
  'framer-kscgcc',  // About content
];

console.log('\nKey class CSS rules:');
keyClasses.forEach(cls => {
  const regex = new RegExp(`\\.${cls}\\b[^{]*\\{[^}]+\\}`, 'g');
  const rules = allCSS.match(regex) || [];
  if (rules.length > 0) {
    console.log(`\n--- .${cls} ---`);
    rules.forEach(r => console.log(`  ${r.substring(0, 300)}`));
  }
});

// ========================================
// 10. EXTRACT INLINE STYLES FROM APPEAR ELEMENTS
// ========================================
console.log('\n\n=== APPEAR ELEMENT INITIAL STATES ===');
const appearElementRegex = /data-framer-appear-id="([^"]+)"[^>]*style="([^"]*)"/g;
while ((match = appearElementRegex.exec(html)) !== null) {
  console.log(`\nAppear ID: ${match[1]}`);
  console.log(`  Initial style: ${match[2]}`);
}

// ========================================
// 11. EXTRACT THE APPEAR ANIMATION KEYFRAMES
// ========================================
console.log('\n=== APPEAR ANIMATION KEYFRAMES/TRANSITIONS ===');
// Search for @keyframes related to appear
const keyframesRegex = /@keyframes[^{]+\{[^}]+\{[^}]+\}[^}]+\}/g;
const keyframes = allCSS.match(keyframesRegex) || [];
console.log(`Found ${keyframes.length} @keyframes:`);
keyframes.forEach(k => console.log(`  ${k.substring(0, 200)}`));

// Search for data-framer-appear related CSS
const appearCSSRules = allCSS.match(/\[data-framer-appear[^\]]*\][^{]*\{[^}]+\}/g) || [];
console.log(`\nAppear CSS rules: ${appearCSSRules.length}`);
appearCSSRules.forEach(r => console.log(`  ${r.substring(0, 300)}`));

// ========================================
// 12. EXTRACT CURSOR DATA
// ========================================
console.log('\n=== CURSOR DEFINITIONS ===');
const cursorRegex = /data-framer-cursor="([^"]+)"/g;
const cursors = new Set();
while ((match = cursorRegex.exec(html)) !== null) {
  cursors.add(match[1]);
}
console.log('Cursor IDs:', [...cursors]);

// Look for cursor-related CSS
const cursorCSS = allCSS.match(/cursor:[^;]+/g) || [];
console.log('\nCursor CSS values:');
[...new Set(cursorCSS)].forEach(c => console.log(`  ${c}`));

// ========================================
// 13. EXTRACT THE "TRANSITION" CSS VALUES
// ========================================
console.log('\n=== TRANSITION VALUES ===');
const transitionRegex = /transition:[^;}]+/g;
const transitions = allCSS.match(transitionRegex) || [];
const uniqueTransitions = [...new Set(transitions)];
console.log(`Found ${uniqueTransitions.length} unique transitions:`);
uniqueTransitions.forEach(t => console.log(`  ${t}`));

// ========================================
// 14. EXTRACT GRADIENT VALUES
// ========================================
console.log('\n=== GRADIENT VALUES ===');
const gradientRegex = /linear-gradient\([^)]+\)/g;
const gradients = html.match(gradientRegex) || [];
const uniqueGradients = [...new Set(gradients)];
console.log(`Found ${uniqueGradients.length} gradients:`);
uniqueGradients.forEach(g => console.log(`  ${g}`));

// ========================================
// 15. EXTRACT MAX-WIDTH VALUES
// ========================================
console.log('\n=== MAX-WIDTH VALUES ===');
const maxWidthRegex = /max-width:\s*[^;}"]+/g;
const maxWidths = allCSS.match(maxWidthRegex) || [];
const uniqueMaxWidths = [...new Set(maxWidths)];
uniqueMaxWidths.forEach(m => console.log(`  ${m}`));

// Also from inline styles
const inlineMaxWidths = html.match(/max-width:\s*[^;}"]+/g) || [];
[...new Set(inlineMaxWidths)].forEach(m => {
  if (!uniqueMaxWidths.includes(m)) console.log(`  (inline) ${m}`);
});

// ========================================
// 16. EXTRACT TEXT CONTENT
// ========================================
console.log('\n=== TEXT CONTENT VERIFICATION ===');
const textPatterns = [
  'MALAVIKA', 'SURESH', 'hello@yume.com',
  'Hello, I\'m a freelancer',
  'work.', 'about.', 'Show More',
  'I collaborate with businesses',
  'Curious about what we can create',
  'Get in Touch', 'Available For Work',
  'malavikasparambumana@gmail.com',
  '+91 9207768108',
];
textPatterns.forEach(text => {
  const found = html.includes(text);
  console.log(`  ${found ? '✓' : '✗'} "${text}"`);
});

// ========================================
// SAVE COMPREHENSIVE REPORT
// ========================================
const report = {
  colorTokens: tokens,
  namedElements: [...sections].sort(),
  appearAnimationCount: appearIds.length,
  cursors: [...cursors],
  uniqueTransitions,
  uniqueGradients,
  fontSizes: [...new Set((allCSS.match(/font-size:\s*\d+px/g) || []).map(f => f.replace('font-size:', '').trim()))].sort((a,b) => parseInt(a) - parseInt(b)),
  letterSpacings: [...new Set((allCSS.match(/letter-spacing:\s*-?[\d.]+em/g) || []).map(l => l.replace('letter-spacing:', '').trim()))],
  lineHeights: [...new Set((allCSS.match(/line-height:\s*[\d.]+em/g) || []).map(l => l.replace('line-height:', '').trim()))],
  gaps: [...new Set((allCSS.match(/gap:\s*\d+px/g) || []).map(g => g.replace('gap:', '').trim()))].sort((a,b) => parseInt(a) - parseInt(b)),
  borderRadii: [...new Set((allCSS.match(/border-radius:\s*\d+px/g) || []).map(b => b.replace('border-radius:', '').trim()))],
};

fs.writeFileSync(path.join(outDir, 'design-report.json'), JSON.stringify(report, null, 2));
console.log('\n\n=== DESIGN REPORT SAVED ===');
console.log(JSON.stringify(report, null, 2));
