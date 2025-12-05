<template>
  <footer id="Footer" class="bg-gray-100 dark:bg-slate-900 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
    <div class="max-w-6xl mx-auto px-6 py-12">
      <div class="grid md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div class="md:col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <img src="~/assets/images/logo_warung_Ai.png" alt="WarungAI Logo" class="h-10 w-auto" />
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white">WarungAI</h3>
          </div>
          <p class="text-gray-600 dark:text-gray-400 max-w-md">
            Platform AI untuk membantu usaha warung dan UMKM Indonesia menjadi lebih cerdas dan efisien.
          </p>
        </div>

        <!-- Links -->
        <div>
          <h4 class="text-slate-900 dark:text-white font-semibold mb-4">Navigasi</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition">Beranda</NuxtLink></li>
            <li><NuxtLink to="/#features" class="text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition">Fitur</NuxtLink></li>
            <li><NuxtLink to="/#about" class="text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition">Tentang</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-slate-900 dark:text-white font-semibold mb-4">Kontak</h4>
          <ul class="space-y-2 text-gray-600 dark:text-gray-400">
            <li>📧 kanjutgusion@tim.com</li>
            <li>📱 +62 000 000 000</li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-12 pt-8 border-t border-gray-200 dark:border-white/10 text-center text-gray-600 dark:text-gray-400">
        <p>© {{ currentYear }} WarungAI dibuat dengan ❤️ menggunakan Nuxt.js</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

