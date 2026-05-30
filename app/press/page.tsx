'use client';

import { motion } from 'framer-motion';
import { Download, ExternalLink, Calendar, Newspaper, Tv, Mic } from 'lucide-react';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';

const revealVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface PressItem {
  id: string;
  title: string;
  outlet: string;
  date: string;
  type: 'article' | 'video' | 'podcast';
  excerpt: string;
  url?: string;
}

const pressMentions: PressItem[] = [
  {
    id: '1',
    title: 'How This Jaipur Startup is Making Himalayan Treks Zero-Waste',
    outlet: 'The Better India',
    date: '2024-11-20',
    type: 'article',
    excerpt: 'Zovara\'s zero-plastic policy and community-first approach to Himalayan trekking is setting a new standard for responsible travel in India.',
  },
  {
    id: '2',
    title: 'The Rise of Eco-Luxury Travel in India',
    outlet: 'Conde Nast Traveller India',
    date: '2024-09-15',
    type: 'article',
    excerpt: 'Zovara\'s Ladakh Grand Circuit combines premium comfort with environmental responsibility — a template for the future of Indian travel.',
  },
  {
    id: '3',
    title: 'From Triund to Transformation: A Travel Founder\'s Story',
    outlet: 'YourStory',
    date: '2024-07-08',
    type: 'video',
    excerpt: 'Nikhil Singh Tanwar shares how a single Triund trek in 2019 grew into Zovara — a full-service travel company covering 8 destinations.',
  },
  {
    id: '4',
    title: 'Why Small-Group Travel is the Future of Indian Tourism',
    outlet: 'Economic Times Travel',
    date: '2024-05-22',
    type: 'article',
    excerpt: 'With a maximum of 16 guests per departure, Zovara is proving that intimate group travel delivers better experiences and lower impact.',
  },
  {
    id: '5',
    title: 'Responsible Travel in the Himalayas — A Conversation with Zovara',
    outlet: 'Travel Podcast India',
    date: '2024-03-10',
    type: 'podcast',
    excerpt: 'An in-depth conversation about carbon offsetting, local guide certification, and why travel companies must do more than plant trees.',
  },
  {
    id: '6',
    title: 'Northeast India\'s Best Kept Secrets — Now Accessible',
    outlet: 'National Geographic Traveller India',
    date: '2024-01-18',
    type: 'article',
    excerpt: 'Zovara\'s Northeast Discovery package opens up Meghalaya, Nagaland, and Assam with local guides and community-first principles.',
  },
];

const typeIcons = {
  article: Newspaper,
  video: Tv,
  podcast: Mic,
};

const typeColors = {
  article: 'bg-saffron-mid/10 text-saffron-deep',
  video: 'bg-navy-mid/10 text-navy-light',
  podcast: 'bg-gold-warm/10 text-gold-rich',
};

function HeroSection() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.pexels.com/photos/2905950/pexels-photo-2905950.jpeg?w=1600&fit=crop"
        alt="Mountains"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/50 to-navy-deep/80" />
      <div className="absolute inset-0 grain-overlay" />
      <div className="relative z-10 text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-inter text-[11px] tracking-[4px] uppercase text-gold-pale mb-4"
        >
          News & Media
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-cormorant text-[48px] md:text-[64px] font-bold text-cream leading-tight"
        >
          Press & Media
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-inter text-mist text-lg mt-4 max-w-xl mx-auto"
        >
          Stories about Zovara from the press, podcasts, and media.
        </motion.p>
      </div>
    </section>
  );
}

function PressMentionsSection() {
  return (
    <section className="py-20 px-4 bg-cream">
      <SectionHeading
        label="IN THE NEWS"
        heading="Press Mentions"
        subtext="What the media is saying about Zovara and responsible travel in India."
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="max-w-5xl mx-auto mt-12 space-y-6"
      >
        {pressMentions.map((item) => {
          const Icon = typeIcons[item.type];
          const colorClass = typeColors[item.type];
          return (
            <motion.div
              key={item.id}
              variants={staggerItem}
              className="bg-white p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow flex flex-col md:flex-row gap-6"
            >
              <div className="flex-shrink-0">
                <div className={`w-12 h-12 rounded-sm flex items-center justify-center ${colorClass}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="font-inter text-xs font-semibold text-gold-rich uppercase tracking-wide">
                    {item.outlet}
                  </span>
                  <span className="font-inter text-xs text-mist flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(item.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                </div>
                <h3 className="font-cormorant text-xl font-bold text-charcoal mb-2">{item.title}</h3>
                <p className="font-inter text-sm text-charcoal/70 leading-relaxed">{item.excerpt}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

function PressKitSection() {
  return (
    <section className="py-20 px-4 bg-ivory">
      <SectionHeading
        label="RESOURCES"
        heading="Press Kit"
        subtext="Everything you need to write about Zovara — logos, brand guidelines, and high-resolution images."
      />
      <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: 'Brand Guidelines',
            description: 'Logo usage, colour palette, typography, and tone of voice.',
            icon: 'palette',
          },
          {
            title: 'Logo Pack',
            description: 'SVG and PNG logos in full colour, monochrome, and light versions.',
            icon: 'image',
          },
          {
            title: 'Image Library',
            description: 'High-resolution destination and experience photos for editorial use.',
            icon: 'camera',
          },
        ].map((item) => (
          <motion.div
            key={item.title}
            variants={revealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="bg-white p-8 shadow-md text-center"
          >
            <h3 className="font-cormorant text-xl font-bold text-charcoal mb-3">{item.title}</h3>
            <p className="font-inter text-sm text-charcoal/70 mb-6">{item.description}</p>
            <button className="inline-flex items-center gap-2 text-saffron-mid font-inter text-sm font-semibold hover:text-saffron-light transition-colors">
              <Download className="w-4 h-4" /> Download
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function MediaContactSection() {
  return (
    <section className="py-20 px-4 bg-navy-mid">
      <SectionHeading
        label="GET IN TOUCH"
        heading="Media Enquiries"
        theme="dark"
        subtext="For press interviews, feature stories, or partnership enquiries."
      />
      <div className="max-w-2xl mx-auto mt-12 text-center">
        <div className="bg-navy-deep/50 p-8 border border-mist/10">
          <p className="font-inter text-cream text-lg mb-2">
            <strong>Nikhil Singh Tanwar</strong>
          </p>
          <p className="font-inter text-gold-warm text-sm mb-4">CEO & Co-Founder, Zovara</p>
          <a
            href="mailto:tanwarnikhil860@gmail.com"
            className="font-inter text-mist hover:text-gold-warm transition-colors text-sm"
          >
            tanwarnikhil860@gmail.com
          </a>
          <p className="font-inter text-mist text-sm mt-1">+91 6377434103</p>
        </div>
      </div>
    </section>
  );
}

export default function PressPage() {
  return (
    <>
      <HeroSection />
      <PressMentionsSection />
      <PressKitSection />
      <MediaContactSection />
    </>
  );
}
