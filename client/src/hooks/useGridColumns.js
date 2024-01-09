import { ref, onMounted, onUnmounted } from 'vue'


export default function useGridColumns() {
    const columns = ref(window.innerWidth < 1600 ? 2 : 3)

    const onResize = (e) => {
        columns.value = e.currentTarget.innerWidth < 1600 ? 2 : 3
    }

    onMounted(() => {
        window.addEventListener('resize', onResize)
    })

    onUnmounted(() => {
        window.removeEventListener('resize', onResize);
    }) 

    return { columns }
}