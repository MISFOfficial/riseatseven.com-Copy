import React from "react";

function TopAd() {
  return (
    <a
      href=""
      className="group flex justify-center z-60 relative items-center text-xs w-full py-2 px-5 text-balance  text-center tracking-tight leading-none font-semibold rounded-2xl transition transition-rounded | lg:text-sm | pointer-fine:hover:rounded-md text-grey-900 bg-mint"
    >
      <div className="block mt-0.5 | lg:hidden tracking-[-0.035rem]">
        🚨 Where are your customers actually searching? Download the report
      </div>

      <div className="relative overflow-hidden mt-0.5 hidden | lg:block">
        <div className="transition | pointer-fine:group-hover:-translate-y-6 tracking-[-0.035rem]">
          🚨 Where are your customers actually searching? Download the report
        </div>
        <div className="transition absolute top-0 left-0 translate-y-6 | pointer-fine:group-hover:translate-y-0 tracking-[-0.035rem]">
          🚨 Where are your customers actually searching? Download the report
        </div>
      </div>
    </a>
  );
}

export default TopAd;
