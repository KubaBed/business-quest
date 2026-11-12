import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import GradientCircle from "@/components/decor/GradientCircle";
import DotGrid from "@/components/decor/DotGrid";
import HandArrow from "@/components/decor/HandArrow";
import CopyValue from "@/components/brand/CopyValue";

// Brandkit do udostępniania linkiem (grafik, drukarnia, agencja).
// Poza indeksem: meta robots tutaj + nagłówek X-Robots-Tag w next.config.mjs, brak w sitemap.ts.
export const metadata: Metadata = {
  title: "Brandkit businessQuest",
  description: "Logo, kolory, czcionka i elementy graficzne businessQuest.",
  robots: { index: false, follow: false, nocache: true },
};

type Swatch = { name: string; hex: string; rgb: string; token: string; use: string; dark?: boolean };

const accents: Swatch[] = [
  { name: "Magenta", hex: "#F7087F", rgb: "247 8 127", token: "--color-magenta", use: "główny kolor: przyciski, linki, wyróżnienia", dark: true },
  { name: "Magenta ciemna", hex: "#C20066", rgb: "194 0 102", token: "magenta-deep", use: "tekst w kolorze marki na białym tle", dark: true },
  { name: "Magenta jasna", hex: "#FF5AAD", rgb: "255 90 173", token: "--color-magenta-light", use: "przycisk po najechaniu", dark: true },
  { name: "Róż pudrowy", hex: "#FFB3D1", rgb: "255 179 209", token: "--color-magenta-dim", use: "delikatne tła i akcenty" },
  { name: "Fiolet", hex: "#8B3FE8", rgb: "139 63 232", token: "--color-purple", use: "gradient magenta i fiolet, drugi kolor", dark: true },
  { name: "Czerwień", hex: "#FB3B2F", rgb: "251 59 47", token: "--color-red", use: "gradient czerwień i pomarańcz, pierwszy kolor", dark: true },
  { name: "Pomarańcz", hex: "#FF6B2B", rgb: "255 107 43", token: "--color-orange", use: "strzałki i ciepłe akcenty", dark: true },
  { name: "Brzoskwinia", hex: "#FFAB82", rgb: "255 171 130", token: "--color-orange-light", use: "jasny ciepły akcent" },
];

const neutrals: Swatch[] = [
  { name: "Czerń", hex: "#0E0E10", rgb: "14 14 16", token: "--color-text", use: "nagłówki", dark: true },
  { name: "Grafit", hex: "#3F3F46", rgb: "63 63 70", token: "--color-text-body", use: "tekst akapitów", dark: true },
  { name: "Szary", hex: "#71717A", rgb: "113 113 122", token: "--color-text-muted", use: "podpisy i opisy", dark: true },
  { name: "Linia", hex: "#D9D9DE", rgb: "217 217 222", token: "grafiki usług", use: "linie w grafikach" },
  { name: "Obramowanie", hex: "#ECECEE", rgb: "236 236 238", token: "--color-border", use: "ramki kart" },
  { name: "Biel", hex: "#FFFFFF", rgb: "255 255 255", token: "--color-bg", use: "główne tło strony" },
  { name: "Szarość tła", hex: "#F7F7F8", rgb: "247 247 248", token: "--color-bg-subtle", use: "tło co drugiej sekcji" },
  { name: "Krem", hex: "#F7F2EA", rgb: "247 242 234", token: "hero, sekcja Problem", use: "ciepłe tło sekcji" },
  { name: "Śliwka", hex: "#160910", rgb: "22 9 16", token: "sekcja Problem", use: "ciemne tło sekcji", dark: true },
  { name: "Róż logo", hex: "#EF087A", rgb: "239 8 122", token: "plik logo", use: "tylko w pliku logo", dark: true },
];

const gradients = [
  { name: "Magenta i fiolet", css: "linear-gradient(160deg, #F7087F 0%, #8B3FE8 100%)" },
  { name: "Czerwień i pomarańcz", css: "linear-gradient(160deg, #FB3B2F 0%, #FF8A3D 100%)" },
  { name: "Magenta i pomarańcz", css: "linear-gradient(135deg, #F7087F 0%, #FF6B2B 100%)" },
];

const logos = [
  { label: "Kolorowe, na jasne tło", bg: "bg-white border border-brand-border", file: "logo-poziome-kolor.png", square: "logo-kwadrat-kolor.png" },
  { label: "Białe, na kolorowe i ciemne tło", bg: "bg-gradient-magenta", file: "logo-poziome-biale.png", square: "logo-kwadrat-biale.png" },
  { label: "Czarne, do druku w jednym kolorze", bg: "bg-brand-bg-subtle", file: "logo-poziome-czarne.png", square: "logo-kwadrat-czarne.png" },
];

const typeScale = [
  { tag: "H1", name: "Nagłówek strony", spec: "800 · 48-88 px · interlinia 0,98", cls: "text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[0.98]" },
  { tag: "H2", name: "Nagłówek sekcji", spec: "800 · 36-48 px", cls: "text-3xl font-extrabold tracking-tight" },
  { tag: "H3", name: "Tytuł karty", spec: "700 · 20-24 px", cls: "text-xl font-bold" },
  { tag: "Tekst", name: "Tekst akapitu", spec: "400 · 18-20 px · interlinia 1,6", cls: "text-lg text-brand-body" },
  { tag: "Etykieta", name: "Etykieta sekcji", spec: "600 · 12 px · wersaliki · odstęp 0,14 em", cls: "text-xs font-semibold uppercase tracking-[0.14em] text-magenta-deep" },
  { tag: "Przycisk", name: "Umów rozmowę", spec: "600 · 14-15 px", cls: "text-[15px] font-semibold tracking-wide" },
];

const files = [
  { name: "Paczka ZIP: logo, plansze i kolory w CSS", href: "/brand/businessquest-brandkit.zip", meta: "ZIP" },
  { name: "Plansza 1: identyfikacja", href: "/brand/businessquest-brandkit-1.png", meta: "PNG · 3840 × 2400" },
  { name: "Plansza 2: specyfikacja", href: "/brand/businessquest-brandkit-2.png", meta: "PNG · 3840 × 2400" },
  { name: "Kolory jako zmienne CSS", href: "/brand/tokens.css", meta: "tokens.css" },
];

function SwatchCard({ s }: { s: Swatch }) {
  return (
    <div className="rounded-2xl border border-brand-border overflow-hidden bg-white">
      <div className="h-24 lg:h-28" style={{ background: s.hex }} />
      <div className="p-4 space-y-1">
        <p className="font-bold text-brand-text">{s.name}</p>
        <CopyValue value={s.hex} className="text-base font-semibold text-brand-text" />
        <p className="text-xs text-brand-muted font-mono">RGB {s.rgb}</p>
        <p className="text-xs text-brand-muted font-mono">{s.token}</p>
        <p className="text-sm text-brand-body pt-1">{s.use}</p>
      </div>
    </div>
  );
}

function SectionHead({ label, title, lead }: { label: string; title: string; lead?: string }) {
  return (
    <div className="max-w-3xl mb-10">
      <SectionLabel>{label}</SectionLabel>
      <h2 className="mt-4 text-3xl lg:text-5xl font-extrabold tracking-tight text-brand-text">{title}</h2>
      {lead && <p className="mt-4 text-lg text-brand-body leading-relaxed">{lead}</p>}
    </div>
  );
}

const CONTACT_EMAIL = "zuzanna.wozniak@businessquest.pl";

const wrap = "max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8";

export default function BrandPage() {
  return (
    <>
      <PageHeader
        eyebrow="Brandkit"
        title={
          <>
            Identyfikacja wizualna <span className="text-gradient">businessQuest</span>
          </>
        }
        lead="Logo, kolory, czcionka i elementy graficzne, z których korzysta strona businessquest.pl. Kliknij kod koloru, żeby go skopiować."
        aside={
          <a href="/brand/businessquest-brandkit-1.png" target="_blank" rel="noopener" className="block">
            <Image
              src="/brand/businessquest-brandkit-1.png"
              alt="Plansza brandkitu businessQuest"
              width={1920}
              height={1200}
              className="w-full h-auto rounded-2xl shadow-xl"
              priority
            />
          </a>
        }
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/brand/businessquest-brandkit.zip" size="lg">
            Pobierz paczkę ZIP
          </Button>
          <Button href="#pliki" variant="ghost" size="lg">
            Pobierz plansze PNG
          </Button>
        </div>
      </PageHeader>

      {/* Logo */}
      <section id="logo" className="py-16 lg:py-24 bg-brand-bg-subtle">
        <div className={wrap}>
          <SectionHead
            label="01"
            title="Logo"
            lead="Wstawiaj logo z pliku, nie odtwarzaj napisu „businessQuest” czcionką. Róż w pliku logo ma kod #EF087A."
          />
          <div className="grid md:grid-cols-3 gap-5">
            {logos.map((l) => (
              <div key={l.file} className="rounded-2xl bg-white border border-brand-border overflow-hidden">
                <div className={`aspect-[16/9] flex items-center justify-center ${l.bg}`}>
                  <Image src={`/brand/${l.file}`} alt={l.label} width={500} height={150} className="w-3/4 h-auto" />
                </div>
                <div className="p-4 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-brand-text">{l.label}</p>
                  <div className="flex gap-3 text-sm">
                    <a href={`/brand/${l.file}`} download className="text-magenta-deep font-semibold hover:underline">Poziome</a>
                    <a href={`/brand/${l.square}`} download className="text-magenta-deep font-semibold hover:underline">Kwadratowe</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-brand-muted">
            Logo mamy tylko w PNG o szerokości 500 px. Jeśli potrzebujesz większego pliku do druku albo wersji
            wektorowej (SVG, PDF), napisz do nas:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-magenta-deep font-semibold hover:underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </section>

      {/* Kolory */}
      <section id="kolory" className="py-16 lg:py-24 bg-brand-bg">
        <div className={wrap}>
          <SectionHead
            label="02"
            title="Kolory"
            lead="Podstawą jest białe tło i ciemny tekst. Magenty i pozostałych akcentów używaj na przyciskach, w wyróżnieniach i grafikach."
          />
          <h3 className="text-xl font-bold text-brand-text mb-4">Akcenty</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {accents.map((s) => (
              <SwatchCard key={s.hex} s={s} />
            ))}
          </div>
          <h3 className="text-xl font-bold text-brand-text mt-12 mb-4">Tekst, tła i linie</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {neutrals.map((s) => (
              <SwatchCard key={s.hex} s={s} />
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-brand-body leading-relaxed">
            Magenta #F7087F na białym tle ma kontrast 4,0:1, więc nadaje się do dużych napisów i grafik. Do
            zwykłego tekstu w kolorze marki używaj ciemniejszej magenty #C20066 (6,0:1).
          </p>
        </div>
      </section>

      {/* Gradienty */}
      <section id="gradienty" className="py-16 lg:py-24 bg-brand-bg-subtle">
        <div className={wrap}>
          <SectionHead
            label="03"
            title="Gradienty"
            lead="Gradientów używaj w kołach, małych blokach i na jednym-dwóch słowach tekstu. Nie wypełniaj nimi całych sekcji."
          />
          <div className="grid md:grid-cols-3 gap-5">
            {gradients.map((g) => (
              <div key={g.name} className="rounded-2xl bg-white border border-brand-border overflow-hidden">
                <div className="h-40" style={{ background: g.css }} />
                <div className="p-4 space-y-2">
                  <p className="font-bold text-brand-text">{g.name}</p>
                  <CopyValue value={`background: ${g.css};`} label={g.css} className="text-xs text-brand-body" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Czcionka */}
      <section id="czcionka" className="py-16 lg:py-24 bg-brand-bg">
        <div className={wrap}>
          <SectionHead
            label="04"
            title="Czcionka"
            lead="Outfit to jedyna czcionka na stronie, w nagłówkach i w tekście. Jest darmowa, także do użytku komercyjnego (SIL Open Font License), i ma polskie znaki."
          />
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16">
            <div>
              <p className="text-[clamp(5rem,12vw,10rem)] font-extrabold leading-none tracking-tight text-brand-text">Aa</p>
              <p className="mt-4 text-3xl font-extrabold text-brand-text">Outfit</p>
              <p className="mt-1 text-brand-muted">w kodzie: Outfit Variable, zapasowo sans-serif</p>
              <p className="mt-6 text-lg sm:text-2xl leading-snug text-brand-text break-all">
                AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ
                <br />
                aąbcćdeęfghijklłmnńoóprsśtuwyzźż
                <br />
                0123456789 &amp; % ?!
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-brand-border pt-6">
                {[400, 500, 600, 700, 800].map((w) => (
                  <div key={w} className="text-center">
                    <span className="block text-3xl text-brand-text" style={{ fontWeight: w }}>Ag</span>
                    <span className="text-xs text-brand-muted">{w}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button href="https://fonts.google.com/specimen/Outfit" variant="ghost">
                  Pobierz z Google Fonts
                </Button>
              </div>
            </div>
            <div className="divide-y divide-brand-border border-y border-brand-border">
              {typeScale.map((t) => (
                <div key={t.tag} className="grid grid-cols-[5.5rem_1fr] items-baseline gap-4 py-4">
                  <span className="text-xs font-mono text-brand-muted">{t.tag}</span>
                  <div className="min-w-0">
                    <p className={`${t.cls} text-brand-text`}>{t.name}</p>
                    <p className="mt-1 text-xs font-mono text-brand-muted">{t.spec}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Elementy graficzne */}
      <section id="elementy" className="py-16 lg:py-24 bg-brand-bg-subtle">
        <div className={wrap}>
          <SectionHead label="05" title="Elementy graficzne" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="rounded-2xl bg-white border border-brand-border p-6">
              <div className="h-36 flex items-center justify-center gap-6">
                <GradientCircle variant="magenta" className="w-24" />
                <GradientCircle variant="orange" className="w-24" />
              </div>
              <p className="mt-4 font-semibold text-brand-text">Koło z gradientem i przesuniętym pierścieniem</p>
            </div>
            <div className="rounded-2xl bg-white border border-brand-border p-6">
              <div className="h-36 relative">
                <DotGrid className="absolute inset-4" />
              </div>
              <p className="mt-4 font-semibold text-brand-text">Siatka kropek w narożnikach</p>
            </div>
            <div className="rounded-2xl bg-white border border-brand-border p-6">
              <div className="h-36 flex items-center justify-center">
                <HandArrow className="w-20 h-24" />
              </div>
              <p className="mt-4 font-semibold text-brand-text">Odręczna pomarańczowa strzałka</p>
            </div>
            <div className="rounded-2xl bg-white border border-brand-border p-6">
              <div className="h-36 flex items-center justify-center">
                <SectionLabel>Etykieta sekcji</SectionLabel>
              </div>
              <p className="mt-4 font-semibold text-brand-text">Trzy rosnące kropki przed etykietą sekcji</p>
            </div>
            <div className="rounded-2xl bg-white border border-brand-border p-6">
              <div className="h-36 flex flex-col items-center justify-center gap-3">
                <span className="inline-flex items-center rounded-full bg-magenta px-6 py-3 text-[14px] font-semibold tracking-wide text-white">
                  Umów rozmowę
                </span>
                <span className="inline-flex items-center rounded-full border border-magenta/30 px-6 py-3 text-[14px] font-semibold tracking-wide text-magenta-deep">
                  Zobacz cennik
                </span>
              </div>
              <p className="mt-4 font-semibold text-brand-text">Przyciski z pełnym zaokrągleniem, Outfit 600</p>
            </div>
            <div className="rounded-2xl bg-white border border-brand-border overflow-hidden">
              <div className="relative h-[11.5rem]">
                <Image
                  src="/images/team/founders.webp"
                  alt="Zespół businessQuest"
                  fill
                  className="object-cover object-[center_30%]"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>
              <p className="p-6 pt-4 font-semibold text-brand-text">Zdjęcia: jasne tło, naturalne światło, ludzie w kadrze</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pliki */}
      <section id="pliki" className="py-16 lg:py-24 bg-brand-bg">
        <div className={wrap}>
          <SectionHead label="06" title="Pliki do pobrania" />
          <div className="divide-y divide-brand-border border-y border-brand-border max-w-3xl">
            {files.map((f) => (
              <a
                key={f.href}
                href={f.href}
                download
                className="flex items-center justify-between gap-4 py-5 group"
              >
                <span className="font-semibold text-brand-text group-hover:text-magenta-deep transition-colors">{f.name}</span>
                <span className="text-sm text-brand-muted font-mono whitespace-nowrap">{f.meta} ↓</span>
              </a>
            ))}
          </div>
          <p className="mt-10 text-sm text-brand-muted">Na podstawie strony businessquest.pl, stan z listopada 2026.</p>
        </div>
      </section>
    </>
  );
}
