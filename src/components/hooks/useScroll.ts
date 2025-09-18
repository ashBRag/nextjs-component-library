import { useCallback } from "react";

interface ScrollOptions {
  behavior?: "smooth" | "instant" | "auto";
  block?: "start" | "center" | "end" | "nearest";
  inline?: "start" | "center" | "end" | "nearest";
  offset?: number; // Additional offset in pixels
}

export const useScrollToElement = () => {
  const scrollToElement = useCallback(
    (elementId: string, options: ScrollOptions = {}) => {
      const { behavior = "smooth", block = "start", offset = 150 } = options;

      const element = document.getElementById(elementId);

      if (!element) {
        console.warn(`Element with id "${elementId}" not found`);
        return;
      }

      // Get element position
      const elementRect = element.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Calculate target position with offset
      let targetPosition = elementRect.top + scrollTop - offset;

      // Adjust based on block positioning
      if (block === "center") {
        targetPosition -= window.innerHeight / 2 - elementRect.height / 2;
      } else if (block === "end") {
        targetPosition -= window.innerHeight - elementRect.height;
      }

      // Scroll to target position
      window.scrollTo({
        top: targetPosition,
        behavior: behavior,
      });
    },
    [],
  );

  const scrollToTop = useCallback(
    (behavior: "smooth" | "instant" | "auto" = "smooth") => {
      window.scrollTo({
        top: 0,
        behavior: behavior,
      });
    },
    [],
  );

  const scrollToBottom = useCallback(
    (behavior: "smooth" | "instant" | "auto" = "smooth") => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: behavior,
      });
    },
    [],
  );

  const scrollByAmount = useCallback(
    (amount: number, behavior: "smooth" | "instant" | "auto" = "smooth") => {
      window.scrollBy({
        top: amount,
        behavior: behavior,
      });
    },
    [],
  );

  const scrollToViewportBottom = useCallback(
    (behavior: "smooth" | "instant" | "auto" = "smooth") => {
      const currentScrollY = window.pageYOffset;
      const viewportHeight = window.innerHeight;
      const bottomOfCurrentView = currentScrollY + viewportHeight;

      window.scrollTo({
        top: bottomOfCurrentView,
        behavior: behavior,
      });
    },
    [],
  );

  return {
    scrollToElement,
    scrollToTop,
    scrollToBottom,
    scrollByAmount,
    scrollToViewportBottom,
  };
};
