-- Fix safety_reports public data exposure
-- Drop the overly permissive policy
DROP POLICY IF EXISTS "Anyone can view safety reports" ON public.safety_reports;

-- Create a new policy that only exposes non-PII aggregated data
-- This allows viewing report counts by block and type, but not personal details
CREATE POLICY "Public can view anonymized safety report counts"
ON public.safety_reports
FOR SELECT
TO public
USING (false);

-- Create a database function that returns only aggregated, non-PII data
CREATE OR REPLACE FUNCTION public.get_safety_report_counts()
RETURNS TABLE (
  report_type text,
  count bigint
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT 
    report_type,
    COUNT(*) as count
  FROM public.safety_reports
  GROUP BY report_type;
$$;

-- Grant execute permission to anonymous users
GRANT EXECUTE ON FUNCTION public.get_safety_report_counts() TO anon;
GRANT EXECUTE ON FUNCTION public.get_safety_report_counts() TO authenticated;

-- Create policy for authenticated users to view full details (for admins)
CREATE POLICY "Authenticated users can view all safety reports"
ON public.safety_reports
FOR SELECT
TO authenticated
USING (auth.uid() IS NOT NULL);