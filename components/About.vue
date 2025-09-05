<template>
  <ScrollSection container-class="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 night:from-purple-950 night:to-indigo-950" :show-header="true" :skeleton-lines="6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-8 sm:mb-12 lg:mb-16">
        <div class="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-black rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-lg">
          <span class="mr-2">🏢</span>
          Tentang RuangOffice
        </div>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
          Solusi Bisnis <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500">Terpercaya</span>
        </h2>
        <p class="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Sejak 2021, RuangOffice telah membantu ribuan perusahaan dalam mengembangkan bisnis mereka dengan layanan yang komprehensif dan terpercaya.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        <!-- Left Content -->
        <div class="space-y-6 sm:space-y-8">
          <!-- Key Features -->
          <div class="space-y-4 sm:space-y-6">
            <div class="flex items-start space-x-3 sm:space-x-4 group cursor-pointer p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-amber-50 transition-all duration-300">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span class="text-black text-sm sm:text-lg font-bold group-hover:animate-bounce">✓</span>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 text-base sm:text-lg group-hover:text-amber-700 transition-colors duration-300">Tim Ahli Berpengalaman</h4>
                <p class="text-gray-600 text-sm sm:text-base group-hover:text-amber-600 transition-colors duration-300">Lebih dari 3 tahun pengalaman di bidang hukum dan bisnis</p>
              </div>
            </div>

            <div class="flex items-start space-x-3 sm:space-x-4 group cursor-pointer p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-amber-50 transition-all duration-300">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span class="text-black text-sm sm:text-lg font-bold group-hover:animate-bounce">⚡</span>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 text-base sm:text-lg group-hover:text-amber-700 transition-colors duration-300">Proses Cepat & Efisien</h4>
                <p class="text-gray-600 text-sm sm:text-base group-hover:text-amber-600 transition-colors duration-300">Pendirian PT selesai dalam 1-3 hari kerja</p>
              </div>
            </div>

            <div class="flex items-start space-x-3 sm:space-x-4 group cursor-pointer p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-amber-50 transition-all duration-300">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span class="text-black text-sm sm:text-lg font-bold group-hover:animate-bounce">🛡️</span>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 text-base sm:text-lg group-hover:text-amber-700 transition-colors duration-300">100% Legal & Terpercaya</h4>
                <p class="text-gray-600 text-sm sm:text-base group-hover:text-amber-600 transition-colors duration-300">Semua proses sesuai dengan regulasi pemerintah</p>
              </div>
            </div>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-2 gap-4 sm:gap-6">
            <div class="text-center p-4 sm:p-6 rounded-lg sm:rounded-xl hover:bg-amber-50 transition-all duration-300 cursor-pointer group">
              <div class="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-600 group-hover:text-amber-700 transition-colors duration-300">5000+</div>
              <div class="text-xs sm:text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Perusahaan Terbentuk</div>
            </div>
            <div class="text-center p-4 sm:p-6 rounded-lg sm:rounded-xl hover:bg-amber-50 transition-all duration-300 cursor-pointer group">
              <div class="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-600 group-hover:text-amber-700 transition-colors duration-300">3+</div>
              <div class="text-xs sm:text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Tahun Pengalaman</div>
            </div>
          </div>

          <!-- CTA Button -->
          <div class="pt-2 sm:pt-4">
            <a 
              :href="`https://wa.me/62811113666?text=Halo, saya ingin konsultasi tentang layanan RuangOffice`"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold text-base sm:text-lg rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 shadow-lg relative overflow-hidden group"
            >
              <span class="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span class="relative z-10 mr-2 sm:mr-3 group-hover:animate-bounce">💬</span>
              <span class="relative z-10">Konsultasi Gratis</span>
              <span class="relative z-10 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>

        <!-- Right Content - Company Values -->
        <div class="space-y-4 sm:space-y-6">
          <div class="text-center p-6 sm:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105">
            <div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              <span class="text-lg sm:text-2xl group-hover:animate-bounce">🎯</span>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">Fokus</h3>
            <p class="text-gray-600 text-sm sm:text-base group-hover:text-gray-700 transition-colors duration-300">
              Fokus pada hasil dan kepuasan klien dengan layanan yang berkualitas
            </p>
          </div>

          <div class="text-center p-6 sm:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105">
            <div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              <span class="text-lg sm:text-2xl group-hover:animate-bounce">⚡</span>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">Cepat</h3>
            <p class="text-gray-600 text-sm sm:text-base group-hover:text-gray-700 transition-colors duration-300">
              Proses yang cepat dan efisien tanpa mengorbankan kualitas
            </p>
          </div>

          <div class="text-center p-6 sm:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105">
            <div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              <span class="text-lg sm:text-2xl group-hover:animate-bounce">🛡️</span>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">Terpercaya</h3>
            <p class="text-gray-600 text-sm sm:text-base group-hover:text-gray-700 transition-colors duration-300">
              Kepercayaan klien adalah prioritas utama dalam setiap layanan
            </p>
          </div>
        </div>
      </div>
    </div>
  </ScrollSection>
</template>

<script setup lang="ts">
// Component logic here
</script>