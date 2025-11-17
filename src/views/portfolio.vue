<script setup>
import portfolioData from '@/data/portfolio_data.json'
</script>

<template>
  <div class="all_projects">
    <div class="projects" v-for="project in portfolioData" :key="project.id">
      <img :src="'./src/assets/' + project.thumbnail" />
      <div class="type">
        <h1>{{ project.title }}</h1>
        <h2>{{ project.subtitle }}</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
div.all_projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1rem;

  div.projects {
    background-color: white;
    max-width: 500px;

    img {
      width: 100%;
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
