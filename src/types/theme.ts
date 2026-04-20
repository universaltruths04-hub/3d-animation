export type ThemeMode =
  | 'dark-luxury'
  | 'joyful-bloom'
  | 'neo-cosmic'
  | 'earthly-serenity'
  | 'timeless-glam'
  | 'minimal-bloom';

export interface ThemeConfig {
  id: ThemeMode;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    card: string;
    border: string;
  };
  typography: {
    heading: string;
    body: string;
  };
  decorationStyle: string;
}

export const themes: Record<ThemeMode, ThemeConfig> = {
  'dark-luxury': {
    id: 'dark-luxury',
    name: 'Celestial Elegance',
    colors: {
      primary: '#D4AF37', // Gold
      secondary: '#F7E7CE', // Champagne
      accent: '#6A0DAD', // Subtle Purple
      background: '#0A0A0A', // Deep Black
      foreground: '#FFFFFF',
      card: '#1A1A1A',
      border: '#D4AF3744',
    },
    typography: {
      heading: 'var(--font-serif)',
      body: 'var(--font-sans)',
    },
    decorationStyle: 'crystal-glass',
  },
  'joyful-bloom': {
    id: 'joyful-bloom',
    name: 'Joyful Bloom',
    colors: {
      primary: '#FF69B4', // Hot Pink
      secondary: '#40E0D0', // Turquoise
      accent: '#FF7F50', // Coral
      background: '#FFF5F8', // Soft Pink White
      foreground: '#333333',
      card: '#FFFFFF',
      border: '#FF69B444',
    },
    typography: {
      heading: 'var(--font-rounded)',
      body: 'var(--font-sans)',
    },
    decorationStyle: 'bouncy-petals',
  },
  'neo-cosmic': {
    id: 'neo-cosmic',
    name: 'Neo-Cosmic',
    colors: {
      primary: '#00FFFF', // Cyan
      secondary: '#FF00FF', // Magenta
      accent: '#BF00FF', // Electric Purple
      background: '#050505', // Space Black
      foreground: '#E0E0E0',
      card: '#0A0A1F',
      border: '#00FFFF44',
    },
    typography: {
      heading: 'var(--font-geometric)',
      body: 'var(--font-sans)',
    },
    decorationStyle: 'neon-holographic',
  },
  'earthly-serenity': {
    id: 'earthly-serenity',
    name: 'Earthly Serenity',
    colors: {
      primary: '#2E8B57', // Sea Green
      secondary: '#F5F5DC', // Beige
      accent: '#E2725B', // Terracotta
      background: '#FCFBF4', // Creamy White
      foreground: '#2C3E50',
      card: '#F0F4F0',
      border: '#2E8B5744',
    },
    typography: {
      heading: 'var(--font-organic-serif)',
      body: 'var(--font-clean-sans)',
    },
    decorationStyle: 'natural-leaves',
  },
  'timeless-glam': {
    id: 'timeless-glam',
    name: 'Timeless Glam',
    colors: {
      primary: '#B76E79', // Rose Gold
      secondary: '#800020', // Burgundy
      accent: '#008080', // Teal
      background: '#FDF5E6', // Cream
      foreground: '#1A1A1A',
      card: '#FFF0F5',
      border: '#B76E7944',
    },
    typography: {
      heading: 'var(--font-script)',
      body: 'var(--font-retro-sans)',
    },
    decorationStyle: 'vintage-pearls',
  },
  'minimal-bloom': {
    id: 'minimal-bloom',
    name: 'Soft Minimal Bloom',
    colors: {
      primary: '#E0B0FF', // Mauve
      secondary: '#F0FFF0', // Honeydew
      accent: '#B0C4DE', // Light Steel Blue
      background: '#FFFFFF', // Pure White
      foreground: '#4A4A4A',
      card: '#FAFAFA',
      border: '#E0B0FF44',
    },
    typography: {
      heading: 'var(--font-modern-sans)',
      body: 'var(--font-modern-sans)',
    },
    decorationStyle: 'soft-bubbles',
  },
};
