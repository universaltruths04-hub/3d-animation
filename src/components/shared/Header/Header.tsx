'use client';

import React from 'react';
import Link from 'next/link';
import { useThemeStore } from '@/store/useThemeStore';
import { themes } from '@/types/theme';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';

export const Header = () => {
  const { theme } = useThemeStore();
  const currentTheme = themes[theme];

  return (
    <header className="fixed top-0 left-0 w-full z-40 px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold tracking-tighter" style={{ color: currentTheme.colors.primary, fontFamily: currentTheme.typography.heading }}>
        NURAVIA
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {['Skincare', 'Makeup', 'Cosmetics', 'Sneakers'].map((item) => (
          <Link
            key={item}
            href={`/category/${item.toLowerCase()}`}
            className="text-sm font-medium hover:opacity-70 transition-opacity uppercase tracking-widest"
            style={{ color: currentTheme.colors.foreground, fontFamily: currentTheme.typography.body }}
          >
            {item}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <button className="p-2" style={{ color: currentTheme.colors.foreground }}><Search size={20} /></button>
        <Link href="/cart" className="p-2 relative" style={{ color: currentTheme.colors.foreground }}>
          <ShoppingCart size={20} />
          <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-primary text-[10px] flex items-center justify-center text-background">2</span>
        </Link>
        <Link href="/profile" className="p-2" style={{ color: currentTheme.colors.foreground }}><User size={20} /></Link>
        <button className="p-2 md:hidden" style={{ color: currentTheme.colors.foreground }}><Menu size={20} /></button>
      </div>
    </header>
  );
};
