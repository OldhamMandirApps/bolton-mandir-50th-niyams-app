import { atom, AtomEffect, DefaultValue } from 'recoil';

enum Language {
  english = 'english',
  gujarati = 'gujarati',
}

function localStorageEffect<T>(key: string): AtomEffect<T> {
  return function ({ setSelf, onSet }) {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: unknown) => {
      if (newValue instanceof DefaultValue) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };
}

const currentLanguageAtom = atom<Language>({
  key: 'currentLanguage',
  default: Language.english,
  effects_UNSTABLE: [localStorageEffect('current_language')],
});

export { currentLanguageAtom, Language };
