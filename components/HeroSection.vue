<template>
  <section class="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
    <div class="container mx-auto flex flex-col md:flex-row items-center gap-10">
      <!-- Left Content -->
      <div class="flex-1 text-center md:text-left">
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight">
          Solusi <span class="text-yellow-400">Bisnis Modern</span> <br />
          untuk Usaha Anda
        </h1>
        <p class="mt-4 text-lg text-gray-300">
          Layanan Virtual Office, pendirian PT, dan konsultasi bisnis profesional
          dengan harga terjangkau.
        </p>
        <div class="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <NuxtLink to="/layanan" class="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500">
            Lihat Layanan
          </NuxtLink>
          <NuxtLink to="/kontak" class="border border-gray-400 px-6 py-3 rounded-lg hover:bg-white hover:text-black">
            Hubungi Kami
          </NuxtLink>
        </div>
      </div>

      <!-- Right Image -->
      <div class="flex-1">
        <img src="/assets/img/RO Banner 2.png" alt="Virtual Office" class="rounded-xl shadow-lg" />
      </div>
    </div>
  </section>
</template>
