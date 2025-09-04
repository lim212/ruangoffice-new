<template>
  <div v-if="isVisible" class="fixed top-0 left-0 right-0 z-[9998] h-1 bg-transparent">
    <!-- Progress Bar -->
    <div 
      class="h-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 transition-all duration-300 ease-out relative overflow-hidden"
      :style="{ width: `${progress}%` }"
    >
      <!-- Shimmer Effect -->
      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
      
      <!-- Glow Effect -->
      <div class="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 blur-sm opacity-50"></div>
    </div>
    
    <!-- Progress Text (Optional) -->
    <div v-if="showText" class="absolute top-2 right-4 text-xs font-medium text-gray-600 dark:text-gray-300 night:text-indigo-200">
      {{ Math.round(progress) }}%
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  progress: number
  isVisible?: boolean
  showText?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isVisible: true,
  showText: false
})
</script>
