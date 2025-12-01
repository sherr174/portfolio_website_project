<script setup>
import portfolioData from '@/data/portfolio_data.json'
</script>

<template>
  <div class="all_projects">
    <router-link class="projects" v-for="project in portfolioData" :key="project.id"
    :to="{name: 'item_details', params: {portfolio_id: project.id}}">
      <img :src="'./src/assets/' + project.thumbnail" />
      <div class="type">
        <h1>{{ project.title }}</h1>
        <h2>{{ project.subtitle }}</h2>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
div.all_projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 50px;

  a {
    text-decoration: none;
    color: black;
  }

  .projects {
    background-color: white;
    max-width: 500px;

    img {
      width: 100%;
    }

    &:hover {
      background-color: #672f87;
      color: white;
      box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.4);
    }

    div.type {
      height: 150px;

      h1 {
        margin: 20px 0 0 20px;
      }

      h2 {
        margin: 0 0 0 20px;
      }
    }
  }
}
</style>
