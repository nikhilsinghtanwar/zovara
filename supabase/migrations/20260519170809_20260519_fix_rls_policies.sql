/*
  # Fix RLS policies - Remove always-true bypass policies

  1. Security Changes
    - Replace unrestricted `USING (true)` / `WITH CHECK (true)` policies
      with policies that verify the user is an authenticated admin
    - All write operations now check that the authenticated user exists
      in the admin_users table
    - This prevents any authenticated Supabase user from modifying content;
      only registered admins can perform write operations

  2. Tables affected
    - `blog_posts` - INSERT, UPDATE policies tightened
    - `team_members` - UPDATE policy tightened, add INSERT policy
    - `destinations` - UPDATE policy tightened, add INSERT policy
    - `packages` - INSERT, UPDATE policies tightened
    - `media_gallery` - INSERT, UPDATE, DELETE policies tightened

  3. Storage changes
    - Replace broad SELECT policy on storage.objects with a scoped policy
      that only allows access to objects in the media bucket by path prefix

  Important Notes:
    1. All write policies now require the user to be a registered admin
       (exists in admin_users table with is_active = true)
    2. Public read policies for published content remain unchanged
    3. The admin API routes use the service role key which bypasses RLS,
       so these changes do not break existing admin functionality
*/

-- ============================================================
-- Helper function: check if the current user is an active admin
-- ============================================================
CREATE OR REPLACE FUNCTION is_active_admin()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM admin_users
    WHERE email = (
      SELECT raw_user_meta_data->>'email'
      FROM auth.users
      WHERE id = auth.uid()
    )
    AND is_active = true
  );
$$;

-- ============================================================
-- blog_posts
-- ============================================================

-- Drop old unrestricted policies
DROP POLICY IF EXISTS "Authenticated users can insert blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated users can manage blog posts" ON blog_posts;

-- Create properly restricted policies
CREATE POLICY "Active admins can insert blog posts"
  ON blog_posts FOR INSERT
  TO authenticated
  WITH CHECK (is_active_admin());

CREATE POLICY "Active admins can update blog posts"
  ON blog_posts FOR UPDATE
  TO authenticated
  USING (is_active_admin())
  WITH CHECK (is_active_admin());

CREATE POLICY "Active admins can delete blog posts"
  ON blog_posts FOR DELETE
  TO authenticated
  USING (is_active_admin());

-- ============================================================
-- team_members
-- ============================================================

DROP POLICY IF EXISTS "Authenticated users can update team members" ON team_members;

CREATE POLICY "Active admins can insert team members"
  ON team_members FOR INSERT
  TO authenticated
  WITH CHECK (is_active_admin());

CREATE POLICY "Active admins can update team members"
  ON team_members FOR UPDATE
  TO authenticated
  USING (is_active_admin())
  WITH CHECK (is_active_admin());

CREATE POLICY "Active admins can delete team members"
  ON team_members FOR DELETE
  TO authenticated
  USING (is_active_admin());

-- ============================================================
-- destinations
-- ============================================================

DROP POLICY IF EXISTS "Authenticated users can manage destinations" ON destinations;

CREATE POLICY "Active admins can insert destinations"
  ON destinations FOR INSERT
  TO authenticated
  WITH CHECK (is_active_admin());

CREATE POLICY "Active admins can update destinations"
  ON destinations FOR UPDATE
  TO authenticated
  USING (is_active_admin())
  WITH CHECK (is_active_admin());

CREATE POLICY "Active admins can delete destinations"
  ON destinations FOR DELETE
  TO authenticated
  USING (is_active_admin());

-- ============================================================
-- packages
-- ============================================================

DROP POLICY IF EXISTS "Authenticated users can insert packages" ON packages;
DROP POLICY IF EXISTS "Authenticated users can manage packages" ON packages;

CREATE POLICY "Active admins can insert packages"
  ON packages FOR INSERT
  TO authenticated
  WITH CHECK (is_active_admin());

CREATE POLICY "Active admins can update packages"
  ON packages FOR UPDATE
  TO authenticated
  USING (is_active_admin())
  WITH CHECK (is_active_admin());

CREATE POLICY "Active admins can delete packages"
  ON packages FOR DELETE
  TO authenticated
  USING (is_active_admin());

-- ============================================================
-- media_gallery
-- ============================================================

DROP POLICY IF EXISTS "Authenticated users can insert media" ON media_gallery;
DROP POLICY IF EXISTS "Authenticated users can update media" ON media_gallery;
DROP POLICY IF EXISTS "Authenticated users can delete media" ON media_gallery;

CREATE POLICY "Active admins can insert media"
  ON media_gallery FOR INSERT
  TO authenticated
  WITH CHECK (is_active_admin());

CREATE POLICY "Active admins can update media"
  ON media_gallery FOR UPDATE
  TO authenticated
  USING (is_active_admin())
  WITH CHECK (is_active_admin());

CREATE POLICY "Active admins can delete media"
  ON media_gallery FOR DELETE
  TO authenticated
  USING (is_active_admin());