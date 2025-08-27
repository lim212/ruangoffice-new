#!/usr/bin/env node

// KBLI extractor (ESM)
// Requirements:
// 1) Import pdf-parse
// 2) Read scripts/KBLI_-_Isi_Buku.pdf
// 3) Extract all 5-digit KBLI codes, titles, and descriptions
// 4) Save results to public/kbli.json
// 5) Log total KBLI count (~1789)

import { existsSync } from 'node:fs';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import url from 'node:url';

// pdf-parse supports CJS export; make it work under ESM
// Import the internal lib to avoid side-effects in the package root (which runs a test PDF on import)
import pdfModule from 'pdf-parse/lib/pdf-parse.js';
const pdf = /** @type {(data: Buffer|Uint8Array) => Promise<{ text: string }>} */ (pdfModule?.default || pdfModule);

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function printHelp() {
  const rel = (p) => p.replaceAll('/', path.sep).replaceAll('\\', path.sep);
  console.log(
    `Usage:\n  node ${rel(path.relative(process.cwd(), __filename))} [--source <path-to-kbli.pdf>] [--out <path-to-output.json>]\n\n` +
      `Options:\n  --source, -s   Path to the KBLI PDF file (default: scripts${path.sep}KBLI_-_Isi_Buku.pdf)\n  --out, -o      Path to write parsed output JSON (default: public${path.sep}kbli.json)\n  --help, -h     Show this help\n`
  );
}

function parseArgs(argv) {
  const args = { source: undefined, out: undefined, help: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    switch (a) {
      case '--help':
      case '-h':
        args.help = true;
        break;
      case '--source':
      case '-s':
        args.source = argv[++i];
        break;
      case '--out':
      case '-o':
        args.out = argv[++i];
        break;
      default:
        if (!a.startsWith('-') && !args.source) {
          args.source = a;
        } else {
          console.warn(`Unknown argument: ${a}`);
        }
    }
  }
  return args;
}

function normalizeText(text) {
  // Normalize line breaks and fix hyphenation across line breaks
  let t = text.replace(/\r\n?/g, '\n');
  // Remove repeated spaces around newlines
  t = t.replace(/[\t\u00A0]+/g, ' ');
  // Join words split by hyphen at line breaks: "tekno-\nlogi" => "teknologi"
  t = t.replace(/([A-Za-zÀ-ÖØ-öø-ÿ])-(?:\n|\r\n)(?=\p{Ll})/gu, '$1');
  // Collapse multiple blank lines
  t = t.replace(/\n{3,}/g, '\n\n');
  return t;
}

function cleanJoin(lines) {
  const text = lines.join(' ').replace(/\s+/g, ' ').trim();
  return text;
}

function parseKbliText(text) {
  const t = normalizeText(text);
  const lines = t.split('\n');

  /** @type {{ code: string, title: string, description: string }[]} */
  const entries = [];
  /** @type {{ code: string, title: string } | null } */
  let current = null;
  /** @type {string[]} */
  let descBuf = [];

  const codeLineRe = /^(\s*)(\d{5})(?:\s*[-–—:]\s*|\s+)(.+)$/; // 5 digits then separator or spaces then title

  for (let raw of lines) {
    const line = raw.trim();
    if (!line) {
      // keep paragraph separation inside description
      if (current && descBuf.length && descBuf[descBuf.length - 1] !== '') descBuf.push('');
      continue;
    }

    const m = line.match(codeLineRe);
    if (m) {
      // finalize previous
      if (current) {
        const description = cleanJoin(descBuf.filter(Boolean));
        entries.push({ code: current.code, title: current.title, description });
      }
      const code = m[2];
      const title = m[3].trim();
      current = { code, title };
      descBuf = [];
      continue;
    }

    // Skip common headers/footers if clearly not part of a description
    if (/^Klasifikasi Baku|^KBLI\b|^Badan Pusat Statistik|^Halaman\b|^Bab\b|^Bagian\b/i.test(line)) {
      continue;
    }

    if (current) {
      descBuf.push(line);
    }
  }

  if (current) {
    const description = cleanJoin(descBuf.filter(Boolean));
    entries.push({ code: current.code, title: current.title, description });
  }

  // Deduplicate by code in case of repeats across pages
  const byCode = new Map();
  for (const e of entries) {
    if (!byCode.has(e.code) || (byCode.get(e.code).description || '').length < (e.description || '').length) {
      byCode.set(e.code, e);
    }
  }

  return Array.from(byCode.values());
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp();
    return;
  }

  const defaultPdf = path.resolve(__dirname, 'KBLI_-_Isi_Buku.pdf');
  const defaultOut = path.resolve(process.cwd(), 'public', 'kbli.json');
  const sourcePath = path.resolve(process.cwd(), args.source ?? defaultPdf);
  const outPath = path.resolve(process.cwd(), args.out ?? defaultOut);

  if (!existsSync(sourcePath)) {
    console.error(`KBLI source not found: ${sourcePath}`);
    process.exitCode = 1;
    return;
  }

  try {
    const pdfBuf = await readFile(sourcePath);
    const data = await pdf(pdfBuf);
    const entries = parseKbliText(data.text || '');

    // Ensure output directory exists
    await mkdir(path.dirname(outPath), { recursive: true });
    await writeFile(outPath, JSON.stringify(entries, null, 2), 'utf8');
    console.log(`KBLI extracted: ${entries.length} entries`);
    console.log(`Saved to: ${outPath}`);
  } catch (err) {
    console.error('Failed to extract KBLI:', err?.message || err);
    process.exitCode = 1;
  }
}

main().catch((e) => {
  console.error('Unexpected error:', e);
  process.exitCode = 1;
});
