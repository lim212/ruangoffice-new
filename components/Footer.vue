<template>
  <ScrollSection container-class="bg-gradient-to-br from-black via-gray-900 to-black dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 night:from-indigo-950 night:via-purple-950 night:to-indigo-950 text-white" :show-header="false" :skeleton-lines="8">
    <!-- Main Footer Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <!-- Company Info -->
        <div class="lg:col-span-2">
          <div class="flex items-center space-x-3 mb-4 sm:mb-6">
            <img src="/assets/img/logo-ro.ico" alt="RuangOffice Logo" class="h-10 sm:h-12 w-auto" />
            <div>
              <div class="text-xl sm:text-2xl font-bold text-white">RuangOffice.com</div>
              <div class="text-xs sm:text-sm text-gray-400">Solusi Bisnis Terpercaya</div>
            </div>
          </div>
          <p class="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed max-w-md">
            Sejak 2009, RuangOffice telah membantu ribuan perusahaan dalam mengembangkan bisnis mereka dengan layanan yang komprehensif dan terpercaya.
          </p>
          
          <!-- Contact Info -->
          <div class="space-y-3">
            <a 
              :href="`https://wa.me/62811113666?text=Halo, saya ingin konsultasi tentang layanan RuangOffice`"
              target="_blank"
              rel="noopener"
              class="flex items-center space-x-3 group cursor-pointer"
            >
              <div class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span class="text-black text-xs sm:text-sm">📞</span>
              </div>
              <div>
                <div class="text-white font-semibold text-sm sm:text-base">{{ waPhone }}</div>
                <div class="text-gray-400 text-xs sm:text-sm">WhatsApp & Telepon</div>
              </div>
            </a>
            <a 
              :href="`https://wa.me/62811113666?text=Halo, saya ingin konsultasi tentang layanan RuangOffice`"
              target="_blank"
              rel="noopener"
              class="flex items-center space-x-3 group cursor-pointer"
            >
              <div class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span class="text-black text-xs sm:text-sm">📧</span>
              </div>
              <div>
                <div class="text-white font-semibold text-sm sm:text-base">{{ email }}</div>
                <div class="text-gray-400 text-xs sm:text-sm">Email Support</div>
              </div>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6">Layanan</h3>
          <ul class="space-y-2 sm:space-y-3">
            <li><a href="#pendirian-pt" class="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm sm:text-base">Pendirian PT</a></li>
            <li><a href="#pendirian-cv" class="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm sm:text-base">Pendirian CV</a></li>
            <li><a href="#virtual-office" class="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm sm:text-base">Virtual Office</a></li>
            <li><a href="#private-office" class="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm sm:text-base">Private Office</a></li>
            <li><a href="#konsultasi" class="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm sm:text-base">Konsultasi Hukum</a></li>
            <li><a href="#perizinan" class="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm sm:text-base">Perizinan</a></li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h3 class="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6">Resources</h3>
          <ul class="space-y-2 sm:space-y-3">
            <li><NuxtLink to="/kbli" class="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm sm:text-base">Database KBLI</NuxtLink></li>
            <li><NuxtLink to="/peraturan" class="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm sm:text-base">Database Peraturan</NuxtLink></li>
            <li><a href="#blog" class="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm sm:text-base">Blog & Artikel</a></li>
            <li><a href="#faq" class="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm sm:text-base">FAQ</a></li>
            <li><a href="#track" class="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm sm:text-base">Track Perizinan</a></li>
            <li><a href="#pricing" class="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm sm:text-base">Harga & Paket</a></li>
          </ul>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-800">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div class="text-center">
            <div class="text-2xl sm:text-3xl font-bold text-amber-400 mb-1 sm:mb-2">5000+</div>
            <div class="text-gray-400 text-xs sm:text-sm">Perusahaan Terbentuk</div>
          </div>
          <div class="text-center">
            <div class="text-2xl sm:text-3xl font-bold text-amber-400 mb-1 sm:mb-2">15+</div>
            <div class="text-gray-400 text-xs sm:text-sm">Tahun Pengalaman</div>
          </div>
          <div class="text-center">
            <div class="text-2xl sm:text-3xl font-bold text-amber-400 mb-1 sm:mb-2">100%</div>
            <div class="text-gray-400 text-xs sm:text-sm">Kepuasan Klien</div>
          </div>
          <div class="text-center">
            <div class="text-2xl sm:text-3xl font-bold text-amber-400 mb-1 sm:mb-2">24/7</div>
            <div class="text-gray-400 text-xs sm:text-sm">Layanan Support</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <div class="text-gray-400 text-xs sm:text-sm text-center md:text-left">
            © 2024 RuangOffice.com. All rights reserved. | Solusi Bisnis Terpercaya
          </div>
          <div class="flex items-center space-x-4 sm:space-x-6">
            <a href="#privacy" class="text-gray-400 hover:text-amber-400 transition-colors duration-200 text-xs sm:text-sm">Privacy Policy</a>
            <a href="#terms" class="text-gray-400 hover:text-amber-400 transition-colors duration-200 text-xs sm:text-sm">Terms of Service</a>
            <a href="#sitemap" class="text-gray-400 hover:text-amber-400 transition-colors duration-200 text-xs sm:text-sm">Sitemap</a>
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