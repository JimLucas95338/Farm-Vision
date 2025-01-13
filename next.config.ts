import type { Configuration } from 'webpack';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config: Configuration) => {
    if (!config.resolve) {
      config.resolve = {};
    }

    config.resolve.fallback = {
      ...(config.resolve.fallback || {}),
      net: false,
      dns: false,
      tls: false,
      fs: false,
      request: false,
    };
    
    return config;
  },
};

export default nextConfig;