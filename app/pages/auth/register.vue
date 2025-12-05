<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center"
  >
    <div class="w-full max-w-md mx-auto p-8">
      <div class="bg-slate-800 border border-white/10 rounded-xl p-8">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-white mb-2">🍜 WarungAI</h1>
          <p class="text-gray-400">Buat akun baru</p>
          <p v-if="errors.api" class="text-sm text-red-400">
            {{ errors.api }}
          </p>
        </div>

        <form @submit.prevent="handleRegister" class="space-y-6">
          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-300"
              >Username</label
            >
            <input
              v-model="form.username"
              type="text"
              placeholder="Nama lengkap"
              class="w-full px-4 py-3 bg-slate-700 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <p v-if="errors.username" class="text-sm text-red-400">
              {{ errors.username }}
            </p>
          </div>

          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-300">Email</label>
            <input
              v-model="form.email"
              type="email"
              placeholder="nama@email.com"
              class="w-full px-4 py-3 bg-slate-700 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <p v-if="errors.email" class="text-sm text-red-400">
              {{ errors.email }}
            </p>
          </div>
          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-300"
              >Phone number</label
            >
            <input
              v-model="form.phone"
              type="text"
              placeholder="0812345678"
              class="w-full px-4 py-3 bg-slate-700 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <p v-if="errors.phone" class="text-sm text-red-400">
              {{ errors.phone }}
            </p>
          </div>
          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-300"
              >Password</label
            >
            <div class="relative">
              <input
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="••••••••"
                class="w-full px-4 py-3 pr-12 bg-slate-700 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
              >
                <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>
            <p v-if="errors.password" class="text-sm text-red-400">
              {{ errors.password }}
            </p>
          </div>

          <button
            type="submit"
            class="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            :disabled="isLoading"
          >
            {{ isLoading ? "Memuat..." : "Daftar" }}
          </button>
        </form>

        <div class="mt-6 text-center">
          <p class="text-gray-400">
            Sudah punya akun?
            <NuxtLink
              to="/auth/login"
              class="text-purple-400 hover:text-purple-300"
            >
              masuk
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const form = reactive({
  username: "",
  email: "",
  password: "",
  phone: "",
});

const errors = reactive({
  username: "",
  email: "",
  password: "",
  phone: "",
});

const isLoading = ref(false);
const showPassword = ref(false);

const handleRegister = async () => {
  errors.username = "";
  errors.email = "";
  errors.api = "";
  errors.password = "";
  errors.phone = "";
  const { register } = useAuth();
  if (!form.username) {
    errors.username = "Nama harus diisi";
    return;
  }

  if (!form.email) {
    errors.email = "Email harus diisi";
    return;
  }

  if (!form.password) {
    errors.password = "Password harus diisi";
    return;
  }
  const phoneRegex = /^(\+62|62|0)8[1-9][0-9]{7,11}$/;
  if (form.phone && !phoneRegex.test(form.phone)) {
    errors.phone = "Nomor HP tidak valid";
    return;
  }

  isLoading.value = true;
  const res = await register(
    form.username,
    form.password,
    form.email,
    form.phone
  );

  isLoading.value = false;
  if (res.success) {
    navigateTo("/dashboard");
  } else {
    switch (res.status) {
      case 400:
        // Bad request, misal validation failed
        errors.api = res.error || "Form tidak valid, silakan periksa kembali";
        break;
      case 401:
        errors.api = "Email atau password salah";
        break;
      case 403:
        errors.api = `User dengan email ini sudah terdaftar`;
        break;
      case 404:
        errors.api = "Resource tidak ditemukan";
        break;
      case 500:
        errors.api = "Terjadi kesalahan server, silakan coba lagi nanti";
        break;
      default:
        errors.api = "Terjadi kesalahan, silakan coba lagi";
    }
  }
};
</script>
