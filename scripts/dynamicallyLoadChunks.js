const loadAndReplaceRightArrowIcon = async (selector) => {
	try {
		const replaceSvg = await loadRightArrowIcon;
		replaceSvg(selector);
	} catch (error) {
		console.error('Failed to load the right arrow icon', 'selector: ', selector, 'error: ', error);
	}
};

loadAndReplaceRightArrowIcon('.right-arrow-icon-placeholder-home');

intersectionObserver('#about', () => {
	loadJs('scripts/experienceCalc.js');
});

intersectionObserver('#skills', () => {
	loadJs('scripts/scrollItems.js', () => {
		addScrollItemsListener('.skill-list-1', '.skill.card', '.skills-1');
		addScrollItemsListener('.skill-list-2', '.skill.card', '.skills-2');
	});

	loadJs('scripts/cursorLogo.js');
});

intersectionObserver('#project', () => {
	loadAndReplaceRightArrowIcon('.right-arrow-icon-placeholder-project');
	loadJs('scripts/scrollItems.js', () => {
		addScrollItemsListener('.project-image-list-1', '.project-image.card', '.project-1');
		addScrollItemsListener('.project-image-list-2', '.project-image.card', '.project-2');
		addScrollItemsListener('.project-image-list-3', '.project-image.card', '.project-3');
		addScrollItemsListener('.project-image-list-4', '.project-image.card', '.project-4');
		addScrollItemsListener('.project-image-list-5', '.project-image.card', '.project-5');
		addScrollItemsListener('.project-image-list-others', '.project-image.card', '.project-others');
	});
});

intersectionObserver('#contact', () => {
	loadJs('scripts/emailjs.js');

	const footerCanvas = document.querySelector('canvas#fireworksFooter');
	createFooterFirework = getFirework(footerCanvas);
});
