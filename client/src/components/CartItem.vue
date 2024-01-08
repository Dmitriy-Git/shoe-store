
<script setup>
    import { useStore } from 'vuex'
    import { DeleteOutlined } from '@ant-design/icons-vue';
    import { SERVER_PATH } from '../api'

    const { count, product, sizes } = defineProps({
        count: Number,
        product: Object,
        sizes: Object,
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
                <img style="min-height: 100%; min-width: 100%;" :src="`${SERVER_PATH}${product.img}`" />
            </div>
            <div style="margin-left: 15px;">    
                <h3>{{ product.name }}</h3>
                <p>{{ product.price }}</p>
                <p style="color: #B2B5BB;">{{ count }} шт</p>
                <div class="sizes_container">
                    <p style="color: #B2B5BB;">Размеры</p>
                    <div style="display: flex;">
                        <div v-for="item in sizes" style="margin: 0 5px 0 5px;">
                            <p style="color: #B2B5BB;">{{ item }}</p>
                        </div>     
                    </div>
                </div>
            </div>
        </div>    
        <DeleteOutlined  style="font-size: 20px; cursor: pointer;" @click="deleteProduct(product.id)"/>
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

    .sizes_container {
        display: flex;
        align-items: center;
    }
</style>