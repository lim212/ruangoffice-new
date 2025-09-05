<template>
  <ScrollSection container-class="relative bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] overflow-hidden reveal-animate" :show-header="false" :skeleton-lines="0" :eager="true">
    <!-- Enhanced Animated Background Pattern -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Main gradient overlay with enhanced depth -->
      <div class="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A]"></div>
      <div class="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-yellow-500/8 to-amber-500/10"></div>
      
      <!-- Enhanced animated floating orbs with glow effects -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-400/20 to-yellow-400/20 rounded-full blur-3xl animate-float shadow-2xl shadow-amber-500/30"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-400/20 to-amber-400/20 rounded-full blur-3xl animate-float delay-1000 shadow-2xl shadow-yellow-500/30"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-amber-300/15 to-yellow-300/15 rounded-full blur-2xl animate-float delay-500 shadow-xl shadow-amber-400/25"></div>
      <div class="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-yellow-300/25 to-amber-300/25 rounded-full blur-xl animate-float delay-2000 shadow-lg shadow-yellow-400/20"></div>
      
      <!-- Enhanced diagonal pattern with animation -->
      <div class="absolute inset-0 opacity-15 animate-pulse" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(255, 215, 0, 0.2) 15px, rgba(255, 215, 0, 0.2) 30px);"></div>
      
      <!-- Subtle grid pattern with enhanced visibility -->
      <div class="absolute inset-0 opacity-8" style="background-image: linear-gradient(rgba(255, 215, 0, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 215, 0, 0.15) 1px, transparent 1px); background-size: 50px 50px;"></div>
      
      <!-- Enhanced animated particles for extra dynamism -->
      <div class="absolute top-1/4 left-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-60 shadow-lg shadow-yellow-400/50"></div>
      <div class="absolute top-3/4 right-1/4 w-1 h-1 bg-amber-400 rounded-full animate-ping delay-1000 opacity-40 shadow-lg shadow-amber-400/50"></div>
      <div class="absolute top-1/2 left-1/5 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-ping delay-2000 opacity-50 shadow-lg shadow-yellow-300/50"></div>
      <div class="absolute top-2/3 right-1/3 w-1 h-1 bg-amber-300 rounded-full animate-ping delay-1500 opacity-35 shadow-lg shadow-amber-300/50"></div>
      <div class="absolute top-1/6 right-1/6 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-ping delay-3000 opacity-45 shadow-lg shadow-yellow-500/50"></div>
      <div class="absolute bottom-1/4 left-1/6 w-1 h-1 bg-amber-500 rounded-full animate-ping delay-2500 opacity-30 shadow-lg shadow-amber-500/50"></div>
      
      <!-- Floating geometric shapes -->
      <div class="absolute top-1/3 right-1/5 w-3 h-3 border border-yellow-400/30 rotate-45 animate-spin-slow"></div>
      <div class="absolute bottom-1/3 left-1/4 w-2 h-2 border border-amber-400/40 rounded-full animate-pulse"></div>
      <div class="absolute top-2/3 right-1/3 w-4 h-1 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 rounded-full animate-float delay-3000"></div>
    </div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 sm:pb-20 lg:pb-24">
      <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[85vh]">
        <!-- Left Content -->
        <div class="lg:col-span-7 text-left space-y-6">
          <!-- Badge -->
          <div class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold rounded-full text-sm shadow-lg hover:shadow-xl transition-all duration-300">
            <span class="mr-2 text-lg">🚀</span>
            <span>Solusi Bisnis Terpercaya Sejak 2021</span>
          </div>

          <!-- Main Heading -->
          <h1 class="font-poppins leading-tight">
            <span class="block mb-3 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
              <span class="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-clip-text text-transparent font-black">Virtual Office Premium,</span>
            </span>
            <span class="block mb-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
              <span class="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent font-black">Pendirian PT & Perizinan Usaha</span>
            </span>
            <span class="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
              <span class="text-white font-bold">di Jakarta & Seluruh Indonesia</span>
            </span>
          </h1>

          <!-- Description -->
          <div class="text-white font-inter text-lg leading-relaxed">
            <p class="mb-6 font-semibold text-xl text-yellow-300">
              🎯 Transformasi Bisnis Anda Dimulai di Sini!
            </p>
            <p class="text-white mb-6">
              Dengan pengalaman 3+ tahun, RuangOffice telah membantu banyak perusahaan sukses dengan alamat kantor premium, pendirian badan usaha yang cepat, dan pengurusan izin berstandar OSS RBA.
            </p>
            <div class="flex items-center space-x-3 p-4 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-xl border border-yellow-400/30">
              <div class="w-6 h-6 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                <span class="text-white text-sm font-bold">⚡</span>
              </div>
              <p class="font-semibold text-yellow-300">
                Layanan Express: Proses 100% legal, transparan, dan terpercaya
              </p>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 mt-6">
            <a
              href="#services"
              class="group bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
            >
              <span class="mr-3 text-xl">🚀</span>
              <span>Mulai Perjalanan Bisnis</span>
            </a>
            <a
              :href="`https://wa.me/62811113666?text=Halo, saya ingin konsultasi tentang layanan RuangOffice`"
              target="_blank"
              rel="noopener"
              class="group bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 text-center"
            >
              <span class="mr-3 text-xl">💬</span>
              <span>Konsultasi Expert Gratis</span>
            </a>
          </div>

          <!-- Trust Indicators -->
          <div class="pt-6">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div class="flex items-center space-x-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-yellow-500/20 hover:bg-white/10 transition-all duration-300">
                <div class="w-10 h-10 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                  <span class="text-white text-lg font-bold">⚡</span>
                </div>
                <div>
                  <div class="text-white font-bold text-sm">100% Legal</div>
                  <div class="text-yellow-300 text-xs">Terpercaya</div>
                </div>
              </div>
              
              <div class="flex items-center space-x-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-yellow-500/20 hover:bg-white/10 transition-all duration-300">
                <div class="w-10 h-10 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                  <span class="text-white text-lg font-bold">🎯</span>
                </div>
                <div>
                  <div class="text-white font-bold text-sm">3+ Tahun</div>
                  <div class="text-yellow-300 text-xs">Pengalaman</div>
                </div>
              </div>
              
              <div class="flex items-center space-x-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-yellow-500/20 hover:bg-white/10 transition-all duration-300">
                <div class="w-10 h-10 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                  <span class="text-white text-lg font-bold">🛡️</span>
                </div>
                <div>
                  <div class="text-white font-bold text-sm">24/7</div>
                  <div class="text-yellow-300 text-xs">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Content - Stats Section -->
        <div class="lg:col-span-5 relative">
          <div class="hidden lg:block">
            <!-- Stats Cards -->
            <div class="space-y-4">
              <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20 hover:bg-white/10 transition-all duration-300">
                <div class="text-center">
                  <div class="text-4xl font-black gradient-text font-poppins mb-2">100+</div>
                  <div class="text-yellow-300 font-bold text-sm">Klien Aktif</div>
                </div>
              </div>
              
              <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20 hover:bg-white/10 transition-all duration-300">
                <div class="text-center">
                  <div class="text-4xl font-black gradient-text font-poppins mb-2">3+</div>
                  <div class="text-yellow-300 font-bold text-sm">Tahun Pengalaman</div>
                </div>
              </div>
              
              <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20 hover:bg-white/10 transition-all duration-300">
                <div class="text-center">
                  <div class="text-4xl font-black gradient-text font-poppins mb-2">95%</div>
                  <div class="text-yellow-300 font-bold text-sm">Kepuasan Klien</div>
                </div>
              </div>
              
              <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20 hover:bg-white/10 transition-all duration-300">
                <div class="text-center">
                  <div class="text-4xl font-black gradient-text font-poppins mb-2">24/7</div>
                  <div class="text-yellow-300 font-bold text-sm">Support Expert</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Mobile stats section -->
          <div class="grid grid-cols-2 gap-3 lg:hidden mt-6">
            <div class="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-yellow-500/20 hover:bg-white/10 transition-all duration-300">
              <div class="text-2xl font-black gradient-text font-poppins mb-1">100+</div>
              <div class="text-yellow-300 font-bold text-xs">Klien Aktif</div>
            </div>
            <div class="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-yellow-500/20 hover:bg-white/10 transition-all duration-300">
              <div class="text-2xl font-black gradient-text font-poppins mb-1">3+</div>
              <div class="text-yellow-300 font-bold text-xs">Tahun Pengalaman</div>
            </div>
            <div class="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-yellow-500/20 hover:bg-white/10 transition-all duration-300">
              <div class="text-2xl font-black gradient-text font-poppins mb-1">95%</div>
              <div class="text-yellow-300 font-bold text-xs">Kepuasan Klien</div>
            </div>
            <div class="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-yellow-500/20 hover:bg-white/10 transition-all duration-300">
              <div class="text-2xl font-black gradient-text font-poppins mb-1">24/7</div>
              <div class="text-yellow-300 font-bold text-xs">Support Expert</div>
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