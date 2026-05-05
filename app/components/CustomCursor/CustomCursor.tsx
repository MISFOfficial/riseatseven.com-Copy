"use client";

import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState<{
    active: boolean;
    text: string | null;
  }>({ active: false, text: null });

  const xTo = useRef<any>(null);
  const yTo = useRef<any>(null);

  useGSAP(
    () => {
      xTo.current = gsap.quickTo(cursorRef.current, "x", {
        duration: 0.1,
        ease: "power3",
      });
      yTo.current = gsap.quickTo(cursorRef.current, "y", {
        duration: 0.1,
        ease: "power3",
      });
    },
    { scope: cursorRef },
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (xTo.current && yTo.current) {
        xTo.current(e.clientX);
        yTo.current(e.clientY);
      }
    };

    const handleCursorEvent = (e: any) => {
      const { active, text } = e.detail;
      setCursorState({ active, text });

      // Animate scale on state change
      gsap.to(cursorRef.current, {
        scale: active ? 1 : 0,
        opacity: active ? 1 : 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener(
      "component-cursor-button",
      handleCursorEvent as any,
    );

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener(
        "component-cursor-button",
        handleCursorEvent as any,
      );
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-9999 flex items-center justify-center rounded-full bg-mint text-grey-900 font-semibold text-center px-7 py-3 scale-0 opacity-0 "
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <span className="whitespace-nowrap flex items-center gap-2 text-sm lg:text-md">
        {cursorState.text}
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </span>
    </div>
  );
};

export default CustomCursor;
