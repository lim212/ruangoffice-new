<template>
  <!-- Top Bar - Running Text (Not Sticky) -->
  <div class="bg-gradient-to-r from-amber-500 to-yellow-500 text-white py-2 relative overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-yellow-400/20 to-amber-400/20"></div>
    
    <!-- Running Text -->
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-center space-x-8 text-sm font-medium">
        <div class="flex items-center space-x-2 animate-pulse">
          <span class="text-lg">🚀</span>
          <span>RuangOffice.com - Solusi Bisnis Terpercaya</span>
        </div>
        <div class="hidden sm:flex items-center space-x-2">
          <span class="text-lg">📞</span>
          <span>{{ waPhone }}</span>
        </div>
        <div class="hidden md:flex items-center space-x-2">
          <span class="text-lg">💼</span>
          <span>Pendirian PT, CV, PMA</span>
        </div>
        <div class="hidden lg:flex items-center space-x-2">
          <span class="text-lg">🏢</span>
          <span>Virtual Office & Private Office</span>
        </div>
        </div>
      </div>
    </div>

  <!-- Main Header (Sticky) -->
  <header class="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 night:from-indigo-900 night:via-purple-900 night:to-indigo-900 shadow-2xl sticky top-0 z-50 border-b border-slate-700/50">
    <div class="bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 dark:from-slate-800/95 dark:via-slate-700/95 dark:to-slate-800/95 night:from-indigo-900/95 night:via-purple-900/95 night:to-indigo-900/95 backdrop-blur-xl py-4 sm:py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <!-- Logo and Navigation Row -->
        <div class="flex justify-between items-center">
      <!-- Logo -->
          <div class="flex items-center space-x-3 sm:space-x-4 group cursor-pointer">
            <!-- Logo Icon -->
            <div class="relative flex items-center justify-center">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <span class="text-white font-bold text-lg sm:text-xl">RO</span>
              </div>
              <div class="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full shadow-sm animate-pulse"></div>
            </div>
            <!-- Logo Text -->
            <div>
              <div class="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-all duration-300 tracking-tight">
                RuangOffice.com
              </div>
              <div class="text-xs sm:text-sm text-slate-300 font-medium tracking-wide">
                Solusi Bisnis Terpercaya
              </div>
            </div>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden lg:flex items-center space-x-2">
            <!-- Main Navigation Links -->
            <div class="flex items-center space-x-1">
              <a href="#home" class="group relative px-4 py-2 text-white hover:text-amber-300 font-semibold transition-all duration-300 text-sm tracking-wide uppercase rounded-lg hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-amber-400/30">
                <span class="relative z-10 flex items-center space-x-2">
                  <span class="text-amber-400 group-hover:animate-bounce">🏠</span>
                  <span>HOME</span>
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a href="#services" class="group relative px-4 py-2 text-white hover:text-blue-300 font-semibold transition-all duration-300 text-sm tracking-wide uppercase rounded-lg hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-blue-400/30">
                <span class="relative z-10 flex items-center space-x-2">
                  <span class="text-blue-400 group-hover:animate-bounce">🚀</span>
                  <span>LAYANAN</span>
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <NuxtLink to="/kbli" class="group relative px-4 py-2 text-white hover:text-purple-300 font-semibold transition-all duration-300 text-sm tracking-wide uppercase rounded-lg hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-purple-400/30">
                <span class="relative z-10 flex items-center space-x-2">
                  <span class="text-purple-400 group-hover:animate-bounce">📋</span>
                  <span>KBLI</span>
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </NuxtLink>
              
              <NuxtLink to="/peraturan" class="group relative px-4 py-2 text-white hover:text-green-300 font-semibold transition-all duration-300 text-sm tracking-wide uppercase rounded-lg hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-green-400/30">
                <span class="relative z-10 flex items-center space-x-2">
                  <span class="text-green-400 group-hover:animate-bounce">📜</span>
                  <span>PERATURAN</span>
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </NuxtLink>
              
              <a href="#pricing" class="group relative px-4 py-2 text-white hover:text-red-300 font-semibold transition-all duration-300 text-sm tracking-wide uppercase rounded-lg hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-red-400/30">
                <span class="relative z-10 flex items-center space-x-2">
                  <span class="text-red-400 group-hover:animate-bounce">💰</span>
                  <span>HARGA</span>
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a href="#contact" class="group relative px-4 py-2 text-white hover:text-orange-300 font-semibold transition-all duration-300 text-sm tracking-wide uppercase rounded-lg hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-orange-400/30">
                <span class="relative z-10 flex items-center space-x-2">
                  <span class="text-orange-400 group-hover:animate-bounce">📞</span>
                  <span>KONTAK</span>
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

            <!-- Divider -->
            <div class="w-px h-8 bg-slate-600 mx-2"></div>

            <!-- Search and Track -->
            <div class="flex items-center space-x-3">
              <!-- Global Search -->
              <div class="relative">
                <GlobalSearch />
              </div>
              
              <!-- Theme Toggle -->
              <div class="relative">
                <ThemeToggle />
            </div>

            <!-- Track Button -->
              <a href="#track" class="group relative px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold rounded-xl hover:from-amber-400 hover:to-yellow-400 transition-all duration-300 text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 tracking-wide uppercase">
                <span class="relative z-10 flex items-center space-x-2">
                  <span class="group-hover:animate-bounce">📋</span>
                  <span>TRACK PERIZINAN</span>
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>

            <!-- Mobile Menu Button -->
            <button 
              @click="toggleMobileMenu" 
            class="lg:hidden relative group text-white hover:text-amber-400 transition-all duration-300 p-3 rounded-xl hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-amber-400/30"
              :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
            >
            <div class="w-6 h-6 relative">
              <span class="absolute top-0 left-0 w-6 h-0.5 bg-current transition-all duration-300" :class="isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-0'"></span>
              <span class="absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300" :class="isMobileMenuOpen ? 'opacity-0' : 'opacity-100'"></span>
              <span class="absolute top-5 left-0 w-6 h-0.5 bg-current transition-all duration-300" :class="isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : 'translate-y-0'"></span>
            </div>
            </button>
        </div>

        <!-- Mobile Menu -->
        <div 
          v-if="isMobileMenuOpen" 
          class="lg:hidden bg-gradient-to-br from-slate-800/95 to-slate-900/95 dark:from-slate-700/95 dark:to-slate-800/95 night:from-indigo-800/95 night:to-purple-900/95 backdrop-blur-xl border border-slate-700/50 px-4 py-6 space-y-4 mt-4 rounded-2xl shadow-2xl"
        >
          <!-- Mobile Navigation Links -->
          <div class="space-y-2">
            <a href="#home" class="group flex items-center py-3 px-4 text-white hover:text-amber-300 hover:bg-amber-500/10 rounded-xl transition-all duration-300 font-semibold tracking-wide uppercase border border-transparent hover:border-amber-400/30">
              <span class="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <span class="text-amber-400 group-hover:animate-bounce">🏠</span>
              </span>
              HOME
            </a>
            <a href="#services" class="group flex items-center py-3 px-4 text-white hover:text-blue-300 hover:bg-blue-500/10 rounded-xl transition-all duration-300 font-semibold tracking-wide uppercase border border-transparent hover:border-blue-400/30">
              <span class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <span class="text-blue-400 group-hover:animate-bounce">🚀</span>
              </span>
              LAYANAN
            </a>
            <NuxtLink to="/kbli" class="group flex items-center py-3 px-4 text-white hover:text-purple-300 hover:bg-purple-500/10 rounded-xl transition-all duration-300 font-semibold tracking-wide uppercase border border-transparent hover:border-purple-400/30">
              <span class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <span class="text-purple-400 group-hover:animate-bounce">📋</span>
              </span>
              KBLI
            </NuxtLink>
            <NuxtLink to="/peraturan" class="group flex items-center py-3 px-4 text-white hover:text-green-300 hover:bg-green-500/10 rounded-xl transition-all duration-300 font-semibold tracking-wide uppercase border border-transparent hover:border-green-400/30">
              <span class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <span class="text-green-400 group-hover:animate-bounce">📜</span>
              </span>
              PERATURAN
            </NuxtLink>
            <a href="#pricing" class="group flex items-center py-3 px-4 text-white hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-all duration-300 font-semibold tracking-wide uppercase border border-transparent hover:border-red-400/30">
              <span class="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <span class="text-red-400 group-hover:animate-bounce">💰</span>
              </span>
              HARGA
            </a>
            <a href="#contact" class="group flex items-center py-3 px-4 text-white hover:text-orange-300 hover:bg-orange-500/10 rounded-xl transition-all duration-300 font-semibold tracking-wide uppercase border border-transparent hover:border-orange-400/30">
              <span class="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <span class="text-orange-400 group-hover:animate-bounce">📞</span>
              </span>
              KONTAK
            </a>
          </div>

          <!-- Mobile Search -->
          <div class="pt-4 border-t border-slate-700/50">
            <GlobalSearch />
          </div>

          <!-- Mobile Theme Toggle -->
          <div class="pt-4">
            <div class="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <span class="text-sm font-medium text-slate-300">Theme</span>
              <ThemeToggle />
            </div>
          </div>

          <!-- Mobile Track Button -->
          <div class="pt-4">
            <a href="#track" class="group block w-full py-4 px-6 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold rounded-xl hover:from-amber-400 hover:to-yellow-400 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 tracking-wide uppercase">
              <span class="flex items-center justify-center space-x-2">
                <span class="group-hover:animate-bounce">📋</span>
                <span>TRACK PERIZINAN</span>
              </span>
            </a>
          </div>

          <!-- Mobile Contact Info -->
          <div class="pt-4 border-t border-slate-700/50">
            <div class="space-y-3">
              <a 
                :href="`https://wa.me/62811113666?text=Halo, saya ingin konsultasi tentang layanan RuangOffice`"
                target="_blank"
                rel="noopener"
                class="group flex items-center space-x-3 text-slate-300 hover:text-amber-300 transition-all duration-300 p-3 rounded-xl hover:bg-amber-500/10 border border-transparent hover:border-amber-400/30"
              >
                <div class="w-10 h-10 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span class="text-black text-sm group-hover:animate-bounce">📞</span>
                </div>
                <div>
                  <div class="font-semibold text-sm">{{ waPhone }}</div>
                  <div class="text-xs text-slate-400">WhatsApp & Telepon</div>
                </div>
              </a>
              <a 
                :href="`https://wa.me/62811113666?text=Halo, saya ingin konsultasi tentang layanan RuangOffice`"
                target="_blank"
                rel="noopener"
                class="group flex items-center space-x-3 text-slate-300 hover:text-amber-300 transition-all duration-300 p-3 rounded-xl hover:bg-amber-500/10 border border-transparent hover:border-amber-400/30"
              >
                <div class="w-10 h-10 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span class="text-black text-sm group-hover:animate-pulse">📧</span>
                </div>
                <div>
                  <div class="font-semibold text-sm">{{ email }}</div>
                  <div class="text-xs text-slate-400">Email Support</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import GlobalSearch from './GlobalSearch.vue';
import ThemeToggle from './ThemeToggle.vue';

const isMobileMenuOpen = ref(false);
const waPhone = '0811113666';
const email = 'Legal@RuangOffice.com';

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>