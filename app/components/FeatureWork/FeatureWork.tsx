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

  useGSAP(
    () => {
      if (!sectionRef.current || !titlesRef.current || !imagesRef.current)
        return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        // Calculate dimensions
        const viewportHeight = window.innerHeight;
        const imagesTotalHeight = imagesRef.current!.scrollHeight;
        const titlesTotalHeight = titlesRef.current!.scrollHeight;
        const containerHeight = sectionRef.current!.clientHeight;

        const titles = Array.from(titlesRef.current!.children) as HTMLElement[];
        const firstTitle = titles[0];
        const lastTitle = titles[titles.length - 1];

        // Calculate centering offsets for first and last items
        const startY = 0;
        const endY =
          containerHeight - lastTitle.offsetTop - lastTitle.clientHeight - 100; // Offset for bottom spacing

        // Pin the entire section
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "center center",
            end: `+=${featuredWork.length * 50}%`,
            scrub: 1,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              const progressPerItem = 1 / (featuredWork.length - 1);
              const index = Math.min(
                Math.round(self.progress / progressPerItem),
                featuredWork.length - 1,
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

        // Sync titles scroll (moving from first item centered to last item centered)
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
      className="w-[96vw] h-[96vh] overflow-hidden bg-grey-900 rounded-3xl grid grid-cols-12 px-5 lg:pl-8 lg:pr-8 xl:pl-10 xl:pr-10 mx-auto"
    >
      {/* Left Side: Sticky Titles (Desktop) */}
      <div className="relative col-span-12 items-start hidden lg:flex lg:flex-row lg:items-start lg:col-span-5 lg:h-full 4xl:col-span-5 sticky top-0">
        <div className="flex flex-col items-start relative z-10 h-full w-full">
          <div className="pt-16 lg:pt-24 pb-10">
            <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-white text-md/tight lg:text-lg/tight xl:text-xl/tight 4xl:text-2xl/none font-sans-primary font-medium tracking-tight">
              Featured Work
            </h2>
          </div>

          <div className="relative flex-1 overflow-hidden hidden pr-5 | lg:inline-block w-full">
            {/* Gradient Overlays (Tailwind v4 syntax) */}

            <div ref={titlesRef} className="grid  relative z-10 py-16 lg:py-24">
              {featuredWork.map((work, index) => (
                <WorkTitle
                  key={work.id}
                  title={work.title}
                  year={work.year}
                  isActive={activeIndex === index}
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

      {/* Right Side: Scrolling Images */}
      <div
        ref={imagesRef}
        className="col-span-12 grid pt-7 pb-14 lg:col-span-7 3xl:col-span-6 3xl:col-start-7 4xl:col-span-6 4xl:col-start-7"
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
          />
        ))}
      </div>
    </div>
  );
}

export default FeatureWork;
