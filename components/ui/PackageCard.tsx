'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { formatPrice } from '@/lib/utils';

interface PackageCardProps {
  image: string;
  duration: string;
  difficulty: string;
  title: string;
  destination: string;
  description: string;
  price: number;
  slug: string;
  type: string;
}

const difficultyColor: Record<string, string> = {
  Easy: 'bg-green-600 text-white',
  Moderate: 'bg-amber-600 text-white',
  Challenging: 'bg-red-600 text-white',
};

const typePillColor: Record<string, string> = {
  Eco: 'bg-green-100 text-green-700',
  Luxury: 'bg-gold-pale text-gold-rich',
  Cultural: 'bg-saffron-pale text-saffron-deep',
  Adventure: 'bg-navy-light/10 text-navy-light',
  Trekking: 'bg-navy-muted/10 text-navy-muted',
};

export default function PackageCard({
  image,
  duration,
  difficulty,
  title,
  destination,
  description,
  price,
  slug,
  type,
}: PackageCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'tween', duration: 0.3 }}
      className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white"
    >
      <Link href={`/packages/${slug}`}>
        {/* Image */}
        <div className="relative h-[260px] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Duration badge */}
          <span className="absolute top-3 left-3 bg-navy-deep/70 text-cream text-xs font-inter font-medium px-3 py-1 rounded-sm">
            {duration}
          </span>
          {/* Difficulty badge */}
          <span
            className={`absolute top-3 right-3 text-xs font-inter font-medium px-3 py-1 rounded-sm ${
              difficultyColor[difficulty] ?? 'bg-gray-600 text-white'
            }`}
          >
            {difficulty}
          </span>
        </div>
      </Link>

      {/* Type pill */}
      <div className="px-5 pt-3">
        <span
          className={`inline-block text-[11px] font-inter font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
            typePillColor[type] ?? 'bg-gray-100 text-gray-700'
          }`}
        >
          {type}
        </span>
      </div>

      {/* Card body */}
      <div className="px-5 pt-2 pb-4 space-y-1.5">
        <p className="font-inter text-xs uppercase tracking-wider text-gold-rich">
          {destination}
        </p>
        <h3 className="font-cormorant text-xl font-bold leading-snug">
          {title}
        </h3>
        <p className="font-inter text-sm text-mist line-clamp-2 leading-relaxed">
          {description}
        </p>
        <p className="font-inter text-sm font-semibold text-charcoal pt-1">
          From {formatPrice(price)}
        </p>
      </div>

      {/* Footer */}
      <div className="px-5 pb-4 flex items-center justify-between border-t border-ivory pt-4">
        <Link
          href={`/packages/${slug}`}
          className="inline-flex items-center gap-1.5 text-saffron-mid font-inter text-sm font-semibold hover:gap-2.5 transition-all"
        >
          Explore Trip
          <ArrowRight size={14} />
        </Link>
        <button
          type="button"
          className="font-inter text-sm text-navy-muted border border-navy-muted/30 rounded-sm px-3 py-1.5 hover:bg-navy-muted/5 transition-colors"
        >
          Quick Enquiry
        </button>
      </div>
    </motion.div>
  );
}
