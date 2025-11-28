import { Resource } from '@/lib/translations';
import { OptimizedImage } from './OptimizedImage';

interface QuickActionsProps {
  resources: Resource[];
  onSelectResource: (resource: Resource) => void;
}

export const QuickActions = ({ resources, onSelectResource }: QuickActionsProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-6">
      {resources.map((resource, idx) => (
        <button
          key={idx}
          onClick={() => onSelectResource(resource)}
          className="flex flex-col items-center gap-2 p-4 bg-card rounded-xl shadow hover:shadow-md transition-all hover:scale-105 active:scale-95"
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
            <div className="text-4xl" aria-hidden="true">{resource.icon}</div>
          )}
          <div className="text-xs font-semibold text-center leading-tight text-card-foreground">
            {resource.title}
          </div>
        </button>
      ))}
    </div>
  );
};
