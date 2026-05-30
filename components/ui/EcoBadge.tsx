import { Leaf, Check } from 'lucide-react';

interface EcoBadgeProps {
  label: string;
  icon?: 'leaf' | 'check';
}

const iconMap = {
  leaf: Leaf,
  check: Check,
} as const;

export default function EcoBadge({ label, icon = 'leaf' }: EcoBadgeProps) {
  const Icon = iconMap[icon];

  return (
    <span className="inline-flex items-center gap-1.5 bg-navy-mid text-gold-pale text-xs font-inter font-medium px-3 py-1 rounded-sm">
      <Icon size={12} />
      {label}
    </span>
  );
}
