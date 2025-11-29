import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface NewsItem {
  title: string;
  link: string;
  date: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Fetching news from taipofire.gov.hk...');
    
    // Fetch the website
    const response = await fetch('https://www.taipofire.gov.hk/eng/press.html');
    const html = await response.text();
    
    console.log('Parsing news items...');
    
    // Parse news items using regex
    const newsItems: NewsItem[] = [];
    const linkRegex = /<a href="(https:\/\/www\.info\.gov\.hk[^"]+)"[^>]*>([^<]+)<\/a>\s*\((\d{2}\.\d{2}\.\d{4})\)/g;
    
    let match;
    while ((match = linkRegex.exec(html)) !== null) {
      const [, link, title, dateStr] = match;
      // Convert date from DD.MM.YYYY to YYYY-MM-DD
      const [day, month, year] = dateStr.split('.');
      const date = `${year}-${month}-${day}`;
      
      newsItems.push({ title, link, date });
    }
    
    console.log(`Found ${newsItems.length} news items`);
    
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    // Insert or update news items
    let inserted = 0;
    let skipped = 0;
    
    for (const item of newsItems) {
      // Check if news item already exists
      const { data: existing } = await supabase
        .from('news_updates')
        .select('id')
        .eq('link', item.link)
        .single();
      
      if (!existing) {
        // Insert new news item
        const { error } = await supabase
          .from('news_updates')
          .insert({
            title_en: item.title,
            link: item.link,
            published_date: item.date,
            source: 'taipofire.gov.hk'
          });
        
        if (error) {
          console.error('Error inserting news item:', error);
        } else {
          inserted++;
          console.log(`Inserted: ${item.title}`);
        }
      } else {
        skipped++;
      }
    }
    
    console.log(`Processing complete. Inserted: ${inserted}, Skipped: ${skipped}`);
    
    return new Response(
      JSON.stringify({
        success: true,
        total: newsItems.length,
        inserted,
        skipped,
        items: newsItems
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
    
  } catch (error) {
    console.error('Error fetching news:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
