import { watch, onMounted, type Ref } from 'vue';
import { useLocalStorage } from './useLocalStorage';

export type Theme = 'light' | 'dark';

export function useTheme(): { theme: Ref<Theme>; toggleTheme: () => void } {
  const theme = useLocalStorage<Theme>('app-theme', 'light');

  const applyTheme = (val: Theme) => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      root.setAttribute('data-theme', val);
      if (val === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  };

  watch(theme, (newVal) => {
    applyTheme(newVal);
  });

  onMounted(() => {
    applyTheme(theme.value);
  });

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  };

  return { theme, toggleTheme };
}
