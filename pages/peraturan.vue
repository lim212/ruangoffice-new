<template>
  <div>
    <!-- Header Section -->
    <section class="py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-full text-sm sm:text-base font-semibold mb-4 sm:mb-6 shadow-lg">
          <span class="mr-2 sm:mr-3">📋</span>
          Database Peraturan Lengkap
        </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
          Database <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Peraturan</span> Indonesia
        </h1>
        <p class="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
          Kumpulan peraturan perundang-undangan Indonesia yang digunakan untuk mengatur berbagai aspek kehidupan bernegara dan bermasyarakat.
        </p>
      </div>
    </section>

    <!-- Search & Filter Section -->
    <section class="py-8 lg:py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-yellow-200">
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
            <!-- Search Input -->
            <div class="lg:col-span-2">
              <label class="block text-sm sm:text-base font-semibold text-gray-700 mb-2">🔍 Cari Peraturan</label>
              <div class="relative">
                <input 
                  v-model="query"
                  type="text"
                  placeholder="Cari berdasarkan jenis, nomor, tahun, atau tentang peraturan..."
                  class="w-full px-4 py-3 pl-12 border-2 border-yellow-300 rounded-lg sm:rounded-xl text-sm sm:text-base focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                />
                <span class="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-500 text-lg">🔍</span>
              </div>
            </div>

            <!-- Jenis Filter -->
      <div>
              <label class="block text-sm sm:text-base font-semibold text-gray-700 mb-2">📂 Jenis Peraturan</label>
              <select 
                v-model="jenisFilter"
                class="w-full px-4 py-3 border-2 border-yellow-300 rounded-lg sm:rounded-xl text-sm sm:text-base focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
              >
                <option value="">Semua Jenis</option>
          <option v-for="j in jenisOptions" :key="j" :value="j">{{ j }}</option>
        </select>
      </div>

            <!-- Tahun Filter -->
      <div>
              <label class="block text-sm sm:text-base font-semibold text-gray-700 mb-2">📅 Tahun</label>
              <select 
                v-model="tahunFilter"
                class="w-full px-4 py-3 border-2 border-yellow-300 rounded-lg sm:rounded-xl text-sm sm:text-base focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
              >
                <option value="">Semua Tahun</option>
          <option v-for="t in tahunOptions" :key="t" :value="t">{{ t }}</option>
        </select>
            </div>
          </div>

          <!-- Quick Stats -->
          <div class="mt-6 pt-6 border-t border-yellow-200">
            <div class="flex flex-wrap items-center justify-between gap-4">
              <div class="flex items-center space-x-6">
                <div class="text-center">
                  <div class="text-2xl sm:text-3xl font-bold text-yellow-600">{{ query.trim() ? filtered.length : random24Items.length }}</div>
                  <div class="text-sm text-gray-600">{{ query.trim() ? 'Total Peraturan' : 'Random 24 Item' }}</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl sm:text-3xl font-bold text-green-600">{{ jenisFilter || 'Semua' }}</div>
                  <div class="text-sm text-gray-600">Jenis</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl sm:text-3xl font-bold text-blue-600">{{ items.length }}</div>
                  <div class="text-sm text-gray-600">Database Lengkap</div>
                </div>
              </div>
              <div class="text-sm text-gray-600 bg-yellow-200 px-3 py-2 rounded-lg">
                💡 Klik pada baris untuk melihat detail lengkap peraturan
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Loading Section -->
    <section v-if="pending" class="py-8 lg:py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden p-8 text-center">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600 mx-auto mb-4"></div>
          <p class="text-lg text-gray-600">Memuat database peraturan...</p>
        </div>
      </div>
    </section>

    <!-- Error Section -->
    <section v-else-if="error" class="py-8 lg:py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden p-8 text-center">
          <div class="text-red-600 text-lg">Gagal memuat data peraturan.</div>
      </div>
    </div>
    </section>

    <!-- Peraturan Table Section -->
    <section v-else class="py-8 lg:py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black">
                <tr>
                  <th class="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base font-bold">No</th>
                  <th class="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base font-bold">Jenis Peraturan</th>
                  <th class="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base font-bold">Nomor</th>
                  <th class="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base font-bold">Tahun</th>
                  <th class="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base font-bold">Tentang</th>
                  <th class="px-4 sm:px-6 py-3 sm:py-4 text-center text-sm sm:text-base font-bold">Aksi</th>
              </tr>
            </thead>
              <tbody class="divide-y divide-gray-200">
                <tr 
                  v-for="(row, idx) in displayedPeraturan" 
                  :key="idx"
                  @click="showDetail(row)"
                  class="hover:bg-yellow-50 cursor-pointer transition-all duration-200 hover:shadow-md"
                  title="Klik untuk melihat detail peraturan {{ row.jenis }} No. {{ row.nomor }}/{{ row.tahun }}"
                >
                  <td class="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-900 font-medium">
                    {{ (currentPage - 1) * itemsPerPage + idx + 1 }}
                  </td>
                  <td class="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-900 font-semibold">
                    {{ row.jenis }}
                  </td>
                  <td class="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-blue-600 font-bold">
                    {{ row.nomor }}
                  </td>
                  <td class="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-900">
                    {{ row.tahun }}
                  </td>
                  <td class="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-700">
                    {{ truncateText(row.tentang, 100) }}
                  </td>
                  <td class="px-4 sm:px-6 py-3 sm:py-4 text-center">
                    <button 
                      @click.stop="showDetail(row)"
                      class="inline-flex items-center px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors duration-200"
                      title="Lihat detail peraturan {{ row.jenis }} No. {{ row.nomor }}/{{ row.tahun }}"
                    >
                      <span class="mr-1">👁️</span>
                      Detail
                    </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

          <!-- Load More Button -->
          <div v-if="hasMoreItems" class="bg-gray-50 px-4 sm:px-6 py-4 sm:py-6 border-t border-gray-200 text-center">
            <button 
              @click="loadMoreItems"
              class="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Lihat Selanjutnya ({{ random24Items.length - currentViewCount }} item lagi)
            </button>
          </div>

          <!-- Info Section - Only show when no search query -->
          <div v-if="!query.trim()" class="bg-gray-50 px-4 sm:px-6 py-4 sm:py-6 border-t border-gray-200">
            <div class="text-center">
              <div class="text-sm text-gray-600">
                Menampilkan {{ displayedPeraturan.length }} dari {{ random24Items.length }} peraturan
                <br>
                <span class="text-xs text-gray-500">Random 24 item dari {{ items.length }} total peraturan</span>
              </div>
            </div>
          </div>

          <!-- Search Results Info - Only show when there's a search query -->
          <div v-if="query.trim()" class="bg-blue-50 px-4 sm:px-6 py-4 sm:py-6 border-t border-blue-200">
            <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div class="text-sm text-blue-700">
                <span class="font-semibold">{{ filtered.length }}</span> hasil ditemukan untuk pencarian "<span class="font-semibold">{{ query }}</span>"
                <br>
                <span class="text-xs text-blue-600">Dari {{ items.length }} total peraturan database</span>
              </div>
              <button 
                @click="query = ''; currentPage = 1; currentViewCount = itemsPerView"
                class="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Hapus Pencarian
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Detail Modal -->
    <div 
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      @click="closeModal"
    >
      <div 
        class="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-hidden transform transition-all duration-300 scale-100"
        @click.stop
      >
        <!-- Modal Header -->
        <div class="bg-gradient-to-r from-yellow-400 to-yellow-600 px-6 py-4 flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <span class="text-white text-xl font-bold">📋</span>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">Detail Peraturan</h3>
              <p class="text-yellow-100 text-sm">Informasi lengkap peraturan perundang-undangan</p>
            </div>
          </div>
          <button 
            @click="closeModal"
            class="text-white hover:text-yellow-200 text-2xl transition-colors duration-200 bg-white bg-opacity-20 rounded-full w-8 h-8 flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        <!-- Modal Content -->
        <div class="overflow-y-auto max-h-[calc(95vh-80px)]">
          <div v-if="selectedItem" class="p-6 space-y-6">
            <!-- Header Info -->
            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div class="text-sm text-blue-600 font-medium mb-1">Jenis Peraturan</div>
                  <div class="text-2xl font-bold text-blue-700">{{ selectedItem.jenis }}</div>
                </div>
                <div class="text-right">
                  <div class="text-sm text-gray-600 font-medium mb-1">Nomor & Tahun</div>
                  <div class="text-xl font-bold text-gray-800">{{ selectedItem.nomor }}/{{ selectedItem.tahun }}</div>
                </div>
              </div>
            </div>

            <!-- Tentang -->
            <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div class="flex items-center mb-5">
                <div class="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
                  <span class="text-yellow-600 text-xl">📝</span>
                </div>
                <div>
                  <h4 class="text-xl font-bold text-gray-900">TENTANG</h4>
                  <p class="text-sm text-gray-500 mt-1">Judul dan pokok bahasan peraturan</p>
                </div>
              </div>
              <div class="ml-14">
                <div class="text-gray-800 leading-relaxed text-lg font-medium">
                  {{ selectedItem.tentang }}
                </div>
              </div>
            </div>

            <!-- Informasi Detail -->
            <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div class="flex items-center mb-5">
                <div class="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <span class="text-green-600 text-xl">ℹ️</span>
                </div>
                <div>
                  <h4 class="text-xl font-bold text-gray-900">INFORMASI DETAIL</h4>
                  <p class="text-sm text-gray-500 mt-1">Data lengkap peraturan</p>
                </div>
              </div>
              <div class="ml-14">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-4">
                    <div class="bg-gray-50 p-4 rounded-lg">
                      <div class="text-sm text-gray-600 font-medium mb-1">Jenis Peraturan</div>
                      <div class="text-lg font-semibold text-gray-900">{{ selectedItem.jenis }}</div>
                    </div>
                    <div class="bg-gray-50 p-4 rounded-lg">
                      <div class="text-sm text-gray-600 font-medium mb-1">Nomor</div>
                      <div class="text-lg font-semibold text-blue-600">{{ selectedItem.nomor }}</div>
                    </div>
                  </div>
                  <div class="space-y-4">
                    <div class="bg-gray-50 p-4 rounded-lg">
                      <div class="text-sm text-gray-600 font-medium mb-1">Tahun</div>
                      <div class="text-lg font-semibold text-gray-900">{{ selectedItem.tahun }}</div>
                    </div>
                    <div class="bg-gray-50 p-4 rounded-lg">
                      <div class="text-sm text-gray-600 font-medium mb-1">Status</div>
                      <div class="text-lg font-semibold text-green-600">Aktif</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- File Download -->
            <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div class="flex items-center mb-5">
                <div class="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <span class="text-purple-600 text-xl">📄</span>
                </div>
                <div>
                  <h4 class="text-xl font-bold text-gray-900">FILE PERATURAN</h4>
                  <p class="text-sm text-gray-500 mt-1">Download dokumen resmi peraturan</p>
                </div>
              </div>
              <div class="ml-14">
                <div class="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-5">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-3">
                      <div class="w-12 h-12 bg-purple-200 rounded-lg flex items-center justify-center">
                        <span class="text-purple-600 text-xl">📋</span>
                      </div>
                      <div>
                        <div class="font-semibold text-purple-800">{{ selectedItem.jenis }} No. {{ selectedItem.nomor }}/{{ selectedItem.tahun }}</div>
                        <div class="text-sm text-purple-600">Dokumen PDF resmi</div>
                      </div>
                    </div>
                    <a 
                      :href="selectedItem.file" 
                      target="_blank" 
                      rel="noopener"
                      class="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200 shadow-sm flex items-center space-x-2"
                    >
                      <span>📥</span>
                      <span>Download PDF</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal Footer -->
        <div class="bg-gray-50 px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
          <button 
            @click="closeModal"
            class="flex-1 px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-200 shadow-sm"
          >
            Tutup
          </button>
          <button 
            @click="copyPeraturanInfo"
            data-copy-button
            class="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm flex items-center justify-center space-x-2"
          >
            <span>📋</span>
            <span>Copy Info</span>
          </button>
          <a 
            :href="`https://wa.me/${waPhone}?text=Halo, saya ingin konsultasi tentang peraturan ${selectedItem?.jenis} No. ${selectedItem?.nomor}/${selectedItem?.tahun}`"
            target="_blank"
            rel="noopener"
            class="flex-1 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200 text-center shadow-sm flex items-center justify-center space-x-2"
          >
            <span>💬</span>
            <span>Konsultasi WhatsApp</span>
          </a>
        </div>
      </div>
    </div>

    <!-- WhatsApp CTA -->
    <section class="py-16 lg:py-20 bg-gradient-to-r from-green-500 to-green-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
          Butuh Bantuan Memahami Peraturan?
        </h2>
        <p class="text-lg sm:text-xl lg:text-2xl text-green-100 mb-8 sm:mb-10 max-w-3xl mx-auto">
          Tim ahli kami siap membantu Anda memahami peraturan yang relevan dengan bisnis dan kebutuhan Anda.
        </p>
        <a 
          :href="`https://wa.me/${waPhone}?text=Halo, saya ingin konsultasi tentang peraturan perundang-undangan`"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center px-8 py-4 bg-white text-green-600 font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          <span class="mr-3">💬</span>
          Konsultasi Gratis Sekarang
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, onMounted } from 'vue'

// SEO Meta
// useHead({ title: 'Peraturan | Ruangoffice' })

// Load data from public/peraturan.json
const data = ref<any[]>([])
const pending = ref(true)
const error = ref<any>(null)

onMounted(async () => {
  try {
    const result = await $fetch('/peraturan.json') as any[]
    data.value = result
    pending.value = false
    console.log('Peraturan data loaded:', result.length, 'items')
  } catch (err) {
    error.value = err
    pending.value = false
  }
})

// Controls
const query = ref('')
const jenisFilter = ref('')
const tahunFilter = ref('')
const currentPage = ref(1)
const itemsPerPage = ref(24)
const itemsPerView = ref(12)
const currentViewCount = ref(12)
const showModal = ref(false)
const selectedItem = ref<any>(null)
const waPhone = '0811113666'

// SEO - Commented out to avoid useHead error
// useHead({
//   title: 'Database Peraturan Indonesia - Kumpulan Peraturan Terlengkap | RuangOffice',
//   meta: [
//     { name: 'description', content: 'Database lengkap peraturan Indonesia termasuk UU, PP, Perpres, dan peraturan lainnya. Akses mudah dan download PDF peraturan terbaru.' },
//     { name: 'keywords', content: 'Peraturan Indonesia, UU, PP, Perpres, Database Peraturan, Peraturan Terbaru, Download Peraturan, Hukum Indonesia' },
//     { name: 'robots', content: 'index, follow' },
//     { name: 'googlebot', content: 'index, follow' },
//     { property: 'og:title', content: 'Database Peraturan Indonesia - RuangOffice' },
//     { property: 'og:description', content: 'Database lengkap peraturan Indonesia termasuk UU, PP, Perpres, dan peraturan lainnya. Akses mudah dan download PDF peraturan terbaru.' },
//     { property: 'og:type', content: 'website' },
//     { property: 'og:url', content: 'https://ruangoffice.com/peraturan' },
//     { property: 'og:image', content: 'https://ruangoffice.com/assets/img/Logo_Ruang Office R.png' },
//     { name: 'twitter:card', content: 'summary_large_image' },
//     { name: 'twitter:title', content: 'Database Peraturan Indonesia - RuangOffice' },
//     { name: 'twitter:description', content: 'Database lengkap peraturan Indonesia termasuk UU, PP, Perpres, dan peraturan lainnya. Akses mudah dan download PDF peraturan terbaru.' }
//   ],
//   link: [
//     { rel: 'canonical', href: 'https://ruangoffice.com/peraturan' },
//     { rel: 'alternate', hreflang: 'id', href: 'https://ruangoffice.com/peraturan' }
//   ],
//   script: [
//     {
//       type: 'application/ld+json',
//       innerHTML: JSON.stringify({
//         "@context": "https://schema.org",
//         "@type": "Dataset",
//         "name": "Database Peraturan Indonesia",
//         "description": "Database lengkap peraturan Indonesia termasuk UU, PP, Perpres, dan peraturan lainnya.",
//         "url": "https://ruangoffice.com/peraturan",
//         "keywords": "Peraturan Indonesia, UU, PP, Perpres, Database Peraturan, Peraturan Terbaru, Download Peraturan, Hukum Indonesia",
//         "provider": {
//           "@type": "Organization",
//           "name": "RuangOffice",
//           "url": "https://ruangoffice.com"
//         },
//         "dateModified": new Date().toISOString(),
//         "license": "https://ruangoffice.com/peraturan"
//       })
//     }
//   ]
// })

// Normalize list
const items = computed(() => Array.isArray(data.value) ? data.value as any[] : [])

const jenisOptions = computed(() => {
  const set = new Set<string>()
  // Use random24Items for filter options to match displayed data
  for (const r of random24Items.value) {
    const v = (r?.jenis ?? '').toString().trim()
    if (v) set.add(v)
  }
  return Array.from(set).sort((a,b) => a.localeCompare(b))
})

const tahunOptions = computed(() => {
  const set = new Set<string>()
  // Use random24Items for filter options to match displayed data
  for (const r of random24Items.value) {
    const v = (r?.tahun ?? '').toString().trim()
    if (v) set.add(v)
  }
  // sort desc numeric where possible
  return Array.from(set).sort((a,b) => (parseInt(b)||0) - (parseInt(a)||0))
})

// Helper function to shuffle array
const shuffleArray = (array: any[]) => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Get random 24 items for display
const random24Items = computed(() => {
  if (items.value.length === 0) return []
  const shuffled = shuffleArray(items.value)
  return shuffled.slice(0, 24)
})

const filtered = computed(() => {
  // If there's a search query, search in ALL data
  // If no search query, use random 24 items
  let sourceData = query.value.trim() ? items.value : random24Items.value
  let arr = sourceData
  
  const q = query.value.toLowerCase()
  if (q) {
    arr = arr.filter(r => [r.jenis, r.nomor, r.tahun, r.tentang].some((x:any) => (x?.toString()?.toLowerCase() || '').includes(q)))
  }
  if (jenisFilter.value) arr = arr.filter(r => (r.jenis || '') === jenisFilter.value)
  if (tahunFilter.value) arr = arr.filter(r => (r.tahun || '') === tahunFilter.value)
  return arr
})

const totalPages = computed(() => {
  // If there's a search query, no pagination needed
  if (query.value.trim()) {
    return 1
  }
  // For random 24 items, we only have 1 page
  return 1
})

const paginatedPeraturan = computed(() => {
  // Always return filtered data (either search results or random 24 items)
  return filtered.value
})

const displayedPeraturan = computed(() => {
  // If there's a search query, show all results
  if (query.value.trim()) {
    return paginatedPeraturan.value
  }
  
  // If no search, show limited items with "load more" functionality
  // Always show from random24Items, not from paginatedPeraturan
  return random24Items.value.slice(0, currentViewCount.value)
})

const hasMoreItems = computed(() => {
  // Only show "load more" when there's no search query
  if (query.value.trim()) {
    return false
  }
  return currentViewCount.value < random24Items.value.length
})

// Methods
const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

const showDetail = (item: any) => {
  selectedItem.value = item
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  selectedItem.value = null
}

const copyPeraturanInfo = async () => {
  if (!selectedItem.value) return;
  
  const info = `PERATURAN ${selectedItem.value.jenis} No. ${selectedItem.value.nomor}/${selectedItem.value.tahun}

TENTANG:
${selectedItem.value.tentang}

INFORMASI DETAIL:
- Jenis: ${selectedItem.value.jenis}
- Nomor: ${selectedItem.value.nomor}
- Tahun: ${selectedItem.value.tahun}
- File: ${selectedItem.value.file}

Sumber: Database Peraturan RuangOffice
Generated: ${new Date().toLocaleString('id-ID')}`;

  try {
    await navigator.clipboard.writeText(info);
    
    // Show success feedback
    const button = document.querySelector('[data-copy-button]');
    if (button) {
      const originalText = button.textContent;
      button.textContent = '✅ Copied!';
      button.classList.add('bg-green-600');
      setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove('bg-green-600');
      }, 2000);
    }
  } catch (err) {
    console.error('Failed to copy:', err);
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = info;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
    currentViewCount.value = itemsPerView.value
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
    currentViewCount.value = itemsPerView.value
  }
}

const loadMoreItems = () => {
  currentViewCount.value = Math.min(currentViewCount.value + itemsPerView.value, random24Items.value.length)
}

// Watch for filter changes to reset pagination and view count
watch([query, jenisFilter, tahunFilter], () => {
  currentPage.value = 1
  // Only reset view count when search is cleared or filter changes
  if (!query.value.trim()) {
    currentViewCount.value = itemsPerView.value
  }
})

</script>
