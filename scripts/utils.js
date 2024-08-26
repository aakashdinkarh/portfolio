// Load the content when content is about to be visible or visible

const intersectionObserver = (elementSelector, callback) => {
    const element = document.querySelector(elementSelector);

    if (!element || !callback) return;

    const observerCallback = (entries) => {
        if (entries[0].isIntersecting) {
            callback();
            observer.disconnect(); // Stop observing after callback is happened
        }
    };

    const observerOptions = { rootMargin: '100px' };

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

