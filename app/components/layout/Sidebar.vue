<template>
  <aside class="w-64 bg-slate-950 border-r border-slate-800 flex flex-col">
    <!-- Brand -->
    <div class="px-6 py-4 border-b border-purple-600/30">
      <h1 class="text-2xl font-extrabold text-white tracking-wider">
        <span>W</span>arung<span>AI</span>
      </h1>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 px-3 py-6 space-y-1">
      <template v-for="item in navItems" :key="item.label">
        <!-- Logout item -->
        <button
          v-if="item.action === 'logout'"
          @click="handleNav(item)"
          class="group flex items-center w-full px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-200"
        >
          <span class="mr-3 text-lg">{{ item.icon }}</span>
          <span>{{ item.label }}</span>
        </button>

        <!-- Normal links -->
        <NuxtLink
          v-else
          :to="item.to"
          class="group flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
          :class="linkClass(item.to || '/')"
        >
          <span class="mr-3 text-lg">{{ item.icon }}</span>
          <span>{{ item.label }}</span>
        </NuxtLink>
      </template>
    </nav>

    <!-- Footer link -->
    <div class="mt-auto px-6 py-4 border-t border-slate-800/50">
      <NuxtLink
        to="/"
        class="flex items-center justify-center text-sm text-purple-400 hover:text-purple-300 transition"
      >
        ← Kembali ke Beranda
      </NuxtLink>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const route = useRoute()
const router = useRouter()
const { logout } = useAuth()

interface NavItem {
  to?: string
  icon: string
  label: string
  action?: string
}

const navItems: NavItem[] = [
  { to: '/dashboard', icon: '📊', label: 'Overview' },
  { to: '/dashboard/AiAssistant', icon: '🤖', label: 'AI Asisten' },
  { to: '/dashboard/Laporan', icon: '💸', label: 'Laporan Keuangan' },
  { to: '/dashboard/settings', icon: '⚙️', label: 'Settings' },
  { icon: '🚪', label: 'Logout', action: 'logout' },
]

const linkClass = (to: string) => {
  const isActive = route.path === to
  return isActive
    ? 'bg-purple-600/20 text-purple-300 font-semibold border-l-4 border-purple-500 hover:bg-purple-600/30'
    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
}

const handleNav = (item: NavItem) => {
  if (item.action === 'logout') {
    logout()
  } else if (item.to) {
    router.push(item.to)
  }
}
</script>
