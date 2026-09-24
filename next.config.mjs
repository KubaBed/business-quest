/** @type {import('next').NextConfig} */

// Stare adresy z WordPressa (businessquest.pl sprzed migracji) → nowe odpowiedniki.
// Wpisy blogowe żyły w korzeniu domeny, teraz są pod /blog/<slug>.
const legacyPosts = [
  "pcm-skuteczne-zarzadzanie-i-komunikacja-w-trudnych-sytuacjach",
  "fundament-wspolpracy-postawy-budujace-sukces-zespolu",
  "praktyczne-zastosowanie-przywodztwa-sytuacyjnego-blancharda",
  "mit-prosta-metoda-na-zwiekszenie-transparetnosci-na-poziomie-zadan",
  "brainwriting",
  "znajomosc-kontekstu-biznesowego-jak-skutecznie-wdrozyc-sie-w-nowa-branze",
  "5-sprawdzonych-pytan-do-zespolu-jak-zweryfikowac-swoja-prace-jako-lider",
  "zaufanie-w-zespole",
  "jak-delegowac-zadania-porownanie-narzedzi-macierz-raci-i-delegacyjny-poker",
  "happiness-index-w-pracy-klucz-do-zrozumienia-zadowolenia-zespolu",
  "risklog-a-podejmowanie-decyzji",
  "czym-jest-intent-to-stay-i-dlaczego-warto-go-mierzyc",
  "jak-efektywnie-prowadzic-spotkania-11-praktyczny-przewodnik-dla-liderow",
  "ankiety-satysfakcji-czy-maja-sens",
  "skalowanie-organizacji",
];

const legacyMap = {
  "3735-2": "/blog/coachingowy-styl-zarzadzania",
  "cechy-lidera-raport-z-konferencji-perspektywy-women-in-tech-summit": "/blog",
  "sciezki-rozwoju-w-kancelarii-prawniczej": "/blog",

  "consulting-w-spolce-gieldowej-vercom": "/case-study",
  "operacyjne-wsparcie-zarzadu-w-dzialaniach-w-obszarze-ludzkim":
    "/case-study/operacyjne-wsparcie-zarzadu-appchance",
  "niestandardowe-podejscie-do-niestandardowej-potrzeby-rekrutacji-genealoga":
    "/case-study/niestandardowe-podejscie-do-niestandardowej-potrzeby-rekrutacji-genealoga",
  "case-study-wsparcie-hd": "/case-study/wsparcie-hr-managera-contman",

  "hr-na-godziny": "/#uslugi",
  "interim-manager": "/#uslugi",
  warsztaty: "/#uslugi",
  "warsztaty-mtq": "/#uslugi",
  "warsztaty-pcm": "/#uslugi",
  "webinar-mtq": "/#uslugi",
  webinar_pcm: "/#uslugi",
  "webinar-lider-w-stresie": "/#uslugi",
  "rekrutacja-do-sprzedazy": "/#uslugi",
  "budowanie-kultury-w-organizacji": "/#uslugi",
};

const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      ...legacyPosts.map((slug) => ({
        source: `/${slug}`,
        destination: `/blog/${slug}`,
        permanent: true,
      })),
      ...Object.entries(legacyMap).map(([slug, destination]) => ({
        source: `/${slug}`,
        destination,
        permanent: true,
      })),
      // Case study Vercom zdjęte ze strony 2026-09-24.
      { source: "/case-study/hr-recruitment-consulting-vercom", destination: "/case-study", permanent: true },
      { source: "/hr-na-godziny/:path*", destination: "/#uslugi", permanent: true },
      { source: "/category/:path*", destination: "/blog", permanent: true },
      { source: "/tag/:path*", destination: "/blog", permanent: true },
      { source: "/author/:path*", destination: "/blog", permanent: true },
      { source: "/feed", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
