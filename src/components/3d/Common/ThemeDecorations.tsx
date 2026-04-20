'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useThemeStore } from '@/store/useThemeStore';
import { themes } from '@/types/theme';
import * as THREE from 'three';

export const ThemeDecorations = () => {
  const { theme } = useThemeStore();
  const currentTheme = themes[theme];

  return (
    <>
      {theme === 'dark-luxury' && (
        <group>
          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[1, 32, 32]} position={[2, 1, -2]}>
              <meshStandardMaterial color={currentTheme.colors.primary} metalness={1} roughness={0.1} />
            </Sphere>
          </Float>
        </group>
      )}

      {theme === 'joyful-bloom' && (
        <group>
          {Array.from({ length: 20 }).map((_, i) => (
            <Float key={i} speed={1} position={[Math.random() * 10 - 5, Math.random() * 10 - 5, -5]}>
              <Sphere args={[0.2, 16, 16]}>
                <meshStandardMaterial color={i % 2 === 0 ? currentTheme.colors.primary : currentTheme.colors.secondary} />
              </Sphere>
            </Float>
          ))}
        </group>
      )}

      {theme === 'neo-cosmic' && (
        <group>
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
            <gridHelper args={[20, 20, currentTheme.colors.primary, currentTheme.colors.accent]} />
          </mesh>
        </group>
      )}

      {theme === 'minimal-bloom' && (
        <group>
          <Float speed={5} floatIntensity={1}>
             <Sphere args={[0.5, 32, 32]} position={[-2, 2, -1]}>
               <MeshDistortMaterial color={currentTheme.colors.primary} speed={2} distort={0.4} radius={1} />
             </Sphere>
          </Float>
        </group>
      )}
    </>
  );
};
