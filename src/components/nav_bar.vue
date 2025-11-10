<script setup></script>

<template>
  <div class="container">
    <div class="logo"></div>

    <div class="links">
      <router-link :to="{name: 'homepage'}">Home</router-link>
      <router-link :to="{name: 'about_me'}">About Me</router-link>
      <router-link :to="{name: 'contact_me'}">Contact Me</router-link>
    </div>
  </div>
</template>

<style scoped>

div.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 10px;

  div.logo {
    height: 200px;
    width: 100px;
    background-color: rebeccapurple;
    border-radius: 50px;
  }

  div.links {
    display: flex;
    flex-direction: column;
    gap: 10px;

    a {
      color: black;
      text-decoration: none;
      border: 1px solid black;
      padding: 5px;

      &:hover {
        background-color: black;
        color: white;
      }
    }

    @media (width > 1000px) {
      flex-direction: row;
    }
  }
}

</style>
