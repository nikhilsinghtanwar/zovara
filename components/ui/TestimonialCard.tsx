import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  guestName: string;
  location: string;
  tripName: string;
}

export default function TestimonialCard({
  quote,
  guestName,
  location,
  tripName,
}: TestimonialCardProps) {
  return (
    <div className="bg-ivory rounded-lg p-8 flex flex-col gap-4">
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className="fill-gold-warm text-gold-warm"
          />
        ))}
      </div>

      {/* Opening quote mark */}
      <span className="font-cormorant text-[80px] leading-none text-gold-pale select-none">
        &ldquo;
      </span>

      {/* Quote text */}
      <p className="font-cormorant italic text-lg leading-relaxed -mt-6">
        {quote}
      </p>

      {/* Guest info */}
      <div className="mt-2 space-y-0.5">
        <p className="font-inter font-bold text-sm text-charcoal">
          {guestName}
        </p>
        <p className="font-inter text-xs text-mist">
          {location} &middot; {tripName}
        </p>
      </div>
    </div>
  );
}
