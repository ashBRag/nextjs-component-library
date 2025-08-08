/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (config: { url: string }) => void;
      initInlineWidget: (config: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, any>;
        utm?: Record<string, any>;
      }) => void;
      initBadgeWidget: (config: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
    };
  }
}

export {};
