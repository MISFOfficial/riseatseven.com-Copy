"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Marquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!marqueeRef.current) return;

    // Standard GSAP horizontal loop
    const items = marqueeRef.current.querySelectorAll(".js-marquee-item");
    
    // We'll use a simpler approach: just animate the container xPercent
    // For a true infinite loop, we usually clone items, but here we can just animate it.
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      ease: "none",
      duration: 20,
      repeat: -1,
    });

    // Also add the scroll-driven offset
    gsap.to(marqueeRef.current, {
      x: -200,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 100%",
        end: "bottom 0%",
        scrub: true,
      }
    });
  }, { scope: containerRef });

  const marqueeItems = [
    { text: "Chasing Consumers", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.49.00.png?w=400&h=400&q=80" },
    { text: "Not Algorithms", image: "https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5023.jpg?w=400&h=400&q=80" },
  ];

  // Repeat items to fill space for the loop
  const displayItems = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section ref={containerRef} className="w-full py-0 overflow-hidden">
      <div className="w-full px-0">
        <div className="w-full relative overflow-hidden">
          <div ref={marqueeRef} className="flex whitespace-nowrap py-10 | lg:py-20">
            {displayItems.map((item, i) => (
              <div key={i} className="flex items-center gap-x-10 px-10 js-marquee-item">
                <h2 className="text-grey-900 text-7xl/0.9 | md:text-8xl/0.9 | lg:text-10xl/0.9 font-sans-primary font-medium tracking-tight">
                  {item.text}
                </h2>
                <div className="shrink-0 rounded-2xl overflow-hidden w-[20vw] aspect-square | md:w-[15vw] | lg:rounded-3xl lg:w-[12vw]">
                  <img src={item.image} className="w-full h-full object-cover" alt="Marquee Deco" />
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
