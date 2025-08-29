<template>
  <div>
    <div v-if="showRunningText" class="running-text tw-w-full tw-bg-green-600 tw-text-white tw-text-base tw-font-medium tw-py-2 tw-text-center tw-overflow-hidden">
      <marquee>
        Kami melayani jasa pendirian PT dan PT PMA secara legal, cepat, dan terpercaya.
        Nikmati juga layanan Virtual Office resmi untuk domisili perusahaan Anda.
      </marquee>
    </div>
    <TopBar v-if="showChrome" />
    <Header v-if="showChrome" />
    <slot />
    <Footer v-if="showChrome" />
    <FloatingActions v-if="showChrome" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import FloatingActions from '~/components/FloatingActions.vue'
const route = useRoute()
// Tampilkan elemen layout kecuali halaman mematikan chrome via meta
const showChrome = computed(() => route.meta.layoutChrome !== false)
// Running text tampil default, bisa dimatikan per-halaman via meta.runningText=false
const showRunningText = computed(() => route.meta.runningText !== false)

// Deduplicate running text if somehow rendered more than once
onMounted(() => {
  if (process.client && document.querySelectorAll('.running-text').length > 1) {
    document.querySelectorAll('.running-text')[1].remove();
  }
})
</script>


