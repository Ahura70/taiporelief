import { useState } from 'react';
import { Resource } from '@/lib/translations';
import { OptimizedImage } from './OptimizedImage';
import { DollarSign } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';

interface QuickActionsProps {
  resources: Resource[];
  onSelectResource: (resource: Resource) => void;
}

export const QuickActions = ({ resources, onSelectResource }: QuickActionsProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { currentLang } = useLanguage();
  const t = translations[currentLang];

  const scrollToFinancialAid = () => {
    const element = document.getElementById('financial-aid');
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-6">
      {/* Financial Aid Quick Action */}
      <button
        onClick={scrollToFinancialAid}
        onMouseEnter={() => setHoveredIndex(-1)}
        onMouseLeave={() => setHoveredIndex(null)}
        className={`flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 rounded-xl shadow transition-all duration-300 ${
          hoveredIndex === -1 
            ? 'shadow-lg scale-105 bg-primary/30 ring-2 ring-primary/50' 
            : hoveredIndex !== null 
            ? 'opacity-30 scale-95' 
            : 'hover:shadow-lg hover:scale-105 hover:bg-primary/30'
        } focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-95`}
        aria-label={t.financialAidTitle}
      >
        <DollarSign className="w-10 h-10 text-primary" aria-hidden="true" />
        <div className="text-xs font-bold text-center leading-tight text-primary">
          {t.financialAidTitle}
        </div>
      </button>

      {resources.map((resource, idx) => (
        <button
          key={idx}
          onClick={() => onSelectResource(resource)}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`flex flex-col items-center gap-2 p-4 bg-card rounded-xl shadow transition-all duration-300 ${
            hoveredIndex === idx 
              ? 'shadow-lg scale-105 bg-accent ring-2 ring-ring/20' 
              : hoveredIndex !== null 
              ? 'opacity-30 scale-95' 
              : 'hover:shadow-lg hover:scale-105 hover:bg-accent'
          } focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-95`}
          aria-label={resource.title}
        >
          {resource.iconImage ? (
            <OptimizedImage
              src={resource.iconImage}
              alt={resource.title}
              className="w-12 h-12"
              fallback={resource.icon}
            />
          ) : (
            <div className="text-4xl" aria-hidden="true">
              {resource.icon}
            </div>
          )}
          <div className="text-xs font-semibold text-center leading-tight text-card-foreground">
            {resource.title}
          </div>
        </button>
      ))}
    </div>
  );
};
