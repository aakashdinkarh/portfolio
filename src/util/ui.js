/**
 * @returns {HTMLElement} - The created HTML element.
 */
export const getElement = (tag, className, { content, href, id, alt, src } = {}) => {
  const element = document.createElement(tag);

  if (className) element.className = className;
  if (id) element.id = id;

  if (content) element.innerText = content;

  if (tag === "a" && href) element.href = href;

  if (tag === "img" && alt) element.alt = alt;
  if (tag === "img" && src) element.src = src;

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
