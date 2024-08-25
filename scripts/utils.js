// Load the content when content is about to be visible or visible

const intersectionObserver = (elementSelector, callback) => {
    const element = document.querySelector(elementSelector);

    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                callback();
                observer.disconnect(); // Stop observing after callback is happened
            }
        });
    });
}

const loadJs = (src, callback) => {
    if (!src) return;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.onload = () => {
        if(callback) callback();
    }
    script.onerror = () => {
        console.error('Failed to load the script', src)
        script.remove();
    }
    document.body.appendChild(script);
}
