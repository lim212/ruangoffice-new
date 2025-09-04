<template>
  <div>
    <!-- Header Section -->
    <section class="py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-full text-sm sm:text-base font-semibold mb-4 sm:mb-6 shadow-lg">
          <span class="mr-2 sm:mr-3">📋</span>
          Database KBLI Lengkap
        </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
          Tabel <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">KBLI 2020</span> Indonesia
        </h1>
        <p class="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
          Klasifikasi Baku Lapangan Usaha Indonesia yang digunakan untuk mengklasifikasikan aktivitas ekonomi ke dalam lapangan usaha berdasarkan jenis kegiatan ekonomi.
        </p>
      </div>
    </section>

    <!-- Search & Filter Section -->
    <section class="py-8 lg:py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-yellow-200">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            <!-- Search Input -->
            <div class="lg:col-span-2">
              <label class="block text-sm sm:text-base font-semibold text-gray-700 mb-2">🔍 Cari KBLI</label>
              <div class="relative">
                <input 
                  v-model="searchQuery"
                  type="text"
                  placeholder="Cari berdasarkan kode, nama, atau deskripsi KBLI... (contoh: 46100)"
                  class="w-full px-4 py-3 pl-12 border-2 border-yellow-300 rounded-lg sm:rounded-xl text-sm sm:text-base focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                  @input="handleSearch"
                />
                <span class="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-500 text-lg">🔍</span>
              </div>
            </div>

            <!-- Category Filter -->
          <div>
              <label class="block text-sm sm:text-base font-semibold text-gray-700 mb-2">📂 Kategori</label>
              <select 
                v-model="selectedCategory"
                @change="handleCategoryChange"
                class="w-full px-4 py-3 border-2 border-yellow-300 rounded-lg sm:rounded-xl text-sm sm:text-base focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
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
          <div class="mt-6 pt-6 border-t border-yellow-200">
            <div class="flex flex-wrap items-center justify-between gap-4">
              <div class="flex items-center space-x-6">
                <div class="text-center">
                  <div class="text-2xl sm:text-3xl font-bold text-yellow-600">{{ filteredKbli.length }}</div>
                  <div class="text-sm text-gray-600">Total KBLI</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl sm:text-3xl font-bold text-green-600">{{ selectedCategory || 'Semua' }}</div>
                  <div class="text-sm text-gray-600">Kategori</div>
              </div>
                <div class="text-center">
                  <div class="text-2xl sm:text-3xl font-bold text-blue-600">{{ totalKBLICount }}</div>
                  <div class="text-sm text-gray-600">Database Lengkap</div>
                </div>
              </div>
              <div class="text-sm text-gray-600 bg-yellow-200 px-3 py-2 rounded-lg">
                💡 Klik pada baris untuk melihat detail lengkap KBLI
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Loading Section -->
    <section v-if="isLoading" class="py-8 lg:py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden p-8 text-center">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600 mx-auto mb-4"></div>
          <p class="text-lg text-gray-600">Memuat database KBLI...</p>
        </div>
      </div>
    </section>

    <!-- KBLI Table Section -->
    <section v-else class="py-8 lg:py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black">
                <tr>
                  <th class="px-4 py-3 text-left text-sm sm:text-base font-bold">Kode</th>
                  <th class="px-4 py-3 text-left text-sm sm:text-base font-bold">Nama Usaha</th>
                  <th class="px-4 py-3 text-left text-sm sm:text-base font-bold">Kategori</th>
                  <th class="px-4 py-3 text-left text-sm sm:text-base font-bold">Risiko</th>
                  <th class="px-4 py-3 text-left text-sm sm:text-base font-bold">Aksi</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr 
                  v-for="item in displayedKbli" 
                  :key="item.code"
                  class="hover:bg-yellow-50 transition-colors duration-200 cursor-pointer"
                  @click="showDetail(item)"
                  title="Klik untuk melihat detail KBLI {{ item.code }}"
                >
                  <td class="px-4 py-3">
                    <div class="font-mono font-bold text-yellow-600 text-sm sm:text-base">{{ item.code }}</div>
                  </td>
                  <td class="px-4 py-3">
                    <div class="font-semibold text-gray-900 text-sm sm:text-base">{{ item.title }}</div>
                    <div class="text-gray-600 text-xs sm:text-sm mt-1 line-clamp-2">{{ item.description.substring(0, 100) }}...</div>
                  </td>
                  <td class="px-4 py-3">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium"
                           :class="{
                             'bg-green-100 text-green-800': getCategoryFromCode(item.code) === 'A',
                             'bg-blue-100 text-blue-800': getCategoryFromCode(item.code) === 'B',
                             'bg-purple-100 text-purple-800': getCategoryFromCode(item.code) === 'C',
                             'bg-yellow-100 text-yellow-800': getCategoryFromCode(item.code) === 'D',
                             'bg-red-100 text-red-800': getCategoryFromCode(item.code) === 'E',
                             'bg-indigo-100 text-indigo-800': getCategoryFromCode(item.code) === 'F',
                             'bg-pink-100 text-pink-800': getCategoryFromCode(item.code) === 'G',
                             'bg-gray-100 text-gray-800': getCategoryFromCode(item.code) === 'H'
                           }">
                      {{ getCategoryFromCode(item.code) }}
                    </span>
                  </td>
                  <td class="px-4 py-3">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium"
                           :class="{
                             'bg-green-100 text-green-800': getRiskLevel(item.code) === 'Rendah',
                             'bg-yellow-100 text-yellow-800': getRiskLevel(item.code) === 'Sedang',
                             'bg-red-100 text-red-800': getRiskLevel(item.code) === 'Tinggi'
                           }">
                      {{ getRiskLevel(item.code) }}
                    </span>
                  </td>
                  <td class="px-4 py-3">
                    <button 
                      @click="showDetail(item)"
                      class="inline-flex items-center px-3 py-2 bg-yellow-500 text-black text-xs font-medium rounded-lg hover:bg-yellow-600 transition-colors duration-200"
                    >
                      📋 Detail
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
      </div>
    </section>

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

    <!-- WhatsApp CTA -->
    <section class="py-16 lg:py-20 bg-gradient-to-r from-green-500 to-green-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
          Butuh Bantuan Memilih KBLI?
        </h2>
        <p class="text-lg sm:text-xl lg:text-2xl text-green-100 mb-8 sm:mb-10 max-w-3xl mx-auto">
          Tim ahli kami siap membantu Anda memilih KBLI yang tepat sesuai dengan jenis usaha yang akan dijalankan.
        </p>
        <a 
          :href="`https://wa.me/${waPhone}?text=Halo, saya ingin konsultasi tentang KBLI ${selectedItem?.code} - ${selectedItem?.title}`"
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
import { ref, computed, onMounted } from 'vue';

// Reactive data
const searchQuery = ref('');
const selectedCategory = ref('');
const currentPage = ref(1);
const itemsPerPage = ref(24);
const itemsPerView = ref(12);
const currentViewCount = ref(12);
const showModal = ref(false);
const selectedItem = ref<any>(null);
const waPhone = '0811113666';

// SEO - Commented out to avoid useHead error
// useHead({
//   title: 'Database KBLI 2020 - Klasifikasi Baku Lapangan Usaha Indonesia | RuangOffice',
//   meta: [
//     { name: 'description', content: 'Database lengkap KBLI 2020 dengan 1888 kode klasifikasi. Cari dan temukan kode KBLI yang sesuai dengan usaha Anda. Update terbaru untuk OSS RBA.' },
//     { name: 'keywords', content: 'KBLI 2020, Klasifikasi Baku Lapangan Usaha, Database KBLI, OSS RBA, Kode KBLI, Usaha Indonesia, KBLI Terbaru, Klasifikasi Usaha' },
//     { name: 'robots', content: 'index, follow' },
//     { name: 'googlebot', content: 'index, follow' },
//     { property: 'og:title', content: 'Database KBLI 2020 - RuangOffice' },
//     { property: 'og:description', content: 'Database lengkap KBLI 2020 dengan 1888 kode klasifikasi. Cari dan temukan kode KBLI yang sesuai dengan usaha Anda.' },
//     { property: 'og:type', content: 'website' },
//     { property: 'og:url', content: 'https://ruangoffice.com/kbli' },
//     { property: 'og:image', content: 'https://ruangoffice.com/assets/img/Logo_Ruang Office R.png' },
//     { name: 'twitter:card', content: 'summary_large_image' },
//     { name: 'twitter:title', content: 'Database KBLI 2020 - RuangOffice' },
//     { name: 'twitter:description', content: 'Database lengkap KBLI 2020 dengan 1888 kode klasifikasi. Cari dan temukan kode KBLI yang sesuai dengan usaha Anda.' }
//   ],
//   link: [
//     { rel: 'canonical', href: 'https://ruangoffice.com/kbli' },
//     { rel: 'alternate', hreflang: 'id', href: 'https://ruangoffice.com/kbli' }
//   ],
//   script: [
//     {
//       type: 'application/ld+json',
//       innerHTML: JSON.stringify({
//         "@context": "https://schema.org",
//         "@type": "Dataset",
//         "name": "Database KBLI 2020 - Klasifikasi Baku Lapangan Usaha Indonesia",
//         "description": "Database lengkap KBLI 2020 dengan 1888 kode klasifikasi. Cari dan temukan kode KBLI yang sesuai dengan usaha Anda.",
//         "url": "https://ruangoffice.com/kbli",
//         "keywords": "KBLI 2020, Klasifikasi Baku Lapangan Usaha, Database KBLI, OSS RBA, Kode KBLI, Usaha Indonesia",
//         "provider": {
//           "@type": "Organization",
//           "name": "RuangOffice",
//           "url": "https://ruangoffice.com"
//         },
//         "dateModified": new Date().toISOString(),
//         "license": "https://ruangoffice.com/kbli"
//       })
//     }
//   ]
// })
const kbliData = ref<any[]>([]);
const isLoading = ref(true);

// Helper functions
const getCategoryFromCode = (code: string) => {
  const firstDigit = code.charAt(0);
  const categoryMap: { [key: string]: string } = {
    '0': 'A',
    '1': 'B', 
    '2': 'C',
    '3': 'D',
    '4': 'E',
    '5': 'F',
    '6': 'G',
    '7': 'H',
    '8': 'I',
    '9': 'J'
  }
  return categoryMap[firstDigit] || 'Lainnya';
};

const getRiskLevel = (code: string) => {
  // Simple risk assessment based on category
  const category = getCategoryFromCode(code);
  if (['A', 'G', 'S'].includes(category)) return 'Rendah';
  if (['B', 'C', 'D', 'F', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R'].includes(category)) return 'Sedang';
  return 'Tinggi';
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
  if (kbliData.value.length === 0) return []
  const shuffled = shuffleArray(kbliData.value)
  return shuffled.slice(0, 24)
})

// Computed properties
const filteredKbli = computed(() => {
  // If there's a search query, search in ALL data
  // If no search query, use random 24 items
  let sourceData = searchQuery.value.trim() ? kbliData.value : random24Items.value
  let filtered = sourceData
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase().trim();
    filtered = filtered.filter(item => 
      item.code.toLowerCase().includes(query) ||
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  }
  
  if (selectedCategory.value) {
    filtered = filtered.filter(item => getCategoryFromCode(item.code) === selectedCategory.value);
  }
  
  return filtered;
});

const totalKBLICount = computed(() => kbliData.value.length);

const totalPages = computed(() => {
  // If there's a search query, no pagination needed
  if (searchQuery.value.trim()) {
    return 1
  }
  return Math.ceil(filteredKbli.value.length / itemsPerPage.value)
});

const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage.value);

const endIndex = computed(() => Math.min(startIndex.value + itemsPerPage.value, filteredKbli.value.length));

const paginatedKbli = computed(() => {
  // If there's a search query, don't use pagination - show all results
  if (searchQuery.value.trim()) {
    return filteredKbli.value
  }
  
  // If no search, use pagination for last 24 items
  const start = startIndex.value
  const end = endIndex.value
  return filteredKbli.value.slice(start, end)
});

const displayedKbli = computed(() => {
  // If there's a search query, show all results
  if (searchQuery.value.trim()) {
    return paginatedKbli.value
  }
  
  // If no search, show limited items with "load more" functionality
  return paginatedKbli.value.slice(0, currentViewCount.value)
});

const hasMoreItems = computed(() => {
  // Only show "load more" when there's no search query
  if (searchQuery.value.trim()) {
    return false
  }
  return currentViewCount.value < paginatedKbli.value.length
});

const visiblePages = computed(() => {
  const total = totalPages.value;
  const current = currentPage.value;
  const pages: (number | string)[] = [];
  
  if (total <= 7) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    if (current <= 4) {
      for (let i = 1; i <= 5; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(total);
    } else if (current >= total - 3) {
      pages.push(1);
      pages.push('...');
      for (let i = total - 4; i <= total; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      pages.push('...');
      for (let i = current - 1; i <= current + 1; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(total);
    }
  }
  
  return pages;
});

// Methods
const handleSearch = () => {
  currentPage.value = 1;
  currentViewCount.value = itemsPerView.value;
};

const handleCategoryChange = () => {
  currentPage.value = 1;
  currentViewCount.value = itemsPerView.value;
};

const loadMoreItems = () => {
  currentViewCount.value = Math.min(currentViewCount.value + itemsPerView.value, paginatedKbli.value.length)
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

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    currentViewCount.value = itemsPerView.value;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    currentViewCount.value = itemsPerView.value;
  }
};

const goToPage = (page: number | string) => {
  if (typeof page === 'number') {
    currentPage.value = page;
  }
};

// Lifecycle
onMounted(async () => {
  try {
    console.log('Starting to load KBLI data...');
    
    // Load data from JSON file directly
    const data = await $fetch('/kbli.json') as any[];
    console.log('Raw data received:', data);
    console.log('Data type:', typeof data);
    console.log('Data length:', data.length);
    console.log('First item:', data[0]);
    
    kbliData.value = data;
    console.log(`KBLI Database loaded with ${data.length} entries`);
    console.log('KBLI data in reactive ref:', kbliData.value.length);
    isLoading.value = false;
  } catch (error) {
    console.error('Error loading KBLI data:', error);
    console.error('Error details:', error.message);
    
    // Fallback: use hardcoded data for testing
    console.log('Using fallback hardcoded data...');
    kbliData.value = [
      {
        code: "93113",
        title: "FASILITAS GELANGGANG/ARENA",
        description: "Kelompok ini mencakup usaha yang menyediakan tempat dan fasilitas olahraga darat, air dan udara di dalam atau luar ruangan seperti: pengelolaan gelanggang/arena renang, bowling, biliar, slingshot, hoki es, bungee jumping, olahraga musim dingin; pengelolaan gelanggang/arena paragliding, hang gliding; sebagai usaha pokok dan sarana gelanggang/arena lainnya."
      },
      {
        code: "17011",
        title: "INDUSTRI BUBUR KERTAS (PULP)",
        description: "Kelompok ini mencakup usaha pembuatan bubur kertas dengan bahan dari kayu atau serat lainnya dan atau kertas bekas. Kegiatannya mencakup industri bubur kertas yang diputihkan, separuh putihkan atau yang tidak diputihkan baik melalui proses mekanis, kimia (pelarutan atau non pelarutan), maupun semi kimia, industri bubur kertas cottonlinters dan penghilangan tinta dan industri bubur kertas dari kertas bekas."
      },
      {
        code: "62012",
        title: "Konsultasi Komputer",
        description: "Kelompok ini mencakup usaha konsultasi di bidang teknologi informasi dan komputer, termasuk perencanaan sistem, analisis kebutuhan, dan implementasi solusi IT."
      }
    ];
    console.log(`Fallback successful: ${kbliData.value.length} entries loaded`);
    isLoading.value = false;
  }
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
