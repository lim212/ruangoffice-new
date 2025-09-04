

<template>
  <section class="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- Section Header -->
      <div class="mb-12 sm:mb-16">
        <div class="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-full text-sm sm:text-base font-semibold mb-6 shadow-lg">
          <span class="mr-2 sm:mr-3">🚀</span>
          Mulai Sekarang
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
          Siap Memulai <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Bisnis</span> Anda?
        </h2>
        <p class="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Jangan biarkan keraguan menghalangi impian bisnis Anda. Tim ahli kami siap membantu 
          mewujudkan bisnis yang sukses dengan layanan yang berkualitas dan proses yang cepat.
        </p>
      </div>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16">
        <a 
          href="#contact" 
          class="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-lg sm:text-xl rounded-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
        >
          <span class="mr-3">💬</span>
          Konsultasi Gratis
          <span class="ml-3">→</span>
        </a>
        <a 
          href="tel:0811113666" 
          class="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-white text-black font-bold text-lg sm:text-xl rounded-xl hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
        >
          <span class="mr-3">📞</span>
          Hubungi Kami
        </a>
      </div>

      <!-- Trust Indicators -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
        <div class="text-center p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
          <div class="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span class="text-3xl">⚡</span>
          </div>
          <h3 class="text-lg sm:text-xl font-bold text-white mb-2">Proses Cepat</h3>
          <p class="text-gray-300 text-sm sm:text-base">
            Pendirian PT selesai dalam 3-5 hari kerja
          </p>
        </div>

        <div class="text-center p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
          <div class="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span class="text-3xl">🛡️</span>
          </div>
          <h3 class="text-lg sm:text-xl font-bold text-white mb-2">Garansi 100%</h3>
          <p class="text-gray-300 text-sm sm:text-base">
            Kami jamin kepuasan Anda atau uang kembali
          </p>
        </div>

        <div class="text-center p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
          <div class="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span class="text-3xl">👥</span>
          </div>
          <h3 class="text-lg sm:text-xl font-bold text-white mb-2">Tim Ahli</h3>
          <p class="text-gray-300 text-sm sm:text-base">
            Konsultan berpengalaman lebih dari 15 tahun
          </p>
        </div>
      </div>

      <!-- Contact Info -->
      <div class="bg-white/5 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/10">
        <h3 class="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
          Hubungi Kami Sekarang
        </h3>
        
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">📞</span>
            </div>
            <h4 class="font-semibold text-white mb-2">Telepon</h4>
            <p class="text-yellow-400 font-medium">0811113666</p>
            <p class="text-gray-400 text-sm">Marketing 1</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">📧</span>
            </div>
            <h4 class="font-semibold text-white mb-2">Email</h4>
            <p class="text-green-400 font-medium">Legal@RuangOffice.com</p>
            <p class="text-gray-400 text-sm">Respon Cepat</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">🌐</span>
            </div>
            <h4 class="font-semibold text-white mb-2">Website</h4>
            <p class="text-blue-400 font-medium">www.RuangOffice.com</p>
            <p class="text-gray-400 text-sm">Informasi Lengkap</p>
          </div>
        </div>

        <!-- Additional Marketing Numbers -->
        <div class="text-center mb-8">
          <h4 class="text-white font-semibold mb-4">Marketing Team Lengkap</h4>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="bg-white/10 rounded-lg p-4">
              <p class="text-yellow-400 font-medium">Marketing 1</p>
              <p class="text-white text-lg">08-1111-3666</p>
            </div>
            <div class="bg-white/10 rounded-lg p-4">
              <p class="text-yellow-400 font-medium">Marketing 2</p>
              <p class="text-white text-lg">0878-100000-67</p>
            </div>
            <div class="bg-white/10 rounded-lg p-4">
              <p class="text-yellow-400 font-medium">Marketing 3</p>
              <p class="text-white text-lg">08-77777-14441</p>
            </div>
          </div>
        </div>

        <!-- Final CTA -->
        <div class="text-center">
          <p class="text-gray-300 text-lg mb-6 sm:mb-8">
            Jangan ragu untuk menghubungi kami. Konsultasi pertama <span class="text-yellow-400 font-semibold">GRATIS</span> tanpa biaya apapun!
          </p>
          <a 
            href="#contact" 
            class="inline-flex items-center justify-center px-10 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-xl sm:text-2xl rounded-2xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 shadow-lg"
          >
            <span class="mr-4">🚀</span>
            Mulai Konsultasi Sekarang
            <span class="ml-4">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-gold {
  color: #FFD700;
}
.bg-gold {
  background-color: #FFD700;
}
</style>
