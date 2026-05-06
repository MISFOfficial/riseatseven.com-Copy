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
        const startY =
          containerHeight / 2 -
          firstTitle.offsetTop -
          firstTitle.clientHeight / 2;
        const endY =
          containerHeight / 2 -
          lastTitle.offsetTop -
          lastTitle.clientHeight / 2;

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
      className="w-[96vw] h-[96vh] overflow-hidden bg-grey-900 rounded-3xl grid grid-cols-12 px-5  | lg:pl-8 lg:pr-8 | xl:pl-10 xl:pr-10 mx-auto "
    >
      {/* Left Side: Sticky Titles (Desktop) */}
      <div className="relative col-span-12 items-start hidden | lg:flex lg:flex-row lg:items-center | lg:col-span-6 lg:h-full | 4xl:col-span-6 sticky top-0">
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
