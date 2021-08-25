import UMNSearch from "./UMNSearch.vue";

export default {
  title: "Components/UMNSearch",
  component: UMNSearch,
  parameters: {
    backgrounds: {
      default: "maroon",
    },
  },
};

//👇 We create a template of how args map to rendering
const Template = () => ({
  components: { UMNSearch },
  template: "<UMNSearch />",
});

//👇 Each story then reuses that template
export const Primary = Template.bind({});
