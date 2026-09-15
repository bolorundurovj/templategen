import { storage } from './storage.js';

export function setupCounter(element) {
  let counter = storage.get('app-count', 0);
  const setCounter = (count) => {
    counter = count;
    storage.set('app-count', counter);
    element.innerHTML = `Count is ${counter}`;
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(counter);
}
