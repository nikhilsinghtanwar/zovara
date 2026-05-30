/*
  # Fix storage bucket policy for media

  1. Security Changes
    - Replace the broad "Public can view media files" SELECT policy
      with a scoped policy that only allows access to objects within
      the gallery/ prefix in the media bucket
    - This prevents clients from listing all files in the bucket
      while still allowing public read access to gallery images

  2. Storage
    - The media bucket remains public so image URLs work on the website
    - Public URL access does not require a SELECT policy; the policy
      only governs API listing/fetching operations
    - Scoped to gallery/ prefix to limit exposure

  Important Notes:
    1. Public bucket URLs still work without any SELECT policy
    2. The policy now restricts API-based listing to gallery/ paths only
    3. Authenticated admin uploads remain restricted to active admins
*/

-- Remove the overly broad public SELECT policy
DROP POLICY IF EXISTS "Public can view media files" ON storage.objects;

-- Add a scoped policy that only allows reading gallery objects
-- Uses string prefix matching instead of array subscript
CREATE POLICY "Public can view gallery objects"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'media' AND name LIKE 'gallery/%');

-- Tighten upload/update/delete policies to require active admin
DROP POLICY IF EXISTS "Authenticated users can upload media" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update media" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete media" ON storage.objects;

CREATE POLICY "Active admins can upload media"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'media' AND is_active_admin());

CREATE POLICY "Active admins can update media"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'media' AND is_active_admin())
  WITH CHECK (bucket_id = 'media' AND is_active_admin());

CREATE POLICY "Active admins can delete media"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'media' AND is_active_admin());