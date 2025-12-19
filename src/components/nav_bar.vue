<script setup>
import LogoSvg from '@/assets/logo-svg.vue'
</script>

<template>
  <div class="container">
    <div class="logo">
      <router-link :to="{ name: 'portfolio' }"><logo-svg/></router-link>
    </div>

    <div class="links">
      <router-link :to="{ name: 'portfolio' }">Portfolio</router-link>
      <router-link :to="{ name: 'about_me' }">About Me</router-link>
      <router-link :to="{ name: 'contact_me' }">Contact Me</router-link>
    </div>

  </div>
</template>

<style scoped>
div.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 10px;
  background: url('../assets/header_repeat.gif') center center repeat-x;

  div.logo {
    height: 175px;
    width: 84px;
    margin-left: 20px;
  }
}

div.links {
  display: flex;
  gap: 20px;
  font-weight: bold;
  text-align: center;
  margin-right: 20px;

  a {
    color: #672f87;
    background-color: white;
    border: 2px solid #672f87;
    text-decoration: none;
    padding: 5px;

    &:hover {
      background-color: #902f89;
      color: white;
      border: 2px solid white;
    }
  }
}

@media (max-width: 800px) {
  div.container {
    flex-direction: column;
    align-items: center;
    gap: 20px;

    div.logo {
      height: 175px;
      width: 84px;
      margin-left: 0;
    }

    div.links {
      flex-direction: row;
      align-items: center;
      gap: 20px;
      margin-right: 0;
    }
  }
}
</style>
