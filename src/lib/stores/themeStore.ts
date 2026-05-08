import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createThemeStore() {
  const initial = browser ? localStorage.getItem('darkMode') : 'false';
  const store = writable(initial === 'true');
  if (browser) {
    store.subscribe((value: boolean) => {
      localStorage.setItem('darkMode', String(value));
    });
  }
  return store;
}

export const themeStore = createThemeStore();
