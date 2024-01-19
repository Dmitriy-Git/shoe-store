
<script setup>
    import { ref } from 'vue'
    import { UpOutlined, DownOutlined  } from '@ant-design/icons-vue';

    const emit = defineEmits(['submit'])

    const formState = ref({
        minPrice: 0,
        maxPrice: 40000,
        brands: [],
        checkedSizes: [],
    });
    const sortByPrice = ref('asc')

    const reset = () => {
        formState.value = {
            minPrice: 0,
            maxPrice: 40000,
            brands: [],
            checkedSizes: [],
        }
        sortByPrice.value = 'asc'

        const result = {
            rangePrice: undefined,
            brands: undefined,
            sortByPrice: undefined,
            sizes: undefined,
        }

        emit('submit', result)
    }

    const onFinish = (values) => {
        const { minPrice, maxPrice, brands, checkedSizes } = values

        const result = {
            rangePrice: [minPrice, maxPrice].join(','),
            brands: Object.values(brands).join(','),
            sortByPrice: sortByPrice.value,
            sizes: Object.values(checkedSizes).join(','),
        }

        emit('submit', result)
    };

    const setOrder = () => {
        sortByPrice.value = sortByPrice.value === 'asc' ? 'desc' : 'asc'
    }

    const brandsOptions = [
        {label: 'Adidas', value: 1}, 
        {label: 'Nike', value: 2}, 
        {label: 'Ecco', value: 5}, 
        {label: 'Lee Cooper', value: 4}
    ];

    const sizesOptions = ['40', '41', '42', '43', '44', '45'];

</script>

<template>
    <div class="product-filter_container">
        <div>
            <h3 style="margin-bottom: 30px;">Подбор по параметрам</h3> 
            <a-form
                name="productFilters"
                :model="formState"
                @finish="onFinish"
                style="width: 100%;"
            >
                <a-form-item name="minPrice">
                    <a-row>
                        <a-col :span="14">
                            <a-slider v-model:value="formState.minPrice" :min="0" :max="40000" />
                        </a-col>
                        <a-col :span="4">
                            <a-input-number 
                                v-model:value="formState.minPrice" 
                                :min="0" 
                                :max="40000" 
                                :step="200" 
                                style="margin-left: 16px" 
                            />
                        </a-col>
                    </a-row>
                </a-form-item>
                <a-form-item name="maxPrice">
                    <a-row>
                        <a-col :span="14">
                            <a-slider v-model:value="formState.maxPrice" :min="0" :max="40000" />
                        </a-col>
                        <a-col :span="4">
                            <a-input-number 
                                v-model:value="formState.maxPrice" 
                                :min="0" 
                                :max="40000" 
                                :step="200" 
                                style="margin-left: 16px" 
                            />
                        </a-col>
                    </a-row>
                </a-form-item>
                <a-form-item name="brands">
                    <a-checkbox-group v-model:value="formState.brands" :options="brandsOptions" />
                </a-form-item>
                <div style="margin-bottom: 20px;">
                    <div v-if="sortByPrice === 'asc'" class="order-container" @click="setOrder">
                        <UpOutlined />
                        <span style="margin-left: 10px;">По возрастанию</span>
                    </div>
                    <div v-else class="order-container" @click="setOrder">
                        <DownOutlined />
                        <span style="margin-left: 10px;">По убыванию</span>
                    </div>
                </div>
                <a-form-item name="checkedSizes">
                    <a-checkbox-group v-model:value="formState.checkedSizes" :options="sizesOptions" />
                </a-form-item>  
                <a-form-item>
                    <div class="product-list-filter_button_group">
                        <a-button type="primary" html-type="submit" class="product-list-filter_button">
                            Применить
                        </a-button>
                        <a-button type="text" class="product-list-filter_reset_button" @click="reset">
                            Сбросить
                        </a-button>
                    </div>     
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<style scoped>
    .product-filter_container {
        background-color: #FFF4EE; 
        padding: 15px; 
        border-radius: 6px;
        height: 500px; 
        min-width: 300px; 
        display: flex; 
        flex-direction: column; 
        justify-content: space-between;
        align-items: center;
    }

    .product-list-filter_button {
        background-color: #444B58;
        width: 200px;
    }
    .product-list-filter_reset_button {
        width: 200px;
        margin-top: 15px;
    }

    .product-list-filter_button:hover {
        background-color: #444B58;
        opacity: 0.6;
    }

    .product-list-filter_button_group {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .order-container {
        display: flex; 
        align-items: center; 
        cursor: pointer;
    }
</style>