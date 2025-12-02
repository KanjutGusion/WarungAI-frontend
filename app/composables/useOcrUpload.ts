//dummy
import { ref } from 'vue'

export type OcrRow = {
    id: number
    product: string
    qty: number
    price: number
    total: number
}

export function useOcrUpload() {
    const fileInput = ref<any>(null)
    const selectedFile = ref<File | null>(null)
    const previewUrl = ref('')
    const fileName = ref('')
    const isUploading = ref(false)
    const uploadError = ref<string | null>(null)

    const selectFile = () => {
        if (!fileInput.value) return
        fileInput.value.click()
    }

    const onFileChange = (event: Event) => {
        const target = event.target as any
        const file = target.files?.[0]
        if (!file) return

        selectedFile.value = file
        fileName.value = file.name
        uploadError.value = null

        if (previewUrl.value) {
            URL.revokeObjectURL(previewUrl.value)
        }
        previewUrl.value = URL.createObjectURL(file)
    }


    const processUpload = async (onParsed: (rows: OcrRow[]) => void) => {
        if (!selectedFile.value) {
            uploadError.value = 'Pilih file nota terlebih dahulu.'
            return
        }

        isUploading.value = true
        uploadError.value = null

        try {

            await new Promise((r) => setTimeout(r, 800))

            const dummyData: OcrRow[] = [
                { id: 1, product: 'Nasi Goreng Spesial', qty: 2, price: 25000, total: 50000 },
                { id: 2, product: 'Es Teh Manis', qty: 3, price: 5000, total: 15000 },
                { id: 3, product: 'Mie Ayam Bakso', qty: 1, price: 20000, total: 20000 },
                { id: 4, product: 'Kopi Susu', qty: 2, price: 12000, total: 24000 },
            ]

            onParsed(dummyData)
        } catch (err) {
            console.error(err)
            uploadError.value = 'Gagal memproses nota.'
        } finally {
            isUploading.value = false
        }
    }

    return {
        fileInput,
        selectedFile,
        previewUrl,
        fileName,
        isUploading,
        uploadError,
        selectFile,
        onFileChange,
        processUpload,
    }
}
