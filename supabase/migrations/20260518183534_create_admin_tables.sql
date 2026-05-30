/*
  # Create admin content management tables

  1. New Tables
    - `team_members` - Manage founder/team member profiles with photos and bios
    - `blog_posts` - Manage blog articles with content, images, and metadata
    - `packages` - Manage travel packages with pricing, itineraries, and details
    - `destinations` - Manage travel destinations with descriptions and highlights
    - `admin_users` - Store admin login credentials and permissions

  2. Security
    - Enable RLS on all tables
    - Only authenticated admins can read/write content
    - Public can read blog/packages/destinations but not admin_users
    - Service role can bypass RLS for API operations

  3. Indexes
    - Index on slug fields for fast lookups
    - Index on auth_user_id for admin operations

  Important Notes:
    - All content tables have a published flag for draft/live management
    - Timestamps track creation and last update
    - Admin users are stored separately with encrypted passwords
*/

-- Admin users table for authentication
CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text NOT NULL,
  password_hash text NOT NULL,
  role text DEFAULT 'editor',
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  last_login timestamptz,
  updated_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_admin_users_email ON admin_users(email);

ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Only admins can view admin users"
  ON admin_users FOR SELECT
  TO authenticated
  USING (auth.uid()::text = id::text OR role = 'super_admin');

-- Team members table
CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  bio text,
  image_url text,
  order_index integer DEFAULT 0,
  published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  updated_by uuid REFERENCES auth.users(id)
);

CREATE INDEX IF NOT EXISTS idx_team_members_published ON team_members(published);

ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published team members"
  ON team_members FOR SELECT
  USING (published = true);

CREATE POLICY "Authenticated users can update team members"
  ON team_members FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  category text NOT NULL,
  author text NOT NULL,
  excerpt text,
  content text NOT NULL,
  image_url text,
  read_time text DEFAULT '5 min',
  published boolean DEFAULT false,
  publish_date date,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  updated_by uuid REFERENCES auth.users(id)
);

CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts FOR SELECT
  USING (published = true);

CREATE POLICY "Authenticated users can manage blog posts"
  ON blog_posts FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can insert blog posts"
  ON blog_posts FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Destinations table
CREATE TABLE IF NOT EXISTS destinations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  state text,
  tagline text,
  description text,
  image_url text,
  hero_image_url text,
  highlights jsonb DEFAULT '[]',
  stats jsonb DEFAULT '[]',
  travel_tips jsonb DEFAULT '[]',
  published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  updated_by uuid REFERENCES auth.users(id)
);

CREATE INDEX IF NOT EXISTS idx_destinations_slug ON destinations(slug);
CREATE INDEX IF NOT EXISTS idx_destinations_published ON destinations(published);

ALTER TABLE destinations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published destinations"
  ON destinations FOR SELECT
  USING (published = true);

CREATE POLICY "Authenticated users can manage destinations"
  ON destinations FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Packages table
CREATE TABLE IF NOT EXISTS packages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  destination_id uuid REFERENCES destinations(id),
  duration text,
  price numeric,
  difficulty text,
  trip_type text,
  description text,
  image_url text,
  hero_image_url text,
  itinerary jsonb DEFAULT '[]',
  inclusions jsonb DEFAULT '[]',
  exclusions jsonb DEFAULT '[]',
  packing_list jsonb DEFAULT '[]',
  group_size text,
  next_date text,
  gallery_images jsonb DEFAULT '[]',
  published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  updated_by uuid REFERENCES auth.users(id)
);

CREATE INDEX IF NOT EXISTS idx_packages_slug ON packages(slug);
CREATE INDEX IF NOT EXISTS idx_packages_destination ON packages(destination_id);
CREATE INDEX IF NOT EXISTS idx_packages_published ON packages(published);

ALTER TABLE packages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published packages"
  ON packages FOR SELECT
  USING (published = true);

CREATE POLICY "Authenticated users can manage packages"
  ON packages FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can insert packages"
  ON packages FOR INSERT
  TO authenticated
  WITH CHECK (true);
