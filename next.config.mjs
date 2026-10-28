/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/coming-soon" },
        {
          source:
            "/:path((?!coming-soon|_next|images|logo\\.svg).+)",
          destination: "/coming-soon",
        },
      ],
    };
  },
};

export default nextConfig;
