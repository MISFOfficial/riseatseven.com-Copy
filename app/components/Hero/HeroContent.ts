export interface HeroData {
  heading: {
    line1: string;
    line2: string;
  };
  randomImages: string[];
  bottomText: {
    left: string;
    right: string;
  };
  badges: {
    text: string;
    logos: string[];
  };
}

export const heroData: HeroData = {
  heading: {
    line1: "We Create",
    line2: "Category Leaders",
  },
  randomImages: [
    "/rise_files/unnamed-6.png",
    "/rise_files/RedBull-Instagram-Post-45.png",
    "/rise_files/Emirates-airpline-in-flight.avif",
    "/rise_files/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.jpg",
    "/rise_files/Screenshot-2025-07-01-at-21.36.35.png",
    "/rise_files/spaseekers.png",
  ],
  bottomText: {
    left: "Organic media planners creating, distributing & optimising search-first content for SEO, Social, PR, Ai and LLM search",
    right: "4 Global Offices serving UK, USA (New York) & EU",
  },
  badges: {
    text: "#1 Most recommended content marketing agency",
    logos: [
      "/rise_files/global-search-awards.png",
      "/rise_files/Mask-group.png",
      "/rise_files/UKSocial-Media-Awards-White.png",
    ],
  },
};
