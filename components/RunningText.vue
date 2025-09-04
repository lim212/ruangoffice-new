<template>
  <div class="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-2 sm:py-3 overflow-hidden relative">
    <!-- Desktop Version -->
    <div class="hidden sm:block animate-marquee whitespace-nowrap">
      <span class="inline-block mx-8 text-sm sm:text-base font-semibold leading-relaxed">
        🚀 RuangOffice.com - Solusi Bisnis Terpercaya | 
        📞 0811113666 | 
        💼 Pendirian PT, CV, PMA | 
        🏢 Virtual Office & Private Office | 
        ⚖️ Jasa Legalitas & Konsultan | 
        🔒 Terdaftar OSS RBA | 
        ⭐ 5000+ Klien Puas | 
        🎯 98% Sukses Rate | 
        💬 Support 24 Jam
      </span>
    </div>
    
    <!-- Mobile Version -->
    <div class="sm:hidden animate-marquee-mobile whitespace-nowrap">
      <span class="inline-block mx-4 text-xs font-semibold leading-relaxed">
        🚀 RuangOffice.com | 
        📞 0811113666 | 
        💼 Pendirian PT, CV, PMA | 
        🏢 Virtual Office | 
        ⚖️ Jasa Legalitas | 
        🔒 OSS RBA | 
        ⭐ 5000+ Klien | 
        🎯 98% Sukses | 
        💬 24 Jam
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const promos = [
  "Promo September: Diskon 20% Pendirian PT & CV!",
  "Virtual Office Resmi Jakarta mulai Rp 500.000/bulan",
  "Gratis Konsultasi Hukum & Pajak untuk klien baru",
  "Pendirian PMA dengan proses cepat dan legal",
  "KBLI Terbaru 2024 - Update sesuai OSS RBA",
  "Layanan Perizinan Usaha lengkap dan terpercaya",
  "Meeting Room tersedia untuk klien Virtual Office",
  "Konsultasi gratis untuk setiap pertanyaan bisnis"
];
</script>

<style scoped>
.animate-marquee {
  animation: marquee 40s linear infinite;
}

.animate-marquee-mobile {
  animation: marquee-mobile 25s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes marquee-mobile {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* Pause animation on hover for better UX */
.animate-marquee:hover,
.animate-marquee-mobile:hover {
  animation-play-state: paused;
}
</style>
