"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { introData } from "./IntroContent";
import CommontButton from "../Navigation/CommontButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Intro: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="w-full ">
      <div className="w-full px-1 | md:px-7">
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
          <div className="w-full mb-1 | md:mt-2 md:mb-0 max-w-xs | xl:max-w-xl | 3xl:max-w-2xl | 4xl:max-w-3xl">
            <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-lg/tight | lg:text-lg/tight | xl:text-2xl/none | 4xl:text-3xl/none font-sans-primary font-medium tracking-tight overflow-hidden">
              {introData.description.split(" ").map((word, i) => (
                <span key={i} className="inline-block mr-1.5 js-word">
                  {word}
                </span>
              ))}
            </div>
          </div>

          {/* Main Heading with Embedded Image */}
          <div className="w-full grid max-w-[850]   md:gap-y-7">
            <h2 className=" flex-wrap text-balance relative  flex flex-col text-left justify-start text-grey-900 text-[3.125rem] | lg:text-[3.75rem] | xl:text-[5.5625rem] font-sans-primary font-semibold tracking-tight leading-[.9] js-heading  ">
              <div className="flex flex-wrap relative text-left justify-start items-center">
                {introData.heading.split(" ").map((word, i, arr) => (
                  <React.Fragment key={i}>
                    <span className="inline-block mr-2 js-word">{word}</span>
                    {i === arr.length - 1 && (
                      <div
                        className=" shrink-0 flex bg-black/5 relative overflow-hidden mr-2 | pointer-fine:mr-0"
                        style={{
                          borderRadius: "15%",
                          width: "80px",
                          height: "80px",
                        }}
                      >
                        <Image
                          fill
                          src={introData.image}
                          alt="Intro Deco"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </h2>

            {/* CTAs - Desktop */}
            <div className="hidden | md:flex flex-wrap gap-4">
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
