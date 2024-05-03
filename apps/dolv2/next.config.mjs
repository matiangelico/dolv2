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

  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: true,
      },
      {
        source: "/tldr",
        destination: "/en/tldr",
        permanent: true,
      },
      {
        source: "/:language/tldr/page/1",
        destination: "/:language/tldr",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
