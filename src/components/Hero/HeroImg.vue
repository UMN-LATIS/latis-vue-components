<template>
  <div class="hero-img">
    <img :src="src" :alt="alt" />
  </div>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
  .hero-img img {
    display: block;
    width: 100%;
    margin: auto;
  }
</style>