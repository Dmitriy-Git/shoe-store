import { ref, onMounted, watch, reactive } from 'vue'
import { getProductList } from '../api'

export default function useProductList() {
    const dataSource = reactive({
        count: 0,
        rows: [],
    })
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

            if(dataSource && params?.page > 1) {
                dataSource.count = result.count
                dataSource.rows = [...dataSource.rows, ...result.rows]
            } else {
                dataSource.count = result.count
                dataSource.rows = result.rows
            }

        } catch(e) {
            console.log(e)
        } finally {
            loading.value = false
        }
    }

    onMounted(getData)

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
      
    return { dataSource, loading, loadMore, applyFilters }
}