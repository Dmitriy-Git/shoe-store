
<script setup>
    import { computed, onMounted } from 'vue'
    import { useStore } from 'vuex'
    import { useRouter } from 'vue-router'
    import BasketSVG from '../assets/basket.svg'
    import CartItem from './CartItem.vue'
  
    const store = useStore()
    const router = useRouter()

    const cartCount = computed(() => store.getters[`basket/cartCount`])
    const totalPrice = computed(() => store.getters['basket/totalPrice'])
    const cartProducts = computed(() => store.getters[`basket/cartProducts`])

    onMounted(() => {
        store.dispatch('basket/getAllProducts')
    })
</script>
<template>
        <a-dropdown>
            <div style="display: flex; align-items: center;" @click.prevent>
                <span class="title">Корзина</span>
                <a-badge :count="cartCount">
                    <BasketSVG />
                </a-badge>
            </div>
            <template #overlay>
                <div class="dropdown_container">
                    <div class="list_container">
                        <a-list :data-source="cartProducts" style="min-width: 100%;">
                            <template #renderItem="{ item }">
                                <a-list-item @click.stop>
                                    <CartItem :count="item.count" :product="item.product" :sizes="item.sizes" />
                                </a-list-item>
                            </template>
                        </a-list>
                    </div>
                    <div class="dropdown_footer">
                        <h3>Итого: {{ totalPrice }}</h3>
                        <a-button type="primary" class="button_container" @click="router.push('/basket')">
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