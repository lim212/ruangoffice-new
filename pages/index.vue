<template>
  <div>
    <div v-if="!loaded" class="loading">Loading...</div>
    <div v-else id="page-top" class="__migrated-html" v-html="bodyHtml"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, nextTick } from "vue";

// Render this page on client only to avoid SSR/dev module import issues
definePageMeta({ ssr: false, layout: false });

const bodyHtml = ref<string>("");
const loaded = ref(false);
let scriptsExecuted = false;

function hidePreloader() {
  try {
    const pre = document.getElementById("preloader");
    if (pre) {
      pre.style.display = "none";
      pre.remove?.();
    }
    // Also ensure any overlay with class 'loading-body' is hidden
    const loadingBody = document.querySelector(
      ".loading-body",
    ) as HTMLElement | null;
    if (loadingBody) {
      loadingBody.classList.add("d-none");
      loadingBody.style.display = "none";
    }
    // Restore scroll if any style blocked it
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  } catch (err) {
    // noop
  }
}

async function executeScriptsFromMigratedHtml() {
  if (scriptsExecuted) return;
  scriptsExecuted = true;
  try {
    const container = document.querySelector("div.__migrated-html");
    if (!container) return;

    const scripts = Array.from(
      container.querySelectorAll("script"),
    ) as HTMLScriptElement[];

    // Build a set of existing external script URLs to avoid duplicates
    const existingScripts = Array.from(
      document.querySelectorAll("script[src]"),
    ) as HTMLScriptElement[];
    const existingSrcSet = new Set(
      existingScripts
        .map((s) => {
          try {
            return new URL(s.src, window.location.href).href;
          } catch {
            return s.src;
          }
        })
        .filter(Boolean),
    );

    // Helper: wait for key libraries that inline scripts commonly depend on
    function waitForLibraries(timeoutMs = 5000): Promise<void> {
      const start = Date.now();
      return new Promise((resolve) => {
        const check = () => {
          const hasJQ = typeof (window as any).jQuery !== "undefined" || typeof (window as any).$ !== "undefined";
          const hasSwiper = typeof (window as any).Swiper !== "undefined";
          const hasBootstrap = typeof (window as any).bootstrap !== "undefined";
          if (hasJQ && hasSwiper && hasBootstrap) {
            resolve();
            return;
          }
          if (Date.now() - start > timeoutMs) {
            // Resolve anyway to avoid blocking forever
            resolve();
            return;
          }
          setTimeout(check, 50);
        };
        check();
      });
    }

    // Load a single external script and await its load
    function loadExternalScriptFrom(oldScript: HTMLScriptElement): Promise<void> {
      return new Promise((resolve) => {
        const s = document.createElement("script");
        for (const { name, value } of Array.from(oldScript.attributes)) {
          s.setAttribute(name, value);
        }
        s.src = oldScript.src;
        // Keep defer to avoid blocking parsing while still preserving order in our sequencer
        s.defer = true;
        s.onload = () => resolve();
        s.onerror = () => resolve();
        document.body.appendChild(s);
      });
    }

    // Execute inline script (respecting type/module)
    function runInlineScript(oldScript: HTMLScriptElement) {
      const s = document.createElement("script");
      for (const { name, value } of Array.from(oldScript.attributes)) {
        s.setAttribute(name, value);
      }
      s.text = oldScript.textContent || "";
      document.body.appendChild(s);
    }

    // Process scripts in original order, awaiting externals; delay inline until libs are ready
    for (const oldScript of scripts) {
      if (oldScript.src) {
        let normalized = oldScript.src;
        try {
          normalized = new URL(oldScript.src, window.location.href).href;
        } catch {
          // ignore
        }
        if (existingSrcSet.has(normalized)) {
          // Already present (likely from Nuxt head). Give it a moment to load if needed.
          await waitForLibraries(4000);
        } else {
          existingSrcSet.add(normalized);
          await loadExternalScriptFrom(oldScript);
        }
      } else {
        // Before running inline, ensure primary libs are available
        await waitForLibraries(6000);
        runInlineScript(oldScript);
      }
    }
  } catch (e) {
    console.warn("Failed to execute scripts from migrated HTML", e);
  }
}

onMounted(async () => {
  try {
    // Fetch the original static HTML that we placed in /public/original.html
    const res = await fetch("/original.html", { cache: "no-store" });
    const html = await res.text();
    // Extract the content inside <body>...</body>
    const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    const rawBody = match ? match[1] : html;

    // Inject the full original body content without stripping elements to ensure 1:1 match with original site
    const temp = document.createElement("div");
    temp.innerHTML = rawBody;
    bodyHtml.value = temp.innerHTML;
  } catch (e) {
    console.error("Failed to load original HTML", e);
    bodyHtml.value = "<p>Gagal memuat konten.</p>";
  } finally {
    loaded.value = true;
    await nextTick();
    // Initialize Alpine.js on the injected HTML if available (for x-data components)
    try {
      const container = document.querySelector("div.__migrated-html");
      const Alpine = (window as any).Alpine;
      if (container && Alpine && typeof Alpine.initTree === "function") {
        Alpine.initTree(container);
      }
    } catch (_) {}
    // Execute any scripts that were part of the original body (Bootstrap, Swiper, inline init, etc.)
    executeScriptsFromMigratedHtml();
    // Try hide immediately, then fallback by timeout in case late rendering
    hidePreloader();
    setTimeout(() => {
      executeScriptsFromMigratedHtml();
      hidePreloader();
    }, 300);
    setTimeout(() => {
      executeScriptsFromMigratedHtml();
      hidePreloader();
    }, 1500);
  }
});
</script>

<style>
.loading {
  padding: 2rem;
  text-align: center;
}
.__migrated-html {
  min-height: 100vh;
  overflow-x: hidden;
}
/* Note: Avoid overriding original template styles to keep layout consistent with ruangoffice.online */
</style>
