'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface LiquidGlassButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function LiquidGlassButton({ 
  children, 
  onClick, 
  variant = 'primary',
  className = '' 
}: LiquidGlassButtonProps) {
  const baseClasses = "px-8 py-4 rounded-2xl font-semibold backdrop-blur-xl border transition-all duration-300";
  const variantClasses = variant === 'primary'
    ? "bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30"
    : "bg-black/10 border-black/20 text-black hover:bg-black/20 hover:border-black/30";

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </motion.button>
  );
}

