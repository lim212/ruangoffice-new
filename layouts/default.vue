<template>
  <div class="min-h-screen flex flex-col bg-white">
    <!-- Main -->
    <main class="flex-1 pb-24 sm:pb-0">
      <slot />
    </main>
    <!-- Mobile Sticky CTA -->
    <MobileStickyCTA />
  </div>
</template>

<script setup lang="ts">
// Layout hanya untuk struktur dasar, komponen di-handle di pages
import MobileStickyCTA from '~/components/MobileStickyCTA.vue'
</script>
