"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Usługi", href: "/#uslugi" },
  { label: "O nas", href: "/o-nas" },
  { label: "Case study", href: "/case-study" },
  { label: "Blog", href: "/blog" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-brand-muted hover:text-magenta text-[15px] font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-magenta scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
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
        <div className="flex-1 flex flex-col items-center justify-center gap-8 px-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: menuOpen ? i * 0.07 + 0.15 : 0, duration: 0.4 }}
            >
              <Link
                href={link.href}
                className="text-white text-3xl font-semibold hover:text-magenta-dim transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
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
