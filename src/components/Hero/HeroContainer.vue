<template>
  <Container class="hero-container">
    <slot />
  </Container>
</template>

<script setup>
import { Container } from "../Container";
</script>

<style scoped>
.hero-container {
  padding: 4rem 1rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: max-content;
  column-gap: 1rem;
  grid-template-areas:
    "headline img"
    "text  img";
}
.hero-container :deep(.hero-headline) {
  grid-area: headline;
}
.hero-container :deep(.hero-text) {
  grid-area: text;
}
.hero-container :deep(.hero-img) {
  grid-area: img;
}

@media (max-width: 42rem) {
  .hero-container {
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
  }
  :deep(.hero-img) {
    order: 1;
    margin: 0 auto 2rem;
  }
  :deep(.hero-headline) {
    order: 2;
  }
  :deep(.hero-text) {
    order: 3;
  }
}
</style>
