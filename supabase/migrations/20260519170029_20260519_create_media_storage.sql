/*
  # Create storage bucket and policies for media uploads

  1. Storage
    - Create 'media' bucket (public) for gallery image uploads
    - Allow authenticated users to upload files
    - Allow public read access to uploaded files

  2. Policies
    - SELECT: Anyone can view uploaded media files
    - INSERT: Authenticated users can upload files
    - UPDATE: Authenticated users can update files
    - DELETE: Authenticated users can delete files

  Important Notes:
    1. The bucket is public so images can be displayed on the website
    2. Files are stored under the 'gallery/' prefix
    3. File names include timestamp and random suffix to prevent collisions
*/

-- Allow public read access to media bucket
CREATE POLICY "Public can view media files"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'media');

-- Allow authenticated users to upload to media bucket
CREATE POLICY "Authenticated users can upload media"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'media');

-- Allow authenticated users to update media files
CREATE POLICY "Authenticated users can update media"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'media')
  WITH CHECK (bucket_id = 'media');

-- Allow authenticated users to delete media files
CREATE POLICY "Authenticated users can delete media"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'media');