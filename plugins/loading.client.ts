export default defineNuxtPlugin(() => {
  const { startLoading, finishLoading } = useLoading()

  // Page loading events
  const router = useRouter()
  
  // Start loading on route change
  router.beforeEach((to, from) => {
    if (to.path !== from.path) {
      startLoading('page', 'Loading page...')
    }
  })

  // Finish loading when route is ready
  router.afterEach(() => {
    // Small delay for smooth transition
    setTimeout(() => {
      finishLoading()
    }, 300)
  })

  // Handle page refresh
  if (process.client) {
    window.addEventListener('beforeunload', () => {
      startLoading('page', 'Refreshing page...')
    })

    window.addEventListener('load', () => {
      finishLoading()
    })
  }
})
