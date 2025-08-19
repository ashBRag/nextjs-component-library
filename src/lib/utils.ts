export function capitalizeFirstLetter(str = "") {
  if (str.length === 0) {
    return ""; // Handle empty strings
  }
  return str.charAt(0).toUpperCase() + str.slice(1)?.toLowerCase();
}

export const scrollToElement = (elementId: string, offset = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export const scrollToBottom = (gapPercent = 10) => {
  const gapPixels = (window.innerHeight * gapPercent) / 100;

  window.scrollTo({
    top: document.documentElement.scrollHeight - window.innerHeight - gapPixels,
    behavior: "smooth",
  });
};
