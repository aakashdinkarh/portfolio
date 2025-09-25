import { getElement, getImageElement } from "../../util/ui.js";

const getProjectImageCard = (image) => {
  const li = getElement("li", "project-image card");
  const picture = getImageElement(image, image.imageAlt);
  li.append(picture);
  return li;
};

const getProjectDetailLinkContainer = (detailLinks) => {
  const projectDetailLinkContainer = getElement(
    "div",
    "project-detail-links-container",
  );

  const ul = getElement("ul", "project-detail-links");
  const detailLinksElements = detailLinks.map((detailLink) => {
    const li = getElement("li");
    const a = getElement("a", null, {
      content: detailLink.title,
      href: detailLink.href,
    });
    a.target = "_blank";
    li.append(a);
    return li;
  });
  ul.append(...detailLinksElements);
  projectDetailLinkContainer.append(ul);
  return projectDetailLinkContainer;
};

const getProjectDetailElement = (project) => {
  const article = getElement("article");

  const projectDetails = getElement(
    "div",
    project.projectDetailCardClassName || "project-details",
  );

  if (!project.viewAll) {
    const projectImageList = getElement("ul", "project-image-list");
    const pictureImageCards = project.imageList.map(getProjectImageCard);
    const projectDetailLinkContainer = getProjectDetailLinkContainer(
      project.detailLinks,
    );
    projectImageList.append(...pictureImageCards, projectDetailLinkContainer);
    projectDetails.append(projectImageList);
  }

  const subHeading = getElement("p", "sub-heading");
  const a = getElement("a", "right-arrow-hover-effect", {
    content: project.subHeading,
    href: project.subHeadingLink,
  });
  a.target = "_blank";

  const rightArrowIconPlaceholder = getElement(
    "span",
    "right-arrow-icon-placeholder-project",
  );
  a.append(rightArrowIconPlaceholder);

  subHeading.append(a);
  projectDetails.append(subHeading);

  article.append(projectDetails);
  return article;
};

export const projects = (projectsList) => {
  const sectionProjects = getElement("section", "projects", { id: "project" });
  const overlay = getElement("div", "overlay");

  const content = getElement("div", "content card");

  const textContent = getElement("div", "text-content");

  const h2 = getElement("h2", null, { content: "Projects I Have Worked On" });

  const projectDetailsContainer = getElement(
    "div",
    "project-details-container",
  );

  const projectDetailElements = projectsList.map(getProjectDetailElement);

  projectDetailsContainer.append(...projectDetailElements);

  textContent.append(h2, projectDetailsContainer);

  content.append(textContent);

  sectionProjects.append(overlay, content);

  return sectionProjects;
};
