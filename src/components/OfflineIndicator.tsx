import { useState, useEffect } from 'react';
import { WifiOff } from 'lucide-react';

interface OfflineIndicatorProps {
  text: string;
}

export const OfflineIndicator = ({ text }: OfflineIndicatorProps) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-warning text-foreground px-5 py-3 text-center text-sm font-medium z-50 animate-in slide-in-from-top duration-300 shadow-lg">
      <div className="flex items-center justify-center gap-2">
        <WifiOff className="w-4 h-4" />
        <span>{text}</span>
      </div>
    </div>
  );
};
