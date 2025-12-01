/**
 * Middleware untuk proteksi halaman yang membutuhkan login
 */
export default defineNuxtRouteMiddleware(async (to, from) => {
  const { isLoggedIn, checkAuth } = useAuth()

  // Skip untuk halaman publik
  const publicPages = ['/', '/auth/login', '/auth/register']
  if (publicPages.includes(to.path)) {
    return
  }

  // Cek autentikasi
  if (!isLoggedIn.value) {
    const isAuthenticated = await checkAuth()
    if (!isAuthenticated) {
      return navigateTo('/auth/login')
    }
  }
})

