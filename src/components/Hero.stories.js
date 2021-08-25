import Hero from "./Hero.vue";

export default {
  title: "Components/Hero",
  component: Hero,
};

export const Default = (args) => ({
  components: { Hero },
  template: `
    <Hero>
      <template v-slot:img>
        <img src="//placehold.it/500x500" alt="Placeholder" />
      </template>
      <template v-slot:content>
        <h2>Your links, shorter</h2>
        <p><a href="#">z.umn.edu</a> is a URL shortening service for UMN faculty, staff, and students.</p>

        <button>Sign In</button>
      </template>
    </Hero>
  `,
  setup() {
    return { args };
  },
});
