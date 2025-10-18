import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  
  // 图片优化配置
  images: {
    domains: [
      'images.unsplash.com',
      'framerusercontent.com',
      'randomuser.me',
      'cdn.worldvectorlogo.com',
      'cdn.jsdelivr.net',
      'ui.shadcn.com',
      'astro.badg.es',
      'www.google.com',
      'img-prod-cms-rt-microsoft-com.akamaized.net',
      'upload.wikimedia.org',
      'images.pexels.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
      {
        protocol: 'https',
        hostname: '*.worldvectorlogo.com',
      },
      {
        protocol: 'https',
        hostname: '*.jsdelivr.net',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
    // 启用图片格式优化
    formats: ['image/webp', 'image/avif'],
    // 设备尺寸断点
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    // 图片尺寸
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // 最小缓存TTL（秒）
    minimumCacheTTL: 60,
    // 禁用静态导入时的图片优化（因为使用了output: 'export'）
    unoptimized: true,
  },
  
  // 编译器优化
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // 性能优化
  poweredByHeader: false,
  
  // 压缩
  compress: true,
  
  // 实验性功能
  experimental: {
    // 优化包导入
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
};

export default nextConfig;
