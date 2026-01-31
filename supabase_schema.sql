-- SUPABASE SCHEMA FOR MINDMESH WORKHUB
-- Copy and paste this into the Supabase SQL Editor

-- 1. Create Consultations Table
CREATE TABLE IF NOT EXISTS public.consultations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT now(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    phone TEXT,
    project_type TEXT NOT NULL,
    description TEXT NOT NULL,
    budget TEXT NOT NULL,
    timeline TEXT NOT NULL,
    priority TEXT NOT NULL DEFAULT 'medium',
    features TEXT[] DEFAULT '{}',
    has_existing_system BOOLEAN DEFAULT false,
    team_size TEXT,
    preferred_contact TEXT DEFAULT 'email',
    min_estimate INTEGER,
    max_estimate INTEGER,
    complexity TEXT,
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'reviewed', 'contacted', 'converting', 'closed'))
);

-- 2. Create Newsletter Subscriptions Table
CREATE TABLE IF NOT EXISTS public.newsletter_subs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT now(),
    email TEXT UNIQUE NOT NULL,
    source TEXT DEFAULT 'homepage'
);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.consultations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subs ENABLE ROW LEVEL SECURITY;

-- 4. Set RLS Policies for Consultations
-- Allow anyone to submit a lead (Anons can insert)
CREATE POLICY "Public can insert consultations" 
ON public.consultations FOR INSERT 
WITH CHECK (true);

-- Only authenticated users (Admins) can view/manage leads
CREATE POLICY "Admins can view consultations" 
ON public.consultations FOR SELECT 
USING (auth.role() = 'authenticated');

CREATE POLICY "Admins can update consultations" 
ON public.consultations FOR UPDATE 
USING (auth.role() = 'authenticated');

-- 5. Set RLS Policies for Newsletter Subscriptions
CREATE POLICY "Public can subscribe to newsletter" 
ON public.newsletter_subs FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admins can view newsletter subs" 
ON public.newsletter_subs FOR SELECT 
USING (auth.role() = 'authenticated');

-- 6. Indices for better performance
CREATE INDEX IF NOT EXISTS idx_consultations_status ON public.consultations(status);
CREATE INDEX IF NOT EXISTS idx_consultations_email ON public.consultations(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON public.newsletter_subs(email);

-- 7. Grant access for API (service_role and anon)
GRANT ALL ON TABLE public.consultations TO postgres, service_role;
GRANT INSERT ON TABLE public.consultations TO anon;
GRANT SELECT ON TABLE public.consultations TO authenticated;

GRANT ALL ON TABLE public.newsletter_subs TO postgres, service_role;
GRANT INSERT ON TABLE public.newsletter_subs TO anon;
GRANT SELECT ON TABLE public.newsletter_subs TO authenticated;
