import { getElement } from "../../util/ui.js";

const getSkillCategoryElement = (skillCategory) => {
  const skillCategoryElement = getElement("div", "skill-category");

  const subHeading = getElement("p", "sub-heading", {
    content: skillCategory.title,
  });

  const ul = getElement("ul");
  const skills = skillCategory.skills.map((skill) => {
    const li = getElement("li");
    const a = getElement("a", "right-arrow-hover-effect", {
      href: skill.infoLink,
    });
    a.target = "_blank";

    const img = getElement("img", skill.className, { src: skill.imageLink, alt: skill.imageAlt });
    img.loading = "lazy";
    img.decoding = "async";
    img.width = "24px";

    a.append(
      img,
      skill.name,
      getElement("span", "right-arrow-icon-placeholder-skill"),
    );

    li.append(a);
    return li;
  });
  ul.append(...skills);

  skillCategoryElement.append(subHeading, ul);
  return skillCategoryElement;
};

export const skills = (skillCategories) => {
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
