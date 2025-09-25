import { getElement } from "../../util/ui.js";

export const getDateDifferenceText = () => {
  const joiningDate = new Date("11 July 2022");
  const today = new Date();

  let years = today.getFullYear() - joiningDate.getFullYear();
  let months = today.getMonth() - joiningDate.getMonth();
  let days = today.getDate() - joiningDate.getDate();
  let hours = today.getHours() - joiningDate.getHours();
  let minutes = today.getMinutes() - joiningDate.getMinutes();
  let seconds = today.getSeconds() - joiningDate.getSeconds();

  if (seconds < 0) {
    minutes--;
    seconds += 60;
  }

  if (minutes < 0) {
    hours--;
    minutes += 60;
  }

  if (hours < 0) {
    days--;
    hours += 24;
  }

  if (days < 0) {
    months--;
    const previousMonth = today.getMonth() === 0 ? 11 : today.getMonth() - 1;
    const daysInPreviousMonth = new Date(
      today.getFullYear(),
      previousMonth + 1,
      0,
    ).getDate();
    days += daysInPreviousMonth;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  // const result = `${years}y ${months}m ${days}d | ${hours}h : ${minutes}m : ${seconds}s`;
  const result = `${years}y ${months}m ${days}d`;

  return result.trim();
};

const getExperience = (experience) => {
  const article = getElement("article");
  const experienceCard = getElement("div", "experience-card");

  const subHeading = getElement("p", "sub-heading m-flex-col", {
    content: `${experience.position} &#x2022; ${experience.company} `,
  });
  const duration = getElement("i", null, { content: experience.duration });
  subHeading.append(duration);

  const description = getElement("p", null, {
    content: experience.description,
  });

  const techSkillsSubHeading = getElement("p", "sub-heading mb-5", {
    content: "Tech-skills I honed",
  });
  const techSkills = getElement("p", "proficiencies mt-5", {
    content: experience.techSkills,
  });

  experienceCard.append(
    subHeading,
    description,
    techSkillsSubHeading,
    techSkills,
  );
  article.append(experienceCard);
  return article;
};

export const experience = (experienceList) => {
  const sectionExperience = getElement("section", "experience card", {
    id: "experience",
  });
  const overlay = getElement("div", "overlay");

  const content = getElement("div", "content text-content");

  const h2 = getElement("h2", null, { content: "Experience" });
  const experienceTime = getElement("span", null, {
    content: getDateDifferenceText(),
    id: "exp-time-calc",
  });
  h2.append(experienceTime);

  const experienceElements = experienceList.map(getExperience);

  content.append(h2, ...experienceElements);

  sectionExperience.append(overlay, content);

  return sectionExperience;
};
