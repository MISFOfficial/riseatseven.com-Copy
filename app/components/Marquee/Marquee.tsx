"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Marquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useGSAP(
    () => {
      if (!marqueeRef.current) return;

      gsap.to(marqueeRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1,
      });

      gsap.to(marqueeRef.current, {
        x: -200,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 100%",
          end: "bottom 0%",
          scrub: true,
        },
      });
    },
    { scope: containerRef },
  );


  const handleMouseEnter = () => {
    setIsHovered(true);
    window.dispatchEvent(
      new CustomEvent("component-cursor-button", {
        detail: { active: true, text: "Send Us Your Brief" },
      }),
    );
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    window.dispatchEvent(
      new CustomEvent("component-cursor-button", {
        detail: { active: false, text: null },
      }),
    );
  };

  const marqueeItems = [
    {
      text: "Chasing Consumers",
      image: "/rise_files/Screenshot-2025-06-25-at-14.49.00.png",
    },
    { text: "Not Algorithms", image: "/rise_files/IMG_5023.jpg" },
  ];

  const displayItems = [
    ...marqueeItems,
    ...marqueeItems,
    ...marqueeItems,
    ...marqueeItems,
  ];

  return (
    <section
      className="w-full py-0 overflow-hidden relative"
      style={{ cursor: isHovered ? "none" : "auto" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Custom Cursor */}

      <div className="w-full px-0">
        <div className="w-full relative overflow-hidden">
          <div
            ref={marqueeRef}
            className="flex whitespace-nowrap py-10 | lg:py-20"
          >
            {displayItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-x-10 px-10 js-marquee-item"
              >
                <h2 className="text-grey-900 text-7xl | md:text-8xl | lg:text-[200px] font-sans-primary font-semibold tracking-tight">
                  {item.text}
                </h2>
                <div className="shrink-0 rounded-2xl overflow-hidden w-[20vw] aspect-square | md:w-[15vw] | lg:rounded-3xl lg:w-[12vw]">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover"
                    alt="Marquee Deco"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
