<template>
  <section class="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-5 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-black rounded-full text-sm font-semibold mb-6 shadow-lg">
          <span class="mr-2">💬</span>
          Testimoni Klien
        </div>
        <h2 class="text-4xl lg:text-5xl font-bold leading-tight">
          Apa Kata <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">Klien Kami?</span>
        </h2>
        <p class="text-lg text-gray-300 max-w-4xl mx-auto mt-4">
          Ribuan wirausaha mempercayai RuangOffice untuk legalitas dan pertumbuhan bisnis mereka.
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div v-for="t in items" :key="t.initials" class="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-amber-300/30 hover:bg-white/10 hover:shadow-2xl transition-all duration-300">
          <div class="flex items-center mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center text-black text-2xl font-bold mr-5">
              {{ t.initials }}
            </div>
            <div>
              <h4 class="font-bold text-white text-lg">{{ t.name }}</h4>
              <p class="text-amber-300/90 text-sm">{{ t.role }}</p>
            </div>
          </div>
          <p class="text-gray-200 leading-relaxed">“{{ t.quote }}”</p>
          <div class="flex text-amber-400 mt-4" aria-label="rating 5">
            <span v-for="i in 5" :key="i" class="text-xl">⭐</span>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center">
        <div class="bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl p-10 text-black shadow-2xl">
          <h3 class="text-3xl font-bold mb-4">Bergabung dengan Ribuan Klien Puas</h3>
          <p class="text-black/90 mb-6 max-w-3xl mx-auto">
            Mulai perjalanan bisnis Anda bersama tim ahli RuangOffice.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/62811113666?text=Halo, saya ingin konsultasi untuk memulai bisnis" target="_blank" rel="noopener" class="inline-flex items-center px-8 py-4 bg-black text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <span class="mr-2">💬</span>
              Konsultasi Gratis
            </a>
            <a href="#services" class="inline-flex items-center px-8 py-4 border-2 border-black text-black font-semibold rounded-xl hover:bg-black hover:text-white transition-all duration-300">
              <span class="mr-2">📋</span>
              Lihat Layanan
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  </template>

<script setup lang="ts">
type Testimonial = { initials: string; name: string; role: string; quote: string }
const items: Testimonial[] = [
  { initials: 'AS', name: 'Andi Santoso', role: 'CEO, PT Digital Solutions', quote: 'Proses pendirian PT cepat dan profesional. Legalitas lengkap, bisnis berjalan lancar.' },
  { initials: 'SM', name: 'Sarah Mulyani', role: 'Founder, CV Creative Studio', quote: 'Virtual Office-nya profesional dan terjangkau. Layanan surat menyurat memuaskan.' },
  { initials: 'BD', name: 'Budi Darmawan', role: 'Owner, PT Maju Bersama', quote: 'Konsultasi KBLI dan perizinan sangat membantu. Proses cepat, hasil memuaskan.' },
  { initials: 'DW', name: 'Dewi Wati', role: 'CEO, CV Fashion Boutique', quote: 'Pendirian CV mudah dan cepat. Harga transparan tanpa biaya tersembunyi.' },
  { initials: 'RK', name: 'Rudi Kusuma', role: 'Founder, PT Tech Innovation', quote: 'Pendirian PMA berjalan lancar. Tim memahami regulasi dan sangat membantu.' },
  { initials: 'LM', name: 'Linda Mariana', role: 'Owner, CV Beauty Salon', quote: 'Konsultasi hukum membantu bisnis salon. Izin lengkap dan operasional lancar.' },
]
</script>