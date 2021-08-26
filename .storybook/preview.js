export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "light",
    values: [
      { name: "light", value: "#fff" },
      { name: "dark", value: "#222" },
      { name: "maroon", value: "#7a0019" },
    ],
  },
};
