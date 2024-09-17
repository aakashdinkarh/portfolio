// Load the content when content is about to be visible or visible

const intersectionObserver = (elementSelector, callback, options = {}) => {
    const element = (elementSelector && typeof elementSelector !== 'string') ? elementSelector : document.querySelector(elementSelector);

    const { keepObserver = false, rootMargin = '400px', ifNotIntersecting } = options;

    if (!element || !callback) return;

    const observerCallback = (entries) => {
        if (entries[0].isIntersecting) {
            callback();
            if (!keepObserver) {
                observer.disconnect(); // Stop observing after callback is happened
            }
        } else {
            ifNotIntersecting && ifNotIntersecting();
        }
    };

    const observerOptions = { rootMargin, ...(keepObserver && { threshold: [1.0] }) };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(element);
}

const loadedSourceMapping = {};

const loadJs = (src, successCallback, errorCallback) => {
    if (!src) return;

    if (loadedSourceMapping[src]) {
        if(successCallback) successCallback();
        return;
    }

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.onload = () => {
        loadedSourceMapping[src] = true;
        if(successCallback) successCallback();
    }
    script.onerror = () => {
        loadedSourceMapping[src] = false;
        console.error('Failed to load the script ::', src);
        if (errorCallback) errorCallback();
        script.remove();
    }
    document.body.appendChild(script);
}

/**
 * Creates a function that combines throttling and debouncing behavior.
 * 
 * The returned function will invoke the provided function at most once
 * per `throttleInterval`, and if it stops receiving calls, it will execute
 * the function one last time with the latest arguments after the `debounceInterval`.
 * 
 * @param {Function} fn - The function to be throttled and debounced.
 * @param {number} [throttleInterval=800] - The minimum time (in milliseconds) between consecutive calls.
 * @param {number} [debounceInterval=500] - The time (in milliseconds) to wait after the last call before invoking the function.
 * @returns {Function} A new function that combines throttling and debouncing.
 */
function throttleDebounce(fn, throttleInterval = 100, debounceInterval = 100) {
	let lastCallTime = 0;
	let timeoutId = null;
	let lastArgs = null;

	function invokeFn() {
		fn(...lastArgs);
		lastCallTime = Date.now();
	}

	return function throttledDebouncedFn(...args) {
		lastArgs = args;
		const now = Date.now();

		if (now - lastCallTime >= throttleInterval) {
			// If it's time to throttle, invoke the function and reset the timer
			invokeFn();
			clearTimeout(timeoutId);
		} else {
			// If not, set a debounce timeout
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
			timeoutId = setTimeout(() => {
				invokeFn();
			}, debounceInterval);
		}
	};
}
