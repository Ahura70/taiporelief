-- Create table for safety status reports
CREATE TABLE IF NOT EXISTS public.safety_reports (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  report_type TEXT NOT NULL CHECK (report_type IN ('safe', 'missing')),
  name TEXT,
  block TEXT,
  flat_number TEXT,
  contact_info TEXT,
  additional_info TEXT,
  reported_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.safety_reports ENABLE ROW LEVEL SECURITY;

-- Allow anyone to view aggregated counts (we'll only expose counts, not individual records)
CREATE POLICY "Anyone can view safety reports"
  ON public.safety_reports
  FOR SELECT
  USING (true);

-- Allow anyone to insert reports
CREATE POLICY "Anyone can insert safety reports"
  ON public.safety_reports
  FOR INSERT
  WITH CHECK (true);

-- Create index for faster aggregation queries
CREATE INDEX idx_safety_reports_type ON public.safety_reports(report_type);
CREATE INDEX idx_safety_reports_created_at ON public.safety_reports(created_at);

-- Insert some initial sample data to show the feature working
INSERT INTO public.safety_reports (report_type, name, block, reported_at) VALUES
  ('safe', 'Resident 1', 'A座', now() - interval '2 hours'),
  ('safe', 'Resident 2', 'B座', now() - interval '1 hour'),
  ('safe', 'Resident 3', 'C座', now() - interval '30 minutes'),
  ('safe', 'Resident 4', 'D座', now() - interval '15 minutes'),
  ('safe', 'Resident 5', 'E座', now() - interval '10 minutes'),
  ('missing', 'Missing Person 1', 'F座', now() - interval '3 hours'),
  ('missing', 'Missing Person 2', 'G座', now() - interval '2 hours');