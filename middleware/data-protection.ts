export default defineNuxtRouteMiddleware((to, from) => {
  // Generate unique visitor ID
  const visitorId = generateVisitorId()
  
  // Store visitor session
  if (process.client) {
    sessionStorage.setItem('visitor_id', visitorId)
    sessionStorage.setItem('session_start', Date.now().toString())
  }
})

function generateVisitorId(): string {
  const timestamp = Date.now().toString(36)
  const random = Math.random().toString(36).substring(2, 15)
  return `visitor_${timestamp}_${random}`
}
