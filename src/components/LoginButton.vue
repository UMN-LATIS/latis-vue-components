<template>
  <a :href="href" class="login-button" :class="classMap">
    {{ isLoggedIn ? "Sign Out" : "Sign In" }}
  </a>
</template>
<script setup>
import { computed } from "@vue/reactivity";

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
  "login-button--is-signed-in": props.isSignedIn,
}));
</script>
<style>
.login-button {
  padding: 0.5em 1em;
  background: var(--gold);
  border: none;
  box-shadow: 0;
  border-radius: 0.25rem;
  color: var(--gray-darker);
  cursor: pointer;
}

.login-button--is-signed-in {
  background: var(--gray-darker);
  color: var(--gold);
}
</style>
