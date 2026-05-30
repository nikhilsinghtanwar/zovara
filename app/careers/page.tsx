'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Briefcase, ArrowRight, Check, Send, Mountain, Users, Leaf, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';

const revealVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface JobOpening {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  perks: string[];
}

const jobOpenings: JobOpening[] = [
  {
    id: 'travel-consultant',
    title: 'Travel Consultant',
    location: 'Jaipur, Rajasthan',
    type: 'Full-time',
    department: 'Operations',
    description: 'Join Zovara as a Travel Consultant and help craft unforgettable journeys across India\'s most extraordinary landscapes. You\'ll work directly with travellers to design custom itineraries, manage bookings, and ensure every trip exceeds expectations.',
    responsibilities: [
      'Design and customise travel itineraries for domestic destinations across North and Northeast India',
      'Handle end-to-end booking management — accommodations, transport, permits, and activities',
      'Build relationships with local partners, homestays, and guides across our 8 destinations',
      'Respond to customer enquiries via phone, email, and WhatsApp within SLA timelines',
      'Coordinate with operations team to ensure seamless on-ground execution',
      'Maintain detailed records of bookings, payments, and customer preferences',
      'Contribute to package development by sharing on-the-ground insights and traveller feedback',
    ],
    requirements: [
      '1–3 years experience in travel consulting, tour operations, or hospitality',
      'Deep knowledge of Indian travel destinations — especially Himalayan and Rajasthani routes',
      'Excellent communication skills in English and Hindi (additional languages a plus)',
      'Proficiency with booking platforms, CRM tools, and Google Workspace',
      'Strong organisational skills with attention to detail',
      'Passion for sustainable and responsible travel',
      'Willingness to travel to Zovara destinations for familiarisation trips',
    ],
    perks: [
      'Annual familiarisation trips to all Zovara destinations',
      'Health insurance and wellness allowance',
      'Flexible work arrangement (3 days office, 2 days remote)',
      'Performance-based quarterly bonuses',
      'Direct impact on traveller experiences and community outcomes',
    ],
  },
  {
    id: 'sales-executive',
    title: 'Sales Executive',
    location: 'Jaipur, Rajasthan',
    type: 'Full-time',
    department: 'Sales & Marketing',
    description: 'We\'re looking for a driven Sales Executive to grow Zovara\'s reach across India. You\'ll identify new market opportunities, build corporate partnerships, and convert leads into booked journeys — all while representing a brand that stands for responsible, premium travel.',
    responsibilities: [
      'Drive direct sales through inbound lead conversion and outbound prospecting',
      'Develop and manage corporate client relationships for group bookings and retreats',
      'Achieve monthly and quarterly sales targets with a consultative selling approach',
      'Represent Zovara at travel expos, corporate events, and partnership meetings',
      'Build and maintain a pipeline using CRM tools with accurate forecasting',
      'Collaborate with marketing on campaign strategy and lead generation initiatives',
      'Prepare custom proposals and presentations for corporate and group enquiries',
    ],
    requirements: [
      '1–3 years experience in sales — travel, hospitality, or premium lifestyle sectors preferred',
      'Proven track record of meeting or exceeding sales targets',
      'Strong negotiation and relationship-building skills',
      'Excellent communication in English and Hindi',
      'Comfort with CRM platforms (HubSpot, Zoho, or similar)',
      'Understanding of the Indian travel market and emerging consumer trends',
      'Self-motivated with an entrepreneurial mindset',
    ],
    perks: [
      'Competitive base salary + uncapped commission structure',
      'Annual familiarisation trips to Zovara destinations',
      'Health insurance and wellness allowance',
      'Smartphone and travel allowance for client meetings',
      'Clear growth path to Senior Sales Manager within 18–24 months',
    ],
  },
];

function HeroSection() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.pexels.com/photos/1277381/pexels-photo-1277381.jpeg?w=1600&fit=crop"
        alt="Team trekking"
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
          Join Our Team
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-cormorant text-[48px] md:text-[64px] font-bold text-cream leading-tight"
        >
          Careers at Zovara
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-inter text-mist text-lg mt-4 max-w-xl mx-auto"
        >
          Build a career that moves people — literally.
        </motion.p>
      </div>
    </section>
  );
}

function WhyZovaraSection() {
  const reasons = [
    {
      icon: Mountain,
      title: 'Work That Matters',
      description: 'Every booking you handle sends a traveller to the mountains and supports the communities that live there. Your work has real, visible impact.',
    },
    {
      icon: Users,
      title: 'Small Team, Big Reach',
      description: 'At Zovara, you\'re not a cog. You\'re a core part of a growing company where your ideas shape the product and your effort moves the needle.',
    },
    {
      icon: Leaf,
      title: 'Sustainability First',
      description: 'We don\'t just talk about responsible travel — we build it into every process. Working here means aligning your career with your values.',
    },
    {
      icon: Heart,
      title: 'Travel Perks',
      description: 'Annual familiarisation trips to our destinations. Experience what you sell. The mountains are part of your compensation package.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-cream">
      <SectionHeading
        label="WHY ZOVARA"
        heading="More Than a Job"
        subtext="A career where your work creates real impact — for travellers and for the communities we visit."
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
      >
        {reasons.map((reason) => (
          <motion.div key={reason.title} variants={staggerItem} className="bg-white p-8 shadow-md hover:shadow-xl transition-shadow">
            <reason.icon className="w-8 h-8 text-saffron-mid mb-4" />
            <h3 className="font-cormorant text-xl font-bold text-charcoal mb-3">{reason.title}</h3>
            <p className="font-inter text-sm text-charcoal/70 leading-relaxed">{reason.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function JobCard({ job }: { job: JobOpening }) {
  return (
    <motion.div
      variants={revealVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="bg-white shadow-md hover:shadow-xl transition-shadow"
    >
      {/* Header */}
      <div className="p-8 border-b border-charcoal/10">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="bg-saffron-mid/10 text-saffron-deep font-inter text-xs font-semibold px-3 py-1 rounded-sm">
            {job.department}
          </span>
          <span className="bg-navy-mid/10 text-navy-light font-inter text-xs font-semibold px-3 py-1 rounded-sm">
            {job.type}
          </span>
        </div>
        <h3 className="font-cormorant text-[28px] font-bold text-charcoal mb-3">{job.title}</h3>
        <p className="font-inter text-sm text-charcoal/70 leading-relaxed mb-4">{job.description}</p>
        <div className="flex flex-wrap gap-4 font-inter text-sm text-charcoal/60">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" /> {job.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" /> {job.type}
          </span>
          <span className="flex items-center gap-1.5">
            <Briefcase className="w-4 h-4" /> {job.department}
          </span>
        </div>
      </div>

      {/* Responsibilities */}
      <div className="p-8 border-b border-charcoal/10">
        <h4 className="font-cormorant text-xl font-bold text-charcoal mb-4">What You\'ll Do</h4>
        <ul className="space-y-2.5">
          {job.responsibilities.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="w-4 h-4 text-saffron-mid mt-0.5 flex-shrink-0" />
              <span className="font-inter text-sm text-charcoal/80">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Requirements */}
      <div className="p-8 border-b border-charcoal/10">
        <h4 className="font-cormorant text-xl font-bold text-charcoal mb-4">What We\'re Looking For</h4>
        <ul className="space-y-2.5">
          {job.requirements.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <ArrowRight className="w-4 h-4 text-navy-light mt-0.5 flex-shrink-0" />
              <span className="font-inter text-sm text-charcoal/80">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Perks */}
      <div className="p-8 border-b border-charcoal/10">
        <h4 className="font-cormorant text-xl font-bold text-charcoal mb-4">Why You\'ll Love It Here</h4>
        <ul className="space-y-2.5">
          {job.perks.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="w-4 h-4 text-gold-warm mt-0.5 flex-shrink-0" />
              <span className="font-inter text-sm text-charcoal/80">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Apply */}
      <div className="p-8 bg-ivory">
        <p className="font-inter text-sm text-charcoal/60 mb-4">
          Ready to join the journey? Send your resume and a brief note on why Zovara is right for you.
        </p>
        <a
          href="mailto:tanwarnikhil860@gmail.com?subject=Application for {job.title} at Zovara"
          className="inline-flex items-center gap-2 bg-saffron-mid text-cream px-8 py-3.5 font-inter text-sm tracking-wide hover:bg-saffron-light transition-colors"
        >
          <Send className="w-4 h-4" /> Apply Now
        </a>
      </div>
    </motion.div>
  );
}

function OpenPositionsSection() {
  return (
    <section className="py-20 px-4 bg-ivory">
      <SectionHeading
        label="OPEN POSITIONS"
        heading="Current Openings"
        subtext="We\'re growing. Find a role where your skills and passion for travel come together."
      />
      <div className="max-w-4xl mx-auto mt-12 space-y-12">
        {jobOpenings.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}

function NoFitSection() {
  return (
    <section className="py-20 px-4 bg-cream">
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeading
          label="DON'T SEE YOUR ROLE?"
          heading="We're Always Looking for Good People"
          subtext="If you share our values — responsible travel, community first, and a love for the mountains — we want to hear from you."
        />
        <div className="mt-8">
          <a
            href="mailto:tanwarnikhil860@gmail.com?subject=General Application for Zovara"
            className="inline-flex items-center gap-2 border-2 border-saffron-mid text-saffron-mid px-8 py-3.5 font-inter text-sm tracking-wide hover:bg-saffron-mid hover:text-cream transition-colors"
          >
            <Send className="w-4 h-4" /> Send Us Your Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default function CareersPage() {
  return (
    <>
      <HeroSection />
      <WhyZovaraSection />
      <OpenPositionsSection />
      <NoFitSection />
    </>
  );
}
