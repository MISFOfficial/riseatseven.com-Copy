"use client";

import React from "react";

interface WorkTitleProps {
  title: string;
  year: string;
  isActive: boolean;
  onClick: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const WorkTitle: React.FC<WorkTitleProps> = ({
  title,
  year,
  isActive,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className={`relative transition-all duration-200 ease-out origin-left hover:translate-x-3`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <a className="flex items-start gap-x-2 transition-transform duration-500 cursor-pointer">
        <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-white text-6xl lg:text-7xl xl:text-[90px] font-sans-primary font-medium tracking-tighter leading-none">
          {title}
        </div>
        <div className="text-white text-xs font-medium mt-2">[{year}]</div>
      </a>
    </div>
  );
};

export default WorkTitle;
