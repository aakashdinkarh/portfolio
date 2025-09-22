import { hydrateNavbar } from "./clientSections/navbar.js";
import { hydrateCopyright, hydrateGoToTopButton } from "./clientSections/footer.js";
import { go } from "./util/navUtil.js";

export const initApp = () => {
  window.onload = () => {
    const hash = window.location.hash;
    if (hash) {
      const anchor = document.querySelector(`.nav-links a[href="${hash}"]`);
      window.location.hash = anchor.hash;
      const offsetFlag = anchor.dataset.scrollOffset;

      if (offsetFlag) go(anchor.hash, true);
      else go(anchor.hash);
    }
  };

  hydrateNavbar();

  hydrateCopyright();

  hydrateGoToTopButton();
};

initApp();

