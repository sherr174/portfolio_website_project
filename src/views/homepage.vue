<script setup>
import portfolioData from '@/data/portfolio_data.json'
</script>

<template>
  <div class="all_projects">
  <div class="projects" v-for="project in portfolioData" :key="project.id">
    {{project.title}}
  </div>
  </div>
</template>

<style scoped>
div.all_projects {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;

div.projects {
  border: 1px solid black;
  min-width:400px;
}
}

</style>
