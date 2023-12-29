
<script setup>
    import { useRouter } from 'vue-router'
    import { SERVER_PATH } from '../api'

    const { id, name, price, img } = defineProps({
        id: Number,
        name: String,
        price: Number,
        img: String,
    })

    const router = useRouter()

    const onClick = () => {
        router.push(`/product/${id}/popup`)
    }


</script>

<template>
    <a-card hoverable style="width: 250px;" @click="onClick">
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