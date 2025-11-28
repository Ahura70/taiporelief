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
          className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full shadow-lg bg-red-600 hover:bg-red-700 text-white"
          aria-label={emergencyTitle}
        >
          <Phone className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-red-600">
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
            className="w-full flex items-center gap-3 p-4 bg-card border-2 border-red-600 rounded-xl hover:bg-red-50 transition-all text-left group"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
              <AlertCircle className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-card-foreground">{casualtyLabel}</div>
              <div className="text-2xl font-bold text-red-600">1878 999</div>
            </div>
            <Phone className="h-5 w-5 text-muted-foreground group-hover:text-red-600 transition-colors" />
          </button>

          <button
            onClick={() => handleDial('18111')}
            className="w-full flex items-center gap-3 p-4 bg-card border-2 border-border rounded-xl hover:bg-secondary transition-all text-left group"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Heart className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-card-foreground">{mentalHealthLabel}</div>
              <div className="text-2xl font-bold text-primary">18111</div>
            </div>
            <Phone className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </button>
        </div>
        <p className="text-xs text-muted-foreground text-center">
          {emergencyDescription}
        </p>
      </DialogContent>
    </Dialog>
  );
};
