
<script setup>
    import { ref } from 'vue'
    import BasketSVG from '../assets/basket.svg'

    const count = ref(0)
</script>
<template>
    <div style="display: flex; align-items: center;">
        <span class="title">Корзина</span>
        <a-badge :count="count">
            <BasketSVG />
        </a-badge>
    </div>
</template>

<style scoped>  
    .title {
        margin-right: 5px;
    }
</style>    