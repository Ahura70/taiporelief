-- Create update timestamp function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create news_updates table to store automated news from taipofire.gov.hk
CREATE TABLE IF NOT EXISTS public.news_updates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title_en TEXT NOT NULL,
  title_zh TEXT,
  title_tl TEXT,
  title_id TEXT,
  link TEXT NOT NULL,
  published_date DATE NOT NULL,
  source TEXT DEFAULT 'taipofire.gov.hk',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.news_updates ENABLE ROW LEVEL SECURITY;

-- Allow public read access to active news
CREATE POLICY "Anyone can view active news updates"
ON public.news_updates
FOR SELECT
USING (is_active = true);

-- Only authenticated users can manage news (for future admin functionality)
CREATE POLICY "Authenticated users can insert news"
ON public.news_updates
FOR INSERT
WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update news"
ON public.news_updates
FOR UPDATE
USING (auth.uid() IS NOT NULL);

-- Create index for faster queries
CREATE INDEX idx_news_updates_published_date ON public.news_updates(published_date DESC);
CREATE INDEX idx_news_updates_is_active ON public.news_updates(is_active);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_news_updates_updated_at
BEFORE UPDATE ON public.news_updates
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();