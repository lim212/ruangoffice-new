<template>
  <div class="relative" @mouseenter="onEnter" @mouseleave="onLeave">
    <!-- Trigger -->
    <button @click="toggle" class="text-white hover:text-[#FFD700] font-semibold transition-colors text-sm flex items-center">
      Layanan
      <span class="ml-1 text-xs">▼</span>
    </button>

    <!-- Mega menu panel -->
    <div v-show="open" class="absolute left-1/2 -translate-x-1/2 mt-2 w-[900px] max-w-[95vw] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-[60]" style="will-change: transform">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 p-6 md:p-8">
        <!-- Column 1: Badan Usaha -->
        <div>
          <div class="text-xs font-semibold text-gray-500 tracking-wider mb-3">BADAN USAHA</div>
          <ul class="space-y-3 text-gray-800">
            <li><a href="#" class="hover:text-emerald-600">PT / Perseroan Terbatas</a></li>
            <li><a href="#" class="hover:text-emerald-600">CV / Commanditaire Venootschap</a></li>
            <li class="flex items-center gap-2"><a href="#" class="hover:text-emerald-600">PT Perorangan</a><span class="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">NEW</span></li>
            <li><a href="#" class="hover:text-emerald-600">PT PMA</a></li>
            <li><a href="#" class="hover:text-emerald-600">Firma</a></li>
            <li><a href="#" class="hover:text-emerald-600">Persekutuan Perdata</a></li>
            <li><a href="#" class="hover:text-emerald-600">Perkumpulan</a></li>
            <li><a href="#" class="hover:text-emerald-600">Yayasan</a></li>
          </ul>
        </div>

        <!-- Column 2: Perizinan -->
        <div>
          <div class="text-xs font-semibold text-gray-500 tracking-wider mb-3">PERIZINAN</div>
          <ul class="space-y-3 text-gray-800">
            <li><a href="#" class="hover:text-emerald-600">NIB & OSS</a></li>
            <li><a href="#" class="hover:text-emerald-600">Izin PKP</a></li>
            <li><a href="#" class="hover:text-emerald-600">Izin Restoran</a></li>
            <li><a href="#" class="hover:text-emerald-600">Izin Konstruksi</a></li>
            <li><a href="#" class="hover:text-emerald-600">Izin PSE</a></li>
            <li><a href="#" class="hover:text-emerald-600">Izin K3L</a></li>
            <li class="flex items-center gap-2"><a href="#" class="hover:text-emerald-600">33++ Izin Lainnya</a><span class="text-[10px] px-2 py-0.5 rounded-full bg-blue-600 text-white">ALL</span></li>
          </ul>
        </div>

        <!-- Column 3: Lainnya -->
        <div>
          <div class="text-xs font-semibold text-gray-500 tracking-wider mb-3">LAINNYA</div>
          <ul class="space-y-3 text-gray-800">
            <li><a href="#" class="hover:text-emerald-600">Virtual Office</a></li>
            <li><a href="#" class="hover:text-emerald-600">Perubahan Anggaran Dasar</a></li>
            <li><a href="#" class="hover:text-emerald-600">Penutupan Perusahaan</a></li>
            <li><a href="#" class="hover:text-emerald-600">Perjanjian Pisah Harta</a></li>
            <li><a href="#" class="hover:text-emerald-600">Pendaftaran Merek</a></li>
            <li><a href="#" class="hover:text-emerald-600">KITAS Pekerja</a></li>
            <li class="flex items-center gap-2"><a href="#" class="hover:text-emerald-600">17++ Layanan Lainnya</a><span class="text-[10px] px-2 py-0.5 rounded-full bg-blue-600 text-white">ALL</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const open = ref(false)
const toggle = () => (open.value = !open.value)
const onEnter = () => { if (matchMedia('(hover: hover)').matches) open.value = true }
const onLeave = () => { if (matchMedia('(hover: hover)').matches) open.value = false }
</script>

<style scoped>
/* subtle divider like reference */
ul li + li { border-top: 0px solid transparent; padding-top: 0.125rem; }
</style>


