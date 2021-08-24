<template>
  <ul class="app-nav__sub-nav" :class="classMap">
    <slot />
  </ul>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  isOpen: Boolean,
});

const classMap = computed(() => ({
  "app-nav__sub-nav--is-open": props.isOpen,
}));
</script>

<style>
.app-nav__sub-nav {
  margin: 0;
  padding: 0;
  display: none;
}

.app-nav__sub-nav--is-open {
  display: block;
}
</style>
