<template>
  <section class="hero-slider tw-relative tw-bg-gray-900 tw-overflow-hidden">
    <!-- Slider container -->
    <div class="swiper hero-swiper tw-w-full">
      <div class="swiper-wrapper">
        <!-- Slide 1 -->
        <div class="swiper-slide tw-relative tw-min-h-[400px] md:tw-min-h-[500px]">
          <div class="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-emerald-900/80 tw-to-blue-900/80"></div>
          <img src="/assets/img/RO Banner 1.png" 
               alt="Pendirian PT/CV Terpercaya"
               class="tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover">
          <div class="tw-relative tw-z-10 tw-flex tw-items-center tw-justify-center tw-min-h-[400px] md:tw-min-h-[500px]">
            <div class="tw-text-center tw-text-white tw-px-4">
              <h2 class="tw-text-3xl md:tw-text-5xl tw-font-bold tw-mb-4">
                Pendirian PT/CV Terpercaya
              </h2>
              <p class="tw-text-lg md:tw-text-xl tw-mb-8 tw-max-w-2xl tw-mx-auto">
                Proses cepat, legal, dan terpercaya untuk mendirikan perusahaan Anda
              </p>
              <a href="https://wa.me/62811113666" 
                 class="tw-bg-emerald-500 hover:tw-bg-emerald-600 tw-text-white tw-px-8 tw-py-3 tw-rounded-lg tw-font-semibold tw-text-lg tw-transition-all tw-duration-300">
                Konsultasi Sekarang
              </a>
            </div>
          </div>
        </div>

        <!-- Slide 2 -->
        <div class="swiper-slide tw-relative tw-min-h-[400px] md:tw-min-h-[500px]">
          <div class="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-blue-900/80 tw-to-purple-900/80"></div>
          <img src="/assets/img/RO Banner 2.png" 
               alt="Virtual Office Resmi"
               class="tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover">
          <div class="tw-relative tw-z-10 tw-flex tw-items-center tw-justify-center tw-min-h-[400px] md:tw-min-h-[500px]">
            <div class="tw-text-center tw-text-white tw-px-4">
              <h2 class="tw-text-3xl md:tw-text-5xl tw-font-bold tw-mb-4">
                Virtual Office Resmi
              </h2>
              <p class="tw-text-lg md:tw-text-xl tw-mb-8 tw-max-w-2xl tw-mx-auto">
                Domisili perusahaan legal dengan dukungan administrasi lengkap
              </p>
              <a href="/virtual-office" 
                 class="tw-bg-blue-500 hover:tw-bg-blue-600 tw-text-white tw-px-8 tw-py-3 tw-rounded-lg tw-font-semibold tw-text-lg tw-transition-all tw-duration-300">
                Lihat Layanan
              </a>
            </div>
          </div>
        </div>

        <!-- Slide 3 -->
        <div class="swiper-slide tw-relative tw-min-h-[400px] md:tw-min-h-[500px]">
          <div class="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-purple-900/80 tw-to-emerald-900/80"></div>
          <img src="/assets/img/RO Banner 3.png" 
               alt="Perizinan Usaha Lengkap"
               class="tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover">
          <div class="tw-relative tw-z-10 tw-flex tw-items-center tw-justify-center tw-min-h-[400px] md:tw-min-h-[500px]">
            <div class="tw-text-center tw-text-white tw-px-4">
              <h2 class="tw-text-3xl md:tw-text-5xl tw-font-bold tw-mb-4">
                Perizinan Usaha Lengkap
              </h2>
              <p class="tw-text-lg md:tw-text-xl tw-mb-8 tw-max-w-2xl tw-mx-auto">
                NIB, SIUP, HAKI, ISO, dan perizinan lainnya dengan proses yang mudah
              </p>
              <a href="/perizinan" 
                 class="tw-bg-purple-500 hover:tw-bg-purple-600 tw-text-white tw-px-8 tw-py-3 tw-rounded-lg tw-font-semibold tw-text-lg tw-transition-all tw-duration-300">
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation arrows -->
      <div class="swiper-button-next tw-text-white"></div>
      <div class="swiper-button-prev tw-text-white"></div>

      <!-- Pagination dots -->
      <div class="swiper-pagination"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // Initialize Swiper when component is mounted
  if (typeof window !== 'undefined' && window.Swiper) {
    new window.Swiper('.hero-swiper', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      }
    })
  }
})
</script>

<style scoped>
.hero-slider {
  position: relative;
}

.swiper-slide {
  position: relative;
}

.swiper-button-next,
.swiper-button-prev {
  color: white !important;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  width: 50px !important;
  height: 50px !important;
  margin-top: -25px !important;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  background: rgba(0, 0, 0, 0.5);
}

.swiper-pagination-bullet {
  background: white !important;
  opacity: 0.7;
}

.swiper-pagination-bullet-active {
  opacity: 1;
  background: #10b981 !important;
}
</style>
