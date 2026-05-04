import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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
    "group inline-flex shrink-0 justify-center gap-x-2 items-center relative leading-tight tracking-tightish capitalize font-sans font-medium overflow-hidden border border-transparent cursor-pointer focus:outline-none md:w-auto text-base px-6 py-3 rounded-full hover:rounded-xl transition-all duration-200";

  const variants = {
    primary: "bg-grey-900 text-white hover:bg-black",
    secondary: isScrolled
      ? "bg-grey-900 text-white hover:bg-black"
      : "bg-white text-grey-900 hover:bg-grey-100",
    white: "bg-white text-grey-900 hover:bg-grey-100",
  };

  const content = (
    <div className="relative overflow-hidden h-6">
      <motion.div
        className="flex flex-col"
        initial={false}
        animate={{ y: 0 }}
        whileHover={{ y: -24 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <div className="flex items-center gap-x-2 h-6">
          <span>{label}</span>
          <span className="inline-block text-xs mt-1">↗</span>
        </div>
        <div className="flex items-center gap-x-2 h-6">
          <span>{label}</span>
          <span className="inline-block text-xs mt-1">↗</span>
        </div>
      </motion.div>
    </div>
  );

  if (href) {
    if (href.startsWith("http")) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseStyles} ${variants[variant]} ${className}`}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {content}
    </button>
  );
}

export default CommontButton;
