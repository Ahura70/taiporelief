import { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { Language, languages } from '@/lib/translations';

interface HeaderProps {
  title: string;
  subtitle: string;
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const languageIcons: Record<Language, string> = {
  zh: '中',
  en: 'EN',
  tl: 'TL',
  id: 'ID'
};

export const Header = ({ title, subtitle, currentLang, onLanguageChange }: HeaderProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-foreground text-background px-5 py-4 shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-lg font-bold">{title}</h1>
          <p className="text-xs opacity-80">{subtitle}</p>
        </div>
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex items-center justify-center gap-1.5 bg-background/15 text-background px-3 py-2 rounded-full transition-colors hover:bg-background/25"
            aria-label="Change language"
          >
            <Globe size={20} strokeWidth={2.5} />
            <span className="text-base font-bold">{languageIcons[currentLang]}</span>
          </button>
          {showMenu && (
            <div className="absolute top-full right-0 mt-2 bg-card rounded-2xl shadow-2xl p-2 border-2 border-border flex gap-2">
              {Object.entries(languages).map(([code, lang]) => (
                <button
                  key={code}
                  onClick={() => {
                    onLanguageChange(code as Language);
                    setShowMenu(false);
                  }}
                  className={`flex flex-col items-center justify-center gap-1 px-4 py-3 rounded-xl transition-all min-w-[60px] ${
                    currentLang === code
                      ? 'bg-primary text-primary-foreground font-bold shadow-md scale-105'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105'
                  }`}
                  aria-label={lang.name}
                >
                  <span className="text-2xl font-bold">{languageIcons[code as Language]}</span>
                  <span className="text-[10px] uppercase tracking-wide">{lang.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
