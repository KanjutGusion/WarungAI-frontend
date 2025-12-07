//dummy
import { ref, computed } from "vue";

export type Stat = {
  icon: string;
  value: string;
  label: string;
};

export function useDashboardOverview() {
  const api = useApi();

   
  const ocrRows = ref<OcrRow[]>([]);

  const omzetToday = computed(() =>
    ocrRows.value.reduce((sum, row) => sum + row.total, 0)
  );

  const formatRupiah = (amount: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount || 0);

//   const computedStats = computed<Stat[]>(() =>
//     stats.value.map((stat) => {
//       if (stat.label === "Pendapatan Total") {
//         return { ...stat, value: formatRupiah(omzetToday.value) };
//       }
//       return stat;
//     })
//   );

  const todayLabel = computed(() =>
    new Intl.DateTimeFormat("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date())
  );

  const updateOcrData = (parsedData: OcrRow[]) => {
    ocrRows.value = parsedData;
  };

  return {
    ocrRows,
    // computedStats,
    todayLabel,
    formatRupiah,
    updateOcrData,
  };
}