-- Fix Security Issues: Restrict Access to Sensitive Data

-- 1. Fix volunteer_registrations: Remove public SELECT access to protect PII
DROP POLICY IF EXISTS "Anyone can view volunteer registrations" ON public.volunteer_registrations;

-- Keep INSERT public so people can register as volunteers
-- (The INSERT policy "Anyone can insert volunteer registrations" remains)

-- 2. Fix donations: Only show anonymous donations to public
DROP POLICY IF EXISTS "Anyone can view donations" ON public.donations;

-- Public can only see anonymous donations
CREATE POLICY "Public can view anonymous donations only"
ON public.donations
FOR SELECT
TO anon
USING (donor_name IS NULL OR donor_name = 'Anonymous');

-- Authenticated users can see all donations (for future admin dashboard)
CREATE POLICY "Authenticated users can view all donations"
ON public.donations
FOR SELECT
TO authenticated
USING (true);

-- 3. Fix emergency_alerts: Prevent unauthorized alert creation
DROP POLICY IF EXISTS "Anyone can insert emergency alerts" ON public.emergency_alerts;

-- Only authenticated users can create alerts (requires future admin system)
CREATE POLICY "Only authenticated users can create alerts"
ON public.emergency_alerts
FOR INSERT
TO authenticated
WITH CHECK (true);

-- Keep SELECT policy as is (public can view active alerts only)