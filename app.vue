<template>
  <div>
    <!-- Scroll Progress -->
    <ScrollProgress />
    
    <!-- Loading Bar -->
    <LoadingBar />
    
    <!-- Main App -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// Global app-level logic can be added here if needed.
</script>

<style>
/* Global styles for better responsiveness */
html, body { 
  margin: 0; 
  padding: 0; 
  overflow-x: hidden;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Better focus styles for accessibility */
*:focus-visible {
  outline: 2px solid #eab308;
  outline-offset: 2px;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #eab308;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #ca8a04;
}
</style>