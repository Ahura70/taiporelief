import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    // Parse query parameters
    const url = new URL(req.url);
    const lang = url.searchParams.get('lang') || 'en';
    const stats = url.searchParams.get('stats') || 'default';

    console.log('Generating OG image for:', { lang, stats });

    // Create prompt based on language
    const prompts: Record<string, string> = {
      'en': `Create a professional emergency relief social media banner image (1200x630px) with:
- Bold text "TAI PO FIRE RELIEF" at the top in red and white
- "24/7 MULTILINGUAL SUPPORT HUB" subtitle
- Emergency phone icon with "1878 999"
- Icons for: Financial Aid, Housing, Medical Support, Counseling
- Text "Works Offline • 4 Languages"
- Hong Kong skyline silhouette at bottom
- Clean, modern design with red, white, and gray color scheme
- Professional emergency services aesthetic
Ultra high resolution, typography-focused, emergency services design`,
      'zh': `Create a professional emergency relief social media banner (1200x630px) with:
- Bold bilingual text "大埔火災援助 TAI PO FIRE RELIEF" 
- Subtitle "24/7 多語言支援中心"
- Emergency hotline "1878 999" with phone icon
- Service icons: 財政援助, 臨時住房, 醫療支援, 心理輔導
- "離線可用 • 4種語言" text
- Hong Kong cityscape silhouette
- Red, white, gray professional color palette
Ultra high resolution, clean modern emergency design`,
      'tl': `Create a professional emergency relief banner (1200x630px) with:
- "TAI PO FIRE RELIEF" bold title
- "24/7 MULTILINGUAL SUPPORT" subtitle
- Emergency hotline "1878 999"
- Service icons: Tulong Pinansyal, Tirahan, Medikal, Counseling
- "Gumagana Offline • 4 na Wika"
- Hong Kong skyline background
- Red, white, gray emergency services design
Ultra high resolution, professional layout`,
      'id': `Create a professional emergency relief banner (1200x630px) with:
- "BANTUAN KEBAKARAN TAI PO" bold title
- "DUKUNGAN MULTIBAHASA 24/7" subtitle  
- Emergency number "1878 999"
- Service icons: Bantuan Dana, Perumahan, Medis, Konseling
- "Bekerja Offline • 4 Bahasa"
- Hong Kong cityscape silhouette
- Red, white, gray professional emergency design
Ultra high resolution, clean modern layout`
    };

    const prompt = prompts[lang] || prompts['en'];

    // Call Lovable AI image generation API
    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-3-pro-image-preview',
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        modalities: ['image', 'text']
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI Gateway error:', response.status, errorText);
      
      // Return a fallback response
      return new Response(
        JSON.stringify({ 
          error: 'Image generation temporarily unavailable',
          fallback: true 
        }), 
        {
          status: 503,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const data = await response.json();
    const imageUrl = data.choices?.[0]?.message?.images?.[0]?.image_url?.url;

    if (!imageUrl) {
      console.error('No image URL in response:', data);
      return new Response(
        JSON.stringify({ error: 'Failed to generate image' }), 
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    console.log('Image generated successfully');

    // Return the base64 image data directly
    // Extract the base64 data from data:image/png;base64,...
    const base64Data = imageUrl.split(',')[1];
    const imageBuffer = Uint8Array.from(atob(base64Data), c => c.charCodeAt(0));

    return new Response(imageBuffer, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
      },
    });

  } catch (error) {
    console.error('Error generating OG image:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error',
        details: 'Failed to generate Open Graph image'
      }), 
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
