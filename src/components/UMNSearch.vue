<template>
  <div class="umn-search">
    <form
      class="umn-search__form"
      :class="searchFormClasses"
      @submit.prevent="handleSubmit"
    >
      <div class="umn-search__input-group">
        <label for="umn-search__input" class="umn-search__label">
          <i class="fa fa-search"></i>
          <span class="visually-hidden">Search</span>
        </label>
        <input
          type="search"
          class="umn-search__input"
          id="umn-search__input"
          :value="state.query"
          placeholder="Search UMN"
        />
      </div>
      <!-- <button class="umn-search__button" type="submit">Search</button> -->
    </form>
    <button
      class="umn-search__toggle-search-form"
      @click="handleToggleFormClosed"
    >
      <i class="fa" :class="toggleIconClass"></i>
    </button>
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";

const state = reactive({
  isClosed: true,
  query: "",
});

const handleToggleFormClosed = () => {
  console.log("Toggle Form");
  state.isClosed = !state.isClosed;
};

const handleSubmit = (event) => {};

const toggleIconClass = computed(() => ({
  "fa-search": state.isClosed,
  "fa-times": !state.isClosed,
}));

const searchFormClasses = computed(() => ({
  "umn-search__form--is-closed": state.isClosed,
}));
</script>

<style scoped>
.umn-search {
  display: flex;
  justify-content: flex-end;
  color: white;
  font-size: 0.8rem;
}
.umn-search__input-group {
  position: relative;
  max-width: 10rem;
}

.umn-search__label {
  position: absolute;
  left: 0.33em;
  top: 50%;
  transform: translateY(-50%);
}

.umn-search__toggle-search-form {
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  width: 2.25rem;
  height: 2.25rem;
  background: none;
  border: none;
  color: white;
}

.umn-search__input {
  padding: 0.5rem;
  padding-left: 2rem;
  background: none;
  border: none;
  border-bottom: 0.125rem solid white;
  border-radius: 0;
  color: white;
  max-width: 100%;
}
/* .umn-search__button {
  border-radius: 0 0.25rem 0.25rem 0;
} */
.umn-search__form {
  display: flex;
}

.umn-search__form--is-closed {
  display: none;
}

::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: hsla(0, 100%, 100%, 0.5);
}
::-moz-placeholder {
  /* Firefox 19+ */
  color: hsla(0, 100%, 100%, 0.5);
}
</style>
