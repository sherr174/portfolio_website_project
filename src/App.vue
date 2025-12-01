<script setup>
import Nav_bar from '@/components/nav_bar.vue'
import FooterWilWil from '@/components/footer_wil.vue'
</script>

<template>
  <section class="container">
    <header>
      <nav_bar/>
    </header>

    <section class="content">
      <router-view/>
    </section>

    <footer>
      <footer-wil-wil/>
    </footer>
  </section>
</template>

<style scoped>
  section.container {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    display: flex;
    flex-direction: column;
    > * {
    }

    .content {
      background-color: #ded6e8;
      padding: 20px;

      p {
        &:first-of-type {
          margin-top: 0;
        }

        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
