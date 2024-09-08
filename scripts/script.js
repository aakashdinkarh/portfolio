const IS_MOBILE = (() => {
	const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
	try {
		return regex.test(navigator.userAgent);
	} catch {
		return false;
	}
})();

document.querySelectorAll('.nav-links a').forEach((anchor) => {
	anchor.addEventListener('click', function(event) {
		event.preventDefault();
		window.location.hash = anchor.hash;
		const offsetFlag = anchor.dataset.scrollOffset;

		if (offsetFlag) go(anchor.hash, true);
		else go(anchor.hash);
	})
});

function go(selector = '', offsetFlag = false) {
	if (selector === '') {
		window.scrollTo(0, 0);
		return;
	}
	const elem = document.querySelector(selector);
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

window.onload = () => {
	const hash = window.location.hash;
	if (hash) {
		const anchor = document.querySelector(`.nav-links a[href="${hash}"]`);
		window.location.hash = anchor.hash;
		const offsetFlag = anchor.dataset.scrollOffset;

		if (offsetFlag) go(anchor.hash, true);
		else go(anchor.hash);
	}
}
