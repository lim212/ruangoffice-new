#!/usr/bin/env node

// Extract peraturan from legalitas.org/database-peraturan
// Output: public/peraturan.json with schema [{ jenis, nomor, tahun, tentang, file }]

import { writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import url from 'node:url'
import { load as cheerioLoad } from 'cheerio'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const BASE = 'https://legalitas.org'
const START_URL = BASE + '/database-peraturan'

function absUrl(href) {
  if (!href) return ''
  try {
    return new URL(href, BASE).toString()
  } catch {
    return ''
  }
}

function delay(ms) {
  return new Promise((res) => setTimeout(res, ms))
}

async function fetchHtml(url) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ruangoffice-scraper/1.0',
      'Accept': 'text/html,application/xhtml+xml',
      'Accept-Language': 'id-ID,id;q=0.9,en;q=0.8',
      'Cache-Control': 'no-cache'
    }
  })
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`)
  return await res.text()
}

function normalizeText(s) {
  return (s || '').replace(/\s+/g, ' ').trim()
}

const KNOWN_TYPES = [
  'Undang-Undang',
  'Peraturan Pemerintah',
  'Peraturan Presiden',
  'Instruksi Presiden',
  'Keputusan Presiden',
  'Peraturan Menteri',
  'Keputusan Menteri',
  'Peraturan Daerah',
  'Peraturan Gubernur',
  'Peraturan Bupati',
  'Peraturan Walikota',
  'Peraturan Kepala',
  'Surat Edaran'
]

function normalizeJenisCell(text) {
  const t = normalizeText(text)
  for (const k of KNOWN_TYPES) {
    if (t.toLowerCase().includes(k.toLowerCase())) return k
  }
  // Try generic patterns
  const genericMatch = t.match(/\b(Undang[-\s]?Undang|Peraturan|Keputusan|Instruksi|Surat)\b/i)
  if (genericMatch) {
    const word = genericMatch[1]
    // Return capitalized generic word as jenis baseline
    const cap = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    return cap
  }
  return t
}

function cleanNomorCell(text) {
  const t = normalizeText(text)
  // Keep common nomor forms like 12, 12/2020, 12.A, PER-12/2020
  const m = t.match(/[A-Za-z-]*\s*\d+[\w\/.\-]*/)
  return m ? m[0].trim() : t
}

function cleanTahunCell(text) {
  const t = normalizeText(text)
  const m = t.match(/\b(19|20)\d{2}\b/)
  return m ? m[0] : ''
}

function isValidRow(row) {
  if (!row) return false
  const tahunOk = /^(19|20)\d{2}$/.test(String(row.tahun || ''))
  const nomorOk = !!row.nomor && /\d/.test(String(row.nomor))
  const jenisOk = !!row.jenis && String(row.jenis).length > 0
  const tentangOk = !!row.tentang && String(row.tentang).length > 8
  // Accept rows with valid year and description, plus either nomor or jenis present
  return tahunOk && tentangOk && (nomorOk || jenisOk)
}

function extractFromTable($, $table) {
  /** @type {{ jenis: string, nomor: string, tahun: string, tentang: string, file: string }[]} */
  const rows = []
  const $rows = $table.find('tbody tr, tr')
  // Debug: candidate rows count
  // eslint-disable-next-line no-console
  console.log(`    candidate rows: ${$rows.length}`)
  $rows.each((ri, tr) => {
    const tds = $(tr).find('td')
    if (tds.length < 4) return
    // Try to map columns by header names if available
    let jenis = '', nomor = '', tahun = '', tentang = '', file = ''

    // Determine columns by header text if present
    const headers = $table.find('thead th').map((_, th) => normalizeText($(th).text())).get()
    if (headers.length >= 4) {
      const map = {}
      headers.forEach((h, i) => {
        const key = h.toLowerCase()
        if (key.includes('jenis')) map.jenis = i
        else if (key.includes('nomor')) map.nomor = i
        else if (key.includes('tahun')) map.tahun = i
        else if (key.includes('tentang') || key.includes('judul')) map.tentang = i
        else if (key.includes('file') || key.includes('pdf')) map.file = i
      })
      // Require at least jenis, nomor, tahun, tentang columns detected
      if (map.jenis == null || map.nomor == null || map.tahun == null || map.tentang == null) {
        return
      }

      const idxJenis = map.jenis
      const idxNomor = map.nomor
      const idxTahun = map.tahun
      const idxTentang = map.tentang
      const idxFile = map.file

      jenis = normalizeJenisCell($(tds[idxJenis]).text())
      nomor = cleanNomorCell($(tds[idxNomor]).text())
      tahun = cleanTahunCell($(tds[idxTahun]).text())
      tentang = normalizeText($(tds[idxTentang]).text())

      if (idxFile != null && tds[idxFile]) {
        const link = $(tds[idxFile]).find('a[href]')
        const href = link.attr('href') || ''
        if (/\.pdf(\?|#|$)/i.test(href)) file = absUrl(href)
      }
      // Also search any pdf within the row as fallback
      if (!file) {
        const link = $(tr).find('a[href*=".pdf" i], a[href*="download" i]').first()
        const href = link.attr('href') || ''
        if (href) file = absUrl(href)
      }
    } else {
      // Heuristic mapping when no thead headers
      const cells = tds.toArray().map((td) => normalizeText($(td).text()))
      if (cells.length < 4) return
      // Tahun column index
      let idxTahun = cells.findIndex((c) => /\b(19|20)\d{2}\b/.test(c))
      // Jenis column index
      let idxJenis = cells.findIndex((c) => KNOWN_TYPES.some((k) => c.toLowerCase().includes(k.toLowerCase())))
      // Nomor column index
      let idxNomor = cells.findIndex((c) => /\b(?:No\.?|Nomor)\b/i.test(c) || /\d{1,4}\/?\d{2,4}/.test(c))
      // Tentang index as the first long text cell not used by others
      const used = new Set([idxTahun, idxJenis, idxNomor].filter((i) => i >= 0))
      let idxTentang = cells.findIndex((c, i) => !used.has(i) && c.length >= 8)
      // Fallbacks if something missing
      if (idxJenis < 0) idxJenis = 0
      if (idxNomor < 0) idxNomor = 1
      if (idxTahun < 0) idxTahun = 2
      if (idxTentang < 0) idxTentang = Math.max(3, cells.length - 1)

      jenis = normalizeJenisCell(cells[idxJenis] || '')
      nomor = cleanNomorCell(cells[idxNomor] || '')
      tahun = cleanTahunCell(cells[idxTahun] || '')
      tentang = normalizeText(cells[idxTentang] || '')

      const link = $(tr).find('a[href*=".pdf" i], a[href*="download" i]').first()
      const href = link.attr('href') || ''
      if (href) file = absUrl(href)
    }

    const row = { jenis, nomor, tahun, tentang, file }
    if (isValidRow(row)) rows.push(row)
  })
  return rows
}

function extractList($) {
  const rows = []
  // Limit scanning to main content areas to avoid header/footer noise
  const $scope = $('main, article, .content, .entry-content, .post-content, .container, #content').first()
  const $root = $scope.length ? $scope : $('body')

  $root.find('[data-peraturan], .peraturan-item, .card, li, tr').each((_, el) => {
    const $el = $(el)
    const text = normalizeText($el.text())
    if (!text) return

    // Heuristic parsing
    const tahun = (text.match(/\b(19|20)\d{2}\b/) || [,''])[1] ? text.match(/\b(19|20)\d{2}\b/)[0] : ''
    let nomor = ''
    const nomorMatch = text.match(/\b(?:No\.?|Nomor)\s*([\w\/.\-]+)/i) || text.match(/\b(\d{1,4}\/\d{4})\b/)
    if (nomorMatch) nomor = nomorMatch[1] || nomorMatch[0]

    let jenis = normalizeJenisCell(text)

    let tentang = text
    for (const k of KNOWN_TYPES) {
      const re = new RegExp('^' + k.replace(/[-/\\^$*+?.()|[\]{}]/g, r => r) + '\\b', 'i')
      tentang = tentang.replace(re, '').trim()
    }
    tentang = tentang.replace(/\b(?:No\.?|Nomor)\s*[\w\/.\-]+/i, '').trim()
    tentang = tentang.replace(/\b(19|20)\d{2}\b/, '').trim()

    let file = ''
    const link = $el.find('a[href*=".pdf" i], a[href*="download" i]').first()
    const href = link.attr('href') || ''
    if (href) file = absUrl(href)

    const row = { jenis, nomor, tahun, tentang, file }
    if (isValidRow(row)) rows.push(row)
  })
  return rows
}

function uniqueBySignature(items) {
  const seen = new Set()
  const out = []
  for (const it of items) {
    const sig = [it.jenis, it.nomor, it.tahun, it.tentang].map((s) => (s || '').toLowerCase()).join('|')
    if (!seen.has(sig)) {
      seen.add(sig)
      out.push(it)
    }
  }
  return out
}

function extractByLinks($) {
  /** @type {{ jenis: string, nomor: string, tahun: string, tentang: string, file: string }[]} */
  const rows = []
  const candidates = $('a[href*=".pdf" i], a[href*="download" i]')
  candidates.each((_, a) => {
    const $a = $(a)
    const href = $a.attr('href') || ''
    if (!href) return
    const file = absUrl(href)
    // Find nearest meaningful container
    const $scope = $a.closest('tr, li, article, .card, .post, .entry, .entry-content, .content').first()
    const $el = $scope.length ? $scope : $a.parent()
    const text = normalizeText($el.text())
    if (!text) return

    const tahunMatch = text.match(/\b(19|20)\d{2}\b/)
    const tahun = tahunMatch ? tahunMatch[0] : ''
    const nomorMatch = text.match(/\b(?:No\.?|Nomor)\s*([\w\/.\-]+)/i) || text.match(/\b(\d{1,4}\/\d{4})\b/)
    const nomor = nomorMatch ? (nomorMatch[1] || nomorMatch[0]) : ''
    const jenis = normalizeJenisCell(text)

    let tentang = text
    for (const k of KNOWN_TYPES) {
      const re = new RegExp('^' + k.replace(/[-/\\^$*+?.()|[\]{}]/g, r => r) + '\\b', 'i')
      tentang = tentang.replace(re, '').trim()
    }
    tentang = tentang.replace(/\b(?:No\.?|Nomor)\s*[\w\/.\-]+/i, '').trim()
    tentang = tentang.replace(/\b(19|20)\d{2}\b/, '').trim()

    const row = { jenis, nomor, tahun, tentang, file }
    if (isValidRow(row)) rows.push(row)
  })
  return rows
}

async function scrapeAllStatic() {
  /** @type {{ jenis: string, nomor: string, tahun: string, tentang: string, file: string }[]} */
  const all = []
  let url = START_URL
  let page = 0
  const MAX_PAGES = 50

  while (url && page < MAX_PAGES) {
    page++
    console.log(`Scraping page ${page}: ${url}`)
    const html = await fetchHtml(url)
    const $ = cheerioLoad(html)

    let pageRows = []
    const tables = $('table')
    console.log(`Found ${tables.length} table(s) on page ${page}`)
    tables.each((i, tbl) => {
      const $tbl = $(tbl)
      const headers = $tbl.find('thead th').map((_, th) => normalizeText($(th).text())).get()
      if (headers.length) console.log(`  Table ${i + 1} headers: [${headers.join(' | ')}]`)
      const rows = extractFromTable($, $tbl)
      console.log(`  Table ${i + 1} parsed rows: ${rows.length}`)
      if (rows.length) pageRows.push(...rows)
    })

    if (!pageRows.length) {
      console.warn('No valid regulation table found on page', page)
      // Safe fallback: parse main content with strict validation
      pageRows = extractList($)
      if (!pageRows.length) {
        // Last resort: collect by PDF/download links context
        pageRows = extractByLinks($)
      }
    }

    all.push(...pageRows)

    // Find next page link
    let nextHref = $('a[rel="next"]').attr('href') || ''
    if (!nextHref) {
      // Common pagination patterns
      const $active = $('.pagination .active, .page-item.active')
      if ($active.length) {
        const $next = $active.next('li').find('a[href]')
        nextHref = $next.attr('href') || ''
      }
      if (!nextHref) {
        const $nextBtn = $('a.page-link:contains(Next), a:contains(Next), a:contains(›), a:contains(>), a[aria-label="Next"]').filter('[href]')
        if ($nextBtn.length) nextHref = $nextBtn.first().attr('href') || ''
      }
    }

    if (nextHref) {
      url = absUrl(nextHref)
      await delay(500) // be polite
    } else {
      url = ''
    }
  }

  return uniqueBySignature(all).map((it) => ({
    jenis: it.jenis || '',
    nomor: it.nomor || '',
    tahun: it.tahun || '',
    tentang: it.tentang || '',
    file: it.file || ''
  }))
}

async function scrapeAllPuppeteer() {
  let puppeteer
  try {
    // dynamic import to avoid hard crash if not installed
    const mod = await import('puppeteer')
    puppeteer = mod?.default || mod
  } catch (e) {
    console.warn('Puppeteer not installed; skipping headless scraping')
    return []
  }

  /** @type {{ jenis: string, nomor: string, tahun: string, tentang: string, file: string }[]} */
  const all = []
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox','--disable-setuid-sandbox'] })
  const page = await browser.newPage()
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) ruangoffice-scraper/1.0')

  let url = START_URL
  let p = 0
  const MAX_PAGES = 50

  try {
    while (url && p < MAX_PAGES) {
      p++
      console.log(`(puppeteer) Scraping page ${p}: ${url}`)
      await page.goto(url, { waitUntil: 'domcontentloaded' })
      // wait for any row with 4+ tds
      try {
        await page.waitForFunction(() => {
          const rows = Array.from(document.querySelectorAll('table tbody tr'))
          return rows.some(tr => tr.querySelectorAll('td').length >= 4)
        }, { timeout: 15000 })
      } catch {
        console.warn('Timeout waiting for table rows on page', p)
      }

      const pageRows = await page.evaluate(() => {
        function norm(s) { return (s || '').replace(/\s+/g, ' ').trim() }
        const out = []
        const trs = Array.from(document.querySelectorAll('table tbody tr'))
        for (const tr of trs) {
          const tds = Array.from(tr.querySelectorAll('td'))
          if (tds.length < 4) continue
          const jenis = norm(tds[0]?.textContent || '')
          const nomor = norm(tds[1]?.textContent || '')
          const tahun = norm(tds[2]?.textContent || '')
          const tentang = norm(tds[3]?.textContent || '')
          let file = ''
          const a = (tds[4] || tr).querySelector('a[href]')
          if (a) file = a.href
          out.push({ jenis, nomor, tahun, tentang, file })
        }
        return out
      })

      console.log(`(puppeteer) Rows extracted: ${pageRows.length}`)
      for (const r of pageRows) {
        if (isValidRow(r)) all.push(r)
      }

      // pagination via rel="next"
      const nextHref = await page.evaluate(() => {
        const a = document.querySelector('a[rel="next"]')
        return a ? a.getAttribute('href') || '' : ''
      })
      if (nextHref) {
        const nextUrl = new URL(nextHref, page.url()).toString()
        url = nextUrl
      } else {
        url = ''
      }
    }
  } finally {
    await browser.close()
  }

  return uniqueBySignature(all)
}

async function scrapeAll() {
  // Try puppeteer first for dynamic tables
  const headlessItems = await scrapeAllPuppeteer()
  if (headlessItems.length > 0) return headlessItems
  console.warn('Headless scraping yielded no items; falling back to static HTML parsing')
  return await scrapeAllStatic()
}

async function main() {
  const outPath = path.resolve(process.cwd(), 'public', 'peraturan.json')

  try {
    const items = await scrapeAll()
    if (!existsSync(path.dirname(outPath))) {
      await mkdir(path.dirname(outPath), { recursive: true })
    }
    if (items.length === 0) {
      console.warn('No items extracted; keeping existing peraturan.json if present:', outPath)
      console.log(`Extracted peraturan: 0`)
      return
    }
    await writeFile(outPath, JSON.stringify(items, null, 2), 'utf8')
    console.log(`Extracted peraturan: ${items.length}`)
    console.log(`Saved to: ${outPath}`)
  } catch (err) {
    console.error('Failed to extract peraturan:', err?.message || err)
    process.exitCode = 1
  }
}

main().catch((e) => {
  console.error('Unexpected error:', e)
  process.exitCode = 1
})
