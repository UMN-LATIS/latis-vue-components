<template>
  <section class="hero-container container">
    <slot />
  </section>
</template>

<style>
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
.hero-headline {
  grid-area: headline;
}
.hero-text {
  grid-area: text;
}
.hero-img {
  grid-area: img;
}
</style>
