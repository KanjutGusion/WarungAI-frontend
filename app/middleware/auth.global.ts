/**
 * Middleware untuk proteksi halaman yang membutuhkan login
 */
export default defineNuxtRouteMiddleware(async (to, from) => {
  const token = useCookie("auth_token", { path: "/" });

  const publicPages = ["/", "/auth/login", "/auth/register"];

  const authPages = ["/auth/login", "/auth/register"];
  // Halaman publik
  if (authPages.includes(to.path) && token.value) {
    return navigateTo("/dashboard");
  }

  // Jika di halaman publik biasa (seperti /) → biarkan akses
  if (publicPages.includes(to.path)) {
    return;
  }

  // Halaman private - cek token
  if (!token.value) {
    return navigateTo("/auth/login");
  }
});
