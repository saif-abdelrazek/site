/**
 * @deprecated This file is kept for backwards compatibility.
 * Import from './locales' instead for the new modular structure.
 * 
 * Example:
 *   import { locales, en, ar } from './locales';
 *   import type { I18nStrings, LocaleCode } from './locales';
 */
import { locales, en, ar } from './locales';
import type { I18nStrings, LocaleCode } from './locales';

export const ui = locales;

// Re-export for backwards compatibility
export { en, ar };
export type { I18nStrings, LocaleCode };
