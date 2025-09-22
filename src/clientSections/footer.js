export const hydrateCopyright = () => {
  (function updateCopyright() {
    const copyrightElement = document.getElementsByClassName('copyright')[0];
    copyrightElement.children[1].innerText = `| ${new Date().getFullYear()}`;
  })();
};

export const hydrateGoToTopButton = () => {
  const topBtn = document.getElementById('top-btn');
  window.onscroll = function () {
    if (document.documentElement.scrollTop < 61) {
      topBtn.classList.remove('show');
    } else {
      topBtn.classList.add('show');
    }
  };
};
