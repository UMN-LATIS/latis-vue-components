<template>
  <i class="fa" :class="faIconName"></i>
</template>

<script setup>
// import "../../assets/fontawesome-5/css/all.min.css";
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const faIconName = computed(() => `fa-${props.name}`);
</script>
<style>
@import url("../../assets/fontawesome-5/css/all.min.css");
</style>
