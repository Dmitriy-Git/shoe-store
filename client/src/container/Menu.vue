
<script setup>
    import { ref, watch, h, computed, onMounted } from 'vue'
    import { useRouter, useRoute } from 'vue-router'
    import { useStore } from 'vuex'
    import { UserOutlined } from '@ant-design/icons-vue';
    import CartBadge from './CartBadge.vue'
    import OrderBadge from '../components/OrderBadge.vue';

    const router = useRouter()
    const route = useRoute()
    const store = useStore()

    const selectedKeys = ref(['/']);

    const getUser = computed(() => store.getters[`auth/getUser`])

    const items = [
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
            key: '/profile',
            icon: h(UserOutlined),
            label: 'Профиль',
            title: 'Профиль',
        },
        {
            key: '/cart',
            title: 'Корзина',
            label : h(CartBadge),
        },
        {
            key: '/order',
            title: 'Заказы',
            label: h(OrderBadge),
        }
    ]

    const renderItems = computed(() => {
        return getUser.value ? items : [] 
    })

    onMounted(() => {
        selectedKeys.value = [route.path]
    })
    
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
        :items="renderItems" 
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