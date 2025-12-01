<template>
  <div class="min-h-screen bg-slate-900 p-6">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-white">Dashboard</h1>
        <p class="text-gray-400 mt-2">Selamat datang di WarungAI</p>
      </div>

      <!-- Stats Cards -->
      <div class="grid md:grid-cols-4 gap-6 mb-8">
        <div 
          v-for="stat in stats" 
          :key="stat.label"
          class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
        >
          <div class="text-3xl mb-2">{{ stat.icon }}</div>
          <div class="text-2xl font-bold text-white">{{ stat.value }}</div>
          <div class="text-gray-400 text-sm">{{ stat.label }}</div>
        </div>
      </div>

      <!-- Content -->
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Recent Sales -->
        <div class="bg-slate-800 border border-white/10 rounded-xl overflow-hidden">
          <div class="px-6 py-4 border-b border-white/10">
            <h2 class="text-xl font-semibold text-white">Penjualan Terbaru</h2>
          </div>
          <div class="p-6 space-y-4">
            <div 
              v-for="sale in recentSales" 
              :key="sale.id"
              class="flex justify-between items-center py-2 border-b border-white/10 last:border-0"
            >
              <div>
                <p class="text-white">{{ sale.product }}</p>
                <p class="text-gray-400 text-sm">{{ sale.time }}</p>
              </div>
              <span class="text-green-400 font-semibold">{{ formatRupiah(sale.amount) }}</span>
            </div>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="bg-slate-800 border border-white/10 rounded-xl overflow-hidden">
          <div class="px-6 py-4 border-b border-white/10">
            <h2 class="text-xl font-semibold text-white">Aksi Cepat</h2>
          </div>
          <div class="p-6 grid grid-cols-2 gap-4">
            <button class="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-lg py-6 flex flex-col items-center transition">
              <span class="text-2xl mb-2">➕</span>
              Tambah Produk
            </button>
            <button class="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-lg py-6 flex flex-col items-center transition">
              <span class="text-2xl mb-2">📦</span>
              Stok Barang
            </button>
            <button class="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-lg py-6 flex flex-col items-center transition">
              <span class="text-2xl mb-2">📊</span>
              Laporan
            </button>
            <button class="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-lg py-6 flex flex-col items-center transition">
              <span class="text-2xl mb-2">⚙️</span>
              Pengaturan
            </button>
          </div>
        </div>
      </div>

      <!-- Back to Home -->
      <div class="mt-8 text-center">
        <NuxtLink to="/" class="text-purple-400 hover:text-purple-300">
          ← Kembali ke Beranda
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const stats = [
  { icon: '💰', value: 'Rp 2.5jt', label: 'Pendapatan Hari Ini' },
  { icon: '🛒', value: '45', label: 'Transaksi' },
  { icon: '📦', value: '128', label: 'Produk' },
  { icon: '👥', value: '32', label: 'Pelanggan' },
]

const recentSales = [
  { id: 1, product: 'Nasi Goreng Spesial', amount: 25000, time: '10 menit lalu' },
  { id: 2, product: 'Es Teh Manis', amount: 5000, time: '15 menit lalu' },
  { id: 3, product: 'Mie Ayam Bakso', amount: 20000, time: '30 menit lalu' },
  { id: 4, product: 'Kopi Susu', amount: 12000, time: '1 jam lalu' },
]

const formatRupiah = (amount) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount)
}
</script>
