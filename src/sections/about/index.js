import { getElement, getImageElement } from "../../util/ui.js";

export const about = (aboutDetails) => {
  const sectionAbout = getElement("section", "about card", { id: "about" });

  const overlay = getElement("div", "overlay");

  const content = getElement("div", "content");

  const profile = getElement("div", "profile");
  const picture = getImageElement(
    {
      avif: aboutDetails.image.avif,
      webp: aboutDetails.image.webp,
    },
    aboutDetails.image.alt,
    "card",
  );
  profile.append(picture);

  const article = getElement("article");
  const textContent = getElement("div", "text-content");
  const h2 = getElement("h2", null, { content: "About" });
  const p = getElement("p", null, {
    content:
      aboutDetails.description,
  });
  const hr = getElement("hr");
  const p2 = getElement("p", null, {
    content:
      aboutDetails.description2,
  });
  const p3 = getElement("p", null, {
    content:
      aboutDetails.description3,
  });
  const div = getElement("div", "m-justify-center");
  const a = getElement("a", "styled-btn color-black", {
    content: aboutDetails.cta.text,
    href: aboutDetails.cta.link,
  });
  a.download = aboutDetails.cta.download_name;
  a.target = "_blank";
  div.append(a);

  textContent.append(h2, p, hr, p2, p3, div);
  article.append(textContent);
  content.append(profile, article);

  sectionAbout.append(overlay, content);

  return sectionAbout;
};
