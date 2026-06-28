/* Firewatch hero — illustrated cinemagraph (Giga-style).
   Server component; entrance is pure CSS (.fade-blur-up), so above-the-fold
   content is never gated on hydration. Used by the /hero2 route. */

const logos = ["Vercom", "Navireo", "Profitroom", "RocketJobs", "Sales Pistol"];

export default function HeroSectionFirewatch() {
  return (
    <section
      className="relative min-h-[100dvh] flex flex-col overflow-hidden"
      style={{ background: "#F5EDE4" }}
    >
      {/* Layer 1: Background video — illustrated cinemagraph (Giga-style) */}
      <video
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      >
        <source src="/videos/hero-cinemagraph.mp4" type="video/mp4" />
      </video>

      {/* Bottom blend — melts hero into the next section */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(0deg, #FAFAF8 0%, transparent 8%)" }}
      />

      {/* Layer 2: Content — upper portion, centered like Giga */}
      <div className="relative z-10 w-full max-w-[780px] mx-auto px-6 lg:px-8 pt-28 lg:pt-[8.5rem] flex flex-col items-center text-center">
        {/* Eyebrow — glass pill with pulsing dot */}
        <div className="fade-blur-up d1 mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/45 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-muted backdrop-blur-md">
            <span className="block w-1.5 h-1.5 rounded-full bg-magenta animate-pulse" />
            HR Consulting
          </span>
        </div>

        {/* H1 — no gradient text on large headers (taste skill §7) */}
        <h1 className="fade-blur-up d2 text-[2.2rem] sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-brand-text text-balance mb-4">
          Twój pierwszy
          <br />
          zespół <span className="text-magenta-deep">HR</span>
        </h1>

        {/* Sub — original businessquest copy */}
        <p className="fade-blur-up d3 text-brand-muted text-[15px] lg:text-base leading-relaxed max-w-[48ch] mb-7">
          W&nbsp;wielu małych firmach tematy ludzi trafiają na biurko właściciela.
          Rekrutacja. Trudna rozmowa z&nbsp;pracownikiem. Decyzja o&nbsp;zmianie
          w&nbsp;zespole. Pomagamy prowadzić te sprawy tak, żeby właściciel nie
          musiał zajmować się nimi sam.
        </p>

        {/* CTA — minimal white glass pill (Giga style) */}
        <div className="fade-blur-up d4">
          <a
            href="#kontakt"
            className="inline-flex items-center rounded-full border border-white/80 bg-white/75 px-7 py-3 text-sm font-semibold text-brand-text shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/[0.92] hover:shadow-[0_8px_24px_-6px_rgba(0,0,0,0.12)] active:scale-[0.97]"
          >
            Porozmawiajmy
          </a>
        </div>
      </div>

      {/* Layer 3: Client logos bar — bottom of hero, like Giga */}
      <div className="fade-blur-up d5 absolute bottom-0 inset-x-0 z-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-3 border-t border-black/[0.04] bg-brand-bg/60 px-8 py-5 backdrop-blur-md">
        {logos.map((name) => (
          <span
            key={name}
            className="whitespace-nowrap text-[15px] font-bold tracking-[0.01em] text-brand-muted opacity-50 transition-opacity duration-300 hover:opacity-80"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
