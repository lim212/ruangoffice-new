<template>
  <div class="tw-bg-white">
    <div class="tw-mx-auto tw-max-w-7xl tw-px-4 sm:tw-px-6 lg:tw-px-8 tw-py-2">
      <div class="tw-flex tw-items-center tw-justify-between">
        <!-- Logo kiri -->
        <NuxtLink to="/" class="tw-flex tw-items-center tw-gap-2 tw-shrink-0" aria-label="RuangOffice Home">
          <img
            class="tw-h-8 tw-w-auto"
            src="/assets/img/Header-RuangOffice-Dekstop.png"
            alt="RuangOffice Logo"
            loading="eager"
            decoding="async"
          />
        </NuxtLink>

        <!-- Menu shortcut kanan -->
        <nav class="tw-hidden sm:tw-flex tw-items-center tw-gap-2 sm:tw-gap-3 md:tw-gap-4">
          <NuxtLink
            to="/jasa-legalitas"
            class="tw-inline-flex tw-items-center tw-rounded-md tw-px-3 tw-py-1 tw-text-sm tw-text-gray-700 hover:tw-text-gray-900 hover:tw-bg-gray-50 tw-border tw-border-transparent hover:tw-border-gray-200"
          >
            Jasa Legalitas
          </NuxtLink>
          <NuxtLink
            to="/virtual-office"
            class="tw-inline-flex tw-items-center tw-rounded-md tw-px-3 tw-py-1 tw-text-sm tw-text-gray-700 hover:tw-text-gray-900 hover:tw-bg-gray-50 tw-border tw-border-transparent hover:tw-border-gray-200"
          >
            Virtual Office
          </NuxtLink>
          <NuxtLink
            to="/private-office"
            class="tw-inline-flex tw-items-center tw-rounded-md tw-px-3 tw-py-1 tw-text-sm tw-text-gray-700 hover:tw-text-gray-900 hover:tw-bg-gray-50 tw-border tw-border-transparent hover:tw-border-gray-200"
          >
            Private Office
          </NuxtLink>
          <NuxtLink
            to="/jasa-konsultan"
            class="tw-inline-flex tw-items-center tw-rounded-md tw-px-3 tw-py-1 tw-text-sm tw-text-gray-700 hover:tw-text-gray-900 hover:tw-bg-gray-50 tw-border tw-border-transparent hover:tw-border-gray-200"
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
