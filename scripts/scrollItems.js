// function scrollItems(direction, container, itemSelector, behavior = 'smooth') {
//     const items = container.querySelectorAll(itemSelector);
//     const itemWidth = items[0].offsetWidth; // Width of one item

//     // Scroll the list by the width of one item
//     container.scrollBy({
//         left: direction * itemWidth,
//         // behavior,
//     });
// }

function getElementContentWidth(element) {
	const { width } = element.getBoundingClientRect();
	const { paddingLeft, paddingRight } = window.getComputedStyle(element);
	return width - parseFloat(paddingLeft) - parseFloat(paddingRight);
}

const PREV_BTN = 'prev-btn';
const NEXT_BTN = 'next-btn';
const getDirectionCalcPrefix = (direction) => (direction === PREV_BTN ? -1 : 1);

const createButton = (direction) => {
	const button = document.createElement('button');
	button.className = direction;
	button.innerHTML = direction === PREV_BTN ? '&#10094;' : '&#10095;';
	return button;
};

const createSlideIndicators = (count) => {
	return Array.from({ length: count }, () => {
		const span = document.createElement('span');
		span.className = 'slide-indicator';
		return span;
	});
};

const appendSlideIndicators = (containerSelector, itemSelector, effectiveWidth, appendToSelector) => {
	const container = document.querySelector(containerSelector);
	const items = container.querySelectorAll(itemSelector);
	const numberOfItems = items.length;

	const containerWidth = getElementContentWidth(container);
	const numberOfItemsVisible = Math.floor(containerWidth / effectiveWidth);
	const slideIndicators = createSlideIndicators(Math.ceil(numberOfItems / numberOfItemsVisible));

	const indicatorsContainer = document.createElement('div');
	indicatorsContainer.className = 'indicators-container';
	indicatorsContainer.append(...slideIndicators);

	document.querySelector(appendToSelector).append(indicatorsContainer);
	return slideIndicators;
};

const addScrollItemsListener = (containerSelector, itemSelector, appendToSelector) => {
	const container = document.querySelector(containerSelector);
	const items = container.querySelectorAll(itemSelector);
	const item = items[0];

	const effectiveWidth = item.getBoundingClientRect().width + parseInt(getComputedStyle(item).marginRight);
	const numberOfItemsVisible = Math.floor(getElementContentWidth(container) / effectiveWidth);

	const totalSlides = Math.ceil(items.length / numberOfItemsVisible);
	let activeSlideIndex = 0;

	const slideIndicators = appendSlideIndicators(
		'.slider-list-container',
		itemSelector,
		effectiveWidth,
		appendToSelector
	);
	slideIndicators[activeSlideIndex].classList.add('active');

	const scrollHandler = (direction) => {
		const scrollAmount = effectiveWidth * numberOfItemsVisible;
		container.scrollBy({ left: getDirectionCalcPrefix(direction) * scrollAmount, behavior: 'smooth' });

		slideIndicators[activeSlideIndex].classList.remove('active');

		if (direction === NEXT_BTN && activeSlideIndex < totalSlides - 1) {
			activeSlideIndex++;
		} else if (direction === PREV_BTN && activeSlideIndex > 0) {
			activeSlideIndex--;
		}

		slideIndicators[activeSlideIndex].classList.add('active');
	};

	const prevScrollButton = createButton(PREV_BTN);
	prevScrollButton.onclick = () => scrollHandler(PREV_BTN);

	const nextScrollButton = createButton(NEXT_BTN);
	nextScrollButton.onclick = () => scrollHandler(NEXT_BTN);

	document.querySelector(appendToSelector).append(prevScrollButton, nextScrollButton);
};
