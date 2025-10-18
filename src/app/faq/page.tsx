'use client';

import { FAQ } from '@/components/ui/faq';
import { FAQ as FAQTabs } from '@/components/ui/faq-tabs';
import { TubelightNavbar } from '@/components/ui/tubelight-navbar';
import { FloatingActionMenu } from '@/components/ui/floating-action-menu';
import { Component as EtheralShadow } from '@/components/ui/etheral-shadow';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Rocket, BookOpen, Users, Headphones } from 'lucide-react';

const navItems = [
  { label: '首页', href: '/' },
  { label: '关于我们', href: '/about' },
  { label: '功能特性', href: '/#features' },
  { label: '价格方案', href: '/pricing' },
];

const faqItems = [
  {
    question: '什么是Go社区，它提供哪些服务？',
    answer: 'Go社区是一个专业的BDSM文化交流平台，致力于为BDSM爱好者提供安全、包容、尊重的交流空间。我们提供会员匹配、线下活动组织、教育资源、心理咨询等全方位服务，帮助成员建立健康的BDSM关系。',
  },
  {
    question: '加入社群需要实名认证吗？',
    answer: '实名认证是可选的。我们提供匿名会员和实名认证两种选项。实名认证会员可以享受更多权益，包括参加高级活动、访问VIP社区等。我们承诺严格保护所有会员的隐私信息，认证信息经过加密存储，不会向第三方泄露。',
  },
  {
    question: '如何确保平台的安全性和隐私保护？',
    answer: '安全和隐私是我们的首要任务。我们采用端到端加密技术保护通信内容，使用银行级别的数据加密保护用户信息。平台设有严格的审核机制和举报系统，24/7安全团队监控可疑活动。所有会员需遵守社群行为准则，违规者将被永久封禁。',
  },
  {
    question: 'VIP会员和普通会员有什么区别？',
    answer: 'VIP会员享有更多特权：优先参加线下聚会和工作坊、访问VIP专属社区、获得专业导师一对一指导、优先匹配系统推荐、参加国际交流活动、免费心理咨询服务等。VIP会员还可享受合作商家折扣和年度大会门票优惠。',
  },
  {
    question: '平台如何处理不当行为和投诉？',
    answer: '我们设有完善的投诉处理机制。会员可通过平台随时举报不当行为，我们的安全团队会在24小时内调查并处理。对于骚扰、欺诈、暴力等严重违规行为，我们会立即封禁账户并保留追究法律责任的权利。我们致力于维护一个安全、健康的社群环境。',
  },
  {
    question: '如何参加线下活动？',
    answer: '会员可以在平台活动日历中浏览即将举办的线下活动。VIP会员享有优先报名权。活动包括新人交流会、主题工作坊、绳艺课程、BDSM文化讲座等。所有活动都经过严格筛选，在安全私密的场所举办，并有专业人员现场协调。',
  },
  {
    question: '平台提供哪些教育资源？',
    answer: '我们提供丰富的教育内容：BDSM基础知识课程、安全实践指南、心理健康资料、关系沟通技巧、绳艺和调教技术教程等。所有内容由专业人士编写审核，确保信息准确安全。VIP会员还可访问进阶课程和专家讲座视频。',
  },
  {
    question: '如何取消会员订阅？',
    answer: '您可以随时在账户设置中取消订阅。取消后，您的会员权益将持续到当前计费周期结束。我们不收取取消费用，您也可以随时重新订阅。如需帮助，请联系客服团队。',
  },
  {
    question: '平台支持哪些支付方式？',
    answer: '我们支持微信支付、支付宝、信用卡/借记卡、PayPal等多种支付方式。所有支付都通过加密通道处理，确保资金安全。企业赞助和大额充值可联系客服安排线下支付。',
  },
  {
    question: '新手应该如何开始探索BDSM？',
    answer: '我们建议新手先完成平台的新手指南课程，了解基本概念和安全原则（SSC：安全、理智、知情同意）。然后可参加新人交流会，与经验丰富的成员交流学习。我们还提供免费的心理咨询服务，帮助新人建立正确认知。切记安全第一，循序渐进。',
  },
  {
    question: '平台如何匹配合适的伴侣？',
    answer: '我们的智能匹配系统基于性格测试、兴趣偏好、经验水平、地理位置等多维度分析，为您推荐契合度高的潜在伴侣。VIP会员享有优先匹配权和每月专业匹配顾问服务。建立关系前，我们建议充分沟通，并遵循安全原则。',
  },
  {
    question: '社群有年龄限制吗？',
    answer: '是的，我们严格遵守法律规定。所有会员必须年满18周岁（部分地区为21周岁）。注册时需提供有效身份证明进行年龄验证。我们对未成年人采取零容忍政策，一经发现立即封禁并报告相关部门。',
  },
];

export default function FAQPage() {
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
              常见{' '}
              <span className="text-gradient">
                问题
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              查找有关我们平台、定价和功能的常见问题答案。
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-10 sm:py-14 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="relative py-10 sm:py-14 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              还有其他问题？
            </h2>
            <p className="text-lg text-white/70 mb-8">
              我们的支持团队随时为您提供帮助。请联系我们，我们会尽快回复您。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://work.weixin.qq.com/kfid/kfc277e93e4fa92b3e9" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-2xl font-semibold backdrop-blur-xl border bg-white text-black hover:bg-white/90 transition-colors"
                >
                  联系支持
                </motion.button>
              </a>
              <a href="https://work.weixin.qq.com/kfid/kfc277e93e4fa92b3e9" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-2xl font-semibold backdrop-blur-xl border border-white/20 text-white hover:bg-white/10 transition-colors"
                >
                  查看价格
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resources */}
      <section className="relative py-10 sm:py-14 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              实用资源
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '教育资源',
                description: 'BDSM基础知识和进阶课程',
              },
              {
                title: '安全指南',
                description: '实践安全、心理健康和紧急处理',
              },
              {
                title: '社群论坛',
                description: '加入数千名会员的交流讨论',
              },
            ].map((resource, index) => (
              <motion.a
                key={index}
                href="https://work.weixin.qq.com/kfid/kfc277e93e4fa92b3e9"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass rounded-2xl p-8 block group"
              >
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-gradient transition-colors">
                  {resource.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {resource.description}
                </p>
                <div className="mt-4 text-blue-400 group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                  了解更多 →
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Tabs Section */}
      <section className="relative py-10 sm:py-14 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FAQTabs
            title="分类常见问题"
            subtitle="按主题浏览问题"
            categories={{
              "newbie": "新手入门",
              "safety": "安全守则",
              "membership": "会员服务",
              "privacy": "隐私保护"
            }}
            faqData={{
              "newbie": [
                {
                  question: "什么是BDSM？我适合加入吗？",
                  answer: "BDSM是Bondage绑缚、Discipline调教、Dominance支配、Submission臣服、Sadism施虐、Masochism受虐的缩写。如果您对权力交换、角色扮演、感官探索感兴趣，并且能够尊重他人、遵守SSC原则（安全、理智、知情同意），欢迎加入我们的社群。"
                },
                {
                  question: "新人应该从哪里开始学习？",
                  answer: "我们建议新人先完成「新手必修课」，了解基本术语、安全原则和社群文化。然后可以参加线上新手交流会，与资深会员交流经验。我们还提供免费的入门书籍和视频教程。切记：安全第一，循序渐进。"
                },
                {
                  question: "如何找到合适的搭档？",
                  answer: "平台提供智能匹配系统，根据您的性格、偏好、经验水平推荐合适的人选。建议先通过文字聊天建立信任，然后视频通话进一步了解。首次见面建议选择公共场所，并告知朋友您的行踪。充分沟通，建立安全词。"
                },
                {
                  question: "D/S关系应该如何建立和维护？",
                  answer: "健康的D/S关系建立在相互尊重、信任和沟通的基础上。双方应该明确界限、讨论安全词、制定规则和合约。定期进行关系评估，及时沟通感受和需求。记住：知情同意是前提，任何一方都有随时说'不'的权利。"
                }
              ],
              "safety": [
                {
                  question: "什么是SSC原则？",
                  answer: "SSC代表Safe（安全）、Sane（理智）、Consensual（知情同意）。这是BDSM实践的核心原则。安全是指采取适当防护措施；理智是指在清醒状态下做决定；知情同意是指所有参与者充分了解并自愿同意所有活动。"
                },
                {
                  question: "如何设置安全词？",
                  answer: "安全词是BDSM活动中的紧急停止信号。建议使用交通灯系统：'红灯'=立即停止，'黄灯'=放慢或调整，'绿灯'=继续。选择容易记忆、发音清晰的词语。在无法说话的情况下，可以约定手势或物品掉落作为信号。"
                },
                {
                  question: "绳缚和身体调教有哪些安全注意事项？",
                  answer: "绳缚时避免压迫神经密集区域（如手腕内侧、腋窝、膝盖后方）；准备安全剪刀以便紧急解除；定期检查被缚者的血液循环；设定时间限制。身体调教要了解身体敏感区和禁区，由轻到重，观察反应，避免永久性伤害。"
                },
                {
                  question: "遇到紧急情况应该如何处理？",
                  answer: "如发生紧急医疗状况，立即停止活动，拨打急救电话。保持冷静，提供必要的医疗信息（不必透露BDSM细节）。平台提供24小时紧急支援热线。建议事先了解基本急救知识，并在活动前告知可信赖的朋友您的行踪。"
                }
              ],
              "membership": [
                {
                  question: "各等级会员有什么区别？",
                  answer: "免费会员：基础社区访问、有限匹配次数；高级会员¥99/月：无限匹配、参加线下活动、访问教育资源；VIP会员¥299/月：优先匹配、VIP专属社群、免费心理咨询、导师指导、国际交流活动；SVIP会员¥999/月：全部VIP权益+定制服务+专属管家。"
                },
                {
                  question: "如何升级会员等级？",
                  answer: "进入「会员中心」>「订阅管理」，选择想要的会员等级，完成支付即可立即生效。我们支持月付、季付、年付，年付享受8折优惠。升级差价可抵扣，降级在下个计费周期生效。"
                },
                {
                  question: "线下活动如何报名和参加？",
                  answer: "VIP及以上会员可在「活动日历」中查看和报名线下活动。活动包括新人交流会、主题工作坊、绳艺课程等。报名需填写安全信息表，活动前会收到详细地址和注意事项。活动地点均为私密安全的专业场所。"
                },
                {
                  question: "可以申请退款吗？",
                  answer: "首次订阅会员享有7天无理由退款保证。如对服务不满意，请在7天内联系客服申请退款。自动续费可随时取消，当前周期结束后不再扣费。特殊情况（如账户被盗）可申请特殊退款，需提供证明材料。"
                }
              ],
              "privacy": [
                {
                  question: "我的个人信息会被泄露吗？",
                  answer: "绝对不会。我们采用银行级加密技术保护您的个人信息。实名认证信息仅用于身份验证，不会展示给其他用户。聊天记录采用端到端加密。我们不会向第三方出售或泄露您的数据。员工访问用户数据需经过严格审批和记录。"
                },
                {
                  question: "如何设置隐私保护？",
                  answer: "您可以在「隐私设置」中自定义：选择匿名模式/实名模式；设置谁可以查看您的资料；屏蔽特定用户；隐藏在线状态；设置地理位置模糊范围。我们还提供「隐身模式」，让您在不留痕迹的情况下浏览社区。"
                },
                {
                  question: "照片和视频会被保存吗？",
                  answer: "平台不会主动保存您上传的私密照片和视频。所有媒体文件经过加密传输和存储。您可以设置查看权限，并随时删除。我们严禁会员截图、录屏和传播他人私密内容，违者将被永久封禁并追究法律责任。"
                },
                {
                  question: "遇到骚扰或威胁怎么办？",
                  answer: "立即使用「举报」功能，我们的安全团队会在2小时内调查处理。保存相关证据（聊天记录、截图）。您可以拉黑该用户。如涉及人身安全威胁，请同时报警。平台承诺保护举报者隐私，对骚扰行为零容忍。"
                }
              ]
            }}
            className="bg-transparent"
          />
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="relative py-10 sm:py-14 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              快速开始指南
            </h2>
            <p className="text-lg text-white/70">
              按照这些简单步骤，快速上手我们的平台
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Rocket,
                step: '步骤 1',
                title: '注册账户',
                description: '30秒完成注册，即可开始探索BDSM社群',
              },
              {
                icon: BookOpen,
                step: '步骤 2',
                title: '学习基础',
                description: '完成新手必修课，了解安全原则和社群文化',
              },
              {
                icon: Users,
                step: '步骤 3',
                title: '寻找伴侣',
                description: '使用智能匹配系统找到志同道合的伙伴',
              },
              {
                icon: Headphones,
                step: '步骤 4',
                title: '参与活动',
                description: '加入线上线下活动，融入社群大家庭',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-2xl p-8 text-center group hover:bg-white/5 transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm text-blue-400 font-semibold mb-2">{item.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Popular Topics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">热门话题</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  category: '新手指南',
                  topics: [
                    'BDSM基础术语解释',
                    '如何设置安全词',
                    '第一次见面注意事项',
                    '建立信任的方法',
                  ],
                },
                {
                  category: '关系与实践',
                  topics: [
                    'D/S关系契约模板',
                    '绳缚入门教程',
                    '角色扮演场景设计',
                    '情感沟通技巧',
                  ],
                },
                {
                  category: '安全与健康',
                  topics: [
                    '常见伤害及预防',
                    '心理健康维护',
                    '紧急情况处理',
                    '安全用具选择',
                  ],
                },
                {
                  category: '社群与活动',
                  topics: [
                    '线下聚会报名',
                    'VIP会员权益',
                    '导师制度说明',
                    '国际交流项目',
                  ],
                },
              ].map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-2xl p-6"
                >
                  <h4 className="text-lg font-semibold text-white mb-4">{section.category}</h4>
                  <ul className="space-y-3">
                    {section.topics.map((topic, topicIndex) => (
                      <li key={topicIndex}>
                        <a
                          href="https://work.weixin.qq.com/kfid/kfc277e93e4fa92b3e9"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:scale-150 transition-transform" />
                          {topic}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-white/60 text-sm">
          © 2025 Go社区. 保留所有权利. | 安全 · 包容 · 尊重
        </div>
      </footer>

      {/* Floating Action Menu */}
      <FloatingActionMenu />

    </div>
  );
}

