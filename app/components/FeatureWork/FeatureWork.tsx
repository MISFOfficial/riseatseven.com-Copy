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

  useGSAP(() => {
    if (!sectionRef.current || !titlesRef.current || !imagesRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Get all images
      const images = Array.from(imagesRef.current!.querySelectorAll(".circle-mask-container"));
      
      images.forEach((img, index) => {
        ScrollTrigger.create({
          trigger: img as HTMLElement,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => {
            if (self.isActive) setActiveIndex(index);
          },
        });
      });

      // Subtle parallax for images side
      gsap.to(imagesRef.current, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => {
      mm.revert();
    };
  }, { scope: sectionRef });

  // Vertical centering for titles
  useGSAP(() => {
    if (!titlesRef.current) return;
    
    const titles = Array.from(titlesRef.current.children) as HTMLElement[];
    const activeTitle = titles[activeIndex];
    
    if (activeTitle) {
      const containerHeight = titlesRef.current.parentElement?.clientHeight || 0;
      const offsetTop = activeTitle.offsetTop;
      const titleHeight = activeTitle.clientHeight;
      
      gsap.to(titlesRef.current, {
        y: (containerHeight / 2) - offsetTop - (titleHeight / 2),
        duration: 0.8,
        ease: "power3.out",
      });
    }
  }, [activeIndex]);

  return (
    <div
      ref={sectionRef}
      className="w-full h-full overflow-hidden bg-grey-900 rounded-3xl grid grid-cols-12 px-5 | lg:pl-8 lg:pr-8 | xl:pl-10 xl:pr-10"
    >
      {/* Left Side: Sticky Titles (Desktop) */}
      <div className="relative col-span-12 items-start hidden | lg:flex lg:flex-row lg:items-center | lg:col-span-6 lg:h-[96svh] | 4xl:col-span-6 sticky top-0">
        <div className="flex flex-col items-start relative z-10 h-full pt-16 | lg:pt-24 lg:pb-32 lg:gap-y-20 w-full">
          <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-white text-md/tight | lg:text-lg/tight | xl:text-xl/tight | 4xl:text-2xl/none font-sans-primary font-medium tracking-tight js-heading">
            Featured Work
          </h2>

          <div className="relative flex-1 overflow-hidden hidden pr-5 | lg:inline-block w-full">
            {/* Gradient Overlays (Tailwind v4 syntax) */}
            <div className="absolute top-0 left-0 w-full h-1/3 z-20 pointer-events-none bg-linear-to-b from-grey-900 hidden | lg:flex"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 z-20 pointer-events-none bg-linear-to-t from-grey-900 hidden | lg:flex"></div>

            <div
              ref={titlesRef}
              className="grid gap-y-2 relative z-10 | 2xl:gap-y-3 | 4xl:gap-y-5 | js-headings-40 py-[40vh]"
            >
              {featuredWork.map((work, index) => (
                <WorkTitle
                  key={work.id}
                  title={work.title}
                  year={work.year}
                  isActive={activeIndex === index}
                  onClick={() => {
                    const images = Array.from(imagesRef.current!.querySelectorAll(".circle-mask-container"));
                    const targetImage = images[index];
                    if (targetImage) {
                      gsap.to(window, {
                        scrollTo: { y: targetImage, offsetY: window.innerHeight / 4 },
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

      {/* Right Side: Scrolling Images */}
      <div
        ref={imagesRef}
        className="col-span-12 grid pt-7 pb-14 | lg:col-span-6 lg:col-start-7 | | 3xl:col-span-5 3xl:col-start-8 | 4xl:col-span-5 4xl:col-start-8 | js-images-40"
      >
        <div className="mb-5 | lg:hidden">
          <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-white text-md/tight | lg:text-lg/tight | xl:text-xl/tight | 4xl:text-2xl/none font-sans-primary font-medium tracking-tight js-heading">
            Featured Work
          </h2>
        </div>

        {featuredWork.map((work, index) => (
          <WorkImage
            key={work.id}
            work={work}
            isActive={activeIndex === index}
          />
        ))}
      </div>
    </div>
  );
}

export default FeatureWork;
