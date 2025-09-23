import { intersectionObserver } from "../util/intersectionObserver";
import { hydrateEmail } from "./hydrateEmail";

export const hydrateContact = () => {
  intersectionObserver('#contact', () => {
    hydrateEmail();
  });
};
