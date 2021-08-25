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

@media (max-width: 42rem) {
  .hero-container {
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
  }
  .hero-img {
    order: 1;
    margin: 0 auto 2rem;
  }
  .hero-headline {
    order: 2;
  }
  .hero-text {
    order: 3;
  }
}
</style>
