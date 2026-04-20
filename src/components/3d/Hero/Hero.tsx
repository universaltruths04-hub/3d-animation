'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useThemeStore } from '@/store/useThemeStore';
import { themes } from '@/types/theme';
import { ThemeDecorations } from '../Common/ThemeDecorations';
import { MainCanvas } from '../Scene/MainCanvas';
import { Float, Sphere, MeshDistortMaterial, Text } from '@react-three/drei';

const Hero3D = () => {
  const { theme } = useThemeStore();
  const currentTheme = themes[theme];

  return (
    <>
      <ThemeDecorations />
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.5, 2.5, 0.5]} />
          <meshStandardMaterial color={currentTheme.colors.primary} roughness={0.1} metalness={0.5} />
          {/* Mock Product label */}
          <Text
            position={[0, 0, 0.26]}
            fontSize={0.2}
            color={currentTheme.colors.background}
            font={currentTheme.typography.heading.includes('serif') ? '/fonts/serif.ttf' : undefined}
          >
            NURAVIA
          </Text>
        </mesh>
      </Float>
    </>
  );
};

export const Hero = () => {
  const { theme } = useThemeStore();
  const currentTheme = themes[theme];

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <MainCanvas>
        <Hero3D />
      </MainCanvas>

      <div className="container mx-auto px-6 z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="max-w-2xl"
        >
          <h2
            className="text-6xl md:text-8xl font-bold leading-tight mb-6"
            style={{ color: currentTheme.colors.primary, fontFamily: currentTheme.typography.heading }}
          >
            Heavenly Beauty.
          </h2>
          <p
            className="text-xl md:text-2xl mb-10"
            style={{ color: currentTheme.colors.foreground, opacity: 0.9, fontFamily: currentTheme.typography.body }}
          >
            Experience the divine collection of skincare and cosmetics designed for your everyday glow.
          </p>
          <div className="flex gap-4 pointer-events-auto">
            <button
              className="px-8 py-4 rounded-full text-lg font-medium transition-all hover:scale-105 active:scale-95"
              style={{ backgroundColor: currentTheme.colors.primary, color: currentTheme.colors.background }}
            >
              Shop Collection
            </button>
            <button
              className="px-8 py-4 rounded-full text-lg font-medium border-2 transition-all hover:bg-primary/10"
              style={{ borderColor: currentTheme.colors.primary, color: currentTheme.colors.primary }}
            >
              Our Story
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
