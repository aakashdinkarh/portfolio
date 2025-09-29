import { navbar } from "./sections/navbar/index.js";

import { home } from "./sections/home/index.js";
import { about } from "./sections/about/index.js";
import { skills } from "./sections/skills/index.js";
import { experience } from "./sections/experience/index.js";
import { projects } from "./sections/projects/index.js";
import { bottom as contact } from "./sections/bottom/index.js";

import { footer, goToTopButton } from "./sections/footer/index.js";

import { getElement } from "./util/ui.js";

export const initApp = (serverConfig) => {
  const header = getElement("header", "nav");
  header.append(navbar());

  const main = getElement("main");
  main.append(
    home(serverConfig.home),
    about(serverConfig.about),
    skills(serverConfig.skill_categories),
    experience(serverConfig.experience_list),
    projects(serverConfig.projects_list),
    contact(serverConfig.contact_details, serverConfig.form_fields),
  );

  const fragment = document.createDocumentFragment();
  fragment.append(footer(), goToTopButton());

  return [header, main, fragment];
};
