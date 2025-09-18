// components/ui/CoffeeLoader.tsx
import Lottie from "lottie-react";
import coffeeAnimation from "/public/coffeebrownPink.json";
import Typewriter from "typewriter-effect";

interface CoffeeLoaderProps {
  size?: number;
  className?: string;
  message?: string;
}

export default function CoffeeLoader({
  size = 200,
  className = "",
  message = "Brewing your experience...",
}: CoffeeLoaderProps) {
  // Show fallback while loading animation data

  // Show Lottie animation when loaded
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <Lottie
        animationData={coffeeAnimation}
        style={{ width: size, height: size }}
        loop={true}
        autoplay={true}
      />
      <div className="mt-20 text-mono">
        <Typewriter
          options={{
            strings: [message],
            autoStart: true,
            loop: false,
            delay: 100,
            deleteSpeed: 100,
          }}
        />
      </div>
    </div>
  );
}
