"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { logoSliderData } from "./LogoSliderContent";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LogoSlider: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.to(containerRef.current, {
      xPercent: -5,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 100%",
        end: "bottom -100%",
        scrub: true,
      }
    });
  }, { scope: containerRef });

  return (
    <section className="w-full pt-6 | xl:pt-12 overflow-hidden">
      <div className="w-full px-4 | md:px-7">
        <div className="grid grid-cols-20 w-full gap-y-2">
          <div className="col-span-20 flex items-center | md:col-span-4 | lg:col-span-3 | xl:col-span-2">
            <h2 className="text-grey-900 text-sm font-sans-primary font-medium tracking-tight sm:max-w-32">
              The agency behind ...
            </h2>
          </div>

          <div className="relative w-full col-span-20 | md:col-span-16 | lg:col-span-17 | xl:col-span-18">
            <div ref={containerRef} className="w-[120vw] relative z-0">
              <Swiper
                modules={[Autoplay]}
                slidesPerView={3}
                speed={7000}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                  640: { slidesPerView: 2.5 },
                  768: { slidesPerView: 5 },
                  1024: { slidesPerView: 6 },
                  1440: { slidesPerView: 7.5 },
                  1920: { slidesPerView: 8.5 },
                }}
                className="!ease-linear"
              >
                {logoSliderData.map((logo, i) => (
                  <SwiperSlide key={i}>
                    <div className="w-20 py-5 relative | lg:w-24">
                      <img
                        src={logo}
                        alt="Client Logo"
                        className="w-full h-full object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
