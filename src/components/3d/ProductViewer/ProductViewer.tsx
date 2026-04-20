'use client';

import React, { useState } from 'react';
import { MainCanvas } from '../Scene/MainCanvas';
import { OrbitControls, Stage, useGLTF } from '@react-three/drei';
import { useThemeStore } from '@/store/useThemeStore';
import { themes } from '@/types/theme';

interface ProductViewerProps {
  modelUrl?: string;
  baseColor?: string;
}

const MockModel = ({ color, modelUrl }: { color: string, modelUrl?: string }) => {
  // If modelUrl was provided, we would use useGLTF(modelUrl) here
  // and traverse the scene to update materials.
  return (
    <mesh castShadow receiveShadow scale={2}>
      <cylinderGeometry args={[0.5, 0.5, 1.5, 32]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.7} />
    </mesh>
  );
};

export const ProductViewer = ({ modelUrl, baseColor }: ProductViewerProps) => {
  const { theme } = useThemeStore();
  const currentTheme = themes[theme];
  const [currentColor, setCurrentColor] = useState(baseColor || currentTheme.colors.primary);

  const shades = ['#FF0000', '#FF69B4', '#8B0000', '#D2691E', '#FF4500'];

  return (
    <div className="w-full h-[500px] bg-card rounded-3xl overflow-hidden relative border border-primary/10">
      <MainCanvas className="absolute inset-0 w-full h-full">
        <Stage environment="city" intensity={0.6}>
          <MockModel color={currentColor} modelUrl={modelUrl} />
        </Stage>
        <OrbitControls makeDefault enableZoom={false} autoRotate autoRotateSpeed={2} />
      </MainCanvas>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 p-3 bg-background/50 backdrop-blur-md rounded-full border border-primary/20 z-20">
        {shades.map((shade) => (
          <button
            key={shade}
            onClick={() => setCurrentColor(shade)}
            className={`w-8 h-8 rounded-full border-2 transition-all ${currentColor === shade ? 'border-primary scale-110' : 'border-transparent'}`}
            style={{ backgroundColor: shade }}
          />
        ))}
      </div>
    </div>
  );
};
