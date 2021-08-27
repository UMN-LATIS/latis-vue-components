import Container from "./Container.vue";

export default {
  title: "Components/Container",
  component: Container,
};

export const Default = (args) => ({
  components: { Container },
  setup() {
    return { args };
  },
  template: `
    <Container v-bind="args">
      <h1>This is Content, Contained</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit dignissim accumsan primis, diam mi in auctor erat laoreet cursus ultricies eleifend. Ultrices non ut mollis dapibus luctus nunc potenti vestibulum, pretium phasellus ac urna habitant posuere pharetra sagittis quisque, diam gravida quis platea mauris quam vivamus. Curae venenatis pellentesque ridiculus nisi duis potenti montes dapibus, leo massa netus suscipit ullamcorper hendrerit tempor lectus velit, non morbi penatibus aenean himenaeos est facilisis.
      </p>

      <p>
        Risus augue iaculis mollis sociis integer eros sem praesent molestie et fringilla, nascetur nulla tempus placerat fusce elementum ac cursus leo. Vivamus cras etiam vulputate imperdiet quis porttitor non mi felis, quisque quam euismod pharetra aliquet praesent fermentum posuere, mattis sem et justo natoque suscipit curae rutrum. Nostra consequat pellentesque erat scelerisque est feugiat gravida pharetra, etiam ullamcorper ornare per ultricies accumsan lectus, tellus blandit turpis magna pretium sodales parturient.
      </p>
    </Container>
  `,
});
