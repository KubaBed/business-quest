import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  uslugi: [
    { label: "Rekrutacje i zatrudnianie", href: "#uslugi" },
    { label: "Sparing partner", href: "#uslugi" },
    { label: "Procesy HR", href: "#uslugi" },
  ],
  firma: [
    { label: "Dla kogo", href: "#dla-kogo" },
    { label: "O nas", href: "#zespol" },
    { label: "Opinie", href: "#opinie" },
    { label: "Kontakt", href: "#kontakt" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-bg-subtle border-t border-brand-border">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="businessQuest"
              width={160}
              height={48}
              className="h-8 w-auto object-contain mb-4"
            />
            <p className="text-brand-body text-sm leading-relaxed mb-6 max-w-xs">
              Twój pierwszy zespół HR. Proste i użyteczne rozwiązania dla mikro
              i małych firm.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-brand-border flex items-center justify-center text-brand-muted hover:text-magenta hover:border-magenta transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Usługi */}
          <div>
            <h4 className="text-brand-text font-semibold text-sm uppercase tracking-widest mb-5">Usługi</h4>
            <ul className="space-y-3">
              {footerLinks.uslugi.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-brand-muted hover:text-magenta text-sm transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Firma */}
          <div>
            <h4 className="text-brand-text font-semibold text-sm uppercase tracking-widest mb-5">Firma</h4>
            <ul className="space-y-3">
              {footerLinks.firma.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-brand-muted hover:text-magenta text-sm transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-brand-text font-semibold text-sm uppercase tracking-widest mb-5">Kontakt</h4>
            <ul className="space-y-3 text-sm text-brand-muted">
              <li>
                <a href="mailto:kontakt@businessquest.pl" className="hover:text-magenta transition-colors duration-200">
                  kontakt@businessquest.pl
                </a>
              </li>
              <li>Polska</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4 text-brand-muted text-xs">
          <span>© {new Date().getFullYear()} businessQuest. Wszelkie prawa zastrzeżone.</span>
          <div className="flex items-center gap-6">
            <Link href="/polityka-prywatnosci" className="hover:text-magenta transition-colors">
              Polityka prywatności
            </Link>
            <Link href="/regulamin" className="hover:text-magenta transition-colors">
              Regulamin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
