import { useState, useEffect } from 'react';
import { Language } from '@/lib/translations';

const LANGUAGE_KEY = 'taiporelief_language';

const detectUserLanguage = (): Language => {
  // Get browser language preferences
  const browserLang = navigator.language || navigator.languages?.[0] || 'en';
  
  // Map browser language codes to app languages
  // Hong Kong, Taiwan, Mainland China
  if (browserLang.startsWith('zh')) {
    return 'zh';
  }
  // Philippines (Tagalog/Filipino)
  else if (browserLang.startsWith('tl') || browserLang.startsWith('fil')) {
    return 'tl';
  }
  // Indonesia
  else if (browserLang.startsWith('id')) {
    return 'id';
  }
  
  // Default to English for all other regions
  return 'en';
};

export const useLanguage = () => {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    // Check saved preference first
    const saved = localStorage.getItem(LANGUAGE_KEY) as Language | null;
    if (saved && ['zh', 'en', 'tl', 'id'].includes(saved)) {
      return saved;
    }
    // Auto-detect from browser
    return detectUserLanguage();
  });

  useEffect(() => {
    // Update HTML lang attribute for accessibility and SEO
    const langMap = {
      zh: 'zh-HK',
      en: 'en-US',
      tl: 'tl-PH',
      id: 'id-ID'
    };
    document.documentElement.lang = langMap[currentLang];
  }, [currentLang]);

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
