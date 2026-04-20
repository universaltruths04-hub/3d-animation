'use client';

import React, { useEffect, useState } from 'react';
import { useThemeStore } from '@/store/useThemeStore';
import { motion, AnimatePresence } from 'framer-motion';
import { themes } from '@/types/theme';

export const IntroAnimation = () => {
  const { theme, isChanging } = useThemeStore();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (isChanging) {
      setShow(true);
    } else {
      const timer = setTimeout(() => setShow(false), 800);
      return () => clearTimeout(timer);
    }
  }, [isChanging]);

  const currentTheme = themes[theme];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ clipPath: 'circle(0% at 100% 0%)' }}
          animate={{ clipPath: 'circle(150% at 100% 0%)' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center pointer-events-none"
          style={{ backgroundColor: currentTheme.colors.background }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center"
          >
            <h1
              className="text-5xl md:text-7xl font-bold mb-4"
              style={{ color: currentTheme.colors.primary, fontFamily: currentTheme.typography.heading }}
            >
              Heavenly Nuravia
            </h1>
            <p
              className="text-xl md:text-2xl"
              style={{ color: currentTheme.colors.foreground, opacity: 0.8 }}
            >
              Where Heavenly Beauty Meets Everyday Glow
            </p>
          </motion.div>

          {/* Theme specific elements could be added here */}
          <div className="absolute inset-0 overflow-hidden -z-10">
            {theme === 'dark-luxury' && <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />}
            {theme === 'joyful-bloom' && <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-secondary/30 blur-2xl" />}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
