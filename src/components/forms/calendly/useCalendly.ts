import { useState, useEffect } from "react";

export const useCalendly = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!window.Calendly && !document.querySelector('script[src*="calendly"]')) {
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

  return { isLoaded };
};