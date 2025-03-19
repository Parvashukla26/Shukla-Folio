"use client";

import { cn } from "../../lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: { quote: string; name: string; title: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      addAnimation();
    }
  }, []);

  function addAnimation() {
    if (!containerRef.current || !scrollerRef.current) return;
    const scrollerContent = Array.from(scrollerRef.current.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerRef.current?.appendChild(duplicatedItem);
    });

    getDirection();
    getSpeed();
    setStart(true);
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div ref={containerRef} className={cn("scroller w-screen overflow-hidden", className)}>
      <ul
        ref={scrollerRef}
        className={cn(
          "flex gap-16 py-4 w-max",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li key={idx} className="w-[90vw] max-w-full p-5 md:p-16 md:w-[60vw] bg-[#04071d] border border-slate-800 rounded-2xl">
            <blockquote>
              <span className="text-lg text-white">{item.quote}</span>
              <div className="mt-6 flex items-center">
                <img src="/profile.svg" alt="profile" className="me-3" />
                <span className="text-xl font-bold text-white">{item.name}</span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
