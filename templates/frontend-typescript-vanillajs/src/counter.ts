import { storage } from './storage';

export function setupCounter(element: HTMLButtonElement): void {
  let counter = storage.get<number>('app-count', 0);
  const setCounter = (count: number) => {
    counter = count;
    storage.set('app-count', counter);
    element.innerHTML = `Count is ${counter}`;
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(counter);
}
