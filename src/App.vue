<script setup>
import "./assets/fontawesome-5/css/all.min.css";
import "./assets/normalize.css";
import "./assets/main.css";
import UMNSearch from "./components/UMNSearch.vue";
import UMNHeader from "./components/UMNHeader.vue";
import AppNav from "./components/AppNav.vue";
import AppNavItem from "./components/AppNavItem.vue";
import AppNavSubNav from "./components/AppNavSubNav.vue";
</script>

<style>
.component {
  margin: 2rem 0;
  background: #ccc;
  position: relative;
}

.component__name {
  margin: 0;
  padding: 0.5em;
  font-size: 1rem;
  font-family: monospace;
  background: hsla(0, 100%, 100%, 0.5);
  color: #333;
}
</style>

<template>
  <h1>UMN Components</h1>
  <div class="component">
    <h2 class="component__name">UMN Search</h2>
    <div class="component__body">
      <UMNSearch />
    </div>
  </div>

  <div class="component">
    <h2 class="component__name">UMN Header</h2>
    <div class="component__body">
      <UMNHeader />
    </div>
  </div>

  <div class="component">
    <h2 class="component__name">App Nav</h2>
    <div class="component__body">
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
  </div>
</template>
