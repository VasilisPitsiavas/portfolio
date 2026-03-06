/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",       // Static export for GitHub Pages
    trailingSlash: true,    // Required for GH Pages routing
    images: {
      unoptimized: true,    // Required for static export
    },
  };
  
  export default nextConfig;
  