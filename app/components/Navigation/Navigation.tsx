"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";
import { navLinks } from "./NavLink";
import MegaMenuLink from "./MegaMenuLink";
import Logo from "./Logo";
import Link from "next/link";
import CommontButton from "./CommontButton";

function Navigation() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [megaMenu, setMegaMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hideAnnouncementBar, setHideAnnouncementBar] = useState(false);
  const [isInFeatureWork, setIsInFeatureWork] = useState(false);

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

      // Scroll state
      setIsScrolled(currentScrollY > 50);

      // Detect Featured Work section
      const featuredSection = document.getElementById("featured-work-section");
      if (featuredSection) {
        const rect = featuredSection.getBoundingClientRect();
        // If the section is currently in view (top is above viewport top and bottom is still visible)
        setIsInFeatureWork(rect.top < 100 && rect.bottom > 0);
      } else {
        setIsInFeatureWork(false);
      }

      // Hide/Show on scroll direction
      if (currentScrollY > 100 && currentScrollY > prevScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
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
        className={`w-full fixed top-0 left-0 z-50 flex items-center justify-center transition-all duration-500 ${
          isScrolled ? "p-0 md:p-3" : "px-6 py-17"
        } ${isVisible && !isInFeatureWork ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div
          className={`w-full max-w-8xl flex items-center justify-between transition-all duration-500 ${isScrolled ? "bg-white/80 backdrop-blur-sm px-4 lg:px-3 py-6 md:py-1.5  md:rounded-full shadow-sm" : ""}`}
        >
          {/* Logo */}
          <Logo isScrolled={isScrolled} />
          {/* Desktop Links */}
          <div
            ref={linksContainerRef}
            className="relative  hidden lg:inline-flex items-center"
            onMouseLeave={handleMouseLeave}
          >
            {navLinks.map((item) => (
              <div key={item.id} className="z-10 relative">
                <a
                  href={item.href}
                  onMouseEnter={(e) => handleMouseEnter(e, item.id)}
                  className={`group inline-flex tracking-tight leading-tight  font-semibold relative duration-300 px-4 transition-colors ${
                    isScrolled
                      ? "text-grey-900 hover:text-black"
                      : "text-white hover:text-grey-300"
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
            <CommontButton
              href="/connect-with-us"
              label="Get in touch"
              isScrolled={isScrolled}
              variant="secondary"
            />
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
                  } ${!isScrolled ? "bg-white" : "bg-grey-900"}`}
                ></div>
                <div
                  className={`w-full h-0.5 transition-transform duration-500 transform ${
                    mobileMenu ? "-rotate-45 -translate-y-1.5" : "rotate-0"
                  } ${!isScrolled ? "bg-white" : "bg-grey-900"}`}
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
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onMouseLeave={clearInteractions}
            className="fixed top-[70px] left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-40 bg-white rounded-[32px] shadow-2xl overflow-hidden p-8 lg:p-10"
          >
            {(() => {
              const activeLink = navLinks.find((l) => l.id === megaMenu);
              if (!activeLink) return null;

              return (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  {/* Left Side: Links */}
                  <div className="lg:col-span-7">
                    <h3 className="text-xs font-bold text-grey-400 uppercase tracking-widest mb-8">
                      Core {activeLink.label}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      {activeLink.items?.map((sub) => (
                        <MegaMenuLink key={sub} label={sub} href="#" />
                      ))}
                    </div>
                  </div>

                  {/* Right Side: Image Card */}
                  <div className="lg:col-span-5 relative group cursor-pointer overflow-hidden rounded-2xl aspect-4/3">
                    {activeLink.image && (
                      <img
                        src={activeLink.image}
                        alt={activeLink.label}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-40" />
                    <div className="absolute bottom-6 left-6 right-6 flex justify-center">
                      <CommontButton
                        href="/#"
                        label="Get in touch"
                        variant="white"
                      />
                    </div>
                  </div>
                </div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interaction Overlay */}
      <AnimatePresence>
        {megaMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
            className="fixed inset-0 z-30 pointer-events-auto overflow-hidden"
            onMouseEnter={clearInteractions}
          >
            {(() => {
              const activeLink = navLinks.find((l) => l.id === megaMenu);
              if (!activeLink?.image) return null;
              return (
                <motion.div
                  key={activeLink.image}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0 }}
                  className="absolute inset-0"
                >
                  <img
                    src={activeLink.image}
                    alt=""
                    className="w-full h-full object-cover blur-[80px] opacity-40 brightness-50"
                  />
                </motion.div>
              );
            })()}
            <div className="absolute inset-0 bg-black/10 backdrop-blur-[15px]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={mobileMenu} onClose={() => setMobileMenu(false)} />
    </>
  );
}

export default Navigation;
