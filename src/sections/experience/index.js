import { getElement } from "../../util/ui.js";

const experienceList = [
  {
    company: "Meesho",
    position: "Software Engineer",
    duration: "(Oct '23 - Present)",
    description:
      "At Meesho, I focus on optimizing webpage performance to enhance user experience. My role involves collaborating with various teams to address performance bottlenecks and implement improvements. By working closely with cross-functional teams, I've contributed to streamlined processes and enhanced the overall efficiency of our web platforms.",
    techSkills:
      "ReactJS, NextJS, TypeScript, Redux, NodeJS, ExpressJS, Web Performance, SEO, Styled Components",
  },
  {
    company: "Cogoport",
    position: "Software Engineer",
    duration: "(Jul '22 - Sep '23)",
    description:
      "At Cogoport, I developed features such as the Shipment Rollover Flow, which automated container transfers, saving over 30 shipments per month. I also created a User Off-board process, improving efficiency by 60% and role-specific dashboards, boosting work efficiency by 40%. Additionally, I provided technical solutions for bugs and improved layouts for better performance.",
    techSkills: "ReactJS, NextJS, Redux, React Hook Form, Styled Components",
  },
  {
    company: "Web Student",
    position: "Web Developer",
    duration: "(Jun '21 - Aug '21)",
    description:
      "I interned as a Front-end Developer at Web Student, completing 7 projects as a Team Leader. I enhanced website designs and functionality, incorporating various animations and APIs. My leadership skills were recognized with the Best-Intern award and an appreciation certificate for the team.",
    techSkills:
      "HTML, CSS, JavaScript, Web Storage APIs, Responsive Web Designs",
  },
];

const JOINING_DATE = new Date("11 July 2022");

const getDateDifferenceText = (joiningDate, today) => {
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
      0
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
    techSkills
  );
  article.append(experienceCard);
  return article;
};

export const experience = () => {
  const sectionExperience = getElement("section", "experience card", {
    id: "experience",
  });
  const overlay = getElement("div", "overlay");

  const content = getElement("div", "content text-content");

  const h2 = getElement("h2", null, { content: "Experience" });
  const experienceTime = getElement("span", null, {
    content: getDateDifferenceText(JOINING_DATE, new Date()),
    id: "exp-time-calc",
  });
  h2.append(experienceTime);

  const experienceElements = experienceList.map(getExperience);

  content.append(h2, ...experienceElements);

  sectionExperience.append(overlay, content);

  return sectionExperience;
};
