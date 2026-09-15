import { writable } from 'svelte/store';

function createCounterStore() {
  const isBrowser = typeof window !== 'undefined';
  const saved = isBrowser ? localStorage.getItem('app-count') : null;
  const initial = saved ? Number(saved) : 0;

  const { subscribe, set, update } = writable(initial);

  return {
    subscribe,
    increment: () => {
      update((n) => {
        const next = n + 1;
        if (isBrowser) {
          try {
            localStorage.setItem('app-count', String(next));
          } catch {
            // Ignore
          }
        }
        return next;
      });
    },
    reset: () => {
      if (isBrowser) {
        try {
          localStorage.setItem('app-count', '0');
        } catch {
          // Ignore
        }
      }
      set(0);
    },
  };
}

export const counter = createCounterStore();
