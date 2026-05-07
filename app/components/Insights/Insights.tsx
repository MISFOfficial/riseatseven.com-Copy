"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CommontButton from "../Navigation/CommontButton";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { insightsData } from "./Content";

gsap.registerPlugin(ScrollTrigger);

const Insights: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const renderText = (text: string) => {
    return text.split(" ").map((word, i) => (
      <div
        key={i}
        className="inline-flex mr-2 | pointer-fine:mr-0 | js-word"
        style={{ marginRight: "10px" }}
      >
        <div
          style={{
            position: "relative",
            display: "inline-block",
            overflow: "hidden",
            paddingBottom: "0.1em",
            marginBottom: "-0.1em",
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

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const words = containerRef.current.querySelectorAll(".js-word span");
      const imageWrapper =
        containerRef.current.querySelector(".js-image-wrapper");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

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
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="bg-grey-100 py-16 md:py-24 overflow-hidden"
    >
      <div className="grid grid-cols-12 gap-y-7 md:gap-y-12 px-4 md:px-7">
        {/* Header Section */}
        <div className="col-span-12">
          <div className="grid grid-cols-12 md:border-b md:border-grey-200 md:pb-8 gap-x-5 items-end">
            <div className="col-span-12 md:col-span-9">
              <h2 className="flex flex-wrap items-center text-grey-900 text-6xl md:text-8xl lg:text-9xl font-sans-primary font-medium tracking-tight leading-[0.9]">
                {renderText("What's")}
                <div
                  className="mx-4 rounded-[15%] overflow-hidden relative bg-black/5 js-image-wrapper"
                  style={{ width: "0.9em", height: "0.9em" }}
                >
                  <Image
                    src="/rise_files/0B5A6875.jpg"
                    alt="New"
                    fill
                    className="object-cover"
                  />
                </div>
                {renderText("New")}
              </h2>
            </div>

            <div className="hidden md:flex col-span-3 justify-end pb-2">
              <CommontButton
                href="/blog/"
                label="Explore More Thoughts"
                variant="white"
                className="shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="col-span-12 -mx-4 md:-mx-7 lg:px-7">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1.2}
            pagination={{
              type: "progressbar",
              el: ".js-insights-pagination",
            }}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3 },
            }}
            className="px-4 md:px-7 overflow-visible!"
          >
            {insightsData.map((item) => (
              <SwiperSlide key={item.id} className="py-2">
                <Link
                  href={item.url}
                  className="group flex flex-col gap-y-5 transition-transform duration-200 hover:-translate-y-2"
                  style={{ cursor: "none" }}
                  onMouseEnter={() => {
                    window.dispatchEvent(
                      new CustomEvent("component-cursor-button", {
                        detail: { active: true, text: null },
                      }),
                    );
                  }}
                  onMouseLeave={() => {
                    window.dispatchEvent(
                      new CustomEvent("component-cursor-button", {
                        detail: { active: false, text: null },
                      }),
                    );
                  }}
                >
                  <div className="relative aspect-square rounded-4xl lg:rounded-[3rem] overflow-hidden bg-white">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />

                    {/* Circle blur overlay — expands from bottom center */}
                    <div className="absolute inset-0 z-10 backdrop-blur-md [clip-path:circle(0%_at_50%_100%)] group-hover:[clip-path:circle(150%_at_50%_100%)] transition-[clip-path] duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]" />

                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] md:text-xs font-medium text-white tracking-tight z-20">
                      {item?.category}
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-3 px-1">
                    <div className="flex items-center gap-x-2">
                      <div className="flex items-center gap-x-2 bg-white px-3 py-1 rounded-full border border-grey-200">
                        <div className="w-5 h-5 rounded-full overflow-hidden relative -ml-1">
                          <Image
                            src={item.authorImg}
                            alt={item.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-[11px] md:text-xs font-medium text-grey-400">
                          {item.author}
                        </span>
                      </div>

                      <div className="flex items-center gap-x-2 bg-white px-3 py-1 rounded-full border border-grey-200 text-[11px] md:text-xs font-medium text-grey-400">
                        <span className="text-sm -mt-0.5">⏱</span>
                        <span>{item.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl lg:text-3xl font-sans-primary font-medium tracking-tight text-grey-900 leading-[1.1]">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Progress Bar */}
          <div className="mt-12 px-4 md:px-7">
            <div className="js-insights-pagination swiper-pagination-progressbar static! h-0.5! bg-grey-200 rounded-full overflow-hidden">
              <span className="swiper-pagination-progressbar-fill bg-grey-900! transition-all! duration-500!"></span>
            </div>
          </div>
        </div>

        {/* Mobile View Explore More */}
        <div className="col-span-12 md:hidden px-4">
          <CommontButton
            href="/blog/"
            label="Explore More Thoughts"
            variant="white"
            className="w-full shadow-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default Insights;
