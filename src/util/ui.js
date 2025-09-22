/**
 * @returns {HTMLElement} - The created HTML element.
 */
export const getElement = (tag, className, { content, href, id }) => {
  const element = document.createElement(tag);

  if (className) element.className = className;
  if (id) element.id = id;

  if (content) element.innerText = content;

  if (tag === "a" && href) element.href = href;

  return element;
};

/**
 * @returns {HTMLElement<picture>} - The created HTML element.
 */
export const getImageElement = (projectImage = {}, alt, className) => {
  const pictureElement = getElement("picture");

  const sourceElement = getElement("source");
  sourceElement.type = "image/avif";
  sourceElement.srcset = projectImage.avif;

  const imageElement = getElement("img", className);
  imageElement.alt = alt;
  imageElement.src = projectImage.webp;
  imageElement.loading = "lazy";
  imageElement.decoding = "async";

  pictureElement.append(sourceElement, imageElement);

  // if (viewLiveLink) {
  //   const anchorTag = getElement("a", null, null, viewLiveLink.href);
  //   anchorTag.append(pictureElement);
  //   return anchorTag;
  // }
  return pictureElement;
};

/**
 * @returns {HTMLElement} - The selected HTML element.
 */
export const selectElement = (selector) => {
  return document.querySelector(selector);
};

/**
 * @returns {NodeListOf<HTMLElement>} - The selected HTML elements.
 */
export const selectElements = (selector) => {
  return document.querySelectorAll(selector);
};
