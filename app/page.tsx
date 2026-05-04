import React from "react";
import Navigation from "./components/Navigation/Navigation";
import TopAd from "./components/TopAd/TopAd";
import Footer from "./components/Footer/Footer";
import FeatureWork from "./components/FeatureWork/FeatureWork";
import Hero from "./components/Hero/Hero";
import LogoSlider from "./components/LogoSlider/LogoSlider";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Marquee from "./components/Marquee/Marquee";
import Legacy from "./components/Legacy/Legacy";
import Insights from "./components/Insights/Insights";
import PreFooter from "./components/PreFooter/PreFooter";

function page() {
  return (
    <div className="flex flex-col min-h-screen bg-grey-100 selection:bg-mint selection:text-grey-900">
      <TopAd />
      <header className="sticky top-0 z-50">
        <Navigation />
      </header>
      
      <main className="grow">
        <Hero />
        <LogoSlider />
        <Intro />
        <FeatureWork />
        <Services />
        <Marquee />
        <Legacy />
        <Insights />
        <PreFooter />
      </main>

      <Footer />
    </div>
  );
}

export default page;
