<template>
  <section class="bg-[#0A0A0A] py-8 sm:py-10 border-t border-b border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="mb-5 sm:mb-6 text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD700] text-black text-xs font-semibold tracking-wide uppercase">Dipercaya</div>
        <h3 class="mt-3 text-white text-xl sm:text-2xl font-bold">oleh brand dan klien ternama</h3>
      </div>

      <!-- Logo rail -->
      <div class="relative overflow-hidden">
        <div class="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0A0A0A] to-transparent pointer-events-none"/>
        <div class="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0A0A0A] to-transparent pointer-events-none"/>

        <div class="flex gap-8 sm:gap-12 items-center animate-logo-rail will-change-transform hover:[animation-play-state:paused]" :style="{ animationDuration }">
          <div v-for="(logo, idx) in logosTwice" :key="idx" class="shrink-0">
            <img :src="logo.src" :alt="logo.alt" class="h-7 sm:h-10 w-auto object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition duration-200 select-none" loading="lazy" draggable="false" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type LogoItem = { src: string; alt: string }

const logos: LogoItem[] = [
  { src: '/assets/ruangoffice/images/logo.png', alt: 'RuangOffice' },
  { src: '/assets/ruangoffice/images/what-we-offer/1-Virtual-Office-e1651936348116.jpg', alt: 'Virtual Office' },
  { src: '/assets/ruangoffice/images/what-we-offer/3-Private-Office-e1651936387295.jpg', alt: 'Private Office' },
  { src: '/assets/ruangoffice/images/what-we-offer/4-Pendirian-PT-CV-e1651936406677.jpg', alt: 'Pendirian PT/CV' },
  { src: '/assets/ruangoffice/images/what-we-offer/5-Perizinan-Usaha-e1651936426496.jpg', alt: 'Perizinan Usaha' },
  { src: '/assets/ruangoffice/images/what-we-offer/6-Meeting-Room-e1651936445705.png', alt: 'Meeting Room' }
]

// Duplikasi untuk efek loop tanpa jeda
const logosTwice = [...logos, ...logos]

// Kecepatan animasi dapat disesuaikan
const animationDuration = '30s'
</script>

<style scoped>
@keyframes logo-rail {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.animate-logo-rail {
  animation-name: logo-rail;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
</style>


