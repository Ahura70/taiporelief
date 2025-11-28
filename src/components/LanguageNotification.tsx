import { useEffect, useState } from 'react';
import { X, Globe } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface LanguageNotificationProps {
  message: string;
  currentLang: string;
}

export const LanguageNotification = ({ message, currentLang }: LanguageNotificationProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if user has seen the notification before
    const hasSeenNotification = localStorage.getItem('language-notification-seen');
    
    if (!hasSeenNotification) {
      // Show notification after a short delay
      const timer = setTimeout(() => {
        setShow(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setShow(false);
    localStorage.setItem('language-notification-seen', 'true');
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-24 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-md z-50 animate-in slide-in-from-bottom-5">
      <Alert className="bg-card border-2 border-primary shadow-lg">
        <Globe className="h-4 w-4" />
        <AlertDescription className="flex items-start justify-between gap-2">
          <span className="text-sm">{message}</span>
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 p-1 hover:bg-accent hover:shadow-sm rounded-full transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ring active:scale-90"
            aria-label="Close notification"
          >
            <X className="h-4 w-4" />
          </button>
        </AlertDescription>
      </Alert>
    </div>
  );
};
