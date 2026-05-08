"use client";
import React, { useRef } from "react";
import { footerContent } from "./Content";
import Logo from "./Logo";
import FooterLink from "./FooterLink";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function Footer() {
  const { newsletter, socials, columns, bottom } = footerContent;
  const footerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start 95%", "start 40%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="w-full py-0 " id="footer" ref={footerRef}>
      <div className="w-full px-0">
        <div className=" grid bg-grey-900 rounded-3xl relative js-footer">
          <motion.div
            className="col-start-1 row-start-1 grid grid-cols-12 pt-14 pb-6 relative z-20 lg:py-10 px-4 md:px-7 gap-x-3 md:gap-x-5 gap-y-3 md:gap-y-7 js-footer-content"
            style={{ opacity }}
          >
            {/* Newsletter Section */}
            <div className="flex flex-col items-start justify-start col-span-12 mb-10 lg:mb-0 lg:col-span-4 gap-y-3 md:gap-y-5">
              <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-white text-2xl/none xl:text-3xl/none 4xl:text-4xl/none font-sans font-medium tracking-tight">
                {newsletter.title}
              </h2>

              <form method="post" className="w-full relative">
                <input
                  type="email"
                  required
                  name="fields[email]"
                  className="appearance-none transition bg-grey-400 rounded-full w-full text-white font-medium tracking-tight leading-none text-lg px-5 py-4 lg:text-xl lg:px-6 lg:py-5 placeholder:text-white/50 focus:outline-none focus:ring-3 focus:ring-white/15"
                  placeholder={newsletter.placeholder}
                />
                <div className="absolute top-0 right-0 p-2">
                  <button
                    type="submit"
                    className="size-9 bg-mint text-grey-900 text-md rounded-full flex items-center justify-center cursor-pointer transition lg:size-13 lg:text-lg hover:bg-white hover:rotate-90"
                  >
                    <span className="text-xl">↗</span>
                  </button>
                </div>
              </form>

              {/* Socials */}
              <div className="flex gap-1">
                {socials.map((social, i) => {
                  const IconMap: { [key: string]: React.ElementType } = {
                    FaFacebookF,
                    BsTwitterX,
                    FaLinkedinIn,
                    FaYoutube,
                    FaTiktok,
                    FaInstagram,
                  };
                  const Icon = IconMap[social.icon];

                  return (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-x-2.5 rounded-xl text-xs px-2 py-2 transition-all bg-white text-grey-900 hover:rounded-sm group"
                    >
                      <div className="inline-flex items-center">
                        {Icon ? <Icon size={14} /> : <span className="font-bold">{social.icon}</span>}
                      </div>
                      <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Links Columns */}
            <div className="flex justify-between col-span-12 flex-wrap md:flex-row md:col-span-11 lg:col-span-6 lg:col-start-6 gap-y-10">
              {columns.map((col, i) => (
                <div
                  key={i}
                  className="flex flex-col items-start gap-y-1.5 border-l border-white/20 pl-3 w-1/2 md:w-auto"
                >
                  {col.links.map((link, j) => (
                    <FooterLink key={j} label={link.label} href={link.href} />
                  ))}
                </div>
              ))}
            </div>

            {/* Logo SVG Section */}
            <Logo />

            {/* Bottom Row */}
            <div className="col-span-12 flex justify-between flex-col mt-10 items-end md:flex-row lg:items-center lg:mt-0 pt-2">
              <div className="flex gap-x-2 gap-y-2 flex-wrap items-center md:gap-3">
                <div className="text-white font-light leading-tight text-[10px] md:text-xs">
                  {bottom.copyright}
                </div>
                <div className="w-1 h-1 rounded-full bg-white inline-flex md:mt-0.5"></div>
                <div className="text-white font-light leading-tight text-[10px] md:text-xs">
                  {bottom.companyNumber}
                </div>
                <div className="w-1 h-1 rounded-full bg-white inline-flex md:mt-0.5"></div>
                <div className="text-white font-light leading-tight text-[10px] md:text-xs">
                  {bottom.vat}
                </div>
                <div className="w-1 h-1 rounded-full bg-white inline-flex md:mt-0.5"></div>
                {bottom.links.map((link, i) => (
                  <React.Fragment key={i}>
                    <a
                      href={link.href}
                      className="text-white font-light leading-tight text-[10px] md:text-xs hover:underline transition-all"
                    >
                      {link.label}
                    </a>
                    <div className="w-1 h-1 rounded-full bg-white inline-flex md:mt-0.5 last:hidden"></div>
                  </React.Fragment>
                ))}
              </div>
              <div className="w-full mt-1 md:ml-auto md:text-right lg:mt-0 lg:w-auto">
                <a
                  href="https://madebyshape.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-light leading-tight text-[10px] md:text-xs hover:underline transition-all"
                >
                  {bottom.credit}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
