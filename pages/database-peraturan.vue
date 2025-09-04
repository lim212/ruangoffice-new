<template>
  <div>
    <Header />
    
    <!-- Page Header -->
    <section class="pt-20 pb-12 bg-gradient-to-br from-yellow-50 to-yellow-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-full text-sm sm:text-base font-semibold mb-4 sm:mb-6 shadow-lg">
          <span class="mr-2 sm:mr-3">📋</span>
          Database Peraturan
        </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
          DATABASE <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">PERATURAN</span>
        </h1>
        <p class="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Akses database peraturan nasional dan daerah yang lengkap untuk mendukung kepatuhan hukum dan pengembangan bisnis Anda.
        </p>
      </div>
    </section>

    <PeraturanSection />
    <Footer />
    <FloatingActions />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
import PeraturanSection from '~/components/PeraturanSection.vue'
import Footer from '~/components/Footer.vue'
import FloatingActions from '~/components/FloatingActions.vue'

// SEO
useHead({
  title: 'Database Peraturan - RuangOffice | Database Peraturan Nasional & Daerah',
  meta: [
    {
      name: 'description',
      content: 'Database peraturan nasional dan daerah terlengkap. Akses Undang-Undang, Peraturan Pemerintah, Peraturan Presiden, dan peraturan daerah untuk kepatuhan hukum bisnis.'
    },
    {
      name: 'keywords',
      content: 'database peraturan, undang-undang, peraturan pemerintah, peraturan presiden, peraturan daerah, hukum bisnis, kepatuhan hukum'
    }
  ],
  og: {
    title: 'Database Peraturan - RuangOffice',
    description: 'Database peraturan nasional dan daerah terlengkap untuk kepatuhan hukum bisnis',
    image: '/assets/img/RO Banner 3.png'
  }
})
</script>
