"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PageReveal() {
  const ellipseRef = useRef<SVGEllipseElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ellipseRef.current && containerRef.current) {
      // Set initial state
      gsap.set(ellipseRef.current, {
        attr: { rx: 0, ry: 0 },
      });

      // Animate reveal
      gsap.to(ellipseRef.current, {
        attr: { rx: 2700, ry: 2150 },
        duration: 1.25,
        ease: "power2.out",
        onComplete: () => {
          if (containerRef.current) {
            containerRef.current.style.display = "none";
          }
        },
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-screen h-svh z-100 pointer-events-none overflow-hidden hidden lg:block"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
        className="block w-screen h-svh"
      >
        <defs>
          <mask id="circle-reveal-mask">
            <rect width="100%" height="100%" fill="white" />
            <ellipse
              ref={ellipseRef}
              cx="960"
              cy="2000"
              rx="0"
              ry="0"
              fill="black"
            />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="var(--mask-colour, #b2f6e3)"
          mask="url(#circle-reveal-mask)"
        />
      </svg>
    </div>
  );
}
