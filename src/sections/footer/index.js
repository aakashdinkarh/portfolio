import { getElement } from "../../util/ui";

export const footer = () => {
  const footer = getElement("footer");
  const section = getElement("section");

  const textContent = getElement("div", "text-content");

  const copyright = getElement("div", "copyright", {
    content: "© ",
  });
  copyright.style.textAlign = "center";

  const copyrightName = getElement("span", "copyright-name", {
    content: "Aakash Dinkar. All rights reserved ",
  });
  const copyrightYear = getElement("span", {
    content: `| ${new Date().getFullYear()}`,
  });
  copyright.append(copyrightName, copyrightYear);

  textContent.append(copyright);

  section.append(textContent);

  footer.append(section);

  return footer;
};

export const goToTopButton = () => {
  const topBtn = getElement("a", "color-black", {
    id: "top-btn",
    href: "#",
  });
  topBtn.title = "Go to top";

  topBtn.append(
    ...Array(2)
      .fill(0)
      .map(() => getElement("span", "upward-icon-placeholder"))
  );

  return topBtn;
};
