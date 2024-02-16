import { ref } from 'vue'

export default function useProductFilters(emit) {
    const formState = ref({
        minPrice: 0,
        maxPrice: 40000,
        brands: [],
        checkedSizes: [],
    });
    const sortByPrice = ref('asc')

    const reset = () => {
        formState.value = {
            minPrice: 0,
            maxPrice: 40000,
            brands: [],
            checkedSizes: [],
        }
        sortByPrice.value = 'asc'

        const result = {
            rangePrice: undefined,
            brands: undefined,
            sortByPrice: undefined,
            sizes: undefined,
        }

        emit('submit', result)
    }

    const onFinish = (values) => {
        const { brands, checkedSizes } = values
        const { minPrice, maxPrice } = formState.value

        const result = {
            rangePrice: [minPrice, maxPrice].join(','),
            brands: Object.values(brands).join(','),
            sortByPrice: sortByPrice.value,
            sizes: Object.values(checkedSizes).join(','),
        }

        emit('submit', result)
    };

    const setOrder = () => {
        sortByPrice.value = sortByPrice.value === 'asc' ? 'desc' : 'asc'
    }

    return {
        formState,
        sortByPrice,
        reset,
        onFinish,
        setOrder,
    }
}