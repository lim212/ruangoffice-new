<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Blog</h1>

    <div class="mb-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
      <input
        v-model="search"
        type="text"
        placeholder="Cari artikel…"
        class="w-full sm:w-80 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        @input="onSearch"
      />
      <div class="text-sm text-gray-500" v-if="filteredTotal">
        {{ filteredTotal }} artikel ditemukan
      </div>
    </div>

    <div v-if="paginated.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <NuxtLink
        v-for="post in paginated"
        :key="post.slug"
        :to="`/blog/${post.slug}`"
        class="block border rounded-lg overflow-hidden hover:shadow-md transition-shadow bg-white"
      >
        <img :src="post.image" :alt="post.title" class="w-full h-40 object-cover" />
        <div class="p-4">
          <h2 class="font-semibold line-clamp-2 min-h-[3rem]">{{ post.title }}</h2>
          <p class="text-sm text-gray-600 mt-2 line-clamp-3">{{ post.excerpt }}</p>
          <div class="text-xs text-gray-400 mt-3">{{ formatDate(post.date) }}</div>
        </div>
      </NuxtLink>
    </div>

    <div v-else class="text-gray-500">Tidak ada artikel.</div>

    <div v-if="totalPages > 1" class="mt-8 flex items-center justify-center gap-2">
      <button
        class="px-3 py-1 rounded border text-sm disabled:opacity-50"
        :disabled="page <= 1"
        @click="goPage(page - 1)"
      >Prev</button>
      <button
        v-for="p in pages"
        :key="p"
        class="px-3 py-1 rounded border text-sm"
        :class="p === page ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white'"
        @click="goPage(p)"
      >{{ p }}</button>
      <button
        class="px-3 py-1 rounded border text-sm disabled:opacity-50"
        :disabled="page >= totalPages"
        @click="goPage(page + 1)"
      >Next</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const PAGE_SIZE = 8;

// Load all posts from content/blog/*.json at build/runtime
const { data: posts } = await useAsyncData('blog-posts', async () => {
  const modules = import.meta.glob('../content/blog/*.json', { eager: true });
  const items = Object.values(modules).map((m: any) => (m.default ?? m) as any);
  // sort by date desc
  items.sort((a: any, b: any) => (b.date || '').localeCompare(a.date || ''));
  return items;
});

const search = ref<string>((route.query.q as string) || '');
const page = ref<number>(Number(route.query.page || 1));

watch(() => route.query, (q) => {
  search.value = (q.q as string) || '';
  page.value = Number(q.page || 1);
});

function onSearch() {
  // reset to page 1 on search change
  router.replace({ query: { ...route.query, q: search.value || undefined, page: 1 } });
}

const filtered = computed(() => {
  const list = posts.value || [];
  if (!search.value) return list;
  const q = search.value.toLowerCase();
  return list.filter((p: any) =>
    (p.title || '').toLowerCase().includes(q) || (p.excerpt || '').toLowerCase().includes(q)
  );
});

const filteredTotal = computed(() => filtered.value.length);
const totalPages = computed(() => Math.max(1, Math.ceil(filtered.value.length / PAGE_SIZE)));
const pages = computed(() => Array.from({ length: totalPages.value }, (_, i) => i + 1));

const paginated = computed(() => {
  const current = Math.min(Math.max(1, page.value), totalPages.value);
  const start = (current - 1) * PAGE_SIZE;
  return filtered.value.slice(start, start + PAGE_SIZE);
});

function goPage(p: number) {
  router.replace({ query: { ...route.query, page: p || 1, q: search.value || undefined } });
}

function formatDate(s?: string) {
  if (!s) return '';
  try {
    const dt = new Date(s);
    return dt.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch { return s; }
}

useHead({
  title: 'Blog RuangOffice',
  meta: [
    { name: 'description', content: 'Daftar artikel blog RuangOffice: pendirian PT, PT PMA, virtual office, izin usaha, dan lainnya.' }
  ]
});
</script>

<style scoped>
.line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
</style>
