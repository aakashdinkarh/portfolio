import { getElement } from "../../util/ui";

const CONTACT_DETAILS = [
  {
    href: "tel:+917027658021",
    img: "https://aakashdinkarh.github.io/static_assets/images/svgs/mobile.svg",
    alt: "mobile/tel",
    content: "+91-7027658021",
  },
  {
    href: "mailto:aakashdinkarh@gmail.com",
    img: "https://aakashdinkarh.github.io/static_assets/images/svgs/mail.svg",
    alt: "mail",
    content: "aakashdinkarh@gmail.com",
  },
  {
    href: "https://www.instagram.com/dinkar_2103",
    img: "https://aakashdinkarh.github.io/static_assets/images/svgs/instagram.svg",
    alt: "instagram",
    content: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/aakash-dinkar-74a817212/",
    img: "https://aakashdinkarh.github.io/static_assets/images/svgs/linkedin.svg",
    alt: "linkedin",
    content: "LinkedIn",
  },
  {
    href: "https://github.com/aakashdinkarh",
    img: "https://aakashdinkarh.github.io/static_assets/images/svgs/github.svg",
    alt: "github",
    content: "GitHub",
  },
];

const FORM_FIELDS = [
  {
    tag: "input",
    type: "text",
    placeholder: "Your Name",
    name: "user_name",
    required: true,
  },
  {
    tag: "input",
    type: "email",
    placeholder: "Your Email",
    name: "user_email",
    required: true,
  },
  {
    tag: "textarea",
    placeholder: "Your Feedback/Message/Query",
    name: "user_message",
    required: true,
    cols: 30,
    rows: 5,
  },
];

const getContactItem = (contactDetail) => {
  const contactItem = getElement("li", "contact-item");
  const a = getElement("a", null, {
    href: contactDetail.href,
    content: contactDetail.content,
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
  contactItem.append(a);

  return contactItem;
};

const getTextContent = () => {
  const article = getElement("article");
  const textContent = getElement("div", "text-content");

  const h2 = getElement("h2", null, { content: "Contact Me" });

  const p = getElement("p", "sub-heading", {
    content: "For any queries, reach out using the details below:",
  });

  const div = getElement("div", "text-content");

  const contactDetails = getElement("ul", "contact-details");
  contactDetails.append(...CONTACT_DETAILS.map(getContactItem));

  div.append(contactDetails);

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

const getProfileForm = () => {
  const profileDiv = getElement("div", "profile");

  const form = getElement("form");
  form.onsubmit = () => {
    return false;
  };

  const overlay = getElement("div", "overlay form-overlay");

  const formFields = FORM_FIELDS.map(getFormField);

  const div = getElement("div", "m-justify-center");
  const submitButton = getElement("button", "styled-btn submit-btn");
  submitButton.type = "submit";
  const buttonText = getElement("span", "button-text color-black", {
    content: "Send Me",
  });

  submitButton.append(buttonText);
  div.append(submitButton);

  form.append(overlay, ...formFields, div);

  profileDiv.append(form);

  return profileDiv;
};

export const bottom = () => {
  const sectionBottom = getElement("section", "contact card", {
    id: "contact",
  });
  const fireworksCanvas = getElement("canvas", "overlay", {
    id: "fireworksFooter",
  });

  const content = getElement("div", "content");

  const textContent = getTextContent();
  const profileForm = getProfileForm();

  content.append(textContent, profileForm);

  sectionBottom.append(fireworksCanvas, content);

  return sectionBottom;
};
