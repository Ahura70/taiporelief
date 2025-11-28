import { useState, useEffect } from 'react';
import { Bell, BellOff, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface NotificationToggleProps {
  enableText: string;
  disableText: string;
  enabledText: string;
  disabledText: string;
  permissionDeniedText: string;
  testNotificationTitle: string;
  testNotificationBody: string;
}

export const NotificationToggle = ({
  enableText,
  disableText,
  enabledText,
  disabledText,
  permissionDeniedText,
  testNotificationTitle,
  testNotificationBody
}: NotificationToggleProps) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [permissionState, setPermissionState] = useState<NotificationPermission>('default');
  const { toast } = useToast();

  useEffect(() => {
    // Check if notifications are supported
    if ('Notification' in window) {
      setPermissionState(Notification.permission);
      
      // Check localStorage for user preference
      const enabled = localStorage.getItem('notifications_enabled') === 'true';
      setNotificationsEnabled(enabled && Notification.permission === 'granted');
    }
  }, []);

  const requestPermission = async () => {
    if (!('Notification' in window)) {
      toast({
        title: "Not Supported",
        description: "Notifications are not supported in this browser",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    try {
      const permission = await Notification.requestPermission();
      setPermissionState(permission);

      if (permission === 'granted') {
        setNotificationsEnabled(true);
        localStorage.setItem('notifications_enabled', 'true');
        
        // Send test notification
        if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
          new Notification(testNotificationTitle, {
            body: testNotificationBody,
            icon: '/manifest.json',
            tag: 'test-notification'
          });
        }

        toast({
          title: enabledText,
          description: "You'll receive urgent updates and emergency alerts",
          duration: 3000,
        });
      } else if (permission === 'denied') {
        toast({
          title: "Permission Denied",
          description: permissionDeniedText,
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      toast({
        title: "Error",
        description: "Failed to enable notifications",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  const disableNotifications = () => {
    setNotificationsEnabled(false);
    localStorage.setItem('notifications_enabled', 'false');
    
    toast({
      title: disabledText,
      description: "You won't receive push notifications",
      duration: 3000,
    });
  };

  const toggleNotifications = () => {
    if (notificationsEnabled) {
      disableNotifications();
    } else {
      requestPermission();
    }
  };

  if (!('Notification' in window)) {
    return null;
  }

  return (
    <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
          {notificationsEnabled ? (
            <Bell className="w-5 h-5 text-primary" />
          ) : (
            <BellOff className="w-5 h-5 text-muted-foreground" />
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-sm text-card-foreground">
              {notificationsEnabled ? enabledText : disabledText}
            </h3>
            {notificationsEnabled && (
              <Check className="w-4 h-4 text-success" />
            )}
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            {notificationsEnabled 
              ? "You'll receive urgent updates and emergency alerts"
              : "Enable to receive urgent updates and emergency alerts"}
          </p>
          <Button
            onClick={toggleNotifications}
            variant={notificationsEnabled ? "outline" : "default"}
            size="sm"
            className="w-full gap-2"
            disabled={permissionState === 'denied' && !notificationsEnabled}
          >
            {notificationsEnabled ? (
              <>
                <X className="w-4 h-4" />
                {disableText}
              </>
            ) : (
              <>
                <Bell className="w-4 h-4" />
                {enableText}
              </>
            )}
          </Button>
          {permissionState === 'denied' && !notificationsEnabled && (
            <p className="text-xs text-destructive mt-2">
              {permissionDeniedText}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
