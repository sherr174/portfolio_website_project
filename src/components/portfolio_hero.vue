<script setup>
const props = defineProps({
  thumbnail: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="hero" :style="`background-image: url(./src/assets/${props.thumbnail})`">
    <div class="opaque_footer">{{props.title}}</div>
  </div>
</template>

<style scoped>
.hero {
  border: 1px solid black;
  border-radius: 10px;
  min-height: 200px;
  width: 300px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .opaque_footer {
    background-color: rebeccapurple;
    color: white;
    padding: 15px;
    text-transform: uppercase;
    opacity: 0.75;
    border-radius: 0 0 9px 9px;
  }
}
</style>
