"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { WorkItem } from "./Content";
import Image from "next/image";

interface WorkImageProps {
  work: WorkItem;
  isActive: boolean;
  isHoveredByTitle?: boolean;
}

const WorkImage: React.FC<WorkImageProps> = ({
  work,
  isActive,
  isHoveredByTitle,
}) => {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const [internalHover, setInternalHover] = useState(false);

  const isHovered = internalHover || isHoveredByTitle;

  const { contextSafe } = useGSAP({ scope: containerRef });

  const animateIn = contextSafe(() => {
    gsap.to(maskRef.current, {
      clipPath: "circle(150% at 50% 100%)",
      duration: 0.4,
      ease: "power2.inOut",
    });
  });

  const animateOut = contextSafe(() => {
    gsap.to(maskRef.current, {
      clipPath: "circle(0% at 50% 100%)",
      duration: 0.3,
      ease: "power2.inOut",
    });
  });

  useGSAP(
    () => {
      if (isHovered) {
        animateIn();
      } else {
        animateOut();
      }
    },
    { dependencies: [isHovered] },
  );

  const onMouseEnter = () => {
    setInternalHover(true);
    window.dispatchEvent(
      new CustomEvent("component-cursor-button", {
        detail: { active: true, text: null },
      }),
    );
  };

  const onMouseLeave = () => {
    setInternalHover(false);
    window.dispatchEvent(
      new CustomEvent("component-cursor-button", {
        detail: { active: false, text: null },
      }),
    );
  };

  return (
    <a
      ref={containerRef}
      href={`/work/${work.id}`}
      className={`grid group rounded-2xl overflow-hidden mb-5 | lg:rounded-2xl lg:mb-7 relative ${
        isActive ? "is-active" : ""
      }`}
      style={{ cursor: isHovered ? "none" : "auto" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Layer 1: Image */}
      <div
        className={`col-start-1 row-start-1 transition-all duration-100 ease-out ${
          isHovered ? "scale-105 blur-md" : "scale-100 blur-0"
        }`}
      >
        <div
          className="relative overflow-hidden w-full"
          style={{ paddingTop: "75%" }}
        >
          <picture className="absolute top-0 left-0 w-full h-full">
            <Image
              fill
              src={work.image}
              alt={work.title}
              className="absolute top-0 left-0 w-full h-full object-cover"
              loading="lazy"
            />
          </picture>
        </div>
      </div>

      {/* Layer 2: Service Tag */}
      <div className="col-start-1 row-start-1 p-3 z-50 flex justify-end items-start | lg:items-end lg:p-5 pointer-events-none">
        <div
          className={`shrink-0 inline-flex items-center rounded-full tracking-tight font-medium leading-none backdrop-blur-sm text-sm gap-x-3 py-2.5 px-3.5 | lg:text-base transition-colors duration-300  bg-white/10 ${
            isHovered ? "text-grey-900 " : "text-white"
          }`}
        >
          <div>{work.service}</div>
          <i
            className="fa-regular fa-sharp fa-chart-line-up"
            aria-hidden="true"
          ></i>
        </div>
      </div>

      {/* Layer 3: Mobile Title */}
      <div className="col-start-1 row-start-1 p-3 z-30 relative flex justify-start items-end | lg:hidden lg:p-5">
        <div className="grid gap-y-1 relative z-20">
          <div className="text-white text-xs font-medium mt-2">
            [{work.year}]
          </div>
          <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-white text-3xl/none | lg:text-5xl/none | xl:text-6xl/none | 3xl:text-7xl/0.9 font-sans-primary font-medium tracking-tight js-heading">
            {work.title}
          </div>
        </div>
        <div className="absolute w-full bottom-0 left-0 h-32 bg-linear-to-t from-black z-10 opacity-70"></div>
      </div>

      {/* Layer 4: Full Hover Overlay */}
      <div
        ref={maskRef}
        className="col-start-1 row-start-1 flex flex-col items-start justify-between z-40 p-3 | lg:p-5"
        style={{
          backgroundColor: work.color,
          color: "#111212",
          clipPath: "circle(0% at 50% 100%)",
        }}
      >
        <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-current text-3xl/none | lg:text-4xl/none | xl:text-5xl/none | 3xl:text-6xl/none font-sans-primary font-medium tracking-tight js-heading">
          {work.description}
        </div>
      </div>
    </a>
  );
};

export default WorkImage;
