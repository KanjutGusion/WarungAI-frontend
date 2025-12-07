<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex transition-colors duration-300"
  >
    <!-- SIDEBAR -->
    <DashboardSidebar />

    <!-- Burger Menu Button (Mobile) -->
    <CommonBurgerButton />

    <!-- Theme Toggle Button -->
    <button
      @click="toggleTheme"
      class="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-slate-800/90 dark:bg-white/90 backdrop-blur-sm hover:scale-105 active:scale-95"
      :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      :title="isDark ? 'Mode Terang' : 'Mode Gelap'"
    >
      <span
        class="text-base sm:text-lg select-none transition-transform duration-300 group-hover:rotate-12"
      >
        {{ isDark ? "☀️" : "🌙" }}
      </span>
      <span
        class="text-xs sm:text-sm font-medium text-white dark:text-slate-800 hidden sm:inline"
      >
        {{ isDark ? "Terang" : "Gelap" }}
      </span>
    </button>

    <!--  konten -->
    <main class="flex-1 px-3 pt-14 pb-6 sm:px-6 sm:pt-6 lg:px-10 lg:pl-10 lg:pt-6 overflow-x-hidden">
      <div class="w-full max-w-7xl mx-auto space-y-6 sm:space-y-10">
        <!-- Header -->
        <header class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1
              class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
            >
              Dashboard
            </h1>
            <p class="text-gray-600 dark:text-gray-400 mt-1 text-sm sm:text-base">
              Selamat datang, {{ user?.username }} ini total ringkasan warungmu.
            </p>
          </div>

          <span
            class="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 border border-gray-300 dark:border-slate-700 px-2 sm:px-3 py-1 rounded-full bg-white dark:bg-slate-800/50 w-fit"
          >
            {{ todayLabel }}
          </span>
        </header>

        <!-- Stat cards -->
        <section class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            v-for="stat in stats"
            :key="stat.label"
            :icon="stat.icon"
            :value="stat.value"
            :label="stat.label"
          />
        </section>

        <!-- Konten utama -->
        <section class="grid gap-8 xl:grid-cols-[2fr]">
          <div class="space-y-6">
            <OcrUploadPanel
              :ocr-rows="ocrRows"
              :format-rupiah="formatRupiah"
              @ocr-parsed="updateOcrData"
            />
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import StatCard from "~/components/layout/StatCard.vue";
import DashboardSidebar from "~/components/layout/Sidebar.vue";
import OcrUploadPanel from "~/pages/dashboard/UploadOcr.vue";
import { useDashboardOverview } from "~/composables/useDashboard";
import { useAuth } from "@/composables/useAuth";
import { useAnalytics } from "@/composables/useAnalytics";

const { user } = useAuth();
const { isDark, toggleTheme } = useTheme();

const { ocrRows, todayLabel, formatRupiah, updateOcrData } =
  useDashboardOverview();

const { getSalesSummary } = useAnalytics();

const stats = ref<Stat[]>([
  { icon: "💰", value: "Rp 0", label: "Pendapatan Total" },
  { icon: "🛒", value: "0", label: "Total Transaksi" },
  { icon: "📦", value: "Rp 0", label: "Total Profit" },
  { icon: "📊", value: "0%", label: "Rata-rata Margin" },
]);

onMounted(async () => {
  const result = await getSalesSummary();

  if (result) {
    const d = result;
    stats.value[0].value = formatRupiah(d.total_sales);
    stats.value[1].value = d.transaction_count.toString();
    stats.value[2].value = formatRupiah(d.total_profit);
    stats.value[3].value = d.avg_profit_margin + "%";
  } else {
    stats.value[0].value = formatRupiah(0)
    stats.value[1].value = "0";
    stats.value[2].value = formatRupiah(0);
    stats.value[3].value = "0" + "%";
  }
});
</script>
