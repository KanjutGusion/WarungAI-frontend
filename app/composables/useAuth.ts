/**
 * Composable untuk Authentication
 */
export const useAuth = () => {
  const user = useState<User | null>('user', () => null)
  const isLoggedIn = computed(() => !!user.value)

  /**
   * Login user
   */
  const login = async (email: string, password: string) => {
    const api = useApi()
    try {
      const response = await api.post<AuthResponse>('/auth/login', { email, password })
      user.value = response.user
      // Store token in cookie
      const token = useCookie('auth_token')
      token.value = response.token
      return { success: true }
    } catch (error) {
      return { success: false, error }
    }
  }

  /**
   * Logout user
   */
  const logout = () => {
    user.value = null
    const token = useCookie('auth_token')
    token.value = null
    navigateTo('/auth/login')
  }

  /**
   * Check if user is authenticated
   */
  const checkAuth = async () => {
    const token = useCookie('auth_token')
    if (!token.value) return false

    const api = useApi()
    try {
      const response = await api.get<User>('/auth/me')
      user.value = response
      return true
    } catch {
      logout()
      return false
    }
  }

  return {
    user,
    isLoggedIn,
    login,
    logout,
    checkAuth,
  }
}

// Types
interface User {
  id: number
  name: string
  email: string
  avatar?: string
}

interface AuthResponse {
  user: User
  token: string
}

