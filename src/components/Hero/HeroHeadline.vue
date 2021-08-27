<template>
  <h2 class="hero-headline">
    <slot />
  </h2>
</template>

<style scoped>
.hero-headline {
  margin: 1rem 0;
  font-size: 2.5rem;
}
@media (max-width: 22rem) {
  .hero-headline {
    font-size: 1.5rem;
  }
}
</style>
