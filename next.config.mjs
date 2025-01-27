/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', // Allows all domains over HTTPS
        },
      ],
    },
  };
  
  export default nextConfig;
  