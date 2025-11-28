import { useState, useEffect } from 'react';
import { Resource } from '@/lib/translations';

interface ResourceAnalytics {
  [resourceTitle: string]: number;
}

export const useAnalytics = () => {
  const [analytics, setAnalytics] = useState<ResourceAnalytics>({});

  useEffect(() => {
    const stored = localStorage.getItem('resource_analytics');
    if (stored) {
      try {
        setAnalytics(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse analytics:', e);
      }
    }
  }, []);

  const trackResourceView = (resource: Resource) => {
    const newAnalytics = {
      ...analytics,
      [resource.title]: (analytics[resource.title] || 0) + 1
    };
    setAnalytics(newAnalytics);
    localStorage.setItem('resource_analytics', JSON.stringify(newAnalytics));
  };

  const getMostAccessed = (resources: Resource[], limit: number = 3): Resource[] => {
    return resources
      .map(resource => ({
        resource,
        count: analytics[resource.title] || 0
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, limit)
      .filter(item => item.count > 0)
      .map(item => item.resource);
  };

  const getAccessCount = (resourceTitle: string): number => {
    return analytics[resourceTitle] || 0;
  };

  return { trackResourceView, getMostAccessed, getAccessCount };
};
