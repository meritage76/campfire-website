import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/campfire-website",
  assetPrefix: "/campfire-website/",
};

export default nextConfig;
