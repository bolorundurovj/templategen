import { ref, watch } from 'vue';

export function useLocalStorage(key, initialValue) {
  const readValue = () => {
    if (typeof window === 'undefined') return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  };

  const storedValue = ref(readValue());

  watch(
    storedValue,
    (newValue) => {
      try {
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(newValue));
        }
      } catch {
        // Ignore write error
      }
    },
    { deep: true },
  );

  return storedValue;
}
