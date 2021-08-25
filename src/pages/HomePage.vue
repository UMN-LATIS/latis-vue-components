<template>
  <div class="home-page">
    <UMNHeader />
    <AppHeader name="Z" description="Shorter Links">
      <LoginButton />
    </AppHeader>
    <AppNav>
      <AppNavItem href="/zlinks" isActive>My Zlinks</AppNavItem>
      <AppNavItem>My Collections</AppNavItem>
      <AppNavItem>API</AppNavItem>
      <AppNavItem>
        Help <i class="fa fa-chevron-down"></i>
        <AppNavSubNav>
          <AppNavItem>Tips for Using Z</AppNavItem>
          <AppNavItem>Contact Us</AppNavItem>
        </AppNavSubNav>
      </AppNavItem>
    </AppNav>
  </div>
</template>

<script setup>
import UMNHeader from "../components/UMNHeader.vue";
import AppHeader from "../components/AppHeader.vue";
import { AppNav, AppNavItem, AppNavSubNav } from "../components/AppNav";
import LoginButton from "../components/LoginButton.vue";
</script>
