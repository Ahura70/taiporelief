import { useState } from 'react';
import { Resource } from '@/lib/translations';
import { OptimizedImage } from './OptimizedImage';

interface QuickActionsProps {
  resources: Resource[];
  onSelectResource: (resource: Resource) => void;
}

export const QuickActions = ({ resources, onSelectResource }: QuickActionsProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-6">
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
