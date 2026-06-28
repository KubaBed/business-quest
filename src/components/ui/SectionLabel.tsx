interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Three-dot brand motif */}
      <div className="flex items-end gap-0.5" aria-hidden>
        <span className="block w-1 h-1 rounded-full bg-magenta" />
        <span className="block w-1.5 h-1.5 rounded-full bg-magenta" />
        <span className="block w-2 h-2 rounded-full bg-magenta" />
      </div>
      <span className="text-magenta-deep text-xs font-semibold uppercase tracking-[0.14em]">
        {children}
      </span>
    </div>
  );
}
