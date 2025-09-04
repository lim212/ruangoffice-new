<template>
  <section class="testimonials-section tw-py-16 md:tw-py-24 tw-bg-gray-900 tw-text-white">
    <div class="tw-max-w-7xl tw-mx-auto tw-px-4">
      <!-- Section Header -->
      <div class="tw-text-center tw-mb-16">
        <h2 class="tw-text-3xl md:tw-text-5xl tw-font-bold tw-mb-6">
          Apa Kata Klien Kami
        </h2>
        <p class="tw-text-lg md:tw-text-xl tw-text-gray-300 tw-max-w-3xl tw-mx-auto">
          Ribuan klien telah mempercayai RuangOffice untuk kebutuhan legalitas usaha mereka
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
        <!-- Testimonial 1 -->
        <div class="testimonial-card tw-bg-gray-800 tw-rounded-2xl tw-p-8 tw-relative">
          <div class="tw-absolute -tw-top-4 -tw-left-4 tw-w-8 tw-h-8 tw-bg-emerald-500 tw-rounded-full tw-flex tw-items-center tw-justify-center">
            <i class="fas fa-quote-left tw-text-white tw-text-sm"></i>
          </div>
          <div class="tw-mb-6">
            <div class="tw-flex tw-items-center tw-gap-1 tw-mb-2">
              <i v-for="i in 5" :key="i" class="fas fa-star tw-text-yellow-400"></i>
            </div>
            <p class="tw-text-gray-300 tw-leading-relaxed">
              "Proses pendirian PT sangat cepat dan transparan. Tim RuangOffice sangat profesional dan selalu siap membantu. 
              Saya sangat puas dengan layanan mereka."
            </p>
          </div>
          <div class="tw-flex tw-items-center tw-gap-4">
            <div class="tw-w-12 tw-h-12 tw-bg-emerald-600 tw-rounded-full tw-flex tw-items-center tw-justify-center">
              <span class="tw-text-white tw-font-bold">AS</span>
            </div>
            <div>
              <h4 class="tw-font-semibold tw-text-white">Ahmad Santoso</h4>
              <p class="tw-text-sm tw-text-gray-400">CEO, PT Digital Solutions</p>
            </div>
          </div>
        </div>

        <!-- Testimonial 2 -->
        <div class="testimonial-card tw-bg-gray-800 tw-rounded-2xl tw-p-8 tw-relative">
          <div class="tw-absolute -tw-top-4 -tw-left-4 tw-w-8 tw-h-8 tw-bg-emerald-500 tw-rounded-full tw-flex tw-items-center tw-justify-center">
            <i class="fas fa-quote-left tw-text-white tw-text-sm"></i>
          </div>
          <div class="tw-mb-6">
            <div class="tw-flex tw-items-center tw-gap-1 tw-mb-2">
              <i v-for="i in 5" :key="i" class="fas fa-star tw-text-yellow-400"></i>
            </div>
            <p class="tw-text-gray-300 tw-leading-relaxed">
              "Virtual office dari RuangOffice sangat membantu bisnis startup kami. Alamat strategis, 
              surat masuk tertangani dengan baik, dan harga sangat terjangkau."
            </p>
          </div>
          <div class="tw-flex tw-items-center tw-gap-4">
            <div class="tw-w-12 tw-h-12 tw-bg-blue-600 tw-rounded-full tw-flex tw-items-center tw-justify-center">
              <span class="tw-text-white tw-font-bold">SM</span>
            </div>
            <div>
              <h4 class="tw-font-semibold tw-text-white">Sarah Mulia</h4>
              <p class="tw-text-sm tw-text-gray-400">Founder, TechStart Indonesia</p>
            </div>
          </div>
        </div>

        <!-- Testimonial 3 -->
        <div class="testimonial-card tw-bg-gray-800 tw-rounded-2xl tw-p-8 tw-relative">
          <div class="tw-absolute -tw-top-4 -tw-left-4 tw-w-8 tw-h-8 tw-bg-emerald-500 tw-rounded-full tw-flex tw-items-center tw-justify-center">
            <i class="fas fa-quote-left tw-text-white tw-text-sm"></i>
          </div>
          <div class="tw-mb-6">
            <div class="tw-flex tw-items-center tw-gap-1 tw-mb-2">
              <i v-for="i in 5" :key="i" class="fas fa-star tw-text-yellow-400"></i>
            </div>
            <p class="tw-text-gray-300 tw-leading-relaxed">
              "Pengurusan perizinan usaha sangat mudah dengan RuangOffice. Tim konsultan sangat ahli 
              dan selalu memberikan solusi terbaik untuk bisnis kami."
            </p>
          </div>
          <div class="tw-flex tw-items-center tw-gap-4">
            <div class="tw-w-12 tw-h-12 tw-bg-purple-600 tw-rounded-full tw-flex tw-items-center tw-justify-center">
              <span class="tw-text-white tw-font-bold">BW</span>
            </div>
            <div>
              <h4 class="tw-font-semibold tw-text-white">Budi Wijaya</h4>
              <p class="tw-text-sm tw-text-gray-400">Direktur, CV Maju Bersama</p>
            </div>
          </div>
        </div>

        <!-- Testimonial 4 -->
        <div class="testimonial-card tw-bg-gray-800 tw-rounded-2xl tw-p-8 tw-relative">
          <div class="tw-absolute -tw-top-4 -tw-left-4 tw-w-8 tw-h-8 tw-bg-emerald-500 tw-rounded-full tw-flex tw-items-center tw-justify-center">
            <i class="fas fa-quote-left tw-text-white tw-text-sm"></i>
          </div>
          <div class="tw-mb-6">
            <div class="tw-flex tw-items-center tw-gap-1 tw-mb-2">
              <i v-for="i in 5" :key="i" class="fas fa-star tw-text-yellow-400"></i>
            </div>
            <p class="tw-text-gray-300 tw-leading-relaxed">
              "Sertifikasi ISO berhasil kami dapatkan berkat bantuan RuangOffice. Proses yang terstruktur 
              dan tim yang sangat kompeten di bidangnya."
            </p>
          </div>
          <div class="tw-flex tw-items-center tw-gap-4">
            <div class="tw-w-12 tw-h-12 tw-bg-orange-600 tw-rounded-full tw-flex tw-items-center tw-justify-center">
              <span class="tw-text-white tw-font-bold">DK</span>
            </div>
            <div>
              <h4 class="tw-font-semibold tw-text-white">Dewi Kartika</h4>
              <p class="tw-text-sm tw-text-gray-400">Quality Manager, PT Quality First</p>
            </div>
          </div>
        </div>

        <!-- Testimonial 5 -->
        <div class="testimonial-card tw-bg-gray-800 tw-rounded-2xl tw-p-8 tw-relative">
          <div class="tw-absolute -tw-top-4 -tw-left-4 tw-w-8 tw-h-8 tw-bg-emerald-500 tw-rounded-full tw-flex tw-items-center tw-justify-center">
            <i class="fas fa-quote-left tw-text-white tw-text-sm"></i>
          </div>
          <div class="tw-mb-6">
            <div class="tw-flex tw-items-center tw-gap-1 tw-mb-2">
              <i v-for="i in 5" :key="i" class="fas fa-star tw-text-yellow-400"></i>
            </div>
            <p class="tw-text-gray-300 tw-leading-relaxed">
              "Private office yang kami sewa sangat nyaman dan profesional. Fasilitas lengkap, 
              lokasi strategis, dan harga yang sangat kompetitif."
            </p>
          </div>
          <div class="tw-flex tw-items-center tw-gap-4">
            <div class="tw-w-12 tw-h-12 tw-bg-red-600 tw-rounded-full tw-flex tw-items-center tw-justify-center">
              <span class="tw-text-white tw-font-bold">RP</span>
            </div>
            <div>
              <h4 class="tw-font-semibold tw-text-white">Rina Putri</h4>
              <p class="tw-text-sm tw-text-gray-400">Managing Director, PT Creative Hub</p>
            </div>
          </div>
        </div>

        <!-- Testimonial 6 -->
        <div class="testimonial-card tw-bg-gray-800 tw-rounded-2xl tw-p-8 tw-relative">
          <div class="tw-absolute -tw-top-4 -tw-left-4 tw-w-8 tw-h-8 tw-bg-emerald-500 tw-rounded-full tw-flex tw-items-center tw-justify-center">
            <i class="fas fa-quote-left tw-text-white tw-text-sm"></i>
          </div>
          <div class="tw-mb-6">
            <div class="tw-flex tw-items-center tw-gap-1 tw-mb-2">
              <i v-for="i in 5" :key="i" class="fas fa-star tw-text-yellow-400"></i>
            </div>
            <p class="tw-text-gray-300 tw-leading-relaxed">
              "Konsultasi pajak dari RuangOffice sangat membantu mengoptimalkan struktur perpajakan perusahaan. 
              Tim ahli yang sangat berpengalaman dan solutif."
            </p>
          </div>
          <div class="tw-flex tw-items-center tw-gap-4">
            <div class="tw-w-12 tw-h-12 tw-bg-teal-600 tw-rounded-full tw-flex tw-items-center tw-justify-center">
              <span class="tw-text-white tw-font-bold">HS</span>
            </div>
            <div>
              <h4 class="tw-font-semibold tw-text-white">Hendra Surya</h4>
              <p class="tw-text-sm tw-text-gray-400">Finance Director, PT Global Finance</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="tw-mt-20 tw-grid tw-grid-cols-2 md:tw-grid-cols-4 tw-gap-8">
        <div class="tw-text-center">
          <div class="tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-emerald-400 tw-mb-2">1000+</div>
          <div class="tw-text-gray-300">Klien Puas</div>
        </div>
        <div class="tw-text-center">
          <div class="tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-emerald-400 tw-mb-2">15+</div>
          <div class="tw-text-gray-300">Tahun Pengalaman</div>
        </div>
        <div class="tw-text-center">
          <div class="tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-emerald-400 tw-mb-2">99%</div>
          <div class="tw-text-gray-300">Tingkat Kepuasan</div>
        </div>
        <div class="tw-text-center">
          <div class="tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-emerald-400 tw-mb-2">24/7</div>
          <div class="tw-text-gray-300">Support</div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="tw-text-center tw-mt-16">
        <div class="tw-bg-gradient-to-r tw-from-emerald-600 tw-to-green-600 tw-rounded-2xl tw-p-8 md:tw-p-12">
          <h3 class="tw-text-2xl md:tw-text-4xl tw-font-bold tw-mb-4">
            Bergabung dengan 1000+ Klien Puas
          </h3>
          <p class="tw-text-lg md:tw-text-xl tw-mb-8 tw-opacity-90">
            Mulai perjalanan bisnis Anda dengan RuangOffice
          </p>
          <div class="tw-flex tw-flex-col sm:tw-flex-row tw-gap-4 tw-justify-center">
            <a href="https://wa.me/62811113666" 
               class="tw-bg-white tw-text-emerald-600 tw-px-8 tw-py-4 tw-rounded-lg tw-font-semibold tw-text-lg hover:tw-bg-gray-100 tw-transition-colors tw-inline-flex tw-items-center tw-gap-2">
              <i class="fab fa-whatsapp"></i>
              Konsultasi Gratis
            </a>
            <a href="/hubungi-kami" 
               class="tw-border-2 tw-border-white tw-text-white tw-px-8 tw-py-4 tw-rounded-lg tw-font-semibold tw-text-lg hover:tw-bg-white hover:tw-text-emerald-600 tw-transition-colors">
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic here
</script>

<style scoped>
.testimonial-card {
  border: 1px solid #374151;
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-4px);
  border-color: #10b981;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
}
</style>
