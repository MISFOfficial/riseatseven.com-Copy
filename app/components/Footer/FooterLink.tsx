"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface FooterLinkProps {
  label: string;
  href: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ label, href }) => {
  const container = useRef<HTMLAnchorElement>(null);
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  const { contextSafe } = useGSAP({ scope: container });

  const onMouseEnter = contextSafe(() => {
    gsap.to(text1Ref.current, {
      yPercent: -100,
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
      overwrite: true,
    });

    gsap.fromTo(
      text2Ref.current,
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        color: "#b2f6e3",
        duration: 0.3,
        ease: "power2.out",
        overwrite: true,
        delay: 0.05,
      },
    );
  });

  const onMouseLeave = contextSafe(() => {
    gsap.to(text1Ref.current, {
      yPercent: 0,
      opacity: 1,
      duration: 0.3,
      ease: "power2.inOut",
      overwrite: true,
    });

    gsap.to(text2Ref.current, {
      yPercent: 100,
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
      overwrite: true,
    });
  });

  return (
    <a
      ref={container}
      href={href}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="inline-flex text-white font-medium tracking-tight leading-tight text-lg lg:text-xl relative overflow-hidden no-underline"
      style={{ padding: "0.1em 0" }}
    >
      {/* Primary Text Layer */}
      <span ref={text1Ref} className="relative block whitespace-nowrap">
        {label}
      </span>

      {/* Animated Hover Layer (Mint) */}
      <span
        ref={text2Ref}
        className="absolute top-0 left-0 block whitespace-nowrap opacity-0"
        style={{ color: "#b2f6e3" }}
      >
        {label}
      </span>
    </a>
  );
};

export default FooterLink;
