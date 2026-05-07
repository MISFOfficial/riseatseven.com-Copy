"use client";

import React, { useRef, useState } from "react";
import { legacyData } from "./LegacyContent";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

const LegacyMobileSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const total = legacyData.items.length;

  return (
    <section className="w-full py-12">
      {/* Section Title */}
      <div className="w-full text-center mb-8">
        <h2 className="text-grey-900 text-xl font-sans-primary font-semibold tracking-[-1.5px]">
          {legacyData.title}
        </h2>
      </div>

      {/* Swiper */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        slidesPerView={1.08}
        centeredSlides={true}
        spaceBetween={14}
        className="w-full"
      >
        {legacyData.items.map((item, i) => (
          <SwiperSlide key={i}>
            <div
              className={`flex flex-col rounded-3xl overflow-hidden ${item.bgColor} ${item.textColor} shadow-xl`}
            >
              {/* Wide rectangular image — matches screenshots */}
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text content */}
              <div className="flex flex-col items-center text-center px-6 py-8 gap-y-4">
                <h3 className="text-4xl font-sans-primary font-medium tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-90 max-w-xs">
                  {item.content}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Continuous line pagination bar — no breaks */}
      <div className="w-full px-12 mt-8">
        <div className="w-full h-[3px] bg-black/10 relative rounded-full overflow-hidden">
          <div
            className="absolute top-0 h-full bg-grey-900 transition-all duration-300 rounded-full"
            style={{
              width: `${100 / total}%`,
              left: `${(activeIndex / total) * 100}%`,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default LegacyMobileSlider;
