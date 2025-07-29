import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: [
    "@shikijs/twoslash",
    'remark-shiki-twoslash',
  ]
};

export default nextConfig;
