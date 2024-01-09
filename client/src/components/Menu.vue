
<script setup>
    import { ref, watch, h } from 'vue'
    import { useRouter, useRoute } from 'vue-router'
    import CartBadge from './CartBadge.vue'

    const router = useRouter()
    const route = useRoute()

    const selectedKeys = ref(['/']);

    const items = ref([
        {
            key: '/',
            label: 'Каталог',
            title: 'Каталог',
        },
        {
            key: '/about',
            label: 'О нас',
            title: 'О нас',
        },
        {
            key: '/contact',
            label: 'Контакты',
            title: 'Контакты',
        },
        {
            key: '/cart',
            title: 'Корзина',
            label : h(CartBadge),
        },
    ])

    // watch api https://v3.ru.vuejs.org/ru/api/computed-watch-api.html#watch
    watch(
        () => route.path, 
        () => {
            selectedKeys.value = [route.path]
        }
    )

    const select = ({ key }) => {
        router.push(key)
    }

</script>

<template>
    <a-menu 
        :selectedKeys="selectedKeys" 
        mode="horizontal" 
        :items="items" 
        @select="select" 
        class="container" 
        theme="dark" 
        :style="{ lineHeight: '64px' }"
    />
</template>

<style scoped>
    .container {
        background-color: #484283;
        justify-content: center;
        width: 100%;
    }
</style>