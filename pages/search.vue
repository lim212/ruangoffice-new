<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-2xl sm:text-3xl font-bold text-gray-900">Hasil Pencarian</h1>
            <p class="text-gray-600 mt-1">Menampilkan hasil untuk: <span class="font-semibold text-amber-600">"{{ searchQuery }}"</span></p>
          </div>
          <div class="text-sm text-gray-500">
            {{ totalResults }} hasil ditemukan
          </div>
        </div>
      </div>
    </div>

    <!-- Search Results -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- KBLI Results -->
        <div v-if="kbliResults.length > 0" class="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div class="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <span class="text-white text-2xl">📋</span>
                <div>
                  <h2 class="text-xl font-bold text-white">KBLI</h2>
                  <p class="text-blue-100 text-sm">{{ kbliResults.length }} hasil ditemukan</p>
                </div>
              </div>
              <button 
                @click="viewAllKbli"
                class="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white text-sm font-medium rounded-lg transition-all duration-200"
              >
                Lihat Semua
              </button>
            </div>
          </div>
          
          <div class="p-6">
            <div class="space-y-4">
              <div 
                v-for="(item, index) in displayedKbli" 
                :key="`kbli-${index}`"
                class="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-200 cursor-pointer"
                @click="viewKbliDetail(item)"
              >
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-blue-600 font-bold text-sm">{{ item.code }}</span>
                  </div>
                  <div class="flex-1 min-w-0">
                    <h3 class="text-lg font-semibold text-gray-900 mb-1">{{ item.title }}</h3>
                    <p class="text-gray-600 text-sm line-clamp-3">{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Load More Button -->
            <div v-if="kbliResults.length > 5" class="mt-6 text-center">
              <button 
                @click="loadMoreKbli"
                class="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Lihat {{ Math.min(5, kbliResults.length - displayedKbliCount) }} KBLI lainnya
              </button>
            </div>
          </div>
        </div>

        <!-- Peraturan Results -->
        <div v-if="peraturanResults.length > 0" class="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div class="bg-gradient-to-r from-green-500 to-green-600 px-6 py-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <span class="text-white text-2xl">📜</span>
                <div>
                  <h2 class="text-xl font-bold text-white">Peraturan</h2>
                  <p class="text-green-100 text-sm">{{ peraturanResults.length }} hasil ditemukan</p>
                </div>
              </div>
              <button 
                @click="viewAllPeraturan"
                class="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white text-sm font-medium rounded-lg transition-all duration-200"
              >
                Lihat Semua
              </button>
            </div>
          </div>
          
          <div class="p-6">
            <div class="space-y-4">
              <div 
                v-for="(item, index) in displayedPeraturan" 
                :key="`peraturan-${index}`"
                class="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-md transition-all duration-200 cursor-pointer"
                @click="viewPeraturanDetail(item)"
              >
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-green-600 font-bold text-xs">{{ item.jenis }}</span>
                  </div>
                  <div class="flex-1 min-w-0">
                    <h3 class="text-lg font-semibold text-gray-900 mb-1">{{ item.tentang }}</h3>
                    <p class="text-gray-600 text-sm">
                      {{ item.jenis }} No. {{ item.nomor }}/{{ item.tahun }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Load More Button -->
            <div v-if="peraturanResults.length > 5" class="mt-6 text-center">
              <button 
                @click="loadMorePeraturan"
                class="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Lihat {{ Math.min(5, peraturanResults.length - displayedPeraturanCount) }} Peraturan lainnya
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- No Results -->
      <div v-if="totalResults === 0" class="text-center py-16">
        <div class="text-gray-400 text-6xl mb-4">🔍</div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Tidak ada hasil ditemukan</h3>
        <p class="text-gray-600 mb-6">Coba kata kunci yang berbeda atau periksa ejaan</p>
        <div class="flex justify-center space-x-4">
          <button 
            @click="navigateTo('/kbli')"
            class="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Lihat KBLI
          </button>
          <button 
            @click="navigateTo('/peraturan')"
            class="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Lihat Peraturan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

// Get search query from URL
const route = useRoute();
const searchQuery = ref(route.query.q as string || '');

// Reactive data
const kbliData = ref([]);
const peraturanData = ref([]);
const displayedKbliCount = ref(5);
const displayedPeraturanCount = ref(5);

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

const displayedKbli = computed(() => kbliResults.value.slice(0, displayedKbliCount.value));
const displayedPeraturan = computed(() => peraturanResults.value.slice(0, displayedPeraturanCount.value));

const totalResults = computed(() => kbliResults.value.length + peraturanResults.value.length);

// Methods
const loadData = async () => {
  try {
    const [kbliResponse, peraturanResponse] = await Promise.all([
      fetch('/kbli.json'),
      fetch('/peraturan.json')
    ]);
    
    kbliData.value = await kbliResponse.json();
    peraturanData.value = await peraturanResponse.json();
  } catch (error) {
    console.error('Error loading data:', error);
  }
};

const loadMoreKbli = () => {
  displayedKbliCount.value += 5;
};

const loadMorePeraturan = () => {
  displayedPeraturanCount.value += 5;
};

const viewKbliDetail = (item: any) => {
  navigateTo(`/kbli?search=${encodeURIComponent(item.code)}`);
};

const viewPeraturanDetail = (item: any) => {
  navigateTo(`/peraturan?search=${encodeURIComponent(item.nomor)}`);
};

const viewAllKbli = () => {
  navigateTo('/kbli');
};

const viewAllPeraturan = () => {
  navigateTo('/peraturan');
};

// Load data on mount
onMounted(() => {
  loadData();
});

// Set page title
useHead({
  title: `Hasil Pencarian: ${searchQuery.value} - RuangOffice.com`,
  meta: [
    { name: 'description', content: `Hasil pencarian untuk "${searchQuery.value}" di RuangOffice.com` }
  ]
});
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
