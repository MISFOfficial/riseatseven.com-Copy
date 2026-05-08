"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "./NavLink";
import Logo from "./Logo";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
          transition={{
            duration: 0.5,
          }}
          exit={{
            opacity: 0,
            backdropFilter: "blur(0px)",
            transition: { duration: 0.3 },
          }}
          className="fixed inset-0 z-60 p-2 lg:hidden pointer-events-auto"
        >
          <div className="w-full h-full bg-grey-900/80 rounded-3xl px-3 py-2.5 flex flex-col items-start justify-between overflow-y-auto shadow-2xl">
            <div className="w-full grid gap-y-10">
              {/* Header in Menu */}
              <div className="w-full flex items-center justify-between ">
                <Logo />
                <button
                  onClick={onClose}
                  className="inline-flex items-center justify-center  h-8 text-white group"
                >
                  <div className="flex w-5 h-2 flex-col items-start justify-between">
                    <motion.div
                      initial={{ rotate: 0, y: 0 }}
                      animate={{ rotate: 45, y: 3.5 }}
                      exit={{ rotate: 0, y: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full h-0.5 bg-white"
                    />
                    <motion.div
                      initial={{ rotate: 0, y: 0 }}
                      animate={{ rotate: -45, y: -3.5 }}
                      exit={{ rotate: 0, y: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full h-0.5 bg-white"
                    />
                  </div>
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col items-start gap-y-1  ">
                {navLinks.map((menu) => (
                  <div key={menu.id} className="w-full">
                    <div className="flex items-center justify-between">
                      <a
                        href={menu.href}
                        className="text-white text-4xl tracking-tight font-medium leading-none md:text-5xl hover:text-mint transition-colors"
                      >
                        {menu.label}
                      </a>
                      {menu.items && (
                        <div className="w-12 bor flex items-center justify-end">
                          <button
                            onClick={() => toggleAccordion(menu.id)}
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs border border-white border-solid transition duration-500 ${
                              activeAccordion === menu.id
                                ? "rotate-180"
                                : "rotate-0"
                            }`}
                          >
                            <svg
                              className="w-3 h-3 fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                            </svg>
                          </button>
                        </div>
                      )}
                    </div>
                    <AnimatePresence>
                      {menu.items && activeAccordion === menu.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="grid gap-y-1 py-4">
                            {menu.items.map((sub) => (
                              <a
                                key={sub}
                                href="#"
                                className="text-white text-xl font-medium tracking-tight hover:text-mint transition-colors"
                              >
                                {sub}
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer in Menu */}
            <div className="w-full">
              <a
                href="/connect-with-us"
                className="w-full group inline-flex shrink-0 justify-center gap-x-2 items-center relative leading-tight tracking-tightish capitalize font-sans font-medium overflow-hidden px-6 py-3 rounded-3xl bg-white text-grey-900 transition-all hover:rounded-xl hover:bg-mint flex-row-reverse"
              >
                <div className="relative overflow-hidden">
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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
