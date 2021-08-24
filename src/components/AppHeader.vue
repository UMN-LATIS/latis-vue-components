<template>
  <header class="app-header">
    <div class="container">
      <div class="app-header__branding">
        <h1 class="app-header__name">{{ name }}</h1>
        <p class="app-header__description">
          {{ description }}
        </p>
      </div>
      <div class="app-header__slot"></div>
    </div>
  </header>
</template>

<style>
.app-header {
  background: var(--gray-lighter);
  color: var(--gray-darker);
}
.app-header__branding {
  display: flex;
  align-items: center;
}
.app-header__name {
  font-size: 2rem;
  color: var(--maroon);
  margin-right: 0.5em;
}
.app-header__description {
  color: var(--gray-dark);
}
</style>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  href: {
    type: String,
    default: "/",
  },
});
</script>
