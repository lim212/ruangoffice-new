<template>
  <div>
      <template v-if="useLegacy">
        <div id="page-top" class="__migrated-html"></div>
      </template>
      <template v-else>
        <HeroSection />
        <HeroSlider />
        <Services />
        <LatestNews />
      </template>

      <!-- Company Profile -->
      <section v-if="!useLegacy" id="company-profile" class="tw-max-w-6xl tw-mx-auto tw-px-4 tw-py-14 md:tw-py-20">
        <div class="tw-relative tw-group tw-rounded-2xl tw-bg-gradient-to-br tw-from-white tw-to-green-50 tw-shadow-lg tw-overflow-hidden tw-ring-1 tw-ring-green-100">
          <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-items-center tw-gap-8 lg:tw-gap-12 tw-p-6 md:tw-p-10">
            <div class="reveal-up md:tw-max-w-2xl tw-order-2 md:tw-order-1">
              <p class="tw-text-xs tw-tracking-widest tw-font-semibold tw-text-green-700 tw-uppercase">Tentang Ruangoffice</p>
              <h2 class="tw-mt-1 tw-text-2xl md:tw-text-3xl tw-font-extrabold tw-tracking-tight tw-leading-tight tw-bg-clip-text tw-text-transparent tw-bg-gradient-to-r tw-from-emerald-700 tw-to-lime-600">Profil Perusahaan</h2>
              <p class="tw-mt-3 tw-text-gray-700 tw-leading-relaxed tw-text-base md:tw-text-lg tw-max-w-2xl">
                Ruangoffice adalah mitra tepercaya untuk legalitas usaha dan layanan Virtual Office resmi. Kami menangani pendirian badan usaha (PT, PT PMA, CV, Yayasan), pengurusan perizinan, hingga domisili perusahaan secara cepat, transparan, dan sesuai regulasi yang berlaku.
              </p>
              <ul class="tw-mt-5 tw-space-y-3">
                <li class="tw-flex tw-items-start tw-gap-3">
                  <span class="tw-shrink-0 tw-mt-0.5 tw-inline-flex tw-items-center tw-justify-center tw-w-6 tw-h-6 tw-rounded-full tw-bg-green-600 tw-text-white">✓</span>
                  <span class="tw-text-gray-800 tw-leading-relaxed">Konsultasi ahli 1:1 (gratis) sesuai kebutuhan bisnis Anda.</span>
                </li>
                <li class="tw-flex tw-items-start tw-gap-3">
                  <span class="tw-shrink-0 tw-mt-0.5 tw-inline-flex tw-items-center tw-justify-center tw-w-6 tw-h-6 tw-rounded-full tw-bg-green-600 tw-text-white">✓</span>
                  <span class="tw-text-gray-800 tw-leading-relaxed">Proses terukur dan transparan dengan pembaruan progres berkala.</span>
                </li>
                <li class="tw-flex tw-items-start tw-gap-3">
                  <span class="tw-shrink-0 tw-mt-0.5 tw-inline-flex tw-items-center tw-justify-center tw-w-6 tw-h-6 tw-rounded-full tw-bg-green-600 tw-text-white">✓</span>
                  <span class="tw-text-gray-800 tw-leading-relaxed">Dokumen resmi dan valid sesuai OSS/RBA serta regulasi terbaru.</span>
                </li>
                <li class="tw-flex tw-items-start tw-gap-3">
                  <span class="tw-shrink-0 tw-mt-0.5 tw-inline-flex tw-items-center tw-justify-center tw-w-6 tw-h-6 tw-rounded-full tw-bg-green-600 tw-text-white">✓</span>
                  <span class="tw-text-gray-800 tw-leading-relaxed">Alamat kantor representatif di lokasi strategis.</span>
                </li>
              </ul>
              <div class="tw-mt-4 tw-flex tw-flex-wrap tw-gap-2">
                <span class="tw-text-xs tw-font-semibold tw-bg-white tw-border tw-border-green-200 tw-text-green-700 tw-rounded-full tw-px-3 tw-py-1">Berizin Resmi</span>
                <span class="tw-text-xs tw-font-semibold tw-bg-white tw-border tw-border-green-200 tw-text-green-700 tw-rounded-full tw-px-3 tw-py-1">Tim Berpengalaman</span>
                <span class="tw-text-xs tw-font-semibold tw-bg-white tw-border tw-border-green-200 tw-text-green-700 tw-rounded-full tw-px-3 tw-py-1">Pendampingan End-to-End</span>
              </div>
              <p class="tw-mt-4 tw-text-sm tw-text-gray-600 tw-leading-relaxed">
                Siap mempercepat legalitas usaha Anda — mulai dengan konsultasi gratis bersama tim ahli kami.
              </p>
              <div class="tw-mt-6">
                <NuxtLink to="/hubungi-kami" class="tw-inline-flex tw-items-center tw-gap-2 tw-bg-green-600 tw-text-white tw-font-semibold tw-px-5 tw-py-2.5 tw-rounded-lg hover:tw-bg-green-700 tw-shadow hover:tw-shadow-md tw-transition-all focus:tw-ring-2 focus:tw-ring-green-300 focus:tw-offset-2 focus:tw-offset-green-50">
                  Konsultasi Gratis
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="tw-w-5 tw-h-5"><path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7 7a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 0 1-1.06-1.06l5.72-5.72H3.75a.75.75 0 0 1 0-1.5h14.94l-5.72-5.72a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
                </NuxtLink>
              </div>
            </div>
            <div class="reveal-up tw-order-1 md:tw-order-2">
              <div class="tw-relative">
                <div aria-hidden="true" class="tw-absolute -tw-top-6 -tw-right-6 tw-w-36 tw-h-36 md:tw-w-56 md:tw-h-56 tw-bg-emerald-300 tw-rounded-full tw-blur-3xl tw-opacity-40"></div>
                <div aria-hidden="true" class="tw-absolute -tw-bottom-8 -tw-left-8 tw-w-24 tw-h-24 md:tw-w-40 md:tw-h-40 tw-bg-lime-300 tw-rounded-full tw-blur-3xl tw-opacity-40"></div>
                <div class="img-float tw-rounded-xl tw-overflow-hidden tw-shadow tw-ring-1 tw-ring-white/60">
                  <img loading="lazy" src="/assets/img/Header-RuangOffice-Dekstop.png" alt="Ruangoffice – Layanan Legalitas & Virtual Office" class="tw-w-full tw-h-56 sm:tw-h-72 md:tw-h-96 tw-object-cover tw-transition-transform tw-duration-500 group-hover:tw-scale-105" @error="onHeroImageError"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <KbliQuickSearch v-if="!useLegacy" />

      <SectionTestimonials v-if="!useLegacy" />

      <!-- CTA Band -->
      <section v-if="!useLegacy" aria-labelledby="cta-title" class="tw-relative tw-px-0 tw-pt-2">
        <div class="tw-bg-gradient-to-r tw-from-emerald-600 tw-to-lime-600 tw-text-white tw-py-10 md:tw-py-14">
          <div class="tw-max-w-6xl tw-mx-auto tw-px-4 tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-between tw-gap-4">
            <div>
              <h3 id="cta-title" class="tw-text-2xl md:tw-text-3xl tw-font-extrabold tw-tracking-tight">Siap Wujudkan Legalitas Usaha Anda?</h3>
              <p class="tw-mt-1 tw-text-white/90">Diskusikan kebutuhan Anda bersama konsultan kami. Gratis!</p>
            </div>
            <div>
              <NuxtLink to="/hubungi-kami" class="tw-inline-flex tw-items-center tw-gap-2 tw-bg-white tw-text-emerald-700 tw-font-semibold tw-px-5 tw-py-2.5 tw-rounded-lg hover:tw-bg-emerald-50 tw-shadow-md hover:tw-shadow-lg tw-transition-all focus:tw-ring-2 focus:tw-ring-white/60">
                Konsultasi Gratis
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="tw-w-5 tw-h-5"><path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7 7a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 0 1-1.06-1.06l5.72-5.72H3.75a.75.75 0 0 1 0-1.5h14.94l-5.72-5.72a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, nextTick } from "vue";
import { useAppSeoMeta } from "~/composables/useSeoMeta";
import { injectOriginalHtml } from "~/scripts/injectOriginal";

// Render this page on client only to avoid SSR/dev module import issues
definePageMeta({ ssr: false, layoutChrome: false, runningText: false });

// SEO for homepage
useAppSeoMeta({
  title: "Ruangoffice Biro Jasa Legalitas perizinan & Virtual Office #1 Layanan Terbaik",
  description: "Biro Jasa Legalitas Perizinan & Virtual Office #1 dengan layanan terbaik untuk pendirian PT/CV/Firma/Yayasan, PMA, NIB, HAKI, ISO, SIUP, Pajak, dan lainnya.",
  keywords: ["ruangoffice", "jasa legalitas", "perizinan", "virtual office", "pendirian PT", "NIB", "HAKI"],
  url: "https://ruangoffice.online/"
});

const useLegacy = true;
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

function initRevealOnScroll() {
  try {
    const els = Array.from(document.querySelectorAll('.reveal-up')) as HTMLElement[];
    if (!('IntersectionObserver' in window)) {
      for (const el of els) el.classList.add('is-visible');
      return;
    }
    const obs = new IntersectionObserver((entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
    for (const el of els) obs.observe(el);
  } catch (_) {
    // noop
  }
}

// === Legacy "Database Peraturan" support: populate the injected table with data ===
async function fetchPeraturanData(): Promise<any[]> {
  try {
    const res = await fetch('/peraturan.json?ts=' + Date.now(), { cache: 'no-store' });
    if (res.ok) {
      const arr = await res.json();
      if (Array.isArray(arr)) return arr;
    }
  } catch (_) {}
  try {
    const res2 = await fetch('/peraturan.seed.json?ts=' + Date.now(), { cache: 'no-store' });
    if (res2.ok) {
      const arr2 = await res2.json();
      if (Array.isArray(arr2)) return arr2;
    }
  } catch (_) {}
  return [];
}

function sanitizePeraturan(items: any[]): any[] {
  return (items || []).filter((it) => {
    const tahunOk = /^(19|20)\d{2}$/.test(String(it?.tahun || ''));
    const tentangOk = String(it?.tentang || '').trim().length > 3;
    const jenisOk = String(it?.jenis || '').trim().length > 0;
    const nomorOk = String(it?.nomor || '').trim().length > 0;
    return tahunOk && tentangOk && (jenisOk || nomorOk);
  });
}

async function populateRegulationTable() {
  try {
    const table = document.getElementById('regulation') as HTMLTableElement | null;
    if (!table) return;
    // Avoid re-initialization or race conditions across delayed retries
    if ((table as any).__regInitDone || (table as any).__regInitInProgress) return;
    (table as any).__regInitInProgress = true;

    let tbody = table.querySelector('tbody') as HTMLTableSectionElement | null;
    if (!tbody) {
      tbody = document.createElement('tbody');
      table.appendChild(tbody);
    }

    const allData = sanitizePeraturan(await fetchPeraturanData());
    if (!allData.length) {
      (table as any).__regInitInProgress = false;
      return;
    }

    // Store full dataset on the element for later expansion
    (table as any).__regData = allData;

    const initialData = allData.length > 12 ? allData.slice(-12) : allData;

    function createRow(row: any): HTMLTableRowElement {
      const tr = document.createElement('tr');
      const tdJenis = document.createElement('td');
      tdJenis.className = 'text-start';
      tdJenis.textContent = String(row.jenis || '—');
      const tdNomor = document.createElement('td');
      tdNomor.className = 'text-start';
      tdNomor.textContent = String(row.nomor || '—');
      const tdTahun = document.createElement('td');
      tdTahun.className = 'text-start';
      tdTahun.textContent = String(row.tahun || '—');
      const tdTentang = document.createElement('td');
      tdTentang.className = 'text-start';
      tdTentang.textContent = String(row.tentang || '—');
      const tdFile = document.createElement('td');
      tdFile.className = 'text-start';
      const fileUrl = String(row.file || '').trim();
      if (fileUrl) {
        const a = document.createElement('a');
        a.href = fileUrl;
        a.target = '_blank';
        a.rel = 'noopener';
        a.className = 'btn btn-sm btn-primary';
        a.textContent = 'Download';
        tdFile.appendChild(a);
      } else {
        tdFile.textContent = '—';
      }
      tr.appendChild(tdJenis);
      tr.appendChild(tdNomor);
      tr.appendChild(tdTahun);
      tr.appendChild(tdTentang);
      tr.appendChild(tdFile);
      return tr;
    }

    // Render initial subset (last 12)
    tbody.innerHTML = '';
    {
      const frag = document.createDocumentFragment();
      for (const row of initialData) frag.appendChild(createRow(row));
      tbody.appendChild(frag);
    }

    (table as any).__regState = initialData.length === allData.length ? 'full' : 'partial';

    // Add "Lihat semua" button below the table when there are more items
    if (initialData.length < allData.length) {
      const parent = table.parentElement || table;
      let btnWrap = document.getElementById('regulation-view-all') as HTMLElement | null;
      if (!btnWrap) {
        btnWrap = document.createElement('div');
        btnWrap.id = 'regulation-view-all';
        btnWrap.className = 'text-center mt-3';
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'btn btn-primary';
        btn.textContent = 'Lihat semua';
        btn.addEventListener('click', () => {
          const full = ((table as any).__regData as any[]) || [];
          const frag = document.createDocumentFragment();
          for (const row of full) frag.appendChild(createRow(row));
          tbody!.innerHTML = '';
          tbody!.appendChild(frag);
          (table as any).__regState = 'full';
          if (btnWrap) btnWrap.style.display = 'none';
        });
        btnWrap.appendChild(btn);
        parent.appendChild(btnWrap);
      }
    }

    // mark initialized to avoid duplicate work on retries
    (table as any).__regInitDone = true;
    (table as any).__regInitInProgress = false;
  } catch (_) {
    try {
      const table = document.getElementById('regulation') as HTMLTableElement | null;
      if (table) (table as any).__regInitInProgress = false;
    } catch {}
    // noop
  }
}

onMounted(async () => {
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
      initRevealOnScroll();
      // Populate legacy Database Peraturan table if present
      populateRegulationTable();
      setTimeout(() => {
        executeScriptsFromMigratedHtml();
        hidePreloader();
        removeDoubleAngleNoise();
        initRevealOnScroll();
        populateRegulationTable();
      }, 300);
      setTimeout(() => {
        executeScriptsFromMigratedHtml();
        hidePreloader();
        removeDoubleAngleNoise();
        initRevealOnScroll();
        populateRegulationTable();
      }, 1500);
    }
  } else {
    // If we are not using legacy injection, still ensure any preloader overlays are hidden
    hidePreloader();
    initRevealOnScroll();
  }
});

function onHeroImageError(e: Event) {
  try {
    const img = (e?.target as HTMLImageElement | null)
    if (!img) return
    // Avoid infinite loop
    if ((img as any).__fallbackTried) {
      const wrap = img.closest('.img-float') as HTMLElement | null
      if (wrap) wrap.style.display = 'none'
      return
    }
    ;(img as any).__fallbackTried = true
    img.onerror = null
    img.src = '/assets/img/Header-RuangOffice-Dekstop.png'
  } catch (_) {
    // noop
  }
}
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
/* Fallback for text clamping since Tailwind line-clamp plugin isn't configured */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Reveal-up animation */
.reveal-up {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 600ms ease, transform 600ms ease;
}
.reveal-up.is-visible {
  opacity: 1;
  transform: translateY(0);
}
@media (prefers-reduced-motion: reduce) {
  .reveal-up { transition: none; }
}

/* Floating image subtle animation */
.img-float {
  animation: floatY 6s ease-in-out infinite;
  will-change: transform;
}
@keyframes floatY {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
@media (prefers-reduced-motion: reduce) {
  .img-float { animation: none; }
}
</style>
