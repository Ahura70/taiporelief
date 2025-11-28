-- Create feedback table for resource updates and suggestions
CREATE TABLE public.feedback (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  feedback_type TEXT NOT NULL CHECK (feedback_type IN ('resource_update', 'new_resource', 'general')),
  resource_name TEXT,
  category TEXT,
  contact_info TEXT,
  description TEXT NOT NULL,
  submitter_name TEXT,
  submitter_email TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;

-- Create policy: Anyone can insert feedback
CREATE POLICY "Anyone can submit feedback"
ON public.feedback
FOR INSERT
TO public
WITH CHECK (true);

-- Create index for faster queries by type
CREATE INDEX idx_feedback_type ON public.feedback(feedback_type);
CREATE INDEX idx_feedback_created_at ON public.feedback(created_at DESC);