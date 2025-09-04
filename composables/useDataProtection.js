export const useDataProtection = () => {
  const visitorId = ref('')
  const sessionStart = ref(0)
  const requestCount = ref(0)
  const isBlocked = ref(false)

  // Initialize protection
  const initProtection = () => {
    if (process.client) {
      visitorId.value = sessionStorage.getItem('visitor_id') || generateVisitorId()
      sessionStart.value = parseInt(sessionStorage.getItem('session_start') || Date.now().toString())
      requestCount.value = parseInt(sessionStorage.getItem('request_count') || '0')
      
      // Store in session
      sessionStorage.setItem('visitor_id', visitorId.value)
      sessionStorage.setItem('session_start', sessionStart.value.toString())
    }
  }

  // Generate unique visitor ID
  const generateVisitorId = () => {
    const timestamp = Date.now().toString(36)
    const random = Math.random().toString(36).substring(2, 15)
    return `visitor_${timestamp}_${random}`
  }

  // Check if request is allowed
  const isRequestAllowed = () => {
    if (process.server) return true
    
    const now = Date.now()
    const sessionDuration = now - sessionStart.value
    const maxRequests = 100 // Max 100 requests per session
    const maxDuration = 30 * 60 * 1000 // 30 minutes session
    
    // Reset counter if session is too old
    if (sessionDuration > maxDuration) {
      requestCount.value = 0
      sessionStart.value = now
      sessionStorage.setItem('session_start', now.toString())
    }
    
    // Check rate limit
    if (requestCount.value >= maxRequests) {
      isBlocked.value = true
      return false
    }
    
    return true
  }

  // Increment request counter
  const incrementRequest = () => {
    if (process.client) {
      requestCount.value++
      sessionStorage.setItem('request_count', requestCount.value.toString())
    }
  }

  // Get protection headers
  const getProtectionHeaders = () => {
    return {
      'X-Visitor-ID': visitorId.value,
      'X-Request-Count': requestCount.value.toString(),
      'X-Session-Start': sessionStart.value.toString(),
      'X-Protection': 'enabled'
    }
  }

  // Obfuscate data
  const obfuscateData = (data) => {
    if (!data || !Array.isArray(data)) return data
    
    return data.map((item, index) => ({
      ...item,
      _protected: true,
      _visitor: visitorId.value,
      _index: index,
      _timestamp: Date.now()
    }))
  }

  // Check for bot patterns (allow Googlebot for SEO)
  const detectBot = () => {
    if (process.server) return false
    
    const userAgent = navigator.userAgent.toLowerCase()
    
    // Allow Googlebot and other legitimate search engine bots
    const allowedBots = [
      'googlebot', 'bingbot', 'slurp', 'duckduckbot', 'baiduspider', 
      'yandexbot', 'facebookexternalhit', 'twitterbot', 'linkedinbot',
      'whatsapp', 'telegrambot', 'applebot', 'ia_archiver'
    ]
    
    // Check if it's an allowed bot first
    if (allowedBots.some(bot => userAgent.includes(bot))) {
      return false // Allow these bots
    }
    
    // Block other suspicious bots
    const blockedBotPatterns = [
      'curl', 'wget', 'python', 'requests', 'scrapy', 'selenium', 
      'phantom', 'headless', 'scraper', 'harvester', 'extractor'
    ]
    
    return blockedBotPatterns.some(pattern => userAgent.includes(pattern))
  }

  return {
    visitorId: readonly(visitorId),
    sessionStart: readonly(sessionStart),
    requestCount: readonly(requestCount),
    isBlocked: readonly(isBlocked),
    initProtection,
    isRequestAllowed,
    incrementRequest,
    getProtectionHeaders,
    obfuscateData,
    detectBot
  }
}
