<template>
  <div :class="cardClasses">
    <div v-if="$slots.header" class="px-6 py-4 border-b border-white/10">
      <slot name="header" />
    </div>
    <div class="p-6">
      <slot />
    </div>
    <div v-if="$slots.footer" class="px-6 py-4 border-t border-white/10">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'default' | 'glass'
  hover?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  hover: false,
})

const cardClasses = computed(() => {
  const base = 'rounded-xl overflow-hidden'
  
  const variants = {
    default: 'bg-slate-800 border border-white/10',
    glass: 'bg-white/10 backdrop-blur-sm',
  }
  
  const hoverEffect = props.hover ? 'hover:bg-white/20 transition-colors cursor-pointer' : ''
  
  return [base, variants[props.variant], hoverEffect]
})
</script>

