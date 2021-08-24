// import { FontAwesomeIcon } from "../src/plugins/font-awesome";
import "../src/assets/fontawesome-5/css/all.min.css";
import "../src/assets/normalize.css";
import "../src/assets/main.css";

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
