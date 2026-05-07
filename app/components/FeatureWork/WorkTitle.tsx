"use client";

import React from "react";

interface WorkTitleProps {
  title: string;
  year: string;
  isActive: boolean;
  onClick: () => void;
}

const WorkTitle: React.FC<WorkTitleProps> = ({
  title,
  year,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`relative transition-all duration-700 ease-out ${
        isActive
          ? "opacity-100 scale-100"
          : "opacity-20 scale-95 hover:opacity-40"
      }`}
      onClick={onClick}
    >
      <a className="flex items-start gap-x-2 transition-transform duration-500 cursor-pointer">
        <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-white text-6xl lg:text-7xl xl:text-8xl 3xl:text-9xl 4xl:text-[10rem] font-sans-primary font-medium tracking-tighter leading-none">
          {title}
        </div>
        <div className="text-white text-xs font-medium mt-2">[{year}]</div>
      </a>
    </div>
  );
};

export default WorkTitle;
