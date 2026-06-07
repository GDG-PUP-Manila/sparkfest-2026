import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Disable server-only features for static builds
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
