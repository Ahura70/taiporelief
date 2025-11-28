import { useEffect, useState } from 'react';
import { Clock, Heart, Users, AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Update {
  id: string;
  type: 'donation' | 'volunteer' | 'alert';
  message: string;
  timestamp: Date;
  amount?: string;
}

interface LiveUpdatesFeedProps {
  title: string;
  donationType: string;
  volunteerType: string;
  alertType: string;
  timeAgo: {
    justNow: string;
    minutesAgo: string;
    hoursAgo: string;
  };
}

export const LiveUpdatesFeed = ({
  title,
  donationType,
  volunteerType,
  alertType,
  timeAgo,
}: LiveUpdatesFeedProps) => {
  const [updates, setUpdates] = useState<Update[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Simulate real-time updates - in production, this would connect to a real API/WebSocket
  const generateMockUpdate = (): Update => {
    const types: Array<'donation' | 'volunteer' | 'alert'> = ['donation', 'volunteer', 'alert'];
    const type = types[Math.floor(Math.random() * types.length)];
    
    const donations = [
      { message: 'Anonymous donated', amount: 'HK$50,000' },
      { message: 'Corporate sponsor contributed', amount: 'HK$100,000' },
      { message: 'Community fundraiser raised', amount: 'HK$25,000' },
      { message: 'Online campaign collected', amount: 'HK$75,000' },
    ];

    const volunteers = [
      { message: '5 volunteers signed up for meal distribution' },
      { message: '3 medical professionals joined the support team' },
      { message: '10 translators registered for hotline support' },
      { message: '8 volunteers helping with temporary housing setup' },
    ];

    const alerts = [
      { message: 'New collection point opened at Tai Po Sports Ground' },
      { message: 'Extended support center hours: Now open until 20:00' },
      { message: 'Emergency counseling available 24/7' },
      { message: 'Temporary housing allocation updated' },
    ];

    let update: Update;

    switch (type) {
      case 'donation':
        const donation = donations[Math.floor(Math.random() * donations.length)];
        update = {
          id: Date.now().toString(),
          type: 'donation',
          message: donation.message,
          amount: donation.amount,
          timestamp: new Date(),
        };
        break;
      case 'volunteer':
        const volunteer = volunteers[Math.floor(Math.random() * volunteers.length)];
        update = {
          id: Date.now().toString(),
          type: 'volunteer',
          message: volunteer.message,
          timestamp: new Date(),
        };
        break;
      case 'alert':
        const alert = alerts[Math.floor(Math.random() * alerts.length)];
        update = {
          id: Date.now().toString(),
          type: 'alert',
          message: alert.message,
          timestamp: new Date(),
        };
        break;
    }

    return update;
  };

  useEffect(() => {
    // Initialize with some updates
    const initialUpdates = Array.from({ length: 3 }, () => generateMockUpdate());
    setUpdates(initialUpdates);

    // Add new update every 8-15 seconds
    const interval = setInterval(() => {
      const newUpdate = generateMockUpdate();
      setIsAnimating(true);
      setUpdates((prev) => [newUpdate, ...prev.slice(0, 9)]); // Keep last 10 updates
      
      setTimeout(() => setIsAnimating(false), 500);
    }, Math.random() * 7000 + 8000); // Random between 8-15 seconds

    return () => clearInterval(interval);
  }, []);

  const getUpdateIcon = (type: string) => {
    switch (type) {
      case 'donation':
        return <Heart className="w-4 h-4" />;
      case 'volunteer':
        return <Users className="w-4 h-4" />;
      case 'alert':
        return <AlertTriangle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getUpdateColor = (type: string) => {
    switch (type) {
      case 'donation':
        return 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20';
      case 'volunteer':
        return 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20';
      case 'alert':
        return 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'donation':
        return donationType;
      case 'volunteer':
        return volunteerType;
      case 'alert':
        return alertType;
      default:
        return type;
    }
  };

  const getTimeAgoText = (timestamp: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - timestamp.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);

    if (diffMins < 1) return timeAgo.justNow;
    if (diffMins < 60) return `${diffMins} ${timeAgo.minutesAgo}`;
    return `${diffHours} ${timeAgo.hoursAgo}`;
  };

  return (
    <div className="bg-gradient-to-br from-background via-card to-secondary/20 border border-border rounded-2xl p-6 animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <div className="relative">
          <Clock className="w-5 h-5 text-primary" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
        </div>
        <h2 className="text-xl font-bold text-foreground">{title}</h2>
      </div>

      <div className="space-y-3 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
        {updates.map((update, index) => (
          <div
            key={update.id}
            className={`p-4 rounded-xl border transition-all duration-500 ${getUpdateColor(update.type)} ${
              index === 0 && isAnimating ? 'animate-scale-in' : ''
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="mt-1">{getUpdateIcon(update.type)}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="outline" className="text-xs">
                    {getTypeLabel(update.type)}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {getTimeAgoText(update.timestamp)}
                  </span>
                </div>
                <p className="text-sm font-medium leading-relaxed">
                  {update.message}
                  {update.amount && (
                    <span className="ml-2 font-bold text-primary">{update.amount}</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-border/50">
        <p className="text-xs text-center text-muted-foreground">
          🔄 {timeAgo.justNow.includes('Just') ? 'Updates refresh automatically' : '自動更新中'}
        </p>
      </div>
    </div>
  );
};
