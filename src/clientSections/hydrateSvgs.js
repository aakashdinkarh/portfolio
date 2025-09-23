const svgMap = new Map();

const svgFetch = async (svgKey, src) => {
  if (svgMap.has(svgKey)) {
    return svgMap.get(svgKey);
  }
  try {
    const res = await fetch(src);
    const svgText = await res.text();
    svgMap.set(svgKey, svgText);
  } catch { }
};

export const fetchSvgs = async (svgLinksObj) => {
  return await Promise.all(Object.entries(svgLinksObj).map(([svgKey, svgLink]) => svgFetch(svgKey, svgLink)));
};

export const hydrateSvgs = (svgLinksObj) => {
  Object.keys(svgLinksObj).forEach((svgKey) => {
    const iconText = svgMap[svgKey];
    if (!iconText) return;

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = iconText.trim();
    const svgElement = tempDiv.firstElementChild;
    const iconPlaceholders = document.querySelectorAll(`[class*="${svgKey}-placeholder"]`);

    iconPlaceholders.forEach((placeholderNode) => {
      placeholderNode.replaceWith(svgElement.cloneNode(true));
    });
  })
}
