<script setup>
  import useProductList from '../hooks/useProductList'
  import Card from './Card.vue'
  import ProductFilters from './ProductFilters.vue'

  const { loadMore, dataSource, loading, applyFilters } = useProductList()
</script>

<template>
  <div class="catalog-container">
    <ProductFilters :applyFilters="applyFilters" />
  <div class="product-list_container">
    <a-list 
      grid="{ gutter: 6, column: 3 }" 
      :data-source="dataSource.rows" 
      :loading="loading" 
      style="min-width: 100%;"
    >
      <template #renderItem="{ item }">
        <a-list-item>
          <Card :="item" />
        </a-list-item>
      </template>
    </a-list>
    <div 
      v-if="dataSource.rows.length && dataSource.count === dataSource.rows.length" 
      class="product-list_all_container"
    > 
      Вы посмотрели весь список
    </div>
    <a-button 
      v-if="dataSource.count !== dataSource.rows.length" 
      type="primary" 
      class="product-list_button_container" 
      @click="loadMore">
        Показать еще
    </a-button>
  </div>
  </div>
</template>

<style scoped>
  .catalog-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .product-list_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .product-list_button_container {
    background-color: #F14F4F;
    width: 200px;
  }
  .product-list_button_container:hover {
    background-color: #F14F4F;
    opacity: 0.6;
  }

  .product-list_all_container {
    margin: 30px auto;
  }
</style>
