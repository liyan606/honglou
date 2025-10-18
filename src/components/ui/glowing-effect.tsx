'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowingEffectProps {
  children: ReactNode;
  color?: string;
  intensity?: number;
  className?: string;
}

export function GlowingEffect({ 
  children, 
  color = '#ffffff',
  intensity = 20,
  className = '' 
}: GlowingEffectProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div 
        className="absolute inset-0 blur-3xl opacity-50"
        style={{
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          filter: `blur(${intensity}px)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

