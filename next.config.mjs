/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    // Variables needs to be here to be fetched first
    additionalData: `@import "src/variables.scss";`,
  },
}

export default nextConfig;
