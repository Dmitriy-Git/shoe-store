import { ref, onMounted } from 'vue'

export default function useProductList() {
    const data = ref(null)

    const fetchData = () => 
        fetch('http://localhost:3000/api/product?page=1&offset=9')
        .then((res) => res.json())

    const getData = async () => {
        try {
            data.value = await fetchData()
        } catch(e) {
            console.log(e)
        }
    }

    onMounted(getData)
      
      
    return {
        data
    }
}