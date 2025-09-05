<template>
  <!-- Main Header (Sticky) -->
  <header :class="[
      'bg-[#0A0A0A] shadow-2xl sticky top-0 z-50',
      'transform transition-transform duration-300',
      isHeaderHidden ? '-translate-y-full' : 'translate-y-0'
    ]">
    <div class="bg-[#0A0A0A] py-1 border-b border-[#FFD700]/20">
      <div class="max-w-7xl mx-auto px-3 lg:px-4">
        <!-- Header Layout -->
        <div class="flex items-center justify-between w-full h-10">
          <!-- Logo -->
          <div class="flex items-center space-x-2 flex-shrink-0">
            <NuxtLink to="/" class="flex items-center space-x-2 group">
              <img src="/assets/img/logo-ro.ico" alt="RuangOffice" class="h-8 w-auto rounded-md shadow-md group-hover:scale-105 transition-transform duration-300" />
              <div class="hidden sm:block">
                <div class="text-yellow-300 font-poppins text-base font-black group-hover:text-[#FFD700] transition-colors duration-300" style="text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);">RuangOffice.com</div>
                <div class="text-white font-inter text-xs group-hover:text-[#FFD700] transition-colors duration-300" style="text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);">Solusi Bisnis Terpercaya</div>
              </div>
            </NuxtLink>
          </div>

          <!-- Center Navigation -->
          <nav class="hidden lg:flex items-center justify-center flex-1 max-w-xl">
            <div class="flex items-center space-x-6">
              <a href="#home" class="text-yellow-300 font-inter hover:text-[#FFD700] font-black transition-colors duration-300 text-sm" style="text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);">Home</a>
              <MegaMenuLayanan />
              <NuxtLink to="/kbli" class="text-yellow-300 font-inter hover:text-[#FFD700] font-black transition-colors duration-300 text-sm" style="text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);">KBLI</NuxtLink>
              <NuxtLink to="/peraturan" class="text-yellow-300 font-inter hover:text-[#FFD700] font-black transition-colors duration-300 text-sm" style="text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);">Peraturan</NuxtLink>
              <a href="#pricing" class="text-yellow-300 font-inter hover:text-[#FFD700] font-black transition-colors duration-300 text-sm" style="text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);">Harga</a>
              <a href="#contact" class="text-yellow-300 font-inter hover:text-[#FFD700] font-black transition-colors duration-300 text-sm" style="text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);">Kontak</a>
            </div>
          </nav>

          <!-- Right Side -->
          <div class="flex items-center space-x-2 flex-shrink-0">
            <!-- Expandable Search -->
            <div class="hidden lg:block relative search-container">
              <div class="flex items-center">
                <!-- Search Icon Button -->
                <button 
                  @click="toggleSearch" 
                  class="p-2 text-yellow-300 hover:text-[#FFD700] transition-all duration-300 rounded-lg hover:bg-white/10 group"
                  :class="{ 'bg-white/10': isSearchOpen }"
                >
                  <svg class="w-5 h-5 transition-transform duration-300" :class="{ 'rotate-90': isSearchOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path v-if="!isSearchOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
                
                <!-- Search Input -->
                <div 
                  class="overflow-hidden transition-all duration-500 ease-in-out"
                  :class="isSearchOpen ? 'w-64 opacity-100' : 'w-0 opacity-0'"
                >
                  <input 
                    v-if="isSearchOpen"
                    ref="searchInput"
                    type="text" 
                    placeholder="Cari KBLI, Peraturan..." 
                    class="w-full px-3 py-2 bg-white/10 border border-yellow-300/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-[#FFD700] focus:bg-white/20 transition-all duration-300 text-sm"
                    @keydown.escape="closeSearch"
                    @blur="handleSearchBlur"
                  />
                </div>
              </div>
          </div>
            
            <div class="hidden lg:flex items-center"><ThemeToggle /></div>
            <a href="#track" class="hidden xl:inline-flex px-3 py-1.5 bg-[#FFD700] text-black font-semibold rounded-md hover:bg-[#FFC107] transition-all duration-300 text-xs shadow-md">
              Track Perizinan
            </a>
            <a :href="`https://wa.me/62811113666?text=Halo, saya ingin konsultasi tentang layanan RuangOffice`" target="_blank" rel="noopener" class="px-3 py-1.5 bg-[#16A34A] text-white font-semibold rounded-md hover:bg-[#15803D] transition-colors duration-300 text-xs shadow-md">
              WhatsApp
            </a>

          <!-- Mobile Menu Button -->
            <button @click="toggleMobileMenu" class="lg:hidden text-white hover:text-[#FFD700] transition-colors p-2" :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
            </div>
        </div>

        <!-- Mobile Menu Backdrop -->
        <div v-if="isMobileMenuOpen" class="lg:hidden mobile-nav-overlay" @click="toggleMobileMenu"></div>

        <!-- Mobile Menu -->
        <div v-if="isMobileMenuOpen" class="lg:hidden mobile-nav-menu px-6 py-6">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-lg font-semibold text-white">Menu</h3>
            <button @click="toggleMobileMenu" class="p-2 text-white hover:text-[#FFD700] transition-colors duration-300 rounded-lg hover:bg-white/10" aria-label="Close menu">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>

          <div class="space-y-2 mb-6">
            <a href="#home" class="block py-3 px-4 text-white hover:text-[#FFD700] hover:bg-white/5 rounded-lg transition-all duration-300 font-medium">
              Home
            </a>
            <a href="#services" class="block py-3 px-4 text-white hover:text-[#FFD700] hover:bg-white/5 rounded-lg transition-all duration-300 font-medium">
              Layanan
            </a>
            <NuxtLink to="/kbli" class="block py-3 px-4 text-white hover:text-[#FFD700] hover:bg-white/5 rounded-lg transition-all duration-300 font-medium">
              KBLI
            </NuxtLink>
            <NuxtLink to="/peraturan" class="block py-3 px-4 text-white hover:text-[#FFD700] hover:bg-white/5 rounded-lg transition-all duration-300 font-medium">
              Peraturan
            </NuxtLink>
            <a href="#pricing" class="block py-3 px-4 text-white hover:text-[#FFD700] hover:bg-white/5 rounded-lg transition-all duration-300 font-medium">
              Harga
            </a>
            <a href="#contact" class="block py-3 px-4 text-white hover:text-[#FFD700] hover:bg-white/5 rounded-lg transition-all duration-300 font-medium">
              Kontak
            </a>
          </div>

          <div class="pt-4 border-t border-slate-700/50"><GlobalSearch /></div>

          <div class="pt-4 border-t border-gray-700/50">
            <div class="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
              <span class="text-sm font-medium text-gray-300">Theme</span>
              <ThemeToggle />
            </div>
          </div>

          <div class="pt-4 space-y-3">
            <a href="#track" class="block w-full py-3 px-4 bg-[#FFD700] text-black font-semibold rounded-lg hover:bg-[#FFC107] transition-all duration-300 text-center">
              Track Perizinan
            </a>
            <a :href="`https://wa.me/62811113666?text=Halo, saya ingin konsultasi tentang layanan RuangOffice`" target="_blank" rel="noopener" class="block w-full py-3 px-4 bg-[#16A34A] text-white font-semibold rounded-lg hover:bg-[#15803D] transition-all duration-300 text-center">
              WhatsApp
            </a>
          </div>

          <div class="pt-4 border-t border-gray-700/50">
            <div class="space-y-2">
              <div class="flex items-center space-x-3 text-gray-300 p-2">
                <div class="w-8 h-8 bg-[#FFD700] rounded-full flex items-center justify-center">
                  <span class="text-black text-sm">📞</span>
                </div>
                <div>
                  <div class="font-medium text-sm">{{ waPhone }}</div>
                  <div class="text-xs text-gray-400">WhatsApp & Telepon</div>
                </div>
              </div>
              <div class="flex items-center space-x-3 text-gray-300 p-2">
                <div class="w-8 h-8 bg-[#FFD700] rounded-full flex items-center justify-center">
                  <span class="text-black text-sm">📧</span>
                </div>
                <div>
                  <div class="font-medium text-sm">{{ email }}</div>
                  <div class="text-xs text-gray-400">Email Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import GlobalSearch from './GlobalSearch.vue'
import ThemeToggle from './ThemeToggle.vue'
import MegaMenuLayanan from './MegaMenuLayanan.vue'

// Reactive variables
const isMobileMenuOpen = ref(false)
const isHeaderHidden = ref(false)
const isSearchOpen = ref(false)
const searchInput = ref(null)
const waPhone = '0811113666'
const email = 'Legal@RuangOffice.com'

// Hide header on scroll down, show on scroll up
let lastY = 0
const handleScroll = () => {
  const y = window.scrollY || 0
  isHeaderHidden.value = y > lastY && y > 80
  lastY = y
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Search functionality
const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value
  if (isSearchOpen.value) {
    // Focus input after animation
    setTimeout(() => {
      if (searchInput.value) {
        searchInput.value.focus()
      }
    }, 300)
  }
}

const closeSearch = () => {
  isSearchOpen.value = false
}

const handleSearchBlur = (event) => {
  // Close search if clicking outside
  setTimeout(() => {
    if (!event.relatedTarget || !event.relatedTarget.closest('.search-container')) {
      isSearchOpen.value = false
    }
  }, 150)
}

onMounted(() => {
  lastY = window.scrollY || 0
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Enhanced search animations */
.search-container {
  position: relative;
}

.search-container .transition-all {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Search input animation */
.search-container input {
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.search-container input:focus {
  box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.1), 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transform: scale(1.02);
}

/* Search icon rotation animation */
.search-container svg {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.search-container button:hover svg {
  transform: scale(1.1);
}

/* Smooth width transition */
.search-container .overflow-hidden {
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease-in-out;
}

/* Mobile menu animations */
.mobile-nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 40;
  animation: fadeIn 0.3s ease-out;
}

.mobile-nav-menu {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 320px;
  background: linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%);
  border-left: 1px solid rgba(255, 215, 0, 0.2);
  z-index: 50;
  animation: slideInRight 0.3s ease-out;
  overflow-y: auto;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInRight {
  from { 
    transform: translateX(100%); 
    opacity: 0;
  }
  to { 
    transform: translateX(0); 
    opacity: 1;
  }
}

/* Header scroll animation */
header {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced button hover effects */
a, button {
  position: relative;
  overflow: hidden;
}

a::before, button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s;
}

a:hover::before, button:hover::before {
  left: 100%;
}
</style>
