import { Skeleton } from '@/components/ui/skeleton';

export const ResourceListSkeleton = () => {
  return (
    <div className="space-y-4" role="status" aria-label="Loading resources">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="bg-card rounded-lg p-4 shadow-md border border-border">
          <div className="flex items-start gap-3">
            <Skeleton className="w-12 h-12 rounded-lg flex-shrink-0" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <div className="flex gap-2 mt-3">
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-8 w-20" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const MapSkeleton = () => {
  return (
    <div className="w-full bg-card rounded-lg shadow-lg overflow-hidden border border-border" role="status" aria-label="Loading map">
      <div className="p-4 bg-muted/50 border-b border-border">
        <Skeleton className="h-6 w-48" />
      </div>
      <Skeleton className="w-full h-[500px]" />
    </div>
  );
};
