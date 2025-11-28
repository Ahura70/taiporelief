import { Phone, Heart, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface EmergencyDialButtonProps {
  casualtyLabel: string;
  mentalHealthLabel: string;
  emergencyTitle: string;
  emergencyDescription: string;
}

export const EmergencyDialButton = ({ 
  casualtyLabel, 
  mentalHealthLabel,
  emergencyTitle,
  emergencyDescription 
}: EmergencyDialButtonProps) => {
  const handleDial = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full shadow-lg bg-destructive hover:bg-destructive/80 hover:shadow-xl hover:scale-110 text-destructive-foreground transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ring active:scale-95"
          aria-label={emergencyTitle}
        >
          <Phone className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            {emergencyTitle}
          </DialogTitle>
          <DialogDescription>
            {emergencyDescription}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3 py-4">
          <button
            onClick={() => handleDial('1878999')}
            className="w-full flex items-center gap-3 p-4 bg-card border-2 border-destructive rounded-xl hover:bg-destructive/5 hover:shadow-md transition-all duration-200 text-left group focus-visible:ring-2 focus-visible:ring-ring active:scale-[0.98]"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-destructive rounded-full flex items-center justify-center">
              <AlertCircle className="h-6 w-6 text-destructive-foreground" />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-card-foreground">{casualtyLabel}</div>
              <div className="text-2xl font-bold">1878 999</div>
            </div>
            <Phone className="h-5 w-5 text-muted-foreground group-hover:text-destructive group-hover:scale-110 transition-all duration-200" />
          </button>

          <button
            onClick={() => handleDial('18111')}
            className="w-full flex items-center gap-3 p-4 bg-card border-2 border-border rounded-xl hover:bg-accent hover:border-primary hover:shadow-md transition-all duration-200 text-left group focus-visible:ring-2 focus-visible:ring-ring active:scale-[0.98]"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Heart className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-card-foreground">{mentalHealthLabel}</div>
              <div className="text-2xl font-bold text-primary">18111</div>
            </div>
            <Phone className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-200" />
          </button>
        </div>
        <p className="text-xs text-muted-foreground text-center">
          {emergencyDescription}
        </p>
      </DialogContent>
    </Dialog>
  );
};
