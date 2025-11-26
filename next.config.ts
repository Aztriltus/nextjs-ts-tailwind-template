import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  turbopack: {
    resolveAlias: {
      public: path.resolve(__dirname, "public"),
    },
  },
};

export default nextConfig;
