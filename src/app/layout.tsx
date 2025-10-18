import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap', // 字体交换策略
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Go社区 - 构建未来字母圈社群",
  description: "使用前沿技术打造令人惊叹的高性能BDSM交友社群，完美的社群体验，无与伦比的交互表现，受到全球 20,000+ 社群会员信赖",
  keywords: ["BDSM社群", "字母圈", "交友平台", "Go社区", "社交网络"],
  authors: [{ name: "Go社区" }],
  creator: "Go社区",
  publisher: "Go社区",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    title: "Go社区 - 构建未来字母圈社群",
    description: "使用前沿技术打造令人惊叹的高性能BDSM交友社群",
    siteName: "Go社区",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Go社区 - 构建未来字母圈社群",
    description: "使用前沿技术打造令人惊叹的高性能BDSM交友社群",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        {/* 预连接到外部资源 */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://videos.pexels.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.pexels.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.worldvectorlogo.com" />
        <link rel="dns-prefetch" href="https://randomuser.me" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://upload.wikimedia.org" />
        
        {/* 预加载关键资源 */}
        <link 
          rel="preload" 
          href="https://videos.pexels.com/video-files/8084758/8084758-hd_1280_720_25fps.mp4" 
          as="video"
          type="video/mp4"
          media="(max-width: 768px)"
        />
        
        {/* 性能提示 */}
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
