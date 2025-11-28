import { useEffect, useState } from 'react';
import { useImageOptimization } from '@/hooks/useImageOptimization';
import { Wifi, WifiOff, Signal } from 'lucide-react';

export const ConnectionStatus = () => {
  const { connectionSpeed, saveData } = useImageOptimization();
  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
    // Show status if connection is slow or save data is enabled
    if (connectionSpeed === 'slow' || saveData) {
      setShowStatus(true);
      // Auto-hide after 5 seconds
      const timer = setTimeout(() => setShowStatus(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [connectionSpeed, saveData]);

  if (!showStatus) return null;

  const getStatusMessage = () => {
    if (saveData) return 'Data Saver Mode: Images optimized';
    if (connectionSpeed === 'slow') return 'Slow Connection: Loading optimized content';
    if (connectionSpeed === 'medium') return 'Moderate Connection: Images loading';
    return 'Fast Connection';
  };

  const getIcon = () => {
    if (saveData || connectionSpeed === 'slow') return <WifiOff className="w-4 h-4" />;
    return <Signal className="w-4 h-4" />;
  };

  const getColor = () => {
    if (saveData || connectionSpeed === 'slow') return 'bg-warning/20 border-warning/30 text-warning-foreground';
    if (connectionSpeed === 'medium') return 'bg-muted border-border text-muted-foreground';
    return 'bg-success/20 border-success/30 text-success-foreground';
  };

  return (
    <div
      className={`fixed bottom-20 right-5 z-40 ${getColor()} border rounded-lg px-4 py-2 shadow-lg text-xs flex items-center gap-2 animate-in slide-in-from-bottom duration-300`}
      role="status"
      aria-live="polite"
    >
      {getIcon()}
      <span>{getStatusMessage()}</span>
    </div>
  );
};
