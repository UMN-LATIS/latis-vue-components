import AppHeader from "./AppHeader.vue";
import { LoginButton } from "../LoginButton";

export default {
  title: "Components/AppHeader",
  component: AppHeader,
};

const Template = (args) => ({
  components: { AppHeader },
  template: `
    <AppHeader v-bind="args" />
  `,
  setup() {
    return { args };
  },
});

export const Default = Template.bind({});
Default.args = {
  name: "Z",
  description: "Link Shortening",
};

export const WithLogin = (args) => ({
  components: { AppHeader, LoginButton },
  template: `
    <AppHeader v-bind="args">
      <LoginButton :isLoggedIn="args.isLoggedIn" />
    </AppHeader>
  `,
  setup() {
    return { args };
  },
});
WithLogin.args = {
  ...Default.args,
  isLoggedIn: false,
};
