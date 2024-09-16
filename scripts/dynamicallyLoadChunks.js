const loadAndReplaceRightArrowIcon = async (selector) => {
	try {
		const replaceSvg = await loadRightArrowIcon;
		replaceSvg(selector);
	} catch (error) {
		console.error('Failed to load the right arrow icon', 'selector: ', selector, 'error: ', error);
	}
};
const loadAndReplaceUpwardIcon = async (selector) => {
	try {
		const replaceSvg = await loadUpwardIcon;
		replaceSvg(selector);
	} catch (error) {
		console.error('Failed to load the right arrow icon', 'selector: ', selector, 'error: ', error);
	}
};

loadAndReplaceRightArrowIcon('.right-arrow-icon-placeholder-home');
loadAndReplaceUpwardIcon('.upward-icon-placeholder');

intersectionObserver('#about', () => {
	loadJs('scripts/experienceCalc.js');
});

intersectionObserver('#project', () => {
	loadAndReplaceRightArrowIcon('.right-arrow-icon-placeholder-project');
});

intersectionObserver('#contact', () => {
	loadJs('scripts/emailjs.js');

	const footerCanvas = document.querySelector('canvas#fireworksFooter');
	createFooterFirework = getFirework(footerCanvas);
});
