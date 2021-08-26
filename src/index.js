// global stylesheets
import "./assets/normalize.css";
import "./assets/main.css";

// Vue FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faBars,
  faTimes,
  faChevronDown,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

library.add(faSearch, faBars, faTimes, faChevronDown, faLock);

import { AppHeader } from "./components/AppHeader/index.js";
import { AppNav, AppNavItem, AppNavSubNav } from "./components/AppNav/index.js";
import { LoginButton } from "./components/LoginButton/index.js";
import { UMNHeader } from "./components/UMNHeader/index.js";
import {
  HeroContainer,
  HeroHeadline,
  HeroImg,
  HeroText,
} from "./components/Hero/index.js";
import { UMNSearch } from "./components/UMNSearch/index.js";

export {
  AppHeader,
  AppNav,
  AppNavItem,
  AppNavSubNav,
  HeroContainer,
  HeroHeadline,
  HeroImg,
  HeroText,
  LoginButton,
  UMNHeader,
  UMNSearch,
};
