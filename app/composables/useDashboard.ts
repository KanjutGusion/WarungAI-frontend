//dummy
import { ref, computed } from 'vue'

export type OcrRow = {
    id: number
    product: string
    qty: number
    price: number
    total: number
}

export type Stat = {
    icon: string
    value: string
    label: string
    trend: string | null
}

export function useDashboardOverview() {
    const stats = ref<Stat[]>([
        {
            icon: '💰',
            value: 'Rp 100',
            label: 'Pendapatan Hari Ini',
            trend: 'Omzet dari nota',
        },
        { icon: '🛒', value: '45', label: 'Transaksi', trend: '9 order baru' },
        { icon: '📦', value: '128', label: 'Produk Aktif', trend: null },
        { icon: '👥', value: '32', label: 'Pelanggan', trend: '3 pelanggan baru' },
    ])

    const ocrRows = ref<OcrRow[]>([])

    const omzetToday = computed(() =>
        ocrRows.value.reduce((sum, row) => sum + row.total, 0),
    )

    const formatRupiah = (amount: number) =>
        new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(amount || 0)

    const computedStats = computed<Stat[]>(() =>
        stats.value.map((stat) => {
            if (stat.label === 'Pendapatan Hari Ini') {
                return { ...stat, value: formatRupiah(omzetToday.value) }
            }
            return stat
        }),
    )

    const todayLabel = computed(() =>
        new Intl.DateTimeFormat('id-ID', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        }).format(new Date()),
    )

    const updateOcrData = (parsedData: OcrRow[]) => {
        ocrRows.value = parsedData
    }

    return {

        stats,
        ocrRows,


        omzetToday,
        computedStats,
        todayLabel,


        formatRupiah,
        updateOcrData,
    }
}
