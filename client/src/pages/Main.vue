<script setup>
    import { reactive } from 'vue' 
    import ProductList from '../container/ProductList.vue'
    import ProductFilters from '../container/ProductFilters.vue'

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
</script>

<template>
    <div class="decription">
        <div style="margin-top: 10px;">
            <h2 class="decription_text">
                Кроссовки известных брендов <br /> с доставкой по России и СНГ
            </h2>
            <p class="decription_text">
                Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, <br />
                Converse и многие другие по низким ценам
            </p>
        </div>
        <h2  class="decription_back-text">SneakMax</h2>
    </div>
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

    .decription {
        position: relative; 
        min-height: 40vh; 
        max-height: 40vh; 
        background-color: #484283; 
        padding: 0 100px;
        border-top: 1px solid #FFFFFF;
    }

    .decription_text {
        color: #FFFFFF;
        line-height: 30px;
    }

    .decription_back-text {
        position: absolute; 
        top: 100px;  
        color: #FFFFFF; 
        left: 50%; 
        transform: translate(-50%, 0); 
        opacity: 0.3; 
        font-size: 200px; 
        line-height: 200px;
    }
</style>