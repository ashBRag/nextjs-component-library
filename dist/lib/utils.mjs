import "../chunk-FJBZBVPE.mjs";
function capitalizeFirstLetter(str = "") {
  var _a;
  if (str.length === 0) {
    return "";
  }
  return str.charAt(0).toUpperCase() + ((_a = str.slice(1)) == null ? void 0 : _a.toLowerCase());
}
const scrollToElement = (elementId, offset = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};
const scrollToBottom = (gapPercent = 10) => {
  const gapPixels = window.innerHeight * gapPercent / 100;
  window.scrollTo({
    top: document.documentElement.scrollHeight - window.innerHeight - gapPixels,
    behavior: "smooth"
  });
};
export {
  capitalizeFirstLetter,
  scrollToBottom,
  scrollToElement
};
//# sourceMappingURL=utils.mjs.map