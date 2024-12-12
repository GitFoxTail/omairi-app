import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    serverActions: {
      //デフォルト
    }
  }
};

export default nextConfig;
