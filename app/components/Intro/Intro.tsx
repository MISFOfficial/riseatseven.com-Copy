"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { introData } from "./IntroContent";
import CommontButton from "../Navigation/CommontButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Intro: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="w-full py-12 | xl:py-24">
      <div className="w-full px-4 | md:px-7">
        <div className="w-full flex justify-between items-start | flex-col-reverse | md:flex-row | gap-x-3 | md:gap-x-5 gap-y-3 | md:gap-y-5">
          {/* CTAs - Hidden on Mobile, shown at bottom via flex-col-reverse */}
          <div className="flex flex-wrap gap-4 w-full | md:hidden">
            {introData.ctas.map((cta, i) =>
              i === 0 ? (
                <CommontButton
                  key={i}
                  href={cta.link}
                  label={cta.text}
                  variant="white"
                  className="ring-1 ring-grey-900/5 w-full"
                />
              ) : (
                <Link
                  key={i}
                  href={cta.link}
                  className="w-full group inline-flex shrink-0 justify-center gap-x-2 items-center relative leading-tight tracking-tightish capitalize font-sans-primary font-medium overflow-hidden border border-transparent cursor-pointer text-base px-6 py-3 rounded-3xl transition duration-300 pointer-fine:hover:rounded-xl bg-transparent text-grey-900"
                >
                  <div className="relative overflow-hidden h-6">
                    <div className="transition transform pointer-fine:group-hover:-translate-y-6">
                      <span className="flex items-center gap-x-2">
                        {cta.text}
                        <svg
                          className="w-3 h-3 rotate-45"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="transition absolute top-0 left-0 translate-y-6 pointer-fine:group-hover:translate-y-0">
                      <span className="flex items-center gap-x-2">
                        {cta.text}
                        <svg
                          className="w-3 h-3 rotate-45"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ),
            )}
          </div>

          {/* Description */}
          <div className="w-full mb-1 | md:mt-2 md:mb-0 max-w-sm | xl:max-w-xl | 3xl:max-w-2xl | 4xl:max-w-3xl">
            <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-lg/tight | lg:text-lg/tight | xl:text-2xl/none | 4xl:text-3xl/none font-sans-primary font-medium tracking-tight overflow-hidden">
              {introData.description.split(" ").map((word, i) => (
                <span key={i} className="inline-block mr-1.5 js-word">
                  {word}
                </span>
              ))}
            </div>
          </div>

          {/* Main Heading with Embedded Image */}
          <div className="w-full grid | max-w-[24rem] | md:max-w-[40rem] | xl:max-w-xl | 2xl:max-w-[42rem] | 3xl:max-w-[52rem] | 4xl:max-w-5xl | gap-y-3 | md:gap-y-7">
            <h2 className="inline-flex flex-wrap text-balance relative flex flex-col text-left justify-start text-grey-900 text-5xl/none | lg:text-6xl/none | xl:text-7xl/0.9 | 3xl:text-7.5xl/0.9 | 4xl:text-8xl/0.9 font-sans-primary font-medium tracking-tight">
              <div className="flex flex-wrap relative text-left justify-start items-center">
                {introData.heading.split(" ").map((word, i) => (
                  <React.Fragment key={i}>
                    {i === 2 && (
                      <div
                        className="inline shrink-0 flex bg-black/5 relative overflow-hidden mr-2 | pointer-fine:mr-0"
                        style={{
                          borderRadius: "15%",
                          width: "60px",
                          height: "45px",
                        }}
                      >
                        <img
                          src={introData.image}
                          alt="Intro Deco"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <span className="inline-block mr-2 js-word">{word}</span>
                  </React.Fragment>
                ))}
              </div>
            </h2>

            {/* CTAs - Desktop */}
            <div className="flex flex-wrap gap-4 hidden | md:flex">
              {introData.ctas.map((cta, i) =>
                i === 0 ? (
                  <CommontButton
                    key={i}
                    href={cta.link}
                    label={cta.text}
                    variant="white"
                    className="ring-1 ring-grey-900/5"
                  />
                ) : (
                  <Link
                    key={i}
                    href={cta.link}
                    className="group inline-flex shrink-0 justify-center gap-x-2 items-center relative leading-tight tracking-tightish capitalize font-sans-primary font-medium overflow-hidden border border-transparent cursor-pointer text-base px-6 py-3 rounded-3xl transition duration-300 pointer-fine:hover:rounded-xl bg-transparent text-grey-900"
                  >
                    <div className="relative overflow-hidden h-6">
                      <div className="transition transform pointer-fine:group-hover:-translate-y-6">
                        <span className="flex items-center gap-x-2">
                          {cta.text}
                          <svg
                            className="w-3 h-3 rotate-45"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 10l7-7m0 0l7 7m-7-7v18"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="transition absolute top-0 left-0 translate-y-6 pointer-fine:group-hover:translate-y-0">
                        <span className="flex items-center gap-x-2">
                          {cta.text}
                          <svg
                            className="w-3 h-3 rotate-45"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 10l7-7m0 0l7 7m-7-7v18"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
