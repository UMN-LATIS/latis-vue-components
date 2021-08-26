import HeroImg from "./HeroImg.vue";

export default {
  title: "Components/Hero/HeroImg",
  component: HeroImg,
};

const Template = (args) => ({
  components: { HeroImg },
  setup() {
    return { args };
  },
  template: `
    <HeroImg v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  src: "https://placehold.it/500x500",
  alt: "Placeholder Image",
};

export const WithIllustration = Template.bind({});
WithIllustration.args = {
  src: "./img/z-hero-illustration.svg",
  alt:
    "Illustration with two people on mobile devices looking at a webpage using a short z-link",
};
