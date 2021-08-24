<script setup>
import UMNSearch from "./UMNSearch.vue";
import umnWordmark from "../assets/umn-tc-d2d.svg";
import mLogo from "../assets/m-logo.svg";
</script>

<style>
.umn-header {
  background: var(--maroon);
  padding: 1rem 0;
}

.umn-header > .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}

.umn-header__wordmark {
  margin: 0;
}

.umn-header__wordmark img {
  height: 2rem;
  /* object-fit: contain; */
}

.umn-header__links {
  font-size: 0.8rem;
  list-style: none;
  color: white;
  display: flex;
  margin: 0;
  padding: 0;
  margin-right: 1rem;
}

.umn-header__links li {
  margin: 0;
  padding: 0;
}

.umn-header__links a {
  padding: 0.5rem;
  color: hsla(0, 100%, 100%, 0.75);
  display: inline-block;
}

.umn-header__links a {
  color: white;
}

.umn-header__utils {
  display: flex;
  align-items: center;
}

@media (max-width: 42rem) {
  .umn-header__links {
    display: none;
  }
}
</style>

<template>
  <header class="umn-header">
    <div class="container">
      <h1 class="umn-header__wordmark">
        <picture>
          <source :srcset="umnWordmark" media="(min-width: 36rem)" />
          <img :src="mLogo" alt="University of Minnesota Wordmark" />
        </picture>
      </h1>
      <aside class="umn-header__utils">
        <ul class="umn-header__links">
          <li>
            <a href="https://myu.umn.edu"><i class="fa fa-lock"></i> MyU</a>
          </li>
          <li>
            <a href="https://onestop.umn.edu">One Stop</a>
          </li>
        </ul>
        <UMNSearch class="umn-header__search" />
      </aside>
    </div>
  </header>
</template>
