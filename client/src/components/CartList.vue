<script setup>
    import { computed } from 'vue'
    import { useStore } from 'vuex'
    import CartItem from './CartItem.vue'

    const store = useStore()

    const cartProducts = computed(() => store.getters[`cart/cartProducts`])
</script>

<template>
    <a-list :data-source="cartProducts" style="min-width: 100%;">
        <template #renderItem="{ item }">
            <a-list-item @click.stop>
                <CartItem :count="item.count" :product="item.product" :sizes="item.sizes" />
            </a-list-item>
        </template>
    </a-list>
</template>

<style scoped>
</style>