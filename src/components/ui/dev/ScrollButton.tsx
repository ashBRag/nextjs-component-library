"use client";
import { useScrollToElement } from "@/components/hooks/useScroll";

export function PortfolioUI() {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollDown}
      className="bg-transparent border border-[#C778DD] text-[#C778DD] hover:bg-[#C778DD] hover:text-white  text-2xl px-4 py-2 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center"
    >
      <span className="animate-bounce" style={{ animationDuration: "1s" }}>
        ▼
      </span>
    </button>
  );
}

export function FloatingScrollButton({ id = "" }) {
  const { scrollToElement } = useScrollToElement();

  return (
    <>
      {id && (
        <button
          onClick={() => {
            scrollToElement(id);
          }}
          className={`
            fixed bottom-8 right-8 z-50
            w-12 h-12 
            bg-[#282C33]/80 backdrop-blur-sm
            border border-[#C778DD]/50
            text-[#C778DD] hover:text-white
            hover:bg-[#C778DD]/20 hover:border-[#C778DD]
            transition-all duration-300
            flex items-center justify-center
             text-lg
            hover:scale-110 active:scale-95
            shadow-lg hover:shadow-[#C778DD]/20
          `}
          aria-label="Scroll to next section"
        >
          {/* Corner brackets */}
          <div className="absolute top-1 left-1 w-2 h-2">
            <div className="w-full h-0.5 bg-[#C778DD]/50"></div>
            <div className="w-0.5 h-full bg-[#C778DD]/50"></div>
          </div>
          <div className="absolute top-1 right-1 w-2 h-2">
            <div className="absolute top-0 right-0 w-full h-0.5 bg-[#C778DD]/50"></div>
            <div className="absolute top-0 right-0 w-0.5 h-full bg-[#C778DD]/50"></div>
          </div>
          <div className="absolute bottom-1 left-1 w-2 h-2">
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C778DD]/50"></div>
            <div className="absolute bottom-0 left-0 w-0.5 h-full bg-[#C778DD]/50"></div>
          </div>
          <div className="absolute bottom-1 right-1 w-2 h-2">
            <div className="absolute bottom-0 right-0 w-full h-0.5 bg-[#C778DD]/50"></div>
            <div className="absolute bottom-0 right-0 w-0.5 h-full bg-[#C778DD]/50"></div>
          </div>

          <span className="animate-bounce relative z-10">↓</span>
        </button>
      )}
    </>
  );
}
