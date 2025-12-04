<template>
  <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition">
    <div class="text-4xl mb-4">
      <slot name="icon" />
    </div>
    <h3 class="text-xl font-semibold text-white mb-2">
      <slot name="title" />
    </h3>
    <p class="text-gray-400">
      <slot name="description" />
    </p>
  </div>
</template>
