import { writable, get } from 'svelte/store';
import { browser } from '$app/environment';

function createThemeStore() {
  const prefersDark = browser  
    ? window.matchMedia('(prefers-color-scheme: dark)').matches 
    : false;
  const defaultTheme = prefersDark ? 'dark' : 'light';
  let savedTheme = browser ? localStorage.getItem('theme') : defaultTheme;
  if (savedTheme !== 'dark' && savedTheme !== 'light') {
    savedTheme = defaultTheme;
  }
  const { subscribe, set } = writable<'dark' | 'light'>(savedTheme as 'dark' | 'light');
  return {
    subscribe,
    set(theme: 'dark' | 'light') {
      if (browser) {
        localStorage.setItem('theme', theme);
      }
      this.loadTheme();
      set(theme);
    },
    loadTheme() {
      const currentTheme = get(this);
      document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    },
    toggleTheme() {
      let current = get(this);
      current = current === 'dark' ? 'light' : 'dark';
      this.set(current);
    }
  };
}

export const themeStore = createThemeStore();
