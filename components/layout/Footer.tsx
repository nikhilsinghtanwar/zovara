'use client';

import Link from 'next/link';
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { destinations, packages } from '@/lib/data';

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Corporate Travel', href: '/corporate' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'Press', href: '/press' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-mist">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1 - Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="font-cormorant font-bold text-2xl tracking-widest text-cream"
            >
              ZOVARA
            </Link>
            <p className="mt-3 font-cormorant italic text-lg text-gold-warm">
              Where the Journey Becomes the Destination
            </p>
            <p className="mt-4 font-inter text-sm text-mist leading-relaxed">
              Zovara is a mindful travel company crafting immersive journeys
              across India&apos;s most extraordinary landscapes. From Himalayan
              treks to desert expeditions, we design experiences that connect
              you deeply with place, people, and purpose.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.instagram.com/zovara.travel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-mist hover:text-gold-warm transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/ZovaraTravel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-mist hover:text-gold-warm transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.youtube.com/@ZovaraTravel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-mist hover:text-gold-warm transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Destinations */}
          <div>
            <h3 className="font-inter text-sm font-semibold tracking-wide uppercase text-cream mb-4">
              Destinations
            </h3>
            <ul className="space-y-2.5">
              {destinations.map((dest) => (
                <li key={dest.id}>
                  <Link
                    href={`/destinations/${dest.id}`}
                    className="font-inter text-sm text-mist hover:text-gold-warm transition-colors"
                  >
                    {dest.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Packages */}
          <div>
            <h3 className="font-inter text-sm font-semibold tracking-wide uppercase text-cream mb-4">
              Packages
            </h3>
            <ul className="space-y-2.5">
              {packages.map((pkg) => (
                <li key={pkg.id}>
                  <Link
                    href={`/packages/${pkg.id}`}
                    className="font-inter text-sm text-mist hover:text-gold-warm transition-colors"
                  >
                    {pkg.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Company */}
          <div>
            <h3 className="font-inter text-sm font-semibold tracking-wide uppercase text-cream mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-mist hover:text-gold-warm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 - Contact */}
          <div>
            <h3 className="font-inter text-sm font-semibold tracking-wide uppercase text-cream mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold-warm" />
                <span className="font-inter text-sm text-mist leading-relaxed">
                  Jaipur, Rajasthan, India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-gold-warm" />
                <a
                  href="tel:+916377434103"
                  className="font-inter text-sm text-mist hover:text-gold-warm transition-colors"
                >
                  +91 6377434103
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold-warm" />
                <a
                  href="mailto:tanwarnikhil860@gmail.com"
                  className="font-inter text-sm text-mist hover:text-gold-warm transition-colors break-all"
                >
                  tanwarnikhil860@gmail.com
                </a>
              </li>
            </ul>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/916377434103"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 bg-[#25D366] text-white font-inter text-sm font-medium rounded hover:bg-[#1ebe57] transition-colors"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-mist/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-inter text-sm text-mist">
            &copy; 2025 Zovara. All rights reserved.
          </p>
          <p className="font-inter text-sm text-mist">
            Crafted with &hearts; in Jaipur
          </p>
        </div>
      </div>
    </footer>
  );
}
