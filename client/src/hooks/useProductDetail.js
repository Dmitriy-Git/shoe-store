import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getProductDetail } from '../api'

export default function useProductDetail() {
    const route = useRoute()

    const dataSource = ref(null)
    const sizeGroup = ref('')

    const getData = async (id) => {
        try {
            const { data } = await getProductDetail(id)

            dataSource.value = data
        } catch(e) {
            console.log(e)
        }
    } 

    onMounted(() => {
        getData(route.params.id)
    })

    return { dataSource, sizeGroup }
}