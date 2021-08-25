<template>
  <section class="hero">
    <div class="container">
      <slot name="img" class="hero__image" />
      <slot name="content" class="hero__content" />
    </div>
  </section>
</template>

<script setup>
// const props = defineProps({
//   imgSrc: {
//     type: String,
//   },
//   imgAlt: {
//     type: String,
//   },
// });
</script>

<style></style>
