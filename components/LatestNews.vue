<template>
  <section class="latest-news tw-py-16 md:tw-py-24 tw-bg-white">
    <div class="tw-max-w-7xl tw-mx-auto tw-px-4">
      <!-- Section Header -->
      <div class="tw-text-center tw-mb-16">
        <h2 class="tw-text-3xl md:tw-text-5xl tw-font-bold tw-text-gray-900 tw-mb-6">
          Berita & Update Terbaru
        </h2>
        <p class="tw-text-lg md:tw-text-xl tw-text-gray-600 tw-max-w-3xl tw-mx-auto">
          Dapatkan informasi terbaru seputar regulasi bisnis, tips legalitas, dan update layanan kami
        </p>
      </div>

      <!-- News Grid -->
      <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
        <!-- News Item 1 -->
        <article class="news-card tw-bg-white tw-rounded-2xl tw-shadow-lg hover:tw-shadow-xl tw-transition-all tw-duration-300 tw-overflow-hidden tw-group">
          <div class="tw-relative tw-overflow-hidden">
            <img src="/assets/img/RO Banner 4.png" 
                 alt="Update Regulasi OSS RBA 2024"
                 class="tw-w-full tw-h-48 tw-object-cover tw-transition-transform tw-duration-300 group-hover:tw-scale-105">
            <div class="tw-absolute tw-top-4 tw-left-4">
              <span class="tw-bg-emerald-500 tw-text-white tw-px-3 tw-py-1 tw-rounded-full tw-text-xs tw-font-semibold">
                Regulasi
              </span>
            </div>
          </div>
          <div class="tw-p-6">
            <div class="tw-flex tw-items-center tw-gap-2 tw-text-sm tw-text-gray-500 tw-mb-3">
              <i class="fas fa-calendar-alt"></i>
              <span>15 Januari 2024</span>
            </div>
            <h3 class="tw-text-xl tw-font-bold tw-text-gray-900 tw-mb-3 group-hover:tw-text-emerald-600 tw-transition-colors">
              Update Regulasi OSS RBA 2024: Perubahan Penting untuk Pendirian PT
            </h3>
            <p class="tw-text-gray-600 tw-mb-4 tw-line-clamp-3">
              Pemerintah telah mengeluarkan regulasi terbaru terkait pendirian perusahaan melalui sistem OSS RBA. 
              Simak perubahan penting yang perlu diketahui para pengusaha.
            </p>
            <a href="/blog/update-regulasi-oss-rba-2024" 
               class="tw-inline-flex tw-items-center tw-gap-2 tw-text-emerald-600 hover:tw-text-emerald-700 tw-font-semibold tw-transition-colors">
              Baca Selengkapnya
              <i class="fas fa-arrow-right tw-text-sm"></i>
            </a>
          </div>
        </article>

        <!-- News Item 2 -->
        <article class="news-card tw-bg-white tw-rounded-2xl tw-shadow-lg hover:tw-shadow-xl tw-transition-all tw-duration-300 tw-overflow-hidden tw-group">
          <div class="tw-relative tw-overflow-hidden">
            <img src="/assets/img/RO Banner 5.png" 
                 alt="Tips Memilih Virtual Office yang Tepat"
                 class="tw-w-full tw-h-48 tw-object-cover tw-transition-transform tw-duration-300 group-hover:tw-scale-105">
            <div class="tw-absolute tw-top-4 tw-left-4">
              <span class="tw-bg-blue-500 tw-text-white tw-px-3 tw-py-1 tw-rounded-full tw-text-xs tw-font-semibold">
                Tips
              </span>
            </div>
          </div>
          <div class="tw-p-6">
            <div class="tw-flex tw-items-center tw-gap-2 tw-text-sm tw-text-gray-500 tw-mb-3">
              <i class="fas fa-calendar-alt"></i>
              <span>12 Januari 2024</span>
            </div>
            <h3 class="tw-text-xl tw-font-bold tw-text-gray-900 tw-mb-3 group-hover:tw-text-emerald-600 tw-transition-colors">
              7 Tips Memilih Virtual Office yang Tepat untuk Bisnis Anda
            </h3>
            <p class="tw-text-gray-600 tw-mb-4 tw-line-clamp-3">
              Virtual office menjadi solusi populer untuk startup dan UMKM. 
              Berikut tips memilih virtual office yang sesuai dengan kebutuhan bisnis Anda.
            </p>
            <a href="/blog/tips-memilih-virtual-office" 
               class="tw-inline-flex tw-items-center tw-gap-2 tw-text-emerald-600 hover:tw-text-emerald-700 tw-font-semibold tw-transition-colors">
              Baca Selengkapnya
              <i class="fas fa-arrow-right tw-text-sm"></i>
            </a>
          </div>
        </article>

        <!-- News Item 3 -->
        <article class="news-card tw-bg-white tw-rounded-2xl tw-shadow-lg hover:tw-shadow-xl tw-transition-all tw-duration-300 tw-overflow-hidden tw-group">
          <div class="tw-relative tw-overflow-hidden">
            <img src="/assets/img/RO Banner 6.png" 
                 alt="Keuntungan Mendirikan PT Perorangan"
                 class="tw-w-full tw-h-48 tw-object-cover tw-transition-transform tw-duration-300 group-hover:tw-scale-105">
            <div class="tw-absolute tw-top-4 tw-left-4">
              <span class="tw-bg-purple-500 tw-text-white tw-px-3 tw-py-1 tw-rounded-full tw-text-xs tw-font-semibold">
                Bisnis
              </span>
            </div>
          </div>
          <div class="tw-p-6">
            <div class="tw-flex tw-items-center tw-gap-2 tw-text-sm tw-text-gray-500 tw-mb-3">
              <i class="fas fa-calendar-alt"></i>
              <span>10 Januari 2024</span>
            </div>
            <h3 class="tw-text-xl tw-font-bold tw-text-gray-900 tw-mb-3 group-hover:tw-text-emerald-600 tw-transition-colors">
              Keuntungan Mendirikan PT Perorangan: Solusi untuk Pengusaha Pemula
            </h3>
            <p class="tw-text-gray-600 tw-mb-4 tw-line-clamp-3">
              PT Perorangan menjadi pilihan menarik untuk pengusaha pemula. 
              Simak keuntungan dan proses pendiriannya yang lebih sederhana.
            </p>
            <a href="/blog/keuntungan-pt-perorangan" 
               class="tw-inline-flex tw-items-center tw-gap-2 tw-text-emerald-600 hover:tw-text-emerald-700 tw-font-semibold tw-transition-colors">
              Baca Selengkapnya
              <i class="fas fa-arrow-right tw-text-sm"></i>
            </a>
          </div>
        </article>
      </div>

      <!-- View All News Button -->
      <div class="tw-text-center tw-mt-12">
        <a href="/blog" 
           class="tw-inline-flex tw-items-center tw-gap-2 tw-bg-emerald-600 hover:tw-bg-emerald-700 tw-text-white tw-px-8 tw-py-4 tw-rounded-lg tw-font-semibold tw-text-lg tw-transition-all tw-duration-300 tw-shadow-lg hover:tw-shadow-xl">
          Lihat Semua Berita
          <i class="fas fa-newspaper tw-ml-2"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic here
</script>

<style scoped>
.news-card {
  border: 1px solid #f3f4f6;
}

.news-card:hover {
  transform: translateY(-4px);
  border-color: #10b981;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
