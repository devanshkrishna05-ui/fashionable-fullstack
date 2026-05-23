import React from 'react';
import { motion } from 'framer-motion';

export default function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[#0a0a0a]">
      <div className="flex flex-col items-center gap-4">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: 'linear',
          }}
          className="w-14 h-14 border-4 border-[#1f1f1f] border-t-[#00D9FF] rounded-full"
        />

        <p className="text-gray-400 text-sm tracking-wide">
          Loading Fashionable...
        </p>
      </div>
    </div>
  );
}