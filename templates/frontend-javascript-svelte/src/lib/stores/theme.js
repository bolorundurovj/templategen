import { writable } from 'svelte/store';

function createThemeStore() {
  const isBrowser = typeof window !== 'undefined';
  const initial = isBrowser
    ? localStorage.getItem('app-theme') || 'light'
    : 'light';

  const { subscribe, set, update } = writable(initial);

  const applyTheme = (t) => {
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
        const next = current === 'light' ? 'dark' : 'light';
        applyTheme(next);
        return next;
      });
    },
    set: (t) => {
      applyTheme(t);
      set(t);
    },
  };
}

export const theme = createThemeStore();
