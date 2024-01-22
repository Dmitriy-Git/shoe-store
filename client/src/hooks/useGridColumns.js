import { ref, onMounted, watch, onUnmounted } from 'vue'


export default function useGridColumns(listLength) {
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

    watch(listLength, (newValue) => {
        if(newValue <= 3) columns.value = 2
        else columns.value = 3
    })

    return { columns }
}