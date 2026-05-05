import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ["rise-atseven.transforms.svdcdn.com"],
  },
};

export default nextConfig;
