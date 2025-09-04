<template>
  <div class="relative overflow-hidden" :class="containerClass">
    <!-- Loading State -->
    <div 
      v-if="!isLoaded && !hasError"
      class="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-slate-700 dark:to-slate-800 night:from-indigo-800 night:to-indigo-900 flex items-center justify-center"
      :class="placeholderClass"
    >
      <!-- Loading Animation -->
      <div class="text-center">
        <!-- Animated Icon -->
        <div class="w-16 h-16 mx-auto mb-4 relative">
          <div class="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full animate-pulse"></div>
          <div class="absolute inset-2 bg-white dark:bg-slate-800 night:bg-indigo-900 rounded-full flex items-center justify-center">
            <span class="text-2xl animate-bounce">🖼️</span>
          </div>
        </div>
        
        <!-- Loading Text -->
        <div class="text-sm font-medium text-gray-600 dark:text-gray-300 night:text-indigo-200 mb-3">
          {{ loadingText }}
        </div>
        
        <!-- Progress Bar -->
        <div class="w-24 h-2 bg-gray-300 dark:bg-slate-600 night:bg-indigo-700 rounded-full overflow-hidden">
          <div class="h-full bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full animate-pulse"></div>
        </div>
        
        <!-- Progress Percentage -->
        <div class="text-xs text-gray-500 dark:text-gray-400 night:text-indigo-300 mt-2">
          {{ Math.round(loadingProgress) }}%
        </div>
      </div>
    </div>

    <!-- Error State -->
    <div 
      v-if="hasError"
      class="absolute inset-0 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/20 dark:to-red-800/20 night:from-red-900/20 night:to-red-800/20 flex items-center justify-center"
      :class="placeholderClass"
    >
      <div class="text-center">
        <div class="w-16 h-16 mx-auto mb-4 bg-red-100 dark:bg-red-900/30 night:bg-red-900/30 rounded-full flex items-center justify-center">
          <span class="text-2xl text-red-500">⚠️</span>
        </div>
        <div class="text-sm font-medium text-red-600 dark:text-red-400 night:text-red-300 mb-2">
          Failed to load image
        </div>
        <button 
          @click="retryLoad"
          class="text-xs text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 night:text-red-300 night:hover:text-red-100 transition-colors duration-200"
        >
          Try again
        </button>
      </div>
    </div>

    <!-- Actual Image -->
    <img
      v-if="isLoaded && !hasError"
      :src="src"
      :alt="alt"
      :class="imageClass"
      @load="onImageLoad"
      @error="onImageError"
      loading="lazy"
    />

    <!-- Intersection Observer Target -->
    <div ref="observerTarget" class="absolute inset-0 pointer-events-none"></div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  src: string
  alt: string
  containerClass?: string
  imageClass?: string
  placeholderClass?: string
  threshold?: number
}

const props = withDefaults(defineProps<Props>(), {
  containerClass: '',
  imageClass: 'w-full h-full object-cover',
  placeholderClass: '',
  threshold: 0.1
})

const isLoaded = ref(false)
const hasError = ref(false)
const loadingProgress = ref(0)
const loadingText = ref('Loading image...')
const observerTarget = ref<HTMLElement>()

// Intersection Observer
let observer: IntersectionObserver | null = null

const startLoadingImage = () => {
  loadingProgress.value = 0
  loadingText.value = 'Loading image...'
  
  // Simulate loading progress
  const interval = setInterval(() => {
    if (loadingProgress.value < 90) {
      loadingProgress.value += Math.random() * 20
      if (loadingProgress.value > 30) loadingText.value = 'Decoding...'
      if (loadingProgress.value > 60) loadingText.value = 'Optimizing...'
    } else {
      clearInterval(interval)
    }
  }, 200)
}

const onImageLoad = () => {
  loadingProgress.value = 100
  loadingText.value = 'Loaded!'
  
  setTimeout(() => {
    isLoaded.value = true
    hasError.value = false
  }, 300)
}

const onImageError = () => {
  hasError.value = true
  isLoaded.value = false
  loadingProgress.value = 0
}

const retryLoad = () => {
  hasError.value = false
  isLoaded.value = false
  loadingProgress.value = 0
  startLoadingImage()
  
  // Create new image element
  const img = new Image()
  img.onload = onImageLoad
  img.onerror = onImageError
  img.src = props.src
}

// Setup intersection observer
const setupObserver = () => {
  if (!observerTarget.value) return

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isLoaded.value && !hasError.value) {
          startLoadingImage()
          
          // Create image element to trigger load
          const img = new Image()
          img.onload = onImageLoad
          img.onerror = onImageError
          img.src = props.src
          
          // Stop observing
          observer?.unobserve(entry.target)
        }
      })
    },
    {
      threshold: props.threshold,
      rootMargin: '50px'
    }
  )

  observer.observe(observerTarget.value)
}

// Cleanup observer
const cleanupObserver = () => {
  if (observer) {
    observer.disconnect()
    observer = null
  }
}

onMounted(() => {
  setupObserver()
})

onUnmounted(() => {
  cleanupObserver()
})
</script>
