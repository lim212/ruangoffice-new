<template>
  <div>
    <TopBar v-if="showChrome" />
    <RunningInfo v-if="showChrome" />
    <Header v-if="showChrome" />
    <slot />
    <Footer v-if="showChrome" />
    <FloatingActions />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import FloatingActions from '~/components/FloatingActions.vue'
const route = useRoute()
// Tampilkan elemen layout hanya jika halaman tidak mematikan chrome dan bukan halaman beranda
const showChrome = computed(() => route.path !== '/' && route.meta.layoutChrome !== false)
</script>


