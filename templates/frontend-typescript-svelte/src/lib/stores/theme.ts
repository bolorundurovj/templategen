import { writable } from 'svelte/store';

export type Theme = 'light' | 'dark';

function createThemeStore() {
  const isBrowser = typeof window !== 'undefined';
  const initial: Theme = isBrowser
    ? (localStorage.getItem('app-theme') as Theme) || 'light'
    : 'light';

  const { subscribe, set, update } = writable<Theme>(initial);

  const applyTheme = (t: Theme) => {
    if (isBrowser) {
      document.documentElement.setAttribute('data-theme', t);
      if (t === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      try {
        localStorage.setItem('app-theme', t);
      } catch {
        // Ignore
      }
    }
  };

  if (isBrowser) {
    applyTheme(initial);
  }

  return {
    subscribe,
    toggle: () => {
      update((current) => {
        const next: Theme = current === 'light' ? 'dark' : 'light';
        applyTheme(next);
        return next;
      });
    },
    set: (t: Theme) => {
      applyTheme(t);
      set(t);
    },
  };
}

export const theme = createThemeStore();
