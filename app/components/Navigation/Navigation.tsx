"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";
import { navLinks } from "./NavLink";

function Navigation() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [megaMenu, setMegaMenu] = useState<string | null>(null);
  const [hideHeader, setHideHeader] = useState(false);
  const [hideHeaderBackground, setHideHeaderBackground] = useState(true);
  const [hideAnnouncementBar, setHideAnnouncementBar] = useState(false);

  const [hoverStyles, setHoverStyles] = useState({
    opacity: 0,
    left: 0,
    width: 0,
  });
  const linksContainerRef = useRef<HTMLDivElement>(null);

  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Close mega menu on scroll
      setMegaMenu(null);

      // Announcement bar toggle
      setHideAnnouncementBar(currentScrollY > 20);

      // Header background toggle
      setHideHeaderBackground(currentScrollY < 100);

      // Scroll direction for header hide/show
      if (currentScrollY > prevScrollY.current && currentScrollY > 100) {
        setHideHeader(true); // Scrolling down
      } else {
        setHideHeader(false); // Scrolling up
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock
  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenu]);

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    const target = e.currentTarget;
    const container = linksContainerRef.current;

    // Set mega menu
    if (["services", "international", "about"].includes(id.toLowerCase())) {
      setMegaMenu(id.toLowerCase());
    } else {
      setMegaMenu(null);
    }

    if (container) {
      const containerRect = container.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      setHoverStyles({
        opacity: 1,
        left: targetRect.left - containerRect.left,
        width: targetRect.width,
      });
    }
  };

  const handleMouseLeave = () => {
    // We don't clear megaMenu here immediately to allow moving mouse into the mega menu itself
    // But we clear hover styles for the pill if not over a mega menu link
  };

  const clearInteractions = () => {
    setMegaMenu(null);
    setHoverStyles((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 z-50 flex items-center justify-between px-4 transition-all duration-500 lg:px-6 lg:py-3 ${
          hideHeader ? "-translate-y-full" : "translate-y-0"
        } ${
          !hideHeaderBackground
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div
          className={`w-full flex items-center justify-between transition-transform duration-500 ${
            hideAnnouncementBar
              ? "translate-y-0"
              : "translate-y-4 lg:translate-y-0"
          }`}
        >
          {/* Logo */}
          <a
            href="/"
            className={`flex w-32 md:w-40 transition-colors duration-300 ${
              hideHeaderBackground ? "text-white" : "text-grey-900"
            }`}
          >
            <div className="aspect-[4/3] text-current w-full">
              <svg
                className="w-full h-full object-contain fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 168 21"
              >
                <path d="M91.3152 5.40061C91.3152 3.94241 92.5306 2.67359 93.9881 2.67359C95.7162 2.67359 96.797 3.83419 96.797 5.56225H99.7127C99.7127 2.1873 97.3096 0 93.9874 0C90.9371 0 88.3988 2.32257 88.3988 5.42766C88.3988 9.31596 90.883 10.2344 93.9874 11.4221C95.6627 12.07 97.2007 12.5563 97.2007 14.6895C97.2007 16.634 95.9867 18.0651 93.9874 18.0651C91.8813 18.0651 90.7477 16.3905 90.7477 14.446H87.832C87.832 18.0651 90.3426 20.7381 93.9874 20.7381C97.6323 20.7381 100.118 18.2816 100.118 14.6895C100.118 7.10161 91.3145 9.64061 91.3145 5.40061H91.3152Z"></path>
                <path d="M109.209 4.99609C104.834 4.99609 101.539 8.53405 101.539 12.8539C101.539 17.1737 104.888 20.738 109.155 20.738C112.422 20.738 115.203 18.713 116.337 15.662H113.529C112.718 17.2278 111.017 18.1733 109.262 18.1733C106.806 18.1733 104.915 16.4182 104.348 14.0963H116.743C116.797 13.6371 116.823 13.1508 116.823 12.6922C116.823 8.47926 113.447 4.99609 109.209 4.99609ZM104.348 11.9361C104.509 9.47823 106.751 7.56147 109.181 7.56147C111.611 7.56147 113.853 9.47823 114.014 11.9361H104.348Z"></path>
                <path d="M127.476 5.40039L123.575 16.0941L119.673 5.40039H116.676L122.617 20.3598H124.588L130.475 5.40039H127.476Z"></path>
                <path d="M137.942 4.99609C133.567 4.99609 130.273 8.53405 130.273 12.8539C130.273 17.1737 133.621 20.738 137.888 20.738C141.155 20.738 143.936 18.713 145.071 15.662H142.262C141.453 17.2278 139.75 18.1733 137.996 18.1733C135.538 18.1733 133.649 16.4182 133.081 14.0963H145.476C145.53 13.6371 145.556 13.1508 145.556 12.6922C145.556 8.47926 142.182 4.99609 137.942 4.99609ZM133.081 11.9361C133.243 9.47823 135.484 7.56147 137.915 7.56147C140.347 7.56147 142.586 9.47823 142.749 11.9361H133.081Z"></path>
                <path d="M147.473 8.21195V8.69013V20.3618H150.032V10.1815L167.216 20.3618V17.2405L147.473 5.40039V8.21195Z"></path>
                <path d="M67.8431 7.50804H67.789C66.6818 5.80635 64.7103 4.99609 62.713 4.99609C58.1775 4.99609 54.7734 8.3981 54.7734 12.935C54.7734 17.4719 58.2296 20.7387 62.713 20.7387C64.7651 20.7387 66.7359 19.8473 67.789 18.0387H67.8431V20.3606H70.652V5.40122H67.8431V7.50804ZM62.686 18.1733C59.823 18.1733 57.5823 15.7168 57.5823 12.9073C57.5823 10.0978 59.7425 7.56079 62.7124 7.56079C65.6822 7.56079 67.8972 9.90973 67.8972 12.9073C67.8972 15.9048 65.6024 18.1733 62.6867 18.1733H62.686Z"></path>
                <path d="M77.5832 0.378906H74.7736V5.40144H72.75V7.96681H74.7736V20.3608H77.5832V7.96681H80.0403V5.40144H77.5832V0.378906Z"></path>
                <path d="M18.3089 0.378906H15.5V3.2953H18.3089V0.378906Z"></path>
                <path d="M18.3089 5.02344H15.5V19.9828H18.3089V5.02344Z"></path>
                <path d="M25.8409 10.7205C24.8142 10.3959 23.5183 10.0996 23.5183 8.77603C23.5183 7.77639 24.3279 7.18256 25.2728 7.18256C26.4077 7.18256 27.0549 7.91166 27.1895 8.99178H29.9984C29.9443 6.39935 27.9727 4.61719 25.4087 4.61719C22.8447 4.61719 20.7088 6.3723 20.7088 8.93767C20.7088 14.2307 27.5412 12.6102 27.5412 15.743C27.5412 17.0389 26.6227 17.7951 25.381 17.7951C23.707 17.7951 22.9516 16.6074 22.8427 15.0681H20.0352C20.0352 17.417 21.1951 19.2269 23.4094 20.0094C24.0303 20.2252 24.6789 20.3604 25.3262 20.3604C28.1892 20.3604 30.3494 18.5248 30.3494 15.5807C30.3494 12.6366 28.296 11.476 25.8402 10.7205H25.8409Z"></path>
                <path d="M39.3637 4.61719C34.9891 4.61719 31.6953 8.15514 31.6953 12.475C31.6953 16.7948 35.0432 20.3591 39.3096 20.3591C42.577 20.3591 45.3581 18.3341 46.493 15.2831H43.6842C42.8746 16.8489 41.1722 17.7944 39.4178 17.7944C36.96 17.7944 35.0709 16.0393 34.5028 13.7174H46.8975C46.9516 13.2582 46.978 12.7719 46.978 12.3133C46.978 8.10036 43.6037 4.61719 39.3637 4.61719ZM34.5028 11.5565C34.6651 9.09864 36.9059 7.18188 39.3373 7.18188C41.7688 7.18188 44.0075 9.09932 44.1705 11.5565H34.5028Z"></path>
                <path d="M9.55945 12.1512C12.1519 11.2327 13.3395 9.09953 13.3395 6.39957C13.3395 4.67151 12.7728 2.88934 11.5046 1.67395C10.0998 0.297591 8.07419 0 6.18314 0H0V19.9826H2.91572V13.8069L13.3389 19.9826V16.8606L6.22575 12.5949L7.61496 12.5293C8.26222 12.5293 8.96359 12.3676 9.55809 12.1512H9.55945ZM4.91499 10.3156H2.91572V2.67359H5.99444C8.317 2.67359 10.4231 3.86192 10.4231 6.40024C10.4231 9.5865 7.50742 10.3156 4.91499 10.3156Z"></path>
                <path d="M164.759 7.94414L166.061 8.71517V8.08955L165.395 7.69051C165.437 7.68172 165.48 7.66954 165.521 7.65466C165.869 7.53157 166.061 7.24209 166.061 6.84034C166.061 6.57725 165.966 6.33579 165.801 6.17753C165.583 5.9638 165.277 5.93945 165.065 5.93945H164.191V8.63807H164.758V7.94346L164.759 7.94414ZM164.908 7.22856H164.76V6.47715H165.043C165.261 6.47715 165.495 6.57251 165.495 6.84102C165.495 7.10953 165.297 7.22856 164.908 7.22856H164.908Z"></path>
                <path d="M165.127 10.1622C166.714 10.1622 168 8.87583 168 7.28913C168 5.70242 166.714 4.41602 165.127 4.41602C163.54 4.41602 162.254 5.70242 162.254 7.28913C162.254 8.87583 163.54 10.1622 165.127 10.1622ZM165.127 5.22763C166.264 5.22763 167.189 6.15219 167.189 7.28913C167.189 8.42606 166.264 9.35062 165.127 9.35062C163.99 9.35062 163.066 8.42606 163.066 7.28913C163.066 6.15219 163.99 5.22763 165.127 5.22763Z"></path>
              </svg>
            </div>
          </a>

          {/* Desktop Links */}
          <div
            ref={linksContainerRef}
            className="relative ml-10 hidden lg:inline-flex items-center"
            onMouseLeave={handleMouseLeave}
          >
            {/* Hover Pill Background */}
            <motion.div
              initial={false}
              animate={{
                opacity: hoverStyles.opacity,
                left: hoverStyles.left,
                width: hoverStyles.width,
              }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="bg-grey-50 z-0 h-8 rounded-full absolute pointer-events-none"
            />

            {navLinks.map((item) => (
              <div key={item.id} className="z-10 relative">
                <a
                  href={item.href}
                  onMouseEnter={(e) => handleMouseEnter(e, item.id)}
                  className={`group inline-flex tracking-tight leading-tight py-1 font-medium relative duration-300 px-4 hover:text-grey-900 ${
                    hideHeaderBackground ? "text-white" : "text-grey-900"
                  }`}
                >
                  {item.label}
                  {item.hasPlus && (
                    <span className="hidden ml-1 pointer-events-none lg:inline">
                      +
                    </span>
                  )}
                  {item.badge && (
                    <div className="inline-flex pointer-events-none absolute top-0 right-0 -translate-y-2.5 rounded-full px-1.5 py-0.5 text-[10px] font-thin transition group-hover:-translate-y-4 bg-mint text-grey-900">
                      {item.badge}
                    </div>
                  )}
                </a>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:inline-flex">
            <a
              href="/connect-with-us"
              className={`w-full group inline-flex shrink-0 justify-center gap-x-2 items-center relative leading-tight tracking-tightish capitalize font-sans font-medium overflow-hidden border border-transparent cursor-pointer focus:outline-none md:w-auto text-base px-6 py-3 rounded-3xl transition-all duration-300 hover:rounded-xl ${
                hideHeaderBackground
                  ? "bg-white text-grey-900"
                  : "bg-grey-900 text-white"
              }`}
            >
              <div className="relative overflow-hidden h-6">
                <div className="transition group-hover:-translate-y-6 flex items-center gap-x-2">
                  <span>Get in touch</span>
                  <span className="inline-block text-xs mt-1">↗</span>
                </div>
                <div className="transition absolute top-0 left-0 translate-y-6 group-hover:translate-y-0 flex items-center gap-x-2">
                  <span>Get in touch</span>
                  <span className="inline-block text-xs mt-1">↗</span>
                </div>
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              className="inline-flex items-center justify-center w-12 h-8"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              <div className="flex w-5 h-2 flex-col items-start justify-between">
                <div
                  className={`w-full h-0.5 transition-transform duration-500 transform ${
                    mobileMenu ? "rotate-45 translate-y-1.5" : "rotate-0"
                  } ${hideHeaderBackground ? "bg-white" : "bg-grey-900"}`}
                ></div>
                <div
                  className={`w-full h-0.5 transition-transform duration-500 transform ${
                    mobileMenu ? "-rotate-45 -translate-y-1.5" : "rotate-0"
                  } ${hideHeaderBackground ? "bg-white" : "bg-grey-900"}`}
                ></div>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mega Menu Content */}
      <AnimatePresence>
        {megaMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onMouseLeave={clearInteractions}
            className="fixed top-[64px] lg:top-[72px] left-0 w-full z-40 bg-white border-t border-grey-100 shadow-xl"
          >
            <div className="max-w-7xl mx-auto px-6 py-12">
              <div className="grid grid-cols-4 gap-8">
                <div className="col-span-1">
                  <h3 className="text-xs font-bold text-grey-400 uppercase tracking-widest mb-4">
                    {megaMenu}
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#"
                        className="text-xl font-medium text-grey-900 hover:text-navy transition-colors"
                      >
                        All {megaMenu}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-xl font-medium text-grey-900 hover:text-navy transition-colors"
                      >
                        Latest Work
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-span-3">
                  <div className="aspect-21/9 bg-grey-50 rounded-2xl flex items-center justify-center text-grey-300 overflow-hidden relative">
                    <span className="text-sm font-medium z-10">
                      Premium Content Placeholder
                    </span>
                    <div className="absolute inset-0 bg-linear-to-br from-mint/10 to-navy/10" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interaction Overlay */}
      {megaMenu && (
        <div
          className="fixed inset-0 z-30 pointer-events-auto"
          onMouseEnter={clearInteractions}
        />
      )}

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={mobileMenu} onClose={() => setMobileMenu(false)} />
    </>
  );
}

export default Navigation;
