import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Zovara Travel — Premium Travel Experiences in India',
  description: 'Handcrafted journeys across India\'s most extraordinary landscapes — Himalayan treks, cultural heritage tours, eco-nature retreats, and luxury travel. Based in Jaipur, Rajasthan.',
  keywords: ['travel India', 'Himalayan treks', 'eco tourism', 'Zovara', 'luxury travel India', 'adventure travel', 'Dharamshala', 'Ladakh', 'Spiti', 'Kedarkantha'],
  openGraph: {
    title: 'Zovara Travel — Premium Travel Experiences in India',
    description: 'Handcrafted journeys across India\'s most extraordinary landscapes.',
    url: 'https://zovara.com',
    siteName: 'Zovara Travel',
    images: [{ url: 'https://images.pexels.com/photos/2905950/pexels-photo-2905950.jpeg?w=1200&fit=crop', width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-inter text-charcoal bg-cream antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
