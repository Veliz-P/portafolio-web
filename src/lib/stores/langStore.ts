import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';
import { en } from '$lib/langs/en';
import { es } from '$lib/langs/es';

const dictionaries = { en, es };
type Locale = keyof typeof dictionaries;

function createLocalStore() {
  let savedLocal = browser ? localStorage.getItem('locale') : 'es';
  if (!savedLocal || !Object.keys(dictionaries).includes(savedLocal)) {
    savedLocal = 'es';
  }
  const store = writable<Locale>(savedLocal as Locale);
  if (browser) {
    store.subscribe((newLocale) => {
      localStorage.setItem('locale', newLocale);
    });
  }
  return store;
}

export const localStore = createLocalStore();

export const translationStore = derived(localStore, ($locale) => dictionaries[$locale]);
