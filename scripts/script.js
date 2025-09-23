const IS_MOBILE = (() => {
	const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
	try {
		return regex.test(navigator.userAgent);
	} catch {
		return false;
	}
})();

// document.querySelectorAll('.nav-links a').forEach((anchor) => {
//   anchor.addEventListener('click', function (event) {
//     event.preventDefault();
//     window.location.hash = anchor.hash;
//     const offsetFlag = anchor.dataset.scrollOffset;

//     if (offsetFlag) go(anchor.hash, true);
//     else go(anchor.hash);
//   });
// });

// function go(selector = '', offsetFlag = false) {
//   if (selector === '') {
//     window.scrollTo(0, 0);
//     return;
//   }
//   const elem = document.querySelector(selector);
//   const offset = 20;

//   window.scrollTo(0, window.scrollY + elem.getBoundingClientRect().top - 48 - (offsetFlag ? offset : 0));
// }

// (function updateCopyright() {
//   const copyrightElement = document.getElementsByClassName('copyright')[0];
//   copyrightElement.children[1].innerText = `| ${new Date().getFullYear()}`;
// })();

// const topBtn = document.getElementById('top-btn');
// window.onscroll = function () {
//   if (document.documentElement.scrollTop < 61) {
//     topBtn.classList.remove('show');
//   } else {
//     topBtn.classList.add('show');
//   }
// };


// (() => {
//   const hamburgerMenuIcon = document.querySelector('.hamburger-menu-icon');
//   const mNavBar = document.querySelector('#mNavBar');
//   const mNavBarOverlay = document.querySelector('.m-nav-bar-overlay');
//   const navbarCloseIcon = document.querySelector('#navbarCloseIcon');
//   const mNavBarLinks = mNavBar.querySelectorAll('.nav-links > a');

//   function show_mNavBar() {
//     mNavBar.classList.add('show');
//     mNavBarOverlay.classList.add('show');
//   };

//   function close_mNavBar() {
//     mNavBar.classList.remove('show');
//     mNavBarOverlay.classList.remove('show');
//   };

//   hamburgerMenuIcon.onclick = show_mNavBar;

//   mNavBarLinks.forEach((navLink) => { navLink.onclick = close_mNavBar; });
//   navbarCloseIcon.onclick = mNavBarOverlay.onclick = close_mNavBar;
// })();


// window.onload = () => {
//   const hash = window.location.hash;
//   if (hash) {
//     const anchor = document.querySelector(`.nav-links a[href="${hash}"]`);
//     window.location.hash = anchor.hash;
//     const offsetFlag = anchor.dataset.scrollOffset;

//     if (offsetFlag) go(anchor.hash, true);
//     else go(anchor.hash);
//   }
// };
