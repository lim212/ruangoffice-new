export const useLoading = () => {
  const isLoading = ref(false)
  const progress = ref(0)
  const loadingText = ref('Loading...')
  const loadingType = ref<'page' | 'data' | 'image' | 'component'>('page')

  // Loading states for different types
  const loadingStates = {
    page: {
      steps: [
        { text: 'Initializing...', progress: 10 },
        { text: 'Loading assets...', progress: 30 },
        { text: 'Preparing content...', progress: 60 },
        { text: 'Finalizing...', progress: 90 },
        { text: 'Complete!', progress: 100 }
      ]
    },
    data: {
      steps: [
        { text: 'Fetching data...', progress: 25 },
        { text: 'Processing...', progress: 50 },
        { text: 'Rendering...', progress: 75 },
        { text: 'Ready!', progress: 100 }
      ]
    },
    image: {
      steps: [
        { text: 'Loading image...', progress: 20 },
        { text: 'Decoding...', progress: 60 },
        { text: 'Optimizing...', progress: 90 },
        { text: 'Loaded!', progress: 100 }
      ]
    },
    component: {
      steps: [
        { text: 'Loading component...', progress: 40 },
        { text: 'Rendering...', progress: 80 },
        { text: 'Ready!', progress: 100 }
      ]
    }
  }

  // Start loading with type
  const startLoading = (type: 'page' | 'data' | 'image' | 'component' = 'page', customText?: string) => {
    isLoading.value = true
    loadingType.value = type
    progress.value = 0
    loadingText.value = customText || loadingStates[type].steps[0].text
    
    // Simulate loading steps
    const steps = loadingStates[type].steps
    let currentStep = 0
    
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        const step = steps[currentStep]
        progress.value = step.progress
        loadingText.value = step.text
        currentStep++
      } else {
        clearInterval(interval)
        // Keep loading for a bit more for smooth transition
        setTimeout(() => {
          finishLoading()
        }, 200)
      }
    }, 300)
  }

  // Finish loading
  const finishLoading = () => {
    progress.value = 100
    loadingText.value = 'Complete!'
    
    setTimeout(() => {
      isLoading.value = false
      progress.value = 0
      loadingText.value = 'Loading...'
    }, 500)
  }

  // Update progress manually
  const updateProgress = (newProgress: number, text?: string) => {
    progress.value = Math.min(100, Math.max(0, newProgress))
    if (text) {
      loadingText.value = text
    }
  }

  // Get loading icon based on type
  const getLoadingIcon = computed(() => {
    switch (loadingType.value) {
      case 'page':
        return '🚀'
      case 'data':
        return '📊'
      case 'image':
        return '🖼️'
      case 'component':
        return '⚡'
      default:
        return '⏳'
    }
  })

  // Get loading color based on type
  const getLoadingColor = computed(() => {
    switch (loadingType.value) {
      case 'page':
        return 'from-blue-500 to-purple-600'
      case 'data':
        return 'from-green-500 to-teal-600'
      case 'image':
        return 'from-pink-500 to-rose-600'
      case 'component':
        return 'from-amber-500 to-orange-600'
      default:
        return 'from-gray-500 to-gray-600'
    }
  })

  return {
    isLoading: readonly(isLoading),
    progress: readonly(progress),
    loadingText: readonly(loadingText),
    loadingType: readonly(loadingType),
    startLoading,
    finishLoading,
    updateProgress,
    getLoadingIcon,
    getLoadingColor
  }
}
