import { Cloud, CloudOff, RefreshCw, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useOfflineSync } from '@/hooks/useOfflineSync';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';

export const OfflineSyncStatus = () => {
  const { isOnline, isSyncing, lastSyncTime, triggerSync } = useOfflineSync();
  const { currentLang } = useLanguage();
  const t = translations[currentLang];

  const formatSyncTime = (date: Date | null) => {
    if (!date) return null;
    
    const now = new Date();
    const diff = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diff < 60) {
      return currentLang === 'zh' ? '剛才' : 
             currentLang === 'tl' ? 'Kararaan lang' :
             currentLang === 'id' ? 'Baru saja' : 
             'Just now';
    }
    
    if (diff < 3600) {
      const mins = Math.floor(diff / 60);
      return currentLang === 'zh' ? `${mins} 分鐘前` :
             currentLang === 'tl' ? `${mins} minuto ang nakalipas` :
             currentLang === 'id' ? `${mins} menit yang lalu` :
             `${mins}m ago`;
    }
    
    const hours = Math.floor(diff / 3600);
    return currentLang === 'zh' ? `${hours} 小時前` :
           currentLang === 'tl' ? `${hours} oras ang nakalipas` :
           currentLang === 'id' ? `${hours} jam yang lalu` :
           `${hours}h ago`;
  };

  const syncLabel = currentLang === 'zh' ? '同步資料' :
                    currentLang === 'tl' ? 'I-sync ang Data' :
                    currentLang === 'id' ? 'Sinkronkan Data' :
                    'Sync Data';

  const offlineLabel = currentLang === 'zh' ? '離線模式' :
                       currentLang === 'tl' ? 'Offline Mode' :
                       currentLang === 'id' ? 'Mode Offline' :
                       'Offline Mode';

  const onlineLabel = currentLang === 'zh' ? '已連線' :
                      currentLang === 'tl' ? 'Online' :
                      currentLang === 'id' ? 'Online' :
                      'Online';

  const syncingLabel = currentLang === 'zh' ? '同步中...' :
                       currentLang === 'tl' ? 'Nag-sync...' :
                       currentLang === 'id' ? 'Menyinkronkan...' :
                       'Syncing...';

  const lastSyncLabel = currentLang === 'zh' ? '最後同步' :
                        currentLang === 'tl' ? 'Huling sync' :
                        currentLang === 'id' ? 'Sinkronisasi terakhir' :
                        'Last synced';

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2 animate-in slide-in-from-left duration-300">
      <Badge 
        variant={isOnline ? "default" : "destructive"}
        className="flex items-center gap-1.5 px-3 py-1.5 shadow-lg"
      >
        {isOnline ? (
          <>
            <Cloud className="w-3.5 h-3.5" />
            <span className="text-xs font-medium">{onlineLabel}</span>
          </>
        ) : (
          <>
            <CloudOff className="w-3.5 h-3.5" />
            <span className="text-xs font-medium">{offlineLabel}</span>
          </>
        )}
      </Badge>

      {isOnline && (
        <>
          {lastSyncTime && (
            <Badge variant="outline" className="flex items-center gap-1.5 px-3 py-1.5 bg-background/80 backdrop-blur-sm shadow-lg">
              <Clock className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">
                {lastSyncLabel}: {formatSyncTime(lastSyncTime)}
              </span>
            </Badge>
          )}

          <Button
            variant="outline"
            size="sm"
            onClick={triggerSync}
            disabled={isSyncing}
            className="h-8 px-3 shadow-lg bg-background/80 backdrop-blur-sm"
          >
            <RefreshCw className={`w-3.5 h-3.5 mr-1.5 ${isSyncing ? 'animate-spin' : ''}`} />
            <span className="text-xs">
              {isSyncing ? syncingLabel : syncLabel}
            </span>
          </Button>
        </>
      )}
    </div>
  );
};
