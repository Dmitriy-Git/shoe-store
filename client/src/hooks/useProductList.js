import { ref, onMounted, computed } from 'vue'
import { getProductList } from '../api'

export default function useProductList() {
    const data = ref(null)

    const getData = async () => {
        try {
            data.value = await getProductList()
        } catch(e) {
            console.log(e)
        }
    }

    onMounted(getData)

    const rows = computed(() => data.value?.rows || [])
    const count = computed(() => data.value?.count || 0)
      
    return { count, rows }
}