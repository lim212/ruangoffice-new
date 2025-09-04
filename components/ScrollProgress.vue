<template>
  <div class="fixed top-0 left-0 right-0 z-[9997] h-1 bg-transparent">
    <!-- Scroll Progress Bar -->
    <div 
      class="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out relative overflow-hidden"
      :style="{ width: `${scrollProgress}%` }"
    >
      <!-- Shimmer Effect -->
      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
      
      <!-- Glow Effect -->
      <div class="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-sm opacity-50"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { scrollProgress, setupScrollListener, removeScrollListener } = useScrollLoading()

onMounted(() => {
  setupScrollListener()
})

onUnmounted(() => {
  removeScrollListener()
})
</script>
