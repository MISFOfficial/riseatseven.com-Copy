"use client";

import React, { useRef } from "react";
import Marquee from "react-fast-marquee";
import { logoSliderData } from "./LogoSliderContent";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LogoSlider: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const items = [
    ...logoSliderData,
    ...logoSliderData,
    ...logoSliderData,
    ...logoSliderData,
    ...logoSliderData,
    ...logoSliderData,
    ...logoSliderData,
    ...logoSliderData,
    ...logoSliderData,
    ...logoSliderData,
  ];

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Parallax scroll effect for ITEMS ONLY
      // Scrolling down moves it Left (xPercent: -7)
      // Scrolling up moves it back Right (towards 0) smoothly
      gsap.to(containerRef.current, {
        xPercent: -7, 
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 100%",
          end: "bottom 0%",
          scrub: 2, // High scrub for slow, smooth movement
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section className="w-full pt-6 | xl:pt-12 overflow-hidden relative">
      <div className="w-full px-4 | md:px-7">
        <div className="grid grid-cols-20 w-full gap-y-2 relative">
          {/* Label */}
          <div className="col-span-20 flex items-center | md:col-span-4 | lg:col-span-3 | xl:col-span-2 relative z-20">
            <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-sm/tight font-sans-primary font-medium tracking-tight sm:max-w-50">
              The agency behind ...
            </h2>
          </div>

          {/* Fixed Mask Wrapper */}
          <div
            className="relative w-full col-span-20 | md:col-span-16 | lg:col-span-17 | xl:col-span-18 overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            }}
          >
            {/* GSAP Moving Container */}
            <div ref={containerRef} className="w-[130vw] relative z-0">
              <Marquee speed={45} pauseOnHover={true} gradient={false}>
                {items.map((logo, i) => (
                  <div
                    key={i}
                    className="w-24 py-5 relative | lg:w-32 group"
                    style={{ marginRight: "6rem" }}
                  >
                    <div className="w-full h-full relative">
                      <div className="aspect-20/9 w-full relative">
                        <Image
                          fill
                          src={logo}
                          alt="Client Logo"
                          className="object-contain transition-all grayscale duration-300"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>

            {/* STATIC Blur Overlays - Placed inside the fixed wrapper to remain stationary */}
            <div className="section-blur section-blur--left w-32! md:w-48! z-20!">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} style={{ "--index": i } as React.CSSProperties} />
              ))}
            </div>
            <div className="section-blur section-blur--right w-32! md:w-48! z-20!">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} style={{ "--index": i } as React.CSSProperties} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
