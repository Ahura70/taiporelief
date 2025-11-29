import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface HousingHistoryRecord {
  id: string;
  location_name: string;
  total_units: number;
  occupied_units: number;
  available_units: number;
  occupancy_rate: number;
  recorded_at: string;
}

export const useHousingHistory = (locationName?: string, days: number = 7) => {
  const [history, setHistory] = useState<HousingHistoryRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      setLoading(true);
      
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - days);

      let query = supabase
        .from('housing_occupancy_history')
        .select('*')
        .gte('recorded_at', startDate.toISOString())
        .order('recorded_at', { ascending: true });

      if (locationName) {
        query = query.eq('location_name', locationName);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching housing history:', error);
        setLoading(false);
        return;
      }

      if (data) {
        setHistory(data);
      }
      setLoading(false);
    };

    fetchHistory();

    // Subscribe to real-time updates
    const channel = supabase
      .channel('housing-history-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'housing_occupancy_history',
          filter: locationName ? `location_name=eq.${locationName}` : undefined
        },
        (payload) => {
          const newRecord = payload.new as HousingHistoryRecord;
          setHistory(prev => [...prev, newRecord]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [locationName, days]);

  return { history, loading };
};
