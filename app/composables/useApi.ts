/**
 * Composable untuk komunikasi dengan Backend API
 */
export const useApi = () => {
  const config = useRuntimeConfig()
  const baseURL = config.public.apiBase as string

  /**
   * Generic fetch wrapper
   */
  const fetchApi = async <T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> => {
    const response = await $fetch<T>(endpoint, {
      baseURL,
      ...options,
    })
    return response
  }

  /**
   * GET request
   */
  const get = <T>(endpoint: string) => fetchApi<T>(endpoint, { method: 'GET' })

  /**
   * POST request
   */
  const post = <T>(endpoint: string, body: unknown) =>
    fetchApi<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })

  /**
   * PUT request
   */
  const put = <T>(endpoint: string, body: unknown) =>
    fetchApi<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })

  /**
   * DELETE request
   */
  const del = <T>(endpoint: string) => fetchApi<T>(endpoint, { method: 'DELETE' })

  return {
    get,
    post,
    put,
    del,
    fetchApi,
  }
}

