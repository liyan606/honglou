'use client';

import { Pricing } from '@/components/ui/pricing';
import { TubelightNavbar } from '@/components/ui/tubelight-navbar';
import { FloatingActionMenu } from '@/components/ui/floating-action-menu';
import { Component as EtheralShadow } from '@/components/ui/etheral-shadow';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, X } from 'lucide-react';

const navItems = [
  { label: '首页', href: '/' },
  { label: '关于我们', href: '/about' },
  { label: '博客', href: '/blog' },
  { label: '价格方案', href: '/pricing' },
  { label: '常见问题', href: '/faq' },
];

const pricingTiers = [
  {
    name: '标准会员',
    price: '$288',
    period: '年',
    description: '开启BDSM社交之旅',
    features: [
      { text: '完整社交功能', included: true },
      { text: '智能匹配推荐', included: true },
      { text: '参加线下活动', included: true },
      { text: '无限私信交流', included: true },
      { text: '身份标签定制', included: true },
      { text: '教育资源访问', included: true },
      { text: '活动优先报名', included: false },
    ],
  },
  {
    name: '高级会员',
    price: '$888',
    period: '年',
    description: '深度参与，享受完整体验',
    highlighted: true,
    features: [
      { text: '标准会员所有功能', included: true },
      { text: '活动优先报名', included: true },
      { text: '专属会员勋章', included: true },
      { text: '月度1对1咨询', included: true },
      { text: '高级匹配算法', included: true },
      { text: '私密圈层访问', included: true },
      { text: '举办私密聚会', included: false },
    ],
  },
  {
    name: 'VIP会员',
    price: '$2520',
    period: '年',
    description: '尊享顶级特权与服务',
    features: [
      { text: '高级会员所有功能', included: true },
      { text: '专属VIP标识', included: true },
      { text: '举办私密聚会', included: true },
      { text: '每周1对1咨询', included: true },
      { text: '全国活动通票', included: true },
      { text: '定制化推荐', included: true },
      { text: '年度尊享礼包', included: true },
    ],
  },
  {
    name: '赞助会员',
    price: '联系我们',
    period: '定制',
    description: '支持社群发展，享受专属回馈',
    isCustom: true,
    features: [
      { text: 'VIP会员所有权益', included: true },
      { text: '赞助商专属标识', included: true },
      { text: '社群决策参与权', included: true },
      { text: '品牌推广机会', included: true },
      { text: '活动冠名权', included: true },
      { text: '专属客服经理', included: true },
      { text: '定制化合作方案', included: true },
    ],
  },
  {
    name: '社区合伙人',
    price: '邀请制',
    period: '长期',
    description: '共建社群，分享成长收益',
    isCustom: true,
    features: [
      { text: '所有会员权益', included: true },
      { text: '合伙人专属身份', included: true },
      { text: '收益分成权', included: true },
      { text: '战略决策参与', included: true },
      { text: '区域独家运营', included: true },
      { text: '品牌共建权', included: true },
      { text: '资源优先配置', included: true },
    ],
  },
];

export default function PricingPage() {
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
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-6">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              开启你的{' '}
              <span className="text-gradient">
                BDSM
              </span>
              {' '}社交之旅
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              选择适合你的会员等级，享受安全、尊重、包容的社群体验
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative py-12 sm:py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Pricing tiers={pricingTiers} />
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="relative py-12 sm:py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              还有疑问？
            </h2>
            <p className="text-lg text-white/70 mb-8">
              查看常见问题或联系我们的社群管理团队
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/faq">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-2xl font-semibold backdrop-blur-xl border bg-white text-black hover:bg-white/90 transition-colors"
                >
                  查看常见问题
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl font-semibold backdrop-blur-xl border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                联系客服
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="relative py-12 sm:py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              所有会员共享
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '隐私保护',
                description: '端到端加密，保护你的身份和隐私',
              },
              {
                title: '实名认证',
                description: '可选实名认证，提升信任度',
              },
              {
                title: '安全环境',
                description: '严格的社群规则和审核机制',
              },
              {
                title: '24/7 在线',
                description: '社群平台全天候稳定运行',
              },
              {
                title: '教育资源',
                description: 'BDSM知识库和安全指南',
              },
              {
                title: '透明收费',
                description: '没有隐藏费用，随时可退订',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/60">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative py-12 sm:py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              谁适合加入
            </h2>
            <p className="text-xl text-white/60">
              不同会员等级适合不同的社群参与需求
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                plan: '标准会员',
                title: '新晋成员',
                description: '认真探索BDSM，寻找圈内朋友',
                features: ['完整社交功能', '智能匹配推荐', '参加线下活动', '无限私信交流'],
                color: 'from-blue-500 to-cyan-500'
              },
              {
                plan: '高级会员',
                title: '活跃参与者',
                description: '深度参与社群，建立长期关系',
                features: ['活动优先报名', '月度1对1咨询', '私密圈层访问', '专属会员勋章'],
                color: 'from-purple-500 to-pink-500'
              },
              {
                plan: 'VIP会员',
                title: '资深玩家',
                description: '享受顶级服务，引领社群文化',
                features: ['每周专属咨询', '全国活动通票', '举办私密聚会', '年度尊享礼包'],
                color: 'from-orange-500 to-red-500'
              },
              {
                plan: '赞助会员',
                title: '社群赞助商',
                description: '支持社群发展，获得品牌曝光',
                features: ['赞助商标识', '活动冠名权', '品牌推广机会', '决策参与权'],
                color: 'from-green-500 to-emerald-500'
              },
              {
                plan: '社区合伙人',
                title: '战略合作者',
                description: '共建社群生态，分享长期收益',
                features: ['收益分成权', '区域独家运营', '战略决策权', '品牌共建权'],
                color: 'from-yellow-500 to-amber-500'
              },
            ].map((useCase, index) => (
              <motion.div
                key={useCase.plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${useCase.color} text-white text-sm font-semibold mb-4`}>
                  {useCase.plan}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-white/70 mb-6">{useCase.description}</p>
                <div className="space-y-3">
                  {useCase.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="relative py-12 sm:py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              会员真实反馈
            </h2>
            <p className="text-xl text-white/60">
              听听其他成员的社群体验
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                company: '会员 @晨曦',
                plan: '高级会员',
                result: '3个月认识了12位志同道合的朋友',
                quote: '这个平台让我找到了真正理解BDSM文化的群体，安全感十足，交流氛围特别好。',
                author: '晨曦 - Dom',
                avatar: 'https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=chenxi'
              },
              {
                company: '会员 @夜语',
                plan: 'VIP会员',
                result: '成功组织了5场私密聚会',
                quote: 'VIP会员的专属服务让我能够组织高质量的线下活动，结识了很多优质的圈内人士。',
                author: '夜语 - Switch',
                avatar: 'https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=yeyu'
              },
              {
                company: '会员 @静水',
                plan: '高级会员',
                result: '找到了理想的长期伴侣',
                quote: '智能匹配功能非常精准，帮我找到了三观契合、实践风格相近的伴侣，非常感谢平台。',
                author: '静水 - Sub',
                avatar: 'https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=jingshui'
              },
              {
                company: '会员 @流光',
                plan: '标准会员',
                result: '3个月成功融入圈子',
                quote: '作为标准会员已经能够满足我的基本社交需求，匹配功能很实用，活动也很丰富。',
                author: '流光 - Dom',
                avatar: 'https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=liuguang'
              },
              {
                company: '会员 @星辰',
                plan: 'VIP会员',
                result: '每月参加8场高质量活动',
                quote: 'VIP的活动优先权让我从不错过精彩聚会，认识了整个城市的BDSM圈子。',
                author: '星辰 - Master',
                avatar: 'https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=xingchen'
              },
              {
                company: '会员 @暮雨',
                plan: '高级会员',
                result: '获得了专业的实践指导',
                quote: '平台的教育资源和一对一咨询让我从零基础成长为有经验的实践者，非常专业。',
                author: '暮雨 - Sub',
                avatar: 'https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=muyu'
              },
              {
                company: '会员 @青衫',
                plan: '高级会员',
                result: '2个月建立了稳定的实践关系',
                quote: '匹配算法真的很准，推荐的对象都很合适，沟通起来特别舒服自然。',
                author: '青衫 - Switch',
                avatar: 'https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=qingshan'
              },
              {
                company: '会员 @深蓝',
                plan: 'VIP会员',
                result: '成功举办了3场主题工作坊',
                quote: 'VIP权限让我可以组织专业的BDSM工作坊，帮助更多新手正确入门。',
                author: '深蓝 - Mistress',
                avatar: 'https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=shenlan'
              },
              {
                company: '会员 @微光',
                plan: '高级会员',
                result: '安全感提升200%',
                quote: '平台的实名认证和严格审核让我感到非常安全，可以放心地深入交流。',
                author: '微光 - Sub',
                avatar: 'https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=weiguang'
              },
              {
                company: '会员 @墨染',
                plan: 'VIP会员',
                result: '打造了私人BDSM圈层',
                quote: '通过VIP身份认识的都是高质量玩家，现在已经形成了稳定的私密圈子。',
                author: '墨染 - Dom',
                avatar: 'https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=moran'
              },
              {
                company: '会员 @清风',
                plan: '高级会员',
                result: '参加了15场线下聚会',
                quote: '线下活动质量很高，参与者素质都很好，每次都有新的收获和感悟。',
                author: '清风 - Switch',
                avatar: 'https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=qingfeng'
              },
              {
                company: '会员 @月影',
                plan: 'VIP会员',
                result: '连接了10+城市的优质社群',
                quote: 'VIP全国通用的特权让我在不同城市都能快速融入当地的BDSM社群。',
                author: '月影 - Domme',
                avatar: 'https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=yueying'
              },
              {
                company: '会员 @云舒',
                plan: '高级会员',
                result: '找到了理想的Dom',
                quote: '经过3个月的匹配和交流，终于找到了契合度最高的Dom，感谢平台！',
                author: '云舒 - Sub',
                avatar: 'https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=yunshu'
              },
              {
                company: '会员 @霜华',
                plan: 'VIP会员',
                result: '享受到顶级咨询服务',
                quote: '每月两次的1对1专业咨询让我解决了实践中的很多困惑，服务非常贴心。',
                author: '霜华 - Master',
                avatar: 'https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=shuanghua'
              },
              {
                company: '赞助商 @极光工作室',
                plan: '赞助会员',
                result: '品牌曝光提升300%',
                quote: '通过赞助会员身份，我们的品牌在BDSM圈层获得了很好的认知度，活动冠名效果显著。',
                author: '极光工作室 - CMO',
                avatar: 'https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=jiguang'
              },
              {
                company: '合伙人 @陈总',
                plan: '社区合伙人',
                result: '年收益突破百万',
                quote: '作为区域合伙人，分成模式很公平，运营支持到位，社群氛围也好，是个长期事业。',
                author: '陈总 - 华南区合伙人',
                avatar: 'https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=chenzong'
              },
            ].map((story, index) => (
              <motion.div
                key={story.company}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (index % 6) * 0.05 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all group"
              >
                <div className="flex items-start gap-3 mb-4">
                  <img 
                    src={story.avatar} 
                    alt={story.author}
                    className="w-12 h-12 rounded-full ring-2 ring-white/20 group-hover:ring-blue-400/50 transition-all"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white mb-1 truncate">{story.company}</h3>
                    <div className="text-xs text-blue-400">{story.plan}</div>
                  </div>
                </div>
                <div className="text-lg font-bold text-blue-400 mb-3">{story.result}</div>
                <p className="text-white/70 text-sm italic mb-3 line-clamp-3">"{story.quote}"</p>
                <div className="text-xs text-white/50">— {story.author}</div>
              </motion.div>
            ))}
          </div>

          {/* Stats Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
              <span className="text-white/60">已有</span>
              <span className="text-2xl font-bold text-white">20,000+</span>
              <span className="text-white/60">位会员加入我们的社群</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Features Comparison Table */}
      <section className="relative py-12 sm:py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              会员权益对比
            </h2>
            <p className="text-lg text-white/70">
              了解不同会员等级的详细权益差异
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 overflow-x-auto"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-6 text-white/70 font-semibold">权益项目</th>
                  <th className="py-4 px-6 text-white font-semibold text-sm">标准会员<br/><span className="text-xs text-white/50">$288/年</span></th>
                  <th className="py-4 px-6 text-white font-semibold bg-white/5 rounded-t-xl text-sm">
                    <div className="text-blue-400">高级会员</div>
                    <div className="text-xs text-white/50 font-normal mt-1">$888/年 · 推荐</div>
                  </th>
                  <th className="py-4 px-6 text-white font-semibold text-sm">VIP会员<br/><span className="text-xs text-white/50">$2520/年</span></th>
                  <th className="py-4 px-6 text-white font-semibold text-sm">特殊会员<br/><span className="text-xs text-white/50">定制</span></th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: '完整社交功能', standard: true, pro: true, vip: true, special: true },
                  { feature: '私信交流', standard: '无限', pro: '无限', vip: '无限', special: '无限' },
                  { feature: '智能匹配推荐', standard: '每日20人', pro: '每日50人', vip: '无限', special: '无限' },
                  { feature: '身份标签定制', standard: '5个', pro: '15个', vip: '无限', special: '无限' },
                  { feature: '参加线下活动', standard: true, pro: true, vip: true, special: true },
                  { feature: '活动优先报名', standard: false, pro: '提前3天', vip: '提前7天', special: '随时' },
                  { feature: '教育资源访问', standard: true, pro: true, vip: true, special: true },
                  { feature: '隐私保护', standard: true, pro: true, vip: true, special: true },
                  { feature: '照片上传', standard: '10张', pro: '30张', vip: '无限', special: '无限' },
                  { feature: '视频验证', standard: true, pro: true, vip: true, special: true },
                  { feature: '会员勋章', standard: false, pro: '高级勋章', vip: 'VIP勋章', special: '专属勋章' },
                  { feature: '1对1咨询', standard: false, pro: '每月1次', vip: '每周1次', special: '无限' },
                  { feature: '高级匹配算法', standard: false, pro: true, vip: true, special: true },
                  { feature: '私密圈层访问', standard: false, pro: true, vip: true, special: true },
                  { feature: '举办私密聚会', standard: false, pro: false, vip: true, special: true },
                  { feature: '全国活动通票', standard: false, pro: false, vip: true, special: true },
                  { feature: '专属客服经理', standard: false, pro: false, vip: false, special: true },
                  { feature: '品牌推广机会', standard: false, pro: false, vip: false, special: true },
                  { feature: '决策参与权', standard: false, pro: false, vip: false, special: true },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 text-white">{row.feature}</td>
                    <td className="py-4 px-6 text-center text-white/70 text-sm">
                      {typeof row.standard === 'boolean' ? (
                        row.standard ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />
                      ) : (
                        row.standard
                      )}
                    </td>
                    <td className="py-4 px-6 text-center text-white bg-white/5 text-sm">
                      {typeof row.pro === 'boolean' ? (
                        row.pro ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />
                      ) : (
                        row.pro
                      )}
                    </td>
                    <td className="py-4 px-6 text-center text-white/70 text-sm">
                      {typeof row.vip === 'boolean' ? (
                        row.vip ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />
                      ) : (
                        row.vip
                      )}
                    </td>
                    <td className="py-4 px-6 text-center text-white/70 text-sm">
                      {typeof row.special === 'boolean' ? (
                        row.special ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />
                      ) : (
                        row.special
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { title: '$288', subtitle: '年费起' },
              { title: '24/7', subtitle: '在线平台' },
              { title: '20K+', subtitle: '活跃用户' },
              { title: '端到端', subtitle: '隐私加密' },
            ].map((badge, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{badge.title}</div>
                <div className="text-white/60">{badge.subtitle}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-white/60 text-sm">
          © 2025 Go社区. 保留所有权利.
        </div>
      </footer>

      {/* Floating Action Menu */}
      <FloatingActionMenu />

    </div>
  );
}

