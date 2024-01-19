import { reactive } from 'vue'

export default function useProductFilters() {
    const filters = reactive({
        rangePrice: null,
        brands: null,
        sortByPrice: null,
        sizes: null,
    })


    const applyFilters = (value) => {
        const { brands, rangePrice, sortByPrice, sizes } = value

        filters.brands = brands
        filters.rangePrice = rangePrice
        filters.sortByPrice = sortByPrice
        filters.sizes = sizes
    }

    return { filters, applyFilters } 
}