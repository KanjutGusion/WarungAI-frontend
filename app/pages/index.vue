<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
    <!-- Theme Toggle Button - Bottom Right FAB -->
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

    <!-- HEADER / NAV -->
    <LandingHeader />
    <SectionShell>
      <div class="grid md:grid-cols-2 gap-19 items-center">
        <div class="text-center md:text-left space-y-6 lg:space-y-7
            pt-6 md:pt-10">

          <p class="inline-block text-xs font-semibold uppercase tracking-wide 
                   text-gray-600 dark:text-gray-300
                   bg-gray-200/80 dark:bg-white/10 px-3 py-1 rounded-full">
            Platform AI untuk Warung &amp; UMKM
          </p>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-snug">
            Selamat Datang di
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
              WarungAI
            </span>
          </h1>
          <p class="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
            Kelola nota, pantau omzet, dan dapatkan rekomendasi harga dengan bantuan AI — praktis dan tanpa ribet,
            langsung dari layanan cerdas GRATIS
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <NuxtLink to="/auth/login">
              <BaseButton size="lg">
                Coba Gratis
              </BaseButton>
            </NuxtLink>

            <NuxtLink to="#Footer">
              <BaseButton size="lg" variant="outline">
                Lihat Selengkapnya
              </BaseButton>
            </NuxtLink>
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Mudah digunakan • Cocok untuk warung, kios, dan toko kelontong
          </p>
        </div>

        <!-- PREVIEW DASHBOARD -->
        <div class="hidden md:flex justify-end">
          <HeroPreview />
        </div>

      </div>
    </SectionShell>

    <!-- FEATUR -->
    <SectionShell id="features">
      <SectionTitle>
        <template #title>Fitur Unggulan</template>
        <template #subtitle>
          Semua yang Anda butuhkan untuk mengelola usaha kecil, dari nota sampai laporan keuangan,
          dalam satu dashboard.
        </template>
      </SectionTitle>

      <div class="grid md:grid-cols-3 gap-8">
        <FeatureCard>
          <template #icon>📊</template>
          <template #title>Analisis Penjualan</template>
          <template #description>
            Pantau penjualan harian, produk terlaris, dan tren omzet setiap hari.
          </template>
        </FeatureCard>

        <FeatureCard>
          <template #icon>🤖</template>
          <template #title>AI Assistant</template>
          <template #description>
            Dapatkan rekomendasi harga optimal dan saran untuk meningkatkan keuntungan.
          </template>
        </FeatureCard>

        <FeatureCard>
          <template #icon>💰</template>
          <template #title>Laporan Keuangan</template>
          <template #description>
            Catat pemasukan dan pengeluaran secara otomatis dari nota yang diunggah.
          </template>
        </FeatureCard>
      </div>
    </SectionShell>

    <!-- ABOUT -->
    <SectionShell id="about">
      <SectionTitle>
        <template #title>Tentang WarungAI</template>
        <template #subtitle>
          WarungAI adalah solusi digital yang dirancang khusus untuk UMKM Indonesia. Kami membantu
          warung mengelola keuangan dan penjualan dengan teknologi AI yang mudah digunakan.
        </template>
      </SectionTitle>
    </SectionShell>

    <!-- FOOTER -->
    <LandingFooter />
  </div>
</template>

<script setup lang="ts">
import LandingHeader from '~/components/layout/Header.vue'
import LandingFooter from '~/components/layout/Footer.vue'
import HeroPreview from '~/components/ui/Preview.vue'
import SectionShell from '~/components/ui/SectionShell.vue'
import SectionTitle from '~/components/ui/SectionTitle.vue'
import FeatureCard from '~/components/ui/FeatureCard.vue'
import BaseButton from '~/components/ui/BaseButton.vue'

const { isDark, toggleTheme } = useTheme()

useHead({
  title: 'WarungAI - Platform AI untuk Warung Anda',
  meta: [
    {
      name: 'description',
      content:
        'Platform AI untuk membantu usaha warung Anda menjadi lebih cerdas dan efisien',
    },
  ],
})
</script>
