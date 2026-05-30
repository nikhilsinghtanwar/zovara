'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ChevronRight, Clock, Users, Leaf, Heart } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { teamMembers } from '@/lib/data';

const revealVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function CountUpStat({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <span className="font-cormorant text-5xl md:text-6xl font-bold text-gold-warm">
        {count}{suffix}
      </span>
      <span className="font-inter text-sm text-cream/80 uppercase tracking-wider text-center">
        {label}
      </span>
    </div>
  );
}

const values = [
  {
    icon: Clock,
    title: 'Slow Travel',
    description: 'We design journeys that let you sink into a place rather than sprint through it. Slow travel means deeper connections, richer memories, and a pace that respects both you and the destination.',
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'Every booking supports local guides, homestays, and community funds. Your journey directly benefits the people who call these landscapes home — not faceless corporations.',
  },
  {
    icon: Leaf,
    title: 'Leave No Trace',
    description: 'Zero single-use plastic, waste carry-back pouches, and carbon offsets on every trip. We believe the only thing you should leave behind is a positive impact.',
  },
  {
    icon: Heart,
    title: 'Authenticity',
    description: 'No tourist traps, no cookie-cutter itineraries. Every Zovara journey is built on genuine local knowledge and real relationships with the communities we visit.',
  },
];

const stats = [
  { target: 500, suffix: '+', label: 'Travellers Journeyed' },
  { target: 8, suffix: '', label: 'Unique Destinations' },
  { target: 6, suffix: '', label: 'Years of Experience' },
  { target: 0, suffix: '', label: 'Plastic Policy' },
];

const milestones = [
  { year: '2019', title: 'The First Trek', description: 'Nikhil and Chetan organise their first curated Triund trek with 8 travellers. Zovara is born from a single question: what if travel could heal the places it visits?' },
  { year: '2020', title: 'Building the Foundation', description: 'Despite the pandemic, the team builds partnerships with local guides, homestays, and community organisations across Dharamshala and Spiti. The zero-plastic policy is formalised.' },
  { year: '2021', title: 'Expanding Horizons', description: 'Zovara adds Ladakh, Kedarkantha, and Rajasthan to its destination map. Aditya joins as CFO, bringing financial rigour to a company built on passion.' },
  { year: '2022', title: 'Community Impact', description: 'Launch of the Community First programme — directing a portion of every booking into local education, healthcare, and conservation funds across all destinations.' },
  { year: '2023', title: 'Northeast & Sikkim', description: 'Zovara expands to Northeast India and Sikkim, completing its vision of covering India\'s most extraordinary and underserved travel landscapes.' },
  { year: '2024', title: '500+ Journeys', description: 'The 500th traveller journeys with Zovara. Corporate travel programme launches. Press recognition from Conde Nast Traveller, The Better India, and Economic Times.' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/2905950/pexels-photo-2905950.jpeg?w=1600&fit=crop"
          alt="About Zovara"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-navy-deep/40 to-navy-deep/80" />
        <div className="absolute inset-0 grain-overlay" />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-inter text-[11px] tracking-[4px] uppercase text-gold-pale mb-4"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="font-cormorant text-5xl md:text-6xl lg:text-7xl text-white font-semibold"
          >
            About Zovara
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 font-cormorant italic text-xl text-cream"
          >
            Where the journey becomes the destination
          </motion.p>

          <motion.nav
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-6 flex items-center justify-center gap-1.5 font-inter text-sm text-cream/80"
          >
            <Link href="/" className="hover:text-gold-warm transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-gold-pale">About</span>
          </motion.nav>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <motion.blockquote
            variants={revealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="font-cormorant italic text-[28px] md:text-[36px] leading-snug text-charcoal text-center mb-16"
          >
            &ldquo;We started Zovara because we believed travel should heal the places it visits
            — not exploit them.&rdquo;
          </motion.blockquote>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-6"
          >
            <motion.p variants={staggerItem} className="font-inter text-charcoal/80 leading-relaxed text-lg">
              Zovara was born in Jaipur in 2019, from a single Triund trek and a stubborn belief that
              travel could be different. Our founders, Nikhil and Chetan, had seen firsthand how
              tourism was eroding the very landscapes it celebrated — plastic on mountain trails,
              displaced communities, and travellers who left nothing behind but waste.
            </motion.p>
            <motion.p variants={staggerItem} className="font-inter text-charcoal/80 leading-relaxed text-lg">
              What started as one carefully curated trek to Dharamshala has grown into a fully-fledged
              travel company offering 8 unique destinations across India. From the snow-draped summits
              of Kedarkantha to the living root bridges of Meghalaya, from the ancient monasteries of
              Spiti to the royal forts of Rajasthan, every Zovara journey is built on the same founding
              principles: zero plastic, local guides, community-first economics, and deep respect for
              the land.
            </motion.p>
            <motion.p variants={staggerItem} className="font-inter text-charcoal/80 leading-relaxed text-lg">
              Five years, 500+ journeys, and countless stories later, that belief hasn&apos;t changed.
              We&apos;re still a small team from Jaipur, still stubborn about doing things the right way,
              and still convinced that the best travel is the kind that leaves the world a little better
              than you found it.
            </motion.p>
            <motion.p variants={staggerItem} className="font-inter text-charcoal/80 leading-relaxed text-lg">
              In 2021, Aditya joined as CFO, bringing the financial discipline and strategic thinking
              that allowed Zovara to scale without compromising its values. Together, the three
              co-founders have built a company that proves responsible travel and extraordinary
              experiences are not mutually exclusive — they&apos;re inseparable.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 bg-ivory">
        <SectionHeading
          label="THE TEAM"
          heading="The People Behind Your Journey"
          subtext="Three founders, one mission — to make travel that matters."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mt-12"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={staggerItem}
              className="bg-white p-8 shadow-md hover:shadow-xl transition-shadow text-center"
            >
              <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden mb-6 border-4 border-gold-warm/30">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-cormorant text-2xl font-bold text-charcoal">
                {member.name}
              </h3>
              <span className="font-inter text-[11px] uppercase tracking-[2px] text-gold-rich mt-1 mb-4 block">
                {member.role}
              </span>
              <p className="font-inter text-sm text-charcoal/70 leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Timeline / Milestones */}
      <section className="py-20 px-4 bg-cream">
        <SectionHeading
          label="OUR JOURNEY"
          heading="Milestones"
          subtext="From one trek to 500+ journeys — the Zovara story so far."
        />
        <div className="max-w-3xl mx-auto mt-12">
          {milestones.map((milestone, i) => (
            <motion.div
              key={milestone.year}
              variants={revealVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="flex gap-6 pb-10 last:pb-0"
            >
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-saffron-mid flex items-center justify-center">
                  <span className="font-inter text-xs font-bold text-cream">{milestone.year}</span>
                </div>
                {i < milestones.length - 1 && (
                  <div className="w-px flex-1 bg-gold-warm/30 mt-2" />
                )}
              </div>
              <div className="pb-2">
                <h3 className="font-cormorant text-xl font-bold text-charcoal mb-2">
                  {milestone.title}
                </h3>
                <p className="font-inter text-sm text-charcoal/70 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-20 px-4 bg-navy-mid">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={staggerItem}>
              <CountUpStat
                target={stat.target}
                suffix={stat.suffix}
                label={stat.label}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-ivory">
        <SectionHeading
          label="OUR VALUES"
          heading="What We Stand For"
          subtext="The principles that guide every decision, every journey, every interaction."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                variants={staggerItem}
                className="bg-cream p-8 shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-14 h-14 rounded-full bg-gold-warm/10 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-gold-rich" />
                </div>
                <h3 className="font-cormorant text-2xl font-bold text-charcoal mb-3">
                  {value.title}
                </h3>
                <p className="font-inter text-sm text-charcoal/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-navy-deep">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={revealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-cream mb-4">
              Ready to Travel Differently?
            </h2>
            <p className="font-inter text-mist text-lg mb-8 max-w-xl mx-auto">
              Explore our destinations, browse our packages, or simply reach out. Every Zovara journey starts with a conversation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/packages"
                className="inline-flex items-center gap-2 bg-saffron-mid text-cream px-8 py-3.5 font-inter text-sm tracking-wide hover:bg-saffron-light transition-colors"
              >
                View Packages
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-cream/30 text-cream px-8 py-3.5 font-inter text-sm tracking-wide hover:bg-cream/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
