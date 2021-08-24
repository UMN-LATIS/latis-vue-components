<template>
  <ul class="app-nav__sub-nav">
    <slot />
  </ul>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  isOpen: Boolean,
});
</script>

<style>
.app-nav__sub-nav {
  margin: 0;
  padding: 0;
  display: none;
}
</style>
