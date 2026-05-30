/*
  # Create media gallery table for admin photo management

  1. New Tables
    - `media_gallery` - Store uploaded photos with metadata
      - `id` (uuid, primary key)
      - `url` (text, required) - Image URL
      - `title` (text) - Optional title/caption
      - `alt_text` (text) - Alt text for accessibility
      - `category` (text) - Gallery category (Himalaya, Rajasthan, Northeast, etc.)
      - `sort_order` (integer) - Display order
      - `published` (boolean) - Whether visible on public site
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `media_gallery` table
    - Anyone can view published media
    - Only authenticated users can insert/update/delete

  3. Indexes
    - Index on category for filtered queries
    - Index on published for public queries
    - Index on sort_order for ordered display

  Important Notes:
    1. Images are stored via URL (supports both uploaded and external URLs)
    2. Category matches the gallery page filter tabs
    3. Published flag controls visibility on the public website
    4. Sort order allows manual arrangement of gallery items
*/

CREATE TABLE IF NOT EXISTS media_gallery (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  url text NOT NULL,
  title text DEFAULT '',
  alt_text text DEFAULT '',
  category text DEFAULT 'Himalaya',
  sort_order integer DEFAULT 0,
  published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_media_gallery_category ON media_gallery(category);
CREATE INDEX IF NOT EXISTS idx_media_gallery_published ON media_gallery(published);
CREATE INDEX IF NOT EXISTS idx_media_gallery_sort ON media_gallery(sort_order);

ALTER TABLE media_gallery ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published media"
  ON media_gallery FOR SELECT
  USING (published = true);

CREATE POLICY "Authenticated users can insert media"
  ON media_gallery FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update media"
  ON media_gallery FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete media"
  ON media_gallery FOR DELETE
  TO authenticated
  USING (true);