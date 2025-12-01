<script setup>
</script>

<template>
  <div class="container">
    <div class="logo">
      <router-link :to="{ name: 'portfolio' }">
        <img :src="'./src/assets/footer_logo.png'" height="50px" />
      </router-link>
    </div>

    <div class="links">
      <a href="https://www.instagram.com/wilrus_design/">
        <img :src="'./src/assets/instagram_icon.png'" height="30px" />
      </a>

      <a href="https://www.linkedin.com/in/wil-sherrin/">
        <img :src="'./src/assets/linkedin_icon.png'" height="30px" />
      </a>
    </div>
  </div>
</template>

<style scoped>
div.container {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 0 20px;
  background: url('../assets/header_repeat.gif') center center repeat-x;

  div.logo {
    height: auto;
    width: 48px;
    margin: 0 20px -14px 0;
    display: flex;
    padding: 0;
  }

  div.links {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;

    a:hover {
      margin-bottom: 5px;
    }
  }
}
</style>
