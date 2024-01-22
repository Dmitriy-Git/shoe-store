
<script setup>
    import { computed, ref } from 'vue'
    import { useStore } from 'vuex'
    import CartList from '../components/CartList.vue'
    import { createOrder } from '../api'
    import { message } from 'ant-design-vue';

    const store = useStore()

    const formState = ref({
        comment: '',
    });

    const userId = computed(() => store.getters['auth/getUserId'])
    const cartCount = computed(() => store.getters[`cart/cartCount`])
    const totalPrice = computed(() => store.getters['cart/totalPrice'])
    const cartIds = computed(() => store.getters['cart/cartIds'])
    const productIds = computed(() => store.getters['cart/productIds'])

    const onFinish = (values) => {
        const params = {
            comment: values.comment,
            userId: userId.value,
            productIds: productIds.value.join(',')
        }

        createOrder(params)
            .then(() => {
                store.dispatch('cart/deleteProducts', { userId: userId.value, ids: cartIds.value })

                formState.value.comment = ''
                message.success('Заказ создан')
            })
            .catch((e) => console.log(e))
    };
</script>

<template>
    <div class="container">
        <h2 style="margin-bottom: 20px;">Оформление заказа</h2>
        <h3>Товаров в заказе: {{ cartCount }}</h3>
        <h3>Общая стоимасть заказа: {{ totalPrice }}</h3>
        <div class="list_container">
            <CartList />
        </div>
        <a-form :model="formState" name="order" @finish="onFinish" style="margin-top: 20px;">
            <a-form-item name="comment">
                <a-textarea v-model:value="formState.comment" placeholder="ваш комментарий к заказу" allow-clear :maxlength="300" />
            </a-form-item>
            <a-form-item>
                <a-button type="primary" html-type="submit" class="button_container" :disabled="!totalPrice">
                    Оформить заказ
                </a-button>
            </a-form-item>
        </a-form>
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
        position: relative;
    }

    .list_container {
        border-radius: 6px;
        padding: 10px;
        min-width: 600px;
        max-height: 600px;
        min-height: 250px;
        overflow-y: auto;
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