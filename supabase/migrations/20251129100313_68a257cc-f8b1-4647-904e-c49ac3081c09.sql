-- Create housing_occupancy_history table for tracking occupancy over time
CREATE TABLE public.housing_occupancy_history (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  location_name TEXT NOT NULL,
  total_units INTEGER NOT NULL,
  occupied_units INTEGER NOT NULL,
  available_units INTEGER NOT NULL,
  occupancy_rate NUMERIC(5,2) NOT NULL,
  recorded_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index for faster queries on location and time
CREATE INDEX idx_housing_history_location_time ON public.housing_occupancy_history(location_name, recorded_at DESC);

-- Enable Row Level Security
ALTER TABLE public.housing_occupancy_history ENABLE ROW LEVEL SECURITY;

-- Allow everyone to view occupancy history
CREATE POLICY "Anyone can view housing occupancy history"
ON public.housing_occupancy_history
FOR SELECT
USING (true);

-- Only authenticated users can insert history records
CREATE POLICY "Authenticated users can insert occupancy history"
ON public.housing_occupancy_history
FOR INSERT
WITH CHECK (auth.uid() IS NOT NULL);

-- Enable realtime for housing_occupancy_history table
ALTER PUBLICATION supabase_realtime ADD TABLE public.housing_occupancy_history;

-- Enable pg_cron extension for scheduled jobs
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Enable pg_net extension for HTTP requests
CREATE EXTENSION IF NOT EXISTS pg_net;