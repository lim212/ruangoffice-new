``<template>
  <section id="kbli" class="py-16 lg:py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12 lg:mb-16">
        <div class="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-full text-sm sm:text-base font-semibold mb-4 sm:mb-6 shadow-lg">
          <span class="mr-2 sm:mr-3">📋</span>
          Klasifikasi Baku Lapangan Usaha Indonesia
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
          Tabel <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">KBLI 2020</span> Lengkap
      </h2>
        <p class="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
          Klasifikasi rujukan untuk mengklasifikasikan aktivitas ekonomi Indonesia ke dalam lapangan usaha berdasarkan jenis kegiatan ekonomi.
        </p>
      </div>

      <!-- Search & Filter Section -->
      <div class="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 shadow-lg">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <!-- Search Input -->
          <div class="lg:col-span-2">
            <label class="block text-sm sm:text-base font-semibold text-gray-700 mb-2">Cari KBLI</label>
            <div class="relative">
        <input
                v-model="searchQuery"
          type="text"
                placeholder="Cari berdasarkan kode, nama, atau deskripsi KBLI..."
                class="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-lg sm:rounded-xl text-sm sm:text-base focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                @input="handleSearch"
              />
              <span class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">🔍</span>
            </div>
          </div>

          <!-- Category Filter -->
          <div>
            <label class="block text-sm sm:text-base font-semibold text-gray-700 mb-2">Kategori</label>
            <select 
              v-model="selectedCategory"
              @change="handleCategoryChange"
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl text-sm sm:text-base focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
            >
              <option value="">Semua Kategori</option>
              <option value="A">A - Pertanian, Kehutanan dan Perikanan</option>
              <option value="B">B - Pertambangan dan Penggalian</option>
              <option value="C">C - Industri Pengolahan</option>
              <option value="D">D - Pengadaan Listrik, Gas, Uap/Air Panas dan Udara Dingin</option>
              <option value="E">E - Pengadaan Air, Pengelolaan Sampah, Limbah dan Daur Ulang</option>
              <option value="F">F - Konstruksi</option>
              <option value="G">G - Perdagangan Besar dan Eceran; Reparasi Mobil dan Sepeda Motor</option>
              <option value="H">H - Pengangkutan dan Pergudangan</option>
              <option value="I">I - Penyediaan Akomodasi dan Makan Minum</option>
              <option value="J">J - Informasi dan Komunikasi</option>
              <option value="K">K - Jasa Keuangan dan Asuransi</option>
              <option value="L">L - Real Estate</option>
              <option value="M">M - Jasa Profesional, Ilmiah dan Teknis</option>
              <option value="N">N - Jasa Persewaan dan Pemanfaatan Barang Tak Berwujud</option>
              <option value="O">O - Administrasi Pemerintahan, Pertahanan dan Jaminan Sosial Wajib</option>
              <option value="P">P - Jasa Pendidikan</option>
              <option value="Q">Q - Jasa Kesehatan dan Kegiatan Sosial</option>
              <option value="R">R - Kesenian, Hiburan dan Rekreasi</option>
              <option value="S">S - Kegiatan Jasa Lainnya</option>
              <option value="T">T - Jasa Rumah Tangga</option>
              <option value="U">U - Badan Internasional dan Badan Ekstra Internasional Lainnya</option>
            </select>
          </div>
        </div>

        <!-- Quick Stats -->
        <div class="mt-6 pt-6 border-t border-gray-200">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-center space-x-6">
              <div class="text-center">
                <div class="text-2xl sm:text-3xl font-bold text-yellow-600">{{ filteredKbli.length }}</div>
                <div class="text-sm text-gray-600">Total KBLI Ditemukan</div>
              </div>
              <div class="text-center">
                <div class="text-2xl sm:text-3xl font-bold text-green-600">{{ selectedCategory || 'Semua' }}</div>
                <div class="text-sm text-gray-600">Kategori</div>
              </div>
              <div class="text-center">
                <div class="text-2xl sm:text-3xl font-bold text-blue-600">{{ totalKBLICount }}</div>
                <div class="text-sm text-gray-600">Total Database</div>
              </div>
            </div>
            <div class="text-sm text-gray-600">
              💡 Klik pada baris untuk melihat detail lengkap KBLI
            </div>
          </div>
        </div>
      </div>

      <!-- Loading Indicator -->
      <div v-if="isLoading" class="bg-white rounded-xl sm:rounded-2xl shadow-lg p-8 text-center">
        <div class="text-gray-500">
          <i class="fas fa-spinner fa-spin text-4xl mb-4"></i>
          <p class="text-lg">Memuat data KBLI...</p>
        </div>
      </div>

      <!-- KBLI Table -->
      <div v-else class="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black">
              <tr>
                <th class="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base font-bold">No</th>
                <th class="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base font-bold">Kode KBLI</th>
                <th class="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base font-bold">KBLI</th>
                <th class="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base font-bold">Deskripsi</th>
                <th class="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base font-bold">Risiko</th>
                <th class="px-4 sm:px-6 py-3 sm:py-4 text-center text-sm sm:text-base font-bold">Aksi</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
                             <tr 
                 v-for="(item, index) in displayedKbli" 
                 :key="item.code"
                 @click="showDetail(item)"
                 class="hover:bg-yellow-50 cursor-pointer transition-all duration-200 hover:shadow-md"
                 title="Klik untuk melihat detail KBLI {{ item.code }}"
               >
                <td class="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-900 font-medium">
                  {{ (currentPage - 1) * itemsPerPage + index + 1 }}
                </td>
                <td class="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-blue-600 font-bold">
                  {{ item.code }}
                </td>
                <td class="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-900 font-semibold">
                  {{ item.title }}
                </td>
                <td class="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-700">
                  {{ truncateDescription(item.description, 100) }}
                </td>
                <td class="px-4 sm:px-6 py-3 sm:py-4">
                  <span 
                    :class="getRiskBadgeClass(getRiskLevel(item.code))"
                    class="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold"
                  >
                    {{ getRiskLevel(item.code) }}
                  </span>
                </td>
                <td class="px-4 sm:px-6 py-3 sm:py-4 text-center">
                  <button 
                    @click.stop="showDetail(item)"
                    class="inline-flex items-center px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors duration-200"
                    title="Lihat detail KBLI {{ item.code }}"
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
            Lihat Selanjutnya ({{ paginatedKbli.length - currentViewCount }} item lagi)
          </button>
        </div>

                 <!-- Pagination - Only show when no search query -->
         <div v-if="!searchQuery.trim()" class="bg-gray-50 px-4 sm:px-6 py-4 sm:py-6 border-t border-gray-200">
           <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
             <div class="text-sm text-gray-600">
               Menampilkan {{ (currentPage - 1) * itemsPerPage + 1 }} - {{ Math.min(currentPage * itemsPerPage, filteredKbli.length) }} dari {{ filteredKbli.length }} KBLI
               <br>
               <span class="text-xs text-gray-500">Random 24 item dari {{ totalKBLICount }} total KBLI</span>
             </div>
             <div class="flex items-center space-x-2">
               <button 
                 @click="prevPage"
                 :disabled="currentPage === 1"
                 class="px-3 py-2 text-sm border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors duration-200"
               >
                 ← Sebelumnya
               </button>
               <span class="px-3 py-2 text-sm text-gray-700">
                 Halaman {{ currentPage }} dari {{ totalPages }}
               </span>
               <button 
                 @click="nextPage"
                 :disabled="currentPage === totalPages"
                 class="px-3 py-2 text-sm border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors duration-200"
               >
                 Selanjutnya →
               </button>
             </div>
           </div>
         </div>

         <!-- Search Results Info - Only show when there's a search query -->
         <div v-if="searchQuery.trim()" class="bg-blue-50 px-4 sm:px-6 py-4 sm:py-6 border-t border-blue-200">
           <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
             <div class="text-sm text-blue-700">
               <span class="font-semibold">{{ filteredKbli.length }}</span> hasil ditemukan untuk pencarian "<span class="font-semibold">{{ searchQuery }}</span>"
               <br>
               <span class="text-xs text-blue-600">Dari {{ totalKBLICount }} total KBLI database</span>
             </div>
             <button 
               @click="searchQuery = ''; currentPage = 1; currentViewCount = itemsPerView"
               class="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
             >
               Hapus Pencarian
             </button>
           </div>
         </div>
      </div>

      <!-- Info Section -->
      <div class="mt-8 text-center">
        <div class="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-black shadow-xl">
          <h3 class="text-xl sm:text-2xl font-bold mb-4">
            ⚠️ Penting untuk Diperhatikan
          </h3>
          <p class="text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
            Dengan berlakunya OSS RBA, pelaku usaha jasa pembuatan PT wajib menggunakan KBLI tahun 2020. 
            Pastikan memilih KBLI yang sesuai dengan kegiatan usaha Anda untuk menghindari masalah di kemudian hari.
          </p>
        </div>
      </div>
    </div>

    <!-- Detail Modal -->
    <div 
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      @click="closeModal"
    >
      <div 
        class="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[95vh] overflow-hidden transform transition-all duration-300 scale-100"
        @click.stop
      >
        <!-- Modal Header -->
        <div class="bg-gradient-to-r from-yellow-400 to-yellow-600 px-6 py-4 flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <span class="text-white text-xl font-bold">📋</span>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">Detail KBLI</h3>
              <p class="text-yellow-100 text-sm">Klasifikasi Baku Lapangan Usaha Indonesia</p>
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
            <!-- Kode KBLI & Status -->
            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div class="text-sm text-blue-600 font-medium mb-1">Kode KBLI</div>
                  <div class="text-3xl font-bold text-blue-700">{{ selectedItem.code }}</div>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="text-right">
                    <div class="text-sm text-gray-600 font-medium mb-1">Kategori Risiko</div>
                    <span 
                      :class="getRiskBadgeClass(getRiskLevel(selectedItem.code))"
                      class="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold shadow-sm"
                    >
                      {{ getRiskLevel(selectedItem.code) }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- URAIAN -->
            <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div class="flex items-center mb-5">
                <div class="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
                  <span class="text-yellow-600 text-xl">📝</span>
                </div>
                <div>
                  <h4 class="text-xl font-bold text-gray-900">URAIAN</h4>
                  <p class="text-sm text-gray-500 mt-1">Nama dan klasifikasi kegiatan usaha</p>
                </div>
              </div>
              <div class="ml-14">
                <div class="text-gray-800 leading-relaxed text-lg font-medium">
                  {{ selectedItem.title }}
                </div>
              </div>
            </div>

            <!-- RUANG LINGKUP -->
            <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div class="flex items-center mb-5">
                <div class="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <span class="text-green-600 text-xl">🎯</span>
                </div>
                <div>
                  <h4 class="text-xl font-bold text-gray-900">RUANG LINGKUP</h4>
                  <p class="text-sm text-gray-500 mt-1">Detail kegiatan yang tercakup dalam KBLI ini</p>
                </div>
              </div>
              <div class="ml-14">
                <div class="text-gray-700 leading-relaxed text-base space-y-3">
                  <p class="mb-4">
                    {{ selectedItem.description || 'Ruang lingkup kegiatan usaha sesuai dengan klasifikasi KBLI yang ditetapkan oleh Badan Pusat Statistik (BPS).' }}
                  </p>
                  
                  <div class="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                    <div class="flex items-start">
                      <div class="flex-shrink-0">
                        <span class="text-green-500 text-lg">💡</span>
                      </div>
                      <div class="ml-3">
                        <p class="text-sm text-green-800 font-medium">
                          Pastikan kegiatan usaha Anda sesuai dengan ruang lingkup yang tercantum di atas untuk menghindari kesalahan klasifikasi.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- PB UMKU -->
            <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div class="flex items-center mb-5">
                <div class="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <span class="text-purple-600 text-xl">📋</span>
                </div>
                <div>
                  <h4 class="text-xl font-bold text-gray-900">PB UMKU</h4>
                  <p class="text-sm text-gray-500 mt-1">Perizinan Berusaha untuk Usaha Mikro, Kecil, dan Menengah</p>
                </div>
              </div>
              <div class="ml-14">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div class="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-5 shadow-sm">
                    <div class="flex items-center mb-3">
                      <div class="w-8 h-8 bg-green-200 rounded-lg flex items-center justify-center mr-3">
                        <span class="text-green-600 text-sm">📄</span>
                      </div>
                      <div class="text-sm text-green-600 font-semibold">Perizinan Berusaha</div>
                    </div>
                    <div class="text-green-800 font-bold text-lg">NIB</div>
                    <div class="text-green-700 text-sm mt-1">Nomor Induk Berusaha</div>
                    <div class="text-xs text-green-600 mt-2">Wajib untuk semua jenis usaha</div>
                  </div>
                  
                  <div class="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-5 shadow-sm">
                    <div class="flex items-center mb-3">
                      <div class="w-8 h-8 bg-blue-200 rounded-lg flex items-center justify-center mr-3">
                        <span class="text-blue-600 text-sm">🏢</span>
                      </div>
                      <div class="text-sm text-blue-600 font-semibold">Kategori Usaha</div>
                    </div>
                    <div class="text-blue-800 font-bold text-lg">UMKM</div>
                    <div class="text-blue-700 text-sm mt-1">Mikro, Kecil, Menengah</div>
                    <div class="text-xs text-blue-600 mt-2">Sesuai dengan kriteria BPS</div>
                  </div>
                </div>
                
                <div class="mt-5 bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
                  <div class="flex items-start">
                    <div class="flex-shrink-0">
                      <span class="text-purple-500 text-lg">ℹ️</span>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm text-purple-800">
                        <span class="font-semibold">Catatan:</span> 
                        Perizinan berusaha dapat dilakukan melalui sistem OSS (Online Single Submission) 
                        yang terintegrasi dengan berbagai instansi terkait.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- SEBELUMNYA -->
            <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div class="flex items-center mb-5">
                <div class="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                  <span class="text-orange-600 text-xl">📚</span>
                </div>
                <div>
                  <h4 class="text-xl font-bold text-gray-900">SEBELUMNYA</h4>
                  <p class="text-sm text-gray-500 mt-1">Informasi versi KBLI sebelumnya</p>
                </div>
              </div>
              <div class="ml-14">
                <div class="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-5">
                  <div class="flex items-start space-x-4">
                    <div class="flex-shrink-0">
                      <div class="w-12 h-12 bg-orange-200 rounded-xl flex items-center justify-center">
                        <span class="text-orange-600 text-lg font-bold">2015</span>
                      </div>
                    </div>
                    <div class="flex-1">
                      <div class="text-orange-800 font-bold text-lg mb-2">KBLI 2015</div>
                      <div class="text-orange-700 leading-relaxed space-y-2">
                        <p>
                          Kode KBLI ini merupakan bagian dari <span class="font-semibold">KBLI 2020</span> 
                          yang menggantikan KBLI 2015.
                        </p>
                        <p>
                          <span class="font-semibold">Penting:</span> 
                          Pastikan menggunakan kode yang sesuai dengan peraturan terbaru 
                          untuk pendirian perusahaan dan perizinan berusaha.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- DETAIL INFORMASI KBLI -->
            <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div class="flex items-center mb-5">
                <div class="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center mr-4">
                  <span class="text-indigo-600 text-xl">📊</span>
                </div>
                <div>
                  <h4 class="text-xl font-bold text-gray-900">DETAIL INFORMASI KBLI</h4>
                  <p class="text-sm text-gray-500 mt-1">Informasi lengkap dan rincian kegiatan usaha</p>
                </div>
              </div>
              <div class="ml-14">
                <div class="overflow-x-auto">
                  <table class="w-full border-collapse">
                    <tbody class="divide-y divide-gray-200">
                      <!-- Modal Dasar -->
                      <tr class="hover:bg-gray-50">
                        <td class="py-4 px-4 font-semibold text-gray-700 w-1/3 bg-gray-50">
                          <div class="flex items-center">
                            <span class="text-green-600 mr-2">💰</span>
                            Modal Dasar Minimum
                          </div>
                        </td>
                        <td class="py-4 px-4 text-gray-800">
                          <div class="space-y-3">
                            <div class="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg p-4">
                              <div class="flex items-center justify-between">
                                <div>
                                  <div class="font-bold text-2xl text-green-700">Rp 50.000.000</div>
                                  <div class="text-sm text-green-600 mt-1">Modal dasar minimum untuk PT</div>
                                </div>
                                <div class="text-right">
                                  <div class="text-xs text-green-500">UU No. 40/2007</div>
                                  <div class="text-xs text-green-500">Pasal 32</div>
                                </div>
                              </div>
                            </div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                              <div class="flex items-center">
                                <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                <span class="text-gray-600">Modal ditempatkan: Rp 12.500.000</span>
                              </div>
                              <div class="flex items-center">
                                <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                <span class="text-gray-600">Modal disetor: Rp 12.500.000</span>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <!-- Kategori Usaha -->
                      <tr class="hover:bg-gray-50">
                        <td class="py-4 px-4 font-semibold text-gray-700 bg-gray-50">
                          <div class="flex items-center">
                            <span class="text-blue-600 mr-2">🏢</span>
                            Kategori Usaha
                          </div>
                        </td>
                        <td class="py-4 px-4 text-gray-800">
                          <div class="space-y-4">
                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                              <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
                                <div class="text-blue-600 font-bold text-sm mb-1">Mikro</div>
                                <div class="text-xs text-blue-500">Asset ≤ Rp 50 juta</div>
                                <div class="text-xs text-blue-500">Omzet ≤ Rp 300 juta</div>
                              </div>
                              <div class="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                                <div class="text-green-600 font-bold text-sm mb-1">Kecil</div>
                                <div class="text-xs text-green-500">Asset ≤ Rp 500 juta</div>
                                <div class="text-xs text-green-500">Omzet ≤ Rp 2,5 miliar</div>
                              </div>
                              <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-center">
                                <div class="text-yellow-600 font-bold text-sm mb-1">Menengah</div>
                                <div class="text-xs text-yellow-500">Asset ≤ Rp 10 miliar</div>
                                <div class="text-xs text-yellow-500">Omzet ≤ Rp 50 miliar</div>
                              </div>
                              <div class="bg-purple-50 border border-purple-200 rounded-lg p-3 text-center">
                                <div class="text-purple-600 font-bold text-sm mb-1">Besar</div>
                                <div class="text-xs text-purple-500">Asset > Rp 10 miliar</div>
                                <div class="text-xs text-purple-500">Omzet > Rp 50 miliar</div>
                              </div>
                            </div>
                            <div class="bg-gray-50 border-l-4 border-gray-400 p-3 rounded-r-lg">
                              <div class="text-xs text-gray-600">
                                <span class="font-semibold">Sumber:</span> UU No. 20 Tahun 2008 tentang Usaha Mikro, Kecil, dan Menengah
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <!-- Jenis Perizinan -->
                      <tr class="hover:bg-gray-50">
                        <td class="py-4 px-4 font-semibold text-gray-700 bg-gray-50">
                          <div class="flex items-center">
                            <span class="text-purple-600 mr-2">📋</span>
                            Jenis Perizinan
                          </div>
                        </td>
                        <td class="py-4 px-4 text-gray-800">
                          <div class="space-y-4">
                            <!-- NIB -->
                            <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                              <div class="flex items-start justify-between">
                                <div class="flex items-center">
                                  <div class="w-8 h-8 bg-green-200 rounded-lg flex items-center justify-center mr-3">
                                    <span class="text-green-600 text-sm">📄</span>
                                  </div>
                                  <div>
                                    <div class="font-bold text-green-800">NIB (Nomor Induk Berusaha)</div>
                                    <div class="text-sm text-green-600">Wajib untuk semua jenis usaha</div>
                                  </div>
                                </div>
                                <div class="text-right">
                                  <div class="text-xs text-green-500 bg-green-100 px-2 py-1 rounded">WAJIB</div>
                                </div>
                              </div>
                              <div class="mt-3 text-xs text-green-700">
                                • Dikeluarkan melalui sistem OSS RBA<br>
                                • Berlaku seumur hidup<br>
                                • Gratis biaya perizinan
                              </div>
                            </div>

                            <!-- Izin Usaha -->
                            <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                              <div class="flex items-start justify-between">
                                <div class="flex items-center">
                                  <div class="w-8 h-8 bg-blue-200 rounded-lg flex items-center justify-center mr-3">
                                    <span class="text-blue-600 text-sm">🏪</span>
                                  </div>
                                  <div>
                                    <div class="font-bold text-blue-800">Izin Usaha</div>
                                    <div class="text-sm text-blue-600">Tergantung jenis kegiatan usaha</div>
                                  </div>
                                </div>
                                <div class="text-right">
                                  <div class="text-xs text-blue-500 bg-blue-100 px-2 py-1 rounded">KONDISIONAL</div>
                                </div>
                              </div>
                              <div class="mt-3 text-xs text-blue-700">
                                • Izin Usaha Perdagangan (SIUP)<br>
                                • Izin Usaha Industri (IUI)<br>
                                • Izin Usaha Jasa (IUJ)
                              </div>
                            </div>

                            <!-- Izin Lokasi -->
                            <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                              <div class="flex items-start justify-between">
                                <div class="flex items-center">
                                  <div class="w-8 h-8 bg-yellow-200 rounded-lg flex items-center justify-center mr-3">
                                    <span class="text-yellow-600 text-sm">📍</span>
                                  </div>
                                  <div>
                                    <div class="font-bold text-yellow-800">Izin Lokasi</div>
                                    <div class="text-sm text-yellow-600">Untuk usaha yang memerlukan lokasi khusus</div>
                                  </div>
                                </div>
                                <div class="text-right">
                                  <div class="text-xs text-yellow-500 bg-yellow-100 px-2 py-1 rounded">KONDISIONAL</div>
                                </div>
                              </div>
                              <div class="mt-3 text-xs text-yellow-700">
                                • Izin Mendirikan Bangunan (IMB)<br>
                                • Izin Gangguan (HO)<br>
                                • Izin Lokasi dari Pemerintah Daerah
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <!-- Rincian Kegiatan -->
                      <tr class="hover:bg-gray-50">
                        <td class="py-4 px-4 font-semibold text-gray-700 bg-gray-50">
                          <div class="flex items-center">
                            <span class="text-orange-600 mr-2">🔍</span>
                            Rincian Kegiatan
                          </div>
                        </td>
                        <td class="py-4 px-4 text-gray-800">
                          <div class="space-y-4">
                            <!-- Kegiatan Utama -->
                            <div class="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-4">
                              <div class="flex items-center mb-3">
                                <div class="w-8 h-8 bg-orange-200 rounded-lg flex items-center justify-center mr-3">
                                  <span class="text-orange-600 text-sm">🎯</span>
                                </div>
                                <div>
                                  <div class="font-bold text-orange-800">Kegiatan Utama</div>
                                  <div class="text-sm text-orange-600">Kegiatan inti sesuai KBLI</div>
                                </div>
                              </div>
                              <div class="text-orange-700 text-sm leading-relaxed bg-white bg-opacity-50 p-3 rounded-lg">
                                {{ selectedItem.description || 'Kegiatan usaha sesuai dengan klasifikasi KBLI yang ditetapkan oleh Badan Pusat Statistik (BPS).' }}
                              </div>
                            </div>

                            <!-- Kegiatan Pendukung -->
                            <div class="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-4">
                              <div class="flex items-center mb-3">
                                <div class="w-8 h-8 bg-blue-200 rounded-lg flex items-center justify-center mr-3">
                                  <span class="text-blue-600 text-sm">⚙️</span>
                                </div>
                                <div>
                                  <div class="font-bold text-blue-800">Kegiatan Pendukung</div>
                                  <div class="text-sm text-blue-600">Kegiatan yang mendukung operasional</div>
                                </div>
                              </div>
                              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                <div class="bg-white bg-opacity-50 p-3 rounded-lg">
                                  <div class="font-semibold text-blue-800 mb-1">📊 Administrasi</div>
                                  <div class="text-blue-700 text-xs">Pencatatan, pelaporan, dan administrasi umum</div>
                                </div>
                                <div class="bg-white bg-opacity-50 p-3 rounded-lg">
                                  <div class="font-semibold text-blue-800 mb-1">📈 Pemasaran</div>
                                  <div class="text-blue-700 text-xs">Promosi, penjualan, dan layanan pelanggan</div>
                                </div>
                                <div class="bg-white bg-opacity-50 p-3 rounded-lg">
                                  <div class="font-semibold text-blue-800 mb-1">🔧 Operasional</div>
                                  <div class="text-blue-700 text-xs">Pengelolaan aset, logistik, dan maintenance</div>
                                </div>
                                <div class="bg-white bg-opacity-50 p-3 rounded-lg">
                                  <div class="font-semibold text-blue-800 mb-1">💼 Manajemen</div>
                                  <div class="text-blue-700 text-xs">Perencanaan, pengawasan, dan pengembangan</div>
                                </div>
                              </div>
                            </div>

                            <!-- Kegiatan Terkait -->
                            <div class="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg p-4">
                              <div class="flex items-center mb-3">
                                <div class="w-8 h-8 bg-green-200 rounded-lg flex items-center justify-center mr-3">
                                  <span class="text-green-600 text-sm">🔗</span>
                                </div>
                                <div>
                                  <div class="font-bold text-green-800">Kegiatan Terkait</div>
                                  <div class="text-sm text-green-600">Kegiatan yang berhubungan dengan KBLI ini</div>
                                </div>
                              </div>
                              <div class="text-green-700 text-sm leading-relaxed bg-white bg-opacity-50 p-3 rounded-lg">
                                Kegiatan yang secara langsung atau tidak langsung mendukung kegiatan utama, 
                                termasuk kegiatan distribusi, penyimpanan, dan layanan purna jual yang terkait 
                                dengan produk atau jasa yang dihasilkan.
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <!-- Sektor Ekonomi -->
                      <tr class="hover:bg-gray-50">
                        <td class="py-4 px-4 font-semibold text-gray-700 bg-gray-50">
                          <div class="flex items-center">
                            <span class="text-red-600 mr-2">🏭</span>
                            Sektor Ekonomi
                          </div>
                        </td>
                        <td class="py-4 px-4 text-gray-800">
                          <div class="space-y-4">
                            <!-- Kategori Sektor -->
                            <div class="bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-lg p-4">
                              <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                  <div class="w-12 h-12 bg-red-200 rounded-xl flex items-center justify-center mr-4">
                                    <span class="text-red-600 text-xl font-bold">{{ getCategoryFromCode(selectedItem.code) }}</span>
                                  </div>
                                  <div>
                                    <div class="font-bold text-red-800 text-lg">{{ getSectorName(getCategoryFromCode(selectedItem.code)) }}</div>
                                    <div class="text-sm text-red-600">Klasifikasi sektor ekonomi utama</div>
                                  </div>
                                </div>
                                <div class="text-right">
                                  <div class="text-xs text-red-500 bg-red-100 px-2 py-1 rounded">KBLI 2020</div>
                                </div>
                              </div>
                            </div>

                            <!-- Sub Sektor -->
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              <div class="bg-white border border-gray-200 rounded-lg p-3">
                                <div class="flex items-center mb-2">
                                  <span class="text-blue-500 mr-2">📊</span>
                                  <div class="font-semibold text-gray-800 text-sm">Kode KBLI</div>
                                </div>
                                <div class="text-gray-600 text-sm">{{ selectedItem.code }}</div>
                              </div>
                              <div class="bg-white border border-gray-200 rounded-lg p-3">
                                <div class="flex items-center mb-2">
                                  <span class="text-green-500 mr-2">🏷️</span>
                                  <div class="font-semibold text-gray-800 text-sm">Kategori</div>
                                </div>
                                <div class="text-gray-600 text-sm">{{ getCategoryFromCode(selectedItem.code) }}</div>
                              </div>
                            </div>

                            <!-- Informasi Sektor -->
                            <div class="bg-gray-50 border-l-4 border-gray-400 p-3 rounded-r-lg">
                              <div class="text-xs text-gray-600">
                                <span class="font-semibold">Informasi:</span> 
                                Sektor ekonomi ini diklasifikasikan berdasarkan International Standard Industrial Classification (ISIC) 
                                dan disesuaikan dengan kondisi ekonomi Indonesia.
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <!-- Tingkat Risiko -->
                      <tr class="hover:bg-gray-50">
                        <td class="py-4 px-4 font-semibold text-gray-700 bg-gray-50">
                          <div class="flex items-center">
                            <span class="text-yellow-600 mr-2">⚠️</span>
                            Tingkat Risiko
                          </div>
                        </td>
                        <td class="py-4 px-4 text-gray-800">
                          <div class="space-y-4">
                            <!-- Badge Risiko -->
                            <div class="flex items-center justify-between">
                              <div class="flex items-center space-x-4">
                                <span 
                                  :class="getRiskBadgeClass(getRiskLevel(selectedItem.code))"
                                  class="px-6 py-3 rounded-xl text-lg font-bold shadow-lg"
                                >
                                  {{ getRiskLevel(selectedItem.code) }}
                                </span>
                                <div>
                                  <div class="font-semibold text-gray-800">{{ getRiskDescription(getRiskLevel(selectedItem.code)) }}</div>
                                  <div class="text-sm text-gray-600">Berdasarkan klasifikasi KBLI 2020</div>
                                </div>
                              </div>
                            </div>

                            <!-- Detail Risiko -->
                            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                              <div class="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                                <div class="text-green-600 font-bold text-sm mb-1">🟢 Rendah</div>
                                <div class="text-xs text-green-600">Perizinan mudah, risiko minimal</div>
                              </div>
                              <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-center">
                                <div class="text-yellow-600 font-bold text-sm mb-1">🟡 Sedang</div>
                                <div class="text-xs text-yellow-600">Perizinan tambahan diperlukan</div>
                              </div>
                              <div class="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
                                <div class="text-red-600 font-bold text-sm mb-1">🔴 Tinggi</div>
                                <div class="text-xs text-red-600">Perizinan khusus & pengawasan ketat</div>
                              </div>
                            </div>

                            <!-- Faktor Risiko -->
                            <div class="bg-gray-50 border-l-4 border-gray-400 p-3 rounded-r-lg">
                              <div class="text-xs text-gray-600">
                                <span class="font-semibold">Faktor Risiko:</span> 
                                Dampak lingkungan, keamanan publik, kesehatan masyarakat, dan stabilitas ekonomi.
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <!-- Persyaratan Khusus -->
                      <tr class="hover:bg-gray-50">
                        <td class="py-4 px-4 font-semibold text-gray-700 bg-gray-50">
                          <div class="flex items-center">
                            <span class="text-indigo-600 mr-2">📝</span>
                            Persyaratan Khusus
                          </div>
                        </td>
                        <td class="py-4 px-4 text-gray-800">
                          <div class="space-y-4">
                            <!-- Sertifikat Kompetensi -->
                            <div class="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                              <div class="flex items-start">
                                <div class="w-8 h-8 bg-indigo-200 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                                  <span class="text-indigo-600 text-sm">🎓</span>
                                </div>
                                <div class="flex-1">
                                  <div class="font-bold text-indigo-800 mb-1">Sertifikat Kompetensi</div>
                                  <div class="text-sm text-indigo-600 mb-2">Jika diperlukan sesuai regulasi</div>
                                  <div class="text-xs text-indigo-700 space-y-1">
                                    • Sertifikat keahlian dari lembaga terakreditasi<br>
                                    • Sertifikat profesi dari asosiasi terkait<br>
                                    • Lisensi operasional dari instansi berwenang
                                  </div>
                                </div>
                              </div>
                            </div>

                            <!-- Izin Teknis -->
                            <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                              <div class="flex items-start">
                                <div class="w-8 h-8 bg-blue-200 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                                  <span class="text-blue-600 text-sm">🔧</span>
                                </div>
                                <div class="flex-1">
                                  <div class="font-bold text-blue-800 mb-1">Izin Teknis</div>
                                  <div class="text-sm text-blue-600 mb-2">Dari instansi terkait jika diperlukan</div>
                                  <div class="text-xs text-blue-700 space-y-1">
                                    • Izin dari Kementerian terkait<br>
                                    • Izin dari Pemerintah Daerah<br>
                                    • Izin dari Badan Usaha Milik Negara (BUMN)
                                  </div>
                                </div>
                              </div>
                            </div>

                            <!-- Standar Operasional -->
                            <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                              <div class="flex items-start">
                                <div class="w-8 h-8 bg-green-200 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                                  <span class="text-green-600 text-sm">📋</span>
                                </div>
                                <div class="flex-1">
                                  <div class="font-bold text-green-800 mb-1">Standar Operasional</div>
                                  <div class="text-sm text-green-600 mb-2">Sesuai dengan standar industri</div>
                                  <div class="text-xs text-green-700 space-y-1">
                                    • Standar Nasional Indonesia (SNI)<br>
                                    • Standar Internasional (ISO)<br>
                                    • Standar Khusus Industri
                                  </div>
                                </div>
                              </div>
                            </div>

                            <!-- Persyaratan Tambahan -->
                            <div class="bg-gray-50 border border-gray-200 rounded-lg p-4">
                              <div class="flex items-start">
                                <div class="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                                  <span class="text-gray-600 text-sm">➕</span>
                                </div>
                                <div class="flex-1">
                                  <div class="font-bold text-gray-800 mb-1">Persyaratan Tambahan</div>
                                  <div class="text-sm text-gray-600 mb-2">Tergantung jenis dan skala usaha</div>
                                  <div class="text-xs text-gray-700 space-y-1">
                                    • Asuransi pertanggungjawaban<br>
                                    • Audit keuangan berkala<br>
                                    • Laporan operasional rutin
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <!-- Regulasi Terkait -->
                      <tr class="hover:bg-gray-50">
                        <td class="py-4 px-4 font-semibold text-gray-700 bg-gray-50">
                          <div class="flex items-center">
                            <span class="text-gray-600 mr-2">📚</span>
                            Regulasi Terkait
                          </div>
                        </td>
                        <td class="py-4 px-4 text-gray-800">
                          <div class="space-y-4">
                            <!-- Regulasi Utama -->
                            <div class="bg-gray-50 border border-gray-200 rounded-lg p-4">
                              <div class="flex items-center mb-3">
                                <div class="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center mr-3">
                                  <span class="text-gray-600 text-sm">⚖️</span>
                                </div>
                                <div>
                                  <div class="font-bold text-gray-800">Regulasi Utama</div>
                                  <div class="text-sm text-gray-600">Dasar hukum pendirian dan operasional</div>
                                </div>
                              </div>
                              <div class="space-y-3">
                                <div class="bg-white border border-gray-200 rounded-lg p-3">
                                  <div class="flex items-start">
                                    <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                      <span class="text-blue-600 text-xs font-bold">1</span>
                                    </div>
                                    <div>
                                      <div class="font-semibold text-gray-800 text-sm">UU No. 40 Tahun 2007</div>
                                      <div class="text-xs text-gray-600">Tentang Perseroan Terbatas</div>
                                      <div class="text-xs text-gray-500 mt-1">Mengatur pendirian, pengelolaan, dan pembubaran PT</div>
                                    </div>
                                  </div>
                                </div>
                                <div class="bg-white border border-gray-200 rounded-lg p-3">
                                  <div class="flex items-start">
                                    <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                      <span class="text-green-600 text-xs font-bold">2</span>
                                    </div>
                                    <div>
                                      <div class="font-semibold text-gray-800 text-sm">PP No. 8 Tahun 2021</div>
                                      <div class="text-xs text-gray-600">Tentang Perizinan Berusaha</div>
                                      <div class="text-xs text-gray-500 mt-1">Mengatur sistem perizinan berusaha terintegrasi</div>
                                    </div>
                                  </div>
                                </div>
                                <div class="bg-white border border-gray-200 rounded-lg p-3">
                                  <div class="flex items-start">
                                    <div class="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                      <span class="text-purple-600 text-xs font-bold">3</span>
                                    </div>
                                    <div>
                                      <div class="font-semibold text-gray-800 text-sm">Peraturan BPS No. 19 Tahun 2017</div>
                                      <div class="text-xs text-gray-600">Tentang KBLI 2020</div>
                                      <div class="text-xs text-gray-500 mt-1">Klasifikasi baku lapangan usaha Indonesia</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <!-- Regulasi Pendukung -->
                            <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                              <div class="flex items-center mb-3">
                                <div class="w-8 h-8 bg-blue-200 rounded-lg flex items-center justify-center mr-3">
                                  <span class="text-blue-600 text-sm">📋</span>
                                </div>
                                <div>
                                  <div class="font-bold text-blue-800">Regulasi Pendukung</div>
                                  <div class="text-sm text-blue-600">Peraturan terkait operasional usaha</div>
                                </div>
                              </div>
                              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                                <div class="bg-white bg-opacity-50 p-2 rounded">
                                  <div class="font-semibold text-blue-800">UU No. 20 Tahun 2008</div>
                                  <div class="text-blue-600">Tentang UMKM</div>
                                </div>
                                <div class="bg-white bg-opacity-50 p-2 rounded">
                                  <div class="font-semibold text-blue-800">UU No. 7 Tahun 2014</div>
                                  <div class="text-blue-600">Tentang Perdagangan</div>
                                </div>
                                <div class="bg-white bg-opacity-50 p-2 rounded">
                                  <div class="font-semibold text-blue-800">UU No. 3 Tahun 2014</div>
                                  <div class="text-blue-600">Tentang Perindustrian</div>
                                </div>
                                <div class="bg-white bg-opacity-50 p-2 rounded">
                                  <div class="font-semibold text-blue-800">UU No. 13 Tahun 2003</div>
                                  <div class="text-blue-600">Tentang Ketenagakerjaan</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- Informasi Tambahan -->
            <div class="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
              <div class="flex items-center mb-5">
                <div class="w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center mr-4">
                  <span class="text-gray-600 text-xl">ℹ️</span>
                </div>
                <div>
                  <h4 class="text-xl font-bold text-gray-900">Informasi Penting</h4>
                  <p class="text-sm text-gray-500 mt-1">Hal-hal yang perlu diperhatikan</p>
                </div>
              </div>
              <div class="ml-14">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div class="bg-white border border-yellow-200 rounded-xl p-5 shadow-sm">
                    <div class="flex items-start space-x-3">
                      <div class="flex-shrink-0">
                        <div class="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                          <span class="text-yellow-600 text-lg">⚠️</span>
                        </div>
                      </div>
                      <div>
                        <div class="font-bold text-gray-800 text-lg mb-1">Wajib OSS RBA</div>
                        <div class="text-gray-600 text-sm leading-relaxed">
                          Gunakan KBLI 2020 untuk pendirian PT dan perizinan berusaha melalui sistem OSS.
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="bg-white border border-blue-200 rounded-xl p-5 shadow-sm">
                    <div class="flex items-start space-x-3">
                      <div class="flex-shrink-0">
                        <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span class="text-blue-600 text-lg">📊</span>
                        </div>
                      </div>
                      <div>
                        <div class="font-bold text-gray-800 text-lg mb-1">Data Terbaru</div>
                        <div class="text-gray-600 text-sm leading-relaxed">
                          Update sesuai peraturan Badan Pusat Statistik (BPS) tahun 2020.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="mt-5 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                  <div class="flex items-start">
                    <div class="flex-shrink-0">
                      <span class="text-blue-500 text-lg">💡</span>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm text-blue-800">
                        <span class="font-semibold">Tips:</span> 
                        Konsultasikan dengan ahli jika Anda ragu tentang klasifikasi KBLI yang tepat 
                        untuk kegiatan usaha Anda.
                      </p>
                    </div>
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
            @click="copyKbliInfo"
            data-copy-button
            class="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm flex items-center justify-center space-x-2"
          >
            <span>📋</span>
            <span>Copy Info</span>
          </button>
          <a 
            :href="`https://wa.me/${waPhone}?text=Halo, saya ingin konsultasi tentang KBLI ${selectedItem?.code} - ${selectedItem?.title}`"
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
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';

const waPhone = '0811113666';

// State
const searchQuery = ref('');
const selectedCategory = ref('');
const currentPage = ref(1);
const itemsPerPage = ref(24);
const itemsPerView = ref(12);
const currentViewCount = ref(12);
const showModal = ref(false);
const selectedItem = ref<any>(null);
const kbliData = ref<any[]>([]);
// Helper function to shuffle array
const shuffleArray = (array: any[]) => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Get random 24 items for display - computed to ensure fresh random data
const randomKbliData = computed(() => {
  if (kbliData.value.length === 0) return []
  const shuffled = shuffleArray(kbliData.value)
  return shuffled.slice(0, 24)
})
const isLoading = ref(true);

// Helper function to get category from KBLI code
const getCategoryFromCode = (code: string) => {
  const firstDigit = code.charAt(0);
  const categoryMap: { [key: string]: string } = {
    '0': 'A', '1': 'B', '2': 'C', '3': 'D', '4': 'E',
    '5': 'F', '6': 'G', '7': 'H', '8': 'I', '9': 'J'
  }
  return categoryMap[firstDigit] || 'Lainnya';
};

// Helper function to get risk level from KBLI code
const getRiskLevel = (code: string) => {
  const category = getCategoryFromCode(code);
  if (['A', 'G', 'S'].includes(category)) return 'Rendah';
  if (['B', 'C', 'D', 'F', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R'].includes(category)) return 'Sedang';
  return 'Tinggi';
};

// Helper function to get sector name from category
const getSectorName = (category: string) => {
  const sectorMap: { [key: string]: string } = {
    'A': 'Pertanian, Kehutanan, dan Perikanan',
    'B': 'Pertambangan dan Penggalian',
    'C': 'Industri Pengolahan',
    'D': 'Pengadaan Listrik, Gas, Uap/Air Panas dan Udara Dingin',
    'E': 'Pengadaan Air, Pengelolaan Sampah, Limbah dan Daur Ulang',
    'F': 'Konstruksi',
    'G': 'Perdagangan Besar dan Eceran; Reparasi dan Perawatan Mobil dan Sepeda Motor',
    'H': 'Transportasi dan Pergudangan',
    'I': 'Penyediaan Akomodasi dan Penyediaan Makan Minum',
    'J': 'Informasi dan Komunikasi',
    'K': 'Aktivitas Keuangan dan Asuransi',
    'L': 'Real Estat',
    'M': 'Aktivitas Profesional, Ilmiah dan Teknis',
    'N': 'Aktivitas Penyewaan dan Sewa Guna Usaha Tanpa Hak Opsi, Ketenagakerjaan, Agen Perjalanan dan Penunjang Usaha Lainnya',
    'O': 'Administrasi Pemerintahan, Pertahanan dan Jaminan Sosial Wajib',
    'P': 'Aktivitas Pendidikan',
    'Q': 'Aktivitas Kesehatan Manusia dan Aktivitas Sosial',
    'R': 'Kesenian, Hiburan dan Rekreasi',
    'S': 'Aktivitas Jasa Lainnya',
    'T': 'Aktivitas Rumah Tangga Sebagai Pemberi Kerja; Aktivitas yang Menghasilkan Barang dan Jasa oleh Rumah Tangga yang Digunakan Sendiri untuk Memenuhi Kebutuhan',
    'U': 'Aktivitas Badan Internasional dan Badan Ekstra Internasional Lainnya'
  };
  return sectorMap[category] || 'Lainnya';
};

// Helper function to get risk description
const getRiskDescription = (riskLevel: string) => {
  const riskMap: { [key: string]: string } = {
    'Rendah': 'Usaha dengan risiko rendah, perizinan relatif mudah',
    'Sedang': 'Usaha dengan risiko sedang, memerlukan perizinan tambahan',
    'Tinggi': 'Usaha dengan risiko tinggi, memerlukan perizinan khusus dan pengawasan ketat'
  };
  return riskMap[riskLevel] || 'Tidak diketahui';
};


// Computed Properties
const filteredKbli = computed(() => {
  // If there's a search query, search in ALL data (1888 items)
  // If no search query, use random 24 items
  let sourceData = searchQuery.value.trim() ? kbliData.value : randomKbliData.value;
  let filtered = sourceData;

  // Filter by search query - more comprehensive search
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase().trim();
    filtered = filtered.filter(item => 
      item.code.toLowerCase().includes(query) ||
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  }

  // Filter by category
  if (selectedCategory.value) {
    filtered = filtered.filter(item => getCategoryFromCode(item.code) === selectedCategory.value);
  }

  return filtered;
});

const totalPages = computed(() => {
  // If there's a search query, no pagination needed
  if (searchQuery.value.trim()) {
    return 1;
  }
  return Math.ceil(filteredKbli.value.length / itemsPerPage.value);
});

const paginatedKbli = computed(() => {
  // If there's a search query, don't use pagination - show all results
  if (searchQuery.value.trim()) {
    return filteredKbli.value;
  }
  
  // If no search, use pagination for random 24 items
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredKbli.value.slice(start, end);
});

const displayedKbli = computed(() => {
  // If there's a search query, show all results
  if (searchQuery.value.trim()) {
    return paginatedKbli.value;
  }
  
  // If no search, show limited items with "load more" functionality
  return paginatedKbli.value.slice(0, currentViewCount.value);
});

const hasMoreItems = computed(() => {
  // Only show "load more" when there's no search query
  if (searchQuery.value.trim()) {
    return false;
  }
  return currentViewCount.value < paginatedKbli.value.length;
});

const totalKBLICount = computed(() => kbliData.value.length);

// Methods
const handleSearch = () => {
  currentPage.value = 1;
};

const handleCategoryChange = () => {
  currentPage.value = 1;
};

const truncateDescription = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

const getRiskBadgeClass = (risiko: string) => {
  switch (risiko) {
    case 'Rendah':
      return 'bg-green-100 text-green-800';
    case 'Sedang':
      return 'bg-yellow-100 text-yellow-800';
    case 'Tinggi':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const showDetail = (item: any) => {
  selectedItem.value = item;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  selectedItem.value = null;
};

const copyKbliInfo = async () => {
  if (!selectedItem.value) return;
  
  const info = `KBLI ${selectedItem.value.code} - ${selectedItem.value.title}

URAIAN:
${selectedItem.value.title}

RUANG LINGKUP:
${selectedItem.value.description || 'Ruang lingkup kegiatan usaha sesuai dengan klasifikasi KBLI yang ditetapkan oleh Badan Pusat Statistik (BPS).'}

INFORMASI PENTING:
- Kode KBLI: ${selectedItem.value.code}
- Kategori: ${getCategoryFromCode(selectedItem.value.code)}
- Risiko: ${getRiskLevel(selectedItem.value.code)}
- Status: Aktif (KBLI 2020)

Sumber: Database KBLI RuangOffice
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
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    currentViewCount.value = itemsPerView.value; // Reset view count when changing page
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    currentViewCount.value = itemsPerView.value; // Reset view count when changing page
  }
};

const loadMoreItems = () => {
  currentViewCount.value = Math.min(currentViewCount.value + itemsPerView.value, paginatedKbli.value.length);
};

// Watch for filter changes to reset pagination
watch([searchQuery, selectedCategory], () => {
  currentPage.value = 1;
  // Only reset view count when search is cleared or category changes
  if (!searchQuery.value.trim()) {
    currentViewCount.value = itemsPerView.value;
  }
});

onMounted(async () => {
  try {
    console.log('Loading protected KBLI data in KbliSection...');
    
    // Load data from JSON file directly (fallback to original method)
    const response = await fetch('/kbli.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('KBLI data loaded:', data.length, 'items');
    
    // Check if 72109 exists in loaded data
    const has72109 = data.find(item => item.code === '72109');
    console.log('72109 exists in loaded data:', has72109);
    
    kbliData.value = data;
    
    isLoading.value = false;
    console.log('KBLI Section loaded with', kbliData.value.length, 'protected items');
  } catch (error) {
    console.error('Error loading protected KBLI data:', error);
    isLoading.value = false;
  }
});
</script>

