<script setup>
import {useRoute} from "vue-router";
import portfolio_data from '@/data/portfolio_data.json'

const route = useRoute()
const item_data = portfolio_data.filter(portfolio_item => portfolio_item.id === Number(route.params.portfolio_id))[0]
</script>

<template>
  <div v-if="item_data">
    <div class="top_line">
      <h1>{{item_data.title}}</h1>
      <img :src="`../src/assets/${item_data.thumbnail}`"/>
    </div>
  </div>

  <p v-else>Sorry, this project doesn't exist!</p>
</template>

<style scoped>
.top_line {
  display: flex;
  justify-content: space-between;
}
</style>
