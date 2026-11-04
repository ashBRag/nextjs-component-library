import { useCallback } from "react";
export const useScrollToElement = () => {
    const scrollToElement = useCallback((elementId, options = {}) => {
        const { behavior = "smooth", block = "start", offset = 150 } = options;
        const element = document.getElementById(elementId);
        if (!element) {
            console.warn(`Element with id "${elementId}" not found`);
            return;
        }
        // Get element position
        const elementRect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        // Calculate target position with offset
        let targetPosition = elementRect.top + scrollTop - offset;
        // Adjust based on block positioning
        if (block === "center") {
            targetPosition -= window.innerHeight / 2 - elementRect.height / 2;
        }
        else if (block === "end") {
            targetPosition -= window.innerHeight - elementRect.height;
        }
        // Scroll to target position
        window.scrollTo({
            top: targetPosition,
            behavior: behavior,
        });
    }, []);
    const scrollToTop = useCallback((behavior = "smooth") => {
        window.scrollTo({
            top: 0,
            behavior: behavior,
        });
    }, []);
    const scrollToBottom = useCallback((behavior = "smooth") => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: behavior,
        });
    }, []);
    const scrollByAmount = useCallback((amount, behavior = "smooth") => {
        window.scrollBy({
            top: amount,
            behavior: behavior,
        });
    }, []);
    const scrollToViewportBottom = useCallback((behavior = "smooth") => {
        const currentScrollY = window.pageYOffset;
        const viewportHeight = window.innerHeight;
        const bottomOfCurrentView = currentScrollY + viewportHeight;
        window.scrollTo({
            top: bottomOfCurrentView,
            behavior: behavior,
        });
    }, []);
    return {
        scrollToElement,
        scrollToTop,
        scrollToBottom,
        scrollByAmount,
        scrollToViewportBottom,
    };
};
//# sourceMappingURL=useScroll.js.map