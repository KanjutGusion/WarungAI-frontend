<template>
  <div
    class="relative w-full max-w-xl aspect-[16/9] rounded-2xl overflow-hidden 
           border border-gray-200 dark:border-slate-700/70 bg-white dark:bg-slate-900 
           shadow-2xl shadow-gray-400/30 dark:shadow-black/40
           animate-fade-slide animate-floating transition-colors duration-300"
  >
    <img 
      src="/assets/css/images.jpeg" 
      alt="Dashboard WarungAI" 
      class="w-full h-full object-cover"
    />

    <div class="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-gray-200/50 dark:ring-white/5"></div>
  </div>
</template>

<style scoped>

@keyframes fadeSlide {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.97);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-fade-slide {
  animation: fadeSlide 0.8s ease-out forwards;
}


@keyframes floating {
  0% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
  100% { transform: translateY(0); }
}

.animate-floating {
  animation: floating 6s ease-in-out infinite;
}
</style>
