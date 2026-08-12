import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true
      },
      {
        source: "/_preview",
        destination: "/",
        permanent: true
      },
      {
        source: "/thank-you",
        destination: "/#contact",
        permanent: false
      }
    ];
  }
};

export default nextConfig;
