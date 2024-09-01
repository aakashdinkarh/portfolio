// Assuming you have a video element inside .cursor-logo
const cursorLogo = document.querySelector('.skill-icon .cursor');

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
