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

      <!-- Company Profile -->
      <section v-if="!useLegacy" id="company-profile" class="tw-max-w-6xl tw-mx-auto tw-px-4 tw-py-10">
        <div class="tw-rounded-2xl tw-bg-gradient-to-br tw-from-white tw-to-green-50 tw-shadow-lg tw-overflow-hidden tw-ring-1 tw-ring-green-100">
          <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8 tw-p-6 md:tw-p-10">
            <div class="reveal-up md:tw-max-w-2xl">
              <p class="tw-text-xs tw-tracking-widest tw-font-semibold tw-text-green-700 tw-uppercase">Tentang Ruangoffice</p>
              <h2 class="tw-mt-1 tw-text-2xl md:tw-text-3xl tw-font-extrabold tw-tracking-tight tw-leading-tight tw-uppercase">Profil Perusahaan</h2>
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
                <NuxtLink to="/hubungi-kami" class="tw-inline-flex tw-items-center tw-gap-2 tw-bg-green-600 tw-text-white tw-font-semibold tw-px-5 tw-py-2.5 tw-rounded-lg hover:tw-bg-green-700 tw-shadow hover:tw-shadow-md tw-transition-all">
                  Konsultasi Gratis
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="tw-w-5 tw-h-5"><path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7 7a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 0 1-1.06-1.06l5.72-5.72H3.75a.75.75 0 0 1 0-1.5h14.94l-5.72-5.72a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
                </NuxtLink>
              </div>
            </div>
            <div class="reveal-up">
              <div class="img-float">
                <img loading="lazy" src="/assets/img/Header-RuangOffice-Dekstop.png" alt="Ruangoffice – Layanan Legalitas & Virtual Office" class="tw-w-full tw-h-64 md:tw-h-96 tw-object-cover tw-rounded-xl tw-shadow"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Ringkasan KBLI 2020 -->
      <section v-if="showKbliBox" class="tw-max-w-6xl tw-mx-auto tw-px-4 tw-py-8">
        <div class="tw-rounded-2xl tw-bg-white tw-shadow-lg tw-border tw-p-4 md:tw-p-8">
        <h2 class="tw-font-bold tw-uppercase tw-text-xl md:tw-text-2xl tw-text-center tw-border-b-4 tw-border-black tw-pb-2 tw-mb-6">
          KLASIFIKASI BAKU LAPANGAN USAHA INDONESIA (KBLI) 2020
        </h2>

        <!-- Search bar with suggestions -->
        <div class="tw-relative tw-mb-4">
          <div class="tw-flex tw-flex-col sm:tw-flex-row tw-items-stretch tw-gap-2 sm:tw-gap-0">
            <div class="tw-relative tw-w-full">
              <span class="tw-absolute tw-left-3 tw-top-1/2 -tw-translate-y-1/2 tw-text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="tw-size-5"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 4.243 12.024l4.74 4.743a.75.75 0 1 0 1.06-1.06l-4.743-4.74A6.75 6.75 0 0 0 10.5 3.75Zm-5.25 6.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Z" clip-rule="evenodd"/></svg>
              </span>
              <input
                v-model="kbliQuery"
                @focus="onKbliFocus"
                @blur="onKbliBlur"
                @keydown="onKbliKeydown"
                type="search"
                placeholder="Cari KBLI (kode atau kata kunci)..."
                class="tw-border tw-rounded-lg tw-pl-10 tw-pr-10 tw-py-2 tw-shadow-sm tw-w-full focus:tw-ring-2 focus:tw-ring-green-200 focus:tw-border-green-400"
                aria-label="Cari KBLI"
                autocomplete="off"
              />
              <button v-if="kbliQuery" type="button" class="tw-absolute tw-right-2 tw-top-1/2 -tw-translate-y-1/2 tw-text-gray-400 hover:tw-text-gray-600" @mousedown.prevent @click="kbliQuery=''; showKbliSug=true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="tw-size-5"><path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 0 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
              </button>
            </div>
            <button
              type="button"
              class="tw-ml-2 tw-bg-green-600 tw-text-white tw-rounded-lg tw-px-4 hover:tw-bg-green-700"
              @click="showKbliSug=true"
              aria-label="Cari"
            >
              Cari
            </button>
          </div>

          <!-- Suggestions dropdown -->
          <div v-if="showKbliSug && kbliSuggestions.length" class="tw-absolute tw-z-20 tw-mt-2 tw-w-full tw-bg-white tw-border tw-rounded-lg tw-shadow-lg tw-overflow-hidden" role="listbox" :aria-activedescendant="activeKbliId" @mousedown.prevent>
            <div class="tw-flex tw-gap-2 tw-items-center tw-px-2 tw-py-1 tw-bg-gray-50 tw-text-xs tw-text-gray-600">
              Ketikan: <span class="tw-font-semibold">{{ kbliQuery }}</span> • {{ kbliSuggestions.length }} saran
            </div>
            <button
              v-for="(s,itIdx) in kbliSuggestions"
              :key="'sug-'+s.code"
              :id="'kbli-sug-'+itIdx"
              type="button"
              class="tw-w-full tw-text-left tw-px-3 tw-py-2 hover:tw-bg-green-50 focus:tw-bg-green-50"
              :class="{ 'tw-bg-green-100': itIdx===activeKbliIndex }"
              role="option"
              :aria-selected="itIdx===activeKbliIndex"
              @click="selectKbliSuggestion(s)"
            >
              <div class="tw-flex tw-items-center tw-justify-between">
                <div>
                  <span class="tw-inline-block tw-bg-green-600 tw-text-white tw-text-[11px] tw-font-bold tw-px-1.5 tw-py-0.5 tw-rounded">{{ s.code }}</span>
                  <span class="tw-ml-2 tw-font-medium" v-html="kbliHighlight(s.title)"></span>
                </div>
              </div>
              <div class="tw-text-xs tw-text-gray-500 tw-line-clamp-2" v-html="kbliHighlight(s.description)"></div>
            </button>
            <button type="button" class="tw-w-full tw-text-center tw-text-green-700 tw-font-semibold tw-px-3 tw-py-2 hover:tw-bg-green-50" @click="goToAllKbli">Lihat semua hasil</button>
          </div>
        </div>

        <!-- Grid daftar ringkasan KBLI -->
        <div class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-4">
          <div
            v-for="item in filteredKbli"
            :key="item.code"
            class="tw-bg-white tw-border tw-rounded-lg tw-shadow-md tw-p-4 hover:tw-shadow-lg hover:tw-scale-105 tw-transition-all tw-duration-200"
          >
            <div class="tw-flex tw-items-center tw-gap-2">
              <span class="tw-bg-yellow-400 tw-text-black tw-px-2 tw-py-1 tw-rounded tw-font-bold tw-text-xs">{{ item.code }}</span>
            </div>
            <div class="tw-font-semibold tw-text-lg tw-mt-2">{{ item.title }}</div>
            <p class="tw-text-gray-600 tw-text-sm tw-mt-1 line-clamp-3">{{ item.description }}</p>
          </div>
        </div>

        <div v-if="filteredKbli.length === 0" class="tw-text-center tw-text-sm tw-text-gray-600 tw-mt-4">
          Tidak ada hasil untuk pencarian tersebut.
        </div>

        <!-- Tombol Lihat Semua KBLI -->
        <div class="tw-flex tw-justify-center tw-mt-6">
          <NuxtLink to="/kbli" class="tw-bg-green-600 tw-text-white tw-font-semibold tw-px-6 tw-py-2 tw-rounded-lg hover:tw-bg-green-700 tw-transition">
            Lihat Semua KBLI
          </NuxtLink>
        </div>
        </div>
      </section>

      <SectionTestimonials v-if="!useLegacy" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, nextTick, computed } from "vue";
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
const loaded = ref(false);
let scriptsExecuted = false;

// Control whether to show the improved KBLI box only in modern mode
const showKbliBox = computed(() => !useLegacy);

// KBLI summary state
interface KbliItem { code: string; title: string; description: string }
const kbliQuery = ref<string>("");
const kbli = ref<KbliItem[]>([]);
const filteredKbli = computed(() => {
  const q = kbliQuery.value.trim().toLowerCase();
  if (!q) return kbli.value;
  return kbli.value.filter((item) =>
    item.code.toLowerCase().includes(q) ||
    item.title.toLowerCase().includes(q) ||
    (item.description || "").toLowerCase().includes(q)
  );
});

// Lightweight client-side index for better suggestions performance
interface KbliIdx { code: string; title: string; description: string; lcCode: string; lcTitle: string; lcDesc: string }
const kbliIndex = computed<KbliIdx[]>(() => (kbli.value || []).map((it) => ({
  code: it.code,
  title: it.title,
  description: it.description,
  lcCode: String(it.code || '').toLowerCase(),
  lcTitle: String(it.title || '').toLowerCase(),
  lcDesc: String(it.description || '').toLowerCase(),
})));

// Suggestion dropdown state and behavior
const showKbliSug = ref(false);
const activeKbliIndex = ref(0);
const activeKbliId = computed(() => `kbli-sug-${activeKbliIndex.value}`);

function kbliEscapeHtml(s: string): string {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function kbliEscapeRegExp(s: string): string {
  return String(s || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function kbliHighlight(text: string): string {
  const t = kbliEscapeHtml(String(text || ''));
  const q = kbliQuery.value.trim();
  if (!q) return t;
  try {
    const re = new RegExp(`(${kbliEscapeRegExp(q)})`, 'ig');
    return t.replace(re, '<mark>$1</mark>');
  } catch {
    return t;
  }
}

function kbliScore(it: KbliIdx, q: string): number {
  if (!q) return 999;
  if (it.lcCode === q) return 0;
  if (it.lcCode.startsWith(q)) return 1;
  if (it.lcTitle.includes(q)) return 2;
  if (it.lcDesc.includes(q)) return 3;
  return 999;
}

const kbliSuggestions = computed(() => {
  const q = kbliQuery.value.trim().toLowerCase();
  if (!q) return [] as KbliIdx[];
  const list = kbliIndex.value
    .map((it) => ({ it, score: kbliScore(it, q) }))
    .filter((s) => s.score < 999)
    .sort((a, b) => (a.score - b.score) || String(a.it.code || '').localeCompare(String(b.it.code || '')))
    .slice(0, 12)
    .map((s) => s.it);
  // reset active index when list updates
  activeKbliIndex.value = Math.min(activeKbliIndex.value, Math.max(0, list.length - 1));
  return list;
});

function onKbliFocus() {
  if (kbliSuggestions.value.length) showKbliSug.value = true;
}
function onKbliBlur() {
  // Delay to allow click inside the dropdown (mousedown handled)
  setTimeout(() => { showKbliSug.value = false; }, 120);
}
function onKbliKeydown(e: KeyboardEvent) {
  if (!showKbliSug.value && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
    showKbliSug.value = true;
  }
  if (!kbliSuggestions.value.length) return;
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    activeKbliIndex.value = (activeKbliIndex.value + 1) % kbliSuggestions.value.length;
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    activeKbliIndex.value = (activeKbliIndex.value - 1 + kbliSuggestions.value.length) % kbliSuggestions.value.length;
  } else if (e.key === 'Enter') {
    e.preventDefault();
    const s = kbliSuggestions.value[activeKbliIndex.value];
    if (s) selectKbliSuggestion(s);
  } else if (e.key === 'Escape') {
    showKbliSug.value = false;
  }
}

function selectKbliSuggestion(s: KbliIdx) {
  // Fill query and close suggestions
  kbliQuery.value = s.code;
  showKbliSug.value = false;
}

import { useRouter } from '#imports'
const router = useRouter();
function goToAllKbli() {
  router.push('/kbli');
  showKbliSug.value = false;
}

async function loadKbli() {
  try {
    const res = await fetch('/kbli.json', { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data)) kbli.value = data as KbliItem[];
    }
  } catch (e) {
    console.warn('KBLI data not available', e);
  }
}

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
  // Ensure the target container exists before injecting to avoid blank page
  loaded.value = true;
  await nextTick();
  // Load KBLI data only in modern mode
  if (showKbliBox.value) {
    loadKbli();
  }

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
