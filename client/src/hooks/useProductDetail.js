import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { getProductDetail } from '../api'

export default function useProductDetail() {
    const route = useRoute()
    const store = useStore()

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

    const addProductToCart = () => {
        store.dispatch('basket/addProduct', { userId: 1, productId: Number(route.params.id) })
    }

    return { dataSource, sizeGroup, addProductToCart }
}