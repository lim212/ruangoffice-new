<template>
  <div>
    <div v-if="!loaded" class="loading">Loading...</div>
    <div v-else id="page-top" class="__migrated-html" v-html="bodyHtml"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue'

const bodyHtml = ref<string>('')
const loaded = ref(false)
let scriptsExecuted = false

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

function executeScriptsFromMigratedHtml() {
  if (scriptsExecuted) return
  try {
    const container = document.querySelector('div.__migrated-html')
    if (!container) return
    const scripts = Array.from(container.querySelectorAll('script')) as HTMLScriptElement[]
    scripts.forEach((oldScript) => {
      const newScript = document.createElement('script')
      // copy attributes
      for (const { name, value } of Array.from(oldScript.attributes)) {
        newScript.setAttribute(name, value)
      }
      if (oldScript.src) {
        // external script
        newScript.src = oldScript.src
      } else {
        // inline script
        newScript.text = oldScript.textContent || ''
      }
      // Append to body so it executes
      document.body.appendChild(newScript)
    })
    scriptsExecuted = true
  } catch (e) {
    console.warn('Failed to execute scripts from migrated HTML', e)
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
    // Execute any scripts that were part of the original body (Bootstrap, Swiper, inline init, etc.)
    executeScriptsFromMigratedHtml()
    // Try hide immediately, then fallback by timeout in case late rendering
    hidePreloader()
    setTimeout(() => { executeScriptsFromMigratedHtml(); hidePreloader() }, 300)
    setTimeout(() => { executeScriptsFromMigratedHtml(); hidePreloader() }, 1500)
  }
})
</script>

<style>
.loading { padding: 2rem; text-align: center; }
.__migrated-html { min-height: 100vh; }
</style>
