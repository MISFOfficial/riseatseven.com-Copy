"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useHeroAnimation } from "./GSAP";
import { heroData } from "./HeroContent";

function Heading({ containerRef, setRandomImage, randomImage }: any) {
  const { renderText } = useHeroAnimation(containerRef, setRandomImage);

  return (
    <h1 className="flex   flex-wrap text-balance relative pointer-fine:pr-1 pointer-fine:pb-2 pointer-fine:mt-4 pointer-fine:-mb-3  flex-col text-center justify-center text-white text-6xl md:text-8xl xl:text-[8rem]  font-sans-primary font-medium tracking-[-4px] leading-[0.85] ">
      <div
        className="w-full"
        style={{
          position: "relative",
          display: "block",
          textAlign: "center",
        }}
      >
        <div className="flex flex-wrap relative pointer-fine:-mt-6 pointer-fine:pb-6 text-center justify-center">
          {renderText(heroData.heading.line1)}
        </div>
      </div>
      <div
        className="w-full"
        style={{
          position: "relative",
          display: "block",
          textAlign: "center",
        }}
      >
        <div className="flex flex-wrap relative pointer-fine:-mt-6 pointer-fine:pb-6  text-center justify-center">
          {renderText(heroData.heading.line2.split(" ")[0])}

          <div
            className="shrink-0 flex bg-black/10 relative overflow-hidden mr-2 | pointer-fine:mr-0 js-image-wrapper"
            style={{
              marginRight: "10px",
              borderRadius: "15%",
              width: "1.1em",
              height: "0.85em",
              marginTop: "0.05em",
            }}
          >
            <div className="h-full relative" style={{ width: "1.1em" }}>
              {randomImage && (
                <Image
                  fill
                  src={randomImage}
                  className="w-full h-full object-cover absolute inset-0"
                  alt="Random Hero"
                  priority
                />
              )}
            </div>
          </div>

          {renderText(heroData.heading.line2.split(" ").slice(1).join(" "))}
        </div>
      </div>
    </h1>
  );
}

export default Heading;
