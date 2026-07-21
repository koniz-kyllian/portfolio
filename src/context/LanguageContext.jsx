import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '../locales/en.json';
import vi from '../locales/vi.json';

const LanguageContext = createContext();

const translations = { en, vi };

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('portfolio_lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('portfolio_lang', lang);
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'vi' : 'en'));
  };

  const t = (path) => {
    const keys = path.split('.');
    let current = translations[lang];
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to English if key missing
        let fallback = translations['en'];
        for (const k of keys) {
          if (fallback && fallback[k] !== undefined) {
            fallback = fallback[k];
          } else {
            return path;
          }
        }
        return fallback;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
