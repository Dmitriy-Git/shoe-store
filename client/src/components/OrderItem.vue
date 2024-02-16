
<script setup>
    import { SERVER_PATH } from '../const'

    const { item, size } = defineProps({ item: Object, size: Number })
</script>

<template>
    <div class="item_container">
        <div class="img_container">
            <img style="min-height: 100%; min-width: 100%;" :src="`${SERVER_PATH}${item.img}`" />
        </div>
        <div style="margin-left: 15px;">    
            <h3>{{ item.name }}</h3>
            <p>Цена: {{ item.price }}</p>
            <p>Размер: {{ size }}</p>
        </div>    
    </div>
</template>

<style scoped>
    .item_container {
        display: flex; 
        width: 100%;
        align-items: center;
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