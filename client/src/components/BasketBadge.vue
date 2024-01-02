
<script setup>
    import { computed } from 'vue'
    import { useStore } from 'vuex'
    import BasketSVG from '../assets/basket.svg'
  
    const store = useStore()

    const cartCount = computed(() => store.getters[`basket/cartCount`])
    const cartProducts = computed(() => store.getters[`basket/cartProducts`])

    // console.log(cartCount.value)
    // console.log(cartProducts.value)
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