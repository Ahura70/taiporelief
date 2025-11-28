import { useState, useEffect } from 'react';
import { Language } from '@/lib/translations';

const LANGUAGE_KEY = 'taiporelief_language';

export const useLanguage = () => {
  const [currentLang, setCurrentLang] = useState<Language>('zh');

  useEffect(() => {
    // Check saved preference first
    const saved = localStorage.getItem(LANGUAGE_KEY) as Language | null;
    if (saved && ['zh', 'en', 'tl', 'id'].includes(saved)) {
      setCurrentLang(saved);
      return;
    }

    // Auto-detect language
    const userLang = navigator.language || (navigator as any).userLanguage;
    if (userLang.includes('en')) setCurrentLang('en');
    else if (userLang.includes('zh')) setCurrentLang('zh');
    else if (userLang.includes('tl') || userLang.includes('fil')) setCurrentLang('tl');
    else if (userLang.includes('id')) setCurrentLang('id');
  }, []);

  const changeLanguage = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem(LANGUAGE_KEY, lang);
    
    // Announce language change to screen readers
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = `Language changed to ${lang}`;
    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 1000);
  };

  return {
    currentLang,
    changeLanguage,
  };
};
