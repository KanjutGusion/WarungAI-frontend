<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <!-- Navigation -->
    <nav class="px-6 py-4">
      <div class="max-w-6xl mx-auto flex justify-between items-center">
        <div class="text-2xl font-bold text-white">
          🍜 WarungAI
        </div>
        <div class="space-x-6">
          <a href="#features" class="text-gray-300 hover:text-white transition">Fitur</a>
          <a href="#about" class="text-gray-300 hover:text-white transition">Tentang</a>
          <NuxtLink to="/dashboard"
            class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition">
            Mulai
          </NuxtLink>

        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="px-6 py-20">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-6">
          Selamat Datang di
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            WarungAI
          </span>
        </h1>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Platform AI untuk membantu usaha warung Anda menjadi lebih cerdas dan efisien
        </p>
        <div class="flex gap-4 justify-center">
          <button
            class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105">
            Coba Gratis
          </button>
          <button
            class="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition">
            Pelajari Lebih
          </button>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="px-6 py-20">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-white text-center mb-12">Fitur Unggulan</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition">
            <div class="text-4xl mb-4">📊</div>
            <h3 class="text-xl font-semibold text-white mb-2">Analisis Penjualan</h3>
            <p class="text-gray-400">Pantau penjualan harian dengan dashboard yang mudah dipahami</p>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition">
            <div class="text-4xl mb-4">🤖</div>
            <h3 class="text-xl font-semibold text-white mb-2">AI Assistant</h3>
            <p class="text-gray-400">Asisten Cerdas Naikkan Omzet dan Tentukan Harga Optimal</p>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition">
            <div class="text-4xl mb-4">💰</div>
            <h3 class="text-xl font-semibold text-white mb-2">Laporan Keuangan</h3>
            <p class="text-gray-400">Catat pemasukan dan pengeluaran secara otomatis</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="px-6 py-20">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-white mb-6">Tentang WarungAI</h2>
        <p class="text-gray-300 text-lg leading-relaxed">
          WarungAI adalah solusi digital untuk UMKM Indonesia. Kami percaya bahwa teknologi
          AI dapat membantu warung dan usaha kecil berkembang lebih pesat dengan tools yang
          mudah digunakan dan terjangkau.
        </p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="px-6 py-8 border-t border-white/10">
      <div class="max-w-6xl mx-auto text-center text-gray-400">
        <p>© 2024 WarungAI. Dibuat dengan ❤️ menggunakan Nuxt.js</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
useHead({
  title: 'WarungAI - Platform AI untuk Warung Anda',
  meta: [
    { name: 'description', content: 'Platform AI untuk membantu usaha warung Anda menjadi lebih cerdas dan efisien' }
  ]
})
</script>
