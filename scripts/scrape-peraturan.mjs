#!/usr/bin/env node

// Scraper for https://legalitas.org/database-peraturan
// - Navigates all pagination pages (until no more Next)
// - Extracts columns: Jenis Peraturan | Nomor | Tahun | Tentang | File
// - Saves to public/peraturan.json
// - Requires: puppeteer (preferred due to potentially dynamic table)
// Fallback: if puppeteer fails, try axios+cheerio for at least first page.

import { mkdir, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import axios from 'axios'
import * as cheerio from 'cheerio'
import puppeteer from 'puppeteer'

const START_URL = 'https://legalitas.org/database-peraturan'
const OUTPUT_PATH = path.resolve(process.cwd(), 'public', 'peraturan.json')

/**
 * Normalize and absolutize URL against base
 * @param {string} href
 * @param {string} base
 */
function toAbsoluteUrl(href, base) {
  if (!href) return ''
  try {
    return new URL(href, base).toString()
  } catch {
    return href
  }
}

/**
 * Extract table rows from a cheerio DOM
 * @param {import('cheerio').CheerioAPI} $
 * @param {string} base
 */
function extractRowsCheerio($, base) {
  /** @type {{ jenis: string, nomor: string, tahun: string, tentang: string, file: string }[]} */
  const rows = []
  const $tables = $('table')
  $tables.each((_, tbl) => {
    const $tbodyRows = $(tbl).find('tbody tr')
    $tbodyRows.each((__, tr) => {
      const tds = $(tr).find('td')
      if (tds.length < 5) return
      const jenis = $(tds[0]).text().trim()
      const nomor = $(tds[1]).text().trim()
      const tahun = $(tds[2]).text().trim()
      const tentang = $(tds[3]).text().trim()
      let file = ''
      // try link inside last column
      const link = $(tds[4]).find('a[href]').attr('href') || ''
      file = toAbsoluteUrl(link, base)
      rows.push({ jenis, nomor, tahun, tentang, file })
    })
  })
  return rows
}

async function scrapeWithAxiosCheerio(url) {
  const res = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; RuangOfficeBot/1.0)' } })
  const $ = cheerio.load(res.data)
  return extractRowsCheerio($, url)
}

async function scrapeWithPuppeteer() {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox','--disable-setuid-sandbox'] })
  const page = await browser.newPage()
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36')
  await page.goto(START_URL, { waitUntil: 'domcontentloaded' })

  /** @type {{ jenis: string, nomor: string, tahun: string, tentang: string, file: string }[]} */
  const all = []
  const seen = new Set()

  async function extractCurrentPage() {
    // Wait for any table rows to appear
    await page.waitForSelector('table tbody tr, table tr', { timeout: 30000 })
    const base = page.url()
    const items = await page.$$eval('table tbody tr', (rows, baseUrl) => {
      const toAbs = (href) => {
        try { return new URL(href, baseUrl).toString() } catch { return href || '' }
      }
      const out = []
      for (const tr of rows) {
        const tds = tr.querySelectorAll('td')
        if (tds.length < 5) continue
        const jenis = tds[0].textContent?.trim() || ''
        const nomor = tds[1].textContent?.trim() || ''
        const tahun = tds[2].textContent?.trim() || ''
        const tentang = tds[3].textContent?.trim() || ''
        const a = tds[4].querySelector('a[href]')
        const file = toAbs(a?.getAttribute('href') || '')
        out.push({ jenis, nomor, tahun, tentang, file })
      }
      return out
    }, base)

    for (const it of items) {
      const key = `${it.jenis}||${it.nomor}||${it.tahun}||${it.tentang}`
      if (!seen.has(key)) {
        seen.add(key)
        all.push(it)
      }
    }
  }

  function hasNextSelector() {
    return page.evaluate(() => {
      const candidates = [
        'div.dataTables_paginate a.next:not(.disabled)',
        'ul.pagination li.next:not(.disabled) a',
        'a[rel="next"]',
        'a.next:not(.disabled)',
        'a:has(span.sr-only:contains("Next"))',
      ]
      for (const sel of candidates) {
        const el = document.querySelector(sel)
        if (el) return true
      }
      // Fallback: find an anchor containing Next/Berikutnya/›/» not disabled
      const anchors = Array.from(document.querySelectorAll('a, button'))
      const next = anchors.find(a => /Next|Berikutnya|›|»/i.test(a.textContent || '') && !a.classList.contains('disabled'))
      return !!next
    })
  }

  async function clickNext() {
    const clicked = await page.evaluate(() => {
      const tryClick = (sel) => {
        const el = document.querySelector(sel)
        if (el) {
          el.dispatchEvent(new MouseEvent('click', { bubbles: true }))
          return true
        }
        return false
      }
      const selectors = [
        'div.dataTables_paginate a.next:not(.disabled)',
        'ul.pagination li.next:not(.disabled) a',
        'a[rel="next"]',
        'a.next:not(.disabled)'
      ]
      for (const s of selectors) {
        if (tryClick(s)) return true
      }
      // Fallback by text
      const anchors = Array.from(document.querySelectorAll('a, button'))
      const cand = anchors.find(a => /Next|Berikutnya|›|»/i.test(a.textContent || '') && !a.classList.contains('disabled'))
      if (cand) { cand.dispatchEvent(new MouseEvent('click', { bubbles: true })); return true }
      return false
    })

    if (clicked) {
      // wait for table to change; simple delay then wait for selector
      await page.waitForTimeout(1500)
      // Heuristic: ensure some change by waiting for network idle or DOM
      try { await page.waitForNetworkIdle({ idleTime: 500, timeout: 5000 }) } catch {}
    }
    return clicked
  }

  // Some tables may support changing length to 100 per page; try to set if DataTables
  try {
    await page.waitForTimeout(800)
    const changed = await page.evaluate(() => {
      const sel = document.querySelector('select[name$="_length"], .dataTables_length select')
      if (sel) {
        const options = Array.from(sel.options)
        const option = options.find(o => ['100','50'].includes(o.value)) || options[options.length - 1]
        if (option) {
          sel.value = option.value
          sel.dispatchEvent(new Event('change', { bubbles: true }))
          return true
        }
      }
      return false
    })
    if (changed) {
      await page.waitForTimeout(1500)
      try { await page.waitForNetworkIdle({ idleTime: 500, timeout: 5000 }) } catch {}
    }
  } catch {}

  // Loop through pages
  let pageIndex = 1
  while (true) {
    console.log(`[scrape-peraturan] Scraping page ${pageIndex} ...`)
    await extractCurrentPage()
    const canNext = await hasNextSelector()
    if (!canNext) break
    const ok = await clickNext()
    if (!ok) break
    pageIndex++
  }

  await browser.close()
  return all
}

async function main() {
  try {
    const data = await scrapeWithPuppeteer()
    if (!data || data.length === 0) {
      console.warn('[scrape-peraturan] Puppeteer extracted 0 rows; trying axios+cheerio for first page as fallback')
      try {
        const first = await scrapeWithAxiosCheerio(START_URL)
        if (first.length > 0) {
          await mkdir(path.dirname(OUTPUT_PATH), { recursive: true })
          await writeFile(OUTPUT_PATH, JSON.stringify(first, null, 2), 'utf8')
          console.log(`[scrape-peraturan] Saved ${first.length} rows to ${OUTPUT_PATH}`)
          return
        }
      } catch (e) {
        console.error('[scrape-peraturan] Fallback failed:', e?.message || e)
      }
    }
    await mkdir(path.dirname(OUTPUT_PATH), { recursive: true })
    await writeFile(OUTPUT_PATH, JSON.stringify(data, null, 2), 'utf8')
    console.log(`[scrape-peraturan] Saved ${data.length} rows to ${OUTPUT_PATH}`)
  } catch (err) {
    console.error('[scrape-peraturan] Error:', err?.message || err)
    // write empty array to keep downstream steps unblocked but signal failure via exitCode
    try {
      await mkdir(path.dirname(OUTPUT_PATH), { recursive: true })
      if (!existsSync(OUTPUT_PATH)) await writeFile(OUTPUT_PATH, '[]', 'utf8')
    } catch {}
    process.exitCode = 1
  }
}

main()
