import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface HousingOccupancy {
  id: string;
  location_name: string;
  total_units: number;
  occupied_units: number;
  last_updated: string;
}

export const useHousingOccupancy = () => {
  const [occupancy, setOccupancy] = useState<Record<string, HousingOccupancy>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOccupancy = async () => {
      const { data, error } = await supabase
        .from('housing_occupancy')
        .select('*');

      if (error) {
        console.error('Error fetching housing occupancy:', error);
        setLoading(false);
        return;
      }

      if (data) {
        const occupancyMap = data.reduce((acc, item) => {
          acc[item.location_name] = item;
          return acc;
        }, {} as Record<string, HousingOccupancy>);
        setOccupancy(occupancyMap);
      }
      setLoading(false);
    };

    fetchOccupancy();

    // Subscribe to real-time updates
    const channel = supabase
      .channel('housing-occupancy-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'housing_occupancy'
        },
        (payload) => {
          if (payload.eventType === 'INSERT' || payload.eventType === 'UPDATE') {
            const newData = payload.new as HousingOccupancy;
            setOccupancy(prev => ({
              ...prev,
              [newData.location_name]: newData
            }));
          } else if (payload.eventType === 'DELETE') {
            const oldData = payload.old as HousingOccupancy;
            setOccupancy(prev => {
              const { [oldData.location_name]: removed, ...rest } = prev;
              return rest;
            });
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const getOccupancy = (locationName: string) => {
    return occupancy[locationName];
  };

  const getAvailableUnits = (locationName: string) => {
    const data = occupancy[locationName];
    if (!data) return null;
    return data.total_units - data.occupied_units;
  };

  return { occupancy, loading, getOccupancy, getAvailableUnits };
};
