<template>
 <div class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex">
    <!-- SIDEBAR -->
    <DashboardSidebar />

    <!--  konten -->
    <main class="flex-1 px-4 py-6 sm:px-6 lg:px-10">
      <div class="w-full  space-y-10">

        <!-- Header -->
        <header class="flex items-center justify-between">
          <div>
            <h1 class="text-4xl font-extrabold text-white tracking-tight">
              Dashboard
            </h1>
            <p class="text-gray-400 mt-1 text-base">
              Selamat datang, ini ringkasan warungmu hari ini.
            </p>
          </div>

          <span
            class="text-sm font-medium text-slate-300 border border-slate-700 px-3 py-1 rounded-full bg-slate-800/50">
            {{ todayLabel }}
          </span>
        </header>

        <!-- Stat cards -->
        <section class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard v-for="stat in computedStats" :key="stat.label" :icon="stat.icon" :value="stat.value"
            :label="stat.label" :trend="stat.trend" />
        </section>

        <!-- Konten utama -->
        <section class="grid gap-8 xl:grid-cols-[2fr]">
          <div class="space-y-6">
            <OcrUploadPanel :ocr-rows="ocrRows" :format-rupiah="formatRupiah" @ocr-parsed="updateOcrData" />
          </div>

        </section>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import StatCard from '~/components/layout/StatCard.vue'
import DashboardSidebar from '~/components/layout/Sidebar.vue'
import OcrUploadPanel from '~/pages/dashboard/UploadOcr.vue'
import { useDashboardOverview } from '~/composables/useDashboard' 


const {
  stats,
  ocrRows,
  omzetToday,
  computedStats,
  todayLabel,
  formatRupiah,
  updateOcrData,
} = useDashboardOverview()
</script>
