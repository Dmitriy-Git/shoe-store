<script setup>
// import { ref, onMounted } from 'vue'
import useProductList from '../hooks/useProductList'
import Card from './Card.vue'

const { rows } = useProductList()

</script>

<template>
    <a-list grid="{ gutter: 16, column: 3 }" :data-source="rows">
      <template #renderItem="{ item }">
        <a-list-item>
          <Card :="item" />
        </a-list-item>
      </template>
    </a-list>
</template>

<style scoped>
</style>
