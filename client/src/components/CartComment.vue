<script setup>
    import { computed, ref } from 'vue'
    import { useStore } from 'vuex'
    import { message } from 'ant-design-vue';

    const store = useStore()

    const formState = ref({
        comment: '',
    });

    const userId = computed(() => store.getters['auth/getUserId'])
    const totalPrice = computed(() => store.getters['cart/totalPrice'])
    const cartIds = computed(() => store.getters['cart/cartIds'])
    const productIds = computed(() => store.getters['cart/productIds'])
    const sizes = computed(() => store.getters['cart/cartSizes'])

    const onFinish = (values) => {
        const params = {
            comment: values.comment,
            userId: userId.value,
            productIds: productIds.value.join(','),
            sizes: sizes.value
        }

        store.dispatch('order/createOrder', params)
            .then(() => store.dispatch('order/fetchOrders', userId.value))
            .then(() => {
                store.dispatch('cart/deleteProducts', { userId: userId.value, ids: cartIds.value })

                formState.value.comment = ''
                message.success('Заказ создан')
            })
            .catch((e) => console.log(e))
    };
</script>

<template>
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
</template>

<style scoped>
    .button_container {
        background-color: #F14F4F;
        width: 200px;
    }

    .button_container:hover {
        background-color: #F14F4F;
        opacity: 0.6;
    }
</style>