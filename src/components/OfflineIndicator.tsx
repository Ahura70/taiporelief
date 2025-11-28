import { useEffect, useState } from 'react';
import { WifiOff, Wifi } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

export const OfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showOnlineNotification, setShowOnlineNotification] = useState(false);
  const [lastOnlineTime, setLastOnlineTime] = useState<Date | null>(null);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowOnlineNotification(true);
      setTimeout(() => setShowOnlineNotification(false), 3000);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setLastOnlineTime(new Date());
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline && !showOnlineNotification) return null;

  return (
    <div 
      className="fixed top-16 left-0 right-0 z-40 px-5"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <Alert 
        className={`max-w-4xl mx-auto ${
          isOnline 
            ? 'bg-success text-primary-foreground border-success' 
            : 'bg-destructive text-destructive-foreground border-destructive'
        }`}
      >
        <div className="flex items-center gap-2">
          {isOnline ? (
            <>
              <Wifi className="h-4 w-4" aria-hidden="true" />
              <AlertDescription>
                <strong>Back online</strong> - Data is now up to date
              </AlertDescription>
            </>
          ) : (
            <>
              <WifiOff className="h-4 w-4" aria-hidden="true" />
              <AlertDescription>
                <strong>Offline mode</strong> - Viewing cached data
                {lastOnlineTime && (
                  <span className="block text-xs mt-1 opacity-90">
                    Last updated: {lastOnlineTime.toLocaleTimeString()}
                  </span>
                )}
              </AlertDescription>
            </>
          )}
        </div>
      </Alert>
    </div>
  );
};
