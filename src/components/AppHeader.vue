<template>
  <header class="app-header">
    <div class="container">
      <div class="app-header__branding">
        <h1 class="app-header__name">{{ name }}</h1>
        <p class="app-header__description">
          {{ description }}
        </p>
      </div>
      <slot class="app-header__slot"></slot>
    </div>
  </header>
</template>

<style>
.app-header {
  background: var(--white);
  color: var(--gray-darker);
  padding: 0.5rem 0;
}
.app-header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.app-header__branding {
  display: flex;
  align-items: center;
}
.app-header__name {
  font-size: 2rem;
  color: var(--maroon);
  margin: 0;
  margin-right: 0.5em;
}
.app-header__description {
  margin: 0;
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
