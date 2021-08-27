<template>
  <header class="umn-header">
    <Container>
      <h1 class="umn-header__wordmark">
        <img
          class="umn-wordmark-large"
          :src="umnWordmark"
          alt="University of Minnesota: Driven to Discover"
        />
        <img
          class="umn-wordmark-small"
          :src="mLogo"
          alt="University of Minnesota Wordmark"
        />
      </h1>
      <aside class="umn-header__utils">
        <ul class="umn-header__links">
          <li>
            <a href="https://myu.umn.edu"><Icon name="lock" /> MyU</a>
          </li>
          <li>
            <a href="https://onestop.umn.edu">One Stop</a>
          </li>
        </ul>
        <UMNSearch class="umn-header__search" />
      </aside>
    </Container>
  </header>
</template>

<script setup>
import { UMNSearch } from "../UMNSearch/index";
import { Icon } from "../Icon/index";
import { Container } from "../Container/index";
import umnWordmark from "../../assets/umn-tc-d2d.svg";
import mLogo from "../../assets/m-logo.svg";
</script>

<style scoped>
.umn-header {
  background: var(--maroon);
  padding: 1rem 0;
}

.umn-header a {
  text-decoration: none;
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
}

.umn-header__links {
  display: none;
  font-size: 1rem;
  list-style: none;
  color: white;
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
  font-size: 0.8rem;
}

.umn-header__links a {
  color: white;
}

.umn-header__utils {
  display: flex;
  align-items: center;
}

.umn-wordmark-large {
  display: none;
}

@media (min-width: 30rem) {
  .umn-header__links {
    display: flex;
  }
}

/* <picture> and svg srcset not playing nice with rollup so trying this */
@media (min-width: 36rem) {
  .umn-header__wordmark img {
    height: 2.25rem;
  }
  .umn-wordmark-large {
    display: block;
  }
  .umn-wordmark-small {
    display: none;
  }
}
</style>
