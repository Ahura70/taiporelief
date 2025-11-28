import { Resource, Language, languages } from '@/lib/translations';
import { Badge } from '@/components/ui/badge';

interface QuickActionsProps {
  resources: Resource[];
  onSelectResource: (resource: Resource) => void;
  currentLang: Language;
}

export const QuickActions = ({ resources, onSelectResource, currentLang }: QuickActionsProps) => {
  const langName = languages[currentLang].name;
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-6">
      {resources.map((resource, idx) => (
        <button
          key={idx}
          onClick={() => onSelectResource(resource)}
          className="flex flex-col items-center gap-2 p-4 bg-card rounded-xl shadow hover:shadow-md transition-all hover:scale-105 active:scale-95 relative"
        >
          <Badge 
            variant="secondary" 
            className="absolute top-2 right-2 text-[10px] px-1.5 py-0 h-4"
          >
            {currentLang.toUpperCase()}
          </Badge>
          {resource.logo ? (
            <div className="w-16 h-16 flex items-center justify-center mt-2">
              <img 
                src={resource.logo} 
                alt={resource.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ) : (
            <div className="text-4xl mt-2">{resource.icon}</div>
          )}
          <div className="text-xs font-semibold text-center leading-tight text-card-foreground">
            {resource.title}
          </div>
        </button>
      ))}
    </div>
  );
};
