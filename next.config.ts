import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  webpack: (config) => {
    // Handle static imports from public/ directory
    // This allows imports like: import image from 'public/image.png'
    config.resolve.alias = {
      ...config.resolve.alias,
      public: path.resolve(__dirname, "public"),
    };

    return config;
  },
};

export default nextConfig;
