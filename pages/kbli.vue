<template>
  <section class="kbli-page">
    <div class="container my-4">
      <div class="row g-3 align-items-end kbli-toolbar">
        <div class="col-12">
          <h1 class="h3 mb-0">KBLI Berbasis Risiko</h1>
          <p class="text-muted mb-0">Cari KBLI (kode/judul) dan lihat uraian secara ringkas. Tampilan terinspirasi OSS RBA untuk kemudahan navigasi.</p>
          <div class="kbli-underline"></div>
        </div>
        <div class="col-12 col-md-8 position-relative">
          <label for="kbliSearch" class="form-label">Cari</label>
          <div class="input-group">
            <span class="input-group-text"><i class="fas fa-search"></i></span>
            <input id="kbliSearch" v-model="search" @focus="onSearchFocus" @blur="onSearchBlur" @keydown="onSearchKeydown" type="text" class="form-control" placeholder="Cari kode, judul, atau uraian KBLI..." autocomplete="off" />
            <button v-if="search" class="btn btn-outline-secondary" type="button" @mousedown.prevent @click="search = ''; onSearchFocus()">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div v-if="showSuggestions" class="kbli-suggest position-absolute mt-1 bg-white border rounded shadow w-100" style="z-index: 1050; max-height: 60vh; overflow: auto;">
            <div class="border-bottom bg-light sticky-top px-2 py-1 d-flex align-items-center gap-2" role="tablist" aria-label="Filter pencarian cepat">
              <button type="button" class="btn btn-sm" :class="searchScope==='all' ? 'btn-primary' : 'btn-outline-primary'" @mousedown.prevent @click="setScope('all')">Semua KBLI</button>
              <button type="button" class="btn btn-sm" :class="searchScope==='code' ? 'btn-primary' : 'btn-outline-primary'" @mousedown.prevent @click="setScope('code')">Kode KBLI</button>
              <button type="button" class="btn btn-sm" :class="searchScope==='title' ? 'btn-primary' : 'btn-outline-primary'" @mousedown.prevent @click="setScope('title')">Judul KBLI</button>
              <button type="button" class="btn btn-sm" :class="searchScope==='description' ? 'btn-primary' : 'btn-outline-primary'" @mousedown.prevent @click="setScope('description')">Uraian KBLI</button>
            </div>
            <div class="list-group list-group-flush" role="listbox" :aria-activedescendant="activeSuggestionId">
              <button v-for="(it, i) in quickResults" :key="'q-'+it.code" :id="'sug-'+i" type="button" class="list-group-item list-group-item-action d-flex justify-content-between align-items-start" :class="{ 'active': i===activeIndex }" data-bs-toggle="modal" data-bs-target="#kbliDetailModal" role="option" :aria-selected="i===activeIndex" @click="selectSuggestion(it)">
                <div>
                  <span class="badge bg-primary me-2 fw-bold">{{ it.code }}</span>
                  <span class="fw-semibold" v-html="highlight(it.title)"></span>
                </div>
                <span class="badge bg-dark-subtle text-dark" v-if="it.section" :title="getSectionLabel(it.section)">{{ it.section }}</span>
              </button>
              <button v-if="filteredItems.length > quickResults.length" type="button" class="list-group-item list-group-item-action text-center text-primary fw-semibold" @click="viewAll">
                Lihat semua ({{ filteredItems.length.toLocaleString('id-ID') }})
              </button>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <label for="kbliCat" class="form-label">Kategori</label>
          <select id="kbliCat" v-model="category" class="form-select">
            <option value="">Semua KBLI</option>
            <option v-for="opt in categoryOptions" :key="opt.value" :value="opt.value">
              {{ opt.value }} — {{ opt.label }}
            </option>
          </select>
        </div>
        <div class="col-12 d-flex justify-content-between flex-wrap gap-2">
          <div class="btn-group">
            <button type="button" class="btn btn-outline-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fa-solid fa-file-export me-1"></i> Export CSV
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#" @click.prevent="downloadFilteredCSV('page')">
                  Halaman ini ({{ paginatedItems.length.toLocaleString('id-ID') }})
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#" @click.prevent="downloadFilteredCSV('all')">
                  Semua hasil ({{ totalItems.toLocaleString('id-ID') }})
                </a>
              </li>
            </ul>
          </div>
          <button type="button" class="btn btn-outline-secondary ms-auto" @click="resetFilters" :disabled="!search && !category">
            Reset filter
          </button>
        </div>
        <div class="col-12">
          <div class="d-flex flex-wrap gap-2">
            <button type="button" class="btn btn-sm" :class="category === '' ? 'btn-primary' : 'btn-outline-primary'" @click="category = ''">Semua ({{ countAll.toLocaleString('id-ID') }})</button>
            <button v-for="opt in categoryOptions" :key="'chip-'+opt.value" type="button" class="btn btn-sm" :class="category === opt.value ? 'btn-primary' : 'btn-outline-primary'" @click="category = opt.value">
              {{ opt.value }} ({{ (countsMap[opt.value] || 0).toLocaleString('id-ID') }})
            </button>
          </div>
        </div>
      </div>

      <!-- Quick 4 cards (popular search shortcuts) -->
      <div class="ro-quick-grid row g-3 mt-3">
        <div class="col-6 col-md-3">
          <button type="button" class="ro-quick-card w-100" @click="setQuick('Virtual Office')">
            <div class="ro-quick-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h2M12 7h2M8 11h2M12 11h2M8 15h2M12 15h2"/></svg>
            </div>
            <div class="ro-quick-title">Virtual Office</div>
            <div class="ro-quick-sub">Alamat bisnis resmi</div>
          </button>
        </div>
        <div class="col-6 col-md-3">
          <button type="button" class="ro-quick-card w-100" @click="setQuick('Pendirian PT')">
            <div class="ro-quick-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h6"/></svg>
            </div>
            <div class="ro-quick-title">Pendirian PT</div>
            <div class="ro-quick-sub">Legalitas usaha</div>
          </button>
        </div>
        <div class="col-6 col-md-3">
          <button type="button" class="ro-quick-card w-100" @click="setQuick('NIB')">
            <div class="ro-quick-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M8 12l-2 6l6-2l6 2l-2-6"/></svg>
            </div>
            <div class="ro-quick-title">NIB</div>
            <div class="ro-quick-sub">Nomor Induk Berusaha</div>
          </button>
        </div>
        <div class="col-6 col-md-3">
          <button type="button" class="ro-quick-card w-100" @click="setQuick('HAKI')">
            <div class="ro-quick-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 4v5c0 5-3.5 8-7 9c-3.5-1-7-4-7-9V7l7-4z"/></svg>
            </div>
            <div class="ro-quick-title">HAKI</div>
            <div class="ro-quick-sub">Merek Dagang</div>
          </button>
        </div>
      </div>

      <div class="d-flex justify-content-between align-items-center mt-3">
        <small class="text-muted">Menampilkan {{ displayStart.toLocaleString('id-ID') }}–{{ displayEnd.toLocaleString('id-ID') }} dari {{ totalItems.toLocaleString('id-ID') }} KBLI</small>
        <div v-if="pending" class="text-warning"><i class="fa-solid fa-circle-notch fa-spin"></i> Memuat data…</div>
      </div>

      <div v-if="error" class="alert alert-danger mt-3">
        Terjadi kesalahan saat memuat data KBLI. Silakan coba lagi.
      </div>

      <div v-if="pending && !error" class="mt-3">
        <div class="list-group">
          <div v-for="n in 6" :key="'sk-'+n" class="list-group-item">
            <div class="d-flex w-100 justify-content-between align-items-start">
              <div class="placeholder-glow w-100">
                <span class="placeholder col-1 me-2"></span>
                <span class="placeholder col-7"></span>
              </div>
              <span class="badge bg-dark-subtle text-dark placeholder col-1">&nbsp;</span>
            </div>
            <div class="placeholder-glow mt-2">
              <span class="placeholder col-12"></span>
              <span class="placeholder col-10"></span>
            </div>
          </div>
        </div>
      </div>

      <div v-if="!pending && !error" id="kbliList" class="mt-3">
        <div v-if="filteredItems.length === 0" class="alert alert-warning">
          Tidak ada hasil yang cocok.
        </div>

        <div v-else class="list-group">
          <template v-for="(it, idx) in paginatedItems" :key="it.code">
            <div v-if="!category && !search && it.section && (idx === 0 || paginatedItems[idx - 1].section !== it.section)" class="list-group-item list-group-item-secondary fw-semibold">
              Kategori {{ it.section }} — {{ getSectionLabel(it.section) }}
            </div>
            <article class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between align-items-start">
              <h2 class="h6 mb-1">
                <span class="badge bg-primary me-2 fw-bold">{{ it.code }}</span>
                <span v-html="highlight(it.title)"></span>
              </h2>
              <span class="badge bg-dark-subtle text-dark" v-if="it.section" :title="getSectionLabel(it.section)">
                {{ it.section }}
              </span>
            </div>
            <p class="mb-2 text-muted" v-html="highlight(it.description)"></p>
            <div class="d-flex flex-wrap align-items-center gap-2 mb-2">
              <span v-if="it.risk" :class="['badge', riskClass(it.risk)]">Tingkat Risiko: {{ riskLabel(it.risk) }}</span>
              <span v-for="(perm, pidx) in parsePermits(it.permits)" :key="'perm-'+it.code+'-'+pidx" class="badge bg-warning text-dark">{{ perm }}</span>
            </div>
            <div class="d-flex gap-2 flex-wrap">
              <button type="button" class="btn btn-sm btn-outline-primary" @click="copyCode(it.code)">
                <i class="fa-regular fa-copy me-1"></i>
                <span v-if="lastCopiedCode === it.code">Tersalin</span>
                <span v-else>Salin</span>
              </button>
              <button type="button" class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#kbliDetailModal" @click="openDetail(it)">
                <i class="fa-regular fa-circle-question me-1"></i> Detail
              </button>
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fa-solid fa-download me-1"></i> Download
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#" @click.prevent="downloadCSV(it)"><i class="fa-solid fa-file-csv me-2"></i>CSV</a></li>
                  <li><a class="dropdown-item" href="#" @click.prevent="downloadPDF(it)"><i class="fa-solid fa-file-pdf me-2"></i>PDF</a></li>
                </ul>
              </div>
              <button type="button" class="btn btn-sm btn-outline-info" @click="shareWhatsApp(it)">
                <i class="fa-brands fa-whatsapp me-1"></i> Bagikan
              </button>
            </div>
          </article>
          </template>
        </div>

        <nav class="d-flex justify-content-between align-items-center mt-3" aria-label="Navigasi halaman KBLI">
          <button type="button" class="btn btn-outline-secondary" @click="prevPage" :disabled="page <= 1">Sebelumnya</button>
          <small class="text-muted">Halaman {{ page }} dari {{ totalPages }}</small>
          <button type="button" class="btn btn-outline-secondary" @click="nextPage" :disabled="page >= totalPages || totalItems === 0">Berikutnya</button>
        </nav>

        <!-- Bottom info/CTA box -->
        <div class="ro-bottom-box mt-4">
          <div class="ro-bottom-inner">
            <div class="ro-bottom-text">
              <h3 class="ro-bottom-title">Butuh bantuan memilih KBLI?</h3>
              <p class="ro-bottom-desc">Pilih cepat kata kunci populer atau konsultasi gratis via WhatsApp.</p>
              <div class="ro-bottom-chips">
                <button type="button" class="ro-chip" @click="setQuick('Virtual Office')">Virtual Office</button>
                <button type="button" class="ro-chip" @click="setQuick('Pendirian PT')">Pendirian PT</button>
                <button type="button" class="ro-chip" @click="setQuick('NIB')">NIB</button>
                <button type="button" class="ro-chip" @click="setQuick('HAKI')">HAKI</button>
                <button type="button" class="ro-chip" @click="setQuick('BPOM')">BPOM</button>
                <button type="button" class="ro-chip" @click="setQuick('PKP')">PKP</button>
              </div>
            </div>
            <div class="ro-bottom-cta">
              <a href="https://wa.me/62811113666" target="_blank" rel="noopener" class="btn btn-success ro-wa-btn">
                <i class="fa-brands fa-whatsapp me-2"></i> Konsultasi WhatsApp
              </a>
            </div>
          </div>
        </div>

        <!-- Detail Modal -->
        <div class="modal fade" id="kbliDetailModal" tabindex="-1" aria-labelledby="kbliDetailLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="kbliDetailLabel">
                  <template v-if="selectedItem">
                    <span class="badge bg-primary me-2 fw-bold">{{ selectedItem.code }}</span>
                    {{ selectedItem.title }}
                  </template>
                  <template v-else>
                    Detail KBLI
                  </template>
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p class="mb-0" v-if="selectedItem" v-html="highlight(selectedItem.description)"></p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-outline-primary" v-if="selectedItem" @click="copyCode(selectedItem.code)">
                  <i class="fa-regular fa-copy me-1"></i> Salin Kode
                </button>
                <div class="btn-group" v-if="selectedItem">
                  <button type="button" class="btn btn-outline-success dropdown-toggle" data-bs-toggle="dropdown">Download</button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#" @click.prevent="downloadCSV(selectedItem)"><i class="fa-solid fa-file-csv me-2"></i>CSV</a></li>
                    <li><a class="dropdown-item" href="#" @click.prevent="downloadPDF(selectedItem)"><i class="fa-solid fa-file-pdf me-2"></i>PDF</a></li>
                  </ul>
                </div>
                <button type="button" class="btn btn-outline-info" v-if="selectedItem" @click="shareWhatsApp(selectedItem)">
                  <i class="fa-brands fa-whatsapp me-1"></i> Bagikan
                </button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


</template>

<script setup lang="ts">
import { computed, ref, watch, onMounted } from 'vue'
import { useFetch } from '#app'
import { useRoute, useRouter } from '#imports'
import { useAppSeoMeta } from '~/composables/useSeoMeta'

useAppSeoMeta({
  title: 'KBLI — RuangOffice',
  description: 'Cari dan filter daftar KBLI (Klasifikasi Baku Lapangan Usaha Indonesia) berdasarkan kode, judul, dan uraian.',
  keywords: ['kbli', 'klasifikasi', 'usaha', 'pencarian', 'filter']
})

// Category mapping based on first two digits of KBLI code
const SECTION_MAP: { range: [number, number] | number[]; section: string; label: string }[] = [
  { range: [1, 3], section: 'A', label: 'Pertanian, Kehutanan, dan Perikanan' },
  { range: [5, 9], section: 'B', label: 'Pertambangan dan Penggalian' },
  { range: [10, 33], section: 'C', label: 'Industri Pengolahan' },
  { range: [35, 35], section: 'D', label: 'Pengadaan Listrik, Gas, Uap/ Air Panas' },
  { range: [36, 39], section: 'E', label: 'Pengadaan Air, Pengelolaan Sampah & Daur Ulang' },
  { range: [41, 43], section: 'F', label: 'Konstruksi' },
  { range: [45, 47], section: 'G', label: 'Perdagangan Besar dan Eceran; Reparasi Mobil & Motor' },
  { range: [49, 53], section: 'H', label: 'Pengangkutan dan Pergudangan' },
  { range: [55, 56], section: 'I', label: 'Penyediaan Akomodasi dan Makan Minum' },
  { range: [58, 63], section: 'J', label: 'Informasi dan Komunikasi' },
  { range: [64, 66], section: 'K', label: 'Jasa Keuangan dan Asuransi' },
  { range: [68, 68], section: 'L', label: 'Real Estat' },
  { range: [69, 75], section: 'M', label: 'Jasa Profesional, Ilmiah dan Teknis' },
  { range: [77, 82], section: 'N', label: 'Jasa Persewaan, Ketenagakerjaan, Agen Perjalanan, dan Penunjang Usaha' },
  { range: [84, 84], section: 'O', label: 'Administrasi Pemerintahan, Pertahanan dan Jaminan Sosial Wajib' },
  { range: [85, 85], section: 'P', label: 'Pendidikan' },
  { range: [86, 88], section: 'Q', label: 'Jasa Kesehatan dan Kegiatan Sosial' },
  { range: [90, 93], section: 'R', label: 'Kesenian, Hiburan dan Rekreasi' },
  { range: [94, 96], section: 'S', label: 'Kegiatan Jasa Lainnya' },
  { range: [97, 98], section: 'T', label: 'Kegiatan Rumah Tangga Sebagai Pemberi Kerja' },
  { range: [99, 99], section: 'U', label: 'Kegiatan Badan Internasional dan Ekstra Internasional' }
]

function getSection(code: string): string {
  if (!code) return ''
  const two = Number(code.slice(0, 2))
  for (const m of SECTION_MAP) {
    const [start, end] = m.range as [number, number]
    if (two >= start && two <= end) return m.section
  }
  return ''
}

function getSectionLabel(section: string): string {
  const found = SECTION_MAP.find(m => m.section === section)
  return found ? found.label : ''
}

const { data, pending, error } = await useFetch('/kbli.json', { server: false, key: 'kbli-data', default: () => [] as any[] })

// Simple table data refs for requirement
const kbliData = ref<any[]>([])
watch(data, (val) => {
  const v = (val as any) ?? []
  kbliData.value = Array.isArray(v) ? v : []
}, { immediate: true })

const query = ref('')
const filteredTable = computed(() => {
  const q = (query.value || '').toLowerCase().trim()
  if (!q) return kbliData.value
  return kbliData.value.filter((it: any) => {
    const code = String(it.code || '').toLowerCase()
    const title = String(it.title || '').toLowerCase()
    const desc = String(it.description || '').toLowerCase()
    return code.includes(q) || title.includes(q) || desc.includes(q)
  })
})

// Local reactive states
const search = ref('')
const category = ref('') // '' = All, otherwise 'A'..'U'

// Build category options from map
const categoryOptions = computed(() => SECTION_MAP.map(m => ({ value: m.section, label: m.label })))

// Enrich items with section computed
const items = computed(() => {
  const arr: any[] = (data.value || []).map((it: any) => ({
    code: it.code,
    title: it.title,
    description: it.description,
    section: getSection(String(it.code || '')),
    // optional fields if dataset provides
    risk: it.risk || it.risk_level || it.tingkat_risiko || '',
    permits: it.permits || it.perizinan || it.output || it.outputs || null
  }))
  const sectionOrder = (s: string) => {
    const idx = SECTION_MAP.findIndex(m => m.section === s)
    return idx === -1 ? 999 : idx
  }
  return arr.sort((a, b) => {
    const sa = sectionOrder(a.section)
    const sb = sectionOrder(b.section)
    if (sa !== sb) return sa - sb
    return String(a.code || '').localeCompare(String(b.code || ''))
  })
})

const normalized = (s: string) => (s || '').toLowerCase()

function escapeRegExp(s: string): string {
  return (s || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function highlight(text: string): string {
  const t = String(text || '')
  const q = search.value.trim()
  if (!q) return escapeHtml(t).replace(/\r?\n/g, '<br>')
  const safe = escapeHtml(t)
  const re = new RegExp(`(${escapeRegExp(q)})`, 'ig')
  return safe.replace(re, '<mark>$1</mark>').replace(/\r?\n/g, '<br>')
}

// Optional: map risk level to human label (case-insensitive)
function riskLabel(v: any): string {
  const s = String(v || '').trim().toLowerCase()
  if (!s) return ''
  if (['r', 'rendah', 'low'].includes(s)) return 'Rendah'
  if (['mr', 'menengah rendah', 'medium low', 'menengah-rendah'].includes(s)) return 'Menengah Rendah'
  if (['mt', 'menengah tinggi', 'medium high', 'menengah-tinggi'].includes(s)) return 'Menengah Tinggi'
  if (['t', 'tinggi', 'high'].includes(s)) return 'Tinggi'
  return (s.charAt(0).toUpperCase() + s.slice(1))
}

// Optional: map risk level to bootstrap badge class
function riskClass(v: any): string {
  const s = String(v || '').trim().toLowerCase()
  if (['r', 'rendah', 'low'].includes(s)) return 'bg-success'
  if (['mr', 'menengah rendah', 'medium low', 'menengah-rendah'].includes(s)) return 'bg-primary'
  if (['mt', 'menengah tinggi', 'medium high', 'menengah-tinggi'].includes(s)) return 'bg-warning text-dark'
  if (['t', 'tinggi', 'high'].includes(s)) return 'bg-danger'
  return 'bg-secondary'
}

// Normalize permits/output into array of chips
function parsePermits(v: any): string[] {
  if (!v) return []
  if (Array.isArray(v)) return v.map(x => String(x || '').trim()).filter(Boolean)
  const s = String(v)
  // split by comma/semicolon/pipe
  return s.split(/[,;|]/).map(x => x.trim()).filter(Boolean)
}

const filteredItems = computed(() => {
  const q = normalized(search.value)
  const cat = category.value
  return items.value.filter(it => {
    if (cat && it.section !== cat) return false
    if (!q) return true
    return (
      normalized(it.code).includes(q) ||
      normalized(it.title).includes(q) ||
      normalized(it.description).includes(q)
    )
  })
})

// Counts for category chips (based on current search only)
const searchOnlyItems = computed(() => {
  const q = normalized(search.value)
  if (!q) return items.value
  return items.value.filter(it => (
    normalized(it.code).includes(q) ||
    normalized(it.title).includes(q) ||
    normalized(it.description).includes(q)
  ))
})

const countAll = computed(() => searchOnlyItems.value.length)
const countsMap = computed((): Record<string, number> => {
  const map: Record<string, number> = {}
  for (const it of searchOnlyItems.value) {
    const s = it.section || ''
    map[s] = (map[s] || 0) + 1
  }
  return map
})

// Quick suggestions (up to 24) shown under the search box
const suggestionsOpen = ref(false)
const QUICK_LIMIT = 24

// Search scope for quick suggestions
const searchScope = ref<'all'|'code'|'title'|'description'>('all')
function setScope(s: 'all'|'code'|'title'|'description') {
  searchScope.value = s
  activeIndex.value = 0
}

const quickResults = computed(() => {
  const q = normalized(search.value)
  if (!q) return [] as any[]
  const list = filteredItems.value
  const scored = list.map((it) => {
    const code = (it.code || '').toLowerCase()
    const title = (it.title || '').toLowerCase()
    const desc = (it.description || '').toLowerCase()
    // Filter by scope first
    if (searchScope.value === 'code' && !code.includes(q)) return { it, score: 999 }
    if (searchScope.value === 'title' && !title.includes(q)) return { it, score: 999 }
    if (searchScope.value === 'description' && !desc.includes(q)) return { it, score: 999 }
    let score = 999
    if (code === q) score = 0
    else if (code.startsWith(q)) score = 1
    else if (title.includes(q)) score = 2
    else if (desc.includes(q)) score = 3
    return { it, score }
  }).sort((a, b) => (a.score - b.score) || String(a.it.code || '').localeCompare(String(b.it.code || '')))
  return scored.filter(s => s.score < 999).slice(0, QUICK_LIMIT).map(s => s.it)
})

// keyboard navigation
const activeIndex = ref(0)
const activeSuggestionId = computed(() => quickResults.value.length ? `sug-${activeIndex.value}` : undefined)

watch(search, () => { activeIndex.value = 0 })
watch(searchScope, () => { activeIndex.value = 0 })
watch(quickResults, () => { if (activeIndex.value >= quickResults.value.length) activeIndex.value = 0 })

const showSuggestions = computed(() => {
  return suggestionsOpen.value && search.value.trim().length > 0 && quickResults.value.length > 0
})

function onSearchFocus() {
  suggestionsOpen.value = true
}
let blurTimer: ReturnType<typeof setTimeout> | null = null
function onSearchBlur() {
  if (blurTimer) clearTimeout(blurTimer)
  blurTimer = setTimeout(() => { suggestionsOpen.value = false }, 150)
}

function onSearchKeydown(e: KeyboardEvent) {
  if (!showSuggestions.value) return
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    activeIndex.value = (activeIndex.value + 1) % quickResults.value.length
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    activeIndex.value = (activeIndex.value - 1 + quickResults.value.length) % quickResults.value.length
  } else if (e.key === 'Enter') {
    e.preventDefault()
    const it = quickResults.value[activeIndex.value]
    if (it) selectSuggestion(it)
  } else if (e.key === 'Escape') {
    suggestionsOpen.value = false
  }
}

function selectSuggestion(it: any) {
  openDetail(it)
  suggestionsOpen.value = false
}

function viewAll() {
  suggestionsOpen.value = false
  if (typeof window === 'undefined') return
  const el = document.getElementById('kbliList')
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// Quick helper: set search term from top/bottom cards and go to results
function setQuick(term: string) {
  try {
    search.value = term
    suggestionsOpen.value = false
    page.value = 1
    const list = document.getElementById('kbliList')
    if (list) list.scrollIntoView({ behavior: 'smooth', block: 'start' })
  } catch {}
}

// Pagination state and computed
const PAGE_SIZE = 20
const page = ref(1)

const totalItems = computed(() => filteredItems.value.length)
const totalPages = computed(() => Math.max(1, Math.ceil(totalItems.value / PAGE_SIZE)))

const paginatedItems = computed(() => {
  const start = (page.value - 1) * PAGE_SIZE
  return filteredItems.value.slice(start, start + PAGE_SIZE)
})

const displayStart = computed(() => {
  if (totalItems.value === 0) return 0
  return (page.value - 1) * PAGE_SIZE + 1
})

const displayEnd = computed(() => {
  if (totalItems.value === 0) return 0
  const end = page.value * PAGE_SIZE
  return Math.min(end, totalItems.value)
})

function prevPage() {
  if (page.value > 1) page.value--
}
function nextPage() {
  if (page.value < totalPages.value) page.value++
}

// Reset and clamp page when filters change
const suppressPageReset = ref(true)
watch([search, category], () => {
  if (!suppressPageReset.value) page.value = 1
})

watch(filteredItems, () => {
  const maxPage = Math.max(1, Math.ceil(filteredItems.value.length / PAGE_SIZE))
  if (page.value > maxPage) page.value = maxPage
})

// URL query sync (q, cat, page)
const route = useRoute()
const router = useRouter()

onMounted(() => {
  const qParam = typeof route.query.q === 'string' ? route.query.q : ''
  const catParam = typeof route.query.cat === 'string' ? route.query.cat : ''
  const pageParam = typeof route.query.page === 'string' ? parseInt(route.query.page, 10) : NaN
  suppressPageReset.value = true
  if (qParam) search.value = qParam
  if (catParam) category.value = catParam
  if (!Number.isNaN(pageParam) && pageParam >= 1) page.value = pageParam
  setTimeout(() => { suppressPageReset.value = false }, 0)
})

watch([search, category, page], () => {
  if (typeof window === 'undefined') return
  const query: Record<string, string> = {}
  if (search.value) query.q = search.value
  if (category.value) query.cat = category.value
  if (page.value && page.value !== 1) query.page = String(page.value)
  router.replace({ query })
})

function resetFilters() {
  search.value = ''
  category.value = ''
}
// Actions state and helpers

type KbliItem = { code: string; title: string; description: string; section: string }

const selectedItem = ref<KbliItem | null>(null)
const lastCopiedCode = ref<string>('')
let copyTimer: ReturnType<typeof setTimeout> | null = null

const isClient = typeof window !== 'undefined'

function openDetail(it: KbliItem) {
  selectedItem.value = it
}

async function copyCode(code: string) {
  try {
    if (isClient && navigator?.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(code)
    } else if (isClient) {
      const ta = document.createElement('textarea')
      ta.value = code
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.focus()
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    lastCopiedCode.value = code
    if (copyTimer) clearTimeout(copyTimer)
    copyTimer = setTimeout(() => { if (lastCopiedCode.value === code) lastCopiedCode.value = '' }, 2000)
  } catch (e) {
    // ignore
  }
}

function csvEscape(s: string): string {
  const val = (s || '').replace(/\r?\n/g, ' ').replace(/"/g, '""')
  return `"${val}"`
}

function downloadCSV(it: KbliItem) {
  if (!isClient) return
  const headers = ['Kode', 'Judul', 'Uraian']
  const row = [it.code, it.title, it.description]
  const csv = [headers.map(csvEscape).join(','), row.map(csvEscape).join(',')].join('\r\n')
  const blob = new Blob(["\ufeff" + csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `KBLI-${it.code}.csv`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

function downloadFilteredCSV(mode: 'page' | 'all') {
  if (!isClient) return
  const list = mode === 'page' ? paginatedItems.value : filteredItems.value
  const headers = ['Kode', 'Judul', 'Uraian']
  const lines = [headers.map(csvEscape).join(',')]
  for (const it of list) {
    lines.push([it.code, it.title, it.description].map(csvEscape).join(','))
  }
  const csv = lines.join('\r\n')
  const blob = new Blob(["\ufeff" + csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  const name = mode === 'page' ? `KBLI-halaman-${page.value}.csv` : `KBLI-semua-hasil-${totalItems.value}.csv`
  a.download = name
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

function downloadPDF(it: KbliItem) {
  if (!isClient) return
  const title = `${it.code} — ${it.title}`
  const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<title>${title}</title>
<style>
  body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; padding: 24px; }
  .code { display:inline-block; background:#0d6efd; color:#fff; padding:4px 8px; border-radius:6px; font-weight:700; }
  h1 { font-size: 18px; margin: 12px 0 16px; }
  pre { white-space: pre-wrap; font-family: inherit; line-height: 1.5; }
  footer { margin-top: 24px; font-size: 12px; color: #666; }
</style>
</head>
<body>
  <div><span class="code">${it.code}</span></div>
  <h1>${escapeHtml(it.title)}</h1>
  <pre>${escapeHtml(it.description)}</pre>
  <footer>KBLI — ruangoffice.com</footer>
  <script>setTimeout(function(){ try{ window.print(); }catch(e){} setTimeout(function(){ try{ window.close(); }catch(e){} }, 500); }, 300);<\/script>
</body>
</html>`
  const w = window.open('', '_blank')
  if (!w) return
  w.document.open()
  w.document.write(html)
  w.document.close()
}

function escapeHtml(s: string) {
  return (s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function shareWhatsApp(it: KbliItem) {
  if (!isClient) return
  const shortDesc = (it.description || '').length > 300 ? (it.description || '').slice(0, 297) + '...' : (it.description || '')
  const text = `KBLI ${it.code} — ${it.title}\n\n${shortDesc}\n\nLihat selengkapnya di ruangoffice.com/kbli`
  const url = `https://wa.me/?text=${encodeURIComponent(text)}`
  window.open(url, '_blank')
}

</script>

<style scoped>
.bg-dark-subtle { background-color: rgba(0,0,0,.075); }

/* Suggestion popup polish */
.kbli-suggest .list-group-item { padding-top: .5rem; padding-bottom: .5rem; }
.kbli-suggest .list-group-item.active,
.kbli-suggest .list-group-item:active {
  background-color: rgba(13, 110, 253, 0.08) !important; /* primary subtle */
  color: inherit !important;
}
.kbli-suggest .list-group-item:hover { background-color: rgba(0,0,0,.03); }
.kbli-suggest mark { background: #ffe69c; padding: 0 .1em; }

/* Ensure outline buttons remain readable when pressed */
.kbli-page .btn-outline-primary:active,
.kbli-page .btn-outline-primary.active { background-color: #0d6efd; color:#fff; border-color:#0d6efd; }
.kbli-page .btn-outline-secondary:active,
.kbli-page .btn-outline-secondary.active { background-color: #2c3e50; color:#fff; border-color:#2c3e50; }
.kbli-page .btn-outline-success:active,
.kbli-page .btn-outline-success.active { background-color: #198754; color:#fff; border-color:#198754; }
.kbli-page .btn-outline-info:active,
.kbli-page .btn-outline-info.active { background-color: #0dcaf0; color:#000; border-color:#0dcaf0; }

/* Modal text rendering */
#kbliDetailModal .modal-body { line-height: 1.6; }

/* Toolbar card look */
.kbli-toolbar {
  background: linear-gradient(180deg, #ffffff, #f8fafc);
  border: 1px solid rgba(2,6,23,.08);
  border-radius: 16px;
  padding: 12px 12px 8px;
  box-shadow: 0 8px 24px rgba(2,6,23,.06);
}
/* Underline accent */
.kbli-underline {
  width: 88px;
  height: 4px;
  border-radius: 9999px;
  background: #eab308;
  margin-top: 10px;
  margin-bottom: 6px;
}

/* Search input group pill */
.kbli-toolbar .input-group {
  border: 1px solid rgba(2,6,23,.08);
  border-radius: 9999px;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(2,6,23,.06);
}
.kbli-toolbar .input-group-text {
  background: transparent;
  border: 0;
  color: #0ea5e9;
}
.kbli-toolbar .form-control {
  border: 0 !important;
  box-shadow: none !important;
}
.kbli-toolbar .btn.btn-outline-secondary {
  border: 0;
  border-left: 1px solid rgba(2,6,23,.06);
  background: #f1f5f9;
  transition: all .2s ease;
}
.kbli-toolbar .btn.btn-outline-secondary:hover {
  background: #e2e8f0;
}

/* Pills for small buttons (chips) */
.kbli-page .btn.btn-sm {
  border-radius: 9999px;
  padding-left: 0.9rem;
  padding-right: 0.9rem;
  transition: transform .15s ease, box-shadow .15s ease;
}
.kbli-page .btn.btn-sm:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 18px rgba(0,0,0,.08);
}

/* Result list polish */
.kbli-page .list-group-item-action {
  transition: transform .15s ease, box-shadow .15s ease, background-color .15s ease;
}
.kbli-page .list-group-item-action:hover {
  background-color: rgba(0,0,0,.02);
  transform: translateY(-2px);
  box-shadow: 0 8px 18px rgba(0,0,0,.08);
}

/* Highlighted text */
.kbli-page mark {
  background: #fff3bf;
  padding: 0 .1em;
  border-radius: .2em;
}

/* Badges weight */
.kbli-page .badge {
  font-weight: 700;
}
</style>
