<template>
  <div class="bg-gradient-to-r from-[#1a1a1a] to-[#0A0A0A] text-white overflow-hidden relative border-b border-[#FFD700]/20" style="height: 36px;">
    <!-- Desktop Version -->
    <div class="hidden sm:flex items-center h-full animate-marquee whitespace-nowrap">
      <span class="inline-block mx-6 text-sm font-bold leading-relaxed flex items-center text-white">
        <span class="mr-2 text-[#FFD700] text-base">📞</span> 0811-113-666 | 
        <span class="mr-2 ml-4 text-[#FFD700] text-base">🏢</span> Pendirian PT, CV, PMA | 
        <span class="mr-2 ml-4 text-[#FFD700] text-base">💼</span> Virtual Office & Perizinan | 
        <span class="mr-2 ml-4 text-[#FFD700] text-base">⚡</span> Konsultasi Gratis 24 Jam | 
        <span class="mr-2 ml-4 text-[#FFD700] text-base">🎯</span> Proses 100% Legal & Transparan | 
        <span class="mr-2 ml-4 text-[#FFD700] text-base">📋</span> KBLI Terbaru 2024 | 
        <span class="mr-2 ml-4 text-[#FFD700] text-base">🏆</span> 5000+ Perusahaan Terpercaya
      </span>
    </div>
    
    <!-- Mobile Version -->
    <div class="sm:hidden flex items-center h-full animate-marquee-mobile whitespace-nowrap">
      <span class="inline-block mx-3 text-xs font-bold leading-relaxed flex items-center text-white">
        <span class="mr-1 text-[#FFD700]">📞</span> 0811-113-666 | 
        <span class="mr-1 ml-2 text-[#FFD700]">🏢</span> PT, CV, PMA | 
        <span class="mr-1 ml-2 text-[#FFD700]">💼</span> Virtual Office | 
        <span class="mr-1 ml-2 text-[#FFD700]">⚡</span> 24 Jam | 
        <span class="mr-1 ml-2 text-[#FFD700]">🎯</span> 100% Legal | 
        <span class="mr-1 ml-2 text-[#FFD700]">🏆</span> 5000+ Klien
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
