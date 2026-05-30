'use client';

import { useState, useEffect, useMemo } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Clock,
  Calendar,
  User,
  ChevronRight,
  Share2,
  MessageCircle,
  Twitter,
  Copy,
  Check,
  ArrowRight,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import PackageCard from '@/components/ui/PackageCard';
import { getBlogPostBySlug, blogPosts, packages, destinations } from '@/lib/data';

const categoryColor: Record<string, string> = {
  Trekking: 'bg-saffron-mid text-white',
  Sustainability: 'bg-green-600 text-white',
  Culture: 'bg-navy-light text-white',
  Destinations: 'bg-gold-rich text-white',
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getBlogPostBySlug(slug);
  const [copied, setCopied] = useState(false);
  const [activeHeading, setActiveHeading] = useState('');

  // Parse H2 headings from content for Table of Contents
  const headings = useMemo(() => {
    if (!post) return [];
    const regex = /<h2[^>]*>(.*?)<\/h2>/g;
    const result: { id: string; text: string }[] = [];
    let match;
    while ((match = regex.exec(post.content)) !== null) {
      const text = match[1].replace(/<[^>]*>/g, '');
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      result.push({ id, text });
    }
    return result;
  }, [post]);

  // Get related posts (same category, excluding current)
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3);
  }, [post]);

  // Get related package
  const relatedPackage = useMemo(() => {
    if (!post) return null;
    const slugToDestination: Record<string, string> = {
      'triund-most-rewarding-day-trek': 'dharamshala',
      'zero-waste-himalayan-trekking-packing-guide': 'dharamshala',
      'mcleod-ganj-off-tourist-trail': 'dharamshala',
      'spiti-valley-in-winter': 'spiti',
      'ethics-of-eco-tourism': 'dharamshala',
      'kedarkantha-snow-trek-beginners-guide': 'kedarkantha',
    };
    const destId = slugToDestination[post.slug];
    if (!destId) return packages[0];
    return packages.find((p) => p.destinationId === destId) ?? packages[0];
  }, [post]);

  // Content with IDs injected into h2 tags
  const processedContent = useMemo(() => {
    if (!post) return '';
    let html = post.content;
    let idx = 0;
    html = html.replace(/<h2[^>]*>(.*?)<\/h2>/g, (match, content) => {
      const heading = headings[idx];
      idx++;
      if (heading) {
        return `<h2 id="${heading.id}">${content}</h2>`;
      }
      return match;
    });
    return html;
  }, [post, headings]);

  // Intersection observer for active heading tracking
  useEffect(() => {
    if (headings.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveHeading(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -60% 0px' }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard not available */
    }
  };

  const shareText = post ? `${post.title} — Zovara Travel` : '';
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="font-cormorant text-4xl font-bold text-charcoal mb-4">Post not found</h1>
          <Link href="/blog" className="font-inter text-saffron-mid hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/40 to-transparent" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={`inline-block text-[11px] font-inter font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 ${categoryColor[post.category] ?? 'bg-gray-600 text-white'}`}>
              {post.category}
            </span>
            <h1 className="font-cormorant text-[32px] md:text-[52px] font-bold text-cream leading-tight mb-4 max-w-3xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 font-inter text-sm text-mist">
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <span className="flex items-center gap-1.5">
                <User size={14} />
                {post.author}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-ivory border-b border-mist/20">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-2 font-inter text-xs text-charcoal/60">
          <Link href="/" className="hover:text-saffron-mid transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href="/blog" className="hover:text-saffron-mid transition-colors">Blog</Link>
          <ChevronRight size={12} />
          <span className="text-charcoal truncate">{post.title}</span>
        </div>
      </div>

      {/* Two-column layout */}
      <section className="py-12 px-4 bg-cream">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Article body */}
          <article className="lg:w-[65%] min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none
                prose-headings:font-cormorant prose-headings:text-charcoal
                prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4
                prose-p:font-inter prose-p:text-charcoal/80 prose-p:leading-relaxed
                prose-a:text-saffron-mid prose-a:no-underline hover:prose-a:underline
                prose-strong:text-charcoal"
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />

            {/* Author bio card */}
            <div className="mt-12 p-6 bg-ivory rounded-lg border border-mist/20 flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=400&h=400&fit=crop"
                  alt="Nikhil Singh Tanwar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <p className="font-cormorant text-xl font-bold text-charcoal">Nikhil Singh Tanwar</p>
                <p className="font-inter text-sm text-saffron-mid mb-2">CEO, Zovara Travel</p>
                <p className="font-inter text-sm text-charcoal/70 leading-relaxed">
                  Lifelong traveller and trekking enthusiast from Jaipur. Founded Zovara to create journeys that are as responsible as they are remarkable.
                </p>
              </div>
            </div>

            {/* Social share buttons */}
            <div className="mt-8 flex items-center gap-3">
              <span className="font-inter text-sm text-charcoal/60 flex items-center gap-1.5">
                <Share2 size={14} />
                Share this story
              </span>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center text-white hover:bg-green-700 transition-colors"
                aria-label="Share on WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-charcoal flex items-center justify-center text-white hover:bg-charcoal/80 transition-colors"
                aria-label="Share on Twitter/X"
              >
                <Twitter size={16} />
              </a>
              <button
                onClick={handleCopyLink}
                className="w-9 h-9 rounded-full bg-mist/40 flex items-center justify-center text-charcoal hover:bg-mist/60 transition-colors"
                aria-label="Copy link"
              >
                {copied ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Related packages CTA */}
            {relatedPackage && (
              <div className="mt-12 p-8 bg-navy-mid rounded-lg">
                <h3 className="font-cormorant text-2xl font-bold text-cream mb-2">Inspired? Book This Journey</h3>
                <p className="font-inter text-sm text-mist mb-6">
                  Turn this story into your own experience. Explore our curated packages.
                </p>
                <Link
                  href={`/packages/${relatedPackage.id}`}
                  className="inline-flex items-center gap-2 bg-saffron-mid text-cream px-6 py-3 font-inter text-sm font-semibold hover:bg-saffron-light transition-colors"
                >
                  View {relatedPackage.title}
                  <ArrowRight size={14} />
                </Link>
              </div>
            )}
          </article>

          {/* Sticky sidebar */}
          <aside className="lg:w-[35%] lg:sticky lg:top-24 lg:self-start space-y-8">
            {/* Table of Contents */}
            {headings.length > 0 && (
              <div className="bg-white rounded-lg p-6 shadow-sm border border-mist/10">
                <h4 className="font-cormorant text-lg font-bold text-charcoal mb-4">Table of Contents</h4>
                <nav className="space-y-2">
                  {headings.map((h) => (
                    <a
                      key={h.id}
                      href={`#${h.id}`}
                      className={`block font-inter text-sm leading-snug py-1 pl-3 border-l-2 transition-colors ${
                        activeHeading === h.id
                          ? 'border-saffron-mid text-saffron-mid font-semibold'
                          : 'border-transparent text-charcoal/60 hover:text-charcoal hover:border-mist'
                      }`}
                    >
                      {h.text}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="bg-white rounded-lg p-6 shadow-sm border border-mist/10">
                <h4 className="font-cormorant text-lg font-bold text-charcoal mb-4">Related Stories</h4>
                <div className="space-y-4">
                  {relatedPosts.map((rp) => (
                    <Link
                      key={rp.id}
                      href={`/blog/${rp.slug}`}
                      className="group flex gap-3 items-start"
                    >
                      <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0">
                        <Image src={rp.image} alt={rp.title} fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-cormorant text-sm font-bold text-charcoal leading-snug group-hover:text-saffron-mid transition-colors line-clamp-2">
                          {rp.title}
                        </p>
                        <span className="font-inter text-xs text-charcoal/50 flex items-center gap-1 mt-1">
                          <Clock size={10} />
                          {rp.readTime}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}
