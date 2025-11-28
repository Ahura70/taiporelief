import { useState, useEffect } from 'react';
import { getConnectionSpeed, prefersSaveData } from '@/lib/imageOptimization';

interface ImageOptimizationConfig {
  shouldLoadImages: boolean;
  connectionSpeed: 'slow' | 'medium' | 'fast';
  saveData: boolean;
}

export const useImageOptimization = (): ImageOptimizationConfig => {
  const [config, setConfig] = useState<ImageOptimizationConfig>({
    shouldLoadImages: true,
    connectionSpeed: 'medium',
    saveData: false,
  });

  useEffect(() => {
    const saveData = prefersSaveData();
    const speed = getConnectionSpeed();

    setConfig({
      shouldLoadImages: !saveData && speed !== 'slow',
      connectionSpeed: speed,
      saveData,
    });

    // Listen for connection changes
    // @ts-ignore
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    
    if (connection) {
      const handleChange = () => {
        const newSpeed = getConnectionSpeed();
        const newSaveData = prefersSaveData();
        
        setConfig({
          shouldLoadImages: !newSaveData && newSpeed !== 'slow',
          connectionSpeed: newSpeed,
          saveData: newSaveData,
        });
      };

      connection.addEventListener('change', handleChange);
      
      return () => {
        connection.removeEventListener('change', handleChange);
      };
    }
  }, []);

  return config;
};
