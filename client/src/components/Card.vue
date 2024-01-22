
<script setup>
    import { SERVER_PATH } from '../const'

    const { id, name, price, img } = defineProps({
        id: Number,
        name: String,
        price: Number,
        img: String,
    })
</script>

<template>
    <a-card hoverable style="width: 250px;" @click="$emit('onClick', id)">
        <template #cover>
            <img :src="`${SERVER_PATH}${img}`" />
        </template>
        <a-card-meta :title="name">
            <template #description> {{ price }} </template>
        </a-card-meta>
    </a-card>
</template>

<script setup>

</script>