import React from "react";
import Link from "next/link";

interface CommontButtonProps {
  href?: string;
  label: string;
  isScrolled?: boolean;
  className?: string;
  variant?: "primary" | "secondary" | "white";
  onClick?: () => void;
}

function CommontButton({
  href,
  label,
  isScrolled,
  className = "",
  variant = "primary",
  onClick,
}: CommontButtonProps) {
  const baseStyles =
    "group inline-flex shrink-0 justify-center gap-x-2 items-center relative leading-tight tracking-tightish capitalize font-sans-primary font-medium overflow-hidden border border-transparent cursor-pointer focus:outline-none md:w-auto text-base px-6 py-3 rounded-3xl transition-all duration-300 pointer-fine:hover:rounded-xl";

  const colorVariants = {
    primary: "bg-grey-900 text-white",
    secondary: isScrolled ? "bg-grey-900 text-white" : "bg-white text-grey-900",
    white: "bg-white text-grey-900",
  };

  const content = (
    <div className="relative overflow-hidden">
      {/* First row — slides out up on hover */}
      <div className="flex items-center gap-x-2 transition duration-300 pointer-fine:group-hover:-translate-y-6">
        <span>{label}</span>
        <span className="inline-block text-xs mt-1">↗</span>
      </div>
      {/* Second row — slides in from below on hover */}
      <div className="flex items-center gap-x-2 transition duration-300 absolute top-0 left-0 translate-y-6 pointer-fine:group-hover:translate-y-0">
        <span>{label}</span>
        <span className="inline-block text-xs mt-1">↗</span>
      </div>
    </div>
  );

  const cls = `${baseStyles} ${colorVariants[variant]} ${className}`;

  if (href) {
    if (href.startsWith("http")) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      {content}
    </button>
  );
}

export default CommontButton;
