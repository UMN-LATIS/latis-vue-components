<template>
  <div class="hero-text">
    <slot />
  </div>
</template>

<style scoped>
.hero-text {
  font-size: 1.25rem;
  color: #999;
  line-height: 1.4;
}
.hero-text a {
  color: var(--maroon);
  text-decoration: underline;
}
@media (max-width: 22rem) {
  .hero-text {
    font-size: 1rem;
  }
}
</style>
