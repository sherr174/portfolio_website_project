<script setup>
import { useRoute } from 'vue-router'
import portfolio_data from '@/data/portfolio_data.json'

const route = useRoute()
const item_data = portfolio_data.filter(
  (portfolio_item) => portfolio_item.id === Number(route.params.portfolio_id),
)[0]
</script>

<template>
  <div v-if="item_data">
    <div class="body">
      <img :src="`../src/assets/${item_data.thumbnail}`" />

      <div class="info">
        <h1>{{ item_data.title }}</h1>
        <h2>
          {{ item_data.subtitle }} | {{ item_data.season_created }} | {{ item_data.class }} |
          {{ item_data.type }} | {{ item_data.applications }}
        </h2>
        <p>{{ item_data.description }}</p>
      </div>
    </div>

    <div class="project_images">
      <div v-for="(project_image, index) in item_data.project_images" :key="index">
        <img
          :src="`../src/assets/${project_image}`"
          :alt="'A graphic design item done for ' + item_data.title"
        />
      </div>
    </div>
  </div>

  <h1 class="sorry" v-else>Sorry, this project doesn't exist yet!</h1>
</template>

<style scoped>
div.body {
  display: flex;
  flex-direction: row;
  gap: 1rem;

  img {
    width: 45%;
    height: 45%;
    margin-bottom: 15px;
  }

  div.info {
    display: flex;
    flex-direction: column;
    margin: 0 0 0 15px;

    h1 {
      color: #672f87;
      font-size: 50px;
      margin: 0;
    }

    h2 {
      color: #672f87;
      font-size: 20px;
      margin: 0;
      padding: 0;
    }

    p {
      color: #672f87;
      margin: 15px 0;
      //width: 100%;
      font-size: 18px;
    }
  }

  h1.sorry {
    display: flex;
    color: #672f87;
    justify-content: center;
  }
}

div.project_images {
  img {
    width: 100%;
    margin-bottom: -15px;
  }
}

@media (max-width: 800px) {
  div.body {
    flex-direction: column;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
