<template>
  <footer class="bg-slate-900 border-t border-white/10">
    <div class="max-w-6xl mx-auto px-6 py-12">
      <div class="grid md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div class="md:col-span-2">
          <h3 class="text-2xl font-bold text-white mb-4">🍜 WarungAI</h3>
          <p class="text-gray-400 max-w-md">
            Platform AI untuk membantu usaha warung dan UMKM Indonesia menjadi lebih cerdas dan efisien.
          </p>
        </div>

        <!-- Links -->
        <div>
          <h4 class="text-white font-semibold mb-4">Navigasi</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="text-gray-400 hover:text-white transition">Beranda</NuxtLink></li>
            <li><NuxtLink to="/#features" class="text-gray-400 hover:text-white transition">Fitur</NuxtLink></li>
            <li><NuxtLink to="/#about" class="text-gray-400 hover:text-white transition">Tentang</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-white font-semibold mb-4">Kontak</h4>
          <ul class="space-y-2 text-gray-400">
            <li>📧 hello@warungai.com</li>
            <li>📱 +62 812 3456 7890</li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
        <p>© {{ currentYear }} WarungAI. Dibuat dengan ❤️ di Indonesia</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

