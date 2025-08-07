'use client';

export default function UndertaleUI() {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: 'smooth'
    });
  };

  return (
    <div className="mt-8 space-y-4 flex flex-col">
      {/* LV99, HP, and Continue in one line */}
      <div className="flex items-center space-x-4 text-white font-mono">
        <div className="bg-black/50 border-2 border-white px-4 py-2 rounded">
          <span className="text-yellow-400">XP</span>
          <span className="text-white ml-2 font-bold">5+</span>
        </div>
        <div className="bg-black/50 border-2 border-white px-4 py-2 rounded">
          <span className="text-red-400">Projects</span>
          <span className="text-white ml-2">∞</span>
        </div>
        <button 
          onClick={scrollDown}
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-mono text-2xl px-2
                     border-4 border-white rounded-lg transition-all duration-200 
                     hover:scale-105 active:scale-95 shadow-lg hover:shadow-yellow-500/50 font-bold
                     flex items-center justify-center"
        >
          <span className="animate-bounce" style={{animationDuration: '1s'}}>▼</span>
        </button>
       
      </div>
      
      
    </div>
  );
}