import { useState, useRef, useEffect } from 'react';
import { Language, languages } from '@/lib/translations';

interface HeaderProps {
  title: string;
  subtitle: string;
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

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
            className="flex items-center gap-2 bg-background/15 text-background px-3 py-1.5 rounded-full text-sm font-semibold transition-colors hover:bg-background/25"
          >
            <span>{languages[currentLang].name}</span>
            <span className="text-xs">▾</span>
          </button>
          {showMenu && (
            <div className="absolute top-full right-0 mt-2 bg-card rounded-xl shadow-2xl overflow-hidden w-44 border border-border">
              {Object.entries(languages).map(([code, lang]) => (
                <button
                  key={code}
                  onClick={() => {
                    onLanguageChange(code as Language);
                    setShowMenu(false);
                  }}
                  className={`w-full px-4 py-3 text-left text-sm border-b border-border last:border-0 transition-colors ${
                    currentLang === code
                      ? 'bg-accent text-primary font-bold'
                      : 'text-card-foreground hover:bg-secondary'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
