/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/github/access_token:path*",
        destination: "https://github.com/login/oauth/access_token:path*",
      },
      // {
      //   source: "/server/:path*",
      //   destination: `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/:path*`,
      // },
    ];
  },
};
