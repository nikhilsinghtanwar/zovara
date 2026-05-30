'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  FileText,
  Image as ImageIcon,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronRight,
  Mountain,
  Package,
} from 'lucide-react';

const sidebarSections = [
  {
    title: 'Manage Content',
    items: [
      { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
      { label: 'Blog Posts', href: '/admin/blog', icon: FileText },
      { label: 'Trip Packages', href: '/admin/packages', icon: Package },
    ],
  },
  {
    title: 'Media',
    items: [
      { label: 'Photo Gallery', href: '/admin/media', icon: ImageIcon },
    ],
  },
  {
    title: 'Settings',
    items: [
      { label: 'Site Settings', href: '/admin/settings', icon: Settings },
    ],
  },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    const email = localStorage.getItem('adminEmail');

    if (!token || !email) {
      if (pathname !== '/admin/login') {
        router.push('/admin/login');
        return;
      }
    }

    setAuthenticated(!!token);
    setChecking(false);
  }, [pathname, router]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminEmail');
    router.push('/admin/login');
  };

  if (checking) {
    return (
      <div className="min-h-screen bg-navy-deep flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Mountain className="w-10 h-10 text-gold-warm animate-pulse" />
          <p className="font-inter text-sm text-mist">Loading...</p>
        </div>
      </div>
    );
  }

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  if (!authenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-ivory flex">
      {/* Mobile overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy-deep/60 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-72 bg-navy-deep border-r border-gold-rich/20 flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-gold-rich/10">
          <Link href="/admin" className="flex items-center gap-3">
            <Mountain className="w-7 h-7 text-gold-warm" />
            <span className="font-cormorant text-xl font-bold text-cream tracking-wider">
              ZOVARA
            </span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-mist hover:text-cream transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav sections */}
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-8">
          {sidebarSections.map((section) => (
            <div key={section.title}>
              <p className="font-inter text-[10px] uppercase tracking-[3px] text-gold-rich/60 mb-3 px-3">
                {section.title}
              </p>
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setSidebarOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-inter text-sm transition-colors ${
                          isActive
                            ? 'bg-saffron-mid/15 text-saffron-mid font-semibold'
                            : 'text-mist hover:text-cream hover:bg-navy-mid/50'
                        }`}
                      >
                        <item.icon size={18} />
                        {item.label}
                        {isActive && (
                          <ChevronRight size={14} className="ml-auto" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gold-rich/10">
          <div className="flex items-center gap-3 px-3 py-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-saffron-mid/20 flex items-center justify-center">
              <span className="font-inter text-xs font-bold text-saffron-mid">
                {localStorage.getItem('adminEmail')?.[0]?.toUpperCase() || 'A'}
              </span>
            </div>
            <div className="min-w-0">
              <p className="font-inter text-xs font-medium text-cream truncate">
                {localStorage.getItem('adminEmail') || 'Admin'}
              </p>
              <p className="font-inter text-[10px] text-mist">Administrator</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg font-inter text-sm text-red-400 hover:text-red-300 hover:bg-red-400/10 transition-colors w-full"
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-16 bg-white border-b border-mist/20 flex items-center justify-between px-6 sticky top-0 z-20">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-charcoal hover:text-charcoal/70 transition-colors"
          >
            <Menu size={22} />
          </button>
          <div className="hidden lg:block">
            <p className="font-inter text-sm text-charcoal/60">
              {pathname === '/admin' && 'Dashboard'}
              {pathname === '/admin/blog' && 'Blog Posts'}
              {pathname === '/admin/packages' && 'Trip Packages'}
              {pathname === '/admin/packages/new' && 'Create New Trip'}
              {pathname === '/admin/media' && 'Photo Gallery'}
              {pathname === '/admin/settings' && 'Site Settings'}
            </p>
          </div>
          <Link
            href="/"
            target="_blank"
            className="font-inter text-xs text-saffron-mid hover:text-saffron-deep transition-colors"
          >
            View Website
          </Link>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
