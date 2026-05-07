"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const insightsData = [
  {
    id: 2,
    title:
      "Rise at Seven Appointed by Coneys to Drive Demand and Retail Growth for them in the Chocolate Confectionery Category",
    category: "Food/Hospitality/Drink",
    author: "Ray Saddiq",
    authorImg: "/rise_files/Noomz1-4.jpg",
    readTime: "2 mins",
    image: "/rise_files/Noomz1-4.jpg",
    url: "#",
  },
  {
    id: 1,
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
    category: "News",
    author: "Carrie Rose",
    authorImg: "/rise_files/3-copy.jpg",
    readTime: "2 mins",
    image: "/rise_files/3-copy.jpg",
    url: "#",
  },
  {
    id: 3,
    title:
      "Rise at Seven Appointed by Langtins to drive demand and retail growth for Noomz",
    category: "Food/Hospitality/Drink",
    author: "Carrie Rose",
    authorImg: "/rise_files/3-copy.jpg",
    readTime: "2 mins",
    image: "/rise_files/Noomz1-4.jpg",
    url: "#",
  },
];

const Insights: React.FC = () => {
  return (
    <section className="bg-grey-100 py-16 md:py-24 overflow-hidden">
      <div className="grid grid-cols-12 gap-y-7 md:gap-y-12 px-4 md:px-7">
        {/* Header Section */}
        <div className="col-span-12">
          <div className="grid grid-cols-12 md:border-b md:border-grey-200 md:pb-8 gap-x-5 items-end">
            <div className="col-span-12 md:col-span-9">
              <h2 className="flex flex-wrap items-center text-grey-900 text-6xl md:text-8xl lg:text-9xl font-sans-primary font-medium tracking-tight leading-[0.9]">
                <span>What&apos;s</span>
                <div className="mx-4 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-[15%] overflow-hidden relative bg-black/5">
                  <Image
                    src="/rise_files/3-copy.jpg"
                    alt="New"
                    fill
                    className="object-cover"
                  />
                </div>
                <span>New</span>
              </h2>
            </div>

            <div className="hidden md:flex col-span-3 justify-end pb-2">
              <Link
                href="/blog/"
                className="group relative bg-white text-grey-900 px-7 py-3 rounded-full border border-transparent hover:rounded-xl transition-all duration-500 overflow-hidden shadow-sm"
              >
                <div className="flex flex-col relative h-5 overflow-hidden">
                  <div className="flex items-center gap-x-2 transition-transform duration-500 group-hover:-translate-y-full">
                    <span className="text-sm font-medium">
                      Explore More Thoughts
                    </span>
                    <span className="text-xs mt-0.5 tracking-tight">↗</span>
                  </div>
                  <div className="absolute top-full flex items-center gap-x-2 transition-transform duration-500 group-hover:-translate-y-full">
                    <span className="text-sm font-medium">
                      Explore More Thoughts
                    </span>
                    <span className="text-xs mt-0.5 tracking-tight">↗</span>
                  </div>
                </div>
              </Link>
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
                  className="group flex flex-col gap-y-5 transition-transform duration-500 hover:-translate-y-2"
                >
                  <div className="relative aspect-square rounded-4xl lg:rounded-[3rem] overflow-hidden bg-white">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-all duration-1000 ease-out group-hover:scale-105 group-hover:blur-md"
                    />

                    {/* Centered Explore Circle */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-[#a2f2df] rounded-full flex items-center justify-center shadow-xl scale-50 group-hover:scale-100 transition-transform duration-500 ease-out">
                        <span className="text-2xl md:text-3xl text-grey-900 font-medium">
                          ↗
                        </span>
                      </div>
                    </div>

                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] md:text-xs font-medium text-white tracking-tight z-10">
                      {item.category}
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
          <Link
            href="/blog/"
            className="w-full bg-white text-grey-900 px-6 py-4 rounded-full border border-grey-200 flex justify-center items-center gap-x-2 text-sm font-medium"
          >
            Explore More Thoughts ↗
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Insights;
