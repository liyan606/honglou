'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, MessageCircle, Mail, Phone, X } from 'lucide-react';

interface MenuAction {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

export function FloatingActionMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const actions: MenuAction[] = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'Chat',
      onClick: () => console.log('Chat clicked'),
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      onClick: () => console.log('Email clicked'),
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Call',
      onClick: () => console.log('Call clicked'),
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-20 right-0 flex flex-col gap-3"
          >
            {actions.map((action, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.05 }}
                onClick={action.onClick}
                className="flex items-center gap-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-4 py-3 text-white hover:bg-white/20 transition-colors group"
              >
                <span className="text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {action.label}
                </span>
                {action.icon}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-2xl"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
        </motion.div>
      </motion.button>
    </div>
  );
}

