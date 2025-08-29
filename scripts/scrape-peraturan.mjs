#!/usr/bin/env node

// Puppeteer-based scraper for https://legalitas.org/database-peraturan
// Outputs: public/peraturan.json with schema [{ jenis, nomor, tahun, tentang, file }]
// Usage:
//   node scripts\\scrape-peraturan.mjs [--headless=true|false] [--maxPages=200] [--timeout=20000]
// Env:
//   HEADLESS=0 to disable headless

import path from 'node:path'
import url from 'node:url'
import { mkdir, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import puppeteer from 'puppeteer'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const BASE = 'https://legalitas.org'
const START_URL = BASE + '/database-peraturan'

function parseArgs(argv) {
  const out = {}
  for (const a of argv.slice(2)) {
    const m = a.match(/^--([^=]+)=(.*)$/)
    if (m) out[m[1]] = m[2]
  }
  return out
}

function normalize(s) {
  return (s ?? '').replace(/\s+/g, ' ').trim()
}

function isValidRow(row) {
  if (!row) return false
  const tahunOk = /^(19|20)\d{2}$/.test(String(row.tahun || ''))
  const tentangOk = String(row.tentang || '').trim().length > 3
  const jenisOk = String(row.jenis || '').trim().length > 0
  const nomorOk = String(row.nomor || '').trim().length > 0
  return tahunOk && tentangOk && (jenisOk || nomorOk)
}

async function extractRowsFromPage(page) {
  // Returns array of { jenis, nomor, tahun, tentang, file }
  return await page.evaluate(() => {
    function norm(s) { return (s ?? '').replace(/\s+/g, ' ').trim() }

    const results = []
    const table = document.querySelector('table') || document.querySelector('table.dataTable')
    if (!table) {
      // Fallback: scan generic list items
      document.querySelectorAll('tbody tr, tr').forEach((tr) => {
        const tds = tr.querySelectorAll('td')
        if (tds.length >= 4) {
          const cells = Array.from(tds).map((td) => norm(td.textContent))
          let jenis = cells[0] || ''
          let nomor = cells[1] || ''
          let tahun = (cells.find((c) => /\b(19|20)\d{2}\b/.test(c)) || '').match(/\b(19|20)\d{2}\b/)?.[0] || ''
          let tentang = cells[cells.length - 2] || cells[2] || ''
          let file = ''
          const link = tr.querySelector('a[href*=".pdf" i]') || tr.querySelector('a[href*="download" i]')
          if (link) file = new URL(link.getAttribute('href') || '', document.baseURI).toString()
          results.push({ jenis, nomor, tahun, tentang, file })
        }
      })
      return results
    }

    // Map headers to indices
    const headers = Array.from(table.querySelectorAll('thead th')).map((th) => norm(th.textContent))
    const map = {}
    headers.forEach((h, i) => {
      const key = h.toLowerCase()
      if (key.includes('jenis')) map.jenis = i
      else if (key.includes('nomor')) map.nomor = i
      else if (key.includes('tahun')) map.tahun = i
      else if (key.includes('tentang') || key.includes('judul')) map.tentang = i
      else if (key.includes('file') || key.includes('pdf')) map.file = i
    })

    const trs = table.querySelectorAll('tbody tr')
    trs.forEach((tr) => {
      const tds = tr.querySelectorAll('td')
      if (!tds || tds.length === 0) return
      let jenis = '', nomor = '', tahun = '', tentang = '', file = ''

      if (Object.keys(map).length >= 3) {
        if (map.jenis != null && tds[map.jenis]) jenis = norm(tds[map.jenis].textContent)
        if (map.nomor != null && tds[map.nomor]) nomor = norm(tds[map.nomor].textContent)
        if (map.tahun != null && tds[map.tahun]) tahun = (norm(tds[map.tahun].textContent).match(/\b(19|20)\d{2}\b/) || [,''])[0] || ''
        if (map.tentang != null && tds[map.tentang]) tentang = norm(tds[map.tentang].textContent)
        if (map.file != null && tds[map.file]) {
          const a = tds[map.file].querySelector('a[href]')
          const href = a?.getAttribute('href') || ''
          if (/\.pdf(\?|#|$)/i.test(href)) file = new URL(href, document.baseURI).toString()
        }
      } else {
        const cells = Array.from(tds).map((td) => norm(td.textContent))
        jenis = cells[0] || ''
        nomor = cells[1] || ''
        tahun = (cells.find((c) => /\b(19|20)\d{2}\b/.test(c)) || '').match(/\b(19|20)\d{2}\b/)?.[0] || ''
        tentang = cells[cells.length - 2] || cells[2] || ''
      }

      if (!file) {
        const link = tr.querySelector('a[href*=".pdf" i], a[href*="download" i]')
        const href = link?.getAttribute('href') || ''
        if (href) file = new URL(href, document.baseURI).toString()
      }

      results.push({ jenis, nomor, tahun, tentang, file })
    })

    return results
  })
}

async function waitForTableRows(page, timeout) {
  try {
    await page.waitForSelector('tbody tr', { timeout })
  } catch {
    // Fallback to any <table>
    await page.waitForSelector('table', { timeout })
  }
}

async function clickNextIfAny(page) {
  return await page.evaluate(() => {
    const sels = [
      'a.paginate_button.next:not(.disabled)',
      'li.next:not(.disabled) a',
      'a[rel="next"]',
      'button[aria-label="Next"]:not([disabled])',
      'a.next:not(.disabled)'
    ]
    for (const sel of sels) {
      const el = document.querySelector(sel)
      if (el) {
        (el instanceof HTMLElement ? el : el).click()
        return true
      }
    }
    return false
  })
}

async function main() {
  const args = parseArgs(process.argv)
  const headlessArg = args.headless ?? (process.env.HEADLESS === '0' ? 'false' : 'true')
  const headless = String(headlessArg).toLowerCase() !== 'false'
  const maxPages = Number(args.maxPages ?? 200)
  const timeout = Number(args.timeout ?? 20000)

  console.log(`[scrape-peraturan] Launching Puppeteer (headless=${headless})`)
  const browser = await puppeteer.launch({ headless })
  const page = await browser.newPage()
  page.setDefaultTimeout(timeout)

  const outPath = path.resolve(process.cwd(), 'public', 'peraturan.json')
  const outDir = path.dirname(outPath)
  if (!existsSync(outDir)) await mkdir(outDir, { recursive: true })

  /** @type {{ jenis: string, nomor: string, tahun: string, tentang: string, file: string }[]} */
  const results = []
  const dedup = new Set()

  try {
    await page.goto(START_URL, { waitUntil: 'networkidle2', timeout })
    await waitForTableRows(page, timeout)

    let pageIndex = 1
    for (; pageIndex <= maxPages; pageIndex++) {
      console.log(`[scrape-peraturan] Extracting page ${pageIndex}`)
      const rows = await extractRowsFromPage(page)
      let newCount = 0
      for (const r of rows) {
        const row = {
          jenis: normalize(r.jenis),
          nomor: normalize(r.nomor),
          tahun: normalize(r.tahun),
          tentang: normalize(r.tentang),
          file: normalize(r.file)
        }
        const key = JSON.stringify([row.jenis, row.nomor, row.tahun, row.tentang, row.file])
        if (!dedup.has(key) && isValidRow(row)) {
          dedup.add(key)
          results.push(row)
          newCount++
        }
      }
      console.log(`[scrape-peraturan] Page ${pageIndex}: +${newCount} rows (total ${results.length})`)

      // Try clicking Next; if missing, try URL parameter pagination (?page=n)
      const getSignature = async () => await page.evaluate(() => Array.from(document.querySelectorAll('tbody tr')).slice(0, 5).map((tr)=>tr.textContent?.trim()).join('|'))
      const prevSigClick = await getSignature()
      const clicked = await clickNextIfAny(page)
      if (clicked) {
        try {
          await page.waitForFunction((prev) => {
            const curr = Array.from(document.querySelectorAll('tbody tr')).slice(0, 5).map((tr)=>tr.textContent?.trim()).join('|')
            return curr && curr !== prev
          }, { timeout: Math.max(1500, Math.min(timeout, 8000)) }, prevSigClick)
        } catch {}
        await new Promise((r) => setTimeout(r, 500))
        continue
      }

      // Fallback: query param pagination
      const urlWithPage = `${START_URL}?page=${pageIndex + 1}`
      console.log(`[scrape-peraturan] Trying page param: ${urlWithPage}`)
      const prevSignature = await page.evaluate(() => Array.from(document.querySelectorAll('tbody tr')).slice(0, 3).map((tr)=>tr.textContent?.trim()).join('|'))
      await page.goto(urlWithPage, { waitUntil: 'networkidle2', timeout }).catch(() => {})
      try { await waitForTableRows(page, Math.min(timeout, 8000)) } catch {}
      const newSignature = await page.evaluate(() => Array.from(document.querySelectorAll('tbody tr')).slice(0, 3).map((tr)=>tr.textContent?.trim()).join('|'))
      if (!newSignature || newSignature === prevSignature) {
        console.log('[scrape-peraturan] No further pages detected; stopping.')
        break
      }
    }
  } catch (e) {
    console.error('[scrape-peraturan] Error:', e?.message || e)
  } finally {
    try {
      const pretty = JSON.stringify(results, null, 2)
      await writeFile(outPath, pretty, 'utf8')
      console.log(`[scrape-peraturan] Wrote ${results.length} rows to ${outPath}`)
    } catch (e) {
      console.error('[scrape-peraturan] Failed to write output:', e?.message || e)
    }
    await browser.close().catch(() => {})
  }
}

main().catch((e) => {
  console.error('[scrape-peraturan] Unexpected error:', e)
  process.exitCode = 1
})
