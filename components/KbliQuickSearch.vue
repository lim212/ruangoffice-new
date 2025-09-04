<template>
  <section class="kbli-search tw-py-16 md:tw-py-24 tw-bg-gradient-to-br tw-from-blue-50 tw-to-indigo-100">
    <div class="tw-max-w-6xl tw-mx-auto tw-px-4">
      <!-- Section Header -->
      <div class="tw-text-center tw-mb-16">
        <h2 class="tw-text-3xl md:tw-text-5xl tw-font-bold tw-text-gray-900 tw-mb-6">
          Cari Kode KBLI
        </h2>
        <p class="tw-text-lg md:tw-text-xl tw-text-gray-600 tw-max-w-3xl tw-mx-auto">
          Temukan kode KBLI yang sesuai dengan jenis usaha Anda untuk pendirian perusahaan
        </p>
      </div>

      <!-- Search Form -->
      <div class="tw-max-w-4xl tw-mx-auto tw-mb-12">
        <div class="tw-bg-white tw-rounded-2xl tw-shadow-xl tw-p-8">
          <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-4">
            <div class="tw-flex-1">
              <input 
                v-model="searchQuery"
                type="text" 
                placeholder="Cari jenis usaha atau kode KBLI..."
                class="tw-w-full tw-px-4 tw-py-3 tw-border tw-border-gray-300 tw-rounded-lg focus:tw-ring-2 focus:tw-ring-blue-500 focus:tw-border-transparent tw-transition-all"
                @input="searchKbli"
              >
            </div>
            <button 
              @click="searchKbli"
              class="tw-bg-blue-600 hover:tw-bg-blue-700 tw-text-white tw-px-8 tw-py-3 tw-rounded-lg tw-font-semibold tw-transition-colors tw-flex tw-items-center tw-justify-center tw-gap-2"
            >
              <i class="fas fa-search"></i>
              Cari
            </button>
          </div>
          
          <!-- Quick Categories -->
          <div class="tw-mt-6 tw-flex tw-flex-wrap tw-gap-2">
            <span class="tw-text-sm tw-text-gray-600 tw-mr-2">Kategori populer:</span>
            <button 
              v-for="category in popularCategories" 
              :key="category"
              @click="searchByCategory(category)"
              class="tw-bg-gray-100 hover:tw-bg-blue-100 tw-text-gray-700 hover:tw-text-blue-700 tw-px-3 tw-py-1 tw-rounded-full tw-text-sm tw-transition-colors"
            >
              {{ category }}
            </button>
          </div>
        </div>
      </div>

      <!-- Loading Indicator -->
      <div v-if="isLoading" class="tw-text-center tw-text-gray-500">
        <i class="fas fa-spinner fa-spin tw-text-4xl tw-mb-4"></i>
        <p class="tw-text-lg">Memuat data KBLI...</p>
      </div>

      <!-- Data Status -->
      <div v-else-if="!isLoading && kbliData.length > 0" class="tw-text-center tw-text-gray-600 tw-mb-4">
        <p class="tw-text-sm">
          <i class="fas fa-database tw-mr-2"></i>
          Database KBLI tersedia: {{ kbliData.length.toLocaleString() }} kode
        </p>
      </div>

      <!-- Search Results -->
      <div v-if="!isLoading && searchResults.length > 0" class="tw-max-w-4xl tw-mx-auto">
        <div class="tw-bg-white tw-rounded-2xl tw-shadow-xl tw-overflow-hidden">
          <div class="tw-p-6 tw-border-b tw-border-gray-200">
            <h3 class="tw-text-xl tw-font-semibold tw-text-gray-900">
              Hasil Pencarian ({{ searchResults.length }})
            </h3>
          </div>
          
          <div class="tw-max-h-96 tw-overflow-y-auto">
            <div 
              v-for="result in searchResults" 
              :key="result.code"
              class="tw-p-6 tw-border-b tw-border-gray-100 hover:tw-bg-gray-50 tw-transition-colors tw-cursor-pointer"
              @click="selectKbli(result)"
            >
              <div class="tw-flex tw-justify-between tw-items-start tw-gap-4">
                <div class="tw-flex-1">
                  <div class="tw-flex tw-items-center tw-gap-3 tw-mb-2">
                    <span class="tw-bg-blue-100 tw-text-blue-800 tw-px-3 tw-py-1 tw-rounded-full tw-text-sm tw-font-mono tw-font-semibold">
                      {{ result.code }}
                    </span>
                    <span class="tw-text-sm tw-text-gray-500">
                      {{ getCategoryFromCode(result.code) }}
                    </span>
                  </div>
                  <h4 class="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">
                    {{ result.title }}
                  </h4>
                  <p class="tw-text-gray-600 tw-text-sm">
                    {{ result.description }}
                  </p>
                </div>
                <button 
                  @click.stop="selectKbli(result)"
                  class="tw-bg-blue-600 hover:tw-bg-blue-700 tw-text-white tw-px-4 tw-py-2 tw-rounded-lg tw-text-sm tw-font-semibold tw-transition-colors"
                >
                  Pilih
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- No Results -->
      <div v-if="!isLoading && hasSearched && searchQuery && searchResults.length === 0" class="tw-text-center tw-text-gray-500">
        <i class="fas fa-search tw-text-4xl tw-mb-4 tw-text-gray-300"></i>
        <p class="tw-text-lg">Tidak ada hasil yang ditemukan untuk "{{ searchQuery }}"</p>
        <p class="tw-text-sm tw-mt-2">Coba kata kunci lain atau lihat kategori populer di atas</p>
      </div>

      <!-- Info Section -->
      <div class="tw-mt-16 tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8">
        <div class="tw-text-center">
          <div class="tw-w-16 tw-h-16 tw-bg-blue-100 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mx-auto tw-mb-4">
            <i class="fas fa-info-circle tw-text-2xl tw-text-blue-600"></i>
          </div>
          <h3 class="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">Apa itu KBLI?</h3>
          <p class="tw-text-gray-600">
            KBLI adalah klasifikasi baku lapangan usaha Indonesia yang digunakan untuk mengkategorikan jenis usaha.
          </p>
        </div>
        
        <div class="tw-text-center">
          <div class="tw-w-16 tw-h-16 tw-bg-green-100 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mx-auto tw-mb-4">
            <i class="fas fa-check-circle tw-text-2xl tw-text-green-600"></i>
          </div>
          <h3 class="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">Wajib untuk Pendirian PT</h3>
          <p class="tw-text-gray-600">
            Setiap perusahaan harus memiliki kode KBLI yang sesuai dengan jenis usahanya saat pendirian.
          </p>
        </div>
        
        <div class="tw-text-center">
          <div class="tw-w-16 tw-h-16 tw-bg-purple-100 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mx-auto tw-mb-4">
            <i class="fas fa-shield-alt tw-text-2xl tw-text-purple-600"></i>
          </div>
          <h3 class="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">Update Berkala</h3>
          <p class="tw-text-gray-600">
            KBLI diperbarui secara berkala oleh BPS untuk menyesuaikan dengan perkembangan ekonomi.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const searchQuery = ref('')
const searchResults = ref([])
const hasSearched = ref(false)
const kbliData = ref([])
const isLoading = ref(true)

const popularCategories = [
  'Jasa Komputer',
  'Konsultan Manajemen',
  'Perdagangan',
  'Manufaktur',
  'Konstruksi'
]

// Helper function to get category from KBLI code
const getCategoryFromCode = (code: string) => {
  const firstDigit = code.charAt(0)
  const categoryMap: { [key: string]: string } = {
    '0': 'A - Pertanian, Kehutanan dan Perikanan',
    '1': 'B - Pertambangan dan Penggalian', 
    '2': 'C - Industri Pengolahan',
    '3': 'D - Pengadaan Listrik, Gas, Uap/Air Panas dan Udara Dingin',
    '4': 'E - Pengadaan Air, Pengelolaan Sampah, Daur Ulang, dan Remediasi',
    '5': 'F - Konstruksi',
    '6': 'G - Perdagangan Besar dan Eceran',
    '7': 'H - Transportasi dan Pergudangan',
    '8': 'I - Penyediaan Akomodasi dan Makan Minum',
    '9': 'J - Informasi dan Komunikasi'
  }
  return categoryMap[firstDigit] || 'Kategori Lainnya'
}

// Load KBLI data from JSON file
onMounted(async () => {
  try {
    console.log('Starting to load KBLI data in KbliQuickSearch...')
    
    // Try multiple approaches to load data
    let data = null
    
    // Approach 1: Try with $fetch (Nuxt way)
    try {
      data = await $fetch('/kbli.json')
      console.log('Data loaded with $fetch:', data.length, 'items')
    } catch (fetchError) {
      console.log('$fetch failed, trying regular fetch...')
      
      // Approach 2: Try with regular fetch
      const response = await fetch('/kbli.json')
      console.log('Response status:', response.status)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      data = await response.json()
      console.log('Data loaded with fetch:', data.length, 'items')
    }
    
    console.log('Raw data received:', data)
    console.log('Data type:', typeof data)
    console.log('Data length:', data.length)
    console.log('First item:', data[0])
    
    // Check if 72109 exists in loaded data
    const has72109 = data.find(item => item.code === '72109')
    console.log('72109 exists in loaded data:', has72109)
    
    kbliData.value = data
    console.log('KBLI data loaded successfully:', data.length, 'items')
    isLoading.value = false
  } catch (error) {
    console.error('Error loading KBLI data:', error)
    console.error('Error details:', error.message)
    
    // Fallback to sample data if loading fails
    console.log('Using fallback data...')
    kbliData.value = [
      {
        code: '93113',
        title: 'FASILITAS GELANGGANG/ARENA',
        description: 'Kelompok ini mencakup usaha yang menyediakan tempat dan fasilitas olahraga darat, air dan udara di dalam atau luar ruangan seperti: pengelolaan gelanggang/arena renang, bowling, biliar, slingshot, hoki es, bungee jumping, olahraga musim dingin; pengelolaan gelanggang/arena paragliding, hang gliding; sebagai usaha pokok dan sarana gelanggang/arena lainnya.'
      },
      {
        code: '17011',
        title: 'INDUSTRI BUBUR KERTAS (PULP)',
        description: 'Kelompok ini mencakup usaha pembuatan bubur kertas dengan bahan dari kayu atau serat lainnya dan atau kertas bekas. Kegiatannya mencakup industri bubur kertas yang diputihkan, separuh putihkan atau yang tidak diputihkan baik melalui proses mekanis, kimia (pelarutan atau non pelarutan), maupun semi kimia, industri bubur kertas cottonlinters dan penghilangan tinta dan industri bubur kertas dari kertas bekas.'
      },
      {
        code: '62012',
        title: 'Konsultasi Komputer',
        description: 'Kelompok ini mencakup usaha konsultasi di bidang teknologi informasi dan komputer, termasuk perencanaan sistem, analisis kebutuhan, dan implementasi solusi IT.'
      },
      {
        code: '72109',
        title: 'AKTIVITAS PENELITIAN DAN PENGEMBANGAN LAINNYA',
        description: 'Kelompok ini mencakup usaha penelitian dan pengembangan yang tidak diklasifikasikan di tempat lain, termasuk penelitian dan pengembangan di bidang ilmu pengetahuan alam dan teknik, ilmu sosial dan humaniora.'
      }
    ]
    console.log('Using fallback data:', kbliData.value.length, 'items')
    isLoading.value = false
  }
})

const searchKbli = () => {
  if (!searchQuery.value.trim()) {
    searchResults.value = []
    hasSearched.value = false
    return
  }
  
  const query = searchQuery.value.toLowerCase().trim()
  console.log('Searching for:', query)
  console.log('Available data:', kbliData.value.length, 'items')
  console.log('First few items:', kbliData.value.slice(0, 3))
  
  // Check if 72109 exists in data
  const has72109 = kbliData.value.find(item => item.code === '72109')
  console.log('72109 exists in data:', has72109)
  
  searchResults.value = kbliData.value.filter(item => 
    item.code.toLowerCase().includes(query) ||
    item.title.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes(query)
  )
  
  console.log('Search results:', searchResults.value.length, 'items found')
  console.log('Search results for 72109:', searchResults.value.filter(item => item.code === '72109'))
  hasSearched.value = true
}

const searchByCategory = (category: string) => {
  searchQuery.value = category
  searchKbli()
}

const selectKbli = (kbli: any) => {
  // In real app, this would navigate to a form or store the selection
  console.log('Selected KBLI:', kbli)
  alert(`KBLI ${kbli.code} - ${kbli.title} telah dipilih!`)
}
</script>

<style scoped>
/* Component styles */
</style>
