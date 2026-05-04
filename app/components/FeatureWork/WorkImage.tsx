"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { WorkItem } from "./Content";

interface WorkImageProps {
  work: WorkItem;
  isActive: boolean;
}

const WorkImage: React.FC<WorkImageProps> = ({ work, isActive }) => {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: containerRef });

  const onMouseMove = contextSafe((e: React.MouseEvent) => {
    if (!maskRef.current || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(maskRef.current, {
      clipPath: `circle(150px at ${x}px ${y}px)`,
      duration: 0.3,
      ease: "none",
    });
  });

  const onMouseEnter = contextSafe(() => {
    gsap.to(maskRef.current, {
      opacity: 1,
      duration: 0.3,
    });
  });

  const onMouseLeave = contextSafe(() => {
    gsap.to(maskRef.current, {
      opacity: 0,
      clipPath: `circle(0px at 50% 50%)`,
      duration: 0.3,
    });
  });

  return (
    <a
      ref={containerRef}
      href={`/work/${work.id}`}
      className={`grid group rounded-2xl overflow-hidden mb-5 | lg:rounded-2xl lg:mb-7 circle-mask-container ${
        isActive ? "is-active" : ""
      }`}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Layer 1: Image */}
      <div className="col-start-1 row-start-1 transition | pointer-fine:group-hover:scale-105">
        <div className="relative overflow-hidden w-full" style={{ paddingTop: "75%" }}>
          <picture className="absolute top-0 left-0 w-full h-full">
            <img
              src={work.image}
              alt={work.title}
              className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500"
              loading="lazy"
            />
          </picture>
        </div>
      </div>

      {/* Layer 2: Service Tag */}
      <div className="col-start-1 row-start-1 p-3 z-30 flex justify-end items-start | lg:items-end lg:p-5">
        <div className="shrink-0 inline-flex items-center rounded-full tracking-tight font-medium leading-none text-white bg-white/20 backdrop-blur-sm text-sm gap-x-3 py-2.5 px-3.5 | lg:text-base">
          <i className="fa-regular fa-sharp fa-magnifying-glass" aria-hidden="true"></i>
          <div>{work.service}</div>
          <i className="fa-regular fa-sharp fa-chart-line-up" aria-hidden="true"></i>
        </div>
      </div>

      {/* Layer 3: Mobile Title */}
      <div className="col-start-1 row-start-1 p-3 z-30 relative flex justify-start items-end | lg:hidden lg:p-5">
        <div className="grid gap-y-1 relative z-20">
          <div className="text-white text-xs font-medium mt-2">[{work.year}]</div>
          <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-white text-3xl/none | lg:text-5xl/none | xl:text-6xl/none | 3xl:text-7xl/0.9 font-sans-primary font-medium tracking-tight js-heading">
            {work.title}
          </div>
        </div>
        <div className="absolute w-full bottom-0 left-0 h-32 bg-gradient-to-t from-black z-10 opacity-70"></div>
      </div>

      {/* Layer 4: Circle Mask Overlay */}
      <div
        ref={maskRef}
        className="col-start-1 row-start-1 grid-cols-12 flex flex-col items-start justify-between z-40 p-3 transition | lg:p-5 | circle-mask opacity-0 pointer-events-none"
        style={{
          backgroundColor: work.color,
          color: "#111212",
          clipPath: "circle(0px at 50% 50%)",
        }}
      >
        <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-current text-3xl/none | lg:text-4xl/none | xl:text-5xl/none | 3xl:text-6xl/none font-sans-primary font-medium tracking-tight js-heading">
          {work.description}
        </div>

        <div className="w-full flex items-end justify-between">
          <div className="w-8 | lg:w-24">
            {/* Logo placeholder */}
          </div>

          <div className="shrink-0 inline-flex items-center rounded-full tracking-tight font-medium leading-none text-current bg-white/15 backdrop-blur-sm text-sm gap-x-3 py-2.5 px-3.5 | lg:text-base">
            <i className="fa-regular fa-sharp fa-magnifying-glass" aria-hidden="true"></i>
            <div>{work.service}</div>
            <i className="fa-regular fa-sharp fa-chart-line-up" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </a>
  );
};

export default WorkImage;
