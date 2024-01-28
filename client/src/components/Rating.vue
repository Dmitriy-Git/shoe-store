<script setup>
    import { computed, ref, watch } from 'vue'
    import { useStore } from 'vuex'
    import { createProductRating, getProductRatingForUser, deleteProductRatingForUser } from '../api'
    import { CloseCircleOutlined } from '@ant-design/icons-vue';
    import { message } from 'ant-design-vue';

    const props = defineProps({ productId: String })

    const store = useStore()

    const userId = computed(() => store.getters['auth/getUserId'])

    const value = ref(0)
    const isRate = ref(false)

    watch(() => props.productId, (newValue) => {
        getProductRatingForUser({ productId: newValue, userId: userId.value })
            .then(({ data }) => {
                if (data) {
                    isRate.value = true
                    value.value = data
                }
            })
    })

    const apply = () => {
        createProductRating({ productId: props.productId, userId: userId.value, value: value.value })
            .then(() => {
                message.success('Спасибо за вашу оценку')
                isRate.value = true
            })
            .catch(e => message.error(e) )
    }

    const remove = () => {
        deleteProductRatingForUser({ userId: userId.value, productId: props.productId })
            .then(() => {
                isRate.value = false
                value.value = 0
            })
            .catch(e => message.error(e) )
    }

</script>

<template>
    <div class="rate_container">
        <template v-if="isRate">
            <h3>Ваша оценка</h3>
            <div style="display: flex; align-items: center;">
                <a-rate :value="value" disabled></a-rate>
                <CloseCircleOutlined style="margin: auto 0 auto 10px; font-size: 24px;" @click="remove" />
            </div>
        </template>
        <template v-else>
            <h3>Оцените товар</h3>
                <a-rate v-model:value="value" />
            <a-button class="rate_button" @click="apply">Применить</a-button>
        </template>
    </div>
</template>

<style scoped>
    .rate_container {
        display: flex;
        flex-direction: column;
    }

    .rate_button {
        margin-top: 10px;
        background: #F14F4F;
        width: 150px; 
        color: #FFFFFF;
        border: 1px solid #F14F4F;
    }

    .rate_button:hover {
        background: #F14F4F;
        opacity: 0.8;
        color: #FFFFFF;
    }

</style>