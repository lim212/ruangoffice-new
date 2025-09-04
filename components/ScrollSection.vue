<template>
  <div ref="sectionRef" class="scroll-section" :class="containerClass">
    <!-- Loading Placeholder -->
    <div 
      v-if="!isVisible && !hasError"
      class="w-full"
      :class="placeholderClass"
    >
      <!-- Skeleton Loading -->
      <div class="animate-pulse">
        <!-- Header Skeleton -->
        <div v-if="showHeader" class="mb-6">
          <div class="h-8 bg-gray-200 dark:bg-slate-700 night:bg-indigo-800 rounded-lg w-1/3 mb-4"></div>
          <div class="h-4 bg-gray-200 dark:bg-slate-700 night:bg-indigo-800 rounded w-2/3"></div>
        </div>
        
        <!-- Content Skeleton -->
        <div class="space-y-4">
          <div v-for="i in skeletonLines" :key="i" class="space-y-2">
            <div class="h-4 bg-gray-200 dark:bg-slate-700 night:bg-indigo-800 rounded" :style="{ width: `${Math.random() * 40 + 60}%` }"></div>
            <div v-if="i % 3 === 0" class="h-4 bg-gray-200 dark:bg-slate-700 night:bg-indigo-800 rounded w-3/4"></div>
          </div>
        </div>
        
        <!-- Loading Indicator -->
        <div class="flex items-center justify-center mt-8">
          <div class="flex items-center space-x-2 text-gray-500 dark:text-gray-400 night:text-indigo-300">
            <div class="w-4 h-4 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full animate-pulse"></div>
            <span class="text-sm font-medium">Loading content...</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Error State -->
    <div 
      v-if="hasError"
      class="w-full text-center py-12"
      :class="placeholderClass"
    >
      <div class="w-16 h-16 mx-auto mb-4 bg-red-100 dark:bg-red-900/30 night:bg-red-900/30 rounded-full flex items-center justify-center">
        <span class="text-2xl text-red-500">⚠️</span>
      </div>
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white night:text-indigo-100 mb-2">
        Failed to load content
      </h3>
      <p class="text-gray-600 dark:text-gray-300 night:text-indigo-200 mb-4">
        There was an error loading this section
      </p>
      <button 
        @click="retryLoad"
        class="px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
      >
        Try Again
      </button>
    </div>

    <!-- Actual Content -->
    <div v-if="isVisible && !hasError" class="w-full">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  containerClass?: string
  placeholderClass?: string
  showHeader?: boolean
  skeletonLines?: number
  threshold?: number
  rootMargin?: string
}

const props = withDefaults(defineProps<Props>(), {
  containerClass: '',
  placeholderClass: '',
  showHeader: true,
  skeletonLines: 5,
  threshold: 0.1,
  rootMargin: '100px'
})

const isVisible = ref(false)
const hasError = ref(false)
const sectionRef = ref<HTMLElement>()
const { startLoading, finishLoading } = useLoading()

// Intersection Observer
let observer: IntersectionObserver | null = null

const startLoadingContent = () => {
  startLoading('component', 'Loading content...')
}

const onContentLoad = () => {
  isVisible.value = true
  hasError.value = false
  finishLoading()
}

const onContentError = () => {
  hasError.value = true
  isVisible.value = false
  finishLoading()
}

const retryLoad = () => {
  hasError.value = false
  isVisible.value = false
  startLoadingContent()
  
  // Simulate content loading delay
  setTimeout(() => {
    onContentLoad()
  }, 800)
}

// Setup intersection observer
const setupObserver = () => {
  if (!sectionRef.value) return

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isVisible.value && !hasError.value) {
          startLoadingContent()
          
          // Simulate content loading delay
          setTimeout(() => {
            onContentLoad()
          }, 800)
          
          // Stop observing
          observer?.unobserve(entry.target)
        }
      })
    },
    {
      threshold: props.threshold,
      rootMargin: props.rootMargin
    }
  )

  observer.observe(sectionRef.value)
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
