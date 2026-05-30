'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Lock, Mail, AlertCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Bypass System: Yeh bina kisi backend server ke aapko login karne dega
    setTimeout(() => {
      if (email === 'admin@zovara.com' && password === 'admin123') {
        localStorage.setItem('adminToken', 'zovara-bypass-token-2026');
        localStorage.setItem('adminEmail', email);
        router.push('/admin'); // Yeh aapko seedha dashboard par bhej dega
      } else {
        setError('Galt Email ya Password hai! Kripya sahi details dalein.');
        setLoading(false);
      }
    }, 1000); // 1 second ka artificial delay realistic feel ke liye
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-deep to-navy-mid flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md"
      >
        {/* Logo/Title */}
        <div className="text-center mb-10">
          <h1 className="font-cormorant text-4xl font-bold text-cream mb-2">
            Zovara Admin
          </h1>
          <p className="font-inter text-mist text-sm">
            Manage your travel experiences
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 bg-red-50 rounded-lg border border-red-200"
              >
                <AlertCircle size={20} className="text-red-600 flex-shrink-0" />
                <p className="font-inter text-sm text-red-600">{error}</p>
              </motion.div>
            )}

            {/* Email Field */}
            <div>
              <label className="block font-inter text-sm font-medium text-charcoal mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-mist" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                  className="w-full pl-10 pr-4 py-3 border border-mist/30 rounded-lg font-inter text-sm focus:outline-none focus:border-saffron-mid transition-colors disabled:opacity-50"
                  placeholder="admin@zovara.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block font-inter text-sm font-medium text-charcoal mb-2">
                Password
              </label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-mist" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                  className="w-full pl-10 pr-4 py-3 border border-mist/30 rounded-lg font-inter text-sm focus:outline-none focus:border-saffron-mid transition-colors disabled:opacity-50"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-saffron-mid text-cream py-3 font-inter text-sm font-semibold rounded-lg hover:bg-saffron-light transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="px-8 py-4 bg-ivory border-t border-mist/10">
            <p className="font-inter text-xs text-charcoal/60 text-center">
              Bypass Active - Use admin@zovara.com & admin123
            </p>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="font-inter text-sm text-cream/70 hover:text-cream transition-colors"
          >
            Back to Zovara
          </Link>
        </div>
      </motion.div>
    </div>
  );
}