export const intersectionObserver = (elOrElmSelector, callback, options = {}) => {
  const element = (elOrElmSelector && typeof elOrElmSelector !== 'string') ? elOrElmSelector : document.querySelector(elOrElmSelector);

  const { keepObserver = false, rootMargin = '400px', ifNotIntersecting } = options;

  if (!element || !callback) return;

  const observerCallback = (entries) => {
    if (entries[0].isIntersecting) {
      callback();
      if (!keepObserver) {
        observer.disconnect(); // Stop observing after callback is happened
      }
    } else {
      ifNotIntersecting && ifNotIntersecting();
    }
  };

  const observerOptions = { rootMargin, ...(keepObserver && { threshold: [1.0] }) };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(element);
};
