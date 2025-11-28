import { useEffect, useState } from 'react';
import { Clock, Heart, Users, AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useRealtimeUpdates } from '@/hooks/useRealtimeUpdates';

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
  const { updates, loading } = useRealtimeUpdates();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (updates.length > 0) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [updates.length]);

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

      {loading ? (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-4 rounded-xl border border-border bg-secondary/50 animate-pulse">
              <div className="h-4 bg-secondary rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-secondary rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-3 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
          {updates.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">No updates yet</p>
          ) : (
            updates.map((update, index) => (
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
          ))
        )}
      </div>
      )}

      <div className="mt-4 pt-4 border-t border-border/50">
        <p className="text-xs text-center text-muted-foreground">
          🔄 {timeAgo.justNow.includes('Just') ? 'Updates refresh automatically' : '自動更新中'}
        </p>
      </div>
    </div>
  );
};
