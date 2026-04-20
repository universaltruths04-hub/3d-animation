'use client';

import React from 'react';
import { Header } from '@/components/shared/Header/Header';
import { ThemeSwitcher } from '@/components/shared/ThemeSwitcher/ThemeSwitcher';
import { ProductViewer } from '@/components/3d/ProductViewer/ProductViewer';
import { useThemeStore } from '@/store/useThemeStore';
import { themes } from '@/types/theme';

export default function ProductPage() {
  const { theme } = useThemeStore();
  const currentTheme = themes[theme];

  return (
    <main className="min-h-screen pt-32 px-6">
      <Header />
      <ThemeSwitcher />

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <ProductViewer />

        <div>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: currentTheme.colors.primary, fontFamily: currentTheme.typography.heading }}
          >
            Celestial Glow Serum
          </h1>
          <p className="text-2xl font-bold mb-8">$120.00</p>
          <p className="text-lg opacity-80 mb-8 leading-relaxed">
            Unveil your skin's inner brilliance with our signature serum. Infused with celestial botanicals and golden mica for an instant, divine glow.
          </p>

          <div className="flex gap-4 mb-12">
            <button
              className="flex-1 py-4 rounded-full font-bold transition-all hover:scale-[1.02]"
              style={{ backgroundColor: currentTheme.colors.primary, color: currentTheme.colors.background }}
            >
              Add to Cart
            </button>
            <button className="flex-1 py-4 rounded-full font-bold border-2" style={{ borderColor: currentTheme.colors.primary }}>
              Wishlist
            </button>
          </div>

          <div className="space-y-6 pt-8 border-t border-primary/10">
            <details className="group cursor-pointer">
              <summary className="font-bold flex justify-between items-center list-none uppercase tracking-widest text-sm">
                Ingredients <span className="group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <p className="pt-4 opacity-70">Water, Glycerin, Niacinamide, Gold, Hyaluronic Acid...</p>
            </details>
            <details className="group cursor-pointer">
              <summary className="font-bold flex justify-between items-center list-none uppercase tracking-widest text-sm">
                How to Use <span className="group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <p className="pt-4 opacity-70">Apply 2-3 drops to clean skin, morning and night.</p>
            </details>
          </div>
        </div>
      </div>
    </main>
  );
}
