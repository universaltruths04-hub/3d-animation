'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Environment, Stars } from '@react-three/drei';
import { useThemeStore } from '@/store/useThemeStore';
import { themes } from '@/types/theme';

const ThemeEnvironment = () => {
  const { theme } = useThemeStore();
  const currentTheme = themes[theme];

  return (
    <>
      <color attach="background" args={[currentTheme.colors.background]} />
      <ambientLight intensity={theme === 'dark-luxury' ? 0.2 : 0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      {theme === 'dark-luxury' && (
        <>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Environment preset="city" />
        </>
      )}

      {theme === 'neo-cosmic' && (
        <>
          <Environment preset="night" />
          <mesh position={[0, 0, -5]}>
            <planeGeometry args={[20, 20]} />
            <meshStandardMaterial color={currentTheme.colors.accent} emissive={currentTheme.colors.primary} emissiveIntensity={2} transparent opacity={0.1} />
          </mesh>
        </>
      )}

      {(theme === 'earthly-serenity' || theme === 'joyful-bloom') && (
        <Environment preset="forest" />
      )}

      {(theme === 'minimal-bloom' || theme === 'timeless-glam') && (
        <Environment preset="studio" />
      )}
    </>
  );
};

export const MainCanvas = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={className || "fixed inset-0 -z-10 h-screen w-full"}>
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <Suspense fallback={null}>
          <ThemeEnvironment />
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
};
