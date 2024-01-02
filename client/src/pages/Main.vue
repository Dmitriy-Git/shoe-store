<script setup>
    import ProductList from '../components/ProductList.vue'
</script>

<template>
    <div class="container">
        <ProductList />
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
            width: 85%;
        }
    }

    @media (min-width: 1000px) and (max-width: 1099px) {
        .container {
            width: 90%;
        }
    }        
</style>