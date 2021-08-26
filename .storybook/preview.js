import "../src/assets/normalize.css";
import "../src/assets/main.css";
// import Vue from "vue";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// library.add(faUserSecret);

// Vue.component("font-awesome-icon", FontAwesomeIcon);

// Vue.config.productionTip = false;

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
