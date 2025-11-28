import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface RealtimeUpdate {
  id: string;
  type: 'donation' | 'volunteer' | 'alert';
  message: string;
  timestamp: Date;
  amount?: string;
}

export const useRealtimeUpdates = () => {
  const [updates, setUpdates] = useState<RealtimeUpdate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial fetch
    const fetchInitialData = async () => {
      try {
        const { data: alerts, error } = await supabase
          .from('emergency_alerts')
          .select('*')
          .eq('is_active', true)
          .order('created_at', { ascending: false })
          .limit(10);

        if (error) {
          console.error('Error fetching alerts:', error);
          return;
        }

        const formattedUpdates: RealtimeUpdate[] = (alerts || []).map((alert) => ({
          id: alert.id,
          type: alert.type as 'donation' | 'volunteer' | 'alert',
          message: alert.message,
          amount: alert.amount || undefined,
          timestamp: new Date(alert.created_at),
        }));

        setUpdates(formattedUpdates);
      } catch (error) {
        console.error('Error in fetchInitialData:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();

    // Subscribe to real-time updates
    const channel = supabase
      .channel('emergency-alerts-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'emergency_alerts',
        },
        (payload) => {
          console.log('New alert received:', payload);
          const newAlert = payload.new;
          
          if (newAlert.is_active) {
            const newUpdate: RealtimeUpdate = {
              id: newAlert.id,
              type: newAlert.type as 'donation' | 'volunteer' | 'alert',
              message: newAlert.message,
              amount: newAlert.amount || undefined,
              timestamp: new Date(newAlert.created_at),
            };

            setUpdates((prev) => [newUpdate, ...prev.slice(0, 9)]);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return { updates, loading };
};
