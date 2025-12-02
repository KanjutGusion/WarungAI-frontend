<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
    <nav class="max-w-6xl mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <NuxtLink to="/" class="text-2xl font-bold text-white hover:text-purple-400 transition">
          🍜 WarungAI
        </NuxtLink>

        <!-- Navigation -->
        <div class="hidden md:flex items-center space-x-6">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.to"
            :to="link.to"
            class="text-gray-300 hover:text-white transition"
          >
            {{ link.label }}
          </NuxtLink>
          <CommonButton variant="primary" size="sm">
            Masuk
          </CommonButton>
        </div>

        <!-- Mobile menu button -->
        <button 
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden text-white p-2"
        >
          <span class="text-2xl">☰</span>
        </button>
      </div>

      <!-- Mobile menu -->
      <div v-if="isMenuOpen" class="md:hidden mt-4 pb-4 space-y-4">
        <NuxtLink 
          v-for="link in navLinks" 
          :key="link.to"
          :to="link.to"
          class="block text-gray-300 hover:text-white transition"
          @click="isMenuOpen = false"
        >
          {{ link.label }}
        </NuxtLink>
        <CommonButton variant="primary" size="sm" class="w-full">
          Masuk
        </CommonButton>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const navLinks = [
  { to: '/#features', label: 'Fitur' },
  { to: '/#about', label: 'Tentang' },
  { to: '/dashboard', label: 'Dashboard' },
]
</script>

