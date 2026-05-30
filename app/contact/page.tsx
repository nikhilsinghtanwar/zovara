'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
  ChevronDown,
  CheckCircle,
  Send,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { faqs } from '@/lib/data';

/* ── Destination list for dropdown ── */
const destinations = [
  'Dharamshala & McLeod Ganj',
  'Spiti Valley',
  'Ladakh & Zanskar',
  'Kedarkantha',
  'Rajasthan',
  'Northeast India',
  'Sikkim',
  'Chopta & Tungnath',
  'Not sure yet',
];

const tripTypes = [
  'Trekking',
  'Cultural',
  'Eco Retreat',
  'Luxury',
  'Corporate',
  'Weekend',
];

const hearAboutOptions = [
  'Instagram',
  'Google',
  'Friend',
  'Blog',
  'Other',
];

/* ── Zod schema ── */
const contactSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian phone number'),
  destination: z.string().min(1, 'Please select a destination'),
  travelDate: z.string().optional(),
  groupSize: z
    .number({ invalid_type_error: 'Group size must be a number' })
    .int()
    .min(1, 'Minimum 1 traveller')
    .max(50, 'Maximum 50 travellers')
    .optional(),
  tripType: z.string().optional(),
  message: z.string().optional(),
  hearAbout: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

/* ── FAQ Accordion Item ── */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-charcoal/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-inter text-base font-medium text-charcoal group-hover:text-saffron-mid transition-colors pr-4">
          {question}
        </span>
        <ChevronDown
          size={18}
          className={`text-mist flex-shrink-0 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="font-inter text-sm text-charcoal/70 leading-relaxed pb-5">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      destination: '',
      travelDate: '',
      groupSize: undefined,
      tripType: '',
      message: '',
      hearAbout: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
      reset();
    } catch {
      // handle error silently — form stays visible for retry
    }
  };

  return (
    <main className="min-h-screen bg-cream">
      {/* ── Hero ── */}
      <section className="relative h-[50vh] min-h-[380px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?w=1600&fit=crop"
          alt="Contact Zovara"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy-deep/70" />

        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="font-cormorant text-5xl md:text-6xl lg:text-7xl text-white font-semibold"
          >
            Get in Touch
          </motion.h1>

          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 flex items-center justify-center gap-1.5 font-inter text-sm text-cream/80"
          >
            <Link href="/" className="hover:text-gold-warm transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-gold-pale">Contact</span>
          </motion.nav>
        </div>
      </section>

      {/* ── Two-column layout ── */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ── Left: Enquiry Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-cormorant text-[36px] md:text-[42px] font-bold text-charcoal mb-2">
              Plan Your Journey
            </h2>
            <p className="font-inter text-charcoal/60 mb-8">
              Fill in the details below and we&apos;ll craft the perfect trip for you.
            </p>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-sm p-8 text-center">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-cormorant text-2xl font-bold text-green-800 mb-2">
                  Enquiry Sent Successfully!
                </h3>
                <p className="font-inter text-sm text-green-700 mb-6">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="font-inter text-sm text-saffron-mid hover:text-saffron-deep transition-colors"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block font-inter text-sm font-medium text-charcoal mb-1.5">
                    Full Name <span className="text-saffron-deep">*</span>
                  </label>
                  <input
                    {...register('fullName')}
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-charcoal/20 bg-white font-inter text-sm focus:outline-none focus:border-saffron-mid transition-colors"
                  />
                  {errors.fullName && (
                    <p className="font-inter text-xs text-red-600 mt-1">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block font-inter text-sm font-medium text-charcoal mb-1.5">
                    Email Address <span className="text-saffron-deep">*</span>
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-charcoal/20 bg-white font-inter text-sm focus:outline-none focus:border-saffron-mid transition-colors"
                  />
                  {errors.email && (
                    <p className="font-inter text-xs text-red-600 mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block font-inter text-sm font-medium text-charcoal mb-1.5">
                    Phone Number <span className="text-saffron-deep">*</span>
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 border border-r-0 border-charcoal/20 bg-ivory font-inter text-sm text-charcoal/70">
                      +91
                    </span>
                    <input
                      {...register('phone')}
                      type="tel"
                      placeholder="6377434103"
                      className="flex-1 px-4 py-3 border border-charcoal/20 bg-white font-inter text-sm focus:outline-none focus:border-saffron-mid transition-colors"
                    />
                  </div>
                  {errors.phone && (
                    <p className="font-inter text-xs text-red-600 mt-1">{errors.phone.message}</p>
                  )}
                </div>

                {/* Destination of Interest */}
                <div>
                  <label className="block font-inter text-sm font-medium text-charcoal mb-1.5">
                    Destination of Interest <span className="text-saffron-deep">*</span>
                  </label>
                  <select
                    {...register('destination')}
                    className="w-full px-4 py-3 border border-charcoal/20 bg-white font-inter text-sm focus:outline-none focus:border-saffron-mid transition-colors"
                  >
                    <option value="">Select a destination</option>
                    {destinations.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                  {errors.destination && (
                    <p className="font-inter text-xs text-red-600 mt-1">{errors.destination.message}</p>
                  )}
                </div>

                {/* Date and Group Size Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Preferred Travel Dates */}
                  <div>
                    <label className="block font-inter text-sm font-medium text-charcoal mb-1.5">
                      Preferred Travel Dates
                    </label>
                    <input
                      {...register('travelDate')}
                      type="date"
                      className="w-full px-4 py-3 border border-charcoal/20 bg-white font-inter text-sm focus:outline-none focus:border-saffron-mid transition-colors"
                    />
                  </div>

                  {/* Group Size */}
                  <div>
                    <label className="block font-inter text-sm font-medium text-charcoal mb-1.5">
                      Group Size
                    </label>
                    <input
                      {...register('groupSize', { valueAsNumber: true })}
                      type="number"
                      min={1}
                      max={50}
                      placeholder="1-50"
                      className="w-full px-4 py-3 border border-charcoal/20 bg-white font-inter text-sm focus:outline-none focus:border-saffron-mid transition-colors"
                    />
                    {errors.groupSize && (
                      <p className="font-inter text-xs text-red-600 mt-1">{errors.groupSize.message}</p>
                    )}
                  </div>
                </div>

                {/* Type of Trip */}
                <div>
                  <label className="block font-inter text-sm font-medium text-charcoal mb-1.5">
                    Type of Trip
                  </label>
                  <select
                    {...register('tripType')}
                    className="w-full px-4 py-3 border border-charcoal/20 bg-white font-inter text-sm focus:outline-none focus:border-saffron-mid transition-colors"
                  >
                    <option value="">Select trip type</option>
                    {tripTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-inter text-sm font-medium text-charcoal mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    placeholder="Tell us about your dream trip..."
                    className="w-full px-4 py-3 border border-charcoal/20 bg-white font-inter text-sm focus:outline-none focus:border-saffron-mid transition-colors resize-none"
                  />
                </div>

                {/* How did you hear about us? */}
                <div>
                  <label className="block font-inter text-sm font-medium text-charcoal mb-1.5">
                    How did you hear about us?
                  </label>
                  <select
                    {...register('hearAbout')}
                    className="w-full px-4 py-3 border border-charcoal/20 bg-white font-inter text-sm focus:outline-none focus:border-saffron-mid transition-colors"
                  >
                    <option value="">Select an option</option>
                    {hearAboutOptions.map((h) => (
                      <option key={h} value={h}>
                        {h}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-saffron-mid text-cream py-3.5 font-inter text-sm font-semibold tracking-wide hover:bg-saffron-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                </button>
              </form>
            )}
          </motion.div>

          {/* ── Right: Contact Info Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-navy-mid p-8 md:p-10 text-cream">
              <h3 className="font-cormorant text-2xl md:text-3xl font-bold text-cream mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-gold-warm flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-inter text-sm text-cream/80">
                      Jaipur, Rajasthan, India
                    </p>
                    <p className="font-inter text-sm text-cream/80">302001</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-gold-warm flex-shrink-0 mt-0.5" />
                  <a
                    href="tel:+916377434103"
                    className="font-inter text-sm text-cream/80 hover:text-gold-warm transition-colors"
                  >
                    +91 6377434103
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-gold-warm flex-shrink-0 mt-0.5" />
                  <a
                    href="mailto:tanwarnikhil860@gmail.com"
                    className="font-inter text-sm text-cream/80 hover:text-gold-warm transition-colors"
                  >
                    tanwarnikhil860@gmail.com
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <MessageCircle className="w-5 h-5 text-gold-warm flex-shrink-0 mt-0.5" />
                  <a
                    href="https://wa.me/916377434103"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-sm text-cream/80 hover:text-gold-warm transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-gold-warm flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-inter text-sm text-cream/80 font-medium">
                      Business Hours
                    </p>
                    <p className="font-inter text-sm text-cream/60">
                      Monday&ndash;Saturday, 9:00 AM &ndash; 7:00 PM IST
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4 border-t border-gold-warm/10">
                  <p className="font-inter text-xs uppercase tracking-[2px] text-gold-rich mb-4">
                    Follow Us
                  </p>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://instagram.com/zovara.travel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-gold-warm/20 flex items-center justify-center hover:bg-gold-warm/10 transition-colors"
                    >
                      <Instagram size={18} className="text-gold-warm" />
                    </a>
                    <a
                      href="https://facebook.com/zovara.travel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-gold-warm/20 flex items-center justify-center hover:bg-gold-warm/10 transition-colors"
                    >
                      <Facebook size={18} className="text-gold-warm" />
                    </a>
                    <a
                      href="https://youtube.com/@zovara.travel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-gold-warm/20 flex items-center justify-center hover:bg-gold-warm/10 transition-colors"
                    >
                      <Youtube size={18} className="text-gold-warm" />
                    </a>
                    <span className="font-inter text-sm text-cream/60">
                      @zovara.travel
                    </span>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-6 bg-navy-deep rounded-sm h-48 flex flex-col items-center justify-center gap-2">
                  <MapPin className="w-8 h-8 text-gold-warm" />
                  <p className="font-inter text-sm text-cream/60 text-center">
                    Jaipur, Rajasthan, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ Mini-Section ── */}
      <section className="py-20 px-4 bg-ivory">
        <div className="max-w-3xl mx-auto">
          <SectionHeading label="FAQ" heading="Common Questions" />
          <div className="mt-12">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
