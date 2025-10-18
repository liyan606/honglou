'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface FeatureWithImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  title?: string;
  className?: string;
}

export function FeatureWithImageComparison({ 
  beforeImage, 
  afterImage, 
  title,
  className = '' 
}: FeatureWithImageComparisonProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging && e.type !== 'touchmove' && e.type !== 'mousemove') return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  return (
    <div className={`relative ${className}`}>
      {title && (
        <h3 className="text-2xl font-bold text-white mb-6 text-center">{title}</h3>
      )}
      
      <div
        className="relative rounded-3xl overflow-hidden cursor-ew-resize select-none"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleMove}
      >
        {/* After Image (Background) */}
        <img 
          src={afterImage} 
          alt="After" 
          className="w-full h-auto"
        />

        {/* Before Image (Clipped) */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img 
            src={beforeImage} 
            alt="Before" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Slider */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-lg text-white text-sm font-semibold">
          Before
        </div>
        <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-lg text-white text-sm font-semibold">
          After
        </div>
      </div>
    </div>
  );
}

