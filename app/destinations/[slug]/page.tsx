'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  ChevronDown,
  Mountain,
  Landmark,
  Droplets,
  TreePine,
  Star,
  Camera,
  Sun,
  Snowflake,
  Bird,
  Coffee,
  Waves,
  Palette,
  Music,
  ShoppingBag,
  Utensils,
  Flower,
  Leaf,
  Users,
  BookOpen,
  Tent,
  Flame,
  Bone,
  Footprints,
} from 'lucide-react';
import PackageCard from '@/components/ui/PackageCard';
import EcoBadge from '@/components/ui/EcoBadge';
import SectionHeading from '@/components/ui/SectionHeading';
import { getDestinationBySlug, getPackagesForDestination } from '@/lib/data';

/* ── Icon mapping for highlight items ── */
const iconMap: Record<string, React.ElementType> = {
  mountain: Mountain,
  temple: Landmark,
  landmark: Landmark,
  droplets: Droplets,
  trees: TreePine,
  'book-open': BookOpen,
  coffee: Coffee,
  star: Star,
  camera: Camera,
  sun: Sun,
  snowflake: Snowflake,
  bird: Bird,
  waves: Waves,
  palette: Palette,
  'shopping-bag': ShoppingBag,
  utensils: Utensils,
  music: Music,
  flower: Flower,
  leaf: Leaf,
  bridge: Tent,
  users: Users,
  campfire: Flame,
  fossil: Bone,
  'paw-print': Footprints,
};

const fallbackIcon = Star;

export default function DestinationDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [openTip, setOpenTip] = useState<number | null>(null);

  const destination = getDestinationBySlug(slug);
  const destPackages = getPackagesForDestination(slug);

  /* ── Not Found ── */
  if (!destination) {
    return (
      <main className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-cormorant text-4xl text-charcoal font-semibold">
            Destination Not Found
          </h1>
          <p className="font-inter text-mist mt-3">
            We could not find a destination matching &ldquo;{slug}&rdquo;.
          </p>
          <Link
            href="/destinations"
            className="inline-block mt-6 font-inter text-sm font-semibold text-saffron-mid hover:text-saffron-deep transition-colors"
          >
            &larr; Back to all destinations
          </Link>
        </div>
      </main>
    );
  }

  const ecoLabels = destination.region;

  return (
    <main className="min-h-screen bg-cream">
      {/* ── Hero ── */}
      <section className="relative h-[65vh] min-h-[480px] flex items-end overflow-hidden">
        <Image
          src={destination.heroImage}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/40 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <motion.nav
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-1.5 font-inter text-sm text-cream/70 mb-4"
          >
            <Link href="/" className="hover:text-gold-warm transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <Link
              href="/destinations"
              className="hover:text-gold-warm transition-colors"
            >
              Destinations
            </Link>
            <ChevronRight size={14} />
            <span className="text-gold-pale">{destination.name}</span>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-cormorant text-5xl md:text-6xl lg:text-7xl text-white font-semibold leading-tight"
          >
            {destination.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-inter text-lg text-cream/80 mt-2"
          >
            {destination.state} &middot; {destination.region.join(' / ')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="flex flex-wrap gap-2 mt-4"
          >
            {ecoLabels.map((label) => (
              <EcoBadge key={label} label={label} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Overview: Two Columns ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — Stats */}
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            {destination.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-ivory rounded-sm p-5 text-center"
              >
                <p className="font-inter text-[11px] uppercase tracking-wider text-gold-rich mb-1">
                  {stat.label}
                </p>
                <p className="font-cormorant text-xl font-semibold text-charcoal">
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right — Description */}
          <div className="md:col-span-3 space-y-5">
            {destination.description.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="font-inter text-base leading-relaxed text-charcoal/80"
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packages Available Here ── */}
      {destPackages.length > 0 && (
        <section className="bg-ivory py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              label="Packages"
              heading="Packages Available Here"
              subtext="Curated journeys that explore this destination in depth."
            />

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {destPackages.map((pkg, i) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <PackageCard
                    image={pkg.image}
                    duration={pkg.duration}
                    difficulty={pkg.difficulty}
                    title={pkg.title}
                    destination={destination.name}
                    description={pkg.description[0]}
                    price={pkg.price}
                    slug={pkg.id}
                    type={pkg.type}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Highlights Grid ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          label="Highlights"
          heading="What Makes It Special"
          subtext="The experiences and wonders that define this destination."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destination.highlights.map((item, i) => {
            const Icon = iconMap[item.icon] ?? fallbackIcon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-4 bg-white rounded-sm p-5 shadow-sm"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-saffron-pale flex items-center justify-center">
                  <Icon size={20} className="text-saffron-deep" />
                </div>
                <div>
                  <h3 className="font-cormorant text-lg font-semibold text-charcoal">
                    {item.title}
                  </h3>
                  <p className="font-inter text-sm text-mist leading-relaxed mt-0.5">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── Travel Tips Accordion ── */}
      <section className="bg-navy-deep py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Before You Go"
            heading="Travel Tips"
            subtext="Practical advice to help you prepare for this destination."
            theme="dark"
          />

          <div className="mt-12 space-y-3">
            {destination.travelTips.map((tip, i) => {
              const isOpen = openTip === i;
              return (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="bg-navy-mid rounded-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenTip(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                  >
                    <span className="font-cormorant text-lg font-semibold text-cream">
                      {tip.title}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown size={18} className="text-gold-warm" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 font-inter text-sm leading-relaxed text-cream/70">
                          {tip.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
