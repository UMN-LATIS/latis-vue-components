<template>
  <ul class="app-nav__sub-nav" :class="classMap">
    <slot />
  </ul>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  isOpen: Boolean,
});

const classMap = computed(() => ({
  "app-nav__sub-nav--is-open": props.isOpen,
}));
</script>

<style scoped>
.app-nav__sub-nav {
  position: relative;
  margin: 0;
  padding: 0;
  display: none;
  background: #fff;
  z-index: 10;
}

.app-nav__sub-nav a:hover {
  border: none;
}

.app-nav__sub-nav--is-open {
  display: block;
}
.app-nav__sub-nav :deep(.app-nav__item:hover) {
  border: 0;
}
</style>
