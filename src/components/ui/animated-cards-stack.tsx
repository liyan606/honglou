'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardData {
  title: string;
  description: string;
  icon?: ReactNode;
}

interface AnimatedCardsStackProps {
  cards: CardData[];
  className?: string;
}

export function AnimatedCardsStack({ cards, className = '' }: AnimatedCardsStackProps) {
  return (
    <div className={`relative h-[500px] ${className}`}>
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ 
            opacity: 0, 
            y: 100,
            scale: 1 - index * 0.05,
            rotateX: index * 5
          }}
          whileInView={{ 
            opacity: 1, 
            y: index * 20,
            scale: 1 - index * 0.05,
            rotateX: 0
          }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.1 
          }}
          className="absolute inset-x-0 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8"
          style={{
            zIndex: cards.length - index,
            transformOrigin: 'center bottom'
          }}
        >
          {card.icon && (
            <div className="mb-4 text-blue-400">
              {card.icon}
            </div>
          )}
          <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
          <p className="text-white/70 leading-relaxed">{card.description}</p>
        </motion.div>
      ))}
    </div>
  );
}

