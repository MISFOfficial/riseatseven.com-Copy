import React from "react";
import Link from "next/link";
import { servicesData } from "./ServicesContent";
import CommontButton from "../Navigation/CommontButton";
import Image from "next/image";

const Services: React.FC = () => {
  return (
    <section className="w-full pb-12 | xl:pb-24">
      <div className="w-full pr-4 pl-0 | md:px-7">
        {/* Header */}
        <div className="grid grid-cols-12 overflow-hidden | lg:pt-5 | gap-y-3 | md:gap-y-7 gap-x-3 | md:gap-x-5 mb-10">
          <div className="col-span-12">
            <div className="grid grid-cols-12 md:border-b md:border-grey-200 md:pb-5 gap-y-3 | md:gap-y-7 gap-x-3 | md:gap-x-5 items-center">
              <div className="col-span-11 md:col-span-9 flex items-center">
                <h2 className="flex flex-wrap text-balance relative pointer-fine:pr-1 pointer-fine:pb-2  flex-row items-center text-left justify-start text-grey-900 text-5xl | md:text-6xl | lg:text-7xl | 2xl:text-8xl | 4xl:text-8.5xl font-sans-primary font-medium tracking-tight">
                  <span className="mr-4">Our</span>
                  <div
                    className=" shrink-0 flex bg-black/5 relative overflow-hidden mr-4"
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
                <CommontButton
                  href={servicesData.viewAllLink}
                  label="View All Services"
                  variant="white"
                  className="ring-1 ring-grey-900/5"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-12 gap-x-5">
          {servicesData.items.map((service, i) => (
            <div key={i} className="col-span-12 -my-px | md:col-span-6">
              <div className="relative border-b border-grey-200">
                <Link
                  href={service.link}
                  className="group relative inline-flex items-center w-full"
                >
                  {/* Hover Pill Background */}
                  <div className="absolute inset-0 rounded-full overflow-hidden z-10 transition-all duration-200 bg-black opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100">
                    <div className="w-full h-full opacity-60 transition duration-1000 group-hover:scale-110">
                      <Image
                        fill
                        src={service.image}
                        className="w-full h-full object-cover"
                        alt={service.name}
                      />
                    </div>
                  </div>

                  {/* Content Layer */}
                  <div className="relative z-20 py-3 | lg:py-6 pr-6 pl-0 md:px-6 flex items-center text-black  transition duration-500 group-hover:text-white">
                    {/* Mobile-only thumbnail image */}
                    <div className="shrink-0 w-12 h-12 rounded-lg overflow-hidden mr-4 md:hidden">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Arrow (Visible on Hover) */}
                    <div className="relative mr-2 overflow-hidden w-0 group-hover:w-8 transition-all duration-500 ease-out">
                      <span className="text-3xl inline-block">↗</span>
                    </div>

                    <div className="text-3xl | lg:text-4xl | xl:text-6xl font-sans-primary font-semibold tracking-tight whitespace-nowrap">
                      {service.name}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All button for mobile */}
        <div className="col-span-12 | md:hidden mt-10">
          <CommontButton
            href={servicesData.viewAllLink}
            label="View All Services"
            variant="white"
            className="w-full ring-1 ring-grey-900/5"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
