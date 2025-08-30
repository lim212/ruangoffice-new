<template>
  <div class="tw-max-w-7xl tw-mx-auto tw-px-4 tw-py-8">
    <h1 class="tw-text-2xl md:tw-text-3xl tw-font-extrabold tw-tracking-tight tw-text-gray-900">Database Peraturan</h1>
    <p class="tw-mt-2 tw-text-gray-600">Cari dan telusuri peraturan: Jenis, Nomor, Tahun, Tentang, dan File.</p>

    <!-- Controls -->
    <div class="tw-mt-6 tw-flex tw-flex-col md:tw-flex-row tw-gap-3 md:tw-items-end">
      <div class="tw-flex-1">
        <label for="search" class="tw-block tw-text-sm tw-font-medium tw-text-gray-700">Pencarian</label>
        <input id="search" v-model.trim="query" type="text" placeholder="Cari 'tentang', nomor, jenis, dll" class="tw-mt-1 tw-block tw-w-full tw-rounded-md tw-border-gray-300 focus:tw-border-emerald-500 focus:tw-ring-emerald-500" />
      </div>
      <div>
        <label for="jenis" class="tw-block tw-text-sm tw-font-medium tw-text-gray-700">Jenis Peraturan</label>
        <select id="jenis" v-model="jenisFilter" class="tw-mt-1 tw-block tw-w-56 tw-rounded-md tw-border-gray-300 focus:tw-border-emerald-500 focus:tw-ring-emerald-500">
          <option value="">Semua</option>
          <option v-for="j in jenisOptions" :key="j" :value="j">{{ j }}</option>
        </select>
      </div>
      <div>
        <label for="tahun" class="tw-block tw-text-sm tw-font-medium tw-text-gray-700">Tahun</label>
        <select id="tahun" v-model="tahunFilter" class="tw-mt-1 tw-block tw-w-40 tw-rounded-md tw-border-gray-300 focus:tw-border-emerald-500 focus:tw-ring-emerald-500">
          <option value="">Semua</option>
          <option v-for="t in tahunOptions" :key="t" :value="t">{{ t }}</option>
        </select>
      </div>
      <div>
        <label for="pageSize" class="tw-block tw-text-sm tw-font-medium tw-text-gray-700">Baris per halaman</label>
        <select id="pageSize" v-model.number="pageSize" class="tw-mt-1 tw-block tw-w-40 tw-rounded-md tw-border-gray-300 focus:tw-border-emerald-500 focus:tw-ring-emerald-500">
          <option v-for="n in [10,25,50,100]" :key="n" :value="n">{{ n }}</option>
        </select>
      </div>
    </div>

    <!-- Table -->
    <div class="tw-mt-6 tw-bg-white tw-shadow tw-ring-1 tw-ring-black/5 tw-rounded-lg tw-overflow-hidden">
      <div v-if="pending" class="tw-p-6 tw-text-gray-600">Memuat data peraturan...</div>
      <div v-else-if="error" class="tw-p-6 tw-text-red-600">Gagal memuat data. Pastikan menjalankan "npm run scrape:peraturan".</div>
      <template v-else>
        <div class="tw-overflow-x-auto">
          <table class="tw-min-w-full tw-divide-y tw-divide-gray-200">
            <thead class="tw-bg-gray-50">
              <tr>
                <th class="tw-px-4 tw-py-3 tw-text-left tw-text-xs tw-font-semibold tw-tracking-wider tw-text-gray-700">Jenis Peraturan</th>
                <th class="tw-px-4 tw-py-3 tw-text-left tw-text-xs tw-font-semibold tw-tracking-wider tw-text-gray-700">Nomor</th>
                <th class="tw-px-4 tw-py-3 tw-text-left tw-text-xs tw-font-semibold tw-tracking-wider tw-text-gray-700">Tahun</th>
                <th class="tw-px-4 tw-py-3 tw-text-left tw-text-xs tw-font-semibold tw-tracking-wider tw-text-gray-700">Tentang</th>
                <th class="tw-px-4 tw-py-3 tw-text-left tw-text-xs tw-font-semibold tw-tracking-wider tw-text-gray-700">File</th>
              </tr>
            </thead>
            <tbody class="tw-divide-y tw-divide-gray-100 tw-bg-white">
              <tr v-for="(row, idx) in paged" :key="idx" class="hover:tw-bg-gray-50">
                <td class="tw-px-4 tw-py-3 tw-text-sm tw-text-gray-800">{{ row.jenis }}</td>
                <td class="tw-px-4 tw-py-3 tw-text-sm tw-text-gray-800">{{ row.nomor }}</td>
                <td class="tw-px-4 tw-py-3 tw-text-sm tw-text-gray-800">{{ row.tahun }}</td>
                <td class="tw-px-4 tw-py-3 tw-text-sm tw-text-gray-800 tw-max-w-3xl tw-whitespace-normal">{{ row.tentang }}</td>
                <td class="tw-px-4 tw-py-3">
                  <a :href="row.file" target="_blank" rel="noopener" class="tw-inline-flex tw-items-center tw-gap-2 tw-text-emerald-700 hover:tw-text-emerald-900 tw-text-sm tw-font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="tw-w-4 tw-h-4"><path d="M5 20h14v-2H5v2zm7-18-5.5 5.5 1.41 1.41L11 6.83V16h2V6.83l3.09 3.08 1.41-1.41L12 2z"/></svg>
                    Lihat
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Empty state -->
        <div v-if="!filtered.length" class="tw-p-6 tw-text-gray-600">Tidak ada data yang cocok.</div>

        <!-- Pagination -->
        <div class="tw-flex tw-items-center tw-justify-between tw-px-4 tw-py-3 tw-bg-gray-50 tw-border-t tw-border-gray-200">
          <div class="tw-text-sm tw-text-gray-700">Menampilkan {{ startIndex + 1 }}–{{ Math.min(endIndex, filtered.length) }} dari {{ filtered.length }} data</div>
          <div class="tw-flex tw-items-center tw-gap-1">
            <button class="tw-px-3 tw-py-1 tw-rounded tw-text-sm tw-border tw-border-gray-300 tw-bg-white hover:tw-bg-gray-100 disabled:tw-opacity-50" :disabled="page===1" @click="page=page-1">Sebelumnya</button>
            <template v-for="p in pageButtons" :key="p.key">
              <button v-if="p.type==='page'" class="tw-px-3 tw-py-1 tw-rounded tw-text-sm tw-border tw-border-gray-300" :class="p.num===page ? 'tw-bg-emerald-600 tw-text-white tw-border-emerald-600' : 'tw-bg-white hover:tw-bg-gray-100'" @click="page=p.num">{{ p.num }}</button>
              <span v-else class="tw-px-2">…</span>
            </template>
            <button class="tw-px-3 tw-py-1 tw-rounded tw-text-sm tw-border tw-border-gray-300 tw-bg-white hover:tw-bg-gray-100 disabled:tw-opacity-50" :disabled="page===totalPages || totalPages===0" @click="page=page+1">Berikutnya</button>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useHead } from '#imports'

useHead({ title: 'Peraturan | Ruangoffice' })

// Load data from public/peraturan.json
const { data, pending, error } = await useFetch('/peraturan.json', { default: () => [] as any[] })

// Controls
const query = ref('')
const jenisFilter = ref('')
const tahunFilter = ref('')
const pageSize = ref(10)
const page = ref(1)

// Normalize list
const items = computed(() => Array.isArray(data.value) ? data.value as any[] : [])

const jenisOptions = computed(() => {
  const set = new Set<string>()
  for (const r of items.value) {
    const v = (r?.jenis ?? '').toString().trim()
    if (v) set.add(v)
  }
  return Array.from(set).sort((a,b) => a.localeCompare(b))
})

const tahunOptions = computed(() => {
  const set = new Set<string>()
  for (const r of items.value) {
    const v = (r?.tahun ?? '').toString().trim()
    if (v) set.add(v)
  }
  // sort desc numeric where possible
  return Array.from(set).sort((a,b) => (parseInt(b)||0) - (parseInt(a)||0))
})

const filtered = computed(() => {
  let arr = items.value
  const q = query.value.toLowerCase()
  if (q) {
    arr = arr.filter(r => [r.jenis, r.nomor, r.tahun, r.tentang].some((x:any) => (x?.toString()?.toLowerCase() || '').includes(q)))
  }
  if (jenisFilter.value) arr = arr.filter(r => (r.jenis || '') === jenisFilter.value)
  if (tahunFilter.value) arr = arr.filter(r => (r.tahun || '') === tahunFilter.value)
  return arr
})

watch([query, jenisFilter, tahunFilter, pageSize], () => { page.value = 1 })

const totalPages = computed(() => Math.ceil(filtered.value.length / pageSize.value) || 0)
const startIndex = computed(() => (page.value - 1) * pageSize.value)
const endIndex = computed(() => startIndex.value + pageSize.value)
const paged = computed(() => filtered.value.slice(startIndex.value, endIndex.value))

// Page number buttons with ellipsis
const pageButtons = computed(() => {
  const total = totalPages.value
  const cur = page.value
  /** @type<{ type: 'page'|'dots', key: string, num?: number }[]> */
  const btns = []
  if (total <= 7) {
    for (let i=1;i<=total;i++) btns.push({ type:'page', key: 'p'+i, num: i })
  } else {
    const add = (n:number) => btns.push({ type:'page', key:'p'+n, num:n })
    const dots = (k:string) => btns.push({ type:'dots', key:k })
    add(1)
    if (cur > 4) dots('d1')
    const start = Math.max(2, cur - 1)
    const end = Math.min(total - 1, cur + 1)
    for (let i=start;i<=end;i++) add(i)
    if (cur < total - 3) dots('d2')
    add(total)
  }
  return btns
})

</script>
