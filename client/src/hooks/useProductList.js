import { ref, onMounted, watch, computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { getProductList } from '../api'

export default function useProductList(filters) {
    const dataSource = reactive({
        count: 0,
        rows: [],
    })
    const loading = ref(false)
    const page = ref(1)

    const router = useRouter()

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

    onMounted(() => {
        getData()
    })

    const length = computed(() => {
        return dataSource.rows?.length || 0
    })

    const rows = computed(() => {
        return dataSource.rows
    })

    const count = computed(() => {
        return dataSource.count
    })

    watch(page, (newValue) => {
        const params = { page: newValue, ...filters }

        getData(params)
    })

    watch(filters, (newValue) => {
        const { brands, rangePrice, sortByPrice, sizes } = newValue

        const params = { page: 1, brands, rangePrice, sortByPrice, sizes }
        page.value = 1

        getData(params)
    })

    const loadMore = () => {
        page.value +=1        
    }

    const onClickByCard = (id) => {
        router.push(`/product/${id}/popup`)
    }
      
    return { rows, count, length, loading, loadMore, onClickByCard }
}