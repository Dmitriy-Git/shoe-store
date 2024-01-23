<script setup>
    import { computed, onMounted } from 'vue'
    import { useStore } from 'vuex'

    const store = useStore()

    const userId = computed(() => store.getters['auth/getUserId'])
    const orderTotal = computed(() => store.getters['order/getOrderTotal'])

    onMounted(() => {
        if (userId.value) { store.dispatch('order/fetchOrders', userId.value) }
    })
</script>

<template>
    <div class="order_badge_container" @click.prevent>
            <span class="title">Заказы</span>
            <a-badge :count="orderTotal" />
        </div>
</template>

<style scoped>
    .order_badge_container {
        display: flex; 
        align-items: center; 
        justify-content: center;
    }

    .title {
        margin-right: 5px;
    }
</style>