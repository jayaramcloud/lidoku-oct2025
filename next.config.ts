import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Every page is static: export plain HTML/CSS/JS to out/ for Cloudflare Pages
  output: 'export',
  // /docker -> /docker/index.html, which static hosts serve without rewrites
  trailingSlash: true,
};

export default nextConfig;
