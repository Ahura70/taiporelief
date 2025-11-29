import { Clock, AlertTriangle, Heart, Flag, HandHeart, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { useTimeline, TimelineEvent } from '@/hooks/useTimeline';
import { useLanguage } from '@/hooks/useLanguage';
import { format, formatDistanceToNow } from 'date-fns';
import { zhHK, enUS } from 'date-fns/locale';

interface DisasterTimelineProps {
  title: string;
  loadingText: string;
}

const getEventIcon = (type: string) => {
  switch (type) {
    case 'casualty':
      return <AlertTriangle className="w-5 h-5" />;
    case 'relief':
      return <Heart className="w-5 h-5" />;
    case 'milestone':
      return <Flag className="w-5 h-5" />;
    case 'rescue':
      return <HandHeart className="w-5 h-5" />;
    case 'donation':
      return <DollarSign className="w-5 h-5" />;
    default:
      return <Clock className="w-5 h-5" />;
  }
};

const getEventColor = (type: string, isCritical: boolean) => {
  if (isCritical) return 'border-destructive/30 bg-destructive/5';
  
  switch (type) {
    case 'casualty':
      return 'border-destructive/30 bg-destructive/5';
    case 'relief':
      return 'border-primary/30 bg-primary/5';
    case 'milestone':
      return 'border-accent/30 bg-accent/5';
    case 'rescue':
      return 'border-green-500/30 bg-green-500/5';
    case 'donation':
      return 'border-yellow-500/30 bg-yellow-500/5';
    default:
      return 'border-border bg-muted/30';
  }
};

const getIconColor = (type: string, isCritical: boolean) => {
  if (isCritical) return 'text-destructive bg-destructive/10';
  
  switch (type) {
    case 'casualty':
      return 'text-destructive bg-destructive/10';
    case 'relief':
      return 'text-primary bg-primary/10';
    case 'milestone':
      return 'text-accent bg-accent/10';
    case 'rescue':
      return 'text-green-600 bg-green-600/10 dark:text-green-400';
    case 'donation':
      return 'text-yellow-600 bg-yellow-600/10 dark:text-yellow-400';
    default:
      return 'text-muted-foreground bg-muted';
  }
};

const getEventTypeLabel = (type: string, lang: string) => {
  const labels: Record<string, Record<string, string>> = {
    casualty: { zh: '傷亡報告', en: 'Casualty Report', tl: 'Ulat ng Nasawi', id: 'Laporan Korban' },
    relief: { zh: '救援行動', en: 'Relief Action', tl: 'Relief Action', id: 'Aksi Bantuan' },
    milestone: { zh: '重要里程', en: 'Milestone', tl: 'Milestone', id: 'Pencapaian' },
    rescue: { zh: '救援', en: 'Rescue', tl: 'Rescue', id: 'Penyelamatan' },
    donation: { zh: '捐款', en: 'Donation', tl: 'Donasyon', id: 'Donasi' }
  };
  
  return labels[type]?.[lang] || type;
};

export const DisasterTimeline = ({ title, loadingText }: DisasterTimelineProps) => {
  const { events, isLoading } = useTimeline();
  const { currentLang } = useLanguage();

  const getLocalizedContent = (event: TimelineEvent) => {
    const titleKey = `title_${currentLang}` as keyof TimelineEvent;
    const descKey = `description_${currentLang}` as keyof TimelineEvent;
    
    return {
      title: event[titleKey] as string,
      description: event[descKey] as string | undefined
    };
  };

  const formatEventTime = (timeStr: string) => {
    const date = new Date(timeStr);
    let locale = enUS;
    
    // Only zh has native date-fns locale support, others use English
    if (currentLang === 'zh') {
      locale = zhHK;
    }
    
    const timeAgo = formatDistanceToNow(date, { 
      addSuffix: true, 
      locale 
    });
    
    const fullDate = format(date, 'PPp', { locale });
    
    return { timeAgo, fullDate };
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            {loadingText}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-24 w-full" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="w-5 h-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-border" />
          
          {/* Timeline events */}
          <div className="space-y-6">
            {events.map((event, index) => {
              const { title, description } = getLocalizedContent(event);
              const { timeAgo, fullDate } = formatEventTime(event.event_time);
              
              return (
                <div 
                  key={event.id} 
                  className="relative pl-12 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Timeline dot with icon */}
                  <div className={`absolute left-0 p-2 rounded-full border-2 border-background ${getIconColor(event.event_type, event.is_critical)}`}>
                    {getEventIcon(event.event_type)}
                  </div>
                  
                  {/* Event card */}
                  <div className={`border-l-4 rounded-lg p-4 transition-all hover:shadow-md ${getEventColor(event.event_type, event.is_critical)}`}>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${event.is_critical ? 'border-destructive text-destructive' : ''}`}
                          >
                            {getEventTypeLabel(event.event_type, currentLang)}
                          </Badge>
                          {event.is_critical && (
                            <Badge variant="destructive" className="text-xs">
                              {currentLang === 'zh' ? '重要' : currentLang === 'tl' ? 'Kritikal' : currentLang === 'id' ? 'Kritis' : 'Critical'}
                            </Badge>
                          )}
                        </div>
                        <h3 className={`font-semibold text-foreground ${event.is_critical ? 'text-lg' : ''}`}>
                          {title}
                        </h3>
                        {description && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {description}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                      <Clock className="w-3 h-3" />
                      <span title={fullDate}>{timeAgo}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
