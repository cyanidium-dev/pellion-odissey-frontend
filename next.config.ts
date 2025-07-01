import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "optim.tildacdn.com",
      "thumb.tildacdn.com",
      "static.tildacdn.com",
      "img.freepik.com",
      "pohcdn.com",
    ],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "cdn.sanity.io",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
