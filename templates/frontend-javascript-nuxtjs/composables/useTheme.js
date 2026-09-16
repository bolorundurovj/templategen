import { watch, onMounted } from 'vue';
import { useLocalStorage } from './useLocalStorage';

let themeRef = null;

const applyTheme = (val) => {
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

export function useTheme() {
  if (!themeRef) {
    themeRef = useLocalStorage('app-theme', 'light');

    watch(themeRef, (newVal) => {
      applyTheme(newVal);
    });
  }

  // Handle localStorage reset (e.g. In unit tests)
  if (typeof window !== 'undefined' && !window.localStorage.getItem('app-theme') && themeRef.value !== 'light') {
    themeRef.value = 'light';
  }

  const toggleTheme = () => {
    if (themeRef) {
      themeRef.value = themeRef.value === 'light' ? 'dark' : 'light';
      applyTheme(themeRef.value);
    }
  };

  onMounted(() => {
    if (themeRef) {
      applyTheme(themeRef.value);
    }
  });

  return { theme: themeRef, toggleTheme };
}
