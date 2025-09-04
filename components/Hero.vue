<template>
  <ScrollSection container-class="relative bg-gradient-to-br from-black via-gray-900 to-black dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 night:from-indigo-950 night:via-purple-950 night:to-indigo-950 overflow-hidden" :show-header="false" :skeleton-lines="8">
    <!-- Animated Background Pattern -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-yellow-500/5 to-amber-500/5"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-400/10 to-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-400/10 to-amber-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Left Content -->
        <div class="text-center lg:text-left space-y-6 sm:space-y-8">
          <!-- Badge -->
          <div class="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-black rounded-full text-xs sm:text-sm font-semibold shadow-lg">
            <span class="mr-2">✨</span>
            <span class="hidden sm:inline">Solusi Bisnis Terpercaya Sejak 2009</span>
            <span class="sm:hidden">Terpercaya Sejak 2009</span>
          </div>

          <!-- Main Heading -->
          <h1 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
            <span class="block">Solusi Bisnis</span>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">Terpadu</span>
            <span class="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray-300">untuk Pertumbuhan</span>
          </h1>

          <!-- Description -->
          <p class="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Kami menyediakan layanan lengkap pendirian PT, Virtual Office, dan konsultasi bisnis dengan tim ahli berpengalaman. 
            Proses cepat, legal, dan terpercaya sesuai standar OSS RBA.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <a 
              href="#services" 
              class="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold text-base sm:text-lg rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              <span class="mr-2 text-lg group-hover:animate-bounce">🚀</span>
              <span>Mulai Sekarang</span>
              <span class="ml-2 text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
            <a 
              :href="`https://wa.me/62811113666?text=Halo, saya ingin konsultasi tentang layanan RuangOffice`"
              target="_blank"
              rel="noopener"
              class="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-base sm:text-lg rounded-lg hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              <span class="mr-2 text-lg group-hover:animate-pulse">💬</span>
              <span>Konsultasi Gratis</span>
            </a>
          </div>

          <!-- Trust Indicators & Contact Info -->
          <div class="pt-4 sm:pt-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <!-- Trust Indicators -->
              <div class="space-y-3">
                <div class="flex items-center space-x-3 group cursor-pointer">
                  <div class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span class="text-black text-xs sm:text-sm font-bold">✓</span>
                  </div>
                  <span class="text-xs sm:text-sm text-gray-300 font-medium group-hover:text-amber-300 transition-colors duration-300">Proses 100% Legal</span>
                </div>
                <div class="flex items-center space-x-3 group cursor-pointer">
                  <div class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span class="text-black text-xs sm:text-sm font-bold">✓</span>
                  </div>
                  <span class="text-xs sm:text-sm text-gray-300 font-medium group-hover:text-amber-300 transition-colors duration-300">Tim Ahli Berpengalaman</span>
                </div>
                <div class="flex items-center space-x-3 group cursor-pointer">
                  <div class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span class="text-black text-xs sm:text-sm font-bold">✓</span>
                  </div>
                  <span class="text-xs sm:text-sm text-gray-300 font-medium group-hover:text-amber-300 transition-colors duration-300">Garansi 100%</span>
                </div>
              </div>
              
              <!-- Contact Info -->
              <div class="space-y-3">
                <a 
                  :href="`https://wa.me/62811113666?text=Halo, saya ingin konsultasi tentang layanan RuangOffice`"
                  target="_blank"
                  rel="noopener"
                  class="flex items-center space-x-3 group cursor-pointer"
                >
                  <div class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span class="text-black text-xs sm:text-sm group-hover:animate-bounce">📞</span>
                  </div>
                  <span class="text-xs sm:text-sm text-gray-300 font-semibold group-hover:text-amber-300 transition-colors duration-300">{{ waPhone }}</span>
                </a>
                <a 
                  :href="`https://wa.me/62811113666?text=Halo, saya ingin konsultasi tentang layanan RuangOffice`"
                  target="_blank"
                  rel="noopener"
                  class="flex items-center space-x-3 group cursor-pointer"
                >
                  <div class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span class="text-black text-xs sm:text-sm group-hover:animate-pulse">📧</span>
                  </div>
                  <span class="text-xs sm:text-sm text-gray-300 font-semibold group-hover:text-amber-300 transition-colors duration-300">{{ email }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Content - Stats Cards -->
        <div class="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
          <!-- Stats Cards -->
          <div class="text-center bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-amber-200/20 hover:bg-white/10 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
            <div class="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-400 mb-1 sm:mb-2 group-hover:text-amber-300 transition-colors duration-300">5000+</div>
            <div class="text-xs sm:text-sm text-gray-300 font-medium group-hover:text-gray-200 transition-colors duration-300">Perusahaan Terbentuk</div>
          </div>
          
          <div class="text-center bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-amber-200/20 hover:bg-white/10 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
            <div class="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-400 mb-1 sm:mb-2 group-hover:text-amber-300 transition-colors duration-300">15+</div>
            <div class="text-xs sm:text-sm text-gray-300 font-medium group-hover:text-gray-200 transition-colors duration-300">Tahun Pengalaman</div>
          </div>
          
          <div class="text-center bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-amber-200/20 hover:bg-white/10 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
            <div class="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-400 mb-1 sm:mb-2 group-hover:text-amber-300 transition-colors duration-300">100%</div>
            <div class="text-xs sm:text-sm text-gray-300 font-medium group-hover:text-gray-200 transition-colors duration-300">Kepuasan Klien</div>
          </div>
          
          <div class="text-center bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-amber-200/20 hover:bg-white/10 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
            <div class="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-400 mb-1 sm:mb-2 group-hover:text-amber-300 transition-colors duration-300">24/7</div>
            <div class="text-xs sm:text-sm text-gray-300 font-medium group-hover:text-gray-200 transition-colors duration-300">Layanan Support</div>
          </div>
        </div>
      </div>
    </div>
  </ScrollSection>
</template>

<script setup lang="ts">
const waPhone = '0811113666';
const email = 'Legal@RuangOffice.com';
</script>