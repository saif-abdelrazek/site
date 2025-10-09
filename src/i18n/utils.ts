export const languages = {
  en: 'English',
  ar: 'العربية',
} as const;

export const defaultLang = 'en';
export const showDefaultLang = false;

export type Language = keyof typeof languages;

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Language;
  return defaultLang;
}

export function useTranslatedPath(lang: Language) {
  return function translatePath(path: string, l: Language = lang) {
    const pathWithoutLang = path.replace(/^\/[a-z]{2}/, '');
    return l === defaultLang && !showDefaultLang
      ? pathWithoutLang
      : `/${l}${pathWithoutLang}`;
  };
}

export function getLocalizedUrl(url: string, lang: Language): string {
  const [, urlLang, ...rest] = url.split('/');
  
  if (lang === defaultLang && !showDefaultLang) {
    // For default language, remove language prefix
    if (urlLang in languages) {
      return '/' + rest.join('/');
    }
    return url;
  } else {
    // For non-default language, add/replace language prefix
    if (urlLang in languages) {
      return `/${lang}/${rest.join('/')}`;
    }
    return `/${lang}${url}`;
  }
}

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = new URL(url).pathname;
  const parts = pathname?.split('/');
  const path = parts.pop() || parts.pop();

  if (path === undefined) {
    return undefined;
  }

  const currentLang = getLangFromUrl(url);

  if (defaultLang === currentLang) {
    return path;
  }

  return path;
}