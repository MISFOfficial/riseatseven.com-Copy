"use client";

import React, { useRef } from "react";
import { legacyData } from "./LegacyContent";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Legacy: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".js-card");
    
    cards.forEach((card, i) => {
        if (i === 0) return; // First card stays base

        gsap.fromTo(card, 
            { y: "100%", rotate: i % 2 === 0 ? 5 : -5 },
            { 
                y: "0%", 
                rotate: i % 2 === 0 ? 2 : -2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: `${i * 33}% center`,
                    end: `${(i + 1) * 33}% center`,
                    scrub: true,
                }
            }
        );
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full relative py-0">
      <div className="w-full h-[300vh] relative">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
          
          <div className="absolute top-10 w-full text-center">
            <h2 className="text-grey-900 text-lg font-sans-primary font-medium tracking-tight">
              {legacyData.title}
            </h2>
          </div>

          <div className="relative w-full max-w-lg | xl:max-w-xl | 4xl:max-w-2xl h-[600px] flex items-center justify-center">
            {legacyData.items.map((item, i) => (
              <div 
                key={i} 
                className={`absolute inset-0 js-card flex flex-col items-center text-center rounded-3xl p-10 gap-y-6 ${item.bgColor} ${item.textColor} shadow-2xl transition-transform duration-300`}
                style={{ zIndex: i + 1 }}
              >
                <div className="rounded-2xl overflow-hidden w-48 aspect-square relative shadow-lg">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-4xl lg:text-5xl font-sans-primary font-medium tracking-tight">
                  {item.title}
                </h3>
                <div className="max-w-md mx-auto">
                   <p className="text-sm lg:text-base leading-relaxed opacity-90">
                      {item.content}
                   </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Legacy;
