import { getDateDifferenceText } from "../sections/experience/index.js";

export const hydrateExperienceTime = () => {
  const experienceTimeElement = document.getElementById('exp-time-calc');
  experienceTimeElement.innerText = getDateDifferenceText();
};
