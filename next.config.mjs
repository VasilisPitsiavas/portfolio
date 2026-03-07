/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    trailingSlash: true,
  
    // IMPORTANT for GitHub Pages
    basePath: "/portfolio",
    assetPrefix: "/portfolio/",
  
    images: {
      unoptimized: true,
    },
  };
  
  export default nextConfig;