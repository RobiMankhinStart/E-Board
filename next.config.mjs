// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.dummyjson.com", // for product images
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dummyjson.com", // for icons or other images
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com", // new product images
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
