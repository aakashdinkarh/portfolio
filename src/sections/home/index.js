import { getElement, getImageElement } from "../../util/ui.js";

export const home = (homeDetails) => {
  const sectionHome = getElement("section", "home", { id: "home" });
  const fireworksHomeCanvas = getElement("canvas", "overlay", {
    id: "fireworksHome",
  });

  const content = getElement("div", "content");

  // Text content
  const textContent = getElement("div", "text-content");
  const article = getElement("article");
  const h1 = getElement("h1", null, {
    content: homeDetails.title,
  });
  const button = getElement(
    "button",
    "know-more-about-me right-arrow-hover-effect",
    { content: homeDetails.cta_text },
  );
  button.append(getElement("span", "right-arrow-icon-placeholder-home"));
  article.append(h1, button);
  textContent.append(article);

  // Profile
  const profile = getElement("div", "profile");
  const picture = getImageElement(
    {
      avif: homeDetails.image.avif,
      webp: homeDetails.image.webp,
    },
    homeDetails.image.alt,
    "card",
    "high",
  );
  profile.append(picture);

  content.append(textContent, profile);

  sectionHome.append(fireworksHomeCanvas, content);

  return sectionHome;
};
