<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none transition-colors duration-300">
    <nav class="max-w-6xl mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2 hover:opacity-80 transition">
          <img src="~/assets/images/logo_warung_Ai.png" alt="WarungAI Logo" class="h-10 w-auto" />
          <span class="text-2xl font-bold text-slate-900 dark:text-white">WarungAI</span>
        </NuxtLink>

        <!-- Navigation  -->
        <div class="hidden md:flex items-center space-x-6">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.to"
            :to="link.to"
            class="text-gray-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition"
          >
            {{ link.label }}
          </NuxtLink>

          <!-- Masuk  -->
          <NuxtLink to="/auth/login">
            <CommonButton variant="primary" size="sm">
              Masuk
            </CommonButton>
          </NuxtLink>
        </div>

        <!-- Mobile menu  -->
        <button 
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden text-slate-900 dark:text-white p-2"
        >
          <span class="text-2xl">☰</span>
        </button>
      </div>

      <!-- menu -->
      <div v-if="isMenuOpen" class="md:hidden mt-4 pb-4 space-y-4">
        <NuxtLink 
          v-for="link in navLinks" 
          :key="link.to"
          :to="link.to"
          class="block text-gray-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition"
          @click="isMenuOpen = false"
        >
          {{ link.label }}
        </NuxtLink>

        <!-- Tombol Masuk  -->
        <NuxtLink 
          to="/auth/login" 
          class="block"
          @click="isMenuOpen = false"
        >
          <CommonButton variant="primary" size="sm" class="w-full">
            Masuk
          </CommonButton>
        </NuxtLink>
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
]
</script>
