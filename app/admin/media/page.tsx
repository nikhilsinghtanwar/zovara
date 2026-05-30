'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  Upload,
  Link as LinkIcon,
  Trash2,
  Eye,
  EyeOff,
  Loader2,
  Image as ImageIcon,
  X,
  Plus,
  GripVertical,
  Check,
} from 'lucide-react';

interface MediaItem {
  id: string;
  url: string;
  title: string;
  alt_text: string;
  category: string;
  sort_order: number;
  published: boolean;
  created_at: string;
  updated_at: string;
}

const categories = [
  'Himalaya',
  'Rajasthan',
  'Northeast',
  'Sikkim',
  'Ladakh',
  'People',
  'Wildlife',
];

export default function MediaPage() {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploadMode, setUploadMode] = useState<'url' | 'file'>('url');
  const [urlInput, setUrlInput] = useState('');
  const [titleInput, setTitleInput] = useState('');
  const [altInput, setAltInput] = useState('');
  const [categoryInput, setCategoryInput] = useState('Himalaya');
  const [submitting, setSubmitting] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchMedia = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/media', {
        headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` },
      });
      if (res.ok) {
        const data = await res.json();
        setItems(data);
      }
    } catch (err) {
      console.error('Error fetching media:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMedia();
  }, [fetchMedia]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput && uploadMode === 'url') return;

    setSubmitting(true);
    try {
      const res = await fetch('/api/admin/media', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
        },
        body: JSON.stringify({
          url: urlInput,
          title: titleInput,
          alt_text: altInput,
          category: categoryInput,
          published: true,
          sort_order: items.length,
        }),
      });

      if (res.ok) {
        const newItem = await res.json();
        setItems((prev) => [newItem, ...prev]);
        setUrlInput('');
        setTitleInput('');
        setAltInput('');
        setCategoryInput('Himalaya');
      }
    } catch (err) {
      console.error('Error adding media:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/admin/media/upload', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
        },
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        setUrlInput(data.url);
        if (!titleInput && file.name) {
          setTitleInput(file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '));
        }
      }
    } catch (err) {
      console.error('Error uploading file:', err);
    } finally {
      setSubmitting(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this photo? It will also be removed from the public website.')) return;
    setDeletingId(id);
    try {
      const res = await fetch(`/api/admin/media/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` },
      });
      if (res.ok) {
        setItems((prev) => prev.filter((item) => item.id !== id));
      }
    } catch (err) {
      console.error('Error deleting media:', err);
    } finally {
      setDeletingId(null);
    }
  };

  const togglePublish = async (id: string, current: boolean) => {
    try {
      const res = await fetch(`/api/admin/media/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
        },
        body: JSON.stringify({ published: !current }),
      });
      if (res.ok) {
        setItems((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, published: !current } : item
          )
        );
      }
    } catch (err) {
      console.error('Error toggling publish:', err);
    }
  };

  const filtered = filterCategory === 'All'
    ? items
    : items.filter((item) => item.category === filterCategory);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-cormorant text-3xl font-bold text-charcoal">
          Photo Gallery
        </h1>
        <p className="font-inter text-sm text-charcoal/60 mt-1">
          Upload and manage photos. Published photos appear on the public gallery page.
        </p>
      </div>

      {/* Upload Section */}
      <div className="bg-white rounded-lg shadow-sm border border-mist/10 p-6">
        <h2 className="font-cormorant text-xl font-bold text-charcoal mb-4">
          Add New Photo
        </h2>

        {/* Mode Toggle */}
        <div className="flex gap-2 mb-5">
          <button
            onClick={() => setUploadMode('url')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-inter text-sm font-medium transition-colors ${
              uploadMode === 'url'
                ? 'bg-saffron-mid text-white'
                : 'bg-ivory text-charcoal/70 hover:text-charcoal'
            }`}
          >
            <LinkIcon size={16} />
            Paste URL
          </button>
          <button
            onClick={() => setUploadMode('file')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-inter text-sm font-medium transition-colors ${
              uploadMode === 'file'
                ? 'bg-saffron-mid text-white'
                : 'bg-ivory text-charcoal/70 hover:text-charcoal'
            }`}
          >
            <Upload size={16} />
            Upload File
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* URL Input or File Upload */}
          {uploadMode === 'url' ? (
            <div>
              <label className="block font-inter text-sm font-medium text-charcoal mb-1.5">
                Image URL
              </label>
              <input
                type="url"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="https://images.pexels.com/photos/..."
                className="w-full px-4 py-3 border border-mist/30 bg-ivory/50 font-inter text-sm focus:outline-none focus:border-saffron-mid transition-colors rounded-lg"
                required
              />
            </div>
          ) : (
            <div>
              <label className="block font-inter text-sm font-medium text-charcoal mb-1.5">
                Upload Image
              </label>
              <div className="relative">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={submitting}
                  className="w-full border-2 border-dashed border-mist/40 rounded-lg p-8 flex flex-col items-center gap-3 hover:border-saffron-mid/50 hover:bg-saffron-pale/20 transition-colors disabled:opacity-50"
                >
                  {submitting ? (
                    <Loader2 size={28} className="text-saffron-mid animate-spin" />
                  ) : (
                    <Upload size={28} className="text-mist" />
                  )}
                  <span className="font-inter text-sm text-charcoal/60">
                    {submitting ? 'Uploading...' : 'Click to select an image'}
                  </span>
                </button>
              </div>
              {urlInput && (
                <div className="mt-2 flex items-center gap-2 px-3 py-2 bg-green-50 rounded-lg">
                  <Check size={14} className="text-green-600" />
                  <span className="font-inter text-xs text-green-700 truncate">
                    {urlInput}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Title, Alt, Category Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block font-inter text-sm font-medium text-charcoal mb-1.5">
                Title
              </label>
              <input
                type="text"
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
                placeholder="Photo title"
                className="w-full px-4 py-3 border border-mist/30 bg-ivory/50 font-inter text-sm focus:outline-none focus:border-saffron-mid transition-colors rounded-lg"
              />
            </div>
            <div>
              <label className="block font-inter text-sm font-medium text-charcoal mb-1.5">
                Alt Text
              </label>
              <input
                type="text"
                value={altInput}
                onChange={(e) => setAltInput(e.target.value)}
                placeholder="Description for accessibility"
                className="w-full px-4 py-3 border border-mist/30 bg-ivory/50 font-inter text-sm focus:outline-none focus:border-saffron-mid transition-colors rounded-lg"
              />
            </div>
            <div>
              <label className="block font-inter text-sm font-medium text-charcoal mb-1.5">
                Category
              </label>
              <select
                value={categoryInput}
                onChange={(e) => setCategoryInput(e.target.value)}
                className="w-full px-4 py-3 border border-mist/30 bg-ivory/50 font-inter text-sm focus:outline-none focus:border-saffron-mid transition-colors rounded-lg"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Preview */}
          {urlInput && (
            <div className="relative w-40 h-40 rounded-lg overflow-hidden border border-mist/20">
              <Image src={urlInput} alt="Preview" fill className="object-cover" />
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting || !urlInput}
            className="inline-flex items-center gap-2 px-6 py-3 bg-saffron-mid text-white rounded-lg font-inter text-sm font-semibold hover:bg-saffron-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Plus size={16} />
            )}
            Add Photo
          </button>
        </form>
      </div>

      {/* Filter Tabs */}
      <div>
        <div className="flex flex-wrap gap-2 mb-6">
          {['All', ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 rounded-full font-inter text-sm font-medium transition-colors ${
                filterCategory === cat
                  ? 'bg-navy-deep text-cream'
                  : 'bg-white text-charcoal/70 hover:text-charcoal border border-mist/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 size={32} className="animate-spin text-saffron-mid" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg border border-mist/10">
            <ImageIcon size={48} className="mx-auto text-mist/40 mb-4" />
            <p className="font-inter text-charcoal/60">
              No photos yet. Add your first photo above.
            </p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence>
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  className="group relative bg-white rounded-lg overflow-hidden shadow-sm border border-mist/10 hover:shadow-md transition-shadow"
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={item.url}
                      alt={item.alt_text || item.title || 'Gallery image'}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Unpublished overlay */}
                    {!item.published && (
                      <div className="absolute inset-0 bg-charcoal/50 flex items-center justify-center">
                        <span className="font-inter text-xs font-semibold text-cream bg-yellow-600 px-3 py-1 rounded-full">
                          Draft
                        </span>
                      </div>
                    )}

                    {/* Hover actions */}
                    <div className="absolute inset-0 bg-navy-deep/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <button
                        onClick={() => setPreviewUrl(item.url)}
                        className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-cream hover:bg-white/30 transition-colors"
                        title="Preview"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        onClick={() => togglePublish(item.id, item.published)}
                        className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-cream hover:bg-white/30 transition-colors"
                        title={item.published ? 'Unpublish' : 'Publish'}
                      >
                        {item.published ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        disabled={deletingId === item.id}
                        className="w-9 h-9 rounded-full bg-red-500/30 flex items-center justify-center text-cream hover:bg-red-500/50 transition-colors disabled:opacity-50"
                        title="Delete"
                      >
                        {deletingId === item.id ? (
                          <Loader2 size={16} className="animate-spin" />
                        ) : (
                          <Trash2 size={16} />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-3">
                    <p className="font-inter text-sm font-medium text-charcoal truncate">
                      {item.title || 'Untitled'}
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="font-inter text-[10px] uppercase tracking-wider text-gold-rich">
                        {item.category}
                      </span>
                      <span className={`w-2 h-2 rounded-full ${item.published ? 'bg-green-500' : 'bg-yellow-500'}`} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {previewUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy-deep/90 flex items-center justify-center p-4"
            onClick={() => setPreviewUrl(null)}
          >
            <button
              onClick={() => setPreviewUrl(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-cream hover:bg-white/20 transition-colors"
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-[90vw] max-h-[85vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={previewUrl}
                alt="Preview"
                width={1200}
                height={800}
                className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
