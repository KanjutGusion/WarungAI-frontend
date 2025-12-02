//dummy
import { reactive, ref, computed } from 'vue'

export function usePasswordSettings() {
  const form = reactive({
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const isSaving = ref(false)
  const message = ref('')
  const success = ref<boolean | null>(null)

  const messageClass = computed(() =>
    success.value === null ? '' : success.value ? 'text-emerald-400' : 'text-red-400',
  )

  const validate = () => {
    if (!form.currentPassword || !form.newPassword) {
      return 'Semua field sandi wajib diisi.'
    }
    if (form.newPassword.length < 8) {
      return 'Kata sandi baru minimal 8 karakter.'
    }
    if (form.newPassword !== form.confirmPassword) {
      return 'Konfirmasi sandi tidak cocok.'
    }
    return ''
  }

  const changePassword = async () => {
    isSaving.value = true
    message.value = ''
    success.value = null

    const err = validate()
    if (err) {
      success.value = false
      message.value = err
      isSaving.value = false
      return
    }

    try {

      await new Promise(r => setTimeout(r, 700))
      success.value = true
      message.value = 'Kata sandi berhasil diubah.'
      form.currentPassword = ''
      form.newPassword = ''
      form.confirmPassword = ''
    } catch {
      success.value = false
      message.value = 'Gagal mengubah sandi. Pastikan sandi sekarang benar.'
    } finally {
      isSaving.value = false
    }
  }

  return { form, isSaving, message, messageClass, changePassword, onSubmit: changePassword }
}
