<template>
  <!-- Main Header (Sticky) -->
  <header :class="[
      'bg-gradient-to-r from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] shadow-2xl sticky top-0 z-50',
      'transform transition-transform duration-300',
      isHeaderHidden ? '-translate-y-full' : 'translate-y-0'
    ]">
    <div class="bg-gradient-to-r from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] py-1 border-b border-[#FFD700]/30 backdrop-blur-md">
      <div class="max-w-7xl mx-auto px-4 lg:px-6">
        <!-- Header Layout -->
        <div class="flex items-center justify-between w-full h-12">
          <!-- Logo -->
          <div class="flex items-center space-x-2 flex-shrink-0">
            <NuxtLink to="/" class="flex items-center space-x-2 group">
              <div class="relative">
                <img src="/assets/img/logo-ro.ico" alt="RuangOffice" class="h-8 w-auto rounded-lg shadow-lg group-hover:scale-110 transition-all duration-300" />
                <div class="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full animate-pulse"></div>
              </div>
              <div class="hidden sm:block">
                <div class="text-yellow-300 font-poppins text-base font-black group-hover:text-[#FFD700] transition-colors duration-300" style="text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);">RuangOffice.com</div>
                <div class="text-white font-inter text-xs group-hover:text-[#FFD700] transition-colors duration-300" style="text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);">Solusi Bisnis Terpercaya</div>
              </div>
            </NuxtLink>
          </div>

          <!-- Center Navigation -->
          <nav class="hidden lg:flex items-center justify-center flex-1 max-w-2xl">
            <div class="flex items-center space-x-1">
              <a href="#home" class="flex items-center space-x-2 text-yellow-300 font-inter hover:text-[#FFD700] font-semibold transition-all duration-300 text-sm px-3 py-2 rounded-xl hover:bg-white/10 group relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <svg class="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                </svg>
                <span class="relative z-10">Home</span>
              </a>
              <MegaMenuLayanan />
              <NuxtLink to="/kbli" class="flex items-center space-x-2 text-yellow-300 font-inter hover:text-[#FFD700] font-semibold transition-all duration-300 text-sm px-3 py-2 rounded-xl hover:bg-white/10 group relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <svg class="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                <span class="relative z-10">KBLI</span>
              </NuxtLink>
              <NuxtLink to="/peraturan" class="flex items-center space-x-2 text-yellow-300 font-inter hover:text-[#FFD700] font-semibold transition-all duration-300 text-sm px-3 py-2 rounded-xl hover:bg-white/10 group relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <svg class="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                </svg>
                <span class="relative z-10">Peraturan</span>
              </NuxtLink>
              <a href="#pricing" class="flex items-center space-x-2 text-yellow-300 font-inter hover:text-[#FFD700] font-semibold transition-all duration-300 text-sm px-3 py-2 rounded-xl hover:bg-white/10 group relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <svg class="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                </svg>
                <span class="relative z-10">Harga</span>
              </a>
              <a href="#contact" class="flex items-center space-x-2 text-yellow-300 font-inter hover:text-[#FFD700] font-semibold transition-all duration-300 text-sm px-3 py-2 rounded-xl hover:bg-white/10 group relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <svg class="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span class="relative z-10">Kontak</span>
              </a>
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
                  class="p-2.5 text-yellow-300 hover:text-[#FFD700] transition-all duration-300 rounded-xl hover:bg-white/10 group relative overflow-hidden"
                  :class="{ 'bg-white/10': isSearchOpen }"
                >
                  <div class="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <svg class="w-5 h-5 transition-transform duration-300 relative z-10" :class="{ 'rotate-90': isSearchOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    class="w-full px-4 py-2.5 bg-white/10 border border-yellow-300/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-[#FFD700] focus:bg-white/20 transition-all duration-300 text-sm backdrop-blur-sm"
                    @keydown.escape="closeSearch"
                    @blur="handleSearchBlur"
                  />
                </div>
              </div>
            </div>
            
            <!-- Theme Toggle -->
            <div class="hidden lg:flex items-center">
              <div class="p-2.5 text-yellow-300 hover:text-[#FFD700] transition-all duration-300 rounded-xl hover:bg-white/10 group relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <ThemeToggle />
              </div>
            </div>
            
            <!-- Track Perizinan Button -->
            <a href="#track" class="hidden xl:inline-flex items-center px-4 py-2.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-bold rounded-xl hover:from-[#FFA500] hover:to-[#FF8C00] transition-all duration-300 text-sm shadow-lg hover:shadow-xl transform hover:scale-105 group relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <svg class="w-4 h-4 mr-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span class="relative z-10">Track Perizinan</span>
            </a>
            
            <!-- WhatsApp Button -->
            <a :href="`https://wa.me/62811113666?text=Halo, saya ingin konsultasi tentang layanan RuangOffice`" target="_blank" rel="noopener" class="inline-flex items-center px-4 py-2.5 bg-gradient-to-r from-[#16A34A] to-[#15803D] text-white font-bold rounded-xl hover:from-[#15803D] hover:to-[#166534] transition-all duration-300 text-sm shadow-lg hover:shadow-xl transform hover:scale-105 group relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <svg class="w-4 h-4 mr-2 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span class="relative z-10">WhatsApp</span>
            </a>

          <!-- Mobile Menu Button -->
            <button @click="toggleMobileMenu" class="lg:hidden p-2.5 text-white hover:text-[#FFD700] transition-all duration-300 rounded-xl hover:bg-white/10 group relative overflow-hidden" :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'">
              <div class="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <svg class="w-6 h-6 relative z-10 transition-transform duration-300" :class="{ 'rotate-90': isMobileMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <button @click="toggleMobileMenu" class="p-2.5 text-white hover:text-[#FFD700] transition-all duration-300 rounded-xl hover:bg-white/10 group relative overflow-hidden" aria-label="Close menu">
              <div class="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <svg class="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>

          <div class="space-y-2 mb-6">
            <a href="#home" class="flex items-center space-x-3 py-3 px-4 text-white hover:text-[#FFD700] hover:bg-white/5 rounded-xl transition-all duration-300 font-medium group">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
              <span>Home</span>
            </a>
            <a href="#services" class="flex items-center space-x-3 py-3 px-4 text-white hover:text-[#FFD700] hover:bg-white/5 rounded-xl transition-all duration-300 font-medium group">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
              <span>Layanan</span>
            </a>
            <NuxtLink to="/kbli" class="flex items-center space-x-3 py-3 px-4 text-white hover:text-[#FFD700] hover:bg-white/5 rounded-xl transition-all duration-300 font-medium group">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              <span>KBLI</span>
            </NuxtLink>
            <NuxtLink to="/peraturan" class="flex items-center space-x-3 py-3 px-4 text-white hover:text-[#FFD700] hover:bg-white/5 rounded-xl transition-all duration-300 font-medium group">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
              </svg>
              <span>Peraturan</span>
            </NuxtLink>
            <a href="#pricing" class="flex items-center space-x-3 py-3 px-4 text-white hover:text-[#FFD700] hover:bg-white/5 rounded-xl transition-all duration-300 font-medium group">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
              </svg>
              <span>Harga</span>
            </a>
            <a href="#contact" class="flex items-center space-x-3 py-3 px-4 text-white hover:text-[#FFD700] hover:bg-white/5 rounded-xl transition-all duration-300 font-medium group">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span>Kontak</span>
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
            <a href="#track" class="block w-full py-3 px-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-bold rounded-xl hover:from-[#FFA500] hover:to-[#FF8C00] transition-all duration-300 text-center group relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <div class="flex items-center justify-center relative z-10">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Track Perizinan</span>
              </div>
            </a>
            <a :href="`https://wa.me/62811113666?text=Halo, saya ingin konsultasi tentang layanan RuangOffice`" target="_blank" rel="noopener" class="block w-full py-3 px-4 bg-gradient-to-r from-[#16A34A] to-[#15803D] text-white font-bold rounded-xl hover:from-[#15803D] hover:to-[#166534] transition-all duration-300 text-center group relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <div class="flex items-center justify-center relative z-10">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>WhatsApp</span>
              </div>
            </a>
          </div>

          <div class="pt-4 border-t border-gray-700/50">
            <div class="space-y-2">
              <div class="flex items-center space-x-3 text-gray-300 p-2">
                <div class="w-8 h-8 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center">
                  <span class="text-white text-sm font-bold">📞</span>
                </div>
                <div>
                  <div class="font-medium text-sm text-white">{{ waPhone }}</div>
                  <div class="text-xs text-gray-400">WhatsApp & Telepon</div>
                </div>
              </div>
              <div class="flex items-center space-x-3 text-gray-300 p-2">
                <div class="w-8 h-8 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center">
                  <span class="text-white text-sm font-bold">📧</span>
                </div>
                <div>
                  <div class="font-medium text-sm text-white">{{ email }}</div>
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
