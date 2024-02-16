<script setup>
    import { computed } from 'vue'
    import { useStore } from 'vuex'
    import CartItem from '../components/CartItem.vue'
    import EmptyList from '../assets/empty_list.svg'

    const store = useStore()

    const cartProducts = computed(() => store.getters[`cart/cartProducts`])
</script>

<template>
    <a-list v-if="cartProducts" :data-source="cartProducts" style="min-width: 100%;">
        <template #renderItem="{ item }">
            <a-list-item @click.stop>
                <CartItem :item="item" />
            </a-list-item>
        </template>
    </a-list>
    <a-result v-else title="Список пуст" class="result_container">
        <template #icon>
            <EmptyList style="width: 150px; height: 150px;" />
        </template>
    </a-result>
</template>

<style scoped>
    .result_container {
        position: absolute;  
        top: 50%;
        left: 50%; 
        transform: translate(-50%, -50%);
    }
</style>