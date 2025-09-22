import { getElement, getImageElement } from "../../util/ui";
import { go } from "../../util/navUtil";

export const home = () => {
  const sectionHome = getElement("section", "home", { id: "home" });
  const fireworksHomeCanvas = getElement("canvas", "overlay", {
    id: "fireworksHome",
  });

  const content = getElement("div", "content");

  // Text content
  const textContent = getElement("div", "text-content");
  const article = getElement("article");
  const h1 = getElement("h1", null, {
    content: "I'm Aakash Dinkar\nWeb Developer",
  });
  const button = getElement(
    "button",
    "know-more-about-me right-arrow-hover-effect",
    { content: "Know more about me" }
  );
  button.onclick = () => {
    go("#about", true);
  };
  article.append(h1, button);
  textContent.append(article);

  // Profile
  const profile = getElement("div", "profile");
  const picture = getImageElement(
    {
      avif: "https://aakashdinkarh.github.io/static_assets/images/portfolio/avif-images/portfolio.avif",
      webp: "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/portfolio.webp",
    },
    "Aakash Dinkar Portfolio Image",
    "card"
  );
  profile.append(picture);

  content.append(textContent, profile);

  sectionHome.append(fireworksHomeCanvas, content);

  return sectionHome;
};
