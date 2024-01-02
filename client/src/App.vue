<script setup>
  import Layout from  './components/Layout.vue'
</script>

<template>
  <a-config-provider
    :theme="{
      components: {
        Menu: {
          colorPrimary: '#',
        },
        Slider: {
          colorPrimary: '#444B58',
          colorPrimaryBorder: '#444B58',
          colorPrimaryBorderHover: '#444B58',
        },
        InputNumber: {
          colorPrimaryHover: '#444B58',
        },
        Checkbox: {
          colorPrimary: '#444B58',
          colorPrimaryHover: '#444B58',
        },
        Radio: {
          colorPrimary: '#444B58',
          colorPrimaryHover: '#444B58',
        }
      },
    }"
  >
    <Layout />
  </a-config-provider>
</template>

<style scoped>
</style>
