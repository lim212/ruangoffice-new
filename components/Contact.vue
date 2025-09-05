<template>
  <section id="contact" class="py-12 sm:py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <!-- Left Column - Header & Contact Info -->
        <div class="space-y-6">
          <!-- Header -->
          <div class="space-y-4">
            <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-full text-sm font-bold shadow-md">
              <span class="mr-2">📞</span>
              Hubungi Kami
            </div>
            
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Siap Membantu
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Bisnis Anda
              </span>
            </h2>
            
            <p class="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Tim ahli kami siap membantu Anda dengan berbagai layanan bisnis. 
              Konsultasi gratis untuk memastikan Anda mendapatkan solusi terbaik.
            </p>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8">
            <div class="flex items-start">
              <div class="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mr-6 mt-2">
                <span class="text-black text-xl">📍</span>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 text-xl mb-2">Alamat Kantor</h3>
                <p class="text-gray-700 text-lg leading-relaxed">
                  <strong>Head Office:</strong> Greenlake City Boulevard, Rukan GreatWall Blok A No. 38, Cipondoh, Kota Tangerang, Banten 15146<br>
                  <strong>Branch Office:</strong> Ruko Green Garden Blok Z-2 No. 43 (Sebelah HappyPuppy), Kedoya Utara, Kebon Jeruk, Kota Adm. Jakarta Barat - DKI Jakarta, 11520
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mr-6 mt-2">
                <span class="text-black text-xl">📱</span>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 text-xl mb-2">Telepon & WhatsApp</h3>
                <p class="text-gray-700 text-lg leading-relaxed">
                  <a :href="`tel:${waPhone}`" class="text-yellow-600 hover:text-yellow-700 font-semibold">
                    {{ waPhone }}
                  </a><br>
                  <span class="text-gray-600">Support 24/7 via WhatsApp</span>
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mr-6 mt-2">
                <span class="text-black text-xl">✉️</span>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 text-xl mb-2">Email & Website</h3>
                <p class="text-gray-700 text-lg leading-relaxed">
                                <a href="mailto:Legal@RuangOffice.com" class="text-yellow-600 hover:text-yellow-700 font-semibold">
                    Legal@RuangOffice.com
                  </a><br>
                  <a href="https://www.ruangoffice.com" target="_blank" class="text-yellow-600 hover:text-yellow-700 font-semibold">
                    www.RuangOffice.com
                  </a>
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mr-6 mt-2">
                <span class="text-black text-xl">🕐</span>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 text-xl mb-2">Jam Operasional</h3>
                <p class="text-gray-700 text-lg leading-relaxed">
                  Senin - Jumat: 08:00 - 17:00 WIB<br>
                  Sabtu: 09:00 - 15:00 WIB<br>
                  <span class="text-yellow-600 font-semibold">Minggu & Hari Libur: WhatsApp 24/7</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Contact Form -->
        <div class="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-3xl p-10 border border-yellow-200">
          <h3 class="text-3xl font-bold text-gray-900 mb-8">Kirim Pesan</h3>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-gray-700 font-semibold mb-3 text-lg">Nama Lengkap</label>
                <input 
                  v-model="formData.name"
                  type="text" 
                  required
                  class="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl text-lg focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                  placeholder="Masukkan nama lengkap"
                />
              </div>
              <div>
                <label class="block text-gray-700 font-semibold mb-3 text-lg">Nomor Telepon</label>
                <input 
                  v-model="formData.phone"
                  type="tel" 
                  required
                  class="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl text-lg focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                  placeholder="08xxxxxxxxxx"
                />
              </div>
            </div>

            <div>
              <label class="block text-gray-700 font-semibold mb-3 text-lg">Email</label>
              <input 
                v-model="formData.email"
                type="email" 
                required
                class="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl text-lg focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                placeholder="yourname@company.com"
              />
            </div>

            <div>
              <label class="block text-gray-700 font-semibold mb-3 text-lg">Layanan yang Diminati</label>
              <select 
                v-model="formData.service"
                required
                class="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl text-lg focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
              >
                <option value="">Pilih layanan</option>
                <option value="pendirian-pt">Pendirian PT</option>
                <option value="pendirian-cv">Pendirian CV</option>
                <option value="pendirian-pma">Pendirian PMA</option>
                <option value="virtual-office">Virtual Office</option>
                <option value="private-office">Private Office</option>
                <option value="perizinan-usaha">Perizinan Usaha</option>
                <option value="kbli-oss">KBLI & OSS</option>
                <option value="konsultasi-hukum">Konsultasi Hukum</option>
                <option value="layanan-pajak">Layanan Pajak</option>
                <option value="lainnya">Lainnya</option>
              </select>
            </div>

            <div>
              <label class="block text-gray-700 font-semibold mb-3 text-lg">Pesan</label>
              <textarea 
                v-model="formData.message"
                required
                rows="5"
                class="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl text-lg focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 resize-none"
                placeholder="Jelaskan kebutuhan bisnis Anda secara detail..."
              ></textarea>
            </div>

            <button 
              type="submit"
              class="w-full px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-xl rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <span class="mr-3">📤</span>
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-20">
        <div class="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-3xl p-12 text-black shadow-2xl">
          <h3 class="text-4xl font-bold mb-8">
            Butuh Bantuan Cepat?
          </h3>
          <p class="text-black/90 mb-10 max-w-3xl mx-auto text-xl leading-relaxed">
            Tim kami siap membantu Anda dengan berbagai pertanyaan dan kebutuhan bisnis. 
            Konsultasi gratis tanpa biaya apapun.
          </p>
          <a :href="`https://wa.me/${waPhone}?text=Halo, saya ingin konsultasi cepat`"
             target="_blank"
             rel="noopener"
             class="inline-flex items-center px-10 py-5 bg-black text-white font-bold text-xl rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
            <span class="mr-3">💬</span>
            Chat WhatsApp Sekarang
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const waPhone = '0811113666';

const formData = ref({
  name: '',
  phone: '',
  email: '',
  service: '',
  message: ''
});

const submitForm = () => {
  const message = `Halo, saya ${formData.value.name} ingin konsultasi tentang ${formData.value.service}.

Detail:
- Nama: ${formData.value.name}
- Telepon: ${formData.value.phone}
- Email: ${formData.value.email}
- Layanan: ${formData.value.service}
- Pesan: ${formData.value.message}

Mohon bantuannya. Terima kasih.`;

  const whatsappUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};
</script>
