'use client';

import { TubelightNavbar } from '@/components/ui/tubelight-navbar';
import { Component as EtheralShadow } from '@/components/ui/etheral-shadow';
import { motion } from 'framer-motion';
import { Users, Heart, Shield, Sparkles, Target, Globe, Zap, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { label: '首页', href: '/' },
  { label: '功能特性', href: '/#features' },
  { label: '价格方案', href: '/pricing' },
  { label: '常见问题', href: '/faq' },
];

export default function AboutPage() {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: '隐私至上',
      description: '我们承诺保护每位用户的隐私和数据安全，采用端到端加密技术。',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: '包容开放',
      description: '我们欢迎每一个人，创造一个安全、友善、无偏见的社群环境。',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '社群驱动',
      description: '社群成员的声音很重要，我们倾听并根据反馈持续改进平台。',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: '体验优先',
      description: '专注于打造流畅、直观的用户体验，让每个人都能轻松使用。',
    },
  ];

  const stats = [
    { number: '20K+', label: '活跃成员' },
    { number: '10+', label: '覆盖国家' },
    { number: '99.9%', label: '在线率' },
    { number: '24/7', label: '全天候支持' },
  ];

  const milestones = [
    { 
      year: '2026下半年', 
      title: '全球生态建设', 
      description: '建立全球化BDSM教育平台和认证体系，在欧美市场开设分部，推出社群孵化器项目',
      isPlan: true
    },
    { 
      year: '2026上半年', 
      title: 'VR社交元宇宙', 
      description: '推出VR社交功能，建立虚拟社区空间，计划在5个新城市开设线下活动中心',
      isPlan: true
    },
    { 
      year: '2025下半年', 
      title: '深化国际布局', 
      description: '扩展东南亚市场，推出高级会员订阅服务，建立内容创作者生态系统，目标用户突破30000人',
      isPlan: true
    },
    { 
      year: '2025上半年', 
      title: '国际化扩张', 
      description: '成功进入日本、韩国、新加坡等亚洲市场，活跃用户突破20000人，建立多语言支持系统',
      isPlan: false
    },
    { 
      year: '2023', 
      title: '平台重构', 
      description: '完成平台架构升级，推出AI智能匹配系统，引入区块链技术保护用户隐私，获得天使轮融资',
      isPlan: false
    },
    { 
      year: '2021', 
      title: '社群成长', 
      description: '用户数突破5000人，举办首届线下BDSM文化交流大会，建立社群自治管理体系',
      isPlan: false
    },
    { 
      year: '2019', 
      title: '功能完善', 
      description: '推出实名认证系统、活动组织功能、教育资源库，与多家心理咨询机构建立合作',
      isPlan: false
    },
    { 
      year: '2017', 
      title: '社群壮大', 
      description: '注册用户达到1000人，推出移动端APP，建立24/7客服支持体系',
      isPlan: false
    },
    { 
      year: '2016', 
      title: '平台上线', 
      description: '网站正式上线运营，发布社群行为准则，建立内容审核机制和用户举报系统',
      isPlan: false
    },
    { 
      year: '2015', 
      title: '项目启动', 
      description: '创始团队在北京成立，开始调研国内BDSM社群需求，制定平台发展规划和技术架构',
      isPlan: false
    },
  ];

  const features = [
    { icon: <CheckCircle className="w-5 h-5" />, text: '实名认证可选' },
    { icon: <CheckCircle className="w-5 h-5" />, text: '端到端加密' },
    { icon: <CheckCircle className="w-5 h-5" />, text: '智能匹配系统' },
    { icon: <CheckCircle className="w-5 h-5" />, text: '活动组织平台' },
    { icon: <CheckCircle className="w-5 h-5" />, text: '教育资源中心' },
    { icon: <CheckCircle className="w-5 h-5" />, text: '社群规则保障' },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Etheral Shadow 全局背景 */}
      <div className="fixed inset-0 -z-10">
        <EtheralShadow
          color="rgba(128, 128, 128, 1)"
          animation={{ scale: 100, speed: 90 }}
          noise={{ opacity: 1, scale: 1.2 }}
          sizing="fill"
        />
      </div>

      {/* Navigation */}
      <TubelightNavbar items={navItems} logo="Go社区" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-white/80">关于我们</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight">
              构建安全、开放的
              <br />
              <span className="text-white/50">BDSM社群</span>
            </h1>

            <p className="text-xl sm:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              我们致力于为BDSM爱好者打造一个安全、包容、尊重的交流平台
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <a href="https://work.weixin.qq.com/kfid/kfc277e93e4fa92b3e9" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white text-black font-semibold rounded-2xl hover:shadow-2xl hover:shadow-white/20 transition-all"
                >
                  加入社群
                </motion.button>
              </a>
              <a href="https://work.weixin.qq.com/kfid/kfc277e93e4fa92b3e9" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 text-white font-semibold rounded-2xl border-2 border-white/20 hover:border-white/40 hover:bg-white/5 transition-all"
                >
                  了解会员
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section with Orbiting Avatars */}
      <section className="relative py-32">
        <div className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
          {/* Background concentric circles */}
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/20" />
            <div className="absolute left-1/2 top-1/2 h-[35rem] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/20" />
            <div className="absolute left-1/2 top-1/2 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/20" />
          </div>

          {/* Central Content */}
          <div className="relative z-10 flex flex-col items-center gap-4 px-4 text-center">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              我们的团队
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-md text-white/60 text-lg"
            >
              来自全球各地的社群成员
            </motion.p>
          </div>

          {/* Inner Circle - 6 avatars */}
          <div
            className="absolute inset-0 z-0 animate-orbit"
            style={{ '--orbit-duration': '25s' } as React.CSSProperties}
          >
            {[
              'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces',
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces',
              'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces',
              'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces',
              'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces',
              'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces'
            ].map((photo, i) => {
              const angle = (i / 6) * 2 * Math.PI;
              const radius = 10 * 16;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                >
                  <div
                    className="relative h-14 w-14 animate-float"
                    style={{ animationDelay: `-${i * 0.8}s` }}
                  >
                    <img
                      src={photo}
                      alt={`团队成员 ${i + 1}`}
                      className="h-full w-full animate-counter-orbit rounded-full object-cover shadow-lg border-2 border-white/20"
                      style={{ '--orbit-duration': '25s' } as React.CSSProperties}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Middle Circle - 8 avatars */}
          <div
            className="absolute inset-0 z-0 animate-orbit"
            style={{ '--orbit-duration': '35s' } as React.CSSProperties}
          >
            {[
              'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=faces',
              'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=faces',
              'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150&h=150&fit=crop&crop=faces',
              'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=faces',
              'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=faces',
              'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=faces',
              'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=faces',
              'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=faces'
            ].map((photo, i) => {
              const angle = (i / 8) * 2 * Math.PI;
              const radius = 17.5 * 16;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                >
                  <div
                    className="relative h-12 w-12 animate-float"
                    style={{ animationDelay: `-${i * 1.2}s` }}
                  >
                    <img
                      src={photo}
                      alt={`团队成员 ${i + 7}`}
                      className="h-full w-full animate-counter-orbit rounded-full object-cover shadow-lg border-2 border-white/20"
                      style={{ '--orbit-duration': '35s' } as React.CSSProperties}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Outer Circle - 10 avatars */}
          <div
            className="absolute inset-0 z-0 animate-orbit"
            style={{ '--orbit-duration': '45s' } as React.CSSProperties}
          >
            {[
              'https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=faces',
              'https://images.unsplash.com/photo-1504703395950-b89145a5425b?w=150&h=150&fit=crop&crop=faces',
              'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=faces',
              'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=150&h=150&fit=crop&crop=faces',
              'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=150&h=150&fit=crop&crop=faces',
              'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=150&h=150&fit=crop&crop=faces',
              'https://images.unsplash.com/photo-1507114845806-0347f6150324?w=150&h=150&fit=crop&crop=faces',
              'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=faces',
              'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=150&h=150&fit=crop&crop=faces',
              'https://images.unsplash.com/photo-1506919258185-6078bba55d2a?w=150&h=150&fit=crop&crop=faces'
            ].map((photo, i) => {
              const angle = (i / 10) * 2 * Math.PI;
              const radius = 25 * 16;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                >
                  <div
                    className="relative h-10 w-10 animate-float"
                    style={{ animationDelay: `-${i * 1.5}s` }}
                  >
                    <img
                      src={photo}
                      alt={`团队成员 ${i + 15}`}
                      className="h-full w-full animate-counter-orbit rounded-full object-cover shadow-lg border-2 border-white/20"
                      style={{ '--orbit-duration': '45s' } as React.CSSProperties}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* CSS Animations */}
          <style jsx>{`
            @keyframes orbit {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes counter-orbit {
              from { transform: rotate(0deg); }
              to { transform: rotate(-360deg); }
            }
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-12px); }
            }
            .animate-orbit {
              animation: orbit var(--orbit-duration) linear infinite;
            }
            .animate-counter-orbit {
              animation: counter-orbit var(--orbit-duration) linear infinite;
            }
            .animate-float {
              animation: float 6s ease-in-out infinite;
            }
          `}</style>
        </div>
      </section>

      {/* Partners Section - Domestic */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              国内合伙人
            </h2>
            <p className="text-xl text-white/50">携手共建安全社群</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                name: '李雪',
                username: '@雪染',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: '打造7人BDSM圈层',
                description: '通过VIP身份认证成功组建了活跃圈层，现在主持每月定期线下聚会。',
                location: '上海 - Dom',
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '清风',
                username: '@清风',
                role: '高级会员',
                badge: '高级',
                badgeColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                title: '参加了15场线下聚会',
                description: '线下活动直通高层，参与各类资深BDSM社交场合，每个都有所收获。',
                location: '海风 - Switch',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '云舒',
                username: '@云舒',
                role: '高级会员',
                badge: '高级',
                badgeColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                title: '找到了理想的Dom',
                description: '经过3个月的细心交流，终于找到了志同道合的Dom，感谢平台。',
                location: '云舒 - Sub',
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '月彩',
                username: '@月影',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: '连接了10+城市的优质社群',
                description: 'VIP会员的特权让我获得了不同城市的BDSM社交圈入场券。',
                location: '北京 - Domme',
                avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '蓝天',
                username: '@晨曦',
                role: '赞助合伙人',
                badge: '赞助',
                badgeColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
                title: '赞助线下活动场地',
                description: '为社群提供高端场地支持，每月赞助2-3场专业BDSM交流活动。',
                location: '深圳 - 赞助商',
                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '星辰',
                username: '@星辰',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: '组织了跨城市BDSM交流',
                description: '作为资深会员，成功促成了京沪深三地的文化交流活动。',
                location: '广州 - Master',
                avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '幻影',
                username: '@幻影',
                role: '高级会员',
                badge: '高级',
                badgeColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                title: '享受到专业咨询服务',
                description: '平台的心理咨询师帮助我建立了健康的BDSM关系观。',
                location: '成都 - Sub',
                avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '紫藤',
                username: '@紫藤',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: '建立了女性专属圈层',
                description: '组建了女性BDSM爱好者互助小组，现有成员30+人。',
                location: '杭州 - Domme',
                avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '夜枭',
                username: '@夜枭',
                role: '赞助合伙人',
                badge: '赞助',
                badgeColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
                title: '投资社群教育项目',
                description: '资助平台开发BDSM安全教育课程，惠及数千名新人。',
                location: '南京 - 投资人',
                avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '若水',
                username: '@若水',
                role: '高级会员',
                badge: '高级',
                badgeColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                title: '参与了20+场活动',
                description: '活跃的社群成员，热心分享经验，帮助新人快速融入。',
                location: '武汉 - Switch',
                avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '寒冰',
                username: '@寒冰',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: '创办BDSM工作坊',
                description: '定期举办绳艺、调教技巧等专业工作坊，学员超过200人。',
                location: '西安 - Master',
                avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '落樱',
                username: '@落樱',
                role: '高级会员',
                badge: '高级',
                badgeColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                title: '找到了理想的关系模式',
                description: '通过平台的匹配系统，建立了长期稳定的D/S关系。',
                location: '重庆 - Sub',
                avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '青岚',
                username: '@青岚',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: '推广安全实践理念',
                description: '作为资深Dom，致力于传播SSC（安全、理智、知情同意）原则。',
                location: '长沙 - Dom',
                avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '流光',
                username: '@流光',
                role: '赞助合伙人',
                badge: '赞助',
                badgeColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
                title: '提供技术支持服务',
                description: '为平台提供安全加密技术支持，保障用户隐私安全。',
                location: '厦门 - 技术总监',
                avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '墨染',
                username: '@墨染',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: '建立东北地区社群',
                description: '成功在东北三省建立活跃社群网络，成员超过150人。',
                location: '沈阳 - Domme',
                avatar: 'https://images.unsplash.com/photo-1507114845806-0347f6150324?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '霜华',
                username: '@霜华',
                role: '高级会员',
                badge: '高级',
                badgeColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                title: '专注绳艺文化推广',
                description: '作为专业绳师，在平台开设绳艺课程，培养新一代绳艺爱好者。',
                location: '青岛 - Rigger',
                avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '天行',
                username: '@天行',
                role: '赞助合伙人',
                badge: '赞助',
                badgeColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
                title: '赞助年度BDSM大会',
                description: '连续三年赞助全国BDSM文化交流大会，推动行业发展。',
                location: '苏州 - 企业家',
                avatar: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '暮雨',
                username: '@暮雨',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: '创建心理咨询服务',
                description: '作为注册心理咨询师，为社群成员提供专业的心理支持。',
                location: '大连 - Counselor',
                avatar: 'https://images.unsplash.com/photo-1506919258185-6078bba55d2a?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '凌风',
                username: '@凌风',
                role: '高级会员',
                badge: '高级',
                badgeColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                title: '组织新人培训活动',
                description: '每月举办新人入门培训，帮助新成员了解BDSM文化和安全知识。',
                location: '天津 - Educator',
                avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '影舞',
                username: '@影舞',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: '打造高端社交圈层',
                description: 'VIP身份让我接触到志同道合的高端人士，建立了深厚的友谊。',
                location: '珠海 - Master',
                avatar: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '赤焰',
                username: '@赤焰',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: '主持VIP专属沙龙',
                description: '每月组织高端VIP专属交流沙龙，为精英人士提供私密社交空间。',
                location: '佛山 - Domme',
                avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '碧海',
                username: '@碧海',
                role: '高级会员',
                badge: '高级',
                badgeColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                title: '建立海外交流渠道',
                description: '帮助国内会员与海外社群建立联系，促进国际文化交流。',
                location: '宁波 - Connector',
                avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '银河',
                username: '@银河',
                role: '赞助合伙人',
                badge: '赞助',
                badgeColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
                title: '赞助教育培训项目',
                description: '投资开发BDSM在线教育平台，为新人提供系统学习资源。',
                location: '无锡 - 教育投资人',
                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '朝阳',
                username: '@朝阳',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: '创建摄影艺术工作室',
                description: '专注BDSM主题艺术摄影，为社群成员提供专业拍摄服务。',
                location: '济南 - Photographer',
                avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '秋水',
                username: '@秋水',
                role: '高级会员',
                badge: '高级',
                badgeColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                title: '专注情感咨询服务',
                description: '作为情感咨询师，帮助社群成员处理关系中的各类问题。',
                location: '郑州 - Counselor',
                avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '枫叶',
                username: '@枫叶',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: '建立女性赋权社群',
                description: '致力于女性在BDSM中的自我探索和权力表达，成员超过80人。',
                location: '长春 - Feminist Dom',
                avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '炫光',
                username: '@炫光',
                role: '赞助合伙人',
                badge: '赞助',
                badgeColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
                title: '支持社群硬件设施',
                description: '赞助购置专业设备和场地装修，提升社群活动质量。',
                location: '石家庄 - 实业家',
                avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '冰心',
                username: '@冰心',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: '推广医疗安全知识',
                description: '作为医疗从业者，为社群普及BDSM实践中的医疗安全知识。',
                location: '哈尔滨 - Medical Expert',
                avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '翠竹',
                username: '@翠竹',
                role: '高级会员',
                badge: '高级',
                badgeColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                title: '组织户外拓展活动',
                description: '定期组织户外团建和拓展活动，增进社群成员间的信任和默契。',
                location: '南昌 - Organizer',
                avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '烟雨',
                username: '@烟雨',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: '创办文学创作社',
                description: '组织BDSM主题文学创作，出版多部作品，传播健康文化理念。',
                location: '贵阳 - Writer',
                avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '灵犀',
                username: '@灵犀',
                role: '高级会员',
                badge: '高级',
                badgeColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                title: '专注心理疗愈工作',
                description: '运用BDSM元素辅助心理治疗，帮助成员实现自我疗愈。',
                location: '昆明 - Therapist',
                avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '晴空',
                username: '@晴空',
                role: '赞助合伙人',
                badge: '赞助',
                badgeColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
                title: '投资社群APP开发',
                description: '资助开发专属社群移动应用，提升用户体验和服务质量。',
                location: '太原 - Tech Investor',
                avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '玉露',
                username: '@玉露',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: '建立法律咨询服务',
                description: '作为执业律师，为社群成员提供法律咨询和权益保护服务。',
                location: '兰州 - Lawyer',
                avatar: 'https://images.unsplash.com/photo-1507114845806-0347f6150324?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '明月',
                username: '@明月',
                role: '高级会员',
                badge: '高级',
                badgeColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                title: '推广正念冥想实践',
                description: '结合正念冥想与BDSM实践，帮助成员提升身心觉察力。',
                location: '银川 - Mindfulness Coach',
                avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '暗夜',
                username: '@暗夜',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: '运营主题酒店项目',
                description: '开设BDSM主题精品酒店，为会员提供专业私密场所。',
                location: '三亚 - Hotel Owner',
                avatar: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '琉璃',
                username: '@琉璃',
                role: '赞助合伙人',
                badge: '赞助',
                badgeColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
                title: '赞助公益宣传项目',
                description: '支持BDSM去污名化公益宣传，推动社会认知改变。',
                location: '海口 - Philanthropist',
                avatar: 'https://images.unsplash.com/photo-1506919258185-6078bba55d2a?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '追风',
                username: '@追风',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: '创建运动健身社群',
                description: '组织BDSM主题健身活动，倡导健康生活方式。',
                location: '呼和浩特 - Fitness Coach',
                avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '紫霞',
                username: '@紫霞',
                role: '高级会员',
                badge: '高级',
                badgeColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                title: '专注服装设计领域',
                description: '设计BDSM主题服装和配饰，为社群成员提供定制服务。',
                location: '乌鲁木齐 - Designer',
                avatar: 'https://images.unsplash.com/photo-1504703395950-b89145a5425b?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '沧海',
                username: '@沧海',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: '建立商业合作网络',
                description: '连接社群内的创业者和投资人，促进商业合作与发展。',
                location: '拉萨 - Business Connector',
                avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: '流云',
                username: '@流云',
                role: '高级会员',
                badge: '高级',
                badgeColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                title: '组织音乐艺术活动',
                description: '策划BDSM主题音乐会和艺术展，融合艺术与文化。',
                location: '西宁 - Artist',
                avatar: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=150&h=150&fit=crop&crop=faces'
              }
            ].map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative p-5 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <img
                    src={partner.avatar}
                    alt={partner.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white/20"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-bold text-white truncate">
                        {partner.username}
                      </h3>
                    </div>
                    <div className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold text-white ${partner.badgeColor}`}>
                      {partner.badge}
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-bold text-blue-400 mb-2 line-clamp-2">
                  {partner.title}
                </h4>

                <p className="text-sm text-white/70 leading-relaxed mb-3 line-clamp-3">
                  "{partner.description}"
                </p>

                <div className="text-xs text-white/50 border-t border-white/10 pt-3">
                  — {partner.location}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section - International */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              国际合伙人与赞助
            </h2>
            <p className="text-xl text-white/50">全球化布局，共同发展</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                name: 'Sarah Chen',
                username: '@SarahChen',
                role: '赞助合伙人',
                badge: '赞助',
                badgeColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
                title: 'Brand Exposure Increased 300%',
                description: 'Achieved amazing results by sponsoring platform BDSM community, with exceptional event engagement.',
                location: 'Aurora Studio - CMO',
                country: '🇺🇸 USA',
                avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Emily Roberts',
                username: '@EmilyR',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: 'Connected 10+ City Communities',
                description: 'VIP membership granted access to premium BDSM social circles across different cities.',
                location: 'London - Domme',
                country: '🇬🇧 UK',
                avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Alex Morgan',
                username: '@AlexMorgan',
                role: '高级会员',
                badge: '高级',
                badgeColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                title: 'Premium Consulting Services',
                description: 'Professional BDSM consultants helped resolve many questions with expertise and confidentiality.',
                location: 'Toronto - Master',
                country: '🇨🇦 Canada',
                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Yuki Tanaka',
                username: '@YukiTanaka',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: 'Cross-Border BDSM Exchange',
                description: 'Connected with BDSM enthusiasts across Asia through platform, promoting cultural exchange.',
                location: 'Tokyo - Switch',
                country: '🇯🇵 Japan',
                avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Marco Silva',
                username: '@MarcoSilva',
                role: '赞助合伙人',
                badge: '赞助',
                badgeColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
                title: 'Invested in BDSM Education',
                description: 'Angel investor optimistic about platform potential in BDSM education and community building.',
                location: 'Thunder Capital - Founder',
                country: '🇧🇷 Brazil',
                avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Sophie Laurent',
                username: '@SophieLaurent',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: 'International BDSM Summit',
                description: 'Platform provided opportunities to attend international summits, expanding global perspective.',
                location: 'Paris - Domme',
                country: '🇫🇷 France',
                avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Hans Mueller',
                username: '@HansMueller',
                role: '赞助合伙人',
                badge: '赞助',
                badgeColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
                title: 'Sponsored European Expansion',
                description: 'Supporting platform expansion in European market, helping establish localized communities.',
                location: 'Mueller Group - CEO',
                country: '🇩🇪 Germany',
                avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Kim Min-jun',
                username: '@KimMinJun',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: 'Established Korea Chapter',
                description: 'Successfully built active BDSM community in Seoul, hosting monthly cultural exchange events.',
                location: 'Seoul - Master',
                country: '🇰🇷 South Korea',
                avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Isabella Costa',
                username: '@IsabellaCosta',
                role: '高级会员',
                badge: '高级',
                badgeColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                title: 'Promoting Safe Practices',
                description: 'Advocating BDSM safety practices in Latin America, helping newcomers build proper understanding.',
                location: 'Buenos Aires - Educator',
                country: '🇦🇷 Argentina',
                avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'David Chang',
                username: '@DavidChang',
                role: '赞助合伙人',
                badge: '赞助',
                badgeColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
                title: 'Tech Infrastructure Support',
                description: 'Providing cloud services and technical support, ensuring platform stability and data security.',
                location: 'CloudTech - CTO',
                country: '🇸🇬 Singapore',
                avatar: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Jessica Williams',
                username: '@JessicaW',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: 'Global Workshop Organizer',
                description: 'Organizing international BDSM workshops and training sessions across 5 continents.',
                location: 'Sydney - Educator',
                country: '🇦🇺 Australia',
                avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Michael Anderson',
                username: '@MichaelA',
                role: '赞助合伙人',
                badge: '赞助',
                badgeColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
                title: 'Event Space Sponsorship',
                description: 'Sponsoring premium venues for community events, enhancing member experience worldwide.',
                location: 'Anderson Hotels - Owner',
                country: '🇳🇿 New Zealand',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Olivia Martinez',
                username: '@OliviaM',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: 'Mental Health Advocacy',
                description: 'Licensed therapist providing psychological support and counseling for community members.',
                location: 'Barcelona - Therapist',
                country: '🇪🇸 Spain',
                avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Lucas Rossi',
                username: '@LucasRossi',
                role: '高级会员',
                badge: '高级',
                badgeColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                title: 'Photography & Documentation',
                description: 'Professional photographer documenting BDSM culture and art for educational purposes.',
                location: 'Rome - Photographer',
                country: '🇮🇹 Italy',
                avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Emma Thompson',
                username: '@EmmaT',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: 'Literary & Media Projects',
                description: 'Published author and filmmaker creating content about BDSM culture and relationships.',
                location: 'Dublin - Writer',
                country: '🇮🇪 Ireland',
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Anders Petersen',
                username: '@AndersP',
                role: '赞助合伙人',
                badge: '赞助',
                badgeColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
                title: 'Nordic Region Development',
                description: 'Investing in Nordic market expansion, supporting community growth in Scandinavian countries.',
                location: 'Petersen Ventures - CEO',
                country: '🇸🇪 Sweden',
                avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Nina Larsen',
                username: '@NinaLarsen',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: 'Wellness & Safety Programs',
                description: 'Developing comprehensive wellness and safety programs for BDSM practitioners.',
                location: 'Oslo - Health Coach',
                country: '🇳🇴 Norway',
                avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Rafael Santos',
                username: '@RafaelS',
                role: '高级会员',
                badge: '高级',
                badgeColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                title: 'Cultural Exchange Programs',
                description: 'Facilitating cultural exchanges between Latin American and global BDSM communities.',
                location: 'Mexico City - Coordinator',
                country: '🇲🇽 Mexico',
                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Sophia Van Der Berg',
                username: '@SophiaVDB',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: 'Legal Advisory Services',
                description: 'Providing legal consultation and rights protection for community members in Europe.',
                location: 'Amsterdam - Lawyer',
                country: '🇳🇱 Netherlands',
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Thomas Dubois',
                username: '@ThomasD',
                role: '赞助合伙人',
                badge: '赞助',
                badgeColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
                title: 'Fashion & Design Sponsor',
                description: 'Sponsoring BDSM-themed fashion shows and supporting community designers.',
                location: 'Dubois Fashion - Designer',
                country: '🇧🇪 Belgium',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Victoria Knight',
                username: '@VictoriaK',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: 'Educational Content Creator',
                description: 'Creating comprehensive online courses and educational materials for BDSM practices.',
                location: 'Manchester - Educator',
                country: '🇬🇧 UK',
                avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Dmitri Volkov',
                username: '@DmitriV',
                role: '高级会员',
                badge: '高级',
                badgeColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                title: 'Community Building Expert',
                description: 'Establishing BDSM communities in Eastern Europe, focusing on safety and education.',
                location: 'Moscow - Organizer',
                country: '🇷🇺 Russia',
                avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Anna Kowalski',
                username: '@AnnaK',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: 'Central Europe Coordinator',
                description: 'Coordinating activities and events across Central European BDSM communities.',
                location: 'Warsaw - Community Lead',
                country: '🇵🇱 Poland',
                avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'James O\'Brien',
                username: '@JamesOB',
                role: '赞助合伙人',
                badge: '赞助',
                badgeColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
                title: 'Technology Platform Sponsor',
                description: 'Funding advanced technology solutions for community safety and communication.',
                location: 'O\'Brien Tech - Founder',
                country: '🇺🇸 USA',
                avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Mia Johnson',
                username: '@MiaJohnson',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: 'Music & Art Integration',
                description: 'Integrating BDSM themes into music and performance art across North America.',
                location: 'Los Angeles - Artist',
                country: '🇺🇸 USA',
                avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Liam Murphy',
                username: '@LiamM',
                role: '高级会员',
                badge: '高级',
                badgeColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                title: 'Fitness & Training Programs',
                description: 'Developing specialized fitness programs for BDSM practitioners and enthusiasts.',
                location: 'Boston - Trainer',
                country: '🇺🇸 USA',
                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Charlotte Dubois',
                username: '@CharlotteD',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: 'Luxury Event Planning',
                description: 'Planning exclusive VIP events and gatherings for high-end community members.',
                location: 'Geneva - Event Planner',
                country: '🇨🇭 Switzerland',
                avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Wei Zhang',
                username: '@WeiZhang',
                role: '赞助合伙人',
                badge: '赞助',
                badgeColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
                title: 'Asia-Pacific Investment',
                description: 'Major investor in Asia-Pacific market development and community infrastructure.',
                location: 'Zhang Capital - Chairman',
                country: '🇭🇰 Hong Kong',
                avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Priya Sharma',
                username: '@PriyaSharma',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: 'South Asian Outreach',
                description: 'Building BDSM communities in South Asia with focus on cultural sensitivity.',
                location: 'Mumbai - Community Builder',
                country: '🇮🇳 India',
                avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Ahmed Al-Rashid',
                username: '@AhmedAR',
                role: '高级会员',
                badge: '高级',
                badgeColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                title: 'Middle East Coordinator',
                description: 'Discreetly connecting Middle Eastern community members through secure channels.',
                location: 'Dubai - Coordinator',
                country: '🇦🇪 UAE',
                avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Natasha Ivanova',
                username: '@NatashaI',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: 'Dance & Movement Therapy',
                description: 'Incorporating BDSM elements into therapeutic dance and movement practices.',
                location: 'St. Petersburg - Therapist',
                country: '🇷🇺 Russia',
                avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Carlos Mendoza',
                username: '@CarlosM',
                role: '赞助合伙人',
                badge: '赞助',
                badgeColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
                title: 'Resort & Venue Sponsor',
                description: 'Operating BDSM-friendly resorts and venues across Latin America.',
                location: 'Mendoza Resorts - CEO',
                country: '🇨🇴 Colombia',
                avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Leah Cohen',
                username: '@LeahCohen',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: 'Academic Research Lead',
                description: 'Leading academic research on BDSM practices and community dynamics.',
                location: 'Tel Aviv - Researcher',
                country: '🇮🇱 Israel',
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Erik Johansson',
                username: '@ErikJ',
                role: '高级会员',
                badge: '高级',
                badgeColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                title: 'Tech Security Expert',
                description: 'Ensuring platform security and member privacy through advanced encryption.',
                location: 'Stockholm - Security Engineer',
                country: '🇸🇪 Sweden',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Grace Tan',
                username: '@GraceTan',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: 'Southeast Asia Network',
                description: 'Building strong community networks across Southeast Asian countries.',
                location: 'Kuala Lumpur - Network Lead',
                country: '🇲🇾 Malaysia',
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Benjamin Lee',
                username: '@BenjaminLee',
                role: '赞助合伙人',
                badge: '赞助',
                badgeColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
                title: 'Media Production Support',
                description: 'Funding documentary and educational media projects about BDSM culture.',
                location: 'Lee Media - Producer',
                country: '🇦🇺 Australia',
                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Marie Leclerc',
                username: '@MarieLeclerc',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: 'French Community Leader',
                description: 'Leading vibrant French-speaking BDSM community across multiple countries.',
                location: 'Lyon - Community Leader',
                country: '🇫🇷 France',
                avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Ryan Mitchell',
                username: '@RyanM',
                role: '高级会员',
                badge: '高级',
                badgeColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                title: 'Coaching & Mentorship',
                description: 'Providing mentorship and coaching for newcomers to BDSM lifestyle.',
                location: 'Chicago - Coach',
                country: '🇺🇸 USA',
                avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Helena Santos',
                username: '@HelenaS',
                role: 'VIP会员',
                badge: 'VIP',
                badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
                title: 'Portuguese Network',
                description: 'Connecting Portuguese-speaking communities worldwide through platform.',
                location: 'Lisbon - Connector',
                country: '🇵🇹 Portugal',
                avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=faces'
              }
            ].map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative p-5 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <img
                    src={partner.avatar}
                    alt={partner.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white/20"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-bold text-white truncate">
                        {partner.username}
                      </h3>
                    </div>
                    <div className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold text-white ${partner.badgeColor}`}>
                      {partner.badge}
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-bold text-blue-400 mb-2 line-clamp-2">
                  {partner.title}
                </h4>

                <p className="text-sm text-white/70 leading-relaxed mb-3 line-clamp-3">
                  "{partner.description}"
                </p>

                <div className="space-y-1 text-xs text-white/50 border-t border-white/10 pt-3">
                  <div>— {partner.location}</div>
                  <div>{partner.country}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 text-center"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              我们的使命
            </h2>
            <p className="text-xl sm:text-2xl text-white/60 leading-relaxed">
              打破社会对BDSM的误解和偏见，建立一个安全、健康、负责任的交流空间。
              我们相信，每个人都有权利以自己喜欢的方式探索和表达自我，
              只要建立在相互尊重、知情同意和安全的基础之上。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              核心价值观
            </h2>
            <p className="text-xl text-white/50">我们坚守的原则</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:bg-white/15 transition-all">
                    {value.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              平台特色
            </h2>
            <p className="text-xl text-white/50">
              专为社群设计的功能
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="text-blue-400">{feature.icon}</div>
                <span className="text-white/80">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
        </div>

        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              发展历程
            </h2>
            <p className="text-xl text-white/50">从创立到现在，一路前行</p>
          </motion.div>

          <div className="space-y-0">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } gap-8 lg:gap-16`}
              >
                {/* Content Card */}
                <div className="flex-1">
                  <div
                    className={`group relative p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                      milestone.isPlan
                        ? 'bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-400/30 hover:border-purple-400/50'
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                  >
                    {milestone.isPlan && (
                      <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-semibold text-white">
                        规划中
                      </div>
                    )}
                    <div className={`text-sm font-semibold mb-2 ${
                      milestone.isPlan ? 'text-purple-400' : 'text-blue-400'
                    }`}>
                      {milestone.year}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Center dot and line */}
                <div className="flex-shrink-0 relative z-10">
                  <div
                    className={`w-4 h-4 rounded-full border-4 transition-all duration-300 ${
                      milestone.isPlan
                        ? 'bg-purple-500 border-purple-400/30'
                        : 'bg-blue-500 border-blue-400/30'
                    }`}
                  />
                </div>

                {/* Spacer */}
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8 p-12 rounded-3xl bg-white/5 border border-white/10"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              准备好加入我们了吗？
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              成为这个充满活力、相互尊重的社群的一员
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="https://work.weixin.qq.com/kfid/kfc277e93e4fa92b3e9" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 bg-white text-black font-semibold text-lg rounded-2xl hover:shadow-2xl hover:shadow-white/20 transition-all"
                >
                  立即加入
                </motion.button>
              </a>
              <a href="https://work.weixin.qq.com/kfid/kfc277e93e4fa92b3e9" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 text-white font-semibold text-lg rounded-2xl border-2 border-white/20 hover:border-white/40 hover:bg-white/5 transition-all"
                >
                  了解更多
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-white/40 text-sm">
          © 2025 Go社区. 保留所有权利.
        </div>
      </footer>
    </div>
  );
}
