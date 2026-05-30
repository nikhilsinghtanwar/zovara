interface SectionHeadingProps {
  label: string;
  heading: string;
  subtext?: string;
  align?: 'center' | 'left';
  theme?: 'light' | 'dark';
}

export default function SectionHeading({
  label,
  heading,
  subtext,
  align = 'center',
  theme = 'light',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignment} gap-3`}>
      <span
        className="font-inter text-[11px] uppercase tracking-[3px] text-gold-rich"
      >
        {label}
      </span>
      <h2
        className="font-cormorant text-[30px] leading-tight md:text-[42px] font-semibold"
      >
        {heading}
      </h2>
      <div className="w-10 h-[3px] bg-gold-warm rounded-full" />
      {subtext && (
        <p
          className={`font-inter text-base leading-relaxed max-w-2xl ${
            theme === 'dark' ? 'text-mist' : 'text-charcoal'
          }`}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}
