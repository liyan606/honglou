'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedGlowCardProps {
  children: ReactNode;
  glowColor?: string;
  className?: string;
}

export function AnimatedGlowCard({ 
  children, 
  glowColor = '#3b82f6',
  className = '' 
}: AnimatedGlowCardProps) {
  return (
    <motion.div
      className={`relative group ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Glow effect */}
      <div 
        className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-500"
        style={{ background: `linear-gradient(45deg, ${glowColor}, transparent)` }}
      />
      
      {/* Glass card */}
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden">
        {/* Inner glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    </motion.div>
  );
}

