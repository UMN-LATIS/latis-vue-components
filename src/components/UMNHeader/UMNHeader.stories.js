import UMNHeader from "./UMNHeader.vue";

export default {
  title: "Components/UMNHeader",
  component: UMNHeader,
};

//👇 We create a template of how args map to rendering
const Template = () => ({
  components: { UMNHeader },
  template: "<UMNHeader />",
});

//👇 Each story then reuses that template
export const Primary = Template.bind({});
