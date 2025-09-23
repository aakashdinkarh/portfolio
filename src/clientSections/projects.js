import { intersectionObserver } from "../util/intersectionObserver";
import { throttleDebounce } from "../util/throttleDebounce";

const isDivCenteredVertically = (div) => {
  const rect = div.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  const viewportCenter = viewportHeight / 2;
  const divCenter = rect.top + rect.height / 2;

  // Check if the div center is approximately equal to the viewport center
  const threshold = 125; // Allow some small tolerance for "centered"
  return Math.abs(viewportCenter - divCenter) <= threshold;
};

const scrollListener = throttleDebounce(function (project) {
  if (isDivCenteredVertically(project)) project.classList.add('active');
  else project.classList.remove('active');
});

export const hydrateProjects = () => {
  intersectionObserver('#project', () => {
    const projectObservers = [
      ...document.querySelectorAll('.project-details-container .project-details:not(.view-all)'),
    ].map((project) => () => scrollListener(project));

    document.querySelectorAll('.project-details-container .project-details:not(.view-all)').forEach((project, index) => {
      intersectionObserver(
        project,
        () => {
          const IS_MOBILE = (() => {
            const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
            try {
              return regex.test(navigator.userAgent);
            } catch {
              return false;
            }
          })();

          if (IS_MOBILE) {
            window.addEventListener('scroll', projectObservers[index]);
          }
        },
        {
          keepObserver: true,
          rootMargin: '0px',
          ifNotIntersecting: () => {
            window.removeEventListener('scroll', projectObservers[index]);
          },
        },
      );
    });
  });
};
