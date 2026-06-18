import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  uslugi: [
    { label: "Konsulting HR", href: "#uslugi" },
    { label: "Warsztaty liderskie", href: "#warsztaty" },
    { label: "Webinary", href: "#webinary" },
    { label: "Rozwój zespołów", href: "#rozwoj" },
  ],
  firma: [
    { label: "O nas", href: "#zespol" },
    { label: "Opinie klientów", href: "#opinie" },
    { label: "Blog", href: "#blog" },
    { label: "Kontakt", href: "#kontakt" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#120810" }}>
      {/* Decorative three-dot watermark */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 opacity-[0.04] pointer-events-none" aria-hidden>
        <div className="w-16 h-16 rounded-full bg-magenta" />
        <div className="w-10 h-10 rounded-full bg-magenta" />
        <div className="w-6 h-6 rounded-full bg-magenta" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="businessQuest"
              width={160}
              height={48}
              className="h-8 w-auto object-contain brightness-0 invert mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Relacje. Wyniki. Wzrost.
              <br />
              HR i rozwój liderów dla nowoczesnych organizacji.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-magenta hover:bg-magenta/20 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-magenta hover:bg-magenta/20 transition-all duration-200"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Usługi */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Usługi</h4>
            <ul className="space-y-3">
              {footerLinks.uslugi.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/50 hover:text-white text-sm transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Firma */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Firma</h4>
            <ul className="space-y-3">
              {footerLinks.firma.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/50 hover:text-white text-sm transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div id="kontakt">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Kontakt</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li>
                <a href="mailto:hello@businessquest.pl" className="hover:text-white transition-colors duration-200">
                  hello@businessquest.pl
                </a>
              </li>
              <li>
                <a href="tel:+48000000000" className="hover:text-white transition-colors duration-200">
                  +48 000 000 000
                </a>
              </li>
              <li>Warszawa, Polska</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-xs">
          <span>© {new Date().getFullYear()} businessQuest. Wszelkie prawa zastrzeżone.</span>
          <div className="flex items-center gap-6">
            <Link href="/polityka-prywatnosci" className="hover:text-white/60 transition-colors">
              Polityka prywatności
            </Link>
            <Link href="/regulamin" className="hover:text-white/60 transition-colors">
              Regulamin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
