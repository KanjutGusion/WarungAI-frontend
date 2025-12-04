<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950
 flex items-center justify-center">
    <div class="w-full max-w-md mx-auto p-8">
      <div class="bg-slate-800 border border-white/10 rounded-xl p-8">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-white mb-2">🍜 WarungAI</h1>
          <p class="text-gray-400">Masuk ke akun Anda</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-6">
          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-300">Email</label>
            <input v-model="form.email" type="email" placeholder="nama@email.com"
              class="w-full px-4 py-3 bg-slate-700 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <p v-if="errors.email" class="text-sm text-red-400">{{ errors.email }}</p>
          </div>

          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-300">Password</label>
            <input v-model="form.password" type="password" placeholder="••••••••"
              class="w-full px-4 py-3 bg-slate-700 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <p v-if="errors.password" class="text-sm text-red-400">{{ errors.password }}</p>
          </div>

          <button type="submit"
            class="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            :disabled="isLoading">
            {{ isLoading ? 'Memuat...' : 'Masuk' }}
          </button>
        </form>

        <div class="mt-6 text-center">
          <p class="text-gray-400">
            Belum punya akun?
            <NuxtLink to="/auth/register" class="text-purple-400 hover:text-purple-300">
              daftar
            </NuxtLink>

          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const form = reactive({
  email: '',
  password: '',
})

const errors = reactive({
  email: '',
  password: '',
})

const isLoading = ref(false)

const handleLogin = async () => {
  errors.email = ''
  errors.password = ''

  if (!form.email) {
    errors.email = 'Email harus diisi'
    return
  }

  if (!form.password) {
    errors.password = 'Password harus diisi'
    return
  }

  isLoading.value = true

  // Simulate login
  setTimeout(() => {
    isLoading.value = false
    navigateTo('/dashboard')
  }, 1000)
}
</script>
