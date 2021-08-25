import HomePage from "./HomePage.vue";

export default {
  title: "Pages/HomePage",
  component: HomePage,
};

export const Default = (args) => ({
  components: { HomePage },
  template: `
    <HomePage v-bind="args" />
  `,
  setup() {
    return { args };
  },
});
