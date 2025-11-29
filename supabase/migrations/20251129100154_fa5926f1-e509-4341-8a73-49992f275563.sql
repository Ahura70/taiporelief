-- Fix search_path for housing occupancy timestamp function
CREATE OR REPLACE FUNCTION public.update_housing_occupancy_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.last_updated = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;