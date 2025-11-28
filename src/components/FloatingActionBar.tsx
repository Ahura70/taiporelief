import { Phone, Heart, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FloatingActionBarProps {
  emergencyLabel: string;
  mentalHealthLabel: string;
  donateLabel: string;
}

export const FloatingActionBar = ({
  emergencyLabel,
  mentalHealthLabel,
  donateLabel,
}: FloatingActionBarProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border shadow-lg z-50">
      <div className="max-w-4xl mx-auto px-4 py-3">
        <div className="grid grid-cols-3 gap-2">
          <Button
            variant="default"
            size="lg"
            className="flex-col h-auto py-3 gap-1"
            asChild
          >
            <a href="tel:18789999" aria-label={`${emergencyLabel}: 1878 999`}>
              <Phone className="h-5 w-5" />
              <span className="text-xs font-semibold">{emergencyLabel}</span>
              <span className="text-xs opacity-90">1878 999</span>
            </a>
          </Button>

          <Button
            variant="secondary"
            size="lg"
            className="flex-col h-auto py-3 gap-1"
            asChild
          >
            <a href="tel:18111" aria-label={`${mentalHealthLabel}: 18111`}>
              <Heart className="h-5 w-5" />
              <span className="text-xs font-semibold">{mentalHealthLabel}</span>
              <span className="text-xs opacity-90">18111</span>
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="flex-col h-auto py-3 gap-1"
            onClick={() => {
              const donationSection = document.querySelector('[data-donation-tracker]');
              donationSection?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
            aria-label={donateLabel}
          >
            <DollarSign className="h-5 w-5" />
            <span className="text-xs font-semibold">{donateLabel}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
