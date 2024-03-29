import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { getProductDetail } from '../api'

export default function useProductDetail() {
    const route = useRoute()
    const store = useStore()

    const dataSource = ref(null)
    const sizeGroup = ref('')

    const userId = computed(() => store.getters['auth/getUserId'])

    const getData = async (id) => {
        try {
            const { data } = await getProductDetail(id)

            dataSource.value = { ...data, ratings: Number(data.ratings || 0) }
        } catch(e) {
            console.log(e)
        }
    } 

    onMounted(() => {
        getData(route.params.id)
    })

    const addProductToCart = () => {
        store.dispatch('cart/addProduct', { userId: userId.value, productId: Number(route.params.id), size: sizeGroup.value })
    }

    const sizeOptions = computed(() => {
        return dataSource.value?.sizes?.map((i) => ({ label: i.size, value: i.id })) || []
    })

    return { dataSource, sizeGroup, sizeOptions, addProductToCart }
}