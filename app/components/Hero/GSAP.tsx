"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { heroData } from "./HeroContent";

gsap.registerPlugin(ScrollTrigger);
import React from "react";

export const useHeroAnimation = (
  containerRef: React.RefObject<HTMLDivElement | null>,
  setRandomImage: (img: string) => void,
) => {
  useEffect(() => {
    const images = heroData.randomImages;
    const selected = images[Math.floor(Math.random() * images.length)];
    setRandomImage(selected);
  }, [setRandomImage]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const words = containerRef.current.querySelectorAll(".js-word span");
      const imageWrapper =
        containerRef.current.querySelector(".js-image-wrapper");

      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(
        words,
        { y: "110%" },
        {
          y: "0%",
          duration: 0.4,
          ease: "power3.out",
          stagger: 0.02,
        },
      );

      tl.fromTo(
        imageWrapper,
        { width: 0, opacity: 0 },
        {
          width: "1.1em",
          opacity: 1,
          duration: 1,
          ease: "expo.out",
        },
        "-=0.6",
      );

      // Subtle parallax on the background image
      gsap.to(".js-hero-bg", {
        y: 50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: containerRef },
  );

  const renderText = (text: string) => {
    return text.split(" ").map((word, i) => (
      <div
        key={i}
        className="inline mr-2 | pointer-fine:mr-0 | js-word"
        style={{ marginRight: "10px" }}
      >
        <div
          style={{
            position: "relative",
            display: "inline-block",
            overflow: "hidden",
          }}
        >
          {word.split("").map((char, j) => (
            <span key={j} className="inline-flex flex-col relative h-full">
              <span className="block relative w-full h-full">{char}</span>
            </span>
          ))}
        </div>
      </div>
    ));
  };

  return { renderText };
};
