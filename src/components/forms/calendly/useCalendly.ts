import { useState, useEffect } from "react";

export const useCalendly = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load Calendly script if not already loaded
    if (
      !window.Calendly &&
      !document.querySelector('script[src*="calendly"]')
    ) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => setIsLoaded(true);
      document.head.appendChild(script);

      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    } else if (window.Calendly) {
      setIsLoaded(true);
    }
  }, []);

  const openPopup = (url: string) => {
    if (window.Calendly) {
      // Clean up any existing popups
      const existingPopups = document.querySelectorAll(
        ".calendly-popup-wrapper, .calendly-overlay",
      );
      existingPopups.forEach((popup) => popup.remove());

      setTimeout(() => {
        window.Calendly?.initPopupWidget({ url });
      }, 100);
    }
  };

  const closePopup = () => {
    if (window.Calendly && window.Calendly.closePopupWidget) {
      window.Calendly.closePopupWidget();
    }
  };

  return {
    isLoaded,
    openPopup,
    closePopup,
  };
};
