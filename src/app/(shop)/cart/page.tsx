'use client';

import React from 'react';
import { Header } from '@/components/shared/Header/Header';
import { useThemeStore } from '@/store/useThemeStore';
import { themes } from '@/types/theme';

export default function CartPage() {
  const { theme } = useThemeStore();
  const currentTheme = themes[theme];

  return (
    <main className="min-h-screen pt-32 px-6">
      <Header />
      <div className="container mx-auto max-w-4xl">
        <h1
          className="text-4xl font-bold mb-12 uppercase tracking-tighter"
          style={{ color: currentTheme.colors.primary, fontFamily: currentTheme.typography.heading }}
        >
          Your Shopping Bag
        </h1>

        <div className="space-y-8">
           <div className="flex gap-8 items-center bg-card p-6 rounded-2xl border border-primary/5">
              <div className="w-24 h-24 bg-primary/10 rounded-xl" />
              <div className="flex-1">
                <h3 className="font-bold">Celestial Glow Serum</h3>
                <p className="text-sm opacity-60">QTY: 1</p>
              </div>
              <p className="font-bold">$120.00</p>
           </div>
        </div>

        <div className="mt-12 p-8 bg-card rounded-2xl border border-primary/10">
          <div className="flex justify-between mb-4">
            <span>Subtotal</span>
            <span className="font-bold">$120.00</span>
          </div>
          <div className="flex justify-between mb-8 text-xl font-bold">
            <span>Total</span>
            <span style={{ color: currentTheme.colors.primary }}>$120.00</span>
          </div>

          <h4 className="font-bold mb-4">Payment Method</h4>
          <div className="grid grid-cols-3 gap-4 mb-8">
             {['bKash', 'Nagad', 'COD'].map(m => (
               <button key={m} className="py-3 border-2 rounded-xl border-primary/20 hover:border-primary transition-colors text-sm font-bold uppercase">{m}</button>
             ))}
          </div>

          <button
            className="w-full py-4 rounded-full font-bold text-lg"
            style={{ backgroundColor: currentTheme.colors.primary, color: currentTheme.colors.background }}
          >
            Checkout Now
          </button>
        </div>
      </div>
    </main>
  );
}
