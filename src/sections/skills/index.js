import { getElement } from "../../util/ui";

const skillCategories = [
  {
    title: "Languages, Libraries & Frameworks",
    skills: [
      {
        name: "JavaScript",
        infoLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        imageLink:
          "https://aakashdinkarh.github.io/static_assets/images/svgs/javascript.svg",
        imageAlt: "javascript",
      },
      {
        name: "TypeScript",
        infoLink: "https://www.typescriptlang.org/",
        imageLink:
          "https://aakashdinkarh.github.io/static_assets/images/svgs/typescript.svg",
        imageAlt: "typescript",
      },
      {
        name: "ReactJS",
        infoLink: "https://react.dev/",
        imageLink:
          "https://aakashdinkarh.github.io/static_assets/images/svgs/react.svg",
        imageAlt: "reactJS",
      },
      {
        name: "NextJS",
        infoLink: "https://nextjs.org/",
        imageLink:
          "https://aakashdinkarh.github.io/static_assets/images/svgs/nextjs.svg",
        imageAlt: "nextJS",
      },
      {
        name: "Redux",
        infoLink: "https://redux.js.org/",
        imageLink:
          "https://aakashdinkarh.github.io/static_assets/images/svgs/redux.svg",
        imageAlt: "redux",
      },
      {
        name: "NodeJS",
        infoLink: "https://nodejs.org/",
        imageLink:
          "https://aakashdinkarh.github.io/static_assets/images/svgs/nodejs.svg",
        imageAlt: "nodeJS",
      },
      {
        name: "ExpressJS",
        infoLink: "https://expressjs.com/",
        imageLink:
          "https://aakashdinkarh.github.io/static_assets/images/svgs/express.svg",
        imageAlt: "expressJS",
      },
      {
        name: "Styled Components",
        infoLink: "https://styled-components.com/",
        imageLink:
          "https://aakashdinkarh.github.io/static_assets/images/svgs/styled-components.svg",
        imageAlt: "styled components",
      },
      {
        name: "React Hook Form",
        infoLink: "https://react-hook-form.com/",
        imageLink:
          "https://aakashdinkarh.github.io/static_assets/images/svgs/react-hook-form.svg",
        imageAlt: "react hook form",
        className: "react-hook-form",
      },
      {
        name: "HTML",
        infoLink: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        imageLink:
          "https://aakashdinkarh.github.io/static_assets/images/svgs/html.svg",
        imageAlt: "html",
      },
      {
        name: "CSS",
        infoLink: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        imageLink:
          "https://aakashdinkarh.github.io/static_assets/images/svgs/css.svg",
        imageAlt: "css",
      },
    ],
  },
  {
    title: "Tools & Best Practices",
    skills: [
      {
        name: "Git & GitHub",
        infoLink:
          "https://docs.github.com/en/get-started/start-your-journey/about-github-and-git",
        imageLink:
          "https://aakashdinkarh.github.io/static_assets/images/svgs/github.svg",
        imageAlt: "git & gitHub",
      },
      {
        name: "Responsive Web Designs",
        infoLink:
          "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
        imageLink:
          "https://aakashdinkarh.github.io/static_assets/images/svgs/responsive-web-design.svg",
        imageAlt: "responsive web design",
      },
      {
        name: "Web Performance",
        infoLink: "https://developer.mozilla.org/en-US/docs/Web/Performance",
        imageLink:
          "https://aakashdinkarh.github.io/static_assets/images/svgs/web-performance.svg",
        imageAlt: "web performance",
      },
      {
        name: "SEO",
        infoLink: "https://developers.google.com/search/docs",
        imageLink:
          "https://aakashdinkarh.github.io/static_assets/images/svgs/seo.svg",
        imageAlt: "seo",
      },
      {
        name: "VS Code",
        infoLink: "https://code.visualstudio.com/",
        imageLink:
          "https://aakashdinkarh.github.io/static_assets/images/svgs/vs-code.svg",
        imageAlt: "vs code",
      },
      {
        name: "Cursor",
        infoLink: "https://www.cursor.com/",
        imageLink:
          "https://aakashdinkarh.github.io/static_assets/images/website-logo/cursor.webp",
        imageAlt: "cursor",
        className: "cursor",
      },
    ],
  },
];

const getSkillCategoryElement = (skillCategory) => {
  const skillCategoryElement = getElement("div", "skill-category");

  const subHeading = getElement("p", "sub-heading", {
    content: skillCategory.title,
  });

  const ul = getElement("ul");
  const skills = skillCategory.skills.map((skill) => {
    const li = getElement("li");
    const a = getElement("a", "right-arrow-hover-effect", {
      content: skill.name,
      href: skill.infoLink,
    });
    a.target = "_blank";

    const img = getElement("img", skill.className, { src: skill.imageLink });
    img.alt = skill.imageAlt;
    img.loading = "lazy";
    img.decoding = "async";
    img.width = "24px";

    a.append(
      img,
      skill.name,
      getElement("span", "right-arrow-icon-placeholder-skill")
    );

    li.append(a);
    return li;
  });
  ul.append(...skills);

  skillCategoryElement.append(subHeading, ul);
  return skillCategoryElement;
};

export const about = () => {
  const sectionSkills = getElement("section", "skills", { id: "skills" });
  const overlay = getElement("div", "overlay");

  const content = getElement("div", "content card");
  const textContent = getElement("div", "text-content");

  const h2 = getElement("h2", null, { content: "What Skills Do I Have?" });
  const skillCategoryContainer = getElement("div", "skill-category-container");

  const skillCategoriesElements = skillCategories.map(getSkillCategoryElement);
  skillCategoryContainer.append(...skillCategoriesElements);

  textContent.append(h2, skillCategoryContainer);
  content.append(textContent);

  sectionSkills.append(overlay, content);

  return sectionSkills;
};
