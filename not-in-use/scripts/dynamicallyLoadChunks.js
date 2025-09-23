// const loadAndReplaceRightArrowIcon = async (selector) => {
//   try {
//     const replaceSvg = await loadRightArrowIcon;
//     replaceSvg(selector);
//   } catch (error) {
//     console.error('Failed to load the right arrow icon', 'selector: ', selector, 'error: ', error);
//   }
// };
// const loadAndReplaceUpwardIcon = async (selector) => {
//   try {
//     const replaceSvg = await loadUpwardIcon;
//     replaceSvg(selector);
//   } catch (error) {
//     console.error('Failed to load the right arrow icon', 'selector: ', selector, 'error: ', error);
//   }
// };

// loadAndReplaceRightArrowIcon('.right-arrow-icon-placeholder-home');
// loadAndReplaceUpwardIcon('.upward-icon-placeholder');

// intersectionObserver('#about', () => {
//   loadJs('scripts/experienceCalc.js');
// });

// intersectionObserver('#skills', () => {
//   loadAndReplaceRightArrowIcon('.right-arrow-icon-placeholder-skill');
// }, {
//   rootMargin: '0px',
// });

// function isDivCenteredVertically(div) {
//   const rect = div.getBoundingClientRect();
//   const viewportHeight = window.innerHeight;

//   const viewportCenter = viewportHeight / 2;
//   const divCenter = rect.top + rect.height / 2;

//   // Check if the div center is approximately equal to the viewport center
//   const threshold = 125; // Allow some small tolerance for "centered"
//   return Math.abs(viewportCenter - divCenter) <= threshold;
// }
// const scrollListener = throttleDebounce(function (project) {
//   if (isDivCenteredVertically(project)) project.classList.add('active');
//   else project.classList.remove('active');
// });

// intersectionObserver('#project', () => {
//   // loadAndReplaceRightArrowIcon('.right-arrow-icon-placeholder-project');
//   const projectObservers = [
//     ...document.querySelectorAll('.project-details-container .project-details:not(.view-all)'),
//   ].map((project) => () => scrollListener(project));

//   document.querySelectorAll('.project-details-container .project-details:not(.view-all)').forEach((project, index) => {
//     intersectionObserver(
//       project,
//       () => {
//         if (IS_MOBILE) {
//           window.addEventListener('scroll', projectObservers[index]);
//         }
//       },
//       {
//         keepObserver: true,
//         rootMargin: '0px',
//         ifNotIntersecting: () => {
//           window.removeEventListener('scroll', projectObservers[index]);
//         },
//       },
//     );
//   });
// });

// intersectionObserver('#contact', () => {
//   loadJs('scripts/emailjs.js');
// });
