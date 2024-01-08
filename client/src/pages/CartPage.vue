
<script setup>
    import { computed } from 'vue'
    import { useStore } from 'vuex'
    import CartItem from '../components/CartItem.vue'

    const store = useStore()

    const cartCount = computed(() => store.getters[`basket/cartCount`])
    const totalPrice = computed(() => store.getters['basket/totalPrice'])
    const cartProducts = computed(() => store.getters[`basket/cartProducts`])
</script>

<template>
    <div class="container">
        <h2 style="margin-bottom: 20px;">Оформление заказа</h2>
        <h3>Товаров в заказе: {{ cartCount }}</h3>
        <h3>Общая стоимасть заказа: {{ totalPrice }}</h3>
        <div class="list_container">
            <a-list :data-source="cartProducts" style="min-width: 100%;">
                <template #renderItem="{ item }">
                    <a-list-item @click.stop>
                        <CartItem :count="item.count" :product="item.product" :sizes="item.sizes" />
                    </a-list-item>
                </template>
            </a-list>
        </div>
        <a-from name="checkout" style="width: 40%; margin-top: 20px;">
            <a-form-item name="username">
                <a-input placeholder="имя"/>
            </a-form-item>
            <a-form-item name="phone">
                <a-input placeholder="номер телефона"/>
            </a-form-item>
            <a-form-item name="email">
                <a-input placeholder="email"/>
            </a-form-item>
            <a-form-item>
                <a-button type="primary" html-type="submit" class="button_container" :disabled="!totalPrice">
                    Оформить заказ
                </a-button>
            </a-form-item>
        </a-from>
    </div>
</template>

<style scoped>
    .container {  
        display: flex;
        flex-direction: column; 
        border-radius: 6px;
        padding: 10px;
        background-color: #FFFFFF;
        width: 50%;
        margin: auto;
    }

    .list_container {
        border: 1px solid #D9D9D9;
        border-radius: 6px;
        padding: 10px;
        min-width: 600px;
        max-height: 600px;
        overflow-y: scroll;
    }

    .button_container {
        background-color: #F14F4F;
        width: 200px;
    }

    .button_container:hover {
        background-color: #F14F4F;
        opacity: 0.6;
    }

</style>