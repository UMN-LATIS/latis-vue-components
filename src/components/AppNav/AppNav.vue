<template>
  <nav class="app-nav" :class="classMap">
    <Container>
      <button class="app-nav__menu-btn" @click="handleToggleMenu">
        <Icon name="bars" /> Menu
      </button>
      <ul class="app-nav__nav-list">
        <slot />
      </ul>
    </Container>
  </nav>
</template>

<script setup>
import { computed, reactive } from "vue";
import { Icon } from "../Icon/index.js";
import { Container } from "../Container/index";

const state = reactive({
  isOpen: false,
});

const classMap = computed(() => ({
  "app-nav--is-open": state.isOpen,
}));

function handleToggleMenu() {
  console.log({ state });
  state.isOpen = !state.isOpen;
}
</script>

<style scoped>
.app-nav {
  padding: 0;
  margin: 0;
  list-style: none;
  background: var(--gray-lighter);
  color: var(--gray-dark);
}
.app-nav :deep(.latis-vue-container) {
  padding: 0;
}
.app-nav a {
  color: var(--gray-dark);
  text-decoration: none;
}
.app-nav__nav-list {
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
.app-nav__menu-btn {
  border: none;
  padding: 1rem;
  background: none;
  display: none;
}
.app-nav__menu-btn:hover {
  background: none;
}
.app-nav--is-open .app-nav__menu-btn {
  background: var(--gray-darker);
  color: var(--gray-lighter);
}

@media (max-width: 36rem) {
  .app-nav__menu-btn {
    display: block;
  }
  .app-nav__nav-list {
    display: none;
  }
  .app-nav--is-open .app-nav__nav-list {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }
  .app-nav--is-open :deep(.app-nav__item) a {
    padding: 0.5rem;
  }
  .app-nav--is-open :deep(.app-nav__item--is-active) a {
    border: none;
    border-left: 0.25rem solid var(--maroon);
  }
  .app-nav--is-open :deep(.app-nav__sub-nav) {
    position: static;
  }
}
</style>
