<template>
    <div class="bg-white">
      <Header />
  
      <main class="max-w-7xl mx-auto px-6 py-12">
        <h1 class="text-3xl font-bold mb-6">Layanan Virtual Office Jakarta</h1>
        <p class="text-gray-700 mb-6">
          Dapatkan alamat bisnis strategis di Jakarta dengan layanan Virtual Office resmi dari RuangOffice. 
          Cocok untuk startup, freelancer, hingga perusahaan asing (PMA).
        </p>
  
        <ul class="list-disc list-inside text-gray-600 space-y-2 mb-8">
          <li>✔ Alamat bisnis strategis</li>
          <li>✔ Surat domisili perusahaan</li>
          <li>✔ Layanan resepsionis & surat menyurat</li>
          <li>✔ Meeting room sesuai kebutuhan</li>
        </ul>
  
        <CTA />
      </main>
  
      <Footer />
    </div>
  </template>
  
  <script setup lang="ts">
  import Header from '~/components/Header.vue'
  import CTA from '~/components/CTA.vue'
  import Footer from '~/components/Footer.vue'
  
  // ✅ SEO untuk halaman Virtual Office
  useHead({
    title: 'Virtual Office Jakarta Murah & Resmi | RuangOffice',
    meta: [
      {
        name: 'description',
        content:
          'Sewa Virtual Office resmi di Jakarta dengan harga terjangkau. RuangOffice menyediakan alamat domisili perusahaan, resepsionis, dan ruang meeting.'
      },
      {
        name: 'keywords',
        content:
          'Virtual Office Jakarta, Sewa Alamat Bisnis, Domisili Perusahaan, Virtual Office Murah, Meeting Room Jakarta'
      },
      { property: 'og:type', content: 'article' },
      { property: 'og:title', content: 'Virtual Office Jakarta Murah & Resmi | RuangOffice' },
      {
        property: 'og:description',
        content:
          'Domisili perusahaan legal di Jakarta dengan Virtual Office dari RuangOffice. Mendukung administrasi, surat menyurat, dan ruang meeting.'
      },
      { property: 'og:url', content: 'https://ruangoffice.online/virtual-office' },
      { property: 'og:image', content: '/img/hero-vo.jpg' }
    ]
  })
  </script>
  