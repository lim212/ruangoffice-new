<template>
    <div class="bg-white">
      <Header />
  
      <main class="max-w-7xl mx-auto px-6 py-12">
        <h1 class="text-3xl font-bold mb-6">Jasa Pendirian PT Resmi</h1>
        <p class="text-gray-700 mb-6">
          RuangOffice melayani pendirian Perseroan Terbatas (PT) dengan cepat, legal, 
          dan sesuai ketentuan OSS RBA. Kami bantu mulai dari akta notaris, SK Kemenkumham, 
          NPWP perusahaan, hingga NIB.
        </p>
  
        <ul class="list-disc list-inside text-gray-600 space-y-2 mb-8">
          <li>✔ Akta Notaris</li>
          <li>✔ SK Kemenkumham</li>
          <li>✔ NPWP Perusahaan</li>
          <li>✔ Nomor Induk Berusaha (NIB)</li>
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
  
  // ✅ SEO untuk halaman Pendirian PT
  useHead({
    title: 'Jasa Pendirian PT Resmi & Legal | RuangOffice',
    meta: [
      {
        name: 'description',
        content:
          'Layanan Jasa Pendirian PT resmi dan terpercaya di Jakarta. RuangOffice membantu pembuatan akta notaris, SK Kemenkumham, NPWP, dan NIB dengan proses cepat.'
      },
      {
        name: 'keywords',
        content:
          'Jasa Pendirian PT, Bikin PT Jakarta, Konsultan Legal PT, SK Kemenkumham, Akta Notaris PT, NPWP Perusahaan'
      },
      { property: 'og:type', content: 'article' },
      { property: 'og:title', content: 'Jasa Pendirian PT Resmi & Legal | RuangOffice' },
      {
        property: 'og:description',
        content:
          'RuangOffice siap membantu pendirian PT resmi sesuai KBLI. Proses cepat, biaya transparan, dan layanan profesional.'
      },
      { property: 'og:url', content: 'https://ruangoffice.online/pendirian-pt' },
      { property: 'og:image', content: '/img/hero-pt.jpg' }
    ]
  })
  </script>
  