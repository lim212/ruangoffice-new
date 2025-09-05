<template>
  <div class="relative">
    <!-- Theme Toggle Button -->
    <button
      @click="toggleTheme"
      :aria-label="getThemeLabel"
      class="group relative w-10 h-10 bg-white/90 backdrop-blur-sm border border-gray-200/60 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center overflow-hidden"
    >
      <!-- Background Gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-yellow-400/20 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <!-- Icon Container -->
      <div class="relative z-10 flex items-center justify-center">
        <!-- Light Mode Icon -->
        <div 
          v-if="!isDark && !isNight"
          class="text-amber-500 group-hover:text-amber-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
          </svg>
        </div>
        
        <!-- Dark Mode Icon -->
        <div 
          v-else-if="isDark && !isNight"
          class="text-slate-600 group-hover:text-slate-700 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </div>
        
        <!-- Night Mode Icon -->
        <div 
          v-else-if="isNight"
          class="text-indigo-600 group-hover:text-indigo-700 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
      
      <!-- Ripple Effect -->
      <div class="absolute inset-0 rounded-xl overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      </div>
    </button>

    <!-- Theme Tooltip -->
    <div class="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
      {{ getThemeLabel }}
      <div class="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isDark, isNight, toggleTheme, getThemeLabel } = useDarkMode()
</script>
