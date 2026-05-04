import React from "react";
import Footer from "./components/Footer/Footer";
import TopAd from "./components/TopAd/TopAd";

function page() {
  return (
    <div className="px-4 md:px-7">
      <TopAd />
      <Footer />
    </div>
  );
}

export default page;
