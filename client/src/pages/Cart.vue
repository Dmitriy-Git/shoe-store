
<script setup>
    import { computed } from 'vue'
    import { useStore } from 'vuex'
    import CartList from '../container/CartList.vue'
    import CartComment from '../components/CartComment.vue';

    const store = useStore()

    const cartCount = computed(() => store.getters[`cart/cartCount`])
    const totalPrice = computed(() => store.getters['cart/totalPrice'])
</script>

<template>
    <div class="container">
        <h2 style="margin-bottom: 20px;">Оформление заказа</h2>
        <h3>Товаров в заказе: {{ cartCount }}</h3>
        <h3>Общая стоимасть заказа: {{ totalPrice }}</h3>
        <div class="list_container">
            <CartList />
        </div>
        <CartComment />
    </div>
</template>

<style scoped>
    .container {  
        display: flex;
        flex-direction: column; 
        border-radius: 6px;
        padding: 10px;
        background-color: #FFFFFF;
        width: 50%;
        margin: auto;
        position: relative;
    }

    .list_container {
        border-radius: 6px;
        padding: 10px;
        min-width: 600px;
        max-height: 600px;
        min-height: 250px;
        overflow-y: auto;
    }
</style>