/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/coming-soon" },
        {
          source:
            "/:path((?!coming-soon|_next|images|talent_tribe_logo\\.svg).+)",
          destination: "/coming-soon",
        },
      ],
    };
  },
};

export default nextConfig;
