<template>
  <div class="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-xl border-t border-white/10 p-3 shadow-2xl">
    <div class="flex gap-2">
      <!-- WhatsApp Button -->
      <a 
        :href="`https://wa.me/62811113666?text=Halo, saya ingin konsultasi tentang layanan RuangOffice`"
        target="_blank"
        rel="noopener"
        class="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg mobile-touch-target touch-feedback"
      >
        <span class="text-lg">💬</span>
        <span class="text-sm">WhatsApp</span>
      </a>
      
      <!-- Call Button -->
      <a 
        href="tel:0811113666"
        class="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold rounded-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg mobile-touch-target touch-feedback"
      >
        <span class="text-lg">📞</span>
        <span class="text-sm">Telepon</span>
      </a>
      
      <!-- Services Button -->
      <a 
        href="#services"
        class="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg mobile-touch-target touch-feedback"
      >
        <span class="text-lg">🚀</span>
        <span class="text-sm">Layanan</span>
      </a>
    </div>
    
    <!-- Safe area for devices with home indicator -->
    <div class="h-safe-area-inset-bottom"></div>
  </div>
</template>

<script setup lang="ts">
// Mobile-first sticky CTA for better conversion on mobile devices
</script>

<style scoped>
.h-safe-area-inset-bottom {
  height: env(safe-area-inset-bottom, 0px);
}

@supports (padding: env(safe-area-inset-bottom)) {
  .mobile-sticky-cta {
    padding-bottom: env(safe-area-inset-bottom);
  }
}
</style>