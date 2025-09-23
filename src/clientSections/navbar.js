import { go } from "../util/navUtil.js";

export const hydrateNavbar = () => {
  document.querySelectorAll('.nav-links a').forEach((anchor) => {
    anchor.addEventListener('click', function (event) {
      event.preventDefault();
      window.location.hash = anchor.hash;
      const offsetFlag = anchor.dataset.scrollOffset;

      if (offsetFlag) go(anchor.hash, true);
      else go(anchor.hash);
    });
  });

  const hamburgerMenuIcon = document.querySelector('.hamburger-menu-icon');
  const mNavBar = document.querySelector('#mNavBar');
  const mNavBarOverlay = document.querySelector('.m-nav-bar-overlay');
  const navbarCloseIcon = document.querySelector('#navbarCloseIcon');
  const mNavBarLinks = mNavBar.querySelectorAll('.nav-links > a');

  const show_mNavBar = () => {
    mNavBar.classList.add('show');
    mNavBarOverlay.classList.add('show');
  };

  const close_mNavBar = () => {
    mNavBar.classList.remove('show');
    mNavBarOverlay.classList.remove('show');
  };

  hamburgerMenuIcon.onclick = show_mNavBar;

  mNavBarLinks.forEach((navLink) => { navLink.onclick = close_mNavBar; });
  navbarCloseIcon.onclick = mNavBarOverlay.onclick = close_mNavBar;
};

export const hydrateKnowMoreAboutMeButton = () => {
  const knowMoreAboutMeButton = document.querySelector('.know-more-about-me');
  knowMoreAboutMeButton.onclick = () => { go('#about', true); };
};
