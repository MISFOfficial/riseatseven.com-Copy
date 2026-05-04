"use client";

import React from "react";
import Link from "next/link";

const insightsData = [
  {
    id: 1,
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
    category: "News",
    readTime: "2 mins",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/3-copy.jpg?w=800&q=80",
  },
  {
    id: 2,
    title: "Rise at Seven Appointed by Coneys to Drive Demand and Retail Growth",
    category: "Food/Hospitality",
    readTime: "2 mins",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/Noomz1-4.jpg?w=800&q=80",
  },
];

const Insights: React.FC = () => {
  return (
    <section className="bg-grey-100 py-24 px-7">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-grey-900 text-lg font-sans-primary font-medium tracking-tight uppercase">
            Latest Insights
          </h2>
          <Link href="/blog/" className="hidden md:flex text-grey-900 font-medium hover:translate-x-2 transition-transform">
             Explore More Thoughts →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {insightsData.map((item) => (
             <Link key={item.id} href="#" className="group flex flex-col gap-y-6">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-white relative">
                   <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                   />
                   <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white">
                      {item.category}
                   </div>
                </div>
                <div className="flex flex-col gap-y-2">
                   <span className="text-grey-300 text-sm font-medium">{item.readTime} read</span>
                   <h3 className="text-grey-900 text-2xl md:text-3xl font-sans-primary font-medium tracking-tight group-hover:text-grey-300 transition-colors">
                      {item.title}
                   </h3>
                </div>
             </Link>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
