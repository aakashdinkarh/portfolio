export const go = (selector, offsetFlag = false) => {
  if (selector === '') {
    window.scrollTo(0, 0);
    return;
  }
  const elem = document.querySelector(selector);
  const offset = 20;

  window.scrollTo(
    0,
    window.scrollY +
    elem.getBoundingClientRect().top -
    48 -
    (offsetFlag ? offset : 0),
  );
};
