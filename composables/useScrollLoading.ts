export const useScrollLoading = () => {
  const isNearBottom = ref(false)
  const scrollProgress = ref(0)
  const isLoadingMore = ref(false)

  // Scroll event handler
  const handleScroll = () => {
    if (process.client) {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      
      // Calculate scroll progress
      scrollProgress.value = (scrollTop / (documentHeight - windowHeight)) * 100
      
      // Check if near bottom (within 200px)
      isNearBottom.value = scrollTop + windowHeight >= documentHeight - 200
    }
  }

  // Load more content when near bottom
  const loadMoreContent = async (callback: () => Promise<void>) => {
    if (isLoadingMore.value) return
    
    isLoadingMore.value = true
    try {
      await callback()
    } finally {
      isLoadingMore.value = false
    }
  }

  // Setup scroll listener
  const setupScrollListener = () => {
    if (process.client) {
      window.addEventListener('scroll', handleScroll, { passive: true })
      // Initial calculation
      handleScroll()
    }
  }

  // Remove scroll listener
  const removeScrollListener = () => {
    if (process.client) {
      window.removeEventListener('scroll', handleScroll)
    }
  }

  // Watch for near bottom and trigger loading
  watch(isNearBottom, (nearBottom) => {
    if (nearBottom && !isLoadingMore.value) {
      // Emit event for components to listen
      if (process.client) {
        window.dispatchEvent(new CustomEvent('load-more-content'))
      }
    }
  })

  return {
    isNearBottom: readonly(isNearBottom),
    scrollProgress: readonly(scrollProgress),
    isLoadingMore: readonly(isLoadingMore),
    loadMoreContent,
    setupScrollListener,
    removeScrollListener
  }
}
