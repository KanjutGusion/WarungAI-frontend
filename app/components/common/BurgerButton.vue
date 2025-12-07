<template>
  <Transition name="burger-fade">
    <button
      v-if="!isOpen"
      @click="toggleSidebar"
      class="lg:hidden fixed top-4 left-4 z-[60] p-2.5 rounded-xl bg-white dark:bg-slate-800 
             border border-gray-200 dark:border-slate-700 
             shadow-lg hover:shadow-xl
             text-gray-600 dark:text-slate-300
             hover:bg-gray-50 dark:hover:bg-slate-700
             transition-all duration-300
             hover:scale-105 active:scale-95"
      aria-label="Toggle menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </Transition>
</template>

<script setup lang="ts">
import { useSidebar } from '@/composables/useSidebar'

const { toggleSidebar, isOpen } = useSidebar()
</script>

<style scoped>
/* Fade transition untuk burger button */
.burger-fade-enter-active,
.burger-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.burger-fade-enter-from,
.burger-fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>

