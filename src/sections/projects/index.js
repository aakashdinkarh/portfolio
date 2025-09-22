import { getElement, getImageElement } from "../../util/ui.js";

const projectsList = [
  {
    imageList: [
      {
        avif: "https://aakashdinkarh.github.io/static_assets/images/portfolio/avif-images/devDinkar-codebook_1.avif",
        webp: "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/devDinkar-codebook_1.webp",
        imageAlt: "DevDinkar CodeBook Home Page",
      },
      {
        avif: "https://aakashdinkarh.github.io/static_assets/images/portfolio/avif-images/devDinkar-codebook_2.avif",
        webp: "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/devDinkar-codebook_2.webp",
        imageAlt: "DevDinkar CodeBook Home Page",
      },
    ],
    detailLinks: [
      {
        title: "NPM Package",
        href: "https://www.npmjs.com/package/smart-components-dinkar",
      },
      {
        title: "GitHub",
        href: "https://github.com/aakashdinkarh/smart-components-dinkar",
      },
      {
        title: "Try it Now",
        href: "https://devdinkar-codebook.vercel.app",
      },
    ],
    subHeading: "Smart Components Dinkar",
    subHeadingLink: "https://devdinkar-codebook.vercel.app",
  },
  {
    imageList: [
      {
        avif: "https://aakashdinkarh.github.io/static_assets/images/portfolio/avif-images/bounce-and-collect-game_1.avif",
        webp: "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/bounce-and-collect-game_1.webp",
        imageAlt: "Bounce and Collect Game Home Section",
      },
      {
        avif: "https://aakashdinkarh.github.io/static_assets/images/portfolio/avif-images/bounce-and-collect-game_2.avif",
        webp: "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/bounce-and-collect-game_2.webp",
        imageAlt: "Bounce and Collect Game Home Section",
      },
    ],
    detailLinks: [
      {
        title: "GitHub",
        href: "https://github.com/aakashdinkarh/bounce-and-collect-game",
      },
      {
        title: "Try it Now",
        href: "https://aakashdinkar.in/bounce-and-collect-game/",
      },
    ],
    subHeading: "Bounce and Collect Game",
    subHeadingLink: "https://aakashdinkar.in/bounce-and-collect-game/",
  },
  {
    imageList: [
      {
        avif: "https://aakashdinkarh.github.io/static_assets/images/portfolio/avif-images/js-ts-playground_1.avif",
        webp: "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/js-ts-playground_1.webp",
        imageAlt: "JS/TS Playground Home Page",
      },
      {
        avif: "https://aakashdinkarh.github.io/static_assets/images/portfolio/avif-images/js-ts-playground_2.avif",
        webp: "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/js-ts-playground_2.webp",
        imageAlt: "JS/TS Playground Home Page",
      },
    ],
    detailLinks: [
      {
        title: "GitHub",
        href: "https://github.com/aakashdinkarh/js-ts-playground",
      },
      {
        title: "Try it Now",
        href: "https://aakashdinkar.in/js-ts-playground/",
      },
    ],
    subHeading: "JS/TS Playground",
    subHeadingLink: "https://aakashdinkar.in/js-ts-playground/",
  },
  {
    imageList: [
      {
        avif: "https://aakashdinkarh.github.io/static_assets/images/portfolio/avif-images/movie-db-project_1.avif",
        webp: "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/movie-db-project_1.webp",
        imageAlt: "The Movie DB Home Page",
      },
      {
        avif: "https://aakashdinkarh.github.io/static_assets/images/portfolio/avif-images/movie-db-project_3.avif",
        webp: "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/movie-db-project_3.webp",
        imageAlt: "The Movie DB Home Page",
      },
    ],
    detailLinks: [
      {
        title: "GitHub",
        href: "https://github.com/aakashdinkarh/the-movie-db",
      },
    ],
    subHeading: "The Movie DB",
    subHeadingLink: "https://aakashdinkar.in/the-movie-db/",
  },
  {
    imageList: [
      {
        avif: "https://aakashdinkarh.github.io/static_assets/images/portfolio/avif-images/window-props-plus_2.avif",
        webp: "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/window-props-plus_2.webp",
        imageAlt: "Music Player Project Home Page",
      },
      {
        avif: "https://aakashdinkarh.github.io/static_assets/images/portfolio/avif-images/window-props-plus_3.avif",
        webp: "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/window-props-plus_3.webp",
        imageAlt: "Music Player Project Home Page",
      },
    ],
    detailLinks: [
      {
        title: "Readme",
        href: "https://github.com/aakashdinkarh/window-props-plus/blob/main/README.md",
      },
      {
        title: "GitHub",
        href: "https://github.com/aakashdinkarh/window-props-plus",
      },
      {
        title: "Try it Now",
        href: "https://chromewebstore.google.com/detail/window-props-plus/imepmnfbpoohiejbnbeodjlgjpakmkif",
      },
    ],
    subHeading: "Window Props Plus",
    subHeadingLink:
      "https://chromewebstore.google.com/detail/window-props-plus/imepmnfbpoohiejbnbeodjlgjpakmkif",
  },
  {
    viewAll: true,
    subHeading: "View All",
    subHeadingLink: "https://aakashdinkar.in/projects/",
    projectDetailCardClassName: "project-details project-image card view-all",
  },
];

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

export const projects = () => {
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
