import AppNav from "./AppNav.vue";
import AppNavItem from "./AppNavItem.vue";
import AppNavSubNav from "./AppNavSubNav.vue";

export default {
  title: "Components/AppNav",
  component: AppNav,
  subcomponents: { AppNavItem, AppNavSubNav },
};

export const Default = (args) => ({
  components: { AppNav, AppNavItem },
  template: `
    <AppNav>
      <AppNavItem href="/zlinks" isActive>My Zlinks</AppNavItem>
      <AppNavItem>My Collections</AppNavItem>
      <AppNavItem>API</AppNavItem>
    </AppNav>
  `,
});

export const Empty = (args) => ({
  components: { AppNav },
  setup() {
    return args;
  },
  template: `<AppNav v-bind="args" />`,
});

export const WithSubnav = () => ({
  components: { AppNav, AppNavItem, AppNavSubNav },
  template: `
    <AppNav>
      <AppNavItem href="/zlinks" isActive>My Zlinks</AppNavItem>
      <AppNavItem>My Collections</AppNavItem>
      <AppNavItem>API</AppNavItem>
      <AppNavItem>
        Help <i class="fa fa-chevron-down"></i>
        <AppNavSubNav>
          <AppNavItem>Tips for Using Z</AppNavItem>
          <AppNavItem>Contact Us</AppNavItem>
        </AppNavSubNav>
      </AppNavItem>
    </AppNav>
  `,
});
