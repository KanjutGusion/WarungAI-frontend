<template>
  <section class="bg-slate-900/70 border border-slate-800 rounded-xl p-6 space-y-6">
    <div>
      <h2 class="text-lg font-semibold text-white">Keamanan Akun</h2>
      <p class="text-xs text-slate-400 mt-1">
        Ubah email dan kata sandi akun Anda.
      </p>
    </div>

    <form @submit.prevent="changePassword" class="space-y-4">

      <!-- Email -->
      <div class="space-y-1.5">
        <label class="text-sm font-medium text-slate-200">Email</label>
        <input v-model="form.email" type="email" class="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-sm 
                 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="email@contoh.com" />
      </div>

      <!-- Password sekarang -->
      <div class="space-y-1.5">
        <label class="text-sm font-medium text-slate-200">Kata Sandi Sekarang</label>
        <input v-model="form.currentPassword" type="password" class="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-sm 
                 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="••••••••" />
      </div>

      <!-- Password baru -->
      <div class="space-y-1.5">
        <label class="text-sm font-medium text-slate-200">Kata Sandi Baru</label>
        <input v-model="form.newPassword" type="password" class="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-sm 
                 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Minimal 8 karakter" />
      </div>

      <!-- Submit -->
      <div class="flex flex-col gap-3">
        <button type="submit" class="inline-flex items-center justify-center rounded-lg bg-amber-500 px-4 py-2 
                 text-sm font-medium text-slate-950 hover:bg-amber-400 transition disabled:opacity-60"
          :disabled="isSaving">
          <span v-if="!isSaving">Simpan Perubahan</span>
          <span v-else>Memproses...</span>
        </button>

        <p v-if="message" class="text-xs" :class="messageClass">
          {{ message }}
        </p>
      </div>

      <p class="border-t border-slate-800 pt-4 text-[11px] text-slate-500 leading-relaxed">
        Jangan bagikan kata sandi Anda kepada siapapun.
      </p>
    </form>
  </section>
</template>

<script setup lang="ts">
import { usePasswordSettings } from '~/composables/usePassword'

const { form, isSaving, message, messageClass, changePassword } = usePasswordSettings()
</script>
