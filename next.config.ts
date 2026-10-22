import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export, served by Caddy on the Lightsail box (see deploy.sh).
  output: "export",
};

export default nextConfig;
