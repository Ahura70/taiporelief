import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface NewsUpdate {
  id: string;
  title_en: string;
  title_zh: string | null;
  title_tl: string | null;
  title_id: string | null;
  link: string;
  published_date: string;
  source: string;
}

export const useNewsUpdates = (language: 'zh' | 'en' | 'tl' | 'id') => {
  return useQuery({
    queryKey: ['news-updates', language],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('news_updates')
        .select('*')
        .eq('is_active', true)
        .order('published_date', { ascending: false })
        .limit(10);

      if (error) throw error;

      // Map to the correct language field
      return (data as NewsUpdate[]).map(item => ({
        text: getTitle(item, language),
        source: item.source,
        link: item.link
      }));
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

const getTitle = (item: NewsUpdate, language: 'zh' | 'en' | 'tl' | 'id'): string => {
  switch (language) {
    case 'zh':
      return item.title_zh || item.title_en;
    case 'tl':
      return item.title_tl || item.title_en;
    case 'id':
      return item.title_id || item.title_en;
    default:
      return item.title_en;
  }
};
