import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-deep flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
      {/* Mountain silhouette SVG */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-auto"
          preserveAspectRatio="none"
          style={{ maxHeight: '45vh' }}
        >
          {/* Far mountains */}
          <path
            fill="#112240"
            d="M0,320 L0,200 Q80,120 160,180 Q240,80 360,160 Q440,60 560,140 Q640,40 720,120 Q800,30 880,100 Q960,20 1080,90 Q1160,10 1280,80 Q1360,40 1440,60 L1440,320 Z"
          />
          {/* Mid mountains */}
          <path
            fill="#1E3A5F"
            d="M0,320 L0,240 Q100,160 200,220 Q300,120 420,200 Q520,100 640,180 Q740,80 860,160 Q960,60 1080,140 Q1180,80 1300,140 Q1380,100 1440,120 L1440,320 Z"
          />
          {/* Near mountains */}
          <path
            fill="#2E5080"
            d="M0,320 L0,280 Q120,220 240,260 Q360,200 480,250 Q600,180 720,230 Q840,170 960,220 Q1080,180 1200,220 Q1320,190 1440,210 L1440,320 Z"
          />
          {/* Snow caps on far mountains */}
          <path
            fill="#FAF6F0"
            opacity="0.15"
            d="M160,180 L180,140 L200,160 Z M360,160 L380,110 L400,140 Z M560,140 L580,85 L600,115 Z M720,120 L740,60 L760,95 Z M880,100 L900,50 L920,80 Z M1080,90 L1100,35 L1120,70 Z M1280,80 L1300,30 L1320,60 Z"
          />
          {/* Stars */}
          <circle cx="200" cy="50" r="1.5" fill="#F5D98A" opacity="0.6" />
          <circle cx="400" cy="30" r="1" fill="#F5D98A" opacity="0.5" />
          <circle cx="600" cy="60" r="1.5" fill="#F5D98A" opacity="0.4" />
          <circle cx="800" cy="20" r="1" fill="#F5D98A" opacity="0.6" />
          <circle cx="1000" cy="50" r="1.5" fill="#F5D98A" opacity="0.5" />
          <circle cx="1200" cy="35" r="1" fill="#F5D98A" opacity="0.4" />
          <circle cx="300" cy="80" r="1" fill="#F5D98A" opacity="0.3" />
          <circle cx="700" cy="90" r="1" fill="#F5D98A" opacity="0.3" />
          <circle cx="1100" cy="70" r="1" fill="#F5D98A" opacity="0.3" />
          <circle cx="500" cy="15" r="1.2" fill="#F5D98A" opacity="0.5" />
          <circle cx="900" cy="45" r="1.2" fill="#F5D98A" opacity="0.4" />
          <circle cx="1300" cy="15" r="1.2" fill="#F5D98A" opacity="0.5" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 mb-20">
        <p className="font-inter text-[11px] tracking-[4px] uppercase text-gold-warm mb-6">404 — Page Not Found</p>
        <h1 className="font-cormorant text-[40px] md:text-[64px] font-bold text-cream leading-tight mb-4">
          You&apos;ve wandered off the trail.
        </h1>
        <p className="font-inter text-lg text-mist mb-8 max-w-md mx-auto">
          This page doesn&apos;t exist, but the mountains do.
        </p>
        <Link
          href="/"
          className="inline-block bg-saffron-mid text-cream px-8 py-3.5 font-inter text-sm tracking-wide hover:bg-saffron-light transition-colors"
        >
          Take Me Home
        </Link>
      </div>
    </div>
  );
}
