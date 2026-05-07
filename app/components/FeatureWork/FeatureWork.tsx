"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import { featuredWork } from "./Content";
import WorkTitle from "./WorkTitle";
import WorkImage from "./WorkImage";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function FeatureWork() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titlesRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !titlesRef.current || !imagesRef.current)
        return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        // Calculate dimensions
        const containerHeight = sectionRef.current!.clientHeight;
        const titles = Array.from(titlesRef.current!.children) as HTMLElement[];
        const firstTitle = titles[0];
        const lastTitle = titles[titles.length - 1];
        // Titles will have a fixed small gap
        gsap.set(titlesRef.current, { gap: "0rem" });

        const imagesTotalHeight = imagesRef.current!.scrollHeight;
        const titlesTotalHeight = titlesRef.current!.scrollHeight;

        // Start together at the top
        const startY = 0;
        // Increase the distance to travel to increase the speed
        const endY = -(titlesTotalHeight - containerHeight / 8);

        // Pin the entire section
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "center center",
            end: `+=${featuredWork.length * 80}%`,
            pin: true,
            scrub: 1,
            onUpdate: (self) => {
              const index = Math.round(
                self.progress * (featuredWork.length - 1),
              );
              setActiveIndex(index);
            },
          },
        });

        // Set initial positions
        gsap.set(titlesRef.current, { y: startY });

        // Sync image scroll
        tl.to(
          imagesRef.current,
          {
            y: -(imagesTotalHeight - containerHeight + 100),
            ease: "none",
          },
          0,
        );

        // Sync titles scroll
        tl.to(
          titlesRef.current,
          {
            y: endY,
            ease: "none",
          },
          0,
        );

        return () => {
          tl.kill();
        };
      });

      return () => {
        mm.revert();
      };
    },
    { scope: sectionRef },
  );

  return (
    <div
      ref={sectionRef}
      id="featured-work-section"
      className="w-[96vw] h-[94vh] overflow-hidden bg-grey-900 rounded-3xl grid grid-cols-12 px-5 lg:pl-8 lg:pr-8 xl:pl-10 xl:pr-10 mx-auto"
    >
      {/* Left Side: Sticky Titles (Desktop) */}
      <div className="relative col-span-12 lg:col-span-7 items-start hidden lg:flex lg:flex-row lg:items-start  lg:h-full   top-0">
        <div className="flex flex-col items-start relative z-10 h-full w-full">
          <div className="pt-16 lg:pt-24 pb-10">
            <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-white text-md/tight lg:text-lg/tight xl:text-xl/tight 4xl:text-2xl/none font-sans-primary font-medium tracking-tight">
              Featured Work
            </h2>
          </div>

          <div className="relative flex-1 overflow-hidden hidden pr-5 | lg:inline-block w-full">
            {/* Gradient Overlays (Tailwind v4 syntax) */}

            <div className=" overflow-hidden relative  mt-10">
              {/* Gradient Overlays for Fade Effect */}
              <div className="absolute top-0 left-0 w-full h-40 bg-linear-to-b from-grey-900 to-transparent z-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-full h-60 bg-linear-to-t from-grey-900 to-transparent z-20 pointer-events-none" />

              {/* title */}
              <div
                ref={titlesRef}
                className="grid  relative z-10 my-16 lg:my-60 h-30 "
              >
                {featuredWork.map((work, index) => (
                  <WorkTitle
                    key={work.id}
                    title={work.title}
                    year={work.year}
                    isActive={activeIndex === index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => {
                      const images = Array.from(
                        imagesRef.current!.querySelectorAll(
                          ".circle-mask-container",
                        ),
                      );
                      const targetImage = images[index];
                      if (targetImage) {
                        gsap.to(window, {
                          scrollTo: {
                            y: targetImage,
                            offsetY: window.innerHeight / 4,
                          },
                          duration: 1.5,
                          ease: "power4.inOut",
                        });
                      }
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Scrolling Images */}
      <div
        ref={imagesRef}
        className="col-span-12 grid pt-7 pb-14 lg:col-span-5 "
      >
        <div className="mb-5 lg:hidden">
          <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-white text-md/tight lg:text-lg/tight xl:text-xl/tight 4xl:text-2xl/none font-sans-primary font-medium tracking-tight">
            Featured Work
          </h2>
        </div>

        {featuredWork.map((work, index) => (
          <WorkImage
            key={work.id}
            work={work}
            isActive={activeIndex === index}
            isHoveredByTitle={hoveredIndex === index}
          />
        ))}
      </div>
    </div>
  );
}

export default FeatureWork;
