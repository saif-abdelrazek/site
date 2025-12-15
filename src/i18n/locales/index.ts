import en from './en';
import ar from './ar';

export const locales = {
  en,
  ar,
} as const;

export type LocaleCode = keyof typeof locales;
export type { I18nStrings } from '../types';
export { en, ar };
