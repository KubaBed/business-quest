/* Pasek logo klientów — zastępuje dawne „150 firm".
   Statyczny (bez animacji wejścia), logo w skali szarości, kolor na hover. */

const logos = [
  { src: "/images/clients/serwersms.webp", alt: "serwerSMS.pl" },
  { src: "/images/clients/vercom.webp", alt: "Vercom" },
  { src: "/images/clients/appchance.webp", alt: "Appchance" },
  { src: "/images/clients/contman.webp", alt: "Contman" },
];

export default function LogoStrip() {
  return (
    <section className="bg-brand-bg border-y border-brand-border py-10 lg:py-12">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8">
        <p className="text-center text-brand-muted text-xs font-semibold uppercase tracking-[0.18em] mb-8">
          Zaufali nam
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:gap-x-16">
          {logos.map((logo) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-7 lg:h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
