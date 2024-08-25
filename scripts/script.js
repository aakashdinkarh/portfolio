function go(loc = '', offsetFlag = false) {
	if (loc === '') {
		window.scrollTo(0, 0);
		return;
	}
	const elem = document.getElementById(loc);
  const offset = 20;

	window.scrollTo(0, window.scrollY + elem.getBoundingClientRect().top - 60.6 - (offsetFlag ? offset : 0));
}

(function updateCopyright() {
	const copyrightElement = document.getElementsByClassName('copyright')[0];
	copyrightElement.children[1].innerText = `| ${new Date().getFullYear()}`;
})();

window.onscroll = function () {
	let topBtn = document.getElementById('top-btn');
	if (document.documentElement.scrollTop < 61) {
		topBtn.style.display = 'none';
	} else {
		topBtn.style.display = 'block';
	}
};

const hamburgerMenuIcon = document.querySelector('.hamburger-menu-icon');
const mNavBar = document.querySelector('#mNavBar');
hamburgerMenuIcon.onclick = () => {
  mNavBar.classList.add('show');
}
const navbarCloseIcon = document.querySelector('#navbarCloseIcon');
navbarCloseIcon.onclick = () => {
  mNavBar.classList.remove('show');
}

// Assuming you have a video element inside .cursor-logo
const cursorLogo = document.querySelector('.skills-2 .cursor');

const video = cursorLogo.querySelector('video');
let isHovering = false; // Track hover state

cursorLogo.addEventListener('mouseenter', () => {
	if (!video.paused) return;

	isHovering = true; // Set hovering state
	video.currentTime = 0; // Reset video to start
	video.play(); // Play video on hover
});

cursorLogo.addEventListener('mouseleave', () => {
	isHovering = false; // Reset hovering state
	// Pause video when not hovering
	// video.pause();
});

video.addEventListener('ended', () => {
	if (isHovering) {
		video.currentTime = 0; // Reset video to start
		video.play(); // Play again if still hovering
	}
});
