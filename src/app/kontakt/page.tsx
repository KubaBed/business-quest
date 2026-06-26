import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt — businessQuest",
  description:
    "Porozmawiajmy o Twoim zespole. Umów bezpłatną, niezobowiązującą rozmowę — wspólnie zobaczymy, czy i jak możemy pomóc.",
};

const CONTACT_EMAIL = "kontakt@businessquest.pl";

const channels = [
  {
    label: "Napisz do nas",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    icon: (
      <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2l8 6 8-6" />
    ),
  },
  {
    label: "LinkedIn",
    value: "businessQuest",
    href: "https://www.linkedin.com/company/business-quest-pl/",
    icon: (
      <>
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
];

const expectations = [
  "Odpisujemy zwykle w ciągu jednego dnia roboczego.",
  "Pierwsza rozmowa jest bezpłatna i niezobowiązująca.",
  "Bez sprzedażowej presji — najpierw słuchamy, potem proponujemy.",
];

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kontakt"
        crumbs={[{ label: "Start", href: "/" }, { label: "Kontakt" }]}
        title={
          <>
            Porozmawiajmy o{" "}
            <span className="text-gradient">Twoim&nbsp;zespole</span>.
          </>
        }
        lead="Opowiedz, co teraz najbardziej zajmuje Ci głowę w temacie ludzi. Wspólnie zobaczymy, czy i jak możemy pomóc — bezpłatnie i bez zobowiązań."
      />

      <section className="pb-20 lg:pb-28 bg-brand-bg">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
            {/* Lewa — dane kontaktowe */}
            <div className="lg:pt-2">
              <div className="space-y-4">
                {channels.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-2xl border border-brand-border bg-brand-card p-5 hover:border-magenta/40 hover:shadow-sm transition-all"
                  >
                    <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-magenta/10 text-magenta flex-shrink-0">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill={c.label === "LinkedIn" ? "currentColor" : "none"}
                        stroke={c.label === "LinkedIn" ? "none" : "currentColor"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        {c.icon}
                      </svg>
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-brand-muted">
                        {c.label}
                      </span>
                      <span className="block text-brand-text font-semibold group-hover:text-magenta transition-colors truncate">
                        {c.value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-brand-bg-subtle border border-brand-border p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-brand-muted mb-4">
                  Czego się spodziewać
                </p>
                <ul className="space-y-3">
                  {expectations.map((e) => (
                    <li
                      key={e}
                      className="flex items-start gap-3 text-brand-body text-[15px] leading-relaxed"
                    >
                      <span className="mt-1.5 flex items-center justify-center w-4 h-4 rounded-full bg-magenta flex-shrink-0">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </span>
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Prawa — formularz */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
