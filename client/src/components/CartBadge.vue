
<script setup>
    import { computed, onMounted, watch, ref } from 'vue'
    import { useStore } from 'vuex'
    import { useRouter, useRoute } from 'vue-router'
    import BasketSVG from '../assets/basket.svg'
    import CartList from './CartList.vue'
  
    const store = useStore()
    const router = useRouter()
    const route = useRoute()

    const visible = ref(false);

    const cartCount = computed(() => store.getters[`cart/cartCount`])
    const totalPrice = computed(() => store.getters['cart/totalPrice'])

    onMounted(() => {
        store.dispatch('cart/getAllProducts')
    })

    watch(
        () => route.path, 
        () => {
            visible.value = route.path === '/cart'
        }
    )
</script>
<template>
        <div v-if="visible" style="display: flex; align-items: center;" @click.prevent>
            <span class="title">Корзина</span>
            <a-badge :count="cartCount">
                <BasketSVG />
            </a-badge>
        </div>
        <a-dropdown v-else>
            <div style="display: flex; align-items: center;" @click.prevent>
                <span class="title">Корзина</span>
                <a-badge :count="cartCount">
                    <BasketSVG />
                </a-badge>
            </div>
            <template #overlay>
                <div class="dropdown_container">
                    <div class="list_container">
                        <CartList />
                    </div>
                    <div class="dropdown_footer">
                        <h3>Итого: {{ totalPrice }}</h3>
                        <a-button type="primary" class="button_container" @click="router.push('/cart')">
                            Перейти в корзину
                        </a-button>
                    </div>
                </div>
            </template>
        </a-dropdown>
</template>

<style scoped>  
    .title {
        margin-right: 5px;
    }

    .dropdown_container {  
        display: flex;
        flex-direction: column; 
        border-radius: 6px;
        padding: 10px;
        background-color: #FFFFFF;
    }

    .dropdown_footer {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }

    .list_container {
        min-width: 600px;
        max-height: 400px;
        overflow-y: scroll;
    }

    .button_container {
        background-color: #F14F4F;
    }

    .button_container:hover {
        background-color: #F14F4F;
        opacity: 0.6;
    }
</style>    