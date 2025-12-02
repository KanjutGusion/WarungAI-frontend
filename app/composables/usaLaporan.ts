//dummy
import { ref, computed } from 'vue'

interface OmzetPoint {
  label: string
  value: number
}

interface FinanceSummary {
  omzetToday: number
  totalTransactions: number
  uniqueProducts: number
  totalExpenses: number
}

export function useFinanceReport() {
  const isLoading = ref(true)
  const error = ref<string | null>(null)

  const summary = ref<FinanceSummary>({
    omzetToday: 0,
    totalTransactions: 0,
    uniqueProducts: 0,
    totalExpenses: 0,
  })

  const omzetSeries = ref<OmzetPoint[]>([
    { label: 'Sen', value: 0 },
    { label: 'Sel', value: 0 },
    { label: 'Rab', value: 0 },
    { label: 'Kam', value: 0 },
    { label: 'Jum', value: 0 },
    { label: 'Sab', value: 0 },
    { label: 'Min', value: 0 },
  ])

  const formatRupiah = (value: number) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(value)

  const loadReport = async () => {
    try {
      isLoading.value = true
      error.value = null

      await new Promise((r) => setTimeout(r, 600))

      summary.value = {
        omzetToday: 1250000,
        totalTransactions: 32,
        uniqueProducts: 18,
        totalExpenses: 450000,
      }

      omzetSeries.value = [
        { label: 'Sen', value: 800000 },
        { label: 'Sel', value: 650000 },
        { label: 'Rab', value: 900000 },
        { label: 'Kam', value: 1200000 },
        { label: 'Jum', value: 1500000 },
        { label: 'Sab', value: 1100000 },
        { label: 'Min', value: 1300000 },
      ]
    } catch (err: any) {
      error.value = err?.message ?? 'Gagal memuat laporan.'
    } finally {
      isLoading.value = false
    }
  }

  // Untuk line chart 
  const omzetPath = computed(() => {
    const points = omzetSeries.value
    if (!points.length) return ''

    const maxVal = Math.max(...points.map((p) => p.value)) || 1
    const width = 200
    const height = 60
    const padding = 6
    const stepX = points.length > 1 ? width / (points.length - 1) : 0

    return points
      .map((p, idx) => {
        const x = idx * stepX
        const y =
          height -
          padding -
          (p.value / maxVal) * (height - padding * 2)

        return `${idx === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`
      })
      .join(' ')
  })

  return {
    isLoading,
    error,
    summary,
    omzetSeries,
    omzetPath,
    formatRupiah,
    loadReport,
  }
}
