import AppHeader from "./AppHeader.vue";

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
  components: { AppHeader },
  template: `
    <AppHeader v-bind="args">
      <LoginButton />
    </AppHeader>
  `,
});
