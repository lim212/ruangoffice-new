<template>
  <div class="text-center mb-16">
    <div class="inline-flex items-center px-4 py-2 bg-brand-gold text-brand-black rounded-full text-sm font-medium mb-6">
      <span class="mr-2">{{ icon }}</span>
      {{ badge }}
    </div>
    <h2 class="text-4xl font-bold text-brand-black mb-4">
      {{ title }}
      <span v-if="highlight" class="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-400">
        {{ highlight }}
      </span>
    </h2>
    <p v-if="description" class="text-xl text-gray-600 max-w-3xl mx-auto">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  icon: string;
  badge: string;
  title: string;
  highlight?: string;
  description?: string;
}

defineProps<Props>();
</script>
