import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface SafetyReportCounts {
  safe: number;
  missing: number;
  lastUpdated: Date;
}

export const useSafetyReports = () => {
  const [counts, setCounts] = useState<SafetyReportCounts>({
    safe: 0,
    missing: 0,
    lastUpdated: new Date()
  });
  const [isLoading, setIsLoading] = useState(true);

  const fetchCounts = async () => {
    try {
      const { data, error } = await supabase
        .rpc('get_safety_report_counts');

      if (error) {
        console.error('Error fetching safety reports:', error);
        return;
      }

      const safeCounts = data?.find(r => r.report_type === 'safe')?.count || 0;
      const missingCounts = data?.find(r => r.report_type === 'missing')?.count || 0;

      setCounts({
        safe: Number(safeCounts),
        missing: Number(missingCounts),
        lastUpdated: new Date()
      });
    } catch (error) {
      console.error('Error fetching safety reports:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchCounts();

    // Subscribe to real-time updates
    const channel = supabase
      .channel('safety-reports-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'safety_reports'
        },
        (payload) => {
          console.log('Safety report update:', payload);
          // Refetch counts when any change occurs
          fetchCounts();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return { counts, isLoading };
};
