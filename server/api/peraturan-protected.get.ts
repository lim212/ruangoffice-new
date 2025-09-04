export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const headers = getHeaders(event)
  
  // Check protection headers
  const visitorId = headers['x-visitor-id']
  const requestCount = parseInt(headers['x-request-count'] || '0')
  const sessionStart = parseInt(headers['x-session-start'] || '0')
  
  // Basic protection checks
  if (!visitorId) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Access denied: Missing visitor ID'
    })
  }
  
  // Rate limiting
  if (requestCount > 100) {
    throw createError({
      statusCode: 429,
      statusMessage: 'Rate limit exceeded'
    })
  }
  
  // Session timeout (30 minutes)
  const now = Date.now()
  if (now - sessionStart > 30 * 60 * 1000) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Session expired'
    })
  }
  
  // Check for bot patterns in User-Agent (allow Googlebot for SEO)
  const userAgent = headers['user-agent']?.toLowerCase() || ''
  
  // Allow Googlebot and other legitimate search engine bots
  const allowedBots = [
    'googlebot', 'bingbot', 'slurp', 'duckduckbot', 'baiduspider', 
    'yandexbot', 'facebookexternalhit', 'twitterbot', 'linkedinbot',
    'whatsapp', 'telegrambot', 'applebot', 'ia_archiver'
  ]
  
  // Check if it's an allowed bot first
  const isAllowedBot = allowedBots.some(bot => userAgent.includes(bot))
  
  if (!isAllowedBot) {
    // Block other suspicious bots
    const blockedBotPatterns = [
      'curl', 'wget', 'python', 'requests', 'scrapy', 'selenium', 
      'phantom', 'headless', 'scraper', 'harvester', 'extractor'
    ]
    
    if (blockedBotPatterns.some(pattern => userAgent.includes(pattern))) {
      throw createError({
        statusCode: 403,
        statusMessage: 'Bot access denied'
      })
    }
  }
  
  try {
    // Load Peraturan data
    const peraturanData = await $fetch('/peraturan.json')
    
    // Add protection metadata
    const protectedData = peraturanData.map((item, index) => ({
      ...item,
      _protected: true,
      _visitor: visitorId,
      _index: index,
      _timestamp: now
    }))
    
    // Add rate limiting headers
    setHeader(event, 'X-RateLimit-Remaining', Math.max(0, 100 - requestCount))
    setHeader(event, 'X-RateLimit-Reset', new Date(now + 30 * 60 * 1000).toISOString())
    setHeader(event, 'X-Protection-Status', 'active')
    
    return {
      data: protectedData,
      meta: {
        visitorId,
        requestCount: requestCount + 1,
        timestamp: now,
        protected: true
      }
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to load protected data'
    })
  }
})
