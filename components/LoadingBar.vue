<template>
  <div v-if="isLoading" class="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center">
    <!-- Top Progress Bar -->
    <ProgressBar :progress="progress" :is-visible="true" :show-text="false" />
    <!-- Loading Container -->
    <div class="relative w-full max-w-md mx-4">
      <!-- Main Loading Card -->
      <div class="bg-white dark:bg-slate-800 night:bg-indigo-900 rounded-2xl shadow-2xl p-8 border border-gray-200/20 dark:border-slate-700/20 night:border-indigo-700/20">
        <!-- Header -->
        <div class="text-center mb-6">
          <div class="w-16 h-16 mx-auto mb-4 relative">
            <!-- Animated Icon -->
            <div class="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full animate-pulse"></div>
            <div class="absolute inset-2 bg-white dark:bg-slate-800 night:bg-indigo-900 rounded-full flex items-center justify-center">
              <span class="text-2xl animate-bounce">{{ getLoadingIcon }}</span>
            </div>
          </div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white night:text-indigo-100 mb-2">
            {{ loadingText }}
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-300 night:text-indigo-200">
            Please wait while we prepare everything for you
          </p>
        </div>

        <!-- Progress Bar -->
        <div class="mb-6">
          <div class="flex justify-between items-center mb-2">
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300 night:text-indigo-200">
              Progress
            </span>
            <span class="text-sm font-bold text-gray-900 dark:text-white night:text-indigo-100">
              {{ progress }}%
            </span>
          </div>
          
          <!-- Progress Bar Container -->
          <div class="relative h-3 bg-gray-200 dark:bg-slate-700 night:bg-indigo-800 rounded-full overflow-hidden">
            <!-- Progress Fill -->
            <div 
              class="absolute top-0 left-0 h-full bg-gradient-to-r transition-all duration-500 ease-out rounded-full"
              :class="getLoadingColor"
              :style="{ width: `${progress}%` }"
            >
              <!-- Shimmer Effect -->
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
            
            <!-- Progress Glow -->
            <div 
              class="absolute top-0 left-0 h-full bg-gradient-to-r opacity-50 blur-sm transition-all duration-500 ease-out rounded-full"
              :class="getLoadingColor"
              :style="{ width: `${progress}%` }"
            ></div>
          </div>
        </div>

        <!-- Loading Steps -->
        <div class="space-y-2">
          <div 
            v-for="(step, index) in loadingSteps" 
            :key="index"
            class="flex items-center space-x-3 text-sm"
            :class="{
              'text-gray-900 dark:text-white night:text-indigo-100': step.progress <= progress,
              'text-gray-500 dark:text-gray-400 night:text-indigo-300': step.progress > progress
            }"
          >
            <div 
              class="w-2 h-2 rounded-full transition-all duration-300"
              :class="{
                'bg-gradient-to-r from-amber-400 to-yellow-500': step.progress <= progress,
                'bg-gray-300 dark:bg-slate-600 night:bg-indigo-700': step.progress > progress
              }"
            ></div>
            <span class="font-medium">{{ step.text }}</span>
            <div v-if="step.progress <= progress" class="ml-auto">
              <span class="text-xs text-green-500">✓</span>
            </div>
          </div>
        </div>

        <!-- Animated Dots -->
        <div class="flex justify-center space-x-1 mt-6">
          <div class="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style="animation-delay: 0ms"></div>
          <div class="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style="animation-delay: 150ms"></div>
          <div class="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style="animation-delay: 300ms"></div>
        </div>
      </div>

      <!-- Background Effects -->
      <div class="absolute -inset-4 bg-gradient-to-r from-amber-400/20 via-yellow-500/20 to-amber-400/20 rounded-3xl blur-xl animate-pulse"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isLoading, progress, loadingText, loadingType, getLoadingIcon, getLoadingColor } = useLoading()

// Loading steps based on type
const loadingSteps = computed(() => {
  const steps = {
    page: [
      { text: 'Initializing...', progress: 10 },
      { text: 'Loading assets...', progress: 30 },
      { text: 'Preparing content...', progress: 60 },
      { text: 'Finalizing...', progress: 90 }
    ],
    data: [
      { text: 'Fetching data...', progress: 25 },
      { text: 'Processing...', progress: 50 },
      { text: 'Rendering...', progress: 75 }
    ],
    image: [
      { text: 'Loading image...', progress: 20 },
      { text: 'Decoding...', progress: 60 },
      { text: 'Optimizing...', progress: 90 }
    ],
    component: [
      { text: 'Loading component...', progress: 40 },
      { text: 'Rendering...', progress: 80 }
    ]
  }
  
  return steps[loadingType.value] || steps.page
})
</script>
