import { writable, get } from 'svelte/store';
import { browser } from '$app/environment';

function toggleTheme(isDarkMode: boolean) {
  document.documentElement.classList.toggle('dark', isDarkMode);
}
function createThemeStore() {
  const savedTheme = browser ? localStorage.getItem('darkMode') : 'false';
  const { subscribe, set } = writable(savedTheme === 'true');
  return {
    subscribe,
    set(isDarkMode: boolean) {
      if (browser) {
        localStorage.setItem('darkMode', String(isDarkMode));
      }
      toggleTheme(isDarkMode);
      set(isDarkMode);
    },
    loadTheme() {
      const isDarkMode = get(this);
      toggleTheme(isDarkMode);
    }
  };
}

export const themeStore = createThemeStore();
