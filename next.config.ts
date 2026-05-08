import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    // use the project root to avoid import.meta/url based __dirname hacks
    root: process.cwd(),
  },
};

export default nextConfig;
