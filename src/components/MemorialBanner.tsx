import { Heart } from 'lucide-react';

interface MemorialBannerProps {
  message: string;
}

export const MemorialBanner = ({ message }: MemorialBannerProps) => {
  return (
    <div className="bg-card border-b-2 border-border">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-center gap-3 text-center">
          <Heart className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
          <p className="text-sm font-medium text-muted-foreground leading-relaxed max-w-2xl">
            {message}
          </p>
          <Heart className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};
