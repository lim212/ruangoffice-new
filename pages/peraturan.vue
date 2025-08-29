<template>
  <section class="tw-max-w-7xl tw-mx-auto tw-px-4 sm:tw-px-6 lg:tw-px-8 tw-py-6">
    <h1 class="tw-text-2xl tw-font-semibold tw-mb-2">Database Peraturan</h1>
    <p class="tw-text-gray-600 tw-mb-6">Cari dan filter berbagai peraturan dari legalitas.org</p>

    <!-- Controls -->
    <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-3 md:tw-items-end tw-mb-4">
      <div class="tw-flex-1">
        <label class="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1" for="search">Pencarian (berdasarkan judul/tentang)</label>
        <input id="search" v-model="search" type="text" placeholder="Ketik kata kunci..." class="tw-w-full tw-border tw-rounded-md tw-px-3 tw-py-2 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-yellow-400" />
      </div>
      <div class="tw-w-full md:tw-w-60">
        <label class="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1" for="jenis">Jenis Peraturan</label>
        <select id="jenis" v-model="jenisFilter" class="tw-w-full tw-border tw-rounded-md tw-px-3 tw-py-2 tw-bg-white focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-yellow-400">
          <option value="">Semua Jenis</option>
          <option v-for="j in jenisOptions" :key="j" :value="j">{{ j }}</option>
        </select>
      </div>
      <div class="tw-w-full md:tw-w-40">
        <label class="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1" for="tahun">Tahun</label>
        <select id="tahun" v-model="tahunFilter" class="tw-w-full tw-border tw-rounded-md tw-px-3 tw-py-2 tw-bg-white focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-yellow-400">
          <option value="">Semua Tahun</option>
          <option v-for="t in tahunOptions" :key="t" :value="t">{{ t }}</option>
        </select>
      </div>
    </div>

    <!-- Info bar -->
    <div class="tw-flex tw-items-center tw-justify-between tw-text-sm tw-text-gray-600 tw-mb-2">
      <div>
        <span v-if="pending">Memuat data…</span>
        <span v-else>Menampilkan {{ filtered.length.toLocaleString('id-ID') }} dari {{ data.length.toLocaleString('id-ID') }} peraturan</span>
      </div>
      <button @click="resetFilters" class="tw-text-blue-600 hover:tw-underline" :disabled="!search && !jenisFilter && !tahunFilter">Reset filter</button>
    </div>

    <!-- Table -->
    <div class="tw-overflow-x-auto">
      <table class="tw-min-w-full tw-border tw-border-gray-200 tw-rounded-md tw-overflow-hidden">
        <thead class="tw-bg-black tw-text-white">
          <tr>
            <th class="tw-text-left tw-px-3 tw-py-2">Jenis Peraturan</th>
            <th class="tw-text-left tw-px-3 tw-py-2">Nomor</th>
            <th class="tw-text-left tw-px-3 tw-py-2">Tahun</th>
            <th class="tw-text-left tw-px-3 tw-py-2">Tentang</th>
            <th class="tw-text-left tw-px-3 tw-py-2">File</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="!pending && filtered.length === 0">
            <td colspan="5" class="tw-px-3 tw-py-4 tw-text-center tw-text-gray-600">Tidak ada hasil yang cocok.</td>
          </tr>
          <tr v-for="(row, idx) in filtered" :key="idx" class="odd:tw-bg-white even:tw-bg-gray-50 hover:tw-bg-gray-100">
            <td class="tw-px-3 tw-py-2 tw-whitespace-nowrap">{{ row.jenis || '—' }}</td>
            <td class="tw-px-3 tw-py-2 tw-whitespace-nowrap">{{ row.nomor || '—' }}</td>
            <td class="tw-px-3 tw-py-2 tw-whitespace-nowrap">{{ row.tahun || '—' }}</td>
            <td class="tw-px-3 tw-py-2">{{ row.tentang || '—' }}</td>
            <td class="tw-px-3 tw-py-2 tw-whitespace-nowrap">
              <a v-if="row.file" :href="row.file" target="_blank" rel="noopener" class="tw-inline-flex tw-items-center tw-bg-blue-600 hover:tw-bg-blue-700 tw-text-white tw-text-sm tw-px-3 tw-py-1 tw-rounded">
                Download
              </a>
              <span v-else class="tw-text-gray-400">—</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="error" class="tw-mt-3 tw-text-red-600">Gagal memuat data peraturan. Silakan coba lagi.</div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

// Load from /public/peraturan.json
const { data: raw, pending, error } = await useFetch('/peraturan.json', {
  server: false,
  // Avoid caching while developing
  query: { _ts: Date.now() }
})

// Fallback seed data when peraturan.json is empty or unavailable
const { data: seed } = await useFetch('/peraturan.seed.json', { server: false })

function sanitizeArr(arr: any[]) {
  const cleaned = arr.filter((it) => {
    const tahunOk = /^(19|20)\d{2}$/.test(String(it?.tahun || ''))
    const tentangOk = String(it?.tentang || '').trim().length > 3
    const jenisOk = String(it?.jenis || '').trim().length > 0
    const nomorOk = String(it?.nomor || '').trim().length > 0
    return tahunOk && tentangOk && (jenisOk || nomorOk)
  })
  return cleaned
}

const data = computed(() => {
  const arr = Array.isArray(raw.value) ? (raw.value as any[]) : []
  const cleaned = sanitizeArr(arr)
  if (cleaned.length > 0) return cleaned
  const seedArr = Array.isArray(seed.value) ? (seed.value as any[]) : []
  return sanitizeArr(seedArr)
})

const search = ref('')
const jenisFilter = ref('')
const tahunFilter = ref('')

const jenisOptions = computed(() => {
  const set = new Set<string>()
  for (const it of data.value) {
    if (it?.jenis) set.add(String(it.jenis))
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b, 'id'))
})

const tahunOptions = computed(() => {
  const set = new Set<string>()
  for (const it of data.value) {
    if (it?.tahun) set.add(String(it.tahun))
  }
  return Array.from(set).sort((a, b) => Number(b) - Number(a))
})

const filtered = computed(() => {
  const q = search.value.trim().toLowerCase()
  const jf = jenisFilter.value
  const tf = tahunFilter.value
  return data.value.filter((it) => {
    if (jf && String(it.jenis) !== jf) return false
    if (tf && String(it.tahun) !== tf) return false
    if (q) {
      const haystack = [
        String(it.tentang || ''),
        String(it.jenis || ''),
        String(it.nomor || '')
      ].join(' ').toLowerCase()
      return haystack.includes(q)
    }
    return true
  })
})

function resetFilters() {
  search.value = ''
  jenisFilter.value = ''
  tahunFilter.value = ''
}
</script>
