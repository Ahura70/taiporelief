-- Create housing_occupancy table for tracking real-time occupancy status
CREATE TABLE public.housing_occupancy (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  location_name TEXT NOT NULL UNIQUE,
  total_units INTEGER NOT NULL DEFAULT 0,
  occupied_units INTEGER NOT NULL DEFAULT 0,
  last_updated TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.housing_occupancy ENABLE ROW LEVEL SECURITY;

-- Allow everyone to view occupancy status
CREATE POLICY "Anyone can view housing occupancy"
ON public.housing_occupancy
FOR SELECT
USING (true);

-- Only authenticated users can update occupancy
CREATE POLICY "Authenticated users can update occupancy"
ON public.housing_occupancy
FOR UPDATE
USING (auth.uid() IS NOT NULL);

-- Only authenticated users can insert new locations
CREATE POLICY "Authenticated users can insert occupancy"
ON public.housing_occupancy
FOR INSERT
WITH CHECK (auth.uid() IS NOT NULL);

-- Create function to update last_updated timestamp
CREATE OR REPLACE FUNCTION public.update_housing_occupancy_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.last_updated = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_housing_occupancy_timestamp
BEFORE UPDATE ON public.housing_occupancy
FOR EACH ROW
EXECUTE FUNCTION public.update_housing_occupancy_timestamp();

-- Add constraint to ensure occupied_units doesn't exceed total_units
ALTER TABLE public.housing_occupancy
ADD CONSTRAINT occupancy_valid_range CHECK (occupied_units >= 0 AND occupied_units <= total_units);

-- Enable realtime for housing_occupancy table
ALTER PUBLICATION supabase_realtime ADD TABLE public.housing_occupancy;

-- Insert initial data for the three housing locations
INSERT INTO public.housing_occupancy (location_name, total_units, occupied_units)
VALUES 
  ('Lok Sin Village', 100, 45),
  ('Good House', 75, 38),
  ('Trackside Villas', 120, 89);