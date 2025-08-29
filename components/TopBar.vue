<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2">
      <div class="flex items-center justify-between">
        <!-- Logo kiri -->
        <NuxtLink to="/" class="flex items-center gap-2 shrink-0" aria-label="RuangOffice Home">
          <img
            class="h-8 w-auto"
            src="/assets/img/Header-RuangOffice-Dekstop.png"
            alt="RuangOffice Logo"
            loading="eager"
            decoding="async"
          />
        </NuxtLink>

        <!-- Menu shortcut kanan -->
        <nav class="flex items-center gap-2 sm:gap-3 md:gap-4">
          <NuxtLink
            to="/jasa-legalitas"
            class="inline-flex items-center rounded-md px-3 py-1 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 border border-transparent hover:border-gray-200"
          >
            Jasa Legalitas
          </NuxtLink>
          <NuxtLink
            to="/virtual-office"
            class="inline-flex items-center rounded-md px-3 py-1 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 border border-transparent hover:border-gray-200"
          >
            Virtual Office
          </NuxtLink>
          <NuxtLink
            to="/private-office"
            class="inline-flex items-center rounded-md px-3 py-1 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 border border-transparent hover:border-gray-200"
          >
            Private Office
          </NuxtLink>
          <NuxtLink
            to="/jasa-konsultan"
            class="inline-flex items-center rounded-md px-3 py-1 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 border border-transparent hover:border-gray-200"
          >
            Jasa Konsultan
          </NuxtLink>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// TopBar sederhana: logo kiri, menu shortcut kanan
</script>
