import { ref, computed, watch, onMounted } from 'vue'
import { useStore } from 'vuex'
import { getOrder, deleteOrder } from '../api'


export default function useOrderData() {
    const store = useStore()

    const userId = computed(() => store.getters['auth/getUserId'])

    const dataSource = ref(null)
    const loading = ref(false)

    watch([userId], (newValue) => {
        const id = newValue[0]

        if (id) {
            getData(id)
        }
    })

    onMounted(() => {
        if(userId.value) getData(userId.value)
    })

    const getData = async (id) => {
        loading.value = true

        try {
            const { data } = await getOrder(id)

            const result = Object.entries(data)

            dataSource.value = result?.length ? result : null

            loading.value = false
        } catch(e) {
            console.log(e)
            loading.value = false
        }  
    }

    const deleteOrderHandler = async (id) => {
        try {
            await deleteOrder(id)
            await getData(userId.value)
        } catch(e) {
            console.log(e)
        }
    }

    return { 
        loading,
        dataSource,
        deleteOrderHandler,
    }
}