import HeroText from "./HeroText.vue";

export default {
  title: "Components/Hero/HeroText",
  component: "HeroText",
};

export const Default = (args) => ({
  components: { HeroText },
  template: `
    <HeroText><a href="#">z.umn.edu</a> is a URL shortening service for UMN faculty, staff, and students.</HeroText>
  `,
  setup() {
    return { args };
  },
});
