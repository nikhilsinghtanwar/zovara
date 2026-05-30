'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const waUrl =
    'https://wa.me/916377434103?text=Hi%20Zovara%2C%20I%20want%20to%20book%20a%20trip!';

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip */}
      <span className="absolute bottom-full right-0 mb-2 whitespace-nowrap rounded bg-charcoal px-3 py-1.5 text-xs font-inter text-cream opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us
      </span>

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />

      {/* Button */}
      <motion.a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[#25D366] shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} className="text-white" />
      </motion.a>
    </div>
  );
}
