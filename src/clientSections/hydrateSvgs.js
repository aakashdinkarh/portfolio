export const svgMap = new Map();

export const svgFetch = async (src) => {
  if (svgMap.has(src)) {
    return svgMap.get(src);
  }
  try {
    const res = await fetch(src);
    const svgText = await res.text();
    svgMap.set(src, svgText);
  } catch { }
};

export const fetchSvgs = async (svgLinksObj) => {
  return await Promise.all(Object.values(svgLinksObj).map(svgFetch));
};

export const loadRightArrowIcon = (async () => {
  const rightArrowIconText = await svgFetch('https://aakashdinkarh.github.io/static_assets/images/svgs/right-arrow-icon.svg');
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

export const loadUpwardIcon = (async () => {
  const upwardIconText = await svgFetch('https://aakashdinkarh.github.io/static_assets/images/svgs/upward-icon.svg');
  const svgContainer = document.createElement('div');
  svgContainer.innerHTML = upwardIconText;
  const upwardIcon = svgContainer.querySelector('svg');

  return (placeholderSelector) => {
    document.querySelectorAll(placeholderSelector).forEach((placeholderNode) => {
      const cloneIcon = upwardIcon.cloneNode(true);
      placeholderNode.replaceWith(cloneIcon);
    });
  };
})();
