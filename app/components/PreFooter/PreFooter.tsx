"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PreFooter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!textRef.current || !containerRef.current) return;

    const heading = textRef.current;
    
    // Initial state matching index.html logic
    gsap.set(heading, {
      x: "100%",
      y: 150,
    });

    // Horizontal sliding parallax based on index.html line 9544
    gsap.to(heading, {
      x: "-100%",
      y: 400,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "bottom 0%",
        scrub: true,
      },
    });

    // Character stagger reveal based on index.html line 9569
    const chars = heading.querySelectorAll(".char");
    gsap.set(chars, {
        yPercent: -60,
        rotate: 10
    });

    gsap.to(chars, {
      yPercent: 0,
      rotate: 0,
      ease: "back.inOut(4)",
      stagger: 0.1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 77%",
        end: "bottom 20%",
        scrub: true,
      },
    });
  }, { scope: containerRef });

  const text = "Ready to Rise at Seven?";
  const chars = text.split("");

  return (
    <div ref={containerRef} className="overflow-hidden hidden | lg:block h-[100vh] relative bg-grey-100">
      <div 
        ref={textRef} 
        className="shrink-0 text-[16vw] font-sans-primary font-medium tracking-tight leading-tight whitespace-nowrap"
        aria-label={text}
      >
        {chars.map((char, i) => (
          <span 
            key={i} 
            className="char inline-block" 
            style={{ position: "relative" }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PreFooter;
