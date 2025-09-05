<template>
  <section class="py-12 sm:py-16 lg:py-20 bg-white reveal-animate">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-10 sm:mb-12 lg:mb-16">
        <div class="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-full text-sm sm:text-base font-semibold mb-4 sm:mb-6 shadow-lg">
          <span class="mr-2 sm:mr-3">🏢</span>
          Layanan Lengkap
        </div>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
          Solusi Bisnis <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Terpadu</span>
        </h2>
        <p class="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
          Kami menyediakan layanan lengkap untuk mendukung pertumbuhan bisnis Anda dari awal hingga berkembang.
        </p>
      </div>

      <!-- Banner Slider -->
      <div class="relative">
        <!-- Main Slider -->
        <div class="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl">
          <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div 
              v-for="(slide, index) in slides" 
              :key="index"
              class="w-full flex-shrink-0 relative"
            >
              <img 
                :src="slide.image" 
                :alt="slide.title"
                class="w-full h-56 sm:h-72 md:h-80 lg:h-96 object-cover"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div class="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
                <h3 class="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 leading-tight">{{ slide.title }}</h3>
                <p class="text-sm sm:text-base lg:text-lg text-gray-200 mb-3 sm:mb-4 leading-relaxed">{{ slide.description }}</p>
                <a 
                  :href="slide.link"
                  class="inline-flex items-center px-3 sm:px-4 lg:px-6 py-2 sm:py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base"
                >
                  {{ slide.buttonText }}
                  <span class="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Navigation Arrows -->
          <button 
            @click="prevSlide"
            class="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white text-gray-800 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button 
            @click="nextSlide"
            class="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white text-gray-800 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        <!-- Slide Indicators -->
        <div class="flex justify-center mt-4 sm:mt-6 space-x-2">
          <button 
            v-for="(slide, index) in slides" 
            :key="index"
            @click="goToSlide(index)"
            class="w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300"
            :class="index === currentSlide ? 'bg-yellow-500 w-6 sm:w-8' : 'bg-gray-300 hover:bg-gray-400'"
            :aria-label="`Go to slide ${index + 1}`"
          ></button>
        </div>

        <!-- Slide Counter -->
        <div class="text-center mt-3 sm:mt-4">
          <span class="text-xs sm:text-sm text-gray-600 bg-white/80 px-2 py-1 rounded-full">
            {{ currentSlide + 1 }} / {{ slides.length }}
          </span>
        </div>
      </div>

      <!-- Quick Navigation Grid -->
      <div class="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
        <button 
          v-for="(slide, index) in slides.slice(0, 12)" 
          :key="index"
          @click="goToSlide(index)"
          class="group relative overflow-hidden rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          :aria-label="`Go to ${slide.title}`"
        >
          <img 
            :src="slide.image" 
            :alt="slide.title"
            class="w-full h-16 sm:h-20 md:h-24 object-cover group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-white text-xs sm:text-sm font-semibold text-center px-1 leading-tight">
              {{ slide.shortTitle }}
            </div>
          </div>
        </button>
      </div>

      <!-- Auto-play Controls -->
      <div class="mt-6 sm:mt-8 text-center">
        <div class="flex items-center justify-center space-x-4">
          <button 
            @click="toggleAutoPlay"
            class="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
          >
            <span class="text-lg">{{ isAutoPlaying ? '⏸️' : '▶️' }}</span>
            <span class="text-sm text-gray-700">{{ isAutoPlaying ? 'Pause' : 'Play' }}</span>
          </button>
          <div class="text-sm text-gray-500">
            Auto-play: {{ isAutoPlaying ? 'ON' : 'OFF' }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Slide data with actual images from the assets
const slides = ref([
  {
    image: '/assets/img/RO Banner 1.png',
    title: 'Virtual Office Jakarta',
    shortTitle: 'Virtual Office',
    description: 'Solusi kantor virtual dengan alamat bisnis terpercaya di Jakarta. Dapatkan surat masuk, meeting room, dan layanan administrasi profesional.',
    link: '#virtual-office',
    buttonText: 'Lihat Detail'
  },
  {
    image: '/assets/img/RO Banner 2.png',
    title: 'Pendirian PT & CV',
    shortTitle: 'PT & CV',
    description: 'Proses pendirian perusahaan yang cepat, legal, dan terpercaya. Konsultasi gratis untuk memilih struktur bisnis yang tepat.',
    link: '#pendirian-pt',
    buttonText: 'Konsultasi Gratis'
  },
  {
    image: '/assets/img/RO Banner 3.png',
    title: 'Layanan Perizinan Lengkap',
    shortTitle: 'Perizinan',
    description: 'Pengurusan SIUP, NIB, ISO, dan perizinan lainnya sesuai standar OSS RBA. Proses cepat dengan tim ahli berpengalaman.',
    link: '#perizinan',
    buttonText: 'Lihat Layanan'
  },
  {
    image: '/assets/img/RO Banner 4.png',
    title: 'Konsultasi Hukum & Bisnis',
    shortTitle: 'Konsultasi',
    description: 'Tim ahli hukum dan bisnis siap membantu Anda mengatasi berbagai permasalahan legal dan strategi pengembangan usaha.',
    link: '#konsultasi',
    buttonText: 'Hubungi Kami'
  },
  {
    image: '/assets/img/RO Banner 5.png',
    title: 'Private Office & Coworking',
    shortTitle: 'Private Office',
    description: 'Ruang kerja pribadi dengan fasilitas lengkap. Ideal untuk startup, freelancer, dan perusahaan yang membutuhkan ruang kerja profesional.',
    link: '#private-office',
    buttonText: 'Booking Sekarang'
  },
  {
    image: '/assets/img/RO Banner 6.png',
    title: 'Pengurusan PMA & Investasi',
    shortTitle: 'PMA',
    description: 'Layanan pendirian dan pengurusan Penanaman Modal Asing (PMA) dengan konsultasi investasi yang komprehensif.',
    link: '#pma',
    buttonText: 'Info Lengkap'
  },
  {
    image: '/assets/img/RO Banner 7.png',
    title: 'Sertifikasi ISO & Standar',
    shortTitle: 'ISO',
    description: 'Bantu perusahaan Anda mendapatkan sertifikasi ISO untuk meningkatkan kredibilitas dan standar kualitas.',
    link: '#iso',
    buttonText: 'Mulai Sertifikasi'
  },
  {
    image: '/assets/img/RO Banner 8.png',
    title: 'Layanan Akuntansi & Pajak',
    shortTitle: 'Akuntansi',
    description: 'Jasa akuntansi, pembukuan, dan konsultasi pajak untuk memastikan kepatuhan perpajakan perusahaan Anda.',
    link: '#akuntansi',
    buttonText: 'Konsultasi Pajak'
  },
  {
    image: '/assets/img/RO Banner 9.png',
    title: 'Virtual Address & Mail Forwarding',
    shortTitle: 'Virtual Address',
    description: 'Alamat virtual resmi untuk bisnis Anda dengan layanan penerimaan dan pengiriman surat yang profesional.',
    link: '#virtual-address',
    buttonText: 'Daftar Sekarang'
  },
  {
    image: '/assets/img/RO Banner 10.png',
    title: 'Meeting Room & Event Space',
    shortTitle: 'Meeting Room',
    description: 'Ruang meeting modern dengan teknologi terkini. Ideal untuk presentasi, training, dan acara bisnis lainnya.',
    link: '#meeting-room',
    buttonText: 'Reservasi'
  },
  {
    image: '/assets/img/RO Banner 11.png',
    title: 'Business Support Services',
    shortTitle: 'Business Support',
    description: 'Layanan pendukung bisnis lengkap termasuk resepsionis, administrasi, dan customer service profesional.',
    link: '#business-support',
    buttonText: 'Lihat Layanan'
  },
  {
    image: '/assets/img/RO Banner 12.png',
    title: 'Digital Marketing & Branding',
    shortTitle: 'Digital Marketing',
    description: 'Strategi digital marketing dan branding untuk meningkatkan visibility dan pertumbuhan bisnis Anda.',
    link: '#digital-marketing',
    buttonText: 'Konsultasi Gratis'
  },
  {
    image: '/assets/img/RO Banner 13.png',
    title: 'Training & Workshop',
    shortTitle: 'Training',
    description: 'Pelatihan dan workshop untuk pengembangan SDM dan peningkatan kompetensi tim bisnis Anda.',
    link: '#training',
    buttonText: 'Daftar Sekarang'
  },
  {
    image: '/assets/img/RO Banner 14.png',
    title: 'IT Support & Technology',
    shortTitle: 'IT Support',
    description: 'Dukungan teknologi informasi dan solusi IT untuk mendukung operasional bisnis yang efisien.',
    link: '#it-support',
    buttonText: 'Hubungi Support'
  },
  {
    image: '/assets/img/RO Banner 15.png',
    title: 'Co-working Space',
    shortTitle: 'Co-working',
    description: 'Ruang kerja bersama yang nyaman dan produktif dengan fasilitas modern untuk kolaborasi bisnis.',
    link: '#coworking',
    buttonText: 'Cek Ketersediaan'
  },
  {
    image: '/assets/img/RO Banner 16.png',
    title: 'Business Development',
    shortTitle: 'Business Dev',
    description: 'Strategi pengembangan bisnis dan ekspansi pasar untuk pertumbuhan perusahaan yang berkelanjutan.',
    link: '#business-dev',
    buttonText: 'Konsultasi Strategi'
  },
  {
    image: '/assets/img/RO Banner 17.png',
    title: 'Layanan Lengkap',
    shortTitle: 'Lengkap',
    description: 'Solusi bisnis terpadu dari RuangOffice untuk mendukung kesuksesan dan pertumbuhan bisnis Anda.',
    link: '#contact',
    buttonText: 'Hubungi Kami'
  },
  {
    image: '/assets/img/RO Banner 18.png',
    title: 'Premium Services',
    shortTitle: 'Premium',
    description: 'Layanan premium dengan standar internasional untuk perusahaan yang mengutamakan kualitas terbaik.',
    link: '#premium',
    buttonText: 'Info Premium'
  }
]);

const currentSlide = ref(0);
const isAutoPlaying = ref(true);
let autoPlayInterval: NodeJS.Timeout | null = null;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? slides.value.length - 1 : currentSlide.value - 1;
};

const goToSlide = (index: number) => {
  currentSlide.value = index;
};

const toggleAutoPlay = () => {
  isAutoPlaying.value = !isAutoPlaying.value;
  if (isAutoPlaying.value) {
    startAutoPlay();
  } else {
    stopAutoPlay();
  }
};

const startAutoPlay = () => {
  if (autoPlayInterval) return;
  autoPlayInterval = setInterval(() => {
    nextSlide();
  }, 5000);
};

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
  }
};

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  stopAutoPlay();
});
</script>

