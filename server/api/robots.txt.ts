export default defineEventHandler(async (event) => {
  const hostname = getHeader(event, 'host') || 'localhost:3000'
  const protocol = hostname.includes('localhost') ? 'http' : 'https'
  const baseUrl = `${protocol}://${hostname}`
  
  const robotsTxt = `User-agent: *
Allow: /

# Allow Googlebot full access for SEO
User-agent: Googlebot
Allow: /
Allow: /kbli
Allow: /peraturan
Allow: /api/kbli-protected
Allow: /api/peraturan-protected

# Allow other legitimate search engines
User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

# Block suspicious bots
User-agent: curl
Disallow: /

User-agent: wget
Disallow: /

User-agent: python
Disallow: /

User-agent: scrapy
Disallow: /

User-agent: selenium
Disallow: /

User-agent: phantom
Disallow: /

# Sitemap
Sitemap: ${baseUrl}/api/sitemap.xml`

  setHeader(event, 'Content-Type', 'text/plain')
  setHeader(event, 'Cache-Control', 'public, max-age=86400')
  
  return robotsTxt
})
