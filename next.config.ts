import type { NextConfig } from "next";

// Static export: security and cache headers live in public/_headers,
// redirects in public/_redirects (read by Cloudflare).
const nextConfig: NextConfig = {
  output: "export",
  poweredByHeader: false,
  agentRules: false,
  devIndicators: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
