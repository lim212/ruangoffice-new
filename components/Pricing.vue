<template>
  <section id="pricing" class="py-16 sm:py-20 lg:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16 sm:mb-20">
        <div class="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-full text-sm sm:text-base font-semibold mb-6 shadow-lg">
          <span class="mr-2 sm:mr-3">💰</span>
          Paket Harga
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Pilihan Paket <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700">Terjangkau</span>
        </h2>
        <p class="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Kami menawarkan berbagai paket layanan dengan harga yang kompetitif dan transparan. 
          Pilih paket yang sesuai dengan kebutuhan bisnis Anda.
        </p>
      </div>

      <!-- Pricing Toggle -->
      <div class="flex justify-center mb-12">
        <div class="bg-gray-100 rounded-2xl p-1 flex">
          <button 
            @click="billingCycle = 'monthly'"
            :class="[
              'px-6 py-3 rounded-xl font-semibold transition-all duration-300',
              billingCycle === 'monthly' 
                ? 'bg-white text-gray-900 shadow-lg' 
                : 'text-gray-600 hover:text-gray-900'
            ]"
          >
            Bulanan
          </button>
          <button 
            @click="billingCycle = 'yearly'"
            :class="[
              'px-6 py-3 rounded-xl font-semibold transition-all duration-300',
              billingCycle === 'yearly' 
                ? 'bg-white text-gray-900 shadow-lg' 
                : 'text-gray-600 hover:text-gray-900'
            ]"
          >
            Tahunan
            <span class="ml-2 text-xs bg-yellow-400 text-black px-2 py-1 rounded-full">Hemat 20%</span>
          </button>
        </div>
      </div>

      <!-- Pricing Cards -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-16">
        <!-- Basic Plan -->
        <div class="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-yellow-300 relative">
          <div class="p-8 sm:p-10">
            <!-- Popular Badge -->
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div class="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                ⭐ Paling Populer
              </div>
            </div>

            <!-- Plan Header -->
            <div class="text-center mb-8">
              <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Basic</h3>
              <div class="mb-6">
                <span class="text-4xl sm:text-5xl font-bold text-gray-900">
                  {{ billingCycle === 'monthly' ? 'Rp 500K' : 'Rp 4.8M' }}
                </span>
                <span class="text-gray-600 text-lg">
                  /{{ billingCycle === 'monthly' ? 'bulan' : 'tahun' }}
                </span>
              </div>
              <p class="text-gray-600">
                Ideal untuk startup dan bisnis kecil yang baru memulai
              </p>
            </div>

            <!-- Features -->
            <ul class="space-y-4 mb-8">
              <li class="flex items-center">
                <span class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </span>
                <span class="text-gray-700">Virtual Office Jakarta</span>
              </li>
              <li class="flex items-center">
                <span class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </span>
                <span class="text-gray-700">Surat Masuk & Keluar</span>
              </li>
              <li class="flex items-center">
                <span class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </span>
                <span class="text-gray-700">Meeting Room 2 Jam/Bulan</span>
              </li>
              <li class="flex items-center">
                <span class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </span>
                <span class="text-gray-700">Resepsionis Virtual</span>
              </li>
            </ul>

            <!-- CTA Button -->
            <a 
              href="#contact" 
              class="block w-full text-center px-6 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-lg rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Pilih Paket
            </a>
          </div>
        </div>

        <!-- Professional Plan -->
        <div class="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-yellow-300 relative scale-105">
          <div class="p-8 sm:p-10">
            <!-- Popular Badge -->
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div class="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                🏆 Best Value
              </div>
            </div>

            <!-- Plan Header -->
            <div class="text-center mb-8">
              <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Professional</h3>
              <div class="mb-6">
                <span class="text-4xl sm:text-5xl font-bold text-gray-900">
                  {{ billingCycle === 'monthly' ? 'Rp 800K' : 'Rp 7.7M' }}
                </span>
                <span class="text-gray-600 text-lg">
                  /{{ billingCycle === 'monthly' ? 'bulan' : 'tahun' }}
                </span>
              </div>
              <p class="text-gray-600">
                Cocok untuk bisnis menengah yang membutuhkan layanan lebih lengkap
              </p>
            </div>

            <!-- Features -->
            <ul class="space-y-4 mb-8">
              <li class="flex items-center">
                <span class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </span>
                <span class="text-gray-700">Semua fitur Basic</span>
              </li>
              <li class="flex items-center">
                <span class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </span>
                <span class="text-gray-700">Meeting Room 8 Jam/Bulan</span>
              </li>
              <li class="flex items-center">
                <span class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </span>
                <span class="text-gray-700">Konsultasi Hukum 2 Jam/Bulan</span>
              </li>
              <li class="flex items-center">
                <span class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </span>
                <span class="text-gray-700">Priority Support</span>
              </li>
            </ul>

            <!-- CTA Button -->
            <a 
              href="#contact" 
              class="block w-full text-center px-6 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold text-lg rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Pilih Paket
            </a>
          </div>
        </div>

        <!-- Enterprise Plan -->
        <div class="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-yellow-300 relative">
          <div class="p-8 sm:p-10">
            <!-- Plan Header -->
            <div class="text-center mb-8">
              <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div class="mb-6">
                <span class="text-4xl sm:text-5xl font-bold text-gray-900">
                  Custom
                </span>
              </div>
              <p class="text-gray-600">
                Solusi khusus untuk perusahaan besar dengan kebutuhan spesifik
              </p>
            </div>

            <!-- Features -->
            <ul class="space-y-4 mb-8">
              <li class="flex items-center">
                <span class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </span>
                <span class="text-gray-700">Semua fitur Professional</span>
              </li>
              <li class="flex items-center">
                <span class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </span>
                <span class="text-gray-700">Private Office</span>
              </li>
              <li class="flex items-center">
                <span class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </span>
                <span class="text-gray-700">Dedicated Account Manager</span>
              </li>
              <li class="flex items-center">
                <span class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </span>
                <span class="text-gray-700">Custom Solutions</span>
              </li>
            </ul>

            <!-- CTA Button -->
            <a 
              href="#contact" 
              class="block w-full text-center px-6 py-4 bg-black text-white font-bold text-lg rounded-xl hover:bg-gray-800 transform hover:-translate-y-1 transition-all duration-300"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>

      <!-- Additional Services -->
      <div class="bg-gray-50 rounded-3xl p-8 sm:p-12 mb-16">
        <div class="text-center mb-12">
          <h3 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Layanan Tambahan
          </h3>
          <p class="text-gray-600 text-lg">
            Kami juga menyediakan berbagai layanan tambahan yang dapat disesuaikan dengan kebutuhan Anda
          </p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div class="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">📋</span>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Pendirian PT</h4>
            <p class="text-sm text-gray-600">Mulai dari Rp 3.5M</p>
          </div>
          
          <div class="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">🏢</span>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Private Office</h4>
            <p class="text-sm text-gray-600">Mulai dari Rp 2.5M/bln</p>
          </div>
          
          <div class="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">💡</span>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Konsultasi Hukum</h4>
            <p class="text-sm text-gray-600">Mulai dari Rp 500K</p>
          </div>
          
          <div class="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">📋</span>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Perizinan Usaha</h4>
            <p class="text-sm text-gray-600">Mulai dari Rp 1.5M</p>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center">
        <div class="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl p-8 sm:p-10 text-black shadow-xl">
          <h3 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Butuh Konsultasi Paket?
          </h3>
          <p class="text-base sm:text-lg lg:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Tim kami siap membantu Anda memilih paket yang tepat sesuai kebutuhan dan budget. 
            Konsultasi gratis tanpa biaya tersembunyi.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              class="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-bold text-lg rounded-xl hover:bg-gray-800 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              <span class="mr-3">💬</span>
              Konsultasi Gratis
            </a>
            <a 
              href="tel:0811113666" 
              class="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold text-lg rounded-xl hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              <span class="mr-3">📞</span>
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const billingCycle = ref('monthly');
</script>
