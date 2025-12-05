<template>
  <div class="bg-white dark:bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg dark:shadow-none hover:shadow-xl dark:hover:bg-white/20 transition-all duration-300 border border-gray-100 dark:border-transparent">
    <div class="text-4xl mb-4">
      <slot name="icon" />
    </div>
    <h3 class="text-xl font-semibold text-slate-900 dark:text-white mb-2">
      <slot name="title" />
    </h3>
    <p class="text-gray-600 dark:text-gray-400">
      <slot name="description" />
    </p>
  </div>
</template>
