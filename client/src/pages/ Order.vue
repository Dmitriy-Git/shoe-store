<script setup>
    import { computed, } from 'vue'
    import { useStore } from 'vuex'
    import { DeleteOutlined } from '@ant-design/icons-vue';
    import EmptyList from '../assets/empty_list.svg'
    import OrderItem from '../components/OrderItem.vue'

    const store = useStore()

    const orders = computed(() => store.getters['order/getOrders'])
    const loading = computed(() => store.getters['order/getLoading'])
    const userId = computed(() => store.getters['auth/getUserId'])

    const deleteOrderHandler = (id) => {
        store.dispatch('order/deleteOrder', id)
            .then(() => store.dispatch('order/fetchOrders', userId.value))
            .catch(e => console.log(e))
    }

</script>

<template>
    <div class="wrapper">
    <a-list v-if="orders" :data-source="orders" style="width: 60%;">
        <template #renderItem="{ item }">
            <a-list-item @click.stop>
                <div class="order_container">
                    <div class="order_header">
                        <h2>Заказ №{{ item[0] }}</h2>
                        <DeleteOutlined style="font-size: 20px; cursor: pointer;" @click="deleteOrderHandler(item[0])" />    
                    </div>
                    <div class="order_content">
                        <a-list v-if="item[1]" :data-source="item[1]" style="min-width: 100%;">
                            <template #renderItem="{ item: element }">
                                <a-list-item @click.stop>
                                    <OrderItem :item="element.product" />
                                </a-list-item>
                            </template>
                    </a-list> 
                    </div>   
                </div>
            </a-list-item>
        </template>
    </a-list>
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

    .order_container {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .order_header {
        display: flex;
        justify-content: space-between;
    }

    .order_content {
        display: flex;
        width: 100%;
        max-height: 35vh;
        overflow-y: auto;
        margin-top: 10px;
    }

    .result_container {
        position: absolute;  
        top: 50%;
        left: 50%; 
        transform: translate(-50%, -50%);
    }
</style>