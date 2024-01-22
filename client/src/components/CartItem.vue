
<script setup>
    import { computed } from 'vue'
    import { useStore } from 'vuex'
    import { DeleteOutlined } from '@ant-design/icons-vue';
    import { SERVER_PATH } from '../const'

    const { item } = defineProps({ item: Object })

    const store = useStore()

    const userId = computed(() => store.getters['auth/getUserId'])

    const deleteProduct = (id) => {
        store.dispatch('cart/deleteProduct', { userId: userId.value, id })
    }
</script>

<template>
    <div class="item_container">
        <div style="display: flex; align-items: center;">
            <div class="img_container">
                <img style="min-height: 100%; min-width: 100%;" :src="`${SERVER_PATH}${item.img}`" />
            </div>
            <div style="margin-left: 15px;">    
                <h3>{{ item.name }}</h3>
                <p>Цена: {{ item.price }}</p>
                <p>Размер: {{ item.size }}</p>
            </div>
        </div>    
        <DeleteOutlined  style="font-size: 20px; cursor: pointer;" @click="deleteProduct(item.id)"/>
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