<script setup>
// import { ref, onMounted } from 'vue'
import useProductList from '../hooks/useProductList'

const { data } = useProductList()

</script>

<template>
  <ul>
    <li v-if="data" v-for="item in data.rows">
      {{ item.name }}
    </li>
  </ul>
</template>

<style scoped>
</style>
