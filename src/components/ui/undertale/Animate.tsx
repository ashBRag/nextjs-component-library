import React, { useEffect, useRef, useState } from "react";
import { Animate } from "react-simple-animate";

interface AnimateOnViewProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale";
  duration?: number;
  delay?: number;
  distance?: number;
  trigger?: "load" | "scroll" | "both";
  threshold?: number;
  once?: boolean;
  easeType?: string;
  className?: string;
}

const AnimateOnView: React.FC<AnimateOnViewProps> = ({
  children,
  direction = "up",
  duration = 0.6,
  delay = 100,
  distance = 50,
  trigger = "load",
  threshold = 0.1,
  once = true,
  easeType = "ease-out",
  className = "",
}) => {
  const [play, setPlay] = useState(trigger === "load");
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Animation configurations
  const getAnimationProps = () => {
    const configs = {
      up: {
        startStyle: { opacity: 0, transform: `translateY(${distance}px)` },
        endStyle: { opacity: 1, transform: "translateY(0px)" },
      },
      down: {
        startStyle: { opacity: 0, transform: `translateY(-${distance}px)` },
        endStyle: { opacity: 1, transform: "translateY(0px)" },
      },
      left: {
        startStyle: { opacity: 0, transform: `translateX(-${distance}px)` },
        endStyle: { opacity: 1, transform: "translateX(0px)" },
      },
      right: {
        startStyle: { opacity: 0, transform: `translateX(${distance}px)` },
        endStyle: { opacity: 1, transform: "translateX(0px)" },
      },
      fade: {
        startStyle: { opacity: 0 },
        endStyle: { opacity: 1 },
      },
      scale: {
        startStyle: { opacity: 0, transform: "scale(0.8)" },
        endStyle: { opacity: 1, transform: "scale(1)" },
      },
    };
    return configs[direction];
  };

  // Handle load animation
  useEffect(() => {
    if (trigger === "load" || trigger === "both") {
      setPlay(true);
      if (once && trigger === "load") {
        setHasAnimated(true);
      }
    }
  }, [trigger, once]);

  // Handle scroll animation
  useEffect(() => {
    if (trigger === "load") return;

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!hasAnimated || !once)) {
          setPlay(true);
          if (once) {
            setHasAnimated(true);
          }
        } else if (!once && !entry.isIntersecting) {
          setPlay(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [trigger, threshold, once, hasAnimated]);

  const animationProps = getAnimationProps();

  return (
    <div ref={elementRef} className={className}>
      <Animate
        play={play}
        duration={duration}
        delay={delay}
        easeType={easeType}
        {...animationProps}
      >
        {children}
      </Animate>
    </div>
  );
};

export default AnimateOnView;
