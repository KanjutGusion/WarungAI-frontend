<template>
  <div class="grid lg:grid-cols-3 gap-6">
    <div class="lg:col-span-2 bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
      <div class="px-6 py-4 border-b border-slate-700 flex items-center justify-between">
        <!--Upload nota-->
        <div>
          <h2 class="text-lg font-semibold text-white">Upload Nota</h2>
          <p class="text-xs text-slate-400 mt-1">
            Upload foto nota untuk hitung omzet & parsing OCR.
          </p>
        </div>
      </div>

      <div class="p-6 grid md:grid-cols-[1.2fr,1.5fr] gap-6 items-start">
        <div class="space-y-4">
          <input ref="fileInput" type="file" accept="image/*" class="hidden" @change="onFileChange" />

          <div class="text-xs text-slate-400 border border-dashed border-slate-600 rounded-lg px-3 py-2">
            <p class="font-medium text-slate-200 mb-1">Status file</p>
            <p v-if="fileName">
              📄 <span class="text-slate-100">{{ fileName }}</span>
            </p>
            <p v-else class="italic">Belum ada file yang dipilih.</p>
            <p class="mt-1">
              Format yang didukung: <span class="text-slate-200">JPG, PNG</span>
            </p>
          </div>

          <button type="button" @click="selectFile"
            class="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-3 rounded-lg transition flex items-center justify-center space-x-2 disabled:opacity-50"
            :disabled="isUploading">
            <span v-if="!isUploading">Pilih Nota</span>
            <span v-else>Sedang mengupload...</span>
          </button>


          <button type="button"
            class="w-full border border-slate-600 text-slate-200 hover:bg-slate-700 text-xs font-medium px-4 py-2 rounded-lg transition disabled:opacity-50"
            :disabled="!selectedFile || isUploading" @click="handleProcess">
            Upload &amp; Proses
          </button>
        </div>
        <!--Preview Nota-->
        <div>
          <p class="text-xs font-medium text-slate-300 mb-2">
            Preview Nota
          </p>
          <div
            class="aspect-[4/3] w-full rounded-xl border border-slate-700 bg-slate-900 flex items-center justify-center overflow-hidden">
            <img v-if="previewUrl" :src="previewUrl" alt="Preview nota" class="w-full h-full object-contain" />
            <div v-else class="flex flex-col items-center justify-center text-slate-500 text-xs px-6 text-center">
              <span class="text-3xl mb-2">🧾</span>
              Pilih file nota untuk melihat preview di sini.
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Hasil OCR Parsing-->
    <div class="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
      <div class="px-6 py-4 border-b border-slate-700">
        <h2 class="text-lg font-semibold text-white">
          Hasil OCR Parsing
        </h2>
      </div>
      <div class="p-4 space-y-3 max-h-[320px] overflow-y-auto">
        <div v-if="!ocrRows.length" class="text-xs text-slate-400 italic">
          Belum ada data OCR. Upload &amp; proses nota terlebih dahulu.
        </div>

        <div v-else class="overflow-x-auto">
          <table class="max-w-full text-slate-200">



            <thead>
              <tr class="text-left border-b border-slate-700">
                <th class="py-2 pr-4">Produk</th>
                <th class="py-2 pr-4">Qty</th>
                <th class="py-2 pr-4">Harga</th>
                <th class="py-2 pr-4 text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in ocrRows" :key="row.id" class="border-b border-slate-800 last:border-0">
                <td class="py-2 pr-4">{{ row.product }}</td>
                <td class="py-2 pr-4">{{ row.qty }}</td>
                <td class="py-2 pr-4">{{ formatRupiah(row.price) }}</td>
                <td class="py-2 pr-4 text-right">
                  {{ formatRupiah(row.total) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOcrUpload, type OcrRow } from '~/composables/useOcrUpload'

const emit = defineEmits<{
  'ocr-parsed': [rows: OcrRow[]]
}>()

const props = defineProps<{
  ocrRows: OcrRow[]
  formatRupiah: (amount: number) => string
}>()

const {
  fileInput,
  selectedFile,
  previewUrl,
  fileName,
  isUploading,
  uploadError,
  selectFile,
  onFileChange,
  processUpload,
} = useOcrUpload()

const handleProcess = () => {
  processUpload((rows) => emit('ocr-parsed', rows))
}
</script>
