import AppNavSubNav from "./AppNavSubNav.vue";
import AppNavItem from "./AppNavItem.vue";

export default {
  title: "Components/AppNav/AppNavSubNav",
  component: AppNavSubNav,
  subcomponents: [AppNavItem],
};

const Template = (args) => ({
  components: { AppNavSubNav, AppNavItem },
  template: `
    <AppNavItem>
      Help
      <AppNavSubNav v-bind="args">
        <AppNavItem>Item 1</AppNavItem>
        <AppNavItem>Item 2</AppNavItem>
        <AppNavItem>Item 2</AppNavItem>
      </AppNavSubNav>
    </AppNavItem>
  `,
  setup() {
    return { args };
  },
});

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
};
