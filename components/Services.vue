<template>
  <ScrollSection container-class="py-12 sm:py-16 lg:py-20 bg-[#0A0A0A] reveal-animate" :show-header="true" :skeleton-lines="10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-4 sm:mb-6 lg:mb-8">
        <div class="inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-[#FFD700] to-[#FFC107] text-black rounded-full text-xs font-semibold mb-2 sm:mb-3 shadow-lg">
          <span class="mr-1 sm:mr-1.5">🚀</span>
          Layanan Kami
        </div>
        <h2 class="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-2 sm:mb-3 leading-tight">
          Solusi Bisnis <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFC107]">Lengkap</span>
        </h2>
        <p class="text-xs sm:text-sm lg:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Kami menyediakan layanan komprehensif untuk mendukung pertumbuhan bisnis Anda dari awal hingga berkembang.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mobile-optimized">
        <div
          v-for="svc in displayedServices"
          :key="svc.key"
          class="group bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl service-mobile-card shadow-lg border border-white/10 hover:border-amber-300/30 hover:bg-white/10 hover:shadow-2xl transition-all duration-300 cursor-pointer touch-feedback p-4 sm:p-6"
        >
          <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#FFD700] to-[#FFC107] rounded-lg sm:rounded-xl ring-2 ring-[#FFD700]/30 shadow-md flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
            <span class="ui-circle-icon">{{ svc.icon }}</span>
          </div>
          <h3 class="service-mobile-title font-bold text-white group-hover:text-[#FFD700] transition-colors duration-300">{{ svc.title }}</h3>
          <p class="service-mobile-text text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
            {{ svc.description }}
          </p>
          <div class="space-y-1.5 pt-2">
            <div v-for="pt in svc.points" :key="pt" class="flex items-center text-xs sm:text-sm text-gray-400">
              <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FFD700] rounded-full mr-2 sm:mr-3"></span>
              {{ pt }}
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-6 sm:mt-8">
        <div class="bg-gradient-to-r from-[#FFD700] to-[#FFC107] rounded-lg p-3 sm:p-4 lg:p-6 text-black shadow-xl">
          <h3 class="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3">
            Butuh Konsultasi Lebih Lanjut?
          </h3>
          <p class="text-black/90 mb-3 sm:mb-4 lg:mb-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Tim ahli kami siap membantu Anda memilih layanan yang tepat untuk kebutuhan bisnis Anda.
          </p>
          <div class="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
            <a 
              :href="`https://wa.me/62811113666?text=Halo, saya ingin konsultasi tentang layanan RuangOffice`"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-black text-white font-bold text-sm sm:text-base rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span class="mr-2">💬</span>
              Konsultasi Gratis
            </a>
            <a 
              :href="`https://wa.me/62811113666?text=Halo, saya ingin konsultasi tentang layanan RuangOffice`"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border-2 border-black text-black font-semibold text-sm sm:text-base rounded-lg hover:bg-black hover:text-white transition-all duration-300"
            >
              <span class="mr-2">📞</span>
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </div>
  </ScrollSection>
</template>

<script setup lang="ts">
import { servicesContent, type ServiceItem } from '../data/site-content';
const waPhone = '0811113666';
const iconMap: Record<string, string> = {
  'pendirian-pt': '🏢',
  'virtual-office': '💻',
  'private-office': '🏢',
  'konsultasi-hukum': '⚖️',
  'perizinan': '📋',
  'konsultasi-keuangan': '💰',
};
const displayedServices = servicesContent.map((s) => ({
  ...s,
  icon: iconMap[s.key] ?? '✨',
})) as Array<ServiceItem & { icon: string }>;
</script>