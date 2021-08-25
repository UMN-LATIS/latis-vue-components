import { HeroContainer, HeroImg, HeroHeadline, HeroText } from ".";

export default {
  title: "Components/Hero",
  component: HeroContainer,
};

export const Default = (args) => ({
  components: { HeroContainer, HeroImg, HeroHeadline, HeroText },
  template: `
    <HeroContainer>
      <HeroHeadline>Your links, shorter</HeroHeadline>
      <HeroText>
        <p><a href="#">z.umn.edu</a> is a URL shortening service for UMN faculty, staff, and students.</p>
        <button>Sign In</button>
      </HeroText>
      <HeroImg src="/img/z-hero-illustration.svg" alt="Placeholder" />
    </HeroContainer>
  `,
  setup() {
    return { args };
  },
});
