'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useState } from 'react';

interface VideoThumbnailPlayerProps {
  thumbnail: string;
  videoUrl?: string;
  title?: string;
  className?: string;
}

export function VideoThumbnailPlayer({ 
  thumbnail, 
  videoUrl, 
  title,
  className = '' 
}: VideoThumbnailPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={`relative group cursor-pointer ${className}`}>
      {!isPlaying ? (
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={() => setIsPlaying(true)}
          className="relative rounded-3xl overflow-hidden"
        >
          <img 
            src={thumbnail} 
            alt={title || 'Video thumbnail'} 
            className="w-full h-full object-cover"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
          
          {/* Play Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center">
              <Play className="w-10 h-10 text-white ml-1" fill="white" />
            </div>
          </motion.div>

          {/* Title */}
          {title && (
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
            </div>
          )}
        </motion.div>
      ) : (
        <div className="rounded-3xl overflow-hidden aspect-video">
          {videoUrl ? (
            <video 
              src={videoUrl} 
              controls 
              autoPlay 
              className="w-full h-full"
            />
          ) : (
            <div className="w-full h-full bg-black flex items-center justify-center text-white">
              Video Player
            </div>
          )}
        </div>
      )}
    </div>
  );
}

