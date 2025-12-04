<template>
  <div class="text-center mb-8 md:mb-12">
    <h2 class="text-3xl font-bold text-white mb-3">
      <slot name="title" />
    </h2>
    <p v-if="$slots.subtitle" class="text-gray-300 max-w-2xl mx-auto">
      <slot name="subtitle" />
    </p>
  </div>
</template>
