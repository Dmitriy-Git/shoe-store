<script setup>
    import { useRoute } from 'vue-router'

    const route = useRoute()
</script>

<template>
    <div>
        Product Detail Page id: {{ route.params.id }}
    </div>
</template>

<style scoped>
    
</style>