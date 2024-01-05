
<script setup>
    import { useRouter } from 'vue-router'
    import useProductDetail from '../hooks/useProductDetail'
    import { SERVER_PATH } from '../api'

    const router = useRouter()

    const { dataSource, sizeGroup, addProductToCart } = useProductDetail()

    const cancel = () => router.go(-1)

    const submit = () => {
        addProductToCart()
        cancel()
    }
    
</script>

<template>
    <a-modal :open="true" @cancel="cancel" width="900px" :footer="null" :bodyStyle="{ padding: '20px 10px' }">
        <div class="product-detail-container">
            <a-image
                v-if="dataSource?.img"
                :width="400"
                :height="450"
                :src="`${SERVER_PATH}${dataSource?.img}`"
            />
            <div class="product-detail-main_info">
                <p class="product-detail_id_title">ID: {{ dataSource?.id }}</p>
                <h2 class="product-detail-title">{{ dataSource?.name }}</h2>

                <a-rate :value="dataSource?.rating || 2" disabled>
                </a-rate>

                <div class="product-detail_size_container">
                    <p class="product-detail_size_container__title">Выберите размер</p>
                    <a-radio-group v-model:value="sizeGroup"  option-type="button" :options="dataSource?.sizes" />
                </div>

                <p class="product-detail_price_title">{{ dataSource?.price }}</p>
                <a-button type="primary" class="basket_button" @click="submit">
                    Добавить в корзину
                </a-button>
            </div>
        </div>
    </a-modal>
</template>

<style scoped>
    .product-detail-container {
        display: flex;
        justify-content: space-between;
    }

    .product-detail-main_info {
        display: flex;
        flex-direction: column;
        width: 400px;
    }

    .product-detail_size_container {
        margin-bottom: 10px;
        margin-top: 10px;
    }

    .product-detail_size_container__title {
        color: #B2B5BB; 
        font-size: 14px; 
        line-height: 14px;
    }

    .product-detail_price_title {
        color: #444B58; 
        font-size: 30px; 
        line-height: 30px;
    }

    .product-detail_id_title {
        color: #B2B5BB; 
        font-size: 14px; 
        line-height: 14px;
    }

    .product-detail-title {
        color: #444B58; 
        font-size: 24px; 
        line-height: 34px;
    }

    .basket_button {
        background: #F14F4F;
         width: 250px; 
         margin: auto 0 0 auto;
    }

    .basket_button:hover {
        background: #F14F4F;
        opacity: 0.6;
    }

</style>