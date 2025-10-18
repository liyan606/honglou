'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  highlighted?: boolean;
  isCustom?: boolean;
}

interface PricingProps {
  tiers: PricingTier[];
}

export function Pricing({ tiers }: PricingProps) {
  // 分离基础会员和特殊会员
  const basicTiers = tiers.slice(0, 3);
  const customTiers = tiers.slice(3);

  return (
    <div className="space-y-12">
      {/* 基础会员 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {basicTiers.map((tier, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group"
          >
            {/* Glow effect for highlighted tier */}
            {tier.highlighted && (
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-75" />
            )}
            
            {/* Card */}
            <div className={`relative backdrop-blur-xl border rounded-3xl p-8 h-full flex flex-col ${
              tier.highlighted 
                ? 'bg-white/10 border-white/20' 
                : 'bg-white/5 border-white/10'
            }`}>
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-white/60 text-sm">{tier.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-bold text-white">{tier.price}</span>
                  <span className="text-white/60">/{tier.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      feature.included ? 'text-green-400' : 'text-white/30'
                    }`} />
                    <span className={`text-sm ${feature.included ? 'text-white' : 'text-white/40'}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a href="https://work.weixin.qq.com/kfid/kfc277e93e4fa92b3e9" target="_blank" rel="noopener noreferrer" className="block">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                    tier.highlighted
                      ? 'bg-white text-black hover:bg-white/90'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  立即加入
                </motion.button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 特殊会员 */}
      {customTiers.length > 0 && (
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-3xl font-bold text-white mb-2">定制化会员方案</h3>
            <p className="text-white/60">为企业和战略合作伙伴提供专属服务</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {customTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Custom tier glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl blur-xl opacity-50" />
                
                {/* Card */}
                <div className="relative backdrop-blur-xl border border-yellow-500/30 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 h-full flex flex-col">
                  {/* Custom Badge */}
                  <div className="absolute -top-3 -right-3 px-4 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-bold text-white">
                    定制方案
                  </div>

                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-white/60 text-sm">{tier.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                        {tier.price}
                      </span>
                      {tier.period && (
                        <span className="text-white/60 text-sm">· {tier.period}</span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-yellow-400" />
                        <span className="text-sm text-white">{feature.text}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a href="https://work.weixin.qq.com/kfid/kfc277e93e4fa92b3e9" target="_blank" rel="noopener noreferrer" className="block">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-400 hover:to-orange-400 transition-all"
                    >
                      联系我们
                    </motion.button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function PricingBasic({ tiers }: PricingProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {tiers.map((tier, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative group"
        >
          {/* Glow effect for highlighted tier */}
          {tier.highlighted && (
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-75" />
          )}
          
          {/* Card */}
          <div className={`relative backdrop-blur-xl border rounded-3xl p-8 h-full flex flex-col ${
            tier.highlighted 
              ? 'bg-white/10 border-white/20' 
              : 'bg-white/5 border-white/10'
          }`}>
            {/* Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
              <p className="text-white/60">{tier.description}</p>
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-white">{tier.price}</span>
                <span className="text-white/60">/{tier.period}</span>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-8 flex-grow">
              {tier.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3">
                  <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                    feature.included ? 'text-green-400' : 'text-white/30'
                  }`} />
                  <span className={feature.included ? 'text-white' : 'text-white/40'}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                tier.highlighted
                  ? 'bg-white text-black hover:bg-white/90'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

