'use client';

import { GlowingEffect } from '@/components/ui/glowing-effect';
import { LiquidGlassButton } from '@/components/ui/liquid-glass-button';
import { AnimatedGlowCard } from '@/components/ui/animated-glow-card';
import { TubelightNavbar } from '@/components/ui/tubelight-navbar';
import { VideoThumbnailPlayer } from '@/components/ui/video-thumbnail-player';
import { FeatureWithImageComparison } from '@/components/ui/feature-with-image-comparison';
import { AnimatedCardsStack } from '@/components/ui/animated-cards-stack';
import { AvatarCircles } from '@/components/ui/avatar-circles';
import { FloatingActionMenu } from '@/components/ui/floating-action-menu';
import { Component as EtheralShadow } from '@/components/ui/etheral-shadow';
import { SocialMediaGlass } from '@/components/ui/liquid-glass';
import { Logos3 } from '@/components/ui/logos3';
import { ContainerAnimated, ContainerInset, ContainerScroll, ContainerStagger } from '@/components/ui/hero-video';
import { Button } from '@/components/ui/button';
import { TestimonialsColumn } from '@/components/ui/testimonials-columns';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Zap, Sparkles, Rocket, Shield, Code, Globe, ArrowRight, Users, TrendingUp, Award, CheckCircle, Star, Heart, Layers, Box, Database, Lock, X } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const navItems = [
  { label: '功能特性', href: '#features' },
  { label: '关于我们', href: '/about' },
  { label: '价格方案', href: '/pricing' },
  { label: '常见问题', href: '/faq' },
];

const testimonials = [
  {
    name: '陈晓明',
    role: 'TechCorp 首席执行官',
    content: '这个平台彻底改变了我们构建和部署应用程序的方式。性能提升非常显著。',
    avatar: '',
  },
  {
    name: '李俊杰',
    role: 'StartupXYZ 首席开发工程师',
    content: '我经历过的最好的开发体验。简洁、快速且功能强大。',
    avatar: '',
  },
  {
    name: '王雅婷',
    role: '产品设计师',
    content: '精美的设计与强大的功能完美结合。我们的团队生产力提高了300%。',
    avatar: '',
  },
];

const features = [
  {
    title: '闪电般客服',
    description: '7×24小时专属管家式响应，秒级回应+精准解决，沟通丝滑无延迟',
    icon: <Zap className="w-8 h-8" />,
  },
  {
    title: 'AI 驱动',
    description: '搭载行业领先AI引擎，自动化拆解工作流，生产效率直接提升30%+',
    icon: <Sparkles className="w-8 h-8" />,
  },
  {
    title: '反馈变现',
    description: '用户反馈通道全线打开，你的想法与建议，3天内实现重构',
    icon: <Rocket className="w-8 h-8" />,
  },
  {
    title: '全球生态圈',
    description: '“云原生全球部署” ，全球15个国家，33各主要城市分布    ',
    icon: <Layers className="w-8 h-8" />,
  },
  {
    title: '实时数据',
    description: '“数据流动态洞察引擎” ，强大数据管道实时吞吐分析，让你 “瞬间和他/她熟悉开展对话”',
    icon: <Database className="w-8 h-8" />,
  },
  {
    title: '高级隐私保护',
    description: '企业级安全保障，提供端到端加密。隐私保护无障碍！',
    icon: <Lock className="w-8 h-8" />,
  },
];

// 动态计数组件
function AnimatedCounter({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest));
      }
    });

    return controls.stop;
  }, [value, count]);

  return (
    <span>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

const stats = [
  { 
    baseNumber: 20000, 
    variance: 800, // 变化范围
    suffix: '+',
    label: '活跃用户', 
    icon: <Users className="w-8 h-8" />,
    format: (n: number) => `${(n / 1000).toFixed(1)}K`
  },
  { 
    baseNumber: 99.9, 
    variance: 0.05,
    suffix: '%',
    label: '正常运行时间', 
    icon: <TrendingUp className="w-8 h-8" />,
    format: (n: number) => n.toFixed(1)
  },
  { 
    baseNumber: 50, 
    variance: 5,
    suffix: '+',
    label: '获得奖项', 
    icon: <Award className="w-8 h-8" />,
    format: (n: number) => Math.round(n).toString()
  },
  { 
    baseNumber: 10, 
    variance: 2,
    suffix: '+',
    label: '覆盖国家', 
    icon: <Globe className="w-8 h-8" />,
    format: (n: number) => Math.round(n).toString()
  },
];

export default function Home() {
  const [showBanner, setShowBanner] = useState(true);
  const [statValues, setStatValues] = useState(stats.map(s => s.baseNumber));
  // 性能优化：检测移动设备
  const [isMobile, setIsMobile] = useState(false);

  // 检测设备类型
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 每5秒更新一次统计数据（移动端间隔更长以优化性能）
  useEffect(() => {
    const interval = setInterval(() => {
      setStatValues(stats.map(stat => {
        // 在基数附近随机波动
        const randomVariance = (Math.random() - 0.5) * 2 * stat.variance;
        return stat.baseNumber + randomVariance;
      }));
    }, isMobile ? 8000 : 5000); // 移动端8秒，桌面端5秒

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <div className="min-h-screen relative">
      {/* Etheral Shadow 全局背景 - 移动端静态版本 */}
      <div className="fixed inset-0 -z-10">
        <EtheralShadow
          color="rgba(128, 128, 128, 1)"
          animation={{ 
            scale: isMobile ? 0 : 100,  // 移动端禁用动画
            speed: isMobile ? 0 : 90    // 移动端禁用速度
          }}
          noise={{ 
            opacity: isMobile ? 0.5 : 1,    // 移动端降低噪点
            scale: isMobile ? 1 : 1.2 
          }}
          sizing="fill"
        />
      </div>

      {/* Navigation */}
      <TubelightNavbar items={navItems} logo="Go社区" />

      {/* Promotional Banner */}
      {showBanner && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: isMobile ? 0.3 : 0.5, ease: "easeOut" }}
          style={{ transform: 'translateZ(0)', willChange: 'transform, opacity' }}
          className="sticky top-20 sm:top-24 z-40 px-4 sm:px-6 pt-3 sm:pt-4"
        >
          <div className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 border border-white/20 shadow-2xl">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 animate-gradient" />
              
              {/* Content */}
              <div className="relative px-4 sm:px-6 py-3 sm:py-4">
                <div className="flex items-center justify-between gap-3 sm:gap-4">
                  {/* Left side - Icon + Text */}
                  <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
                    {/* Icon with glow effect */}
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/50">
                      <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>

                    {/* Text content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                        <h3 className="text-sm sm:text-base font-bold text-white truncate">
                          🎉 飞书5000人大群火热开放中
                        </h3>
                        <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-white/40" />
                        <p className="text-xs sm:text-sm text-white/80 truncate">
                          AI智能匹配 · 实时在线交流 · 专业导师指导
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right side - CTA + Close */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {/* CTA Button */}
                    <a href="https://work.weixin.qq.com/kfid/kfc277e93e4fa92b3e9" target="_blank" rel="noopener noreferrer">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-white/90 hover:bg-white text-purple-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all text-sm"
                      >
                        立即加入
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                      {/* Mobile CTA */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="sm:hidden inline-flex items-center gap-1 px-3 py-1.5 bg-white/90 hover:bg-white text-purple-600 font-semibold rounded-lg shadow-lg text-xs"
                      >
                        加入
                        <ArrowRight className="w-3 h-3" />
                      </motion.button>
                    </a>

                    {/* Close button */}
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setShowBanner(false)}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    >
                      <X className="w-4 h-4 text-white" />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
            </div>
          </div>
        </motion.div>
      )}
      
      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }
        .animate-gradient {
          animation: gradient 3s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>

      {/* Hero Video Section */}
      <ContainerScroll className="text-center pt-24 sm:pt-32">
        <ContainerStagger viewport={{ once: false }}>
          <ContainerAnimated animation="top">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tighter text-white mb-4">
              构建{' '}
              <span className="text-gradient">
                未来
              </span>
              {' '}字母圈社群
            </h1>
          </ContainerAnimated>

          <ContainerAnimated animation="bottom">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-none tracking-tight text-white/90 mb-6">
              体验新一代bdsm交友
            </h2>
          </ContainerAnimated>

          <ContainerAnimated animation="blur" className="my-8 mx-auto max-w-3xl">
            <p className="text-lg md:text-xl leading-relaxed tracking-normal text-white/70">
              🚀 使用前沿技术打造令人惊叹的高性能社群
              <br />
              ✨ 完美的社群体验，无与伦比的交互表现
              <br />
              💎 受到全球 20,000+ 社群会员信赖
            </p>
          </ContainerAnimated>

          <ContainerAnimated
            animation="z"
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a href="https://work.weixin.qq.com/kfid/kfc277e93e4fa92b3e9" target="_blank" rel="noopener noreferrer">
              <Button
                variant="default"
                className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 h-auto"
                size="lg"
              >
                <Rocket className="w-5 h-5 mr-2" />
                加入社群
              </Button>
            </a>
            <a href="https://work.weixin.qq.com/kfid/kfc277e93e4fa92b3e9" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="rounded-full border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 h-auto backdrop-blur-sm"
                size="lg"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                了解详情
              </Button>
            </a>
          </ContainerAnimated>
        </ContainerStagger>

        <ContainerInset className="mx-4 md:mx-8">
          <video
            width="100%"
            height="100%"
            loop
            playsInline
            autoPlay
            muted
            preload={isMobile ? "metadata" : "auto"}
            poster="https://images.pexels.com/videos/8084758/pictures/preview-0.jpg"
            className="relative z-10 block h-auto max-h-full max-w-full object-contain align-middle rounded-2xl shadow-2xl"
            style={{ 
              transform: 'translateZ(0)',
              willChange: 'transform'
            }}
          >
            {/* 移动端加载720p，桌面端加载1440p */}
            <source
              src={isMobile 
                ? "https://videos.pexels.com/video-files/8084758/8084758-hd_1280_720_25fps.mp4"
                : "https://videos.pexels.com/video-files/8084758/8084758-uhd_2560_1440_25fps.mp4"
              }
              type="video/mp4"
            />
          </video>
        </ContainerInset>
      </ContainerScroll>

      {/* Features Section */}
      <section id="features" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px", amount: 0.3 }}
            transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }}
            style={{ transform: 'translateZ(0)', willChange: 'transform, opacity' }}
            className="text-center mb-20"
          >
            <GlowingEffect color="#a855f7" intensity={isMobile ? 0 : 25}>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                我们的优势
              </h2>
            </GlowingEffect>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              构建、部署和扩展现代社群所需的一切
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px", amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: isMobile ? 0.3 : 0.5, ease: "easeOut" }}
                style={{ transform: 'translateZ(0)', willChange: 'transform, opacity' }}
              >
                <GlowingEffect 
                  color={index % 3 === 0 ? '#3b82f6' : index % 3 === 1 ? '#a855f7' : '#ec4899'}
                  intensity={isMobile ? 0 : 15}
                >
                  <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group">
                    <div className={`mb-6 ${index % 3 === 0 ? 'text-blue-400' : index % 3 === 1 ? 'text-purple-400' : 'text-pink-400'} transform group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </GlowingEffect>
              </motion.div>
            ))}
          </div>

          {/* Feature Showcase with Image Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.5 : 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px", amount: 0.3 }}
            style={{ transform: 'translateZ(0)', willChange: 'transform, opacity' }}
          >
            <FeatureWithImageComparison
              beforeImage="https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=800"
              afterImage="https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800"
              title="看看我们"
              className="mb-20"
            />
          </motion.div>

          {/* Video Demo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.5 : 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px", amount: 0.3 }}
            style={{ transform: 'translateZ(0)', willChange: 'transform, opacity' }}
          >
            <VideoThumbnailPlayer
              thumbnail="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200"
              title="了解社区"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 sm:py-24 md:py-32 px-6 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px", amount: 0.3 }}
            transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }}
            style={{ transform: 'translateZ(0)', willChange: 'transform, opacity' }}
            className="text-center mb-20"
          >
            <GlowingEffect color="#3b82f6" intensity={isMobile ? 0 : 20}>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                值得信赖
              </h2>
            </GlowingEffect>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              用数据说话
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px", amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: isMobile ? 0.3 : 0.5, ease: "easeOut" }}
                style={{ transform: 'translateZ(0)', willChange: 'transform, opacity' }}
              >
                <AnimatedGlowCard glowColor="#3b82f6">
                  <div className="text-center">
                    <div className="text-blue-400 mb-4 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2 text-gradient">
                      {stat.format(statValues[index])}{stat.suffix}
                    </div>
                    <div className="text-white/60 text-sm">
                      {stat.label}
                    </div>
                  </div>
                </AnimatedGlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 sm:py-32 md:py-40 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px", amount: 0.3 }}
            transition={{ duration: isMobile ? 0.5 : 0.8, ease: "easeOut" }}
            style={{ transform: 'translateZ(0)', willChange: 'transform, opacity' }}
            className="text-center space-y-10"
          >
            {/* 主标题 */}
            <div className="space-y-6">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight">
                准备好开始了吗？
              </h2>
              <p className="text-xl sm:text-2xl text-white/50 max-w-2xl mx-auto">
                加入数万名正在构建bdsm未来的社群
              </p>
            </div>

            {/* 按钮组 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-10 py-5 bg-white text-black font-semibold text-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  立即加入
                  <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
              </motion.button>
              
              <Link href="/pricing">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-10 py-5 text-white font-semibold text-lg rounded-2xl border-2 border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    联系客服
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </motion.button>
              </Link>
            </div>

            {/* 底部信息 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px", amount: 0.3 }}
              transition={{ delay: 0.3, duration: isMobile ? 0.5 : 0.8, ease: "easeOut" }}
              style={{ transform: 'translateZ(0)', willChange: 'opacity' }}
              className="pt-12 flex flex-wrap justify-center gap-x-12 gap-y-6 text-white/40 text-sm"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>无需信用卡</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>7天免费试用</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>随时取消</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Additional Testimonials Section */}
      <section className="relative py-12 sm:py-20 md:py-32 overflow-hidden">
        <div className="container z-10 mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.5 : 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px", amount: 0.3 }}
            style={{ transform: 'translateZ(0)', willChange: 'transform, opacity' }}
            className="flex flex-col items-center justify-center max-w-[640px] mx-auto mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="border border-white/20 py-2 px-5 rounded-full bg-white/5 backdrop-blur-sm">
                <span className="text-white/90 font-medium">客户评价</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center text-white mb-6">
              全球用户的真实反馈
            </h2>
            <p className="text-center text-lg text-white/70 leading-relaxed">
              来自世界各地的开发者和企业对我们平台的评价
            </p>
          </motion.div>

          <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
            <TestimonialsColumn 
              testimonials={[
                {
                  text: "这个平台彻底革新了我们的运营流程，简化了财务和库存管理。基于云的系统让我们即使在远程工作时也能保持高效。",
                  image: "https://randomuser.me/api/portraits/women/1.jpg",
                  name: "林雅婷",
                  role: "运营经理",
                },
                {
                  text: "实施过程非常顺利快捷。可定制且用户友好的界面让团队培训变得轻松愉快，大大缩短了上手时间。",
                  image: "https://randomuser.me/api/portraits/men/2.jpg",
                  name: "王建国",
                  role: "IT经理",
                },
                {
                  text: "支持团队表现卓越，引导我们完成设置并提供持续帮助，确保我们的满意度始终如一。",
                  image: "https://randomuser.me/api/portraits/women/3.jpg",
                  name: "陈美玲",
                  role: "客户支持主管",
                },
              ]}
              duration={15}
            />
            <TestimonialsColumn 
              testimonials={[
                {
                  text: "平台的无缝集成大大提升了我们的业务运营效率。强烈推荐其直观的界面和强大的功能。",
                  image: "https://randomuser.me/api/portraits/men/4.jpg",
                  name: "张志强",
                  role: "CEO",
                },
                {
                  text: "强大的功能和快速响应的支持团队改变了我们的工作流程，使整个团队的效率显著提升。",
                  image: "https://randomuser.me/api/portraits/women/5.jpg",
                  name: "李静怡",
                  role: "项目经理",
                },
                {
                  text: "顺畅的实施过程超出了我们的期望。它优化了流程，全面提升了业务表现。",
                  image: "https://randomuser.me/api/portraits/women/6.jpg",
                  name: "赵晓雪",
                  role: "业务分析师",
                },
              ]}
              className="hidden md:block"
              duration={19}
            />
            <TestimonialsColumn 
              testimonials={[
                {
                  text: "用户友好的设计改善了我们的业务功能，并获得了客户的积极反馈，提升了品牌形象。",
                  image: "https://randomuser.me/api/portraits/men/7.jpg",
                  name: "刘峰华",
                  role: "市场总监",
                },
                {
                  text: "他们提供的解决方案超出了预期，深入理解了我们的需求并有效提升了运营效率。",
                  image: "https://randomuser.me/api/portraits/women/8.jpg",
                  name: "吴雨薇",
                  role: "销售经理",
                },
                {
                  text: "使用这个系统后，我们的在线业务和转化率显著提升，为公司带来了可观的业绩增长。",
                  image: "https://randomuser.me/api/portraits/men/9.jpg",
                  name: "周俊杰",
                  role: "电商经理",
                },
              ]}
              className="hidden lg:block"
              duration={17}
            />
          </div>
        </div>
      </section>

      {/* Trusted Companies Logos */}
      <Logos3 
        heading="受到全球领先企业的信赖"
        logos={[
          // 第一排 - 国际科技巨头 (6家)
          {
            id: "logo-1",
            description: "React",
            image: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
            className: "h-8 w-auto",
          },
          {
            id: "logo-2",
            description: "Next.js",
            image: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
            className: "h-8 w-auto brightness-0 invert",
          },
          {
            id: "logo-3",
            description: "Vercel",
            image: "https://cdn.worldvectorlogo.com/logos/vercel.svg",
            className: "h-8 w-auto brightness-0 invert",
          },
          {
            id: "logo-4",
            description: "TypeScript",
            image: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
            className: "h-8 w-auto",
          },
          {
            id: "logo-5",
            description: "Tailwind CSS",
            image: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
            className: "h-6 w-auto",
          },
          {
            id: "logo-6",
            description: "Figma",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
            className: "h-8 w-auto",
          },
          
          // 第二排 - 国际企业服务 (6家)
          {
            id: "logo-7",
            description: "GitHub",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            className: "h-8 w-auto brightness-0 invert",
          },
          {
            id: "logo-8",
            description: "Stripe",
            image: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
            className: "h-8 w-auto",
          },
          {
            id: "logo-9",
            description: "Supabase",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
            className: "h-8 w-auto",
          },
          {
            id: "logo-10",
            description: "Framer",
            image: "https://cdn.worldvectorlogo.com/logos/framer-1.svg",
            className: "h-8 w-auto",
          },
          {
            id: "logo-11",
            description: "shadcn/ui",
            image: "https://ui.shadcn.com/apple-touch-icon.png",
            className: "h-8 w-auto",
          },
          {
            id: "logo-12",
            description: "Astro",
            image: "https://astro.badg.es/v2/built-with-astro/tiny.svg",
            className: "h-8 w-auto",
          },
          
          // 第三排 - 国际创新平台 (6家)
          {
            id: "logo-13",
            description: "Google",
            image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
            className: "h-7 w-auto",
          },
          {
            id: "logo-14",
            description: "Microsoft",
            image: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
            className: "h-6 w-auto brightness-0 invert",
          },
          {
            id: "logo-15",
            description: "Apple",
            image: "https://cdn.worldvectorlogo.com/logos/apple-11.svg",
            className: "h-9 w-auto brightness-0 invert",
          },
          {
            id: "logo-16",
            description: "Amazon",
            image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
            className: "h-7 w-auto brightness-0 invert",
          },
          {
            id: "logo-17",
            description: "Meta",
            image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
            className: "h-6 w-auto brightness-0 invert",
          },
          {
            id: "logo-18",
            description: "Netflix",
            image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
            className: "h-7 w-auto",
          },
          
          // 第四排 - 小众创新企业 (6家)
          {
            id: "logo-19",
            description: "Notion",
            image: "https://cdn.worldvectorlogo.com/logos/notion-2.svg",
            className: "h-7 w-auto",
          },
          {
            id: "logo-20",
            description: "Discord",
            image: "https://cdn.worldvectorlogo.com/logos/discord-6.svg",
            className: "h-8 w-auto",
          },
          {
            id: "logo-21",
            description: "Zapier",
            image: "https://cdn.worldvectorlogo.com/logos/zapier.svg",
            className: "h-7 w-auto",
          },
          {
            id: "logo-22",
            description: "Shopify",
            image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
            className: "h-6 w-auto",
          },
          {
            id: "logo-23",
            description: "Dropbox",
            image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Dropbox_logo_2017.svg",
            className: "h-7 w-auto",
          },
          {
            id: "logo-24",
            description: "Zoom",
            image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg",
            className: "h-6 w-auto",
          },
        ]}
      />

      {/* Social Media Section */}
      <section className="relative py-12 sm:py-20 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.5 : 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px", amount: 0.3 }}
            style={{ transform: 'translateZ(0)', willChange: 'transform, opacity' }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              关注我们
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              与我们保持联系，获取最新动态和技术分享
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: isMobile ? 0.5 : 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px", amount: 0.3 }}
            style={{ transform: 'translateZ(0)', willChange: 'transform, opacity' }}
            className="flex justify-center"
          >
            <SocialMediaGlass />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">现代化网站</h3>
              <p className="text-white/60 text-sm">
                构建Web开发的未来
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">产品</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><Link href="#features" className="hover:text-white transition-colors">功能特性</Link></li>
                <li><a href="https://work.weixin.qq.com/kfid/kfc277e93e4fa92b3e9" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">价格方案</a></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">常见问题</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">公司</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="https://work.weixin.qq.com/kfid/kfc277e93e4fa92b3e9" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">关于我们</a></li>
                <li><a href="https://work.weixin.qq.com/kfid/kfc277e93e4fa92b3e9" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">招聘</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">法律</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="https://work.weixin.qq.com/kfid/kfc277e93e4fa92b3e9" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">隐私政策</a></li>
                <li><a href="https://work.weixin.qq.com/kfid/kfc277e93e4fa92b3e9" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">服务条款</a></li>
                <li><a href="https://work.weixin.qq.com/kfid/kfc277e93e4fa92b3e9" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">安全</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
            © 2025 现代化网站. 保留所有权利.
          </div>
        </div>
      </footer>

      {/* Floating Action Menu */}
      <FloatingActionMenu />

    </div>
  );
}
