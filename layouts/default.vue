<template>
  <div>
    <div v-if="showRunningText || showChrome" class="tw-sticky tw-top-0 tw-z-50">
      <RunningText v-if="showRunningText" />

      <!-- Sticky, clean header -->
      <header v-if="showChrome" class="tw-bg-white/95 tw-backdrop-blur tw-border-b tw-border-neutral-200 tw-shadow-sm">
      <div class="tw-mx-auto tw-max-w-7xl tw-px-4 sm:tw-px-6 lg:tw-px-8">
        <div class="tw-flex tw-items-center tw-justify-between tw-h-16">
          <!-- Brand -->
          <NuxtLink to="/" class="tw-flex tw-items-center tw-gap-2 tw-shrink-0" aria-label="RuangOffice">
            <img src="/assets/img/logo-ro.ico" alt="RuangOffice" class="tw-h-8 tw-w-8 tw-rounded-sm" />
            <span class="tw-font-extrabold tw-text-neutral-900">RuangOffice</span>
          </NuxtLink>

          <!-- Desktop navigation -->
          <nav class="tw-hidden md:tw-flex tw-items-center tw-gap-6">
            <NuxtLink to="/" class="tw-text-sm tw-font-medium tw-text-neutral-700 hover:tw-text-emerald-700 tw-transition-colors">Home</NuxtLink>
            <NuxtLink to="/berita" class="tw-text-sm tw-font-medium tw-text-neutral-700 hover:tw-text-emerald-700 tw-transition-colors">Berita</NuxtLink>
            <NuxtLink to="/price" class="tw-text-sm tw-font-medium tw-text-neutral-700 hover:tw-text-emerald-700 tw-transition-colors">Pricing</NuxtLink>
          </nav>

          <!-- Desktop CTA -->
          <div class="tw-hidden md:tw-flex tw-items-center tw-gap-3">
            <NuxtLink to="/hubungi-kami" class="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-lg tw-bg-emerald-600 tw-text-white tw-px-4 tw-py-2 tw-text-sm hover:tw-bg-emerald-700 tw-shadow-sm tw-transition">
              Konsultasi Gratis
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="tw-w-4 tw-h-4"><path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7 7a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 0 1-1.06-1.06l5.72-5.72H3.75a.75.75 0 0 1 0-1.5h14.94l-5.72-5.72a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
            </NuxtLink>
          </div>

          <!-- Mobile toggle -->
          <button type="button"
                  class="tw-inline-flex md:tw-hidden tw-items-center tw-justify-center tw-rounded-md tw-p-2 tw-text-neutral-700 hover:tw-bg-neutral-100 tw-transition"
                  @click="mobileOpen = !mobileOpen"
                  :aria-expanded="mobileOpen.toString()"
                  aria-controls="mobile-menu"
                  aria-label="Toggle menu">
            <svg v-if="!mobileOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="tw-w-6 tw-h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="tw-w-6 tw-h-6"><path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 0 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
          </button>
        </div>
      </div>

      <!-- Mobile panel -->
      <div v-show="mobileOpen" id="mobile-menu" class="tw-md:hidden tw-border-t tw-border-neutral-200 tw-bg-white">
        <div class="tw-mx-auto tw-max-w-7xl tw-px-4 sm:tw-px-6 lg:tw-px-8 tw-py-3 tw-space-y-1">
          <NuxtLink @click="closeMobile" to="/" class="tw-block tw-rounded-md tw-px-3 tw-py-2 tw-text-neutral-700 hover:tw-bg-neutral-100">Home</NuxtLink>
          <NuxtLink @click="closeMobile" to="/berita" class="tw-block tw-rounded-md tw-px-3 tw-py-2 tw-text-neutral-700 hover:tw-bg-neutral-100">Berita</NuxtLink>
          <NuxtLink @click="closeMobile" to="/price" class="tw-block tw-rounded-md tw-px-3 tw-py-2 tw-text-neutral-700 hover:tw-bg-neutral-100">Pricing</NuxtLink>
          <NuxtLink @click="closeMobile" to="/hubungi-kami" class="tw-block tw-rounded-md tw-px-3 tw-py-2 tw-bg-emerald-50 tw-text-emerald-800 tw-font-semibold">Konsultasi Gratis</NuxtLink>
        </div>
      </div>
    </header>
    </div>

    <slot />
    <Footer v-if="showChrome" />
    <FloatingActions v-if="showChrome" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import FloatingActions from '~/components/FloatingActions.vue'
const route = useRoute()
const showChrome = computed(() => route.meta.layoutChrome !== false)
const showRunningText = computed(() => route.meta.runningText !== false)

const mobileOpen = ref(false)
function closeMobile() { mobileOpen.value = false }
watch(() => route.fullPath, () => { mobileOpen.value = false })

// Deduplicate running text if somehow rendered more than once
onMounted(() => {
  if (process.client && document.querySelectorAll('.running-text').length > 1) {
    document.querySelectorAll('.running-text')[1].remove();
  }
})
</script>


