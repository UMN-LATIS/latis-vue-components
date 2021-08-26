import Icon from "./Icon.vue";

export default {
  title: "Components/Icon",
  component: Icon,
};

export const Default = (args) => ({
  components: { Icon },
  setup() {
    return { args };
  },
  template: `
    <Icon v-bind="args" />
  `,
});
Default.args = {
  name: "search",
};
