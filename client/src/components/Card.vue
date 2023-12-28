
<script setup>
    import { useRouter } from 'vue-router'
    import { SERVER_PATH } from '../api'

    const props = defineProps({
        id: Number,
        name: String,
        price: Number,
        img: String,
    })

    const router = useRouter()

    const onClick = () => {
        router.push(`/product/${props.id}/popup`)
    }


</script>

<template>
    <a-card hoverable style="width: 240px;" @click="onClick">
        <template #cover>
            <img :src="`${SERVER_PATH}${props.img}`" />
        </template>
        <a-card-meta :title="props.name">
            <template #description> {{ props.price }} </template>
        </a-card-meta>
    </a-card>
</template>

<script setup>

</script>