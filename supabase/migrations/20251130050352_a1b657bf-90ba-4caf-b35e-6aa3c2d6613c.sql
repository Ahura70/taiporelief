-- Create financial aid applications table
CREATE TABLE public.financial_aid_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Application type
  application_type TEXT NOT NULL CHECK (application_type IN ('emergency_cash', 'deceased_subsidy', 'living_allowance')),
  
  -- Applicant information
  applicant_name TEXT NOT NULL,
  applicant_hkid TEXT NOT NULL,
  applicant_phone TEXT NOT NULL,
  applicant_email TEXT NOT NULL,
  
  -- Addresses
  household_address TEXT,
  current_address TEXT,
  
  -- Household information
  household_size INTEGER,
  
  -- Deceased subsidy specific fields
  deceased_name TEXT,
  deceased_hkid TEXT,
  relationship_to_deceased TEXT,
  death_certificate_number TEXT,
  
  -- Bank information
  bank_account_number TEXT,
  
  -- Additional information
  additional_info TEXT,
  
  -- Status tracking
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'under_review', 'approved', 'rejected')),
  reviewed_at TIMESTAMP WITH TIME ZONE,
  reviewed_by TEXT
);

-- Enable Row Level Security
ALTER TABLE public.financial_aid_applications ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit applications
CREATE POLICY "Anyone can submit financial aid applications"
ON public.financial_aid_applications
FOR INSERT
WITH CHECK (true);

-- Only authenticated users can view applications
CREATE POLICY "Authenticated users can view applications"
ON public.financial_aid_applications
FOR SELECT
USING (auth.uid() IS NOT NULL);

-- Only authenticated users can update application status
CREATE POLICY "Authenticated users can update applications"
ON public.financial_aid_applications
FOR UPDATE
USING (auth.uid() IS NOT NULL);

-- Create updated_at trigger
CREATE TRIGGER update_financial_aid_applications_updated_at
BEFORE UPDATE ON public.financial_aid_applications
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for performance
CREATE INDEX idx_financial_aid_applications_type ON public.financial_aid_applications(application_type);
CREATE INDEX idx_financial_aid_applications_status ON public.financial_aid_applications(status);
CREATE INDEX idx_financial_aid_applications_created_at ON public.financial_aid_applications(created_at DESC);