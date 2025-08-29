// Custom SEO composable for per-page dynamic meta
// Wraps Nuxt's built-in useSeoMeta to provide a convenient API
// Place this file in /composables so it is auto-imported by Nuxt

// Use useHead to avoid any naming conflict with built-in useSeoMeta
import { useHead, useRequestURL } from '#imports'

/**
 * Set SEO meta for the current page.
 *
 * @param {Object} options
 * @param {string} [options.title] - Page title.
 * @param {string} [options.description] - Meta description.
 * @param {string|string[]} [options.keywords] - Keywords as comma-separated string or array.
 * @param {string} [options.image] - Absolute URL to preview image for OG/Twitter.
 * @param {string} [options.url] - Canonical URL for the page (will default to current URL).
 * @param {string} [options.type] - Open Graph type, defaults to 'website'.
 * @param {string} [options.siteName] - Site name for og:site_name.
 */
export function useAppSeoMeta (options = {}) {
  const currentUrl = (() => {
    try {
      return useRequestURL().href
    } catch (_) {
      // Fallback for environments without request URL
      return typeof window !== 'undefined' ? window.location.href : ''
    }
  })()

  const defaults = {
    title: 'RuangOffice.com Biro Jasa Legalitas perizinan & Virtual Office #1 Layanan Terbaik',
    description: 'Jasa Pendirian dan Pembuatan layanan Perizinan bikin atau buat PT / CV / Firma / UD / Yayasan, PMA, KAP, SIUP, HAKI, ISO, NIB, Pajak, Virtual Office',
    keywords: 'jasa buat pt, jasa bikin pt, jasa buat cv, jasa pendirian pt, jasa pendirian cv, jasa pendirian PMA, jasa TDP, Jasa SIUP, Jasa ISO, Jasa SNI, jasa bikin SNI, jasa buat SNI, jasa bpom, jasa bikin bpom, jasa buat bpom, jasa buat haki, jasa bikin haki, jasa bikin yayasan, jasa bikin cv, jasa buat firma, jasa bikin firma, jasa buat ud, jasa bikin ud, jasa buat yayasan, jasa bikin yayasan, jasa legalitas, jasa KAP, jasa Haki, jasa konsultan pajak, jasa buat NIB, Jasa Bikin NIB, jasa iso, jasa buat pma, jasa bikin pma, jasa buat pt pma, Virtual Office, perizinan, perijinan, pajak, SIUP, jasa buat siup, jasa bikin siup, Perizinan bikin PT / CV / Firma / UD / Yayasan, Domisili, PMA, KAP, SIUP, HAKI, ISO, NIB, Pajak, Virtual Office',
    image: 'https://blog.ruangofficeku.com/favicon.ico',
    url: currentUrl,
    type: 'website',
    siteName: 'RuangOffice.com'
  }

  const {
    title = defaults.title,
    description = defaults.description,
    keywords = defaults.keywords,
    image = defaults.image,
    url = defaults.url,
    type = defaults.type,
    siteName = defaults.siteName
  } = options || {}

  const keywordsStr = Array.isArray(keywords) ? keywords.filter(Boolean).join(', ') : (keywords || '')

  // Register head tags
  useHead({
    title,
    meta: [
      { name: 'title', content: title },
      { name: 'description', content: description },
      { name: 'keywords', content: keywordsStr },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: siteName },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image }
    ],
    link: [
      { rel: 'canonical', href: url }
    ]
  })
}
