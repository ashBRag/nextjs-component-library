import "../chunk-FJBZBVPE.mjs";
import { useCallback } from "react";
const useScrollToElement = () => {
  const scrollToElement = useCallback(
    (elementId, options = {}) => {
      const { behavior = "smooth", block = "start", offset = 150 } = options;
      const element = document.getElementById(elementId);
      if (!element) {
        console.warn(`Element with id "${elementId}" not found`);
        return;
      }
      const elementRect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let targetPosition = elementRect.top + scrollTop - offset;
      if (block === "center") {
        targetPosition -= window.innerHeight / 2 - elementRect.height / 2;
      } else if (block === "end") {
        targetPosition -= window.innerHeight - elementRect.height;
      }
      window.scrollTo({
        top: targetPosition,
        behavior
      });
    },
    []
  );
  const scrollToTop = useCallback(
    (behavior = "smooth") => {
      window.scrollTo({
        top: 0,
        behavior
      });
    },
    []
  );
  const scrollToBottom = useCallback(
    (behavior = "smooth") => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior
      });
    },
    []
  );
  const scrollByAmount = useCallback(
    (amount, behavior = "smooth") => {
      window.scrollBy({
        top: amount,
        behavior
      });
    },
    []
  );
  const scrollToViewportBottom = useCallback(
    (behavior = "smooth") => {
      const currentScrollY = window.pageYOffset;
      const viewportHeight = window.innerHeight;
      const bottomOfCurrentView = currentScrollY + viewportHeight;
      window.scrollTo({
        top: bottomOfCurrentView,
        behavior
      });
    },
    []
  );
  return {
    scrollToElement,
    scrollToTop,
    scrollToBottom,
    scrollByAmount,
    scrollToViewportBottom
  };
};
export {
  useScrollToElement
};
//# sourceMappingURL=useScroll.mjs.map