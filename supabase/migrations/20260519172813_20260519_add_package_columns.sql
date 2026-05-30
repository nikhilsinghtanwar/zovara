/*
  # Add missing columns to packages table for full content management

  1. Schema Changes
    - Add `description` as text (currently missing - the existing column is text but we need to ensure it stores multi-paragraph content)
    - Add `exclusions` as jsonb (already exists)
    - Add `packing_list` as jsonb (already exists)
    - Add `gallery_images` as jsonb (already exists)

  2. The packages table already has most columns needed.
    This migration ensures the description column can store
    rich multi-paragraph text content.

  Important Notes:
    1. The description column already exists as text type
    2. We are adding a `short_description` column for card previews
    3. We add `video_url` for premium itinerary visuals
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'packages' AND column_name = 'short_description'
  ) THEN
    ALTER TABLE packages ADD COLUMN short_description text DEFAULT '';
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'packages' AND column_name = 'video_url'
  ) THEN
    ALTER TABLE packages ADD COLUMN video_url text;
  END IF;
END $$;