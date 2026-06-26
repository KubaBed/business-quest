import { ReactNode } from "react";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  /** Opcjonalna ścieżka okruszków (breadcrumbs) nad nagłówkiem. */
  crumbs?: Crumb[];
  /** Dodatkowa treść pod leadem (np. przyciski). */
  children?: ReactNode;
  align?: "left" | "center";
}

/**
 * Wspólny nagłówek podstron — spójny z hero strony głównej.
 * Wejściowa animacja oparta na CSS (.fade-blur-up), więc treść jest widoczna
 * bez JS. Górny padding czyści przyklejony, przezroczysty Navbar.
 */
export default function PageHeader({
  eyebrow,
  title,
  lead,
  crumbs,
  children,
  align = "left",
}: PageHeaderProps) {
  const centered = align === "center";

  return (
    <header className="relative overflow-hidden bg-brand-bg pt-32 lg:pt-40 pb-14 lg:pb-20">
      {/* Subtelne, brandowe dekoracje tła */}
      <div
        aria-hidden
        className="absolute -top-32 -right-24 w-[460px] h-[460px] rounded-full opacity-[0.08] blur-3xl"
        style={{ background: "var(--gradient-magenta)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-32 w-[420px] h-[420px] rounded-full opacity-[0.05] blur-3xl"
        style={{ background: "var(--gradient-orange)" }}
      />

      <div
        className={`relative max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8 ${
          centered ? "text-center" : ""
        }`}
      >
        <div className={`max-w-3xl ${centered ? "mx-auto" : ""}`}>
          {crumbs && crumbs.length > 0 && (
            <nav
              className={`fade-blur-up flex items-center gap-2 text-sm text-brand-muted mb-6 ${
                centered ? "justify-center" : ""
              }`}
              aria-label="Ścieżka"
            >
              {crumbs.map((c, i) => (
                <span key={c.label} className="inline-flex items-center gap-2">
                  {c.href ? (
                    <Link
                      href={c.href}
                      className="hover:text-magenta transition-colors"
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-brand-body">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && (
                    <span className="text-brand-border">/</span>
                  )}
                </span>
              ))}
            </nav>
          )}

          <div className="fade-blur-up d1">
            <SectionLabel className={`mb-5 ${centered ? "justify-center" : ""}`}>
              {eyebrow}
            </SectionLabel>
          </div>

          <h1 className="fade-blur-up d2 text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight leading-[1.02] text-brand-text">
            {title}
          </h1>

          {lead && (
            <p className="fade-blur-up d3 mt-6 text-brand-body text-lg lg:text-xl leading-relaxed">
              {lead}
            </p>
          )}

          {children && <div className="fade-blur-up d4 mt-9">{children}</div>}
        </div>
      </div>
    </header>
  );
}
