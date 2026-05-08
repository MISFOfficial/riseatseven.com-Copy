import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

function InsightsMobile({
  setActiveMobileIndex,
  mobileSwiperRef,
  insightsData,
  totalMobile,
  activeMobileIndex,
}: any) {
  return (
    <div className="block lg:hidden px-2">
      <Swiper
        onSwiper={(swiper) => (mobileSwiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveMobileIndex(swiper.realIndex)}
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          768: {
            slidesPerView: 2.2,
          },
        }}
        loop={true}
        className="px-4 overflow-visible!"
      >
        {[...insightsData, ...insightsData].map((item, index) => (
          <SwiperSlide key={`${item.id}-mob-${index}`} className="py-2">
            <Link
              href={item.url}
              className="group flex flex-col gap-y-5 transition-transform duration-200 hover:-translate-y-2"
              style={{ cursor: "none" }}
              onMouseEnter={(e) => {
                window.dispatchEvent(
                  new CustomEvent("component-cursor-button", {
                    detail: { active: true, text: null },
                  }),
                );
                const overlay =
                  e.currentTarget.querySelector(".js-blur-overlay");
                gsap.to(overlay, {
                  clipPath: "circle(150% at 50% 100%)",
                  duration: 0.5,
                  ease: "power2.inOut",
                });
              }}
              onMouseLeave={(e) => {
                window.dispatchEvent(
                  new CustomEvent("component-cursor-button", {
                    detail: { active: false, text: null },
                  }),
                );
                const overlay =
                  e.currentTarget.querySelector(".js-blur-overlay");
                gsap.to(overlay, {
                  clipPath: "circle(0% at 50% 100%)",
                  duration: 0.5,
                  ease: "power2.inOut",
                });
              }}
            >
              <div className="relative aspect-square rounded-4xl lg:rounded-[3rem] overflow-hidden bg-white">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                {/* Circle blur overlay — GSAP animated from bottom center */}
                <div
                  className="js-blur-overlay absolute inset-0 z-10 backdrop-blur-xl"
                  style={{ clipPath: "circle(0% at 50% 100%)" }}
                />

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

      {/* Continuous line pagination bar — no breaks */}
      <div className="mx-auto mt-8 " style={{ width: "calc(100%)" }}>
        <div className="w-full h-[5px] bg-black/10 relative rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-grey-900 transition-all duration-300 rounded-full"
            style={{
              width: `${(((activeMobileIndex % totalMobile) + 1) / totalMobile) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default InsightsMobile;
