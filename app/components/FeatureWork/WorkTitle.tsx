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
      className={`relative transition | js-heading-40 ${
        isActive ? "opacity-100" : "opacity-20 hover:opacity-50"
      }`}
      onClick={onClick}
    >
      <a
        className={`flex items-start gap-x-2 transition-transform duration-500 cursor-pointer`}
      >
        <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-white text-5xl/none | lg:text-6xl/none | xl:text-7xl/0.9 | 3xl:text-7.5xl/0.9 | 4xl:text-8xl/0.9 font-sans-primary font-medium tracking-tight js-heading">
          {title}
        </div>
        <div className="text-white text-xs font-medium mt-2">[{year}]</div>
      </a>
    </div>
  );
};

export default WorkTitle;
