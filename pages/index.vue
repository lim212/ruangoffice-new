<template>
  <div>
    <div v-if="!loaded" class="loading">Loading...</div>
    <div v-else class="__migrated-html" v-html="bodyHtml"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue'

const bodyHtml = ref<string>('')
const loaded = ref(false)

function hidePreloader() {
  try {
    const pre = document.getElementById('preloader')
    if (pre) {
      pre.style.display = 'none'
      pre.remove?.()
    }
    // Also ensure any overlay with class 'loading-body' is hidden
    const loadingBody = document.querySelector('.loading-body') as HTMLElement | null
    if (loadingBody) {
      loadingBody.classList.add('d-none')
      loadingBody.style.display = 'none'
    }
    // Restore scroll if any style blocked it
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
  } catch (err) {
    // noop
  }
}

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
    await nextTick()
    // Try hide immediately, then fallback by timeout in case late rendering
    hidePreloader()
    setTimeout(hidePreloader, 300)
    setTimeout(hidePreloader, 1500)
  }
})
</script>

<style>
.loading { padding: 2rem; text-align: center; }
.__migrated-html { min-height: 100vh; }
</style>
