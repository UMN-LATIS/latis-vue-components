<template>
  <div class="umn-search">
    <button
      class="umn-search__toggle-search-form"
      @click="handleToggleFormClosed"
    >
      <i class="fa fa-search"></i>
    </button>
    <form class="umn-search__form" :class="searchFormClasses">
      <label for="umn-search__input" class="visually-hidden">Search</label>
      <input
        type="search"
        id="umn-search__input"
        value=""
        placeholder="Search UMN"
      />
      <button class="umn-search__button" type="submit">Search</button>
    </form>
  </div>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  setup() {
    const state = reactive({
      isClosed: false,
      search: "",
    });

    const handleToggleFormClosed = () => {
      console.log("Toggle Form");
      state.isClosed = !state.isClosed;
    };
    const handleUpdate = (event) => (state.search = event.target.value);
    const handleSubmit = (event) => {
      console.log("Submit Form");
    };

    const searchFormClasses = computed(() => ({
      "umn-search__form--is-closed": state.isClosed,
    }));

    return {
      state,
      handleToggleFormClosed,
      handleUpdate,
      handleSubmit,
      searchFormClasses,
    };
  },
};
</script>

<style scoped>
/* .umn-search {
  display: flex;
} */

.umn-search__input {
  border-radius: 0.25rem 0 0 0.25rem;
  border-right: 0;
}
.umn-search__button {
  /* border-left: 0; */
  border-radius: 0 0.25rem 0.25rem 0;
}

.umn-search__form--is-closed {
  display: none;
}
</style>
