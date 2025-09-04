export default defineEventHandler(async (event) => {
  const hostname = getHeader(event, 'host') || 'localhost:3000'
  const protocol = hostname.includes('localhost') ? 'http' : 'https'
  const baseUrl = `${protocol}://${hostname}`
  
  // Load KBLI data for sitemap
  let kbliData = []
  try {
    kbliData = await $fetch('/kbli.json')
  } catch (error) {
    console.error('Error loading KBLI data for sitemap:', error)
  }
  
  // Load Peraturan data for sitemap
  let peraturanData = []
  try {
    peraturanData = await $fetch('/peraturan.json')
  } catch (error) {
    console.error('Error loading Peraturan data for sitemap:', error)
  }
  
  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Main Pages -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/kbli</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/peraturan</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/hubungi-kami</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- KBLI Pages -->
  ${kbliData.slice(0, 100).map(item => `
  <url>
    <loc>${baseUrl}/kbli?search=${encodeURIComponent(item.code)}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
  
  <!-- Peraturan Pages -->
  ${peraturanData.slice(0, 50).map(item => `
  <url>
    <loc>${baseUrl}/peraturan?search=${encodeURIComponent(item.jenis + ' ' + item.nomor)}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`

  setHeader(event, 'Content-Type', 'application/xml')
  setHeader(event, 'Cache-Control', 'public, max-age=3600')
  
  return sitemap
})
