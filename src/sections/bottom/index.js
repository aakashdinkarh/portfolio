import { getElement } from "../../util/ui.js";

const getContactItem = (contactDetail) => {
  const contactItem = getElement("li", "contact-item");
  const a = getElement("a", contactDetail.className, {
    href: contactDetail.href,
  });
  a.target = "_blank";

  const img = getElement("img", null, {
    src: contactDetail.img,
    alt: contactDetail.alt,
  });
  img.loading = "lazy";
  img.decoding = "async";
  img.width = "20px";

  a.append(img);
  a.append(contactDetail.content);
  contactItem.append(a);

  return contactItem;
};

const getTextContent = (contactDetails) => {
  const article = getElement("article");
  const textContent = getElement("div", "text-content");

  const h2 = getElement("h2", null, { content: "Contact Me" });

  const p = getElement("p", "sub-heading", {
    content: "For any queries, reach out using the details below:",
  });

  const div = getElement("div", "text-content");

  const contactDetailsElement = getElement("ul", "contact-details");
  contactDetailsElement.append(...contactDetails.map(getContactItem));

  div.append(contactDetailsElement);

  textContent.append(h2, p, div);
  article.append(textContent);

  return article;
};

const getFormField = (formField) => {
  const field = getElement(formField.tag);
  field.type = formField.type;
  field.placeholder = formField.placeholder;
  field.name = formField.name;
  field.required = formField.required;
  field.cols = formField.cols;
  field.rows = formField.rows;
  return field;
};

const getProfileForm = (formFields) => {
  const profileDiv = getElement("div", "profile");

  const form = getElement("form");
  form.onsubmit = () => {
    return false;
  };

  const overlay = getElement("div", "overlay form-overlay");

  const formFieldsElements = formFields.map(getFormField);

  const div = getElement("div", "m-justify-center");
  const submitButton = getElement("button", "styled-btn submit-btn");
  submitButton.type = "submit";
  const buttonText = getElement("span", "button-text color-black", {
    content: "Send Me",
  });

  submitButton.append(buttonText);
  div.append(submitButton);

  form.append(overlay, ...formFieldsElements, div);

  profileDiv.append(form);

  return profileDiv;
};

export const bottom = (contactDetails, formFields) => {
  const sectionBottom = getElement("section", "contact card", {
    id: "contact",
  });
  const fireworksCanvas = getElement("canvas", "overlay", {
    id: "fireworksFooter",
  });

  const content = getElement("div", "content");

  const textContent = getTextContent(contactDetails);
  const profileForm = getProfileForm(formFields);

  content.append(textContent, profileForm);

  sectionBottom.append(fireworksCanvas, content);

  return sectionBottom;
};
