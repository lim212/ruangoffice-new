<template>
  <div>
    <div v-if="!loaded" class="loading">Loading...</div>
    <div v-else class="__migrated-html" v-html="bodyHtml"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const bodyHtml = ref<string>('')
const loaded = ref(false)

onMounted(async () => {
  try {
    // Fetch the original static HTML that we placed in /public/original.html
    const res = await fetch('/original.html', { cache: 'no-store' })
    const html = await res.text()
    // Extract the content inside <body>...</body>
    const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
    bodyHtml.value = match ? match[1] : html
  } catch (e) {
    console.error('Failed to load original HTML', e)
    bodyHtml.value = '<p>Gagal memuat konten.</p>'
  } finally {
    loaded.value = true
  }
})
</script>

<style>
.loading { padding: 2rem; text-align: center; }
.__migrated-html { min-height: 100vh; }
</style>
