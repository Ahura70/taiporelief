import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface TimelineEvent {
  id: string;
  event_type: 'casualty' | 'relief' | 'milestone' | 'rescue' | 'donation';
  title_zh: string;
  title_en: string;
  title_tl: string;
  title_id: string;
  description_zh?: string;
  description_en?: string;
  description_tl?: string;
  description_id?: string;
  event_time: string;
  priority: number;
  is_critical: boolean;
  created_at: string;
}

export const useTimeline = () => {
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from('timeline_events')
        .select('*')
        .order('event_time', { ascending: false });

      if (error) {
        console.error('Error fetching timeline events:', error);
        return;
      }

      setEvents((data as TimelineEvent[]) || []);
    } catch (error) {
      console.error('Error fetching timeline events:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchEvents();

    // Subscribe to real-time updates
    const channel = supabase
      .channel('timeline-events-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'timeline_events'
        },
        (payload) => {
          console.log('Timeline event update:', payload);
          // Refetch events when any change occurs
          fetchEvents();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return { events, isLoading };
};
