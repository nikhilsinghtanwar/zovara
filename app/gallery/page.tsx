'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Camera, Loader2 } from 'lucide-react';

type GalleryCategory = 'All' | 'Himalaya' | 'Rajasthan' | 'Northeast' | 'Sikkim' | 'Ladakh' | 'People' | 'Wildlife';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, 'All'>;
  caption: string;
}

const fallbackImages: GalleryImage[] = [
  { id: '1', src: 'https://images.pexels.com/photos/2905950/pexels-photo-2905950.jpeg?w=600&fit=crop', alt: 'Himalayan peaks at dawn', category: 'Himalaya', caption: 'Dhauladhar range at dawn' },
  { id: '2', src: 'https://images.pexels.com/photos/358238/pexels-photo-358238.jpeg?w=600&fit=crop', alt: 'Rajasthan fort', category: 'Rajasthan', caption: 'Amber Fort, Jaipur' },
  { id: '3', src: 'https://images.pexels.com/photos/674735/pexels-photo-674735.jpeg?w=600&fit=crop', alt: 'Mountain trail', category: 'Himalaya', caption: 'Triund ridge trail' },
  { id: '4', src: 'https://images.pexels.com/photos/1277381/pexels-photo-1277381.jpeg?w=600&fit=crop', alt: 'Trekking group', category: 'Himalaya', caption: 'Group trek through pine forests' },
  { id: '5', src: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?w=600&fit=crop', alt: 'Mountain lake', category: 'Himalaya', caption: 'Deoria Tal reflections' },
  { id: '6', src: 'https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?w=600&fit=crop', alt: 'Spiti landscape', category: 'Ladakh', caption: 'Spiti Valley at dusk' },
  { id: '7', src: 'https://images.pexels.com/photos/2404342/pexels-photo-2404342.jpeg?w=600&fit=crop', alt: 'Ladakh monastery', category: 'Ladakh', caption: 'Thiksey Monastery at sunrise' },
  { id: '8', src: 'https://images.pexels.com/photos/669912/pexels-photo-669912.jpeg?w=600&fit=crop', alt: 'Dharamshala', category: 'Himalaya', caption: 'Dharamshala valley view' },
  { id: '9', src: 'https://images.pexels.com/photos/1435761/pexels-photo-1435761.jpeg?w=600&fit=crop', alt: 'Snow trek', category: 'Himalaya', caption: 'Kedarkantha snow trail' },
  { id: '10', src: 'https://images.pexels.com/photos/2442496/pexels-photo-2442496.jpeg?w=600&fit=crop', alt: 'Northeast India', category: 'Northeast', caption: 'Living root bridge, Meghalaya' },
  { id: '11', src: 'https://images.pexels.com/photos/2166583/pexels-photo-2166583.jpeg?w=600&fit=crop', alt: 'Sikkim monastery', category: 'Sikkim', caption: 'Rumtek Monastery, Sikkim' },
  { id: '12', src: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?w=600&fit=crop', alt: 'Forest trail', category: 'Himalaya', caption: 'Cedar forests of Dharamshala' },
  { id: '13', src: 'https://images.pexels.com/photos/159291/camel-caravan-desert-sand-159291.jpeg?w=600&fit=crop', alt: 'Desert camp', category: 'Rajasthan', caption: 'Thar Desert camping' },
  { id: '14', src: 'https://images.pexels.com/photos/1680431/pexels-photo-1680431.jpeg?w=600&fit=crop', alt: 'Camping night', category: 'Himalaya', caption: 'Campfire under the stars' },
  { id: '15', src: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?w=600&fit=crop', alt: 'Trekking adventure', category: 'Himalaya', caption: 'High-altitude meadow trek' },
  { id: '16', src: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=600&fit=crop', alt: 'Local guide', category: 'People', caption: 'Our local Himalayan guide' },
  { id: '17', src: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?w=600&fit=crop', alt: 'Travel companion', category: 'People', caption: 'Fellow travellers on the trail' },
  { id: '18', src: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?w=600&fit=crop', alt: 'Expedition leader', category: 'People', caption: 'Zovara expedition leader' },
  { id: '19', src: 'https://images.pexels.com/photos/162240/himalaya-nepal-mountain-peak-162240.jpeg?w=600&fit=crop', alt: 'Wildlife', category: 'Wildlife', caption: 'Himalayan birdwatching' },
  { id: '20', src: 'https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?w=600&fit=crop', alt: 'Rajasthan wildlife', category: 'Wildlife', caption: 'Desert wildlife sanctuary' },
  { id: '21', src: 'https://images.pexels.com/photos/2442496/pexels-photo-2442496.jpeg?w=600&fit=crop', alt: 'Northeast village', category: 'Northeast', caption: 'Naga tribal village' },
  { id: '22', src: 'https://images.pexels.com/photos/325698/pexels-photo-325698.jpeg?w=600&fit=crop', alt: 'Sikkim landscape', category: 'Sikkim', caption: 'Sikkim hillside panorama' },
  { id: '23', src: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?w=600&fit=crop', alt: 'Nature trail', category: 'Northeast', caption: 'Meghalaya forest trail' },
  { id: '24', src: 'https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?w=600&fit=crop', alt: 'Forest path', category: 'Wildlife', caption: 'Kaziranga forest trail' },
];

const filters: GalleryCategory[] = ['All', 'Himalaya', 'Rajasthan', 'Northeast', 'Sikkim', 'Ladakh', 'People', 'Wildlife'];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const staggerItem = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [images, setImages] = useState<GalleryImage[]>(fallbackImages);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const res = await fetch('/api/gallery');
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            const mapped: GalleryImage[] = data.map((item: any) => ({
              id: item.id,
              src: item.url,
              alt: item.alt_text || item.title || 'Gallery image',
              category: item.category || 'Himalaya',
              caption: item.title || item.alt_text || '',
            }));
            setImages(mapped);
          }
        }
      } catch {
        // Use fallback data on error
      } finally {
        setLoading(false);
      }
    }
    fetchGallery();
  }, []);

  const filtered = activeFilter === 'All'
    ? images
    : images.filter((img) => img.category === activeFilter);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/2905950/pexels-photo-2905950.jpeg?w=1600&fit=crop"
          alt="Gallery hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 to-navy-deep/90" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-inter text-[11px] tracking-[4px] uppercase text-gold-pale mb-4"
          >
            Through the Lens
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-cormorant text-[48px] md:text-[72px] font-bold text-cream leading-none"
          >
            Visual Stories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-inter text-mist mt-4 max-w-lg mx-auto"
          >
            Moments captured across Zovara journeys — from Himalayan summits to desert dunes.
          </motion.p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="bg-ivory border-b border-mist/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full font-inter text-sm font-medium whitespace-nowrap transition-colors ${
                activeFilter === f
                  ? 'bg-saffron-mid text-white'
                  : 'bg-white text-charcoal/70 hover:text-charcoal border border-mist/30'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry grid */}
      <section className="py-12 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 size={32} className="animate-spin text-saffron-mid" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-16">
              <Camera className="w-12 h-12 text-mist/40 mx-auto mb-4" />
              <p className="font-inter text-charcoal/60">No photos in this category yet.</p>
            </div>
          ) : (
            <motion.div
              key={activeFilter}
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3"
            >
              {filtered.map((img, i) => (
                <motion.div
                  key={img.id}
                  variants={staggerItem}
                  className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg"
                  onClick={() => openLightbox(i)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={i % 3 === 0 ? 800 : i % 3 === 1 ? 450 : 600}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-inter text-xs text-cream">{img.caption}</p>
                    <span className="inline-block mt-1 text-[10px] font-inter font-semibold uppercase tracking-wider text-gold-warm">
                      {img.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-navy-deep text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Camera className="w-10 h-10 text-gold-warm mx-auto mb-4" />
          <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-cream mb-3">
            Want to See More?
          </h2>
          <p className="font-inter text-mist mb-6">
            Follow us on Instagram for daily travel inspiration from our journeys.
          </p>
          <a
            href="https://www.instagram.com/zovara.travel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-saffron-mid text-cream px-8 py-3.5 font-inter text-sm tracking-wide hover:bg-saffron-light transition-colors"
          >
            Follow @zovara.travel
          </a>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-navy-deep/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-cream hover:bg-white/20 transition-colors"
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-cream hover:bg-white/20 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="max-w-[90vw] max-h-[80vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightboxIndex].src.replace('w=600', 'w=1200')}
                alt={filtered[lightboxIndex].alt}
                width={1200}
                height={800}
                className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg"
              />
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-cream hover:bg-white/20 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-6 left-0 right-0 text-center" onClick={(e) => e.stopPropagation()}>
              <p className="font-inter text-sm text-cream">{filtered[lightboxIndex].caption}</p>
              <span className="inline-block mt-1 text-[10px] font-inter font-semibold uppercase tracking-wider text-gold-warm">
                {filtered[lightboxIndex].category}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
