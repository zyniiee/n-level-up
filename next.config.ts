import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: { optimizeCss: true },
  env: {
    NOTION_COURSES_ID: process.env.NOTION_COURSES_ID,
    NOTION_BLOG_ID: process.env.NOTION_BLOG_ID,
    NOTION_GOCNHIN_ID: process.env.NOTION_GOCNHIN_ID,
    NOTION_GALLERY_ID: process.env.NOTION_GALLERY_ID,
    NOTION_TOKEN: process.env.NOTION_TOKEN,
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint during builds
  },
};

export default nextConfig;
