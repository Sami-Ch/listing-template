const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const templatesDir = path.join(__dirname, '../templates');

const TEMPLATES = [
  { id: 'luxe_noir', file: 'luxe_noir.html', name: 'Luxe Noir' },
  { id: 'crystal_clean', file: 'crystal_clean.html', name: 'Crystal Clean' },
  { id: 'floral_essence', file: 'floral_essence.html', name: 'Floral Essence' },
  { id: 'modern_sport', file: 'modern_sport.html', name: 'Modern Sport' },
  { id: 'vintage_boutique', file: 'vintage_boutique.html', name: 'Vintage Boutique' },
];

// Tags we consider as direct editable text containers
const TEXT_TAGS = new Set(['h1', 'h2', 'h3', 'h4', 'p', 'span', 'div', 'a', 'li', 'td', 'th', 'figcaption', 'blockquote', 'em', 'strong', 'b', 'i', 'label']);

// Classes/roles that indicate a text leaf
const LEAF_CLASSES = ['badge-item', 'spec-label', 'spec-value', 'product-brand', 'product-title',
  'section-title', 'description-text', 'store-title', 'card-title', 'card-text', 'info-card',
  'fragrance-description', 'footer'];

function isLeafTextElement($, el) {
  const tag = (el.tagName || el.name || '').toLowerCase();
  const cls = $(el).attr('class') || '';

  // Always treat <img> as image, not text
  if (tag === 'img') return false;

  // If element has child elements that are also text containers, skip this level
  // (we want the deepest leaves)
  const childTextElements = $(el).children().filter(function () {
    const childTag = (this.tagName || this.name || '').toLowerCase();
    return TEXT_TAGS.has(childTag) || $(this).find('h1,h2,h3,h4,p,a,span,li').length > 0;
  });

  // <a> tags are always leaves (editable link text + href)
  if (tag === 'a') return true;

  // badge-item, spec-label, etc are always leaves
  if (LEAF_CLASSES.some(c => cls.includes(c))) {
    // But only if they don't contain deeper tagged children
    if (childTextElements.length === 0) return true;
  }

  // h1-h4, p are leaves if they don't contain block elements
  if (['h1', 'h2', 'h3', 'h4', 'p'].includes(tag)) return true;

  // li that directly contains text (not just child elements)
  if (tag === 'li') {
    const hasDirectText = $(el).contents().filter(function () {
      return this.type === 'text' && this.data.trim().length > 0;
    }).length > 0;
    if (hasDirectText && $(el).find('a').length === 0) return true;
  }

  return false;
}

function extractElements($, sectionEl, sectionIdx) {
  const elements = {};
  let textIdx = 0;
  let imgIdx = 0;
  let linkIdx = 0;

  // Extract images
  $(sectionEl).find('img').each(function () {
    const key = 'image_' + imgIdx;
    $(this).attr('data-customizer-element', key);
    elements[key] = {
      id: key,
      type: 'image',
      label: $(this).attr('alt') || 'Image ' + imgIdx,
      value: '',
      src: $(this).attr('src') || '',
      alt: $(this).attr('alt') || '',
      styles: {},
    };
    imgIdx++;
  });

  // Extract links (nav links, footer links, etc.)
  $(sectionEl).find('a').each(function () {
    const text = $(this).text().trim();
    if (!text) return;
    const key = 'link_' + linkIdx;
    $(this).attr('data-customizer-element', key);
    elements[key] = {
      id: key,
      type: 'link',
      label: text,
      value: text,
      href: $(this).attr('href') || '#',
      styles: {},
    };
    linkIdx++;
  });

  // Extract text elements (skip ones already tagged as links)
  $(sectionEl).find('h1, h2, h3, h4, p, .badge-item, .spec-label, .spec-value, .product-brand, .section-title, .description-text, .store-title, .fragrance-description, li').each(function () {
    // Skip if already tagged
    if ($(this).attr('data-customizer-element')) return;
    // Skip if this is an <a> tag or only contains an <a> tag
    const tag = (this.tagName || this.name || '').toLowerCase();
    if (tag === 'a') return;
    // Skip <li> that wraps an <a> (the <a> is already extracted)
    if (tag === 'li' && $(this).find('a').length > 0) return;

    const text = $(this).text().trim();
    if (!text) return;

    const key = 'text_' + textIdx;
    $(this).attr('data-customizer-element', key);

    // Determine a human-readable label
    let label = tag.toUpperCase();
    const cls = $(this).attr('class') || '';
    if (cls.includes('product-brand')) label = 'Brand';
    else if (cls.includes('product-title')) label = 'Product Title';
    else if (cls.includes('section-title')) label = 'Section Title';
    else if (cls.includes('description-text')) label = 'Description';
    else if (cls.includes('badge-item')) label = 'Badge';
    else if (cls.includes('spec-label')) label = 'Spec Label';
    else if (cls.includes('spec-value')) label = 'Spec Value';
    else if (cls.includes('store-title')) label = 'Store Title';
    else if (tag === 'h1') label = 'Heading';
    else if (tag === 'h2') label = 'Subheading';
    else if (tag === 'h3') label = 'Heading 3';
    else if (tag === 'p') label = 'Paragraph';
    else if (tag === 'li') label = 'List Item';

    elements[key] = {
      id: key,
      type: 'text',
      label: label,
      value: text,
      styles: {},
    };
    textIdx++;
  });

  return elements;
}

function detectSectionType(el, $) {
  const tag = (el.tagName || el.name || '').toLowerCase();
  const cls = $(el).attr('class') || '';

  if (tag === 'header' || cls.includes('header')) return 'header';
  if (tag === 'main' || cls.includes('hero') || cls.includes('product-hero')) return 'hero';
  if (cls.includes('trust-badge') || cls.includes('badge')) return 'badges';
  if (cls.includes('item-specific') || cls.includes('spec')) return 'specs';
  if (cls.includes('description') || cls.includes('fragrance')) return 'description';
  if (cls.includes('info-grid') || cls.includes('info-card') || cls.includes('policies') || cls.includes('tester')) return 'info';
  if (cls.includes('performance') || cls.includes('notes')) return 'details';
  if (tag === 'footer' || cls.includes('footer')) return 'footer';
  if (tag === 'section') return 'section';
  return 'section';
}

// Main
const allRaw = {};
const allSeeds = [];

for (const t of TEMPLATES) {
  const filePath = path.join(templatesDir, t.file);
  if (!fs.existsSync(filePath)) {
    console.error('MISSING:', filePath);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/src="assets\//g, 'src="/assets/');

  const $ = cheerio.load(content);

  const container = $('.listing-container').length
    ? $('.listing-container')
    : $('.listing-wrapper');

  if (!container.length) {
    console.error('No container found in', t.file);
    continue;
  }

  // Some templates nest inside .inner-container
  let sectionParent = container;
  const inner = container.find('> .inner-container');
  if (inner.length) sectionParent = inner;

  const sectionsData = [];
  let totalElements = 0;

  sectionParent.children().each(function (i) {
    const el = $(this);
    el.attr('data-customizer-section', 'section_' + i);

    const type = detectSectionType(this, $);
    const elements = extractElements($, this, i);
    totalElements += Object.keys(elements).length;

    sectionsData.push({
      id: 'section_' + i,
      type: type,
      label: type.charAt(0).toUpperCase() + type.slice(1),
      elements: elements,
    });
  });

  allRaw[t.id] = $.html();
  allSeeds.push({
    id: t.id,
    name: t.name,
    colors: {},
    fonts: {},
    sections: sectionsData,
  });

  console.log(`✓ ${t.name}: ${sectionsData.length} sections, ${totalElements} elements`);
}

// Write templatesRaw.ts
let rawTs = '/* eslint-disable */\n// Auto-generated — do not edit manually\nexport const rawTemplates: Record<string, string> = {\n';
for (const [id, html] of Object.entries(allRaw)) {
  const escaped = html.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
  rawTs += `  '${id}': \`${escaped}\`,\n`;
}
rawTs += '};\n';
fs.writeFileSync(path.join(__dirname, '../src/lib/templatesRaw.ts'), rawTs);

// Write seedData.ts
let seedTs = `import type { TemplateSchema } from "@/types/template";\n\n`;
seedTs += `// Auto-generated — do not edit manually\n`;
seedTs += `export const sampleTemplates: TemplateSchema[] = ${JSON.stringify(allSeeds, null, 2)};\n`;
fs.writeFileSync(path.join(__dirname, '../src/lib/seedData.ts'), seedTs);

console.log(`\n✅ Done! ${allSeeds.length} templates written.`);
console.log(`   Raw templates: ${(Buffer.byteLength(rawTs) / 1024).toFixed(1)} KB`);
console.log(`   Seed data: ${(Buffer.byteLength(seedTs) / 1024).toFixed(1)} KB`);
