<template>
 <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex transition-colors duration-300">
    <!-- SIDEBAR -->
    <DashboardSidebar />

    <!-- Burger Menu Button (Mobile) -->
    <CommonBurgerButton />

    <!-- Theme Toggle Button -->
    <button
      @click="toggleTheme"
      class="fixed bottom-6 right-6 z-50 group flex items-center gap-2 px-4 py-2.5 rounded-full 
             shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer
             bg-slate-800/90 dark:bg-white/90 backdrop-blur-sm
             hover:scale-105 active:scale-95"
      :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      :title="isDark ? 'Mode Terang' : 'Mode Gelap'"
    >
      <span class="text-lg select-none transition-transform duration-300 group-hover:rotate-12">
        {{ isDark ? '☀️' : '🌙' }}
      </span>
      <span class="text-sm font-medium text-white dark:text-slate-800 hidden sm:inline">
        {{ isDark ? 'Terang' : 'Gelap' }}
      </span>
    </button>

    <!--  konten -->
    <main class="flex-1 px-4 py-6 sm:px-6 lg:px-10 lg:pl-10">
      <div class="w-full  space-y-10">

        <!-- Header -->
        <header class="flex items-center justify-between">
          <div>
            <h1 class="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Dashboard
            </h1>
            <p class="text-gray-600 dark:text-gray-400 mt-1 text-base">
              Selamat datang,{{user?.username}} ini ringkasan warungmu hari ini.
            </p>
          </div>

          <span
            class="text-sm font-medium text-slate-600 dark:text-slate-300 border border-gray-300 dark:border-slate-700 px-3 py-1 rounded-full bg-white dark:bg-slate-800/50">
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

import { useAuth } from '@/composables/useAuth'

const { user,checkAuth } = useAuth()
const { isDark, toggleTheme } = useTheme()

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
