<template>
  <section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-amber-50 to-slate-50 relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400 to-cyan-400 rounded-full blur-3xl"></div>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-10 sm:mb-12 relative z-10">
        <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 backdrop-blur-sm border border-amber-400/30 text-amber-700 rounded-full text-sm font-semibold mb-4 shadow-lg">
          <span class="mr-2">🏆</span>
          Penawaran Terbaik
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 leading-tight">
          Layanan <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500">Terjangkau</span>
        </h2>
        <p class="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Dapatkan layanan berkualitas dengan harga terbaik untuk memulai dan mengembangkan bisnis Anda.
        </p>
      </div>

      <!-- Navigation Controls -->
      <div class="flex justify-center items-center mb-8 space-x-4">
        <button 
          @click="previousSlide" 
          :disabled="currentSlide === 0"
          class="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg class="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        
        <div class="flex space-x-2">
          <button 
            v-for="(slide, index) in totalSlides" 
            :key="index"
            @click="goToSlide(index)"
            :class="[
              'w-3 h-3 rounded-full transition-all duration-300',
              currentSlide === index 
                ? 'bg-amber-500 shadow-lg' 
                : 'bg-slate-300 hover:bg-slate-400'
            ]"
          ></button>
        </div>
        
        <button 
          @click="nextSlide" 
          :disabled="currentSlide === totalSlides - 1"
          class="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg class="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>

      <!-- Pricing Slider -->
      <div class="relative overflow-hidden">
        <div 
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div 
            v-for="(slide, slideIndex) in pricingSlides" 
            :key="slideIndex"
            class="w-full flex-shrink-0"
          >
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div 
                v-for="(pricing, index) in slide" 
                :key="index"
                class="group bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-amber-200/50 relative overflow-hidden"
              >
                <!-- Card Background Effect -->
                <div class="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="relative p-5 sm:p-6">
                  <div class="text-center mb-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span class="text-xl text-slate-900">{{ pricing.icon }}</span>
                    </div>
                    <h3 class="text-lg font-bold text-slate-800 mb-2">{{ pricing.title }}</h3>
                    <p class="text-sm text-slate-600">{{ pricing.subtitle }}</p>
                  </div>
                  <div class="text-center mb-4">
                    <div class="text-base font-bold text-amber-600 mb-1">{{ pricing.priceLabel }}</div>
                    <div class="text-2xl sm:text-3xl font-bold text-slate-800 mb-1">{{ pricing.price }}</div>
                    <div class="text-sm text-slate-500">{{ pricing.period }}</div>
                  </div>
                  <ul class="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    <li 
                      v-for="(feature, featureIndex) in pricing.features" 
                      :key="featureIndex"
                      class="flex items-center"
                    >
                      <span class="text-green-500 mr-2 sm:mr-3 text-lg sm:text-xl">✅</span>
                      <span class="text-sm sm:text-base text-gray-700">{{ feature }}</span>
                    </li>
                  </ul>
                  <a 
                    :href="`https://wa.me/62811113666?text=Halo, saya tertarik dengan paket ${pricing.title}. Bisa info lebih detail?`"
                    target="_blank"
                    class="block w-full text-center py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 font-bold text-sm sm:text-base rounded-lg hover:from-amber-400 hover:to-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Pilih Paket
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Type definitions
interface PricingItem {
  icon: string
  title: string
  subtitle: string
  priceLabel: string
  price: string
  period: string
  features: string[]
}

// Reactive data
const currentSlide = ref(0)

// Pricing data - 24 items total
const pricingData: PricingItem[] = [
  // Slide 1 (Items 1-6)
  {
    icon: '🏠',
    title: 'Private Office',
    subtitle: 'Kantor Pribadi Lengkap',
    priceLabel: 'Mulai Dari',
    price: '2 Jt',
    period: 'per bulan',
    features: ['Ruang kerja eksklusif', 'Furniture lengkap', 'Internet high-speed', 'Receptionist service']
  },
  {
    icon: '🏢',
    title: 'Virtual Office',
    subtitle: 'Alamat Bisnis Profesional',
    priceLabel: 'Mulai Dari',
    price: '2 Jt',
    period: 'per tahun',
    features: ['Alamat bisnis resmi', 'Layanan surat-menyurat', 'Meeting room access', 'Receptionist service']
  },
  {
    icon: '📋',
    title: 'Pengurusan ISO',
    subtitle: 'AIS/NON/AIS Management',
    priceLabel: 'Mulai Dari',
    price: '5 Jt',
    period: 'one time',
    features: ['Konsultasi ISO', 'Dokumentasi lengkap', 'Audit internal', 'Sertifikasi resmi']
  },
  {
    icon: '⚖️',
    title: 'Jasa Konsultan Hukum',
    subtitle: 'Konsultasi Legal Terpercaya',
    priceLabel: 'Mulai Dari',
    price: '500 Rb',
    period: 'per sesi',
    features: ['Konsultasi hukum', 'Review dokumen', 'Pendampingan legal', 'Solusi terbaik']
  },
  {
    icon: '💰',
    title: 'Jasa Konsultan Keuangan',
    subtitle: 'Konsultasi Keuangan & Pajak',
    priceLabel: 'Mulai Dari',
    price: '500 Rb',
    period: 'per sesi',
    features: ['Perencanaan keuangan', 'Konsultasi pajak', 'Laporan keuangan', 'Audit keuangan']
  },
  {
    icon: '🏛️',
    title: 'Pendirian PT',
    subtitle: 'Perseroan Terbatas',
    priceLabel: 'Mulai Dari',
    price: '3 Jt',
    period: 'one time',
    features: ['Akta pendirian', 'SK Menkumham', 'NPWP perusahaan', 'SIUP/TDP']
  },
  
  // Slide 2 (Items 7-12)
  {
    icon: '🏪',
    title: 'Pendirian CV',
    subtitle: 'Commanditaire Vennootschap',
    priceLabel: 'Mulai Dari',
    price: '2 Jt',
    period: 'one time',
    features: ['Akta pendirian', 'SK Menkumham', 'NPWP perusahaan', 'SIUP/TDP']
  },
  {
    icon: '🌍',
    title: 'Pendirian PMA',
    subtitle: 'Penanaman Modal Asing',
    priceLabel: 'Mulai Dari',
    price: '15 Jt',
    period: 'one time',
    features: ['Akta pendirian', 'SK Menkumham', 'NPWP perusahaan', 'SIUP/TDP']
  },
  {
    icon: '📄',
    title: 'Perubahan Akta',
    subtitle: 'Amandemen Dokumen Perusahaan',
    priceLabel: 'Mulai Dari',
    price: '1.5 Jt',
    period: 'per perubahan',
    features: ['Akta perubahan', 'SK Menkumham', 'Update dokumen', 'Konsultasi hukum']
  },
  {
    icon: '🔄',
    title: 'Pembubaran Perusahaan',
    subtitle: 'Likuidasi & Penutupan',
    priceLabel: 'Mulai Dari',
    price: '5 Jt',
    period: 'one time',
    features: ['Akta pembubaran', 'SK Menkumham', 'Penyelesaian pajak', 'Konsultasi hukum']
  },
  {
    icon: '📊',
    title: 'Laporan Keuangan',
    subtitle: 'Financial Reporting',
    priceLabel: 'Mulai Dari',
    price: '1 Jt',
    period: 'per bulan',
    features: ['Laporan laba rugi', 'Neraca keuangan', 'Arus kas', 'Konsultasi keuangan']
  },
  {
    icon: '🧾',
    title: 'Pembukuan & Akuntansi',
    subtitle: 'Bookkeeping Services',
    priceLabel: 'Mulai Dari',
    price: '800 Rb',
    period: 'per bulan',
    features: ['Pencatatan transaksi', 'Jurnal umum', 'Buku besar', 'Laporan keuangan']
  },
  
  // Slide 3 (Items 13-18)
  {
    icon: '📋',
    title: 'Audit Keuangan',
    subtitle: 'Financial Audit',
    priceLabel: 'Mulai Dari',
    price: '3 Jt',
    period: 'per audit',
    features: ['Audit internal', 'Review keuangan', 'Rekomendasi', 'Laporan audit']
  },
  {
    icon: '💼',
    title: 'Konsultasi Bisnis',
    subtitle: 'Business Consulting',
    priceLabel: 'Mulai Dari',
    price: '1 Jt',
    period: 'per sesi',
    features: ['Strategi bisnis', 'Analisis pasar', 'Perencanaan operasional', 'Konsultasi manajemen']
  },
  {
    icon: '📈',
    title: 'Perencanaan Pajak',
    subtitle: 'Tax Planning',
    priceLabel: 'Mulai Dari',
    price: '1.5 Jt',
    period: 'per tahun',
    features: ['Perencanaan pajak', 'Optimasi pajak', 'Konsultasi pajak', 'Laporan pajak']
  },
  {
    icon: '🏦',
    title: 'Pembukaan Rekening',
    subtitle: 'Bank Account Opening',
    priceLabel: 'Mulai Dari',
    price: '500 Rb',
    period: 'per rekening',
    features: ['Konsultasi bank', 'Dokumen lengkap', 'Pendampingan', 'Follow up']
  },
  {
    icon: '📝',
    title: 'Draft Kontrak',
    subtitle: 'Contract Drafting',
    priceLabel: 'Mulai Dari',
    price: '2 Jt',
    period: 'per kontrak',
    features: ['Draft kontrak', 'Review kontrak', 'Negosiasi', 'Finalisasi']
  },
  {
    icon: '🔍',
    title: 'Due Diligence',
    subtitle: 'Legal Due Diligence',
    priceLabel: 'Mulai Dari',
    price: '10 Jt',
    period: 'per proyek',
    features: ['Analisis legal', 'Review dokumen', 'Risk assessment', 'Laporan lengkap']
  },
  
  // Slide 4 (Items 19-24)
  {
    icon: '📋',
    title: 'Sertifikasi Halal',
    subtitle: 'Halal Certification',
    priceLabel: 'Mulai Dari',
    price: '3 Jt',
    period: 'per sertifikat',
    features: ['Konsultasi halal', 'Dokumentasi', 'Audit halal', 'Sertifikat resmi']
  },
  {
    icon: '🏭',
    title: 'Izin Industri',
    subtitle: 'Industrial License',
    priceLabel: 'Mulai Dari',
    price: '2 Jt',
    period: 'per izin',
    features: ['Konsultasi izin', 'Dokumentasi', 'Pengurusan izin', 'Follow up']
  },
  {
    icon: '🌿',
    title: 'Izin Lingkungan',
    subtitle: 'Environmental License',
    priceLabel: 'Mulai Dari',
    price: '5 Jt',
    period: 'per izin',
    features: ['AMDAL/UKL-UPL', 'Konsultasi lingkungan', 'Dokumentasi', 'Pengurusan izin']
  },
  {
    icon: '🏗️',
    title: 'Izin Bangunan',
    subtitle: 'Building Permit',
    priceLabel: 'Mulai Dari',
    price: '3 Jt',
    period: 'per izin',
    features: ['IMB', 'Konsultasi bangunan', 'Dokumentasi', 'Pengurusan izin']
  },
  {
    icon: '🚛',
    title: 'Izin Transportasi',
    subtitle: 'Transportation License',
    priceLabel: 'Mulai Dari',
    price: '2 Jt',
    period: 'per izin',
    features: ['SIUP angkutan', 'Konsultasi transport', 'Dokumentasi', 'Pengurusan izin']
  },
  {
    icon: '🍽️',
    title: 'Izin Makanan',
    subtitle: 'Food License',
    priceLabel: 'Mulai Dari',
    price: '1.5 Jt',
    period: 'per izin',
    features: ['PIRT/BPOM', 'Konsultasi makanan', 'Dokumentasi', 'Pengurusan izin']
  }
]

// Computed properties
const totalSlides = computed(() => Math.ceil(pricingData.length / 6))

const pricingSlides = computed((): PricingItem[][] => {
  const slides: PricingItem[][] = []
  for (let i = 0; i < totalSlides.value; i++) {
    const start = i * 6
    const end = start + 6
    slides.push(pricingData.slice(start, end))
  }
  return slides
})

// Methods
const nextSlide = () => {
  if (currentSlide.value < totalSlides.value - 1) {
    currentSlide.value++
  }
}

const previousSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

// Auto-slide functionality
let autoSlideInterval: NodeJS.Timeout | null = null

const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    if (currentSlide.value < totalSlides.value - 1) {
      currentSlide.value++
    } else {
      currentSlide.value = 0
    }
  }, 5000) // Change slide every 5 seconds
}

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
    autoSlideInterval = null
  }
}

// Lifecycle
onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  stopAutoSlide()
})
</script>