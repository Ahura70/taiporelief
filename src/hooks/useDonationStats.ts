import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useDonationStats = () => {
  const [totalRaised, setTotalRaised] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDonationStats = async () => {
      try {
        const { data, error } = await supabase
          .from('donations')
          .select('amount');

        if (error) {
          console.error('Error fetching donations:', error);
          return;
        }

        const total = (data || []).reduce((sum, donation) => sum + Number(donation.amount), 0);
        setTotalRaised(total);
      } catch (error) {
        console.error('Error in fetchDonationStats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDonationStats();

    // Subscribe to real-time donation updates
    const channel = supabase
      .channel('donations-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'donations',
        },
        (payload) => {
          console.log('New donation received:', payload);
          const newDonation = payload.new;
          setTotalRaised((prev) => prev + Number(newDonation.amount));
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return { totalRaised, loading };
};
