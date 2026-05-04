import React from "react";
import Navigation from "./components/Navigation/Navigation";
import TopAd from "./components/TopAd/TopAd";
import Footer from "./components/Footer/Footer";

function page() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopAd />
      <header className="sticky top-0 z-50 py-4 px-4 md:px-7">
        <Navigation />
      </header>
      <main className="grow">
        {/* Other sections will go here */}
      </main>
      <div className="px-4 md:px-7 pb-4">
        <Footer />
      </div>
    </div>
  );
}

export default page;
