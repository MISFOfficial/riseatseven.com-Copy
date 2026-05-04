"use client";

import React from "react";
import Link from "next/link";
import { servicesData } from "./ServicesContent";

const Services: React.FC = () => {
  return (
    <section className="w-full pb-12 | xl:pb-24">
      <div className="w-full px-4 | md:px-7">
        {/* Header */}
        <div className="grid grid-cols-12 overflow-hidden | lg:pt-5 | gap-y-3 | md:gap-y-7 gap-x-3 | md:gap-x-5 mb-10">
          <div className="col-span-12">
            <div className="grid grid-cols-12 md:border-b md:border-grey-200 md:pb-5 gap-y-3 | md:gap-y-7 gap-x-3 | md:gap-x-5 items-center">
              <div className="col-span-11 md:col-span-9 flex items-center">
                <h2 className="inline-flex flex-wrap text-balance relative pointer-fine:pr-1 pointer-fine:pb-2 flex flex-row items-center text-left justify-start text-grey-900 text-6xl/0.9 | md:text-7xl/none | lg:text-7xl/none | 2xl:text-8xl/0.9 | 4xl:text-8.5xl/0.9 font-sans-primary font-medium tracking-tight">
                  <span className="mr-4">Our</span>
                  <div
                    className="inline shrink-0 flex bg-black/5 relative overflow-hidden mr-4"
                    style={{
                      borderRadius: "15%",
                      width: "75px",
                      height: "55px",
                    }}
                  >
                    <img
                      src={servicesData.titleImage}
                      alt="Services deco"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span>Services</span>
                </h2>
              </div>
              <div className="col-span-12 | md:col-span-3 md:items-center md:justify-end hidden md:flex">
                <Link
                  href={servicesData.viewAllLink}
                  className="w-full group inline-flex shrink-0 justify-center gap-x-2 items-center relative leading-tight tracking-tightish capitalize font-sans-primary font-medium overflow-hidden border border-transparent cursor-pointer text-base px-6 py-3 rounded-3xl transition duration-300 pointer-fine:hover:rounded-xl bg-white text-grey-900 ring-1 ring-grey-900/5"
                >
                  <div className="relative overflow-hidden h-6">
                    <div className="transition transform pointer-fine:group-hover:-translate-y-6">
                      <span className="flex items-center gap-x-2">
                        View All Services
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
                        View All Services
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
              </div>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-12 gap-x-5">
          {servicesData.items.map((service, i) => (
            <div key={i} className="col-span-12 -my-px | md:col-span-6">
              <div className="group relative border-b border-grey-200">
                <Link
                  href={service.link}
                  className="grid grid-cols-1 relative z-10"
                >
                  <div className="col-start-1 row-start-1 relative z-20 py-6 | lg:py-8 flex items-center gap-3 text-black transition duration-500 | pointer-fine:group-hover:text-white">
                    {/* Mobile icon */}
                    <div className="inline-flex relative w-12 h-12 rounded-lg overflow-hidden | md:rounded-xl md:w-16 md:h-16 | pointer-fine:hidden">
                      <img
                        src={service.image}
                        className="w-full h-full object-cover"
                        alt={service.name}
                      />
                    </div>

                    <div className="pointer-fine:translate-x-10 transition-transform duration-500 flex items-center">
                      {/* Hover Arrow */}
                      <div className="relative mr-4 overflow-hidden w-0 pointer-fine:group-hover:w-12 transition-all duration-500">
                        <svg
                          className="w-10 h-10 rotate-45"
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
                      </div>
                      <div className="text-3xl/none | lg:text-4xl/none | xl:text-5xl/none | 3xl:text-6xl/none font-sans-primary font-medium tracking-tight">
                        {service.name}
                      </div>
                    </div>
                  </div>

                  {/* Hover Background Image Layer */}
                  <div className="col-start-1 row-start-1 relative rounded-full overflow-hidden z-10 transition-all duration-700 bg-black opacity-0 scale-90 | pointer-fine:group-hover:opacity-100 pointer-fine:group-hover:scale-100 pointer-fine:group-hover:rounded-none">
                    <div className="w-full h-full opacity-60 transition duration-1000 | pointer-fine:group-hover:scale-110">
                      <img
                        src={service.image}
                        className="w-full h-full object-cover"
                        alt={service.name}
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All button for mobile */}
        <div className="col-span-12 | md:hidden mt-10">
          <Link
            href={servicesData.viewAllLink}
            className="w-full group inline-flex shrink-0 justify-center gap-x-2 items-center relative leading-tight tracking-tightish capitalize font-sans-primary font-medium overflow-hidden border border-transparent cursor-pointer text-base px-6 py-3 rounded-3xl transition duration-300 pointer-fine:hover:rounded-xl bg-white text-grey-900 ring-1 ring-grey-900/5"
          >
            <span>View All Services</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
