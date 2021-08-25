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
    <HeroContainer>
      <HeroHeadline>Your links, shorter</HeroHeadline>
      <HeroText>
        <p>
          <a href="#">z.umn.edu</a> is a URL shortening service for UMN faculty,
          staff, and students.
        </p>
        <button>Sign In</button>
      </HeroText>
      <HeroImg src="/img/z-hero-illustration.svg" alt="Placeholder" />
    </HeroContainer>
  </div>
</template>

<script setup>
import {
  UMNHeader,
  AppHeader,
  AppNav,
  AppNavItem,
  AppNavSubNav,
  LoginButton,
  HeroContainer,
  HeroHeadline,
  HeroText,
  HeroImg,
} from "../../index.js";
</script>
