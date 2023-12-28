<script setup>
  import Layout from  './components/Layout.vue'
</script>

<template>
  <a-config-provider
    :theme="{
      components: {
        Menu: {
          colorPrimary: '#',
        }
      },
    }"
  >
    <Layout />
  </a-config-provider>
</template>

<style scoped>
</style>
