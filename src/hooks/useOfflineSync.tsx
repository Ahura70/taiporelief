import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useLanguage } from './useLanguage';

interface CachedData {
  resources: any[];
  news: any[];
  emergencyContacts: any[];
  lastSync: string;
}

const DB_NAME = 'taiporelief_offline';
const DB_VERSION = 1;
const STORE_NAME = 'cached_data';
const SYNC_INTERVAL = 5 * 60 * 1000; // 5 minutes

export const useOfflineSync = () => {
  const { currentLang } = useLanguage();
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState<Date | null>(null);
  const [cachedData, setCachedData] = useState<CachedData | null>(null);

  // Initialize IndexedDB
  const initDB = (): Promise<IDBDatabase> => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        }
      };
    });
  };

  // Save data to IndexedDB
  const saveToCache = async (data: CachedData) => {
    try {
      const db = await initDB();
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      
      await store.put({ id: currentLang, ...data });
      
      return new Promise<void>((resolve, reject) => {
        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error);
      });
    } catch (error) {
      console.error('Failed to save to cache:', error);
    }
  };

  // Load data from IndexedDB
  const loadFromCache = async (): Promise<CachedData | null> => {
    try {
      const db = await initDB();
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(currentLang);

      return new Promise((resolve, reject) => {
        request.onsuccess = () => {
          const result = request.result;
          if (result) {
            delete result.id;
            resolve(result as CachedData);
          } else {
            resolve(null);
          }
        };
        request.onerror = () => reject(request.error);
      });
    } catch (error) {
      console.error('Failed to load from cache:', error);
      return null;
    }
  };

  // Sync data from network
  const syncData = async (showToast = false) => {
    if (!isOnline) {
      if (showToast) {
        toast.warning('You are offline. Using cached data.');
      }
      return;
    }

    setIsSyncing(true);

    try {
      // Import resources and translations dynamically
      const { resources, translations } = await import('@/lib/translations');
      const currentResources = resources[currentLang];
      const t = translations[currentLang];

      const dataToCache: CachedData = {
        resources: currentResources,
        news: t.newsItems || [],
        emergencyContacts: [
          {
            name: t.philippinesEmergency,
            phone: '+852 6687 9711',
            type: 'emergency'
          },
          {
            name: t.indonesiaEmergency,
            phone: '+852 6235 4805',
            type: 'emergency'
          },
          {
            name: t.casualtyEnquiry,
            phone: '1878 999',
            type: 'casualty'
          },
          {
            name: t.mentalHealthSupport,
            phone: '18111',
            type: 'mental-health'
          }
        ],
        lastSync: new Date().toISOString()
      };

      await saveToCache(dataToCache);
      setCachedData(dataToCache);
      setLastSyncTime(new Date());

      if (showToast) {
        toast.success('Data synced successfully');
      }
    } catch (error) {
      console.error('Failed to sync data:', error);
      if (showToast) {
        toast.error('Failed to sync data');
      }
    } finally {
      setIsSyncing(false);
    }
  };

  // Monitor online/offline status
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      toast.success('Back online - syncing data...');
      syncData();
    };

    const handleOffline = () => {
      setIsOnline(false);
      toast.warning('You are offline. Using cached data.');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Initial load and periodic sync
  useEffect(() => {
    const loadData = async () => {
      const cached = await loadFromCache();
      if (cached) {
        setCachedData(cached);
        setLastSyncTime(new Date(cached.lastSync));
      }

      // Sync if online
      if (isOnline) {
        await syncData();
      }
    };

    loadData();

    // Set up periodic sync
    const syncInterval = setInterval(() => {
      if (isOnline) {
        syncData();
      }
    }, SYNC_INTERVAL);

    return () => clearInterval(syncInterval);
  }, [currentLang, isOnline]);

  // Manual sync trigger
  const triggerSync = () => syncData(true);

  // Get data from cache or fallback
  const getData = async () => {
    if (cachedData) {
      return cachedData;
    }
    return await loadFromCache();
  };

  return {
    isOnline,
    isSyncing,
    lastSyncTime,
    cachedData,
    triggerSync,
    getData
  };
};
