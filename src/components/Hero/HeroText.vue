<template>
  <div class="hero-text">
    <slot />
  </div>
</template>

<style>
.hero-text {
  font-size: 1.25rem;
  color: #999;
  line-height: 1.4;
}
.hero-text a {
  color: var(--maroon);
  text-decoration: underline;
}
</style>
