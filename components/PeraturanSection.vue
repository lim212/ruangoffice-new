<template>
  <section class="py-16 lg:py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12 lg:mb-16">
        <div class="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-full text-sm sm:text-base font-semibold mb-4 sm:mb-6 shadow-lg">
          <span class="mr-2 sm:mr-3">📋</span>
          Database Peraturan
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
          Database <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Peraturan</span> Terlengkap
        </h2>
        <p class="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
          Akses database peraturan nasional dan daerah yang lengkap untuk mendukung kepatuhan hukum dan pengembangan bisnis Anda.
        </p>
      </div>

      <!-- Stats Overview -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8 lg:mb-12">
        <div class="bg-white rounded-xl p-4 sm:p-6 text-center shadow-lg border border-yellow-200">
          <div class="text-2xl sm:text-3xl font-bold text-yellow-600 mb-2">{{ totalPeraturan }}</div>
          <div class="text-sm sm:text-base text-gray-600">Total Peraturan</div>
        </div>
        <div class="bg-white rounded-xl p-4 sm:p-6 text-center shadow-lg border border-blue-200">
          <div class="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">{{ totalJenis }}</div>
          <div class="text-sm sm:text-base text-gray-600">Jenis Peraturan</div>
        </div>
        <div class="bg-white rounded-xl p-4 sm:p-6 text-center shadow-lg border border-green-200">
          <div class="text-2xl sm:text-3xl font-bold text-green-600 mb-2">{{ totalKategori }}</div>
          <div class="text-sm sm:text-base text-gray-600">Kategori</div>
        </div>
        <div class="bg-white rounded-xl p-4 sm:p-6 text-center shadow-lg border border-purple-200">
          <div class="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">{{ tahunTerbaru }}</div>
          <div class="text-sm sm:text-base text-gray-600">Tahun Terbaru</div>
        </div>
      </div>

      <!-- Search and Filter Section -->
      <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8 lg:mb-12 border border-gray-100">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
          <!-- Jenis Peraturan Filter -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Pilih Jenis Peraturan</label>
            <select 
              v-model="selectedJenis"
              @change="handleFilterChange"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-200"
            >
              <option value="">Semua Jenis</option>
              <option v-for="jenis in jenisOptions" :key="jenis" :value="jenis">
                {{ jenis }}
              </option>
            </select>
          </div>

          <!-- Tahun Filter -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Pilih Tahun</label>
            <select 
              v-model="selectedTahun"
              @change="handleFilterChange"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-200"
            >
              <option value="">Semua Tahun</option>
              <option v-for="tahun in tahunOptions" :key="tahun" :value="tahun">
                {{ tahun }}
              </option>
            </select>
          </div>

          <!-- Kategori Filter -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Pilih Kategori</label>
            <select 
              v-model="selectedKategori"
              @change="handleFilterChange"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-200"
            >
              <option value="">Semua Kategori</option>
              <option v-for="kategori in kategoriOptions" :key="kategori" :value="kategori">
                {{ kategori }}
              </option>
            </select>
          </div>

          <!-- Search Button -->
          <div class="flex items-end">
            <button 
              @click="handleSearch"
              class="w-full py-2 px-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span class="mr-2">🔍</span>
              Cari
            </button>
          </div>
        </div>

        <!-- Keyword Search -->
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 mb-2">Tulis judul / keyword</label>
          <div class="relative">
            <input 
              v-model="searchQuery"
              @input="handleSearchInput"
              @keyup.enter="handleSearch"
              type="text" 
              placeholder="Cari peraturan berdasarkan judul, nomor, atau keyword..."
              class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-200"
            />
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span class="text-gray-400">📝</span>
            </div>
          </div>
        </div>

        <!-- Results Summary -->
        <div class="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            Menampilkan {{ displayedPeraturan.length }} dari {{ filteredPeraturan.length }} data
            <span v-if="!searchQuery.trim()" class="text-xs text-gray-500 ml-2">
              (Random 24 item dari {{ totalPeraturan }} total peraturan)
            </span>
          </div>
          <div class="flex items-center space-x-2">
            <span>Tampilkan:</span>
            <select 
              v-model="itemsPerPage"
              @change="handleItemsPerPageChange"
              class="px-2 py-1 border border-gray-300 rounded focus:border-yellow-500 focus:outline-none"
            >
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="48">48</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Peraturan Table -->
      <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black">
              <tr>
                <th class="px-4 py-3 text-left font-semibold cursor-pointer" @click="sortBy('jenis')">
                  <div class="flex items-center">
                    Jenis Peraturan
                    <span class="ml-1">{{ getSortIcon('jenis') }}</span>
                  </div>
                </th>
                <th class="px-4 py-3 text-left font-semibold cursor-pointer" @click="sortBy('nomor')">
                  <div class="flex items-center">
                    Nomor
                    <span class="ml-1">{{ getSortIcon('nomor') }}</span>
                  </div>
                </th>
                <th class="px-4 py-3 text-left font-semibold cursor-pointer" @click="sortBy('tahun')">
                  <div class="flex items-center">
                    Tahun
                    <span class="ml-1">{{ getSortIcon('tahun') }}</span>
                  </div>
                </th>
                <th class="px-4 py-3 text-left font-semibold cursor-pointer" @click="sortBy('tentang')">
                  <div class="flex items-center">
                    Tentang
                    <span class="ml-1">{{ getSortIcon('tentang') }}</span>
                  </div>
                </th>
                <th class="px-4 py-3 text-left font-semibold">Kategori</th>
                <th class="px-4 py-3 text-left font-semibold">Status</th>
                <th class="px-4 py-3 text-center font-semibold">File</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr 
                v-for="peraturan in displayedPeraturan" 
                :key="peraturan.id"
                class="hover:bg-gray-50 transition-colors duration-200"
              >
                <td class="px-4 py-3">
                  <div class="flex items-center">
                    <div class="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                    <span class="font-medium text-gray-900">{{ peraturan.jenis }}</span>
                  </div>
                </td>
                <td class="px-4 py-3">
                  <span class="font-mono text-gray-700">{{ peraturan.nomor }}</span>
                </td>
                <td class="px-4 py-3">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {{ peraturan.tahun }}
                  </span>
                </td>
                <td class="px-4 py-3">
                  <div class="max-w-xs">
                    <div class="font-medium text-gray-900 mb-1">{{ peraturan.tentang }}</div>
                    <div class="text-sm text-gray-500">{{ peraturan.instansi }}</div>
                  </div>
                </td>
                <td class="px-4 py-3">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {{ peraturan.kategori }}
                  </span>
                </td>
                <td class="px-4 py-3">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {{ peraturan.status }}
                  </span>
                </td>
                <td class="px-4 py-3 text-center">
                  <a 
                    :href="peraturan.file"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center px-3 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-sm font-medium rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  >
                    <span class="mr-2">📥</span>
                    Download
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Load More / Pagination -->
        <div class="bg-gray-50 px-4 py-4 flex flex-col sm:flex-row justify-between items-center border-t border-gray-200">
          <div class="text-sm text-gray-700 mb-4 sm:mb-0">
            <div v-if="!searchQuery.trim()">
              Menampilkan {{ displayedPeraturan.length }} dari {{ random24Items.length }} peraturan
              <br>
              <span class="text-xs text-gray-500">Random 24 item dari {{ totalPeraturan }} total peraturan</span>
            </div>
            <div v-else>
              Halaman {{ currentPage }} dari {{ totalPages }}
            </div>
          </div>
          
          <!-- Load More Button (when not searching) -->
          <div v-if="!searchQuery.trim() && hasMoreItems" class="mb-4 sm:mb-0">
            <button 
              @click="loadMoreItems"
              class="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Lihat Selanjutnya ({{ random24Items.length - currentViewCount }} item lagi)
            </button>
          </div>

          <!-- Pagination (when searching) -->
          <div v-if="searchQuery.trim()" class="flex space-x-1">
            <button 
              @click="prevPage"
              :disabled="currentPage === 1"
              class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ←
            </button>
            
            <button 
              v-for="page in visiblePages" 
              :key="page"
              @click="goToPage(page)"
              :class="[
                'px-3 py-2 text-sm font-medium rounded-md',
                page === currentPage 
                  ? 'bg-yellow-600 text-white border border-yellow-600' 
                  : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'
              ]"
            >
              {{ page }}
            </button>
            
            <button 
              @click="nextPage"
              :disabled="currentPage === totalPages"
              class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-12 lg:mt-16">
        <div class="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl p-8 lg:p-12 text-black shadow-xl">
          <h3 class="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">
            Butuh Bantuan Memahami Peraturan?
          </h3>
          <p class="text-black/90 mb-6 lg:mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
            Tim konsultan hukum kami siap membantu Anda memahami dan mengimplementasikan peraturan yang berlaku untuk bisnis Anda.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              :href="`https://wa.me/${waPhone}?text=Halo, saya ingin konsultasi tentang peraturan hukum untuk bisnis`"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center px-6 lg:px-8 py-3 lg:py-4 bg-black text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span class="mr-2">💬</span>
              Konsultasi Gratis Sekarang
            </a>
            <a 
              href="#contact"
              class="inline-flex items-center px-6 lg:px-8 py-3 lg:py-4 border-2 border-black text-black font-semibold text-lg rounded-xl hover:bg-black hover:text-white transition-all duration-300"
            >
              <span class="mr-2">📞</span>
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { 
  peraturanDatabase, 
  getPeraturanJenis, 
  getPeraturanYears, 
  getPeraturanCategories,
  getTotalPeraturanCount 
} from '../data/peraturan-database';

const waPhone = '0811113666';

// State
const searchQuery = ref('');
const selectedJenis = ref('');
const selectedTahun = ref('');
const selectedKategori = ref('');
const currentPage = ref(1);
const itemsPerPage = ref(24);
const sortField = ref('tahun');
const sortDirection = ref<'asc' | 'desc'>('desc');
const currentViewCount = ref(12);
const random24Items = ref([]);

// Computed Properties
const jenisOptions = computed(() => getPeraturanJenis());
const tahunOptions = computed(() => getPeraturanYears());
const kategoriOptions = computed(() => getPeraturanCategories());

const totalPeraturan = computed(() => getTotalPeraturanCount());
const totalJenis = computed(() => jenisOptions.value.length);
const totalKategori = computed(() => kategoriOptions.value.length);
const tahunTerbaru = computed(() => Math.max(...tahunOptions.value.map(y => parseInt(y))));

// Shuffle array function
const shuffleArray = (array: any[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Initialize random 24 items
const initializeRandomItems = () => {
  random24Items.value = shuffleArray(peraturanDatabase).slice(0, 24);
};

const filteredPeraturan = computed(() => {
  let filtered = peraturanDatabase;

  // Filter by jenis
  if (selectedJenis.value) {
    filtered = filtered.filter(p => p.jenis === selectedJenis.value);
  }

  // Filter by tahun
  if (selectedTahun.value) {
    filtered = filtered.filter(p => p.tahun === selectedTahun.value);
  }

  // Filter by kategori
  if (selectedKategori.value) {
    filtered = filtered.filter(p => p.kategori === selectedKategori.value);
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase().trim();
    filtered = filtered.filter(p =>
      p.jenis.toLowerCase().includes(query) ||
      p.nomor.toLowerCase().includes(query) ||
      p.tahun.includes(query) ||
      p.tentang.toLowerCase().includes(query) ||
      p.kategori.toLowerCase().includes(query) ||
      p.instansi.toLowerCase().includes(query)
    );
  }

  // Sort
  filtered.sort((a, b) => {
    const aVal = a[sortField.value as keyof typeof a];
    const bVal = b[sortField.value as keyof typeof b];
    
    if (sortDirection.value === 'asc') {
      return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
    } else {
      return aVal > bVal ? -1 : aVal < bVal ? 1 : 0;
    }
  });

  return filtered;
});

const totalPages = computed(() => Math.ceil(filteredPeraturan.value.length / itemsPerPage.value));

const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage.value);
const endIndex = computed(() => Math.min(startIndex.value + itemsPerPage.value, filteredPeraturan.value.length));

const paginatedPeraturan = computed(() => {
  return filteredPeraturan.value.slice(startIndex.value, endIndex.value);
});

// Display logic: show random items when not searching, paginated when searching
const displayedPeraturan = computed(() => {
  if (searchQuery.value.trim()) {
    return paginatedPeraturan.value;
  }
  return random24Items.value.slice(0, currentViewCount.value);
});

const hasMoreItems = computed(() => {
  if (searchQuery.value.trim()) {
    return false;
  }
  return currentViewCount.value < random24Items.value.length;
});

const visiblePages = computed(() => {
  const pages = [];
  const maxVisible = 5;
  
  if (totalPages.value <= maxVisible) {
    for (let i = 1; i <= totalPages.value; i++) {
      pages.push(i);
    }
  } else {
    if (currentPage.value <= 3) {
      for (let i = 1; i <= 4; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(totalPages.value);
    } else if (currentPage.value >= totalPages.value - 2) {
      pages.push(1);
      pages.push('...');
      for (let i = totalPages.value - 3; i <= totalPages.value; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      pages.push('...');
      for (let i = currentPage.value - 1; i <= currentPage.value + 1; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(totalPages.value);
    }
  }
  
  return pages;
});

// Methods
const handleFilterChange = () => {
  currentPage.value = 1;
};

const handleSearchInput = () => {
  currentPage.value = 1;
};

const handleSearch = () => {
  currentPage.value = 1;
};

const handleItemsPerPageChange = () => {
  currentPage.value = 1;
};

const loadMoreItems = () => {
  currentViewCount.value = Math.min(currentViewCount.value + 12, random24Items.value.length);
};

const sortBy = (field: string) => {
  if (sortField.value === field) {
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
  } else {
    sortField.value = field;
    sortDirection.value = 'asc';
  }
};

const getSortIcon = (field: string) => {
  if (sortField.value !== field) return '↕️';
  return sortDirection.value === 'asc' ? '↑' : '↓';
};

const goToPage = (page: number | string) => {
  if (typeof page === 'number') {
    currentPage.value = page;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

// Watch for filter changes to reset pagination
watch([selectedJenis, selectedTahun, selectedKategori, searchQuery], () => {
  currentPage.value = 1;
});

onMounted(() => {
  initializeRandomItems();
  console.log('PeraturanSection loaded with', peraturanDatabase.length, 'items from database');
});
</script>