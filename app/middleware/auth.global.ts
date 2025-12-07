/**
 * Middleware untuk proteksi halaman yang membutuhkan login
 */
export default defineNuxtRouteMiddleware(async (to, from) => {
  const { user, isLoggedIn,checkAuth } = useAuth();

  const publicPages = ["/", "/auth/login", "/auth/register"];

  const authPages = ["/auth/login", "/auth/register"];
  // Halaman publik
  if (authPages.includes(to.path) && isLoggedIn) {
    return navigateTo("/dashboard");
  }

  // Jika di halaman publik biasa (seperti /) → biarkan akses
  if (publicPages.includes(to.path)) {
    return;
  }

  // Halaman private - cek token
  if (!isLoggedIn || !user) {
    const user = await checkAuth()
    if (!user) {
      return navigateTo("/auth/login");
    }
  }
});
