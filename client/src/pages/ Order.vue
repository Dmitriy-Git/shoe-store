<script setup>
    import { computed, } from 'vue'
    import { useStore } from 'vuex'
    import EmptyList from '../assets/empty_list.svg'
    import OrderList from '../container/OrderList.vue'

    const store = useStore()

    const orders = computed(() => store.getters['order/getOrders'])
    const loading = computed(() => store.getters['order/getLoading'])
</script>

<template>
    <div class="wrapper">
        <OrderList v-if="orders" />
        <div v-else-if="loading" class="result_container">
            <a-spin />
        </div>
        <a-result v-else title="Нет активных заказов" class="result_container">
            <template #icon>
                <EmptyList style="width: 200px; height: 200px;" />
            </template>
        </a-result>
    </div>
</template>

<style setup>
    .wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .result_container {
        position: absolute;  
        top: 50%;
        left: 50%; 
        transform: translate(-50%, -50%);
    }
</style>