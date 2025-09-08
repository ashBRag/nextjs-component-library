"use client";

export default function PortfolioUI() {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: "smooth",
    });
  };

  return (
      <div className="flex items-center justify-between space-x-4 text-white font-mono mt-5" style={{ fontFamily: "'Fira Code', monospace" }}>
        {/* <div className="bg-[#282C33] border border-[#ABB2BF]/30 px-4 py-2">
          <span className="text-[#C778DD]">XP</span>
          <span className="text-white ml-2 font-medium">5+ Yr</span>
        </div> */}
        {/* <div className="bg-[#282C33] border border-[#ABB2BF]/30 px-4 py-2">
          <span className="text-[#C778DD]">Projects</span>
          <span className="text-white ml-2">10+</span>
        </div> */}
        {/* <button
          onClick={scrollDown}
          className="bg-transparent border border-[#C778DD] text-[#C778DD] hover:bg-[#C778DD] hover:text-white font-mono text-2xl px-4 py-2 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center"
          style={{ fontFamily: "'Fira Code', monospace" }}
        >
          <span className="animate-bounce" style={{ animationDuration: "1s" }}>
            ▼
          </span>
        </button> */}
      </div>
  );
}