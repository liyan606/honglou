'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

interface AnimatedTestimonialsProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
}

export function AnimatedTestimonials({ 
  testimonials, 
  autoPlay = true,
  interval = 5000 
}: AnimatedTestimonialsProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, testimonials.length]);

  return (
    <div className="relative h-[400px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute max-w-2xl mx-auto"
        >
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              {testimonials[current].avatar ? (
                <img 
                  src={testimonials[current].avatar} 
                  alt={testimonials[current].name}
                  className="w-16 h-16 rounded-full"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
              )}
              <div>
                <h4 className="text-xl font-semibold text-white">{testimonials[current].name}</h4>
                <p className="text-white/60">{testimonials[current].role}</p>
              </div>
            </div>
            <p className="text-lg text-white/80 leading-relaxed">
              "{testimonials[current].content}"
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === current ? 'w-8 bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

