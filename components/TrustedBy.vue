<template>
  <section class="bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] py-12 sm:py-16 border-t border-b border-yellow-500/20 relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-amber-500/10 to-yellow-500/5"></div>
    <div class="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-r from-yellow-400/10 to-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-0 right-1/4 w-24 h-24 bg-gradient-to-r from-amber-400/10 to-yellow-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
      <!-- Header Section -->
      <div class="mb-8 sm:mb-12 text-center">
        <div class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 text-black text-sm font-bold tracking-wide uppercase shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group relative overflow-hidden">
          <!-- Shimmer effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          <span class="mr-2 text-lg animate-bounce">🏆</span>
          <span class="relative z-10">Dipercaya</span>
        </div>
        <h3 class="mt-4 text-white text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
          oleh klien dan mitra bisnis
        </h3>
        <p class="mt-3 text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
          Banyak perusahaan telah mempercayai RuangOffice untuk solusi bisnis mereka
        </p>
      </div>

      <!-- Logo rail -->
      <div class="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-yellow-500/20 p-6 shadow-2xl">
        <div class="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0A0A0A] via-[#1A1A1A] to-transparent pointer-events-none z-10"/>
        <div class="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0A0A0A] via-[#1A1A1A] to-transparent pointer-events-none z-10"/>

        <div class="flex gap-12 sm:gap-16 items-center animate-logo-rail will-change-transform hover:[animation-play-state:paused]" :style="{ animationDuration }">
          <div v-for="(logo, idx) in logosTwice" :key="idx" class="shrink-0 group">
            <div class="flex items-center justify-center w-32 h-16 sm:w-40 sm:h-20 bg-white/10 backdrop-blur-sm rounded-xl border border-yellow-500/20 hover:bg-white/20 hover:border-yellow-400/40 transition-all duration-500 hover:scale-110 hover:shadow-xl group-hover:shadow-2xl animate-logo-glow animate-logo-float">
              <img 
                :src="logo.src" 
                :alt="logo.alt" 
                class="h-8 sm:h-12 w-auto object-contain opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 select-none group-hover:scale-110" 
                loading="lazy" 
                draggable="false" 
                aria-hidden="true" 
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
        <div class="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-yellow-500/20 hover:bg-white/10 hover:border-yellow-400/40 transition-all duration-500 hover:scale-105 group">
          <div class="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">100+</div>
          <div class="text-white text-sm sm:text-base font-semibold">Klien Aktif</div>
        </div>
        <div class="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-yellow-500/20 hover:bg-white/10 hover:border-yellow-400/40 transition-all duration-500 hover:scale-105 group">
          <div class="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
          <div class="text-white text-sm sm:text-base font-semibold">Kepuasan</div>
        </div>
        <div class="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-yellow-500/20 hover:bg-white/10 hover:border-yellow-400/40 transition-all duration-500 hover:scale-105 group">
          <div class="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-300 mb-2 group-hover:scale-110 transition-transform duration-300">3+</div>
          <div class="text-white text-sm sm:text-base font-semibold">Tahun</div>
        </div>
        <div class="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-yellow-500/20 hover:bg-white/10 hover:border-yellow-400/40 transition-all duration-500 hover:scale-105 group">
          <div class="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-300 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
          <div class="text-white text-sm sm:text-base font-semibold">Support</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type LogoItem = { src: string; alt: string }

const logos: LogoItem[] = [
  // RuangOffice Brand Services
  { src: '/assets/img/logo-ro.ico', alt: 'RuangOffice.com' },
  { src: '/assets/img/RO Banner 3.png', alt: 'Virtual Office Premium' },
  { src: '/assets/img/RO Banner 1.png', alt: 'RuangOffice Services' },
  { src: '/assets/img/RO Banner 2.png', alt: 'Professional Solutions' },
  { src: '/assets/img/RO Banner 4.png', alt: 'Business Excellence' },
  { src: '/assets/img/RO Banner 5.png', alt: 'Trusted Partner' },
  { src: '/assets/img/RO Banner 6.png', alt: 'Innovation Leader' },
  { src: '/assets/img/RO Banner 7.png', alt: 'Success Stories' },
  { src: '/assets/img/RO Banner 8.png', alt: 'Client Satisfaction' },
  { src: '/assets/img/RO Banner 9.png', alt: 'Quality Service' },
  { src: '/assets/img/RO Banner 10.png', alt: 'Reliable Partner' },
  { src: '/assets/img/RO Banner 11.png', alt: 'Business Growth' },
  { src: '/assets/img/RO Banner 12.png', alt: 'Professional Support' },
  { src: '/assets/img/RO Banner 13.png', alt: 'Excellence Award' },
  { src: '/assets/img/RO Banner 14.png', alt: 'Trusted Brand' },
  { src: '/assets/img/RO Banner 15.png', alt: 'Quality Assurance' },
  { src: '/assets/img/RO Banner 16.png', alt: 'Client Success' },
  { src: '/assets/img/RO Banner 17.png', alt: 'Business Solutions' },
  { src: '/assets/img/RO Banner 18.png', alt: 'Professional Team' },
  { src: '/assets/img/Header-RuangOffice-Dekstop.png', alt: 'RuangOffice Desktop' },
  { src: '/assets/img/Header-RuangOffice-Mobile.png', alt: 'RuangOffice Mobile' },
  { src: '/assets/img/slide-1.svg', alt: 'Business Solutions' },
  { src: '/assets/img/slide-2.svg', alt: 'Professional Services' },
  { src: '/assets/img/slide-3.svg', alt: 'Trusted Partner' },
  { src: '/assets/img/PrivateOffice.png', alt: 'Private Office' },
  { src: '/assets/img/favicon.png', alt: 'RuangOffice Icon' },
  { src: '/assets/img/annie-spratt-hCb3lIB8L8E-unsplash1.jpg', alt: 'Professional Office' },
  { src: '/assets/img/bg-ourteam.png', alt: 'Our Team' },
  { src: '/assets/img/SIkwB4kugdCAvTbx8UeIQAtqCp8cFrU4jb6UwlBV.jpg', alt: 'Business Excellence' },
  { src: '/assets/img/fRWspr0yZ8BRik696jQN0lVA8IJmwTlRvMAzn49W.jpg', alt: 'Professional Services' },
  { src: '/assets/img/oiwfRGt51x1fm75mOjnUy5SlH9DGAszph4baDzxr.png', alt: 'Quality Service' },
  { src: '/assets/img/PM03CaluAPb3b7nKKeU40i37XYdMSUAG5xRHzyhY.png', alt: 'Trusted Partner' },
  { src: '/assets/img/pXFMJkZFZIKb5G392HpQOFrb3cfMzlYhpCcO5EDP.png', alt: 'Business Growth' },
  { src: '/assets/img/RqAhnBtbjH7XJdmB4wBUB587gXFdbO0X8ossEN5C.png', alt: 'Professional Support' },
  { src: '/assets/img/yJb0ymPfQcECvL30dnkc7jKmsSqZSI2plEufNWEQ.png', alt: 'Client Success' },
  { src: '/assets/img/Z9ZgR3u2OQjn3r1uGurEoxnVUmTon7KWN2jKVcE8.png', alt: 'Excellence Award' },
  { src: '/assets/img/ziSAtdCGrc2lj2nd1TxStuuQgw3wS3DErcHQMpUr.png', alt: 'Innovation Leader' },
  { src: '/assets/img/jp-banner-slide1249-1751087824.png', alt: 'Business Solutions' },
  { src: '/assets/img/jp-banner-slide140-1751087941.png', alt: 'Professional Services' },
  { src: '/assets/img/whatsapp-image-2025-06-20-at-11501-pm1afad-1751087941.png', alt: 'Client Support' },
  { src: '/assets/img/10-1741166445.png', alt: 'Professional Team' },
  { src: '/assets/img/11-1741166515.png', alt: 'Quality Assurance' },
  { src: '/assets/img/13-1741166474.png', alt: 'Business Excellence' },
  { src: '/assets/img/14-1741166558.png', alt: 'Client Satisfaction' },
  { src: '/assets/img/icons8-menu-500-1741164827.png', alt: 'Professional Services' },
  { src: '/assets/img/book-loading.gif', alt: 'Loading Service' },
  { src: '/assets/img/Logo RO.ico', alt: 'RuangOffice Logo' },
  { src: '/assets/img/Logo_Ruang Office R.png', alt: 'RuangOffice Brand' },
  { src: '/assets/img/1-Virtual-Office-e1651936348116.jpg', alt: 'Virtual Office' },
  { src: '/assets/img/3-Private-Office-e1651936387295.jpg', alt: 'Private Office' },
  { src: '/assets/img/4-Pendirian-PT-CV-e1651936406677.jpg', alt: 'Pendirian PT/CV' },
  { src: '/assets/img/5-Perizinan-Usaha-e1651936426496.jpg', alt: 'Perizinan Usaha' },
  { src: '/assets/img/6-Meeting-Room-e1651936445705.png', alt: 'Meeting Room' },
  { src: '/assets/img/12-1741166538.png', alt: 'Professional Team' },
  { src: '/assets/img/12-1741166538.png', alt: 'Quality Service' },
  { src: '/assets/img/11-1741166515.png', alt: 'Business Excellence' },
  { src: '/assets/img/13-1741166474.png', alt: 'Client Success' },
  { src: '/assets/img/14-1741166558.png', alt: 'Professional Support' },
  { src: '/assets/img/10-1741166445.png', alt: 'Trusted Partner' },
  { src: '/assets/img/11-1741166515.png', alt: 'Quality Assurance' },
  { src: '/assets/img/13-1741166474.png', alt: 'Business Growth' },
  { src: '/assets/img/14-1741166558.png', alt: 'Client Satisfaction' },
  { src: '/assets/img/10-1741166445.png', alt: 'Professional Team' },
  { src: '/assets/img/11-1741166515.png', alt: 'Quality Service' },
  { src: '/assets/img/13-1741166474.png', alt: 'Business Excellence' },
  { src: '/assets/img/14-1741166558.png', alt: 'Client Success' },
  { src: '/assets/img/10-1741166445.png', alt: 'Professional Team' },
  { src: '/assets/img/11-1741166515.png', alt: 'Quality Service' },
  { src: '/assets/img/13-1741166474.png', alt: 'Business Excellence' },
  { src: '/assets/img/14-1741166558.png', alt: 'Client Success' },
  { src: '/assets/img/10-1741166445.png', alt: 'Professional Team' },
  { src: '/assets/img/11-1741166515.png', alt: 'Quality Service' },
  { src: '/assets/img/13-1741166474.png', alt: 'Business Excellence' },
  { src: '/assets/img/14-1741166558.png', alt: 'Client Success' },
  { src: '/assets/img/10-1741166445.png', alt: 'Professional Team' },
  { src: '/assets/img/11-1741166515.png', alt: 'Quality Service' },
  { src: '/assets/img/13-1741166474.png', alt: 'Business Excellence' },
  { src: '/assets/img/14-1741166558.png', alt: 'Client Success' }
]

// Duplikasi untuk efek loop tanpa jeda
const logosTwice = [...logos, ...logos]

// Kecepatan animasi dapat disesuaikan
const animationDuration = '25s'
</script>

<style scoped>
@keyframes logo-rail {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes logo-glow {
  0%, 100% { 
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
  }
  50% { 
    box-shadow: 0 0 30px rgba(255, 165, 0, 0.5), 0 0 40px rgba(255, 140, 0, 0.3);
  }
}

@keyframes logo-float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
}

.animate-logo-rail {
  animation-name: logo-rail;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.animate-logo-glow {
  animation: logo-glow 3s ease-in-out infinite;
}

.animate-logo-float {
  animation: logo-float 4s ease-in-out infinite;
}

/* Enhanced hover effects */
.group:hover .animate-logo-float {
  animation-duration: 2s;
}

.group:hover .animate-logo-glow {
  animation-duration: 1.5s;
}
</style>


