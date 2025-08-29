#!/usr/bin/env node

// SEO Title Variations Generator (Indonesian)
// Rules:
// - Max title length: 60 characters
// - Language: Indonesian
// - Must contain the main keyword or a synonym
// - Generate 10 different titles per keyword
// - Light clickbait, informative, relevant to business
// Usage:
//   node scripts/generate-seo-titles.mjs [--out output.txt] [keywords...]
// If no keywords are passed, the default list (per issue) is used.

import fs from 'node:fs/promises';
import path from 'node:path';

const CURRENT_YEAR = new Date().getFullYear();

/** @type {Record<string, string[]>} */
const SYNONYMS = {
  'Pendirian PT': ['Pendirian PT', 'Bikin PT', 'Buat PT', 'Mendirikan PT', 'Perseroan Terbatas'],
  'PT PMA': ['PT PMA', 'PT Asing', 'Perusahaan PMA', 'Penanaman Modal Asing'],
  'Virtual Office': ['Virtual Office', 'Kantor Virtual', 'Alamat Domisili', 'Domisili Kantor'],
  'Pendirian CV': ['Pendirian CV', 'Buat CV', 'Bikin CV', 'Commanditaire Vennootschap'],
  'Jasa BPOM': ['Jasa BPOM', 'Registrasi BPOM', 'Izin BPOM', 'Pendaftaran BPOM'],
  'Haki Merek': ['HAKI Merek', 'Merek Dagang', 'Pendaftaran Merek', 'Hak Kekayaan Intelektual'],
  'Pengurusan izin halal': ['Izin Halal', 'Sertifikat Halal', 'BPJPH', 'Pengurusan Halal'],
  'Pengurusan Izin SIO': ['Izin SIO', 'Surat Izin Operasional', 'Pengurusan SIO'],
  'Pengurusan IZIN BUJP': ['Izin BUJP', 'BUJP', 'Usaha Jasa Pengamanan', 'Perizinan BUJP'],
  'Pengurusan usaha asing': ['Usaha Asing', 'Perusahaan Asing', 'Perusahaan PMA', 'Bisnis Asing']
};

/** Title templates with placeholders:
 * {KW}   -> place the keyword or a synonym (varied across titles)
 * {YEAR} -> current year
 */
const TEMPLATES = [
  'Cara Cepat & Legal {KW} di Indonesia',
  'Panduan Lengkap {KW} {YEAR}',
  'Biaya {KW}: Update Terbaru',
  'Langkah Mudah Urus {KW}',
  '{KW} untuk UMKM, Apa Saja Syaratnya?',
  'Kesalahan Umum Saat Mengurus {KW}',
  '{KW} vs Alternatif: Mana Lebih Cocok?',
  'Tips Hemat Biaya {KW}',
  'Dokumen Wajib untuk {KW}',
  '{KW} Online: Solusi Praktis {YEAR}',
  'Berapa Lama Proses {KW}?',
  'Kisaran Tarif & Paket {KW}',
  'Checklist {KW} Anti Ribet',
  'Perubahan Aturan {KW} {YEAR}',
  'Kapan Waktu Terbaik Memulai {KW}?'
];

/** Additional shorteners to help stay under 60 chars without losing meaning */
const SOFT_REMOVALS = ['Lengkap ', 'Anti ', 'Apa ', 'Kapan ', 'Terbaik ', 'Update ', 'Terbaru ', 'Praktis '];

function chooseSynonym(keyword, index) {
  const list = SYNONYMS[keyword] || [keyword];
  return list[index % list.length];
}

function renderTemplate(template, keyword, index) {
  const kw = chooseSynonym(keyword, index);
  return template
    .replaceAll('{KW}', kw)
    .replaceAll('{YEAR}', String(CURRENT_YEAR));
}

function containsKeywordOrSynonym(title, keyword) {
  const list = (SYNONYMS[keyword] || [keyword]).map((s) => s.toLowerCase());
  const t = title.toLowerCase();
  return list.some((k) => t.includes(k));
}

function hardTrimTo(text, limit) {
  if (text.length <= limit) return text;
  // Trim at last space before limit if possible
  const cut = text.lastIndexOf(' ', limit);
  if (cut > 0 && cut >= limit - 12) {
    return text.slice(0, cut).trim();
  }
  return text.slice(0, limit).trim();
}

function enforceLimit(title, limit, keyword) {
  if (title.length <= limit) return title;
  // Try removing soft words
  let t = title;
  for (const w of SOFT_REMOVALS) {
    if (t.length <= limit) break;
    t = t.replace(w, '');
  }
  // Remove trailing year if still long
  if (t.length > limit) t = t.replace(/\b20\d{2}\b/g, '').replace(/\s{2,}/g, ' ').trim();
  // Ensure keyword/synonym still present; if lost (unlikely), append keyword
  if (!containsKeywordOrSynonym(t, keyword)) t = `${t} ${SYNONYMS[keyword]?.[0] || keyword}`.trim();
  // Hard trim to limit
  t = hardTrimTo(t, limit);
  // Final guard: keep keyword
  if (!containsKeywordOrSynonym(t, keyword)) {
    // If trimming removed it, re-add minimally at end and re-trim
    const minimal = `${t} ${SYNONYMS[keyword]?.[0] || keyword}`.trim();
    t = hardTrimTo(minimal, limit);
  }
  return t;
}

function unique(items) {
  const seen = new Set();
  const out = [];
  for (const s of items) {
    const key = s.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      out.push(s);
    }
  }
  return out;
}

function generateForKeyword(keyword) {
  const outputs = [];
  // Use first 10 templates, but we have 15 in case some collapse after trimming
  let idx = 0;
  for (const tmpl of TEMPLATES) {
    const raw = renderTemplate(tmpl, keyword, idx++);
    let t = enforceLimit(raw, 60, keyword);
    if (!containsKeywordOrSynonym(t, keyword)) continue;
    outputs.push(t);
    if (outputs.length >= 12) break; // generate a bit extra
  }
  // Deduplicate and take 10
  const uniq = unique(outputs).slice(0, 10);
  // If still less than 10, fall back to simple variants
  while (uniq.length < 10) {
    const base = `Info ${chooseSynonym(keyword, uniq.length)} ${CURRENT_YEAR}`;
    uniq.push(enforceLimit(base, 60, keyword));
  }
  return uniq;
}

function formatBlock(keyword, titles) {
  const lines = [`Keyword: ${keyword}`];
  titles.forEach((t, i) => lines.push(`${i + 1}. ${t}`));
  return lines.join('\n');
}

function parseArgs(argv) {
  const args = { out: undefined, keywords: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--out' || a === '-o') {
      args.out = argv[++i];
    } else if (a === '--help' || a === '-h') {
      args.help = true;
    } else if (!a.startsWith('-')) {
      args.keywords.push(a);
    }
  }
  return args;
}

function printHelp(scriptPath) {
  const rel = (p) => p.replaceAll('/', path.sep).replaceAll('\\', path.sep);
  console.log(
    `Usage:\n  node ${rel(scriptPath)} [--out output.txt] [keywords...]\n\n` +
      `If no keywords are provided, uses the default list from the issue.\n` +
      `Output is printed to console and optionally written to --out file.`
  );
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const scriptPath = path.relative(process.cwd(), process.argv[1] || 'scripts/generate-seo-titles.mjs');
  if (args.help) {
    printHelp(scriptPath);
    return;
  }

  const defaultKeywords = [
    'Pendirian PT',
    'PT PMA',
    'Virtual Office',
    'Pendirian CV',
    'Jasa BPOM',
    'Haki Merek',
    'Pengurusan izin halal',
    'Pengurusan Izin SIO',
    'Pengurusan IZIN BUJP',
    'Pengurusan usaha asing'
  ];

  const list = args.keywords.length ? args.keywords : defaultKeywords;

  const blocks = list.map((kw) => formatBlock(kw, generateForKeyword(kw)));
  const output = blocks.join('\n\n');
  console.log(output);

  if (args.out) {
    const outPath = path.resolve(process.cwd(), args.out);
    await fs.mkdir(path.dirname(outPath), { recursive: true });
    await fs.writeFile(outPath, output, 'utf8');
    console.log(`\nSaved to: ${outPath}`);
  }
}

main().catch((e) => {
  console.error('Unexpected error:', e?.message || e);
  process.exitCode = 1;
});
