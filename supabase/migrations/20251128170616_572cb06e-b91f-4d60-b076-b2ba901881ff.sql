-- Create enum for alert types
CREATE TYPE alert_type AS ENUM ('donation', 'volunteer', 'alert');

-- Create donations tracking table
CREATE TABLE public.donations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  amount DECIMAL(12, 2) NOT NULL,
  currency VARCHAR(10) NOT NULL DEFAULT 'HKD',
  donor_name TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create volunteer registrations table
CREATE TABLE public.volunteer_registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  skills TEXT[],
  availability TEXT,
  preferred_areas TEXT[],
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create emergency alerts table
CREATE TABLE public.emergency_alerts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type alert_type NOT NULL,
  message TEXT NOT NULL,
  amount TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  priority INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.volunteer_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.emergency_alerts ENABLE ROW LEVEL SECURITY;

-- Donations policies - everyone can view and insert
CREATE POLICY "Anyone can view donations"
  ON public.donations
  FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert donations"
  ON public.donations
  FOR INSERT
  WITH CHECK (true);

-- Volunteer registrations policies - everyone can view and insert
CREATE POLICY "Anyone can view volunteer registrations"
  ON public.volunteer_registrations
  FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert volunteer registrations"
  ON public.volunteer_registrations
  FOR INSERT
  WITH CHECK (true);

-- Emergency alerts policies - everyone can view, only admins can modify
CREATE POLICY "Anyone can view emergency alerts"
  ON public.emergency_alerts
  FOR SELECT
  USING (is_active = true);

CREATE POLICY "Anyone can insert emergency alerts"
  ON public.emergency_alerts
  FOR INSERT
  WITH CHECK (true);

-- Enable realtime for all tables
ALTER PUBLICATION supabase_realtime ADD TABLE public.donations;
ALTER PUBLICATION supabase_realtime ADD TABLE public.volunteer_registrations;
ALTER PUBLICATION supabase_realtime ADD TABLE public.emergency_alerts;

-- Create indexes for better query performance
CREATE INDEX idx_donations_created_at ON public.donations(created_at DESC);
CREATE INDEX idx_volunteer_registrations_created_at ON public.volunteer_registrations(created_at DESC);
CREATE INDEX idx_emergency_alerts_created_at ON public.emergency_alerts(created_at DESC);
CREATE INDEX idx_emergency_alerts_active ON public.emergency_alerts(is_active) WHERE is_active = true;