import UMNSearch from "./UMNSearch.vue";

export default {
  title: "Components/UMNSearch",
  component: UMNSearch,
};

//👇 We create a “template” of how args map to rendering
const Template = () => ({
  components: { UMNSearch },
  setup() {
    // return args;
  },
  template: "<UMNSearch />",
});

//👇 Each story then reuses that template
export const Primary = Template.bind({});
// Primary.args = {
//   label: "Search",
// };
