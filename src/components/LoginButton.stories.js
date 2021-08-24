import LoginButton from "./LoginButton.vue";

export default {
  title: "Components/LoginButton",
  component: LoginButton,
};

export const Default = (args) => ({
  components: { LoginButton },
  template: `
    <LoginButton v-bind="args"/>
  `,
  setup() {
    return { args };
  },
});
Default.args = {
  isLoggedIn: false,
};
