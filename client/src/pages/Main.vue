<script setup>
    import ProductList from '../components/ProductList.vue'
    import ProductFilters from '../components/ProductFilters.vue'

    import useProductFilters from '../hooks/useProductFilters'

    const { filters, applyFilters } = useProductFilters()
</script>

<template>
    <div class="container">
        <div class="content">
            <ProductFilters @submit="applyFilters" />
            <ProductList :filters="filters" />
        </div>
        <router-view />
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        margin: 50px auto;
        width: 70%;
    }     

    @media (min-width: 1100px) and (max-width: 1270px) {
        .container {
            width: 80%;
        }
    }

    @media (min-width: 1000px) and (max-width: 1099px) {
        .container {
            width: 85%;
        }
    }  

    .content {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
</style>