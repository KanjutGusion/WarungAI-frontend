<template>
  <div class="bg-slate-900/70 border border-slate-700/50 rounded-xl p-5 
           shadow-lg transition-all duration-300 ease-in-out
           transform hover:-translate-y-1 hover:border-purple-600 hover:shadow-purple-900/40">
    <div class="flex items-center justify-between mb-3">
      <div class="text-sm font-medium text-slate-400">{{ label }}</div>
      <div class="text-2xl text-white opacity-80">{{ icon }}</div>
    </div>
    
    <div class="text-3xl font-bold text-white tracking-tight">
      {{ value }}
    </div>
    
    <p v-if="trend" 
       class="text-xs mt-2"
       :class="trend.includes('baru') || trend.includes('Omzet') ? 'text-purple-400' : 'text-emerald-400'">
       
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
