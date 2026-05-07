"use client";

import React, { useRef, useState } from "react";
import { heroData } from "./HeroContent";
import Image from "next/image";
import Heading from "./Heading";
import LeftBNP from "./_Components/LeftBNP";
import RightBNP from "./_Components/RightBNP";
import { useHeroAnimation } from "./GSAP";
import Partner from "./_Components/Partner";

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [randomImage, setRandomImage] = useState("");
  const { renderText } = useHeroAnimation(containerRef, setRandomImage);

  return (
    <section ref={containerRef} className="w-full pt-2">
      <div className="w-full px-0">
        <div className="w-full h-screen-fix h-svh relative ">
          {/* Bottom Text Overlays */}
          <div className="p-7 items-end justify-center md:justify-between absolute bottom-0 left-0 z-30 w-full  flex">
            <div className="hidden shrink-0 | md:inline max-w-[400px]">
              <div className="w-full text-center | md:text-left">
                <p className="text-sm font-sans-primary leading-normal text-pretty text-white mb-0!">
                  {heroData.bottomText.left}
                </p>
              </div>
            </div>
            <div className="w-full text-center | md:text-right max-w-[180px]">
              <p className="text-sm font-sans-primary leading-normal text-pretty text-white mb-0!">
                <strong className="font-medium">
                  {heroData.bottomText.right}
                </strong>
              </p>
            </div>
          </div>

          <div className="w-full h-full relative overflow-hidden rounded-3xl">
            <div className="w-full h-full overflow-hidden grid bg-grey-800 rounded-3xl scale-105">
              {/* Background Image Layer */}
              <div className="col-start-1 row-start-1 relative z-0 overflow-hidden blur-sm | lg:blur-md js-hero-bg">
                {randomImage && (
                  <Image
                    fill
                    src={randomImage}
                    alt="Hero Background"
                    className="w-full h-full object-cover absolute inset-0 opacity-60"
                  />
                )}
              </div>

              {/* Main Content Layer */}
              <div className="col-start-1 row-start-1 z-20 relative flex justify-center items-center ">
                <div className="flex flex-col items-center ">
                  {/* Badges/Awards */}
                  <div className="flex flex-col items-center justify-center mb-5">
                    <div className="uppercase text-xs font-medium leading-tight tracking-tightish max-w-52 text-balance text-center mb-2 text-white">
                      {heroData.badges.text}
                    </div>
                    <div className="flex items-center gap-x-2">
                      <LeftBNP />
                      {heroData.badges.logos.map((logo, i) => (
                        <div
                          key={i}
                          className=" w-10 md:w-16 aspect-20/9 relative"
                        >
                          <Image
                            width={50}
                            height={50}
                            src={logo}
                            alt="Badge"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ))}
                      <RightBNP />
                    </div>
                  </div>

                  {/* Heading */}
                  <Heading renderText={renderText} randomImage={randomImage} />

                  <div className="inline-flex flex-wrap text-balance relative   text-left justify-start text-white text-lg/tight | md:text-xl/tight | xl:text-2xl/none | xl:text-3xl/none | 4xl:text-4xl/none font-sans-primary font-medium tracking-tight js-heading mt-2 | lg:mt-4">
                    on every searchable platform
                  </div>

                  <div className="hidden xl:block mt-3">
                    <Partner />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
