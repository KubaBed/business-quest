"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ServiceIcon from "@/components/decor/ServiceIcons";
import type { ServiceIconName } from "@/data/services";

export interface NavService {
  id: string;
  slug: string;
  name: string;
  tagline: string;
}

const SERVICES_HREF = "/#uslugi";

const serviceIcons: Record<string, ServiceIconName> = {
  rekrutacje: "users",
  sparing: "chat",
  procesy: "org",
};

const navLinks = [
  { label: "Usługi", href: SERVICES_HREF },
  { label: "O nas", href: "/o-nas" },
  { label: "Case study", href: "/case-study" },
  { label: "Blog", href: "/blog" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navbar({ services }: { services: NavService[] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 0.12]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        style={{}}
      >
        <motion.div
          className="absolute inset-0 bg-white backdrop-blur-md"
          style={{ opacity: bgOpacity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-magenta-dim"
          style={{ opacity: borderOpacity }}
        />
        <div className="relative max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="businessQuest"
              width={160}
              height={48}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href === SERVICES_HREF ? (
                <ServicesMenu key={link.href} label={link.label} services={services} />
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-brand-muted hover:text-magenta-deep text-[15px] font-medium transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-magenta scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              )
            )}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/kontakt"
              className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full text-[14px] font-semibold text-white bg-magenta hover:bg-magenta-light transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-magenta/25"
            >
              Umów rozmowę
            </Link>
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2 rounded-md"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span
                className={`block w-6 h-0.5 bg-brand-text transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-brand-text transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-brand-text transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <motion.div
        className="fixed inset-0 z-40 lg:hidden flex flex-col"
        style={{ background: "var(--gradient-magenta)" }}
        initial={{ opacity: 0, y: "-100%" }}
        animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: "-100%" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex-1 flex flex-col items-center justify-center gap-8 px-8 py-24 overflow-y-auto">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: menuOpen ? i * 0.07 + 0.15 : 0, duration: 0.4 }}
              className="flex flex-col items-center text-center"
            >
              <Link
                href={link.href}
                className="text-white text-3xl font-semibold hover:text-magenta-dim transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
              {link.href === SERVICES_HREF && (
                <ul className="mt-4 flex flex-col items-center gap-2.5 text-center">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/uslugi/${s.slug}`}
                        className="text-white/80 text-lg font-medium hover:text-white transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: menuOpen ? navLinks.length * 0.07 + 0.15 : 0, duration: 0.4 }}
          >
            <Link
              href="/kontakt"
              className="inline-flex items-center px-8 py-4 rounded-full text-[16px] font-semibold text-white bg-magenta hover:bg-magenta-light transition-colors mt-4"
              onClick={() => setMenuOpen(false)}
            >
              Umów rozmowę
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

/** Pozycja „Usługi" z rozwijaną listą podstron (desktop). */
function ServicesMenu({ label, services }: { label: string; services: NavService[] }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();
  const pathname = usePathname();
  const onServicePage = pathname?.startsWith("/uslugi/");

  // Zamknij po przejściu na inną stronę.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointer = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [open]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const openNow = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeSoon = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
      onBlur={(e) => {
        if (!rootRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="menu-uslugi"
        onClick={() => setOpen((o) => !o)}
        className={`relative group inline-flex items-center gap-1 text-[15px] font-medium transition-colors duration-200 hover:text-magenta-deep ${
          open || onServicePage ? "text-magenta-deep" : "text-brand-muted"
        }`}
      >
        {label}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
        <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-magenta scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </button>

      <AnimatePresence>
        {open && (
          <div className="absolute left-1/2 top-full -translate-x-1/2 pt-4 w-[420px]">
            <motion.div
              id="menu-uslugi"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-brand-border bg-white p-2 shadow-[0_24px_60px_-20px_rgba(14,14,16,0.28)]"
            >
              <ul>
                {services.map((s) => {
                  const href = `/uslugi/${s.slug}`;
                  const current = pathname === href;
                  return (
                    <li key={s.slug}>
                      <Link
                        href={href}
                        aria-current={current ? "page" : undefined}
                        className={`group/item flex items-start gap-3.5 rounded-xl p-3 outline-none transition-colors hover:bg-brand-bg-subtle focus-visible:bg-brand-bg-subtle focus-visible:ring-2 focus-visible:ring-magenta ${
                          current ? "bg-magenta/[0.05]" : ""
                        }`}
                      >
                        <span className="flex flex-shrink-0 w-10 h-10 items-center justify-center rounded-xl bg-magenta/[0.08] text-magenta-deep">
                          <ServiceIcon
                            name={serviceIcons[s.id] ?? "check"}
                            className="w-5 h-5"
                          />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[15px] font-semibold text-brand-text leading-snug group-hover/item:text-magenta-deep transition-colors">
                            {s.name}
                          </span>
                          <span className="block mt-0.5 text-[13px] text-brand-muted leading-snug">
                            {s.tagline}
                          </span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-1 border-t border-brand-border px-3 pt-2.5 pb-1.5">
                <Link
                  href={SERVICES_HREF}
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-magenta-deep hover:gap-2.5 transition-all"
                >
                  Wszystkie usługi
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
