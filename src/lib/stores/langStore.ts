import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';
import { en } from '$lib/langs/en';
import { es } from '$lib/langs/es';

const dictionaries = { en, es };
export type Locale = keyof typeof dictionaries;

function createLocalStore() {
  let userLang = browser ? navigator.language.split('-')[0] : 'es';
  let savedLocal = browser ? localStorage.getItem('locale') : userLang;
  if (!savedLocal || !Object.keys(dictionaries).includes(savedLocal)) {
    savedLocal = 'en';
  }
  const store = writable<Locale>(savedLocal as Locale);
  if (browser) {
    store.subscribe((newLocale) => {
      localStorage.setItem('locale', newLocale);
      document.documentElement.lang = newLocale;
    });
  }
  return store;
}

export const localStore = createLocalStore();

export const translationStore = derived(localStore, ($locale) => dictionaries[$locale]);
