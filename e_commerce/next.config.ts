/** @type {import('next').NextConfig} */
const nextConfig = {
  // Existing image domains
  images: {
    domains: ['cdn.sanity.io'],
  },
  // ESLint: fail builds on errors
  eslint: {
    ignoreDuringBuilds: false,
  },
  // TypeScript: fail builds on errors
  typescript: {
    ignoreBuildErrors: false,
  },
  // Other Next.js options can go here
};

// Import and configure PWA plugin without type conflicts
import withPWA from 'next-pwa';

const pwaConfig = withPWA({
  dest: 'public',                // Output service worker and precache files here
  register: true,               // Auto-register the service worker
  skipWaiting: true,            // Activate new SW immediately
  disable: process.env.NODE_ENV === 'development', // Disable PWA in dev
});

// Export wrapped config
export default pwaConfig(nextConfig);
