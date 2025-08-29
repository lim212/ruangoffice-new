<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="!post">
      <h1 class="text-2xl font-semibold mb-4">Artikel tidak ditemukan</h1>
      <NuxtLink to="/berita" class="text-indigo-600">← Kembali ke Berita</NuxtLink>
    </div>
    <article v-else class="prose max-w-none">
      <h1 class="mb-2">{{ post.title }}</h1>
      <div class="text-sm text-gray-500 mb-4">{{ formatDate(post.date) }}</div>
      <img v-if="post.image" :src="post.image" :alt="post.title" class="w-full max-h-[420px] object-cover rounded mb-6" />
      <div v-html="post.content"></div>
    </article>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string;

function formatDate(s?: string) {
  if (!s) return '';
  try {
    const dt = new Date(s);
    return dt.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch { return s || ''; }
}

async function loadFromPublic(): Promise<any[]>
{
  try {
    let items = await $fetch<any[]>('/berita.json').catch(() => []);
    if (!Array.isArray(items) || items.length === 0) {
      items = await $fetch<any[]>('/berita.seed.json').catch(() => []);
    }
    return items;
  } catch { return []; }
}

// Fallback loader from content/blog/*.json (if exists)
async function loadFromContent(slug: string): Promise<any | null> {
  try {
    const modules = import.meta.glob('../../content/blog/*.json', { eager: true }) as Record<string, any>;
    const items = Object.values(modules).map((m: any) => (m.default ?? m) as any);
    return items.find((p: any) => p.slug === slug) || null;
  } catch { return null; }
}

const { data: post } = await useAsyncData(`blog-detail-${slug}`, async () => {
  const arr = await loadFromPublic();
  let found = Array.isArray(arr) ? arr.find((x: any) => x.slug === slug) : null;
  if (!found) {
    found = await loadFromContent(slug);
  }
  if (found) {
    // Normalize
    return {
      title: found.title || '',
      slug: found.slug || slug,
      image: found.image || '/assets/img/Header-RuangOffice-Dekstop.png',
      content: found.content || '',
      date: found.date || new Date().toISOString().slice(0, 10)
    };
  }
  return null;
});

useHead(() => ({
  title: post.value?.title ? `${post.value.title} — RuangOffice` : 'Artikel — RuangOffice',
  meta: [
    { name: 'description', content: post.value?.title || 'Artikel RuangOffice' }
  ]
}));
</script>

<style scoped>
.prose :deep(img) { border-radius: 0.5rem; }
</style>
