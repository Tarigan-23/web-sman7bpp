/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cogsouobijaqdbglesol.supabase.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;