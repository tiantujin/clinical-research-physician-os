const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgPage = repoName.endsWith(".github.io");
const basePath = process.env.GITHUB_ACTIONS && repoName && !isUserOrOrgPage ? `/${repoName}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  experimental: {
    typedRoutes: true
  }
};

export default nextConfig;
