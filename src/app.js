import { navbar } from "./sections/navbar";

import { home } from "./sections/home";
import { about } from "./sections/about";
import { skills } from "./sections/skills";
import { experience } from "./sections/experience";
import { projects } from "./sections/projects";
import { contact } from "./sections/bottom";

import { footer, goToTopButton } from "./sections/footer";

import { selectElement } from "./util/ui";

const initApp = () => {
  const header = getElement("header", "nav");
  header.append(navbar());
  selectElement("header").replaceWith(header);

  const main = getElement("main");
  main.append(home(), about(), skills(), experience(), projects(), contact());
  selectElement("main").replaceWith(main);

  const body = selectElement("body");
  body.append(footer(), goToTopButton());

  console.log("App initialized");
};

initApp();
