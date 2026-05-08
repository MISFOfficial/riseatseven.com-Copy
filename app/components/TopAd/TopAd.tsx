import React from "react";

function TopAd() {
  return (
    <div className="group flex justify-center cursor-pointer z-50 lg:z-60 relative items-center text-xs w-full py-2 px-5 text-balance  text-center tracking-tight leading-none font-semibold rounded-2xl transition transition-rounded | lg:text-sm | pointer-fine:hover:rounded-md text-grey-900 bg-mint">
      <div className="block mt-0.5 | lg:hidden">
        🚨 The Category Leaderboard - Live Now
      </div>

      <div className="relative overflow-hidden mt-0.5 hidden | lg:block">
        <div className="transition | pointer-fine:group-hover:-translate-y-6">
          🚨 The Category Leaderboard - Live Now
        </div>
        <div className="transition absolute top-0 left-0 translate-y-6 | pointer-fine:group-hover:translate-y-0">
          🚨 The Category Leaderboard - Live Now
        </div>
      </div>
    </div>
  );
}

export default TopAd;
