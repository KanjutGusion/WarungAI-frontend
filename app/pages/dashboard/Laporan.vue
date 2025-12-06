<!-- pages/dashboard/Laporan.vue -->
<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex transition-colors duration-300">
    <!-- SIDEBAR -->
    <DashboardSidebar />

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

    <!-- KONTEN  -->
    <main class="flex-1 px-4 py-6 sm:px-6 lg:px-10">
      <div class="w-full space-y-8">
       <!-- Header -->
        <header class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            
            <div>
              <h1 class="text-3xl font-bold text-slate-900 dark:text-white">Laporan Keuangan</h1>
              <p class="text-gray-600 dark:text-gray-400 mt-1 text-sm">
               Catat pemasukan dan pengeluaran secara otomatis dari hasil OCR nota
              </p>
            </div>
          </div>
        </header>

        <!-- ERROR HANDLER -->
        <div
          v-if="error"
          class="rounded-lg border border-red-500/40 bg-red-500/10 text-red-700 dark:text-red-200
                 text-sm px-4 py-3 flex items-start gap-2"
        >
          <span class="mt-0.5">⚠️</span>
          <div>
            <p class="font-semibold">Gagal memuat data</p>
            <p class="text-xs opacity-80">{{ error }}</p>
            <button
              type="button"
              class="mt-2 text-xs underline underline-offset-2"
              @click="loadReport"
            >
              Coba lagi
            </button>
          </div>
        </div>

        <!-- RINGKASAN -->
        <section class="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-6 space-y-4 shadow-sm dark:shadow-none">
          <h2 class="text-lg font-semibold text-slate-900 dark:text-white">Ringkasan Minggu Ini</h2>

          <!-- LOADING  -->
          <div v-if="isLoading" class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              v-for="n in 4"
              :key="n"
              class="p-4 bg-gray-100 dark:bg-slate-900/40 rounded-lg border border-gray-200 dark:border-slate-700 animate-pulse"
            >
              <div class="h-3 w-16 bg-gray-300 dark:bg-slate-700 rounded mb-2"></div>
              <div class="h-5 w-24 bg-gray-200 dark:bg-slate-600 rounded"></div>
            </div>
          </div>

          <!-- DATA -->
          <div v-else class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="p-4 bg-gray-50 dark:bg-slate-900/40 rounded-lg border border-gray-200 dark:border-slate-700">
              <p class="text-xs text-gray-500 dark:text-slate-400">Total Omzet</p>
              <p class="text-lg font-bold text-purple-600 dark:text-purple-400">
                {{ formatRupiah(summary.omzetToday) }}
              </p>
            </div>

            <div class="p-4 bg-gray-50 dark:bg-slate-900/40 rounded-lg border border-gray-200 dark:border-slate-700">
              <p class="text-xs text-gray-500 dark:text-slate-400">Total Transaksi</p>
              <p class="text-lg font-bold text-purple-600 dark:text-purple-400">
                {{ summary.totalTransactions }}
              </p>
            </div>

            <div class="p-4 bg-gray-50 dark:bg-slate-900/40 rounded-lg border border-gray-200 dark:border-slate-700">
              <p class="text-xs text-gray-500 dark:text-slate-400">Total Produk</p>
              <p class="text-lg font-bold text-purple-600 dark:text-purple-400">
                {{ summary.uniqueProducts }}
              </p>
            </div>

            <div class="p-4 bg-gray-50 dark:bg-slate-900/40 rounded-lg border border-gray-200 dark:border-slate-700">
              <p class="text-xs text-gray-500 dark:text-slate-400">Total Pengeluaran</p>
              <p class="text-lg font-bold text-purple-600 dark:text-purple-400">
                {{ formatRupiah(summary.totalExpenses) }}
              </p>
            </div>
          </div>

          <p class="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">
            Laporan ini menampilkan total keseluruhan,data ini akan otomatis diperbarui setiap bulan.
          </p>
        </section>

        <!-- GRAFIK OMZET -->
        <section class="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-6 space-y-4 shadow-sm dark:shadow-none">
          <div class="flex items-center justify-between gap-2">
            <h2 class="text-lg font-semibold text-slate-900 dark:text-white">Grafik Omzet</h2>
            <p class="text-xs text-gray-500 dark:text-slate-400">7 hari terakhir</p>
          </div>

          <div class="bg-gray-50 dark:bg-slate-900/60 border border-gray-200 dark:border-slate-700/80 rounded-lg p-4">
            <svg viewBox="0 0 200 60" class="w-full h-24">
              <defs>
                <linearGradient id="omzet-line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="rgb(192,132,252)" />
                  <stop offset="100%" stop-color="rgb(59,130,246)" />
                </linearGradient>
              </defs>

              <path
                :d="omzetPath"
                fill="none"
                stroke="url(#omzet-line)"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div class="flex justify-between mt-2 text-[10px] text-gray-500 dark:text-slate-400">
              <span
                v-for="point in omzetSeries"
                :key="point.label"
                class="uppercase tracking-tight"
              >
                {{ point.label }}
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import DashboardSidebar from '@/components/layout/Sidebar.vue'
import { useFinanceReport } from '~/composables/usaLaporan'

const { isDark, toggleTheme } = useTheme()

const {
  isLoading,
  error,
  summary,
  omzetSeries,
  omzetPath,
  formatRupiah,
  loadReport,
} = useFinanceReport()

onMounted(() => {
  loadReport()
})
</script>
