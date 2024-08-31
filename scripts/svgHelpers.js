const getSvg = (() => {
    const svgMap = new Map();

    return async (src) => {
        if (svgMap.has(src)) {
            return svgMap.get(src);
        }
        try {
            const res = await fetch(src);
            const svgText = res.text();
            svgMap.set(src, svgText);
            return svgText;
        } catch {
            return null;
        }
    }
})();

const loadRightArrowIcon = (async () => {
    const rightArrowIconText = await getSvg('https://aakashdinkarh.github.io/static_assets/images/portfolio/svgs/right-arrow-icon.svg');
    const svgContainer = document.createElement('div');
    svgContainer.innerHTML = rightArrowIconText;
    const rightArrowIcon = svgContainer.querySelector('svg');

    return (placeholderSelector) => {
        document.querySelectorAll(placeholderSelector).forEach((placeholderNode) => {
            const cloneIcon = rightArrowIcon.cloneNode(true);
            placeholderNode.replaceWith(cloneIcon);
        });
    };
})();
