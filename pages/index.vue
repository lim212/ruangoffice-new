<template>
  <div>
    <div v-if="!loaded" class="loading">Loading...</div>
    <div v-else>
      <template v-if="useLegacy">
        <div id="page-top" class="__migrated-html"></div>
      </template>
      <template v-else>
        <Hero
          headline="Layanan Perizinan & Virtual Office Terbaik"
          ctaText="Konsultasi Gratis"
          ctaHref="/hubungi-kami"
        />
        <Services />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, nextTick } from "vue";
import { useAppSeoMeta } from "~/composables/useSeoMeta";
import { injectOriginalHtml } from "~/scripts/injectOriginal";

// Render this page on client only to avoid SSR/dev module import issues
definePageMeta({ ssr: false, layoutChrome: false });

// SEO for homepage
useAppSeoMeta({
  title: "Ruangoffice Biro Jasa Legalitas perizinan & Virtual Office #1 Layanan Terbaik",
  description: "Biro Jasa Legalitas Perizinan & Virtual Office #1 dengan layanan terbaik untuk pendirian PT/CV/Firma/Yayasan, PMA, NIB, HAKI, ISO, SIUP, Pajak, dan lainnya.",
  keywords: ["ruangoffice", "jasa legalitas", "perizinan", "virtual office", "pendirian PT", "NIB", "HAKI"],
  url: "https://www.ruangoffice.com/"
});

const useLegacy = true;
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

    // Helper: wait for key libraries (Swiper, Lightbox, Bootstrap) before running inline initializers
    function waitForLibraries(timeoutMs = 5000): Promise<void> {
      const start = Date.now();
      return new Promise((resolve) => {
        const check = () => {
          const hasSwiper = typeof (window as any).Swiper !== "undefined";
          const hasLightbox = typeof (window as any).lightbox !== "undefined";
          const hasBootstrap = typeof (window as any).bootstrap !== "undefined";
          const hasQuill = typeof (window as any).Quill !== "undefined";
          if (hasSwiper && hasLightbox && hasBootstrap && hasQuill) {
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

    // Ensure Quill library from injected body is available before running inline FAQ initializers
    try {
      const quillScripts = scripts.filter((s) => {
        const src = s.getAttribute("src") || "";
        return /quill(\.min)?\.js/i.test(src) || /cdn\.quilljs\.com/i.test(src);
      }) as HTMLScriptElement[];
      for (const qs of quillScripts) {
        await loadExternalScriptFrom(qs);
      }
    } catch (_) {}

    // Process only inline scripts to avoid reloading conflicting libraries from the original body
    for (const oldScript of scripts) {
      const hasSrc = !!oldScript.getAttribute("src");
      const type = (oldScript.getAttribute("type") || "").toLowerCase();
      if (hasSrc) {
        // We deliberately skip external scripts in the injected body.
        // Nuxt head already loads required libraries (Bootstrap, Swiper, Lightbox, etc.).
        continue;
      }
      if (type === "module") {
        // Do not run module inline scripts from the original body
        continue;
      }
      // Before running inline, ensure primary libs are available
      await waitForLibraries(6000);
      try {
        runInlineScript(oldScript);
      } catch (e) {
        console.warn("Skipped an inline script from migrated HTML due to error", e);
      }
    }
  } catch (e) {
    console.warn("Failed to execute scripts from migrated HTML", e);
  }
}

onMounted(async () => {
  // Ensure the target container exists before injecting to avoid blank page
  loaded.value = true;
  await nextTick();

  if (useLegacy) {
    try {
      await injectOriginalHtml();
    } catch (e) {
      console.error("Failed to inject original HTML", e);
    } finally {
      await nextTick();
      // Initialize Alpine.js on the injected HTML if available (for x-data components)
      try {
        const container = document.querySelector("div.__migrated-html");
        const Alpine = (window as any).Alpine;
        if (container && Alpine && typeof Alpine.initTree === "function") {
          Alpine.initTree(container);
        }
      } catch (_) {}

      // Small utility to remove stray text nodes or elements that only contain '<<' or '>>' (scoped to injected container)
      function removeDoubleAngleNoise() {
        try {
          const containerEl = document.querySelector("div.__migrated-html") as HTMLElement | null;
          const root: ParentNode = containerEl || document.body;
          const walker = document.createTreeWalker(root as Node, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
              const t = (node.nodeValue || "").trim();
              return t === "<<" || t === ">>" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
            },
          } as any);
          const toRemove: Node[] = [];
          // Collect first to avoid mutating while walking
          while (walker.nextNode()) {
            toRemove.push(walker.currentNode);
          }
          for (const n of toRemove) {
            n.parentNode?.removeChild(n);
          }
          // Also remove elements that render only those tokens (no children)
          if (containerEl) {
            const els = Array.from(containerEl.querySelectorAll("*"));
            for (const el of els) {
              if ((el as HTMLElement).children && (el as HTMLElement).children.length > 0) continue;
              const txt = (el.textContent || "").trim();
              if (txt === "<<" || txt === ">>") {
                (el as HTMLElement).remove();
              }
            }
          }
        } catch (_) {
          // noop
        }
      }

      // Execute any scripts that were part of the original body (Bootstrap, Swiper, inline init, etc.)
      executeScriptsFromMigratedHtml();
      // Try hide immediately, then fallback by timeout in case late rendering
      hidePreloader();
      removeDoubleAngleNoise();
      setTimeout(() => {
        executeScriptsFromMigratedHtml();
        hidePreloader();
        removeDoubleAngleNoise();
      }, 300);
      setTimeout(() => {
        executeScriptsFromMigratedHtml();
        hidePreloader();
        removeDoubleAngleNoise();
      }, 1500);
    }
  } else {
    // If we are not using legacy injection, still ensure any preloader overlays are hidden
    hidePreloader();
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
</style>
