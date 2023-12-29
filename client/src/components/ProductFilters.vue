
<script setup>
    import { ref, defineProps } from 'vue'

    const { applyFilters } = defineProps({
        applyFilters: Function
    })

    const brandsOptions = [
        {label: 'Adidas', value: 1}, 
        {label: 'Nike', value: 2}, 
        {label: 'Ecco', value: 5}, 
        {label: 'Lee Cooper', value: 4}
    ];

    const minPrice = ref(0);
    const maxPrice = ref(40000);
    const brands = ref([])

    const submit = () => {
        const result = {
            rangePrice: [minPrice.value, maxPrice.value].join(','),
            brands: Object.values(brands.value).join(',')
        }

        applyFilters(result)
    }

    const reset = () => {
        minPrice.value = 0
        maxPrice.value = 40000
        brands.value = []

        const result = {
            rangePrice: undefined,
            brands: undefined
        }

        applyFilters(result)
    }

</script>

<template>
    <div class="product-filter_container">
        <div>
            <h3 style="margin-bottom: 30px;">Подбор по параметрам</h3> 
            <div style="margin-bottom: 10px;">
                <a-row>
                    <a-col :span="14">
                        <a-slider v-model:value="minPrice" :min="0" :max="40000" />
                    </a-col>
                    <a-col :span="4">
                        <a-input-number v-model:value="minPrice" :min="0" :max="40000" :step="200" style="margin-left: 16px" />
                    </a-col>
                </a-row>
            </div>
            <div style="margin-bottom: 10px;">
                <a-row>
                    <a-col :span="14">
                        <a-slider v-model:value="maxPrice" :min="0" :max="40000" />
                     </a-col>
                    <a-col :span="4">
                        <a-input-number v-model:value="maxPrice" :min="0" :max="40000" :step="200" style="margin-left: 16px" />
                    </a-col>
                </a-row>
            </div>
            <div>
                <a-checkbox-group v-model:value="brands" :options="brandsOptions" />
            </div>     
        </div>
        <div class="product-list-filter_button_group">
            <a-button type="primary" class="product-list-filter_button" @click="submit">
                Применить
            </a-button>
            <a-button type="text" class="product-list-filter_reset_button" @click="reset">
                Сбросить
            </a-button>
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
    }
</style>