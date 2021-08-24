<template>
  <nav class="app-nav" :class="classMap">
    <div class="container">
      <button class="app-nav__menu-btn" @click="handleToggleMenu">
        <i class="fa fa-bars"></i> Menu
      </button>
      <ul class="app-nav__nav-list">
        <slot />
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { computed, reactive } from "vue";

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

<style>
.app-nav {
  padding: 0;
  margin: 0;
  list-style: none;
  background: var(--gray-lighter);
  color: var(--gray-dark);
}
.app-nav a {
  color: var(--gray-dark);
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
  margin-left: -1rem;
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
  .app-nav--is-open .app-nav__item a {
    padding: 0.5rem;
  }
  .app-nav--is-open .app-nav__item--is-active a {
    border: none;
    border-left: 0.25rem solid var(--maroon);
  }
  .app-nav--is-open .app-nav__sub-nav {
    position: static;
  }
}
</style>
