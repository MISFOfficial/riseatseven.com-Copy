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
    "https://rise-atseven.transforms.svdcdn.com/production/images/unnamed-6.png?w=213&h=278&q=100&auto=format&fit=crop&dm=1750948726&s=0ecee9869674cd309d3170dfd7b29674",
    "https://rise-atseven.transforms.svdcdn.com/production/images/RedBull-Instagram-Post-45.png?w=1890&h=2363&q=100&auto=format&fit=crop&dm=1753775231&s=60dc0e3c84825da30f8d809caf5fabe1",
    "https://rise-atseven.transforms.svdcdn.com/production/images/Emirates-airpline-in-flight.avif?w=1330&h=700&q=100&auto=format&fit=crop&dm=1750948034&s=7fc16049313aefb0ea160470af9ae379",
    "https://rise-atseven.transforms.svdcdn.com/production/images/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.jpg?w=2560&h=1707&q=100&auto=format&fit=crop&dm=1750847623&s=2e6f5684a2dcbdbd148a651a17aafe47",
    "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-01-at-21.36.35.png?w=1198&h=1126&q=100&auto=format&fit=crop&dm=1751402284&s=4ad46c03819812b327e9b4643c1b0e6c",
    "https://rise-atseven.transforms.svdcdn.com/production/images/spaseekers.png?w=654&h=654&q=100&auto=format&fit=crop&dm=1750847719&s=7878b323cf448fba3f57e5ecbcef8ed1",
  ],
  bottomText: {
    left: "Organic media planners creating, distributing & optimising search-first content for SEO, Social, PR, Ai and LLM search",
    right: "4 Global Offices serving UK, USA (New York) & EU",
  },
  badges: {
    text: "#1 Most recommended content marketing agency",
    logos: [
      "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/global-search-awards.png?w=40&q=80",
      "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/Mask-group.png?w=40&q=80",
      "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Awards/White/UKSocial-Media-Awards-White.png?w=40&q=80",
    ],
  },
};
