import HeroHeadline from "./HeroHeadline.vue";

export default {
  title: "Components/Hero/HeroHeadline",
  component: HeroHeadline,
};

export const Default = (args) => ({
  components: { HeroHeadline },
  template: `
    <HeroHeadline v.bind="args">{{ args.headline }}</HeroHeadline>
  `,
  setup() {
    return { args };
  },
});

Default.args = {
  headline: "Your links, shorter",
};
