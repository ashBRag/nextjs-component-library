import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? "/nextjs-component-library" : "",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "miro.medium.com",
        pathname: "**", // This allows any path under the hostname
      },
    ],
  },
};

export default nextConfig;
