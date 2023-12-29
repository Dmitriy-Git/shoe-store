import { ref, onMounted, computed, watch, reactive } from 'vue'
import { getProductList } from '../api'

export default function useProductList() {
    const dataSource = ref(null)
    const loading = ref(false)
    const page = ref(1)
    const filters = reactive({
        rangePrice: null,
        brands: null,
    })

    const getData = async (params) => {
        loading.value = true

        try {
            const { data: result } = await getProductList(params)

            if(dataSource.value && params?.page > 1) {
                dataSource.value = {
                    rows: [...dataSource.value.rows, ...result.rows],
                    count: result.count
                }
            } else {
                dataSource.value = result
            }

        } catch(e) {
            console.log(e)
        } finally {
            loading.value = false
        }
    }

    onMounted(getData)

    const rows = computed(() => dataSource.value?.rows || [])
    const count = computed(() => dataSource.value?.count || 0)

    watch(page, (newValue) => {
        const params = { page: newValue, brands: filters.brands, rangePrice: filters.rangePrice }

        getData(params)
    })

    watch(filters, (newValue) => {
        const { brands, rangePrice } = newValue

        const params = { page: 1, brands, rangePrice }
        page.value = 1

        getData(params)
    })

    const loadMore = () => {
        page.value +=1        
    }

    const applyFilters = (value) => {
        const { brands, rangePrice } = value

        filters.brands = brands
        filters.rangePrice = rangePrice
    }
      
    return { count, rows, loading, loadMore, applyFilters }
}