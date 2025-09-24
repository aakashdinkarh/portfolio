import { navbar } from "./sections/navbar/index.js";

import { home } from "./sections/home/index.js";
import { about } from "./sections/about/index.js";
import { skills } from "./sections/skills/index.js";
import { experience } from "./sections/experience/index.js";
import { projects } from "./sections/projects/index.js";
import { bottom as contact } from "./sections/bottom/index.js";

import { footer, goToTopButton } from "./sections/footer/index.js";

import { getElement } from "./util/ui.js";

export const initApp = () => {
  const header = getElement("header", "nav");
  header.append(navbar());

  const main = getElement("main");
  main.append(home(), about(), skills(), experience(), projects(), contact());

  const fragment = document.createDocumentFragment();
  fragment.append(footer(), goToTopButton());

  return [header, main, fragment];
};
