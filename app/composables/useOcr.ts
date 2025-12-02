import { ref, computed } from 'vue'

export type OcrRow = {
  id: number
  product: string
  qty: number
  price: number
  subtotal: number
}

export function useOcr() {
  const ocrRows = ref<OcrRow[]>([])
  const ocrLoading = ref(false)
  const uploadError = ref<string | null>(null)

  const omzetToday = computed(() =>
    ocrRows.value.reduce((sum, row) => sum + row.subtotal, 0),
  )

  const uniqueProductCount = computed(() => {
    const products = new Set(ocrRows.value.map(row => row.product))
    return products.size
  })

  const formatRupiah = (amount: number) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount || 0)

  const updateOcrData = (parsedData: OcrRow[]) => {
    ocrRows.value = parsedData
    uploadError.value = null
  }

  const clearError = () => {
    uploadError.value = null
  }

  return {
    ocrRows,
    ocrLoading,
    uploadError,
    omzetToday,
    uniqueProductCount,
    formatRupiah,
    updateOcrData,
    clearError,
  }
}
