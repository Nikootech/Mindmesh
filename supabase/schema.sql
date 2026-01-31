-- Create a table for contact form submissions
create table public.leads (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  company text,
  phone text,
  project_type text,
  description text,
  status text default 'new' check (status in ('new', 'contacted', 'qualified', 'converted', 'closed'))
);

-- Create a table for newsletter subscribers
create table public.newsletter_subscribers (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  email text not null unique,
  status text default 'active' check (status in ('active', 'unsubscribed'))
);

-- Enable Row Level Security (RLS)
alter table public.leads enable row level security;
alter table public.newsletter_subscribers enable row level security;

-- Create policies to allow public inserts (for the contact form)
create policy "Allow public inserts to leads"
  on public.leads
  for insert
  to public
  with check (true);

create policy "Allow public inserts to newsletter_subscribers"
  on public.newsletter_subscribers
  for insert
  to public
  with check (true);

-- Create policies to restrict read access to authenticated users only (admins)
create policy "Allow authenticated users to view leads"
  on public.leads
  for select
  to authenticated
  using (true);

create policy "Allow authenticated users to view newsletter_subscribers"
  on public.newsletter_subscribers
  for select
  to authenticated
  using (true);
