import AppNavItem from "./AppNavItem.vue";

export default {
  title: "Components/AppNav/AppNavItem",
  component: AppNavItem,
};

const Template = (args) => ({
  components: { AppNavItem },
  template: `
    <AppNavItem v-bind="args">My Zlinks</AppNavItem>
  `,
  setup() {
    return { args };
  },
});

export const Default = Template.bind({});
Default.args = {
  isActive: true,
};
