<script setup>
    import useGridColumns from '../hooks/useGridColumns'
    import useProductList from '../hooks/useProductList'

    import Card from './Card.vue'

    const { filters } = defineProps({
        filters: Object,
    })

    const { columns } = useGridColumns()
    const { loadMore, dataSource, loading, onClickByCard } = useProductList(filters)
  
</script>

<template>
  <div class="product-list_container">
    <a-list 
      :grid="{ gutter: 6, column: columns }" 
      :data-source="dataSource.rows" 
      :loading="loading" 
    >
      <template #renderItem="{ item }">
        <a-list-item :key="item.id">
          <Card :="item" @on-click="onClickByCard" />
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
</template>

<style scoped>
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
