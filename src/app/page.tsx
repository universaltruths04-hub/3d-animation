'use client';

import { Hero } from '@/components/3d/Hero/Hero';
import { ThemeSwitcher } from '@/components/shared/ThemeSwitcher/ThemeSwitcher';
import { IntroAnimation } from '@/components/shared/IntroAnimation/IntroAnimation';
import { Header } from '@/components/shared/Header/Header';
import { ProductViewer } from '@/components/3d/ProductViewer/ProductViewer';
import { useThemeStore } from '@/store/useThemeStore';
import { themes } from '@/types/theme';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const { theme } = useThemeStore();
  const currentTheme = themes[theme];

  const featuredProducts = [
    { id: '1', name: 'Celestial Serum', price: '$89', category: 'Skincare' },
    { id: '2', name: 'Golden Glow Palette', price: '$65', category: 'Makeup' },
    { id: '3', name: 'Silk Foundation', price: '$55', category: 'Cosmetics' },
  ];

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <IntroAnimation />
      <ThemeSwitcher />
      <Header />
      <Hero />

      <section className="py-24 px-6 bg-background relative z-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16">
            <div className="max-w-xl">
              <h3
                className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tighter"
                style={{ color: currentTheme.colors.primary, fontFamily: currentTheme.typography.heading }}
              >
                Featured Elegance
              </h3>
              <p
                className="text-lg opacity-70"
                style={{ color: currentTheme.colors.foreground, fontFamily: currentTheme.typography.body }}
              >
                Discover our handpicked selection of premium beauty essentials designed to enhance your natural radiance.
              </p>
            </div>
            <Link href="/category/all" className="mt-6 md:mt-0 underline underline-offset-8 font-medium">View All Products</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="aspect-[4/5] bg-card rounded-2xl mb-6 overflow-hidden border border-primary/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
                     <button className="bg-primary text-background px-6 py-3 rounded-full font-bold pointer-events-auto">Quick View</button>
                  </div>
                  {/* In a real app, this would be an image or a mini 3D canvas */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/5 to-primary/20 flex items-center justify-center">
                    <span className="text-primary/40 font-bold text-4xl italic">{product.name[0]}</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-1" style={{ fontFamily: currentTheme.typography.heading }}>{product.name}</h4>
                <p className="text-sm opacity-60 mb-2 uppercase tracking-widest">{product.category}</p>
                <p className="text-lg font-medium" style={{ color: currentTheme.colors.primary }}>{product.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-card relative z-10 border-y border-primary/10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3
              className="text-4xl md:text-6xl font-bold mb-8"
              style={{ color: currentTheme.colors.primary, fontFamily: currentTheme.typography.heading }}
            >
              Customizable Perfection
            </h3>
            <p className="text-xl opacity-80 mb-10 leading-relaxed">
              Find your perfect match with our interactive shade selector. Every product is a masterpiece, waiting for your personal touch.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-4">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">✓</span>
                <span>Dermatologically Tested</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">✓</span>
                <span>Cruelty-Free & Vegan</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">✓</span>
                <span>Ethically Sourced Materials</span>
              </li>
            </ul>
            <button
              className="px-10 py-4 rounded-full font-bold transition-all hover:shadow-xl"
              style={{ backgroundColor: currentTheme.colors.primary, color: currentTheme.colors.background }}
            >
              Explore Products
            </button>
          </div>
          <ProductViewer />
        </div>
      </section>

      <footer className="py-12 px-6 bg-background relative z-10 border-t border-primary/10">
        <div className="container mx-auto text-center opacity-60">
           <p className="text-sm">&copy; {new Date().getFullYear()} Heavenly Nuravia. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
