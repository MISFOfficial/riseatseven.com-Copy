"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface MegaMenuLinkProps {
  label: string;
  href: string;
}

const MegaMenuLink: React.FC<MegaMenuLinkProps> = ({ label, href }) => {
  const container = useRef<HTMLAnchorElement>(null);
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  const { contextSafe } = useGSAP({ scope: container });

  const onMouseEnter = contextSafe(() => {
    const tl = gsap.timeline();
    tl.to(text1Ref.current, {
      yPercent: -100,
      duration: 0.4,
      ease: "power3.inOut",
    }, 0);
    tl.fromTo(text2Ref.current, 
      { yPercent: 100 },
      {
        yPercent: 0,
        duration: 0.4,
        ease: "power3.out",
      },
      0.1
    );
  });

  const onMouseLeave = contextSafe(() => {
    const tl = gsap.timeline();
    tl.to(text1Ref.current, {
      yPercent: 0,
      duration: 0.4,
      ease: "power3.inOut",
    }, 0);
    tl.to(text2Ref.current, {
      yPercent: 100,
      duration: 0.4,
      ease: "power3.inOut",
    }, 0);
  });

  return (
    <a
      ref={container}
      href={href}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="inline-flex text-grey-900 font-medium tracking-tight leading-tight text-2xl relative overflow-hidden no-underline h-[1.2em]"
    >
      <span ref={text1Ref} className="relative block whitespace-nowrap">
        {label}
      </span>
      <span
        ref={text2Ref}
        className="absolute top-0 left-0 block whitespace-nowrap"
      >
        {label}
      </span>
    </a>
  );
};

export default MegaMenuLink;
