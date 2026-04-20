'use client';

import React from 'react';
import { Header } from '@/components/shared/Header/Header';
import { ThemeSwitcher } from '@/components/shared/ThemeSwitcher/ThemeSwitcher';
import { useThemeStore } from '@/store/useThemeStore';
import { themes } from '@/types/theme';
import { useParams } from 'next/navigation';

export default function CategoryPage() {
  const { theme } = useThemeStore();
  const currentTheme = themes[theme];
  const params = useParams();
  const category = params.id as string;

  return (
    <main className="min-h-screen pt-32 px-6">
      <Header />
      <ThemeSwitcher />

      <div className="container mx-auto">
        <h1
          className="text-5xl md:text-7xl font-bold mb-8 uppercase"
          style={{ color: currentTheme.colors.primary, fontFamily: currentTheme.typography.heading }}
        >
          {category}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="group">
              <div className="aspect-square bg-card rounded-2xl mb-4 border border-primary/10" />
              <div className="h-4 w-1/2 bg-foreground/10 rounded mb-2" />
              <div className="h-4 w-1/4 bg-primary/10 rounded" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
