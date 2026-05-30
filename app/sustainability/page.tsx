'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Recycle, Users, Mountain, BadgeCheck, Heart, TreePine, Badge } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

/* ── Animation variants ── */
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

/* ── Three pillars data ── */
const pillars = [
  {
    title: 'Zero Plastic Policy',
    image: 'https://images.pexels.com/photos/2905950/pexels-photo-2905950.jpeg?w=800&fit=crop',
    icon: Recycle,
    description: [
      'No single-use plastic on any Zovara trip — not even the convenient ones. Every guest receives a reusable water bottle and eco-pouch on arrival.',
      'Our waste carry-back pouches ensure that every wrapper, every piece of litter, and every leftover leaves the trail with you. Nothing stays behind.',
      'We work with local partners to eliminate plastic from the supply chain — from packed lunches in reusable containers to bamboo cutlery at every campsite.',
    ],
  },
  {
    title: 'Community First',
    image: 'https://images.pexels.com/photos/2442496/pexels-photo-2442496.jpeg?w=800&fit=crop',
    icon: Users,
    description: [
      'Every Zovara guide is local. Not just from the region — from the very villages and trails you\'ll explore. 100% certified, 100% from the community.',
      'We use homestays instead of hotel chains, source food within 50km wherever possible, and direct a portion of every booking into community funds.',
      'When you travel with Zovara, your money stays in the mountains. It feeds families, funds schools, and keeps these communities thriving for generations.',
    ],
  },
  {
    title: 'Low-Impact Trekking',
    image: 'https://images.pexels.com/photos/674735/pexels-photo-674735.jpeg?w=800&fit=crop',
    icon: Mountain,
    description: [
      'Every group receives a comprehensive leave-no-trace briefing before departure. Certified guides ensure every step you take respects the ecosystem.',
      'Maximum 16 guests per departure keeps our impact minimal and the experience intimate. Small groups mean less wear on trails, quieter camps, and deeper connections.',
      'We rotate trails seasonally to prevent overuse, partner with forest departments for conservation, and carry out waste audits after every trek.',
    ],
  },
];

/* ── Certifications data ── */
const certifications = [
  { title: 'Eco-Certified Travel', icon: BadgeCheck },
  { title: 'Responsible Tourism India', icon: Heart },
  { title: 'Leave No Trace Certified', icon: TreePine },
  { title: 'IATO Member', icon: Badge },
];

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* ── Hero ── */}
      <section className="relative h-[50vh] min-h-[380px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?w=1600&fit=crop"
          alt="Our Eco Commitment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy-deep/70" />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="font-cormorant text-5xl md:text-6xl lg:text-7xl text-white font-semibold"
          >
            Our Eco Commitment
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 font-cormorant italic text-xl text-cream"
          >
            Travel that heals the places it visits
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
            <span className="text-gold-pale">Sustainability</span>
          </motion.nav>
        </div>
      </section>

      {/* ── Three Pillar Alternating Sections ── */}
      {pillars.map((pillar, i) => {
        const Icon = pillar.icon;
        const isReversed = i % 2 !== 0;

        return (
          <section
            key={pillar.title}
            className={`py-20 px-4 ${i % 2 === 0 ? 'bg-cream' : 'bg-ivory'}`}
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <motion.div
                variants={revealVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className={`relative h-[400px] overflow-hidden ${
                  isReversed ? 'order-2 lg:order-1' : 'order-1'
                }`}
              >
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Text */}
              <motion.div
                variants={revealVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className={`${isReversed ? 'order-1 lg:order-2' : 'order-2'}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gold-warm/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gold-rich" />
                  </div>
                  <h2 className="font-cormorant text-[36px] md:text-[42px] font-bold text-charcoal">
                    {pillar.title}
                  </h2>
                </div>
                <div className="space-y-4">
                  {pillar.description.map((para, j) => (
                    <p key={j} className="font-inter text-charcoal/80 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* ── Certifications Row ── */}
      <section className="py-20 px-4 bg-navy-mid">
        <SectionHeading label="CERTIFICATIONS" heading="Recognised For Responsibility" theme="dark" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {certifications.map((cert) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                variants={staggerItem}
                className="border border-gold-warm/20 rounded-sm py-8 px-4 flex flex-col items-center text-center gap-3"
              >
                <Icon className="w-8 h-8 text-gold-warm" />
                <span className="font-inter text-sm text-cream font-medium">
                  {cert.title}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ── Carbon Offset Section ── */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={revealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col md:flex-row items-start gap-8"
          >
            <div className="w-16 h-16 rounded-full bg-gold-warm/10 flex items-center justify-center flex-shrink-0">
              <TreePine className="w-8 h-8 text-gold-rich" />
            </div>
            <div>
              <h2 className="font-cormorant text-[36px] md:text-[42px] font-bold text-charcoal mb-4">
                Carbon Offset Programme
              </h2>
              <p className="font-inter text-charcoal/80 leading-relaxed mb-4">
                Every Zovara journey has a carbon footprint — we don&apos;t pretend otherwise. What we
                do is calculate the emissions from every flight, drive, and campfire associated with
                your trip, and offset them completely through verified Indian reforestation projects.
              </p>
              <p className="font-inter text-charcoal/80 leading-relaxed mb-4">
                We partner with certified carbon offset programmes that plant and maintain trees in
                degraded ecosystems across India. Every sapling is tracked, every tonne of CO2 is
                accounted for, and every guest receives a carbon-offset certificate with their booking.
              </p>
              <p className="font-inter text-charcoal/80 leading-relaxed">
                Our goal isn&apos;t just carbon neutrality — it&apos;s carbon positivity. By 2026, we aim
                to offset 150% of our total emissions, making every Zovara journey a net-positive
                force for the planet.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
