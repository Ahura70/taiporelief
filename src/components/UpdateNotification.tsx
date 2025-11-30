import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { RefreshCw, X, Download } from 'lucide-react';
import { useServiceWorkerUpdate } from '@/hooks/useServiceWorkerUpdate';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';

export const UpdateNotification = () => {
  const { needRefresh, offlineReady, handleUpdate, handleDismiss } = useServiceWorkerUpdate();
  const { currentLang } = useLanguage();
  const t = translations[currentLang];
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (needRefresh) {
      setShow(true);
    }
  }, [needRefresh]);

  useEffect(() => {
    if (offlineReady) {
      // Show brief notification that app is ready for offline use
      setTimeout(() => {
        setShow(false);
      }, 5000);
    }
  }, [offlineReady]);

  if (!show) return null;

  const updateTitle = currentLang === 'zh' ? '有新版本可用' :
                      currentLang === 'tl' ? 'May Bagong Bersyon' :
                      currentLang === 'id' ? 'Versi Baru Tersedia' :
                      'New Version Available';

  const updateMessage = currentLang === 'zh' ? '新版本已準備就緒。請重新載入以獲得最新功能和修正。' :
                        currentLang === 'tl' ? 'Ang bagong bersyon ay handa na. Paki-reload para sa pinakabagong features at fixes.' :
                        currentLang === 'id' ? 'Versi baru sudah siap. Silakan muat ulang untuk fitur dan perbaikan terbaru.' :
                        'A new version is ready. Please reload to get the latest features and fixes.';

  const updateButton = currentLang === 'zh' ? '更新' :
                       currentLang === 'tl' ? 'I-update' :
                       currentLang === 'id' ? 'Perbarui' :
                       'Update';

  const laterButton = currentLang === 'zh' ? '稍後' :
                      currentLang === 'tl' ? 'Mamaya' :
                      currentLang === 'id' ? 'Nanti' :
                      'Later';

  const offlineReadyTitle = currentLang === 'zh' ? '可離線使用' :
                            currentLang === 'tl' ? 'Handa na para Offline' :
                            currentLang === 'id' ? 'Siap untuk Offline' :
                            'Ready for Offline';

  const offlineReadyMessage = currentLang === 'zh' ? '應用程式已準備好在離線狀態下工作。' :
                              currentLang === 'tl' ? 'Ang app ay handa nang gumana nang offline.' :
                              currentLang === 'id' ? 'Aplikasi siap bekerja secara offline.' :
                              'The app is ready to work offline.';

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[60] w-full max-w-md px-4 animate-in slide-in-from-top duration-300">
      <Card className="border-2 shadow-2xl bg-background/95 backdrop-blur-md">
        <div className="p-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              {needRefresh ? (
                <RefreshCw className="w-5 h-5 text-primary" />
              ) : (
                <Download className="w-5 h-5 text-primary" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-base mb-1">
                {needRefresh ? updateTitle : offlineReadyTitle}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {needRefresh ? updateMessage : offlineReadyMessage}
              </p>
              <div className="flex gap-2">
                {needRefresh ? (
                  <>
                    <Button
                      onClick={handleUpdate}
                      size="sm"
                      className="flex-1 gap-2"
                    >
                      <RefreshCw className="w-4 h-4" />
                      {updateButton}
                    </Button>
                    <Button
                      onClick={() => {
                        handleDismiss();
                        setShow(false);
                      }}
                      size="sm"
                      variant="ghost"
                      className="px-3"
                    >
                      {laterButton}
                    </Button>
                  </>
                ) : (
                  <Button
                    onClick={() => setShow(false)}
                    size="sm"
                    variant="ghost"
                    className="ml-auto"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
            {needRefresh && (
              <Button
                onClick={() => {
                  handleDismiss();
                  setShow(false);
                }}
                size="sm"
                variant="ghost"
                className="flex-shrink-0 w-8 h-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};
