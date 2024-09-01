function go(loc = '', offsetFlag = false) {
	if (loc === '') {
		window.scrollTo(0, 0);
		return;
	}
	const elem = document.getElementById(loc);
	const offset = 20;

	window.scrollTo(0, window.scrollY + elem.getBoundingClientRect().top - 48 - (offsetFlag ? offset : 0));
}

(function updateCopyright() {
	const copyrightElement = document.getElementsByClassName('copyright')[0];
	copyrightElement.children[1].innerText = `| ${new Date().getFullYear()}`;
})();

const topBtn = document.getElementById('top-btn');
window.onscroll = function () {
	if (document.documentElement.scrollTop < 61) {
		topBtn.classList.remove('show');
	} else {
		topBtn.classList.add('show');
	}
};

const hamburgerMenuIcon = document.querySelector('.hamburger-menu-icon');
const mNavBar = document.querySelector('#mNavBar');
const mNavBarOverlay = document.querySelector('.m-nav-bar-overlay');
hamburgerMenuIcon.onclick = () => {
	mNavBar.classList.add('show');
	mNavBarOverlay.classList.add('show');
};

const navbarCloseIcon = document.querySelector('#navbarCloseIcon');
navbarCloseIcon.onclick = mNavBarOverlay.onclick = () => {
	mNavBar.classList.remove('show');
	mNavBarOverlay.classList.remove('show');
};
