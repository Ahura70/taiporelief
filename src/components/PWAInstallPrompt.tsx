import { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PWAInstallPromptProps {
  installText: string;
  installDesc: string;
  installBtn: string;
}

export const PWAInstallPrompt = ({ installText, installDesc, installBtn }: PWAInstallPromptProps) => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('PWA installed');
    }
    
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    setDeferredPrompt(null);
  };

  if (!showPrompt || !deferredPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-80 bg-card border border-border rounded-xl shadow-2xl p-4 z-50 animate-in slide-in-from-bottom duration-300">
      <button
        onClick={handleDismiss}
        className="absolute top-2 right-2 p-1 hover:bg-secondary rounded-full transition-colors"
        aria-label="Close"
      >
        <X className="w-4 h-4" />
      </button>
      
      <div className="flex items-start gap-3">
        <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
          <Download className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 pr-4">
          <h3 className="font-bold text-sm text-card-foreground mb-1">{installText}</h3>
          <p className="text-xs text-muted-foreground mb-3">{installDesc}</p>
          <Button onClick={handleInstall} size="sm" className="w-full">
            {installBtn}
          </Button>
        </div>
      </div>
    </div>
  );
};
