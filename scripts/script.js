function go(loc = '') {
	if (loc === '') {
		window.scrollTo(0, 0);
		return;
	}
	let elem = document.getElementById(loc);
	window.scrollTo(0, window.pageYOffset + elem.getBoundingClientRect().top - 60.6);
}

function show_hide(a) {
	let element = document.getElementById(a);
	if (this.innerText === 'Show more') {
		$(element).show(500);
		this.innerHTML = 'Show less';
	} else {
		$(element).hide(500);
		this.innerHTML = 'Show more';
	}
}

(function updateCopyright() {
	const copyrightElement = document.getElementsByClassName('copyright')[0];
	copyrightElement.children[1].innerText = `| ${new Date().getFullYear()}`;
})();

window.onscroll = function () {
	let topbtn = document.getElementById('top-btn');
	if (document.documentElement.scrollTop < 71) {
		topbtn.style.display = 'none';
	} else {
		topbtn.style.display = 'block';
	}
};

function barMenuClick() {
	let navbar = document.querySelector('.nav .links');
	navbar.style.width = '200px';
}
function closeMenuClick() {
	let navbar = document.querySelector('.nav .links');
	navbar.style.width = '0';
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
