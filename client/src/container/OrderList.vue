<script setup>
    import { computed, } from 'vue'
    import { useStore } from 'vuex'
    import { DeleteOutlined } from '@ant-design/icons-vue';
    import OrderItem from '../components/OrderItem.vue'

    const store = useStore()

    const orders = computed(() => store.getters['order/getOrders'])
    const userId = computed(() => store.getters['auth/getUserId'])

    const deleteOrderHandler = (id) => {
        store.dispatch('order/deleteOrder', id)
            .then(() => store.dispatch('order/fetchOrders', userId.value))
            .catch(e => console.log(e))
    }

</script>   

<template>
     <a-list :data-source="orders" style="width: 60%;">
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
                                    <OrderItem :item="element.product" :size="element.size" />
                                </a-list-item>
                            </template>
                        </a-list> 
                    </div>   
                </div>
            </a-list-item>
        </template>
    </a-list>
</template>

<style scoped>
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
</style>