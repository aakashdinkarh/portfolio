// function scrollItems(direction, container, listItemSelector, behavior = 'smooth') {
//     const items = container.querySelectorAll(listItemSelector);
//     const itemWidth = items[0].offsetWidth; // Width of one item

//     // Scroll the list by the width of one item
//     container.scrollBy({
//         left: direction * itemWidth,
//         // behavior,
//     });
// }
function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function smoothScroll({
	list,
	direction = 1,
	scrollAmount = 0,
	duration = 500,
	onScrollComplete = () => {},
}) {
	const startPosition = list.scrollLeft;
	const distance = direction * scrollAmount;
	const startTime = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();

	function scrollStep(currentTime) {
		const elapsed = (typeof performance !== 'undefined' && performance.now ? currentTime : Date.now()) - startTime;
		const progress = Math.min(elapsed / duration, 1); // progress from 0 to 1
		const ease = easeInOutQuad(progress); // Easing function for smooth transition

		list.scrollLeft = startPosition + distance * ease;

		if (progress < 1) {
			requestAnimationFrame(scrollStep); // Continue the animation until complete
		} else {
			onScrollComplete();
		}
	}

	requestAnimationFrame(scrollStep);
}

// Usage example:
// smoothScroll(list, 'right', 300, 1000, () => alert('done')); // Scroll 300px to the right over 1 second


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

const appendSlideIndicators = (listContainerSelector, listItemSelector, effectiveWidth, imageSlider) => {
	const listContainer = imageSlider.querySelector(listContainerSelector);
	const items = listContainer.querySelectorAll(listItemSelector);
	const numberOfItems = items.length;

	const containerWidth = getElementContentWidth(listContainer);
	const numberOfItemsVisible = Math.floor(containerWidth / effectiveWidth);
	const slideIndicators = createSlideIndicators(Math.ceil(numberOfItems / numberOfItemsVisible));

	const indicatorsContainer = document.createElement('div');
	indicatorsContainer.className = 'indicators-container';
	indicatorsContainer.append(...slideIndicators);

	imageSlider.append(indicatorsContainer);
	return slideIndicators;
};


const addScrollItemsListener = (listSelector, listItemSelector, imageSlider) => {
	const list = imageSlider.querySelector(listSelector);
	const items = list.querySelectorAll(listItemSelector);
	const item = items[0];

	const effectiveWidth = item.getBoundingClientRect().width + parseInt(getComputedStyle(item).marginRight);
	const numberOfItemsVisible = Math.floor(getElementContentWidth(list) / effectiveWidth);

	if (numberOfItemsVisible >= items.length) {
		return;
	}

	const totalSlides = Math.ceil(items.length / numberOfItemsVisible);
	let activeSlideIndex = 0;

	const slideIndicators = appendSlideIndicators(
		'.slider-list-container',
		listItemSelector,
		effectiveWidth,
		imageSlider
	);
	slideIndicators[activeSlideIndex].classList.add('active');

	const scrollHandler = (direction) => {
        let isScrolling = false;
        const onScrollComplete = () => { isScrolling = false; }
        const scrollDirection = getDirectionCalcPrefix(direction);
        const scrollAmount = effectiveWidth * numberOfItemsVisible;

        return () => {
            if (isScrolling) {
                return;
            }

            isScrolling = true;
            smoothScroll({
                scrollAmount,
                direction: scrollDirection,
                list,
                onScrollComplete 
            })

            slideIndicators[activeSlideIndex].classList.remove('active');

            if (direction === NEXT_BTN && activeSlideIndex < totalSlides - 1) {
                activeSlideIndex++;
            } else if (direction === PREV_BTN && activeSlideIndex > 0) {
                activeSlideIndex--;
            }

            slideIndicators[activeSlideIndex].classList.add('active');
        };
    }

	const prevScrollButton = createButton(PREV_BTN);
	prevScrollButton.onclick = scrollHandler(PREV_BTN);

	const nextScrollButton = createButton(NEXT_BTN);
	nextScrollButton.onclick = scrollHandler(NEXT_BTN);

	imageSlider.append(prevScrollButton, nextScrollButton);
};
