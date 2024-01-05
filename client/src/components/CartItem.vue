
<script setup>
    import { useStore } from 'vuex'
    import { DeleteOutlined } from '@ant-design/icons-vue';
    import { SERVER_PATH } from '../api'

    const { count, result } = defineProps({
        count: Number,
        result: Object,
    })

    const store = useStore()

    const deleteProduct = (productId) => {
        store.dispatch('basket/deleteProduct', { userId: 1, productId })
    }
</script>

<template>
    <div class="item_container">
        <div style="display: flex; align-items: center;">
            <div class="img_container">
                <img style="min-height: 100%; min-width: 100%;" :src="`${SERVER_PATH}${result.img}`" />
            </div>
            <div style="margin-left: 15px;">    
                <h3>{{ result.name }}</h3>
                <p>{{ result.price }}</p>
                <p style="color: #B2B5BB;">{{ count }} шт</p>
            </div>
        </div>    
        <DeleteOutlined  style="font-size: 20px; cursor: pointer;" @click="deleteProduct(result.id)"/>
    </div>
</template>

<style scoped>
    .item_container {
        display: flex; 
        justify-content: space-between; 
        width: 100%;
    }

    .img_container {
        width: 150px; 
        height: 150px; 
        display: flex;
    }
</style>