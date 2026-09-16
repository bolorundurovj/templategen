import { ref, watch, type Ref } from 'vue';

export function useLocalStorage<T>(key: string, initialValue: T): Ref<T> {
  const readValue = (): T => {
    if (typeof window === 'undefined') return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  };

  const storedValue = ref<T>(readValue()) as Ref<T>;

  watch(
    storedValue,
    (newValue) => {
      try {
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(newValue));
        }
      } catch {
        // Ignore storage error
      }
    },
    { deep: true },
  );

  return storedValue;
}
