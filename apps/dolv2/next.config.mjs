/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
};

export default nextConfig;
