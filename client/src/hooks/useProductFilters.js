import { reactive } from 'vue'

export default function useProductFilters() {
    const filters = reactive({
        rangePrice: null,
        brands: null,
        sortByPrice: null,
    })


    const applyFilters = (value) => {
        const { brands, rangePrice, sortByPrice } = value

        filters.brands = brands
        filters.rangePrice = rangePrice
        filters.sortByPrice = sortByPrice
    }

    return { filters, applyFilters } 
}