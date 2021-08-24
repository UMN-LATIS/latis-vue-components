<template>
  <li class="app-nav__item" :class="classMap">
    <a :href="props.href || '#!'">
      <slot />
    </a>
  </li>
</template>

<style>
.app-nav__item {
  padding: 0;
  margin: 0;
  list-style: none;
  position: relative;
}
.app-nav__item a {
  display: block;
  padding: 1rem;
  color: var(--gray-dark);
}
.app-nav__item a:hover {
  background: white;
  color: var(--maroon);
}

.app-nav__item:hover .app-nav__sub-nav {
  display: block;
}

.app-nav__sub-nav a:hover {
  border: none;
}

@media (min-width: 36rem) {
  .app-nav__item:hover {
    border-bottom: 0.25rem solid white;
  }
  .app-nav__item:hover .app-nav__sub-nav {
    position: absolute;
    top: 100%;
    right: 0;
    display: block;
    border: 1px solid var(--gray-light);
    border-radius: 0.25rem;
    min-width: 10rem;
  }
  .app-nav__item--is-active a,
  .app-nav__item--is-active a:hover {
    border-bottom: 0.25rem solid var(--maroon);
  }
}
</style>

<script setup>
import { defineProps } from "vue";

const classMap = {
  "app-nav__item--is-active": props.isActive || false,
};

const props = defineProps({
  href: String,
  isActive: Boolean,
});
</script>
