import { getElement, getImageElement } from "../../util/ui.js";

export const about = () => {
  const sectionAbout = getElement("section", "about card", { id: "about" });

  const overlay = getElement("div", "overlay");

  const content = getElement("div", "content");

  const profile = getElement("div", "profile");
  const picture = getImageElement(
    {
      avif: "https://aakashdinkarh.github.io/static_assets/images/portfolio/avif-images/photo.avif",
      webp: "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/photo.webp",
    },
    "about image - Aakash Dinkar",
    "card"
  );
  profile.append(picture);

  const article = getElement("article");
  const textContent = getElement("div", "text-content");
  const h2 = getElement("h2", null, { content: "About" });
  const p = getElement("p", null, {
    content:
      "I'm a Civil Engineering graduate with a B.Tech degree from IIT BHU, batch of 2022",
  });
  const hr = getElement("hr");
  const p2 = getElement("p", null, {
    content:
      "Experienced front-end developer skilled in creating responsive, performance optimized, user-friendly interfaces for web applications.",
  });
  const p3 = getElement("p", null, {
    content:
      "Passionate about user experience design, I aim to craft visually appealing and intuitive interfaces that elevate the user's experience.",
  });
  const div = getElement("div", "m-justify-center");
  const a = getElement("a", "styled-btn color-black", {
    content: "Download Resume",
    href: "https://aakashdinkarh.github.io/static_assets/files/portfolio/resume/resume.pdf",
  });
  a.download = "Aakash Dinkar Resume";
  a.target = "_blank";
  div.append(a);

  textContent.append(h2, p, hr, p2, p3, div);
  article.append(textContent);
  content.append(profile, article);

  sectionAbout.append(overlay, content);

  return sectionAbout;
};
