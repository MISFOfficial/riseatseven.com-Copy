"use client";

import React, { useRef } from "react";
import { legacyData } from "./LegacyContent";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Legacy: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const cards = containerRef.current.querySelectorAll(".js-card");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      // Set initial stack state with progressive right-side tilt
      gsap.set(cards, {
        y: 0,
        rotate: (i) => (i + 1) * 6, // Each card tilts more than the one above it
        scale: (i) => 1 - i * 0.03,
      });

      cards.forEach((card, i) => {
        // All cards now peel off with the exact same behavior as the first card
        tl.to(
          card,
          {
            y: "-200%",
            rotate: -50, // Standardized to match the first card
            scale: 1.1,
            ease: "power2.inOut",
          },
          i * 0.5, // Start when previous is 50% done
        );

        // Scale up the next card slightly as the current one peels off
        if (cards[i + 1]) {
          tl.to(
            cards[i + 1],
            {
              scale: 1,
              rotate: 0,
              ease: "power2.inOut",
            },
            "<", // Straighten concurrently with the peel off for a smooth transition
          );
        }
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="w-full relative ">
      <div className="w-full h-[300vh] relative">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute top-10 w-full text-center">
            <h2 className="text-grey-900 text-xl font-sans-primary font-semibold tracking-[-1.5px]">
              {legacyData.title}
            </h2>
          </div>

          <div className="relative w-full max-w-lg | xl:max-w-xl | 4xl:max-w-2xl h-[600px] flex items-center justify-center">
            {legacyData.items.map((item, i) => (
              <div
                key={i}
                className={`absolute inset-0 js-card flex flex-col items-center text-center rounded-3xl p-10 gap-y-6 ${item.bgColor} ${item.textColor} shadow-2xl`}
                style={{ zIndex: legacyData.items.length - i }}
              >
                <div className="rounded-2xl overflow-hidden w-48 aspect-square relative shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
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
