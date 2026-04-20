'use client';

import React from 'react';
import { useThemeStore } from '@/store/useThemeStore';
import { themes, ThemeMode } from '@/types/theme';
import { motion } from 'framer-motion';
import { Palette } from 'lucide-react';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-3 bg-card/80 backdrop-blur-md p-2 rounded-full border border-primary/20 shadow-lg">
      <div className="p-2 text-primary">
        <Palette size={20} />
      </div>
      <div className="flex gap-2 pr-2">
        {(Object.keys(themes) as ThemeMode[]).map((t) => (
          <button
            key={t}
            onClick={() => setTheme(t)}
            className={`
              w-8 h-8 rounded-full border-2 transition-all duration-300
              ${theme === t ? 'border-primary scale-110 shadow-md' : 'border-transparent hover:scale-105'}
            `}
            style={{ backgroundColor: themes[t].colors.primary }}
            title={themes[t].name}
          />
        ))}
      </div>
    </div>
  );
};
