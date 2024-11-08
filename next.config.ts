import type { NextConfig } from "next";
import nextI18NextConfig from './src/next-i18next.config';

const nextConfig: NextConfig = {
  /* config options here */
  ...nextI18NextConfig,
};

export default nextConfig;
