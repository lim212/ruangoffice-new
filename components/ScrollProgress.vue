<template>
  <div class="fixed left-0 right-0 z-[45] h-1 bg-transparent" :class="topOffsetClass">
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

// Offset progress bar di bawah header (tinggi header ~56-64px)
const topOffsetClass = computed(() => 'top-[56px] sm:top-[64px]')

onMounted(() => {
  setupScrollListener()
})

onUnmounted(() => {
  removeScrollListener()
})
</script>
