<template>
  <a :href="href" class="login-button" :class="classMap">
    {{ isLoggedIn ? "Sign Out" : "Sign In" }}
  </a>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps({
  isLoggedIn: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
    default: "#!",
  },
});

const classMap = computed(() => ({
  "login-button--is-signed-in": props.isLoggedIn,
}));
</script>
<style scoped>
.login-button {
  display: inline-block;
  padding: 0.5em 1em;
  background: var(--gold);
  border: 0.125rem solid var(--gold-dark);
  box-shadow: 0;
  border-radius: 0.25rem;
  color: var(--gray-darker);
  cursor: pointer;
  text-decoration: none;
}

.login-button--is-signed-in {
  background: var(--gray-dark);
  color: var(--white);
  border-color: var(--gray-dark);
}
</style>
