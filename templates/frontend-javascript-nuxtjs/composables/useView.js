import { ref, onMounted } from 'vue';

const currentView = ref(
  typeof window !== 'undefined' && window.location.hash.includes('items') ? 'items' : 'home'
);

if (typeof window !== 'undefined') {
  window.addEventListener('hashchange', () => {
    currentView.value = window.location.hash.includes('items') ? 'items' : 'home';
  });
}

export function useView() {
  const setView = (view) => {
    currentView.value = view;
    if (typeof window !== 'undefined') {
      if (view === 'items') {
        window.location.hash = '/items';
      } else {
        if (window.location.hash.includes('items')) {
          history.pushState(null, '', window.location.pathname + window.location.search);
        }
      }
    }
  };

  onMounted(() => {
    if (typeof window !== 'undefined') {
      currentView.value = window.location.hash.includes('items') ? 'items' : 'home';
    }
  });

  return { currentView, setView };
}
