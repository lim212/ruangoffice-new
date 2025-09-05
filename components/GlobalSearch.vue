<template>
  <div class="relative">
    <!-- Search Input -->
    <div class="relative group">
      <input 
        v-model="searchQuery"
        @input="handleSearch"
        @focus="showDropdown = true"
        @blur="handleBlur"
        type="text" 
        placeholder="Cari KBLI, Peraturan, atau layanan..." 
        class="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:border-amber-400 focus:outline-none transition-all duration-300 text-sm w-full bg-white"
      />
      <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
      
      <!-- Loading Spinner -->
      <div v-if="isLoading" class="absolute right-4 top-1/2 transform -translate-y-1/2">
        <div class="animate-spin w-4 h-4 border-2 border-amber-400 border-t-transparent rounded-full"></div>
      </div>
    </div>

    <!-- Search Dropdown -->
    <div 
      v-if="showDropdown && (searchResults.length > 0 || searchQuery.trim())"
      class="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 max-h-96 overflow-hidden"
    >
      <!-- Search Results Header -->
      <div class="px-4 py-3 bg-gradient-to-r from-amber-50 to-yellow-50 border-b border-amber-200">
        <div class="flex items-center justify-between">
          <h3 class="text-sm font-semibold text-amber-800">Hasil Pencarian</h3>
          <span class="text-xs text-amber-600 bg-amber-100 px-2 py-1 rounded-full">
            {{ totalResults }} hasil
          </span>
        </div>
      </div>

      <!-- Search Results -->
      <div class="max-h-80 overflow-y-auto">
        <!-- KBLI Results -->
        <div v-if="kbliResults.length > 0" class="border-b border-gray-100">
          <div class="px-4 py-2 bg-blue-50 border-b border-blue-200">
            <div class="flex items-center space-x-2">
              <span class="text-blue-600 text-sm">📋</span>
              <span class="text-sm font-medium text-blue-800">KBLI ({{ kbliResults.length }})</span>
            </div>
          </div>
          <div class="max-h-32 overflow-y-auto">
            <div 
              v-for="(item, index) in kbliResults.slice(0, 5)" 
              :key="`kbli-${index}`"
              @click="selectKbli(item)"
              class="px-4 py-3 hover:bg-blue-50 cursor-pointer border-b border-gray-50 last:border-b-0 transition-colors duration-200"
            >
              <div class="flex items-start space-x-3">
                <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span class="text-blue-600 text-xs font-bold">{{ item.code }}</span>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="text-sm font-medium text-gray-900 truncate">{{ item.title }}</div>
                  <div class="text-xs text-gray-500 mt-1 line-clamp-2">{{ item.description }}</div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="kbliResults.length > 5" class="px-4 py-2 bg-blue-50 text-center">
            <button 
              @click="viewAllKbli"
              class="text-xs text-blue-600 hover:text-blue-800 font-medium"
            >
              Lihat {{ kbliResults.length - 5 }} hasil KBLI lainnya →
            </button>
          </div>
        </div>

        <!-- Peraturan Results -->
        <div v-if="peraturanResults.length > 0" class="border-b border-gray-100">
          <div class="px-4 py-2 bg-green-50 border-b border-green-200">
            <div class="flex items-center space-x-2">
              <span class="text-green-600 text-sm">📜</span>
              <span class="text-sm font-medium text-green-800">Peraturan ({{ peraturanResults.length }})</span>
            </div>
          </div>
          <div class="max-h-32 overflow-y-auto">
            <div 
              v-for="(item, index) in peraturanResults.slice(0, 5)" 
              :key="`peraturan-${index}`"
              @click="selectPeraturan(item)"
              class="px-4 py-3 hover:bg-green-50 cursor-pointer border-b border-gray-50 last:border-b-0 transition-colors duration-200"
            >
              <div class="flex items-start space-x-3">
                <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span class="text-green-600 text-xs font-bold">{{ item.jenis }}</span>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="text-sm font-medium text-gray-900 truncate">{{ item.tentang }}</div>
                  <div class="text-xs text-gray-500 mt-1">
                    {{ item.jenis }} No. {{ item.nomor }}/{{ item.tahun }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="peraturanResults.length > 5" class="px-4 py-2 bg-green-50 text-center">
            <button 
              @click="viewAllPeraturan"
              class="text-xs text-green-600 hover:text-green-800 font-medium"
            >
              Lihat {{ peraturanResults.length - 5 }} hasil Peraturan lainnya →
            </button>
          </div>
        </div>

        <!-- No Results -->
        <div v-if="searchQuery.trim() && searchResults.length === 0 && !isLoading" class="px-4 py-8 text-center">
          <div class="text-gray-400 text-4xl mb-2">🔍</div>
          <div class="text-sm text-gray-500">Tidak ada hasil ditemukan</div>
          <div class="text-xs text-gray-400 mt-1">Coba kata kunci yang berbeda</div>
        </div>

        <!-- Quick Actions -->
        <div v-if="!searchQuery.trim()" class="px-4 py-4">
          <div class="text-xs text-gray-500 mb-3 font-medium">PENCARIAN CEPAT:</div>
          <div class="grid grid-cols-2 gap-2">
            <button 
              @click="quickSearch('KBLI')"
              class="flex items-center space-x-2 px-3 py-2 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200 text-left"
            >
              <span class="text-blue-600">📋</span>
              <span class="text-xs text-blue-800 font-medium">Lihat KBLI</span>
            </button>
            <button 
              @click="quickSearch('Peraturan')"
              class="flex items-center space-x-2 px-3 py-2 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-200 text-left"
            >
              <span class="text-green-600">📜</span>
              <span class="text-xs text-green-800 font-medium">Lihat Peraturan</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="px-4 py-2 bg-gray-50 border-t border-gray-200">
        <div class="flex items-center justify-between text-xs text-gray-500">
          <span>Tekan Enter untuk mencari</span>
          <span>{{ totalResults }} total hasil</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

// Reactive data
const searchQuery = ref('');
const showDropdown = ref(false);
const isLoading = ref(false);
const kbliData = ref([]);
const peraturanData = ref([]);

// Computed properties
const kbliResults = computed(() => {
  if (!searchQuery.value.trim()) return [];
  
  const query = searchQuery.value.toLowerCase();
  return kbliData.value.filter(item => 
    item.code?.toLowerCase().includes(query) ||
    item.title?.toLowerCase().includes(query) ||
    item.description?.toLowerCase().includes(query)
  );
});

const peraturanResults = computed(() => {
  if (!searchQuery.value.trim()) return [];
  
  const query = searchQuery.value.toLowerCase();
  return peraturanData.value.filter(item => 
    item.jenis?.toLowerCase().includes(query) ||
    item.nomor?.toLowerCase().includes(query) ||
    item.tentang?.toLowerCase().includes(query) ||
    item.tahun?.toString().includes(query)
  );
});

const searchResults = computed(() => [
  ...kbliResults.value,
  ...peraturanResults.value
]);

const totalResults = computed(() => searchResults.value.length);

// Methods
const handleSearch = async () => {
  if (!searchQuery.value.trim()) {
    showDropdown.value = false;
    return;
  }
  
  isLoading.value = true;
  showDropdown.value = true;
  
  try {
    // Load data if not already loaded
    if (kbliData.value.length === 0) {
      const kbliResponse = await fetch('/kbli.json');
      kbliData.value = await kbliResponse.json();
    }
    
    if (peraturanData.value.length === 0) {
      const peraturanResponse = await fetch('/peraturan.json');
      peraturanData.value = await peraturanResponse.json();
    }
  } catch (error) {
    console.error('Error loading data:', error);
  } finally {
    isLoading.value = false;
  }
};

const handleBlur = () => {
  // Delay hiding dropdown to allow clicks
  setTimeout(() => {
    showDropdown.value = false;
  }, 200);
};

const selectKbli = (item: any) => {
  // Navigate to KBLI page with selected item
  navigateTo(`/kbli?search=${encodeURIComponent(item.code)}`);
  showDropdown.value = false;
};

const selectPeraturan = (item: any) => {
  // Navigate to Peraturan page with selected item
  navigateTo(`/peraturan?search=${encodeURIComponent(item.nomor)}`);
  showDropdown.value = false;
};

const viewAllKbli = () => {
  navigateTo('/kbli');
  showDropdown.value = false;
};

const viewAllPeraturan = () => {
  navigateTo('/peraturan');
  showDropdown.value = false;
};

const quickSearch = (type: string) => {
  if (type === 'KBLI') {
    navigateTo('/kbli');
  } else if (type === 'Peraturan') {
    navigateTo('/peraturan');
  }
  showDropdown.value = false;
};

// Watch for search query changes
watch(searchQuery, (newQuery) => {
  if (newQuery.trim()) {
    handleSearch();
  }
});

// Handle Enter key
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' && searchQuery.value.trim()) {
    // Navigate to search results page
    navigateTo(`/search?q=${encodeURIComponent(searchQuery.value)}`);
    showDropdown.value = false;
  }
};

// Add event listener
onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
