'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { destinations, packages } from '@/lib/data';

const navLinks = [
  { label: 'Destinations', href: '/destinations', hasDropdown: true },
  { label: 'Packages', href: '/packages', hasDropdown: true },
  { label: 'About', href: '/about', hasDropdown: false },
  { label: 'Blog', href: '/blog', hasDropdown: false },
  { label: 'Gallery', href: '/gallery', hasDropdown: false },
  { label: 'Contact', href: '/contact', hasDropdown: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-deep border-b border-gold-rich/30'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-cormorant font-bold text-2xl sm:text-3xl tracking-widest text-cream"
          >
            ZOVARA
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasDropdown && handleMouseEnter(link.label)}
                onMouseLeave={link.hasDropdown ? handleMouseLeave : undefined}
              >
                <Link
                  href={link.href}
                  className="font-inter text-[13px] tracking-wide uppercase text-cream/80 hover:text-cream px-4 py-2 transition-colors"
                >
                  {link.label}
                </Link>

                {/* Destinations Dropdown */}
                <AnimatePresence>
                  {link.hasDropdown && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="absolute top-full left-0 mt-0 w-64 bg-navy-mid border border-gold-rich/20 rounded-lg shadow-2xl overflow-hidden"
                    >
                      <div className="py-2">
                        {link.label === 'Destinations' &&
                          destinations.map((dest) => (
                            <Link
                              key={dest.id}
                              href={`/destinations/${dest.id}`}
                              className="block px-5 py-2.5 font-inter text-sm text-mist hover:text-cream hover:bg-navy-light/50 transition-colors"
                            >
                              {dest.name}
                            </Link>
                          ))}
                        {link.label === 'Packages' &&
                          packages.map((pkg) => (
                            <Link
                              key={pkg.id}
                              href={`/packages/${pkg.id}`}
                              className="block px-5 py-2.5 font-inter text-sm text-mist hover:text-cream hover:bg-navy-light/50 transition-colors"
                            >
                              {pkg.title}
                            </Link>
                          ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Desktop Book Now + Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center justify-center px-5 py-2 bg-saffron-mid text-cream font-inter text-sm font-medium tracking-wide rounded hover:bg-saffron-light transition-colors"
            >
              Book Now
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
              aria-label="Toggle mobile menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-cream origin-center"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-0.5 bg-cream"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-cream origin-center"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 left-0 bg-navy-deep z-40 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col min-h-screen px-6 pt-20 pb-8">
              {/* Close button area - logo right-aligned */}
              <div className="flex items-center justify-between mb-8">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="font-cormorant font-bold text-2xl tracking-widest text-cream"
                >
                  ZOVARA
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 flex items-center justify-center text-cream"
                  aria-label="Close menu"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-inter text-lg tracking-wide uppercase text-cream/90 hover:text-cream py-3 border-b border-mist/10 transition-colors block"
                    >
                      {link.label}
                    </Link>

                    {/* Destinations sub-links */}
                    {link.label === 'Destinations' && (
                      <div className="pl-4 pb-2">
                        {destinations.map((dest) => (
                          <Link
                            key={dest.id}
                            href={`/destinations/${dest.id}`}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 font-inter text-sm text-mist hover:text-gold-warm transition-colors"
                          >
                            {dest.name}
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Packages sub-links */}
                    {link.label === 'Packages' && (
                      <div className="pl-4 pb-2">
                        {packages.map((pkg) => (
                          <Link
                            key={pkg.id}
                            href={`/packages/${pkg.id}`}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 font-inter text-sm text-mist hover:text-gold-warm transition-colors"
                          >
                            {pkg.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Book Now at bottom */}
              <div className="mt-8 pt-6 border-t border-mist/10">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full px-5 py-3 bg-saffron-mid text-cream font-inter text-base font-medium tracking-wide rounded hover:bg-saffron-light transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
