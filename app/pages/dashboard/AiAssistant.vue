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

    <main class="flex-1 px-4 py-6 sm:px-6 lg:px-10">
      <div class="w-full space-y-8">
        <!-- Header -->
        <header class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-2xl bg-purple-600/20 flex items-center justify-center text-2xl">
              🤖
            </div>
            <div>
              <h1 class="text-3xl font-bold text-slate-900 dark:text-white">AI Asisten</h1>
              <p class="text-gray-600 dark:text-gray-400 mt-1 text-sm">
                Dapatkan rekomendasi harga optimal berdasarkan data penjualan dan kompetitor.
              </p>
            </div>
          </div>
        </header>

        <!-- Main content -->
        <section class="bg-white dark:bg-slate-900/80 border border-gray-200 dark:border-white/5 rounded-2xl p-6 shadow-lg dark:shadow-xl space-y-5">
          <div class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 class="text-base font-semibold text-slate-900 dark:text-white">
                Dapatkan Harga Optimal
              </h2>
              <p class="text-xs text-gray-500 dark:text-slate-400 mt-1 max-w-md">
                Isi data produk dan harga saat ini. AI akan membantu memberikan rekomendasi harga,
                alasan, dan analisis kompetitor.
              </p>
            </div>
          </div>

          <!-- layout -->
          <div class="grid grid-cols-1 lg:grid-cols-[1.7fr,2fr] gap-6">
            <div class="space-y-4">
              <div class="space-y-1">
                <label class="text-xs text-gray-600 dark:text-slate-300">Nama produk</label>
                <input v-model="productName" type="text"
                  class="w-full rounded-xl bg-gray-50 dark:bg-slate-950/80 border border-gray-300 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder=" Indomie" />
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-1">
                  <label class="text-xs text-gray-600 dark:text-slate-300">Harga jual saat ini (Rp)</label>
                  <input v-model.number="currentPrice" type="number" min="0"
                    class="w-full rounded-xl bg-gray-50 dark:bg-slate-950/80 border border-gray-300 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="3500" />
                </div>
                <div class="space-y-1">
                  <label class="text-xs text-gray-600 dark:text-slate-300">Harga modal / pokok (Rp)</label>
                  <input v-model.number="costPrice" type="number" min="0"
                    class="w-full rounded-xl bg-gray-50 dark:bg-slate-950/80 border border-gray-300 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder=" 2500" />
                </div>
              </div>

              <div class="space-y-1">
                <label class="text-xs text-gray-600 dark:text-slate-300">
                  Perkiraan harga kompetitor (Rp)
                </label>
                <input v-model.number="competitorPrice" type="number" min="0"
                  class="w-full rounded-xl bg-gray-50 dark:bg-slate-950/80 border border-gray-300 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder=" 4000" />
              </div>

              <div class="flex items-center justify-between pt-2">
                <p class="text-[11px] text-gray-500 dark:text-slate-500 max-w-xs">
                  Minimal isi nama produk, harga jual, dan harga modal. Data kompetitor membantu agar
                  rekomendasi lebih akurat.
                </p>
                <button
                  class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-sm font-medium text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
                  :disabled="!canSubmit || isLoading" @click="requestRecommendation">
                  <span v-if="!isLoading">Dapatkan harga optimal</span>
                  <span v-else class="flex items-center gap-2">
                    <LoadingDots />
                  </span>
                </button>
              </div>

              <p v-if="error" class="text-xs text-red-400">
                {{ error }}
              </p>
            </div>

            <!--  Output  -->
            <div class="space-y-3">
              <div
                class="min-h-[220px] rounded-xl bg-gray-50 dark:bg-slate-950/80 border border-gray-200 dark:border-slate-700 px-4 py-4 text-sm text-slate-900 dark:text-slate-100 flex flex-col justify-between">
                <div class="space-y-4">
                  <template v-if="isLoading">
                    <p class="text-xs text-gray-500 dark:text-slate-400 mb-1">
                      Menganalisis harga dan data kompetitor…
                    </p>
                    <LoadingDots />
                  </template>

                  <template v-else-if="pricingResult">
                    <!-- harga rekomendasi -->
                    <div>
                      <p class="text-[11px] uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-1">
                        Harga rekomendasi
                      </p>
                      <p class="text-2xl font-semibold text-emerald-600 dark:text-emerald-400">
                        {{ formatCurrency(pricingResult.recommendedPrice) }}
                      </p>
                      <p class="text-[11px] text-gray-500 dark:text-slate-500 mt-1">
                       harga rekomendasi {{ pricingResult.estimatedMargin }}%
                      </p>
                    </div>

                    <!-- alasan -->
                    <div>
                      <p class="text-[11px] uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-1">
                        Alasan
                      </p>
                      <p class="text-xs text-slate-700 dark:text-slate-100 leading-relaxed">
                        {{ pricingResult.reason }}
                      </p>
                    </div>

                    <!-- analisis kompetitor -->
                    <div>
                      <p class="text-[11px] uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-1">
                        Analisis kompetitor
                      </p>
                      <p class="text-xs text-slate-700 dark:text-slate-100 leading-relaxed">
                        {{ pricingResult.competitorAnalysis }}
                      </p>
                    </div>
                  </template>

                  <template v-else>
                    <p class="text-gray-500 dark:text-slate-500 text-xs">
                      Belum ada analisis.
                    </p>
                    <ul class="mt-3 text-xs text-gray-500 dark:text-slate-400 list-disc list-inside space-y-1">
                      <li>Harga rekomendasi yang tetap untung.</li>
                      <li>margin rekomendasi.</li>
                      <li>saran promo.</li>
                    </ul>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import DashboardSidebar from '~/components/layout/Sidebar.vue'
import LoadingDots from '~/components/ui/LoadingDots.vue'

const { isDark, toggleTheme } = useTheme()
</script>
