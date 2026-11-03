/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/fe_koryaku' : '',
  assetPrefix: isProd ? '/fe_koryaku/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;

