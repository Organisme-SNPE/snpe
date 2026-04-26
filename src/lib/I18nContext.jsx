import React, { createContext, useState, useEffect } from 'react';
import { languages, translations } from './i18n';

export const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState('fr');

  // Initialize language from localStorage or URL
  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    
    if (urlLang && languages[urlLang]) {
      setLanguage(urlLang);
      localStorage.setItem('language', urlLang);
    } else if (savedLang && languages[savedLang]) {
      setLanguage(savedLang);
    }

    // Apply RTL/LTR
    applyLanguageSettings(savedLang || urlLang || 'fr');
  }, []);

  const applyLanguageSettings = (lang) => {
    const dir = languages[lang]?.dir || 'ltr';
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.body.dir = dir;
  };

  const changeLanguage = (lang) => {
    if (languages[lang]) {
      setLanguage(lang);
      localStorage.setItem('language', lang);
      applyLanguageSettings(lang);
      // Update URL without reload
      const url = new URL(window.location);
      url.searchParams.set('lang', lang);
      window.history.replaceState({}, '', url);
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  const currentLanguage = languages[language];

  return (
    <I18nContext.Provider value={{ language, changeLanguage, t, currentLanguage, languages }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = React.useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}