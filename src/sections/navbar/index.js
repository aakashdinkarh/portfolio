import { getElement } from "../../util/ui.js";

const NAV_LINKS = [
  { text: "About", href: "#about" },
  { text: "Skills", href: "#skills" },
  { text: "Experience", href: "#experience" },
  { text: "Project", href: "#project" },
  { text: "Contact", href: "#contact" },
];

const getLinks = () => {
  return NAV_LINKS.map(({ text, href }, index) => {
    const a = getElement("a", null, { content: text, href });
    if (index % 2 === 0) a.dataset.scrollOffset = "true";
    const li = getElement("li", "nav-links");
    li.append(a);
    return li;
  });
};

const logo = getElement("a", "color-black", {
  content: "Portfolio",
  href: "#",
  id: "logo",
});

const mNav = () => {
  const mNavSection = getElement("section", "m-nav");

  const wrapperDiv1 = getElement("div", "m-justify-center m-full-width");
  const hamburgerMenuButton = getElement(
    "button",
    "hamburger-menu-icon m-flex-col m-justify-center",
  );
  const hamburgerIconBars = Array(3)
    .fill(0)
    .map(() => getElement("div", "hamburger-icon-bar"));
  hamburgerMenuButton.append(...hamburgerIconBars);
  wrapperDiv1.append(hamburgerMenuButton, logo);

  const overlayDiv = getElement("div", "overlay m-nav-bar-overlay");

  const mNavBarSection = getElement("section", "m-nav-bar m-flex-col", {
    id: "mNavBar",
  });

  const wrapperDiv2 = getElement("div", "m-justify-center m-full-width");
  const navbarCloseIcon = getElement("button", "navbar-close-icon", {
    content: "&times;",
    id: "navbarCloseIcon",
  });
  wrapperDiv2.append(navbarCloseIcon, logo);

  const ul = getElement("ul", "links m-flex-col");
  ul.append(...getLinks());
  mNavBarSection.append(wrapperDiv2, ul);

  mNavSection.append(wrapperDiv1, overlayDiv, mNavBarSection);

  return mNavSection;
};

const dNav = () => {
  const dNavSection = getElement("section", "d-nav");

  const ul = getElement("ul", "links");
  ul.append(...getLinks());

  dNavSection.append(logo, ul);

  return dNavSection;
};

export const navbar = () => {
  const nav = getElement("nav");
  nav.append(mNav(), dNav());
  return nav;
};
