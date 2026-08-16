interface ScrollOptions {
    behavior?: "smooth" | "instant" | "auto";
    block?: "start" | "center" | "end" | "nearest";
    inline?: "start" | "center" | "end" | "nearest";
    offset?: number;
}
declare const useScrollToElement: () => {
    scrollToElement: (elementId: string, options?: ScrollOptions) => void;
    scrollToTop: (behavior?: "smooth" | "instant" | "auto") => void;
    scrollToBottom: (behavior?: "smooth" | "instant" | "auto") => void;
    scrollByAmount: (amount: number, behavior?: "smooth" | "instant" | "auto") => void;
    scrollToViewportBottom: (behavior?: "smooth" | "instant" | "auto") => void;
};

export { useScrollToElement };
