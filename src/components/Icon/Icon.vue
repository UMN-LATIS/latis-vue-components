<template>
  <FontAwesomeIcon :icon="name" />
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>
