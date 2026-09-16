import { ref, onMounted, type Ref } from 'vue';

export type View = 'home' | 'items';

const currentView = ref<View>(
  typeof window !== 'undefined' && window.location.hash.includes('items') ? 'items' : 'home'
);

if (typeof window !== 'undefined') {
  window.addEventListener('hashchange', () => {
    currentView.value = window.location.hash.includes('items') ? 'items' : 'home';
  });
}

export function useView(): { currentView: Ref<View>; setView: (view: View) => void } {
  const setView = (view: View) => {
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
