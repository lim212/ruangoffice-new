<template>
  <section>
    <!-- Page header -->
    <div class="tw-bg-white tw-border-b tw-border-neutral-200">
      <div class="tw-max-w-7xl tw-mx-auto tw-px-4 sm:tw-px-6 lg:tw-px-8 tw-py-10">
        <h1 class="tw-text-2xl md:tw-text-3xl tw-font-bold tw-text-neutral-900">Hubungi Kami</h1>
        <p class="tw-mt-2 tw-text-neutral-600">Kami siap membantu kebutuhan legalitas dan virtual office Anda.</p>
      </div>
    </div>

    <!-- Content -->
    <div class="tw-max-w-7xl tw-mx-auto tw-px-4 sm:tw-px-6 lg:tw-px-8 tw-py-10 tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-gap-8">
      <!-- Left: Contact info + CTA/Form -->
      <aside class="tw-space-y-6 lg:tw-col-span-1">
        <div class="tw-bg-white tw-rounded-lg tw-shadow tw-border tw-border-neutral-200 tw-p-6">
          <h2 class="tw-text-lg tw-font-semibold tw-text-neutral-900">Kontak Cepat</h2>
          <ul class="tw-mt-4 tw-space-y-3 tw-text-sm tw-text-neutral-700">
            <li>
              <a href="tel:+62811113666" class="tw-text-blue-600 hover:tw-underline">Telepon: +62 811-11-3666</a>
            </li>
            <li>
              <a href="mailto:hello@ruangoffice.com" class="tw-text-blue-600 hover:tw-underline">Email: hello@ruangoffice.com</a>
            </li>
            <li>
              <span>Jam Operasional: Senin - Jumat, 09.00 - 17.00 WIB</span>
            </li>
          </ul>
          <div class="tw-mt-5 tw-flex tw-gap-3">
            <a
              href="https://wa.me/62811113666?text=Halo%20RuangOffice%2C%20saya%20ingin%20konsultasi."
              target="_blank"
              rel="noopener"
              class="tw-inline-flex tw-items-center tw-justify-center tw-gap-2 tw-bg-emerald-600 hover:tw-bg-emerald-700 tw-text-white tw-font-medium tw-px-4 tw-py-2 tw-rounded"
            >
              WhatsApp
            </a>
            <a
              href="tel:+62811113666"
              class="tw-inline-flex tw-items-center tw-justify-center tw-gap-2 tw-bg-blue-600 hover:tw-bg-blue-700 tw-text-white tw-font-medium tw-px-4 tw-py-2 tw-rounded"
            >
              Telepon
            </a>
          </div>
        </div>

        <div id="contact-form" class="tw-bg-white tw-rounded-lg tw-shadow tw-border tw-border-neutral-200 tw-p-6">
          <h2 class="tw-text-lg tw-font-semibold tw-text-neutral-900">Formulir Singkat</h2>
          <form class="tw-mt-4 tw-space-y-3" @submit.prevent="sendWhatsApp">
            <div>
              <label class="tw-block tw-text-sm tw-font-medium tw-text-neutral-800">Nama</label>
              <input v-model="form.name" type="text" required class="tw-mt-1 tw-block tw-w-full tw-rounded tw-border tw-border-neutral-300 focus:tw-border-neutral-500 focus:tw-ring-0 tw-px-3 tw-py-2" placeholder="Nama Anda" />
            </div>
            <div>
              <label class="tw-block tw-text-sm tw-font-medium tw-text-neutral-800">Nomor Telepon</label>
              <input v-model="form.phone" type="tel" required class="tw-mt-1 tw-block tw-w-full tw-rounded tw-border tw-border-neutral-300 focus:tw-border-neutral-500 focus:tw-ring-0 tw-px-3 tw-py-2" placeholder="08xx" />
            </div>
            <div>
              <label class="tw-block tw-text-sm tw-font-medium tw-text-neutral-800">Keperluan</label>
              <textarea v-model="form.message" rows="4" class="tw-mt-1 tw-block tw-w-full tw-rounded tw-border tw-border-neutral-300 focus:tw-border-neutral-500 focus:tw-ring-0 tw-px-3 tw-py-2" placeholder="Ceritakan singkat kebutuhan Anda"></textarea>
            </div>
            <button type="submit" class="tw-w-full tw-bg-neutral-900 hover:tw-bg-neutral-800 tw-text-white tw-font-semibold tw-px-4 tw-py-2 tw-rounded">
              Kirim via WhatsApp
            </button>
          </form>
        </div>
      </aside>

      <!-- Right: Maps -->
      <div class="lg:tw-col-span-2 tw-space-y-8">
        <div>
          <h2 class="tw-text-lg tw-font-semibold tw-text-neutral-900">Lokasi Kami</h2>
          <p class="tw-text-neutral-600 tw-text-sm">Kunjungi kantor kami di Jakarta dan Tangerang.</p>
        </div>

        <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">
          <!-- Jakarta Map -->
          <div class="tw-bg-white tw-rounded-lg tw-shadow tw-border tw-border-neutral-200 tw-overflow-hidden">
            <div class="tw-p-4">
              <h3 class="tw-font-semibold tw-text-neutral-900">Jakarta</h3>
              <p class="tw-text-sm tw-text-neutral-600">Green Garden, Jakarta</p>
            </div>
            <div class="tw-relative tw-w-full" style="padding-bottom: 56.25%;">
              <iframe
                class="tw-absolute tw-inset-0 tw-w-full tw-h-full"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=RuangOffice%20Green%20Garden%20Jakarta&t=m&z=14&output=embed&iwloc=near"
                aria-label="Peta Lokasi Jakarta"
              ></iframe>
            </div>
          </div>

          <!-- Tangerang Map -->
          <div class="tw-bg-white tw-rounded-lg tw-shadow tw-border tw-border-neutral-200 tw-overflow-hidden">
            <div class="tw-p-4">
              <h3 class="tw-font-semibold tw-text-neutral-900">Tangerang</h3>
              <p class="tw-text-sm tw-text-neutral-600">Tangerang</p>
            </div>
            <div class="tw-relative tw-w-full" style="padding-bottom: 56.25%;">
              <iframe
                class="tw-absolute tw-inset-0 tw-w-full tw-h-full"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=RuangOffice%20Tangerang&t=m&z=14&output=embed&iwloc=near"
                aria-label="Peta Lokasi Tangerang"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useHead } from '#imports'

useHead({
  title: 'Hubungi Kami - RuangOffice',
  meta: [
    { name: 'description', content: 'Hubungi RuangOffice untuk konsultasi legalitas, virtual office, dan layanan bisnis. Lokasi Jakarta & Tangerang.' }
  ]
})

const form = reactive({ name: '', phone: '', message: '' })

function sendWhatsApp() {
  const base = 'https://wa.me/62811113666'
  const text = `Halo RuangOffice,\nNama: ${form.name}\nTelepon: ${form.phone}\nKeperluan: ${form.message || '-'}\nTerima kasih.`
  const url = `${base}?text=${encodeURIComponent(text)}`
  window.open(url, '_blank', 'noopener')
}
</script>

<style scoped>
/***** Ensure iframes are borderless *****/
iframe { border: 0; }
</style>
