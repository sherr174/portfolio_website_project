<script setup>
</script>

<template>
  <div class="message">
    <h1>Thank you for your message!</h1>
    <p>I will get back to you as soon as I can, thank you for reaching out and talk to you soon!</p>
  </div>
</template>

<style scoped>
div.message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: #672f87;
  text-align: center;

  h1 {
    font-size: 42px;
    margin: 0;
    max-width: 75%;
  }

  p {
    font-size: 20px;
    margin: 0;
    max-width: 75%;
  }
}

@media (max-width: 800px) {
  div.message {
    h1 {
      font-size: 30px;
    }
    p {
      font-size: 15px;
    }
  }
}
</style>
