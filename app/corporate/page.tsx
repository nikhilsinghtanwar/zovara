'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Mountain,
  Globe,
  Compass,
  Users,
  MapPin,
  UserCheck,
  Settings,
  ArrowRight,
  Send,
  Quote,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const revealVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const offerings = [
  {
    icon: Mountain,
    title: 'Leadership Treks',
    description: 'Challenge your team on Himalayan trails designed to build resilience, trust, and strategic thinking. Guided by certified mountaineers with leadership coaching.',
  },
  {
    icon: Globe,
    title: 'Cultural Immersions',
    description: 'Deep-dive into India\'s living heritage with curated experiences in Rajasthan, Northeast India, and the Himalayas. Authentic, respectful, and transformative.',
  },
  {
    icon: Compass,
    title: 'Adventure Offsites',
    description: 'From river rafting in Ladakh to desert camping in Jaisalmer, design an offsite that your team will never forget. Fully managed end-to-end.',
  },
];

const benefits = [
  { icon: Users, title: 'Team Bonding', description: 'Shared challenges create lasting professional bonds' },
  { icon: MapPin, title: 'Custom Itineraries', description: 'Every program designed around your goals and culture' },
  { icon: UserCheck, title: '10-500 Guests', description: 'From leadership teams to company-wide retreats' },
  { icon: Settings, title: 'Fully Managed', description: 'Logistics, safety, food, permits — we handle it all' },
];

const clients = [
  'Himalayan Tech Corp',
  'Rajasthan Finance Group',
  'Indus Valley Partners',
  'Summit Capital Advisors',
];

export default function CorporatePage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    groupSize: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type: 'Corporate' }),
      });
    } catch {
      /* submission handled client-side */
    }
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[480px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/1277381/pexels-photo-1277381.jpeg?w=1600&fit=crop"
          alt="Corporate retreat in the mountains"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/50 to-navy-deep/80" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-cormorant text-[40px] md:text-[68px] font-bold text-cream leading-tight"
          >
            Extraordinary Retreats for Extraordinary Teams
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-inter text-lg text-mist mt-4"
          >
            Bespoke corporate journeys that strengthen teams, inspire leaders, and create stories worth telling.
          </motion.p>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="WHAT WE OFFER"
            heading="Corporate Experiences"
            subtext="Designed for teams that want more than a conference room."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          >
            {offerings.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow border border-mist/10"
              >
                <div className="w-14 h-14 rounded-full bg-saffron-pale flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7 text-saffron-mid" />
                </div>
                <h3 className="font-cormorant text-2xl font-bold text-charcoal mb-3">{item.title}</h3>
                <p className="font-inter text-sm text-charcoal/70 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-navy-mid">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="WHY ZOVARA"
            heading="Built for Business, Designed for Impact"
            theme="dark"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
          >
            {benefits.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gold-warm/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-gold-warm" />
                </div>
                <h3 className="font-cormorant text-xl font-bold text-cream mb-2">{item.title}</h3>
                <p className="font-inter text-sm text-mist">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Past Clients */}
      <section className="py-16 px-4 bg-ivory">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeading label="TRUSTED BY" heading="Companies That Trek With Us" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {clients.map((name) => (
              <motion.div
                key={name}
                variants={staggerItem}
                className="bg-white rounded-lg border border-mist/20 h-24 flex items-center justify-center"
              >
                <span className="font-cormorant text-lg font-semibold text-charcoal/40">{name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-2xl mx-auto">
          <SectionHeading
            label="GET STARTED"
            heading="Plan Your Corporate Retreat"
            subtext="Tell us about your team and we'll design something extraordinary."
          />
          <motion.div
            variants={revealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-12 bg-white rounded-lg p-8 shadow-md border border-mist/10"
          >
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="font-cormorant text-2xl font-bold text-charcoal mb-2">Enquiry Received</h3>
                <p className="font-inter text-sm text-charcoal/70">Our corporate team will reach out within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="type" value="Corporate" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-inter text-sm font-medium text-charcoal mb-1.5">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-mist/30 bg-ivory/50 font-inter text-sm focus:outline-none focus:border-saffron-mid transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block font-inter text-sm font-medium text-charcoal mb-1.5">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-mist/30 bg-ivory/50 font-inter text-sm focus:outline-none focus:border-saffron-mid transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-inter text-sm font-medium text-charcoal mb-1.5">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-mist/30 bg-ivory/50 font-inter text-sm focus:outline-none focus:border-saffron-mid transition-colors"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className="block font-inter text-sm font-medium text-charcoal mb-1.5">Group Size</label>
                    <input
                      type="text"
                      name="groupSize"
                      value={form.groupSize}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-mist/30 bg-ivory/50 font-inter text-sm focus:outline-none focus:border-saffron-mid transition-colors"
                      placeholder="e.g. 30-50"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-inter text-sm font-medium text-charcoal mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-mist/30 bg-ivory/50 font-inter text-sm focus:outline-none focus:border-saffron-mid transition-colors resize-none"
                    placeholder="Tell us about your goals, preferred dates, and any special requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-saffron-mid text-cream py-3.5 font-inter text-sm font-semibold tracking-wide hover:bg-saffron-light transition-colors flex items-center justify-center gap-2"
                >
                  Submit Enquiry
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-4 bg-navy-deep">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="w-10 h-10 text-gold-warm/40 mx-auto mb-6" />
          <motion.blockquote
            variants={revealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="font-cormorant text-[26px] md:text-[32px] font-medium text-cream leading-relaxed italic"
          >
            &ldquo;Zovara organized our annual leadership retreat in Dharamshala and it was transformative. The trek pushed our executives out of their comfort zones, and the cultural immersion gave us perspectives no conference room ever could. Our team still talks about that sunrise at Triund.&rdquo;
          </motion.blockquote>
          <div className="mt-8">
            <p className="font-inter text-sm font-semibold text-cream">Arun Mehta</p>
            <p className="font-inter text-xs text-mist mt-1">VP People & Culture, Summit Capital Advisors</p>
          </div>
        </div>
      </section>
    </>
  );
}
