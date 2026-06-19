import { clientLogos } from "@/data/clients";

/* Przewijający się pasek logotypów klientów (marquee). */
export default function LogoMarquee({ label }: { label?: string }) {
  const items = [...clientLogos, ...clientLogos];

  return (
    <div>
      {label && (
        <p className="text-brand-muted text-xs font-semibold uppercase tracking-[0.18em] mb-5">
          {label}
        </p>
      )}
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex items-center gap-12 w-max animate-marquee">
          {items.map((logo, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              aria-hidden={i >= clientLogos.length}
              className="h-7 w-auto object-contain grayscale opacity-55 shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
