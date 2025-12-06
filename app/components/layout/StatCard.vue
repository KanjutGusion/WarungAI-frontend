<template>
  <div
    class="group relative rounded-2xl px-5 py-4
           bg-white dark:bg-slate-900/80 border border-gray-200 dark:border-slate-800/80
           shadow-lg dark:shadow-[0_18px_40px_rgba(15,23,42,0.8)]
           transition-all duration-300 ease-out
           hover:-translate-y-1 hover:border-purple-400 hover:shadow-purple-500/30"
  >
    <div class="flex items-center justify-between mb-3">
      <div class="text-xs font-medium tracking-wide text-gray-500 dark:text-slate-400">
        {{ label }}
      </div>
      <div class="text-2xl text-slate-700 dark:text-slate-100/90">
        {{ icon }}
      </div>
    </div>

    <div class="text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
      {{ value }}
    </div>

    <p
      v-if="trend"
      class="text-xs mt-2 flex items-center gap-1"
      :class="trend.includes('baru') || trend.includes('Omzet')
        ? 'text-emerald-600 dark:text-emerald-400'
        : 'text-purple-600 dark:text-purple-300'"
    >
      <span v-if="label === 'Pendapatan Hari Ini'">
        ↑ {{ trend }}
      </span>
      <span v-else>
        * {{ trend }}
      </span>
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  value: string
  label: string
  trend?: string | null
}>()
</script>
