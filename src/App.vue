<script setup>
import Nav_bar from '@/components/nav_bar.vue'
</script>

<template>
  <section class="container">
    <header>
      <nav_bar />
    </header>

    <section class="content">
      <router-view />
    </section>

    <footer>Made by Wil Fall '25</footer>
  </section>
</template>

<style scoped>
  section.container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    > * {
      border: 1px solid black;
    }

    .content {
      background-color: blanchedalmond;
      padding: 10px;
      border-radius: 10px;

      p {
        &:first-of-type {
          margin-top: 0;
        }

        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }

    footer {
      text-align: center;
      padding: 10px;
    }
  }
</style>
