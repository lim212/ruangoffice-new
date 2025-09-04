<template>
  <ScrollSection container-class="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-black via-gray-900 to-black dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 night:from-indigo-950 night:via-purple-950 night:to-indigo-950" :show-header="true" :skeleton-lines="10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-8 sm:mb-12 lg:mb-16">
        <div class="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-black rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-lg">
          <span class="mr-2">🚀</span>
          Layanan Kami
        </div>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Solusi Bisnis <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">Lengkap</span>
        </h2>
        <p class="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Kami menyediakan layanan komprehensif untuk mendukung pertumbuhan bisnis Anda dari awal hingga berkembang.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <!-- Service 1: Pendirian PT -->
        <div class="group bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-amber-200/20 hover:bg-white/10 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
          <div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
            <span class="text-lg sm:text-2xl group-hover:animate-bounce">🏢</span>
          </div>
          <h3 class="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-amber-300 transition-colors duration-300">Pendirian PT</h3>
          <p class="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 group-hover:text-gray-200 transition-colors duration-300">
            Pendirian PT dengan proses cepat dan legal sesuai standar OSS RBA. Selesai dalam 1-3 hari kerja.
          </p>
          <div class="space-y-2">
            <div class="flex items-center text-xs sm:text-sm text-gray-400">
              <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full mr-2 sm:mr-3"></span>
              Akta Pendirian
            </div>
            <div class="flex items-center text-xs sm:text-sm text-gray-400">
              <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full mr-2 sm:mr-3"></span>
              NPWP Perusahaan
            </div>
            <div class="flex items-center text-xs sm:text-sm text-gray-400">
              <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full mr-2 sm:mr-3"></span>
              SIUP & TDP
            </div>
          </div>
        </div>

        <!-- Service 2: Virtual Office -->
        <div class="group bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-amber-200/20 hover:bg-white/10 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
          <div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
            <span class="text-lg sm:text-2xl group-hover:animate-bounce">💻</span>
          </div>
          <h3 class="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-amber-300 transition-colors duration-300">Virtual Office</h3>
          <p class="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 group-hover:text-gray-200 transition-colors duration-300">
            Alamat bisnis profesional dengan layanan surat menyurat dan meeting room untuk kebutuhan bisnis Anda.
          </p>
          <div class="space-y-2">
            <div class="flex items-center text-xs sm:text-sm text-gray-400">
              <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full mr-2 sm:mr-3"></span>
              Alamat Bisnis
            </div>
            <div class="flex items-center text-xs sm:text-sm text-gray-400">
              <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full mr-2 sm:mr-3"></span>
              Layanan Surat
            </div>
            <div class="flex items-center text-xs sm:text-sm text-gray-400">
              <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full mr-2 sm:mr-3"></span>
              Meeting Room
            </div>
          </div>
        </div>

        <!-- Service 3: Private Office -->
        <div class="group bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-amber-200/20 hover:bg-white/10 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
          <div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
            <span class="text-lg sm:text-2xl group-hover:animate-bounce">🏢</span>
          </div>
          <h3 class="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-amber-300 transition-colors duration-300">Private Office</h3>
          <p class="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 group-hover:text-gray-200 transition-colors duration-300">
            Kantor pribadi lengkap dengan fasilitas modern untuk operasional bisnis yang optimal.
          </p>
          <div class="space-y-2">
            <div class="flex items-center text-xs sm:text-sm text-gray-400">
              <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full mr-2 sm:mr-3"></span>
              Ruang Kerja Eksklusif
            </div>
            <div class="flex items-center text-xs sm:text-sm text-gray-400">
              <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full mr-2 sm:mr-3"></span>
              Furniture Lengkap
            </div>
            <div class="flex items-center text-xs sm:text-sm text-gray-400">
              <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full mr-2 sm:mr-3"></span>
              Internet High-Speed
            </div>
          </div>
        </div>

        <!-- Service 4: Konsultasi Hukum -->
        <div class="group bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-amber-200/20 hover:bg-white/10 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
          <div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
            <span class="text-lg sm:text-2xl group-hover:animate-bounce">⚖️</span>
          </div>
          <h3 class="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-amber-300 transition-colors duration-300">Konsultasi Hukum</h3>
          <p class="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 group-hover:text-gray-200 transition-colors duration-300">
            Konsultasi hukum bisnis dengan tim ahli berpengalaman untuk memastikan kepatuhan regulasi.
          </p>
          <div class="space-y-2">
            <div class="flex items-center text-xs sm:text-sm text-gray-400">
              <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full mr-2 sm:mr-3"></span>
              Review Kontrak
            </div>
            <div class="flex items-center text-xs sm:text-sm text-gray-400">
              <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full mr-2 sm:mr-3"></span>
              Compliance Check
            </div>
            <div class="flex items-center text-xs sm:text-sm text-gray-400">
              <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full mr-2 sm:mr-3"></span>
              Legal Opinion
            </div>
          </div>
        </div>

        <!-- Service 5: Perizinan -->
        <div class="group bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-amber-200/20 hover:bg-white/10 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
          <div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
            <span class="text-lg sm:text-2xl group-hover:animate-bounce">📋</span>
          </div>
          <h3 class="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-amber-300 transition-colors duration-300">Perizinan</h3>
          <p class="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 group-hover:text-gray-200 transition-colors duration-300">
            Pengurusan berbagai jenis perizinan bisnis sesuai dengan regulasi yang berlaku.
          </p>
          <div class="space-y-2">
            <div class="flex items-center text-xs sm:text-sm text-gray-400">
              <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full mr-2 sm:mr-3"></span>
              Izin Usaha
            </div>
            <div class="flex items-center text-xs sm:text-sm text-gray-400">
              <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full mr-2 sm:mr-3"></span>
              Izin Lokasi
            </div>
            <div class="flex items-center text-xs sm:text-sm text-gray-400">
              <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full mr-2 sm:mr-3"></span>
              Izin Operasional
            </div>
          </div>
        </div>

        <!-- Service 6: Konsultasi Keuangan -->
        <div class="group bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-amber-200/20 hover:bg-white/10 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
          <div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
            <span class="text-lg sm:text-2xl group-hover:animate-bounce">💰</span>
          </div>
          <h3 class="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-amber-300 transition-colors duration-300">Konsultasi Keuangan</h3>
          <p class="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 group-hover:text-gray-200 transition-colors duration-300">
            Konsultasi keuangan dan akuntansi untuk optimasi pengelolaan keuangan bisnis Anda.
          </p>
          <div class="space-y-2">
            <div class="flex items-center text-xs sm:text-sm text-gray-400">
              <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full mr-2 sm:mr-3"></span>
              Financial Planning
            </div>
            <div class="flex items-center text-xs sm:text-sm text-gray-400">
              <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full mr-2 sm:mr-3"></span>
              Tax Planning
            </div>
            <div class="flex items-center text-xs sm:text-sm text-gray-400">
              <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full mr-2 sm:mr-3"></span>
              Audit Support
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-12 sm:mt-16">
        <div class="bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-black shadow-xl">
          <h3 class="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 lg:mb-6">
            Butuh Konsultasi Lebih Lanjut?
          </h3>
          <p class="text-black/90 mb-4 sm:mb-6 lg:mb-8 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
            Tim ahli kami siap membantu Anda memilih layanan yang tepat untuk kebutuhan bisnis Anda.
          </p>
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a 
              :href="`https://wa.me/62811113666?text=Halo, saya ingin konsultasi tentang layanan RuangOffice`"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-bold text-base sm:text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span class="mr-2">💬</span>
              Konsultasi Gratis
            </a>
            <a 
              :href="`https://wa.me/62811113666?text=Halo, saya ingin konsultasi tentang layanan RuangOffice`"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-black text-black font-semibold text-base sm:text-lg rounded-lg hover:bg-black hover:text-white transition-all duration-300"
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
const waPhone = '0811113666';
</script>