import { create } from 'zustand';
import { ThemeMode } from '../types/theme';

interface ThemeState {
  theme: ThemeMode;
  isChanging: boolean;
  setTheme: (theme: ThemeMode) => void;
  setIsChanging: (isChanging: boolean) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'dark-luxury',
  isChanging: false,
  setTheme: (theme) => {
    set({ isChanging: true });
    // Small delay to allow intro animation to start before switching core styles if needed
    // or we can switch immediately and let the animation cover it.
    setTimeout(() => {
      set({ theme, isChanging: false });
    }, 1000); // Intro transition duration
  },
  setIsChanging: (isChanging) => set({ isChanging }),
}));
