import { ui } from './ui';
import type { Language } from './utils';

export function useTranslations(lang: Language) {
  return function t(key: keyof typeof ui[typeof lang]) {
    return ui[lang][key] || ui.ar[key];
  }
}

export function t(lang: Language, key: keyof typeof ui[typeof lang]) {
  return ui[lang][key] || ui.ar[key];
}