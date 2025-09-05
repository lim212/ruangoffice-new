<template>
  <ScrollSection container-class="relative bg-[#0A0A0A] overflow-hidden reveal-animate" :show-header="false" :skeleton-lines="0" :eager="true">
    <!-- Animated Background Pattern -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-yellow-500/5 to-amber-500/5"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-400/10 to-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-400/10 to-amber-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <!-- Subtle diagonal pattern -->
      <div class="absolute inset-0 opacity-5" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 215, 0, 0.1) 10px, rgba(255, 215, 0, 0.1) 20px);"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
      <div class="grid lg:grid-cols-2 gap-4 lg:gap-6 items-center">
        <!-- Left Content -->
        <div class="text-left space-y-3 sm:space-y-4">
          <!-- Badge -->
          <div class="badge-premium font-poppins inline-flex items-center px-4 py-2 rounded-full text-xs">
            <span class="mr-2 text-sm">🚀</span>
            <span class="text-black font-black">Pionir Solusi Bisnis Terpercaya Sejak 2021</span>
          </div>

          <!-- Main Heading -->
          <h1 class="heading-premium font-poppins leading-tight text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
            <span class="block gradient-text">Virtual Office Premium,</span>
            <span class="gradient-text">Pendirian PT & Perizinan Usaha</span>
            <span class="block text-white font-black mt-2" style="text-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);">di Jakarta & Seluruh Indonesia</span>
          </h1>

          <!-- Description -->
          <p class="text-white font-inter text-base sm:text-lg max-w-2xl leading-relaxed font-black" style="text-shadow: 0 3px 6px rgba(0, 0, 0, 0.9);">
            <span class="text-yellow-300 font-black text-lg" style="text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);">🎯 Transformasi Bisnis Anda Dimulai di Sini!</span> Dengan pengalaman 3+ tahun, RuangOffice telah membantu 5000+ perusahaan sukses dengan alamat kantor premium, pendirian badan usaha yang cepat, dan pengurusan izin berstandar OSS RBA. 
            <br><br>
            <span class="text-yellow-300 font-black text-lg" style="text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);">⚡ Layanan Express:</span> Proses 100% legal, transparan, dan terpercaya untuk akselerasi pertumbuhan bisnis Anda ke level berikutnya!
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-row gap-3">
            <a
              href="#services"
              class="btn-clean font-poppins group inline-flex items-center justify-center px-6 py-3 text-sm font-black"
            >
              <span class="mr-2 text-lg">🚀</span>
              <span>Mulai Perjalanan Bisnis</span>
            </a>
            <a
              :href="`https://wa.me/62811113666?text=Halo, saya ingin konsultasi tentang layanan RuangOffice`"
              target="_blank"
              rel="noopener"
              class="font-poppins group inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-[#FFA500] text-[#FFA500] font-black text-sm rounded-lg hover:bg-[#FFA500] hover:text-black transition-all duration-300"
            >
              <span class="mr-2 text-lg">💬</span>
              <span>Konsultasi Expert Gratis</span>
            </a>
          </div>

          <!-- Trust Indicators & Contact Info -->
          <div class="pt-2">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <!-- Trust Indicators -->
              <div class="space-y-2">
                <div class="flex items-center space-x-3 group cursor-pointer">
                  <div class="icon-clean">
                    <span class="text-xs font-bold">⚡</span>
                  </div>
                  <span class="text-yellow-300 font-inter text-sm font-black group-hover:text-[#FFD700] transition-colors duration-300" style="text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);">Proses 100% Legal & Terpercaya</span>
                </div>
                <div class="flex items-center space-x-3 group cursor-pointer">
                  <div class="icon-clean">
                    <span class="text-xs font-bold">🎯</span>
                  </div>
                  <span class="text-yellow-300 font-inter text-sm font-black group-hover:text-[#FFD700] transition-colors duration-300" style="text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);">Tim Expert Berpengalaman 3+ Tahun</span>
                </div>
                <div class="flex items-center space-x-3 group cursor-pointer">
                  <div class="icon-clean">
                    <span class="text-xs font-bold">🛡️</span>
                  </div>
                  <span class="text-yellow-300 font-inter text-sm font-black group-hover:text-[#FFD700] transition-colors duration-300" style="text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);">Dukungan 24/7 & Garansi Kepuasan</span>
                </div>
              </div>
              
              <!-- Contact Info -->
              <div class="space-y-2">
                <a 
                  :href="`https://wa.me/62811113666?text=Halo, saya ingin konsultasi tentang layanan RuangOffice`"
                  target="_blank"
                  rel="noopener"
                  class="flex items-center space-x-3 group cursor-pointer"
                >
                  <div class="icon-clean">
                    <span class="text-xs">📞</span>
                  </div>
                  <div>
                    <div class="text-yellow-300 font-inter text-xs font-black group-hover:text-[#FFD700] transition-colors duration-300" style="text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);">Hotline Expert</div>
                    <div class="text-white font-inter text-sm font-black group-hover:text-[#FFD700] transition-colors duration-300" style="text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);">{{ waPhone }}</div>
                  </div>
                </a>
                <a 
                  :href="`https://wa.me/62811113666?text=Halo, saya ingin konsultasi tentang layanan RuangOffice`"
                  target="_blank"
                  rel="noopener"
                  class="flex items-center space-x-3 group cursor-pointer"
                >
                  <div class="icon-clean">
                    <span class="text-xs">📧</span>
                  </div>
                  <div>
                    <div class="text-yellow-300 font-inter text-xs font-black group-hover:text-[#FFD700] transition-colors duration-300" style="text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);">Email Support</div>
                    <div class="text-white font-inter text-sm font-black group-hover:text-[#FFD700] transition-colors duration-300" style="text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);">{{ email }}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Content - Desktop Illustration & Stats -->
        <div class="relative">
          <div class="hidden lg:block relative">
            <img :src="localBrandAssets.heroIllustration" alt="RuangOffice" class="w-full max-w-xl mx-auto rounded-2xl shadow-2xl ring-1 ring-white/10" />
            <div class="card-clean absolute -bottom-4 -left-4 p-4" style="border-top: 4px solid #FFA500;">
              <div class="grid grid-cols-2 gap-3 min-w-[260px]">
                <div class="text-center">
                  <div class="text-3xl font-black gradient-text font-poppins">5000+</div>
                  <div class="text-yellow-300 font-inter text-xs font-black" style="text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);">Perusahaan Sukses</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-black gradient-text font-poppins">3+</div>
                  <div class="text-yellow-300 font-inter text-xs font-black" style="text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);">Tahun Pengalaman</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-black gradient-text font-poppins">100%</div>
                  <div class="text-yellow-300 font-inter text-xs font-black" style="text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);">Kepuasan Klien</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-black gradient-text font-poppins">24/7</div>
                  <div class="text-yellow-300 font-inter text-xs font-black" style="text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);">Support Expert</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Mobile stats section -->
          <div class="grid grid-cols-2 gap-3 lg:hidden mt-4">
            <div class="card-clean text-center p-4" style="border-top: 4px solid #FFA500;">
              <div class="text-xl font-black gradient-text font-poppins mb-1">5000+</div>
              <div class="text-yellow-300 font-inter text-xs font-black" style="text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);">Perusahaan Sukses</div>
            </div>
            <div class="card-clean text-center p-4" style="border-top: 4px solid #FFA500;">
              <div class="text-xl font-black gradient-text font-poppins mb-1">3+</div>
              <div class="text-yellow-300 font-inter text-xs font-black" style="text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);">Tahun Pengalaman</div>
            </div>
            <div class="card-clean text-center p-4" style="border-top: 4px solid #FFA500;">
              <div class="text-xl font-black gradient-text font-poppins mb-1">100%</div>
              <div class="text-yellow-300 font-inter text-xs font-black" style="text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);">Kepuasan Klien</div>
            </div>
            <div class="card-clean text-center p-4" style="border-top: 4px solid #FFA500;">
              <div class="text-xl font-black gradient-text font-poppins mb-1">24/7</div>
              <div class="text-yellow-300 font-inter text-xs font-black" style="text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);">Support Expert</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ScrollSection>
</template>

<script setup>
import { heroContent, localBrandAssets, siteContacts } from '../data/site-content';
const waPhone = siteContacts.phoneDisplay;
const email = siteContacts.email;
</script>