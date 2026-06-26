// Case studies.
// UWAGA: treści to wersje robocze (draft) napisane w tonie marki i osadzone
// w realnych referencjach klientów (sekcja „Opinie"). Do weryfikacji /
// uzupełnienia szczegółami z businessquest.pl — serwis był niedostępny z tego
// środowiska (polityka sieci blokuje ruch wychodzący).

export interface CaseSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  service: string;
  excerpt: string;
  challengeOneLine: string;
  resultOneLine: string;
  facts: { label: string; value: string }[];
  sections: CaseSection[];
  quote?: { text: string; author: string; role: string; company: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "rekrutacja-genealoga",
    title:
      "Niestandardowe podejście do niestandardowej potrzeby — rekrutacja genealoga",
    client: "Klient poufny",
    industry: "Usługi specjalistyczne",
    service: "Rekrutacja",
    excerpt:
      "Jak znaleźć specjalistę do roli, dla której nie istnieje gotowy rynek kandydatów? Historia rekrutacji genealoga — od zdefiniowania profilu po nietypowe kanały dotarcia.",
    challengeOneLine:
      "Rola, dla której nie istnieje gotowy rynek kandydatów ani standardowe kanały rekrutacji.",
    resultOneLine:
      "Obsadzone stanowisko i proces uszyty na miarę nietypowej potrzeby.",
    facts: [
      { label: "Klient", value: "Poufny" },
      { label: "Branża", value: "Usługi specjalistyczne" },
      { label: "Zakres", value: "Rekrutacja — od profilu po zatrudnienie" },
      { label: "Rola", value: "Genealog" },
    ],
    sections: [
      {
        heading: "Wyzwanie",
        paragraphs: [
          "Genealog to rola, której nie znajdziesz na popularnych portalach z ogłoszeniami. Nie ma jej w typowych ścieżkach kariery, nie wpadają na nią setki zgłoszeń, a kompetencje trudno ocenić na podstawie samego CV.",
          "Klient potrzebował osoby, która łączy rzadki zestaw umiejętności: metodyczną pracę z archiwami i źródłami, znajomość historii i często kilku języków, cierpliwość detektywa oraz dużą dyskrecję. Standardowa rekrutacja „wrzućmy ogłoszenie i poczekajmy” nie miała tu szans zadziałać.",
        ],
      },
      {
        heading: "Podejście",
        paragraphs: [
          "Zaczęliśmy od cofnięcia się o krok i wspólnego zdefiniowania, jak naprawdę wygląda sukces na tym stanowisku — które kompetencje są konieczne od pierwszego dnia, a których można się nauczyć w trakcie.",
          "Mając ostry profil, zaprojektowaliśmy sourcing daleko poza standardowymi kanałami:",
        ],
        bullets: [
          "środowiska akademickie i pasjonackie związane z historią i genealogią",
          "archiwa, biblioteki i towarzystwa genealogiczne",
          "zawody pokrewne, z których można płynnie przejść do tej roli (historycy, archiwiści)",
          "bezpośrednie, spersonalizowane dotarcie zamiast czekania na zgłoszenia",
        ],
      },
      {
        heading: "Jak weryfikowaliśmy kandydatów",
        paragraphs: [
          "Zamiast typowej rozmowy oceniającej, oparliśmy selekcję na praktyce — zadaniu zbliżonym do realnej pracy. To pozwoliło zobaczyć sposób myślenia, warsztat i rzetelność kandydatów, a nie tylko to, jak opowiadają o sobie.",
        ],
      },
      {
        heading: "Efekt",
        paragraphs: [
          "Klient zatrudnił osobę realnie dopasowaną do nietypowego profilu, a cały proces — od ogłoszenia, przez sourcing, po weryfikację — został skrojony pod konkretną potrzebę.",
          "To dla nas dobry przykład tego, jak pracujemy: nietypowa potrzeba nie oznacza, że nie da się jej domknąć. Oznacza, że trzeba podejść do niej inaczej niż do typowej rekrutacji.",
        ],
      },
    ],
  },
  {
    slug: "rekrutacja-sprzedaz-kanal-partnerski-messageflow",
    title:
      "Rekrutacja specjalisty ds. sprzedaży w kanale partnerskim — Messageflow",
    client: "Messageflow (Grupa Vercom)",
    industry: "Technologie / komunikacja",
    service: "Rekrutacja",
    excerpt:
      "Obsadzenie kluczowej roli sprzedażowej w kanale partnerskim i sprawne przeprowadzenie całego procesu rekrutacji — od profilu po decyzję o zatrudnieniu.",
    challengeOneLine:
      "Znalezienie osoby odpowiedzialnej za sprzedaż w kanale partnerskim.",
    resultOneLine:
      "Rola obsadzona, a proces rekrutacji poprowadzony sprawnie od początku do końca.",
    facts: [
      { label: "Klient", value: "Messageflow (Vercom)" },
      { label: "Branża", value: "Technologie / komunikacja" },
      { label: "Zakres", value: "Rekrutacja roli sprzedażowej" },
      { label: "Kanał", value: "Sprzedaż partnerska" },
    ],
    sections: [
      {
        heading: "Sytuacja",
        paragraphs: [
          "Messageflow, część notowanej na giełdzie Grupy Vercom, rozwijał sprzedaż w kanale partnerskim i potrzebował osoby, która tę sprzedaż poprowadzi. To rola, w której liczy się jednocześnie zrozumienie produktu, umiejętność budowania relacji z partnerami i samodzielność.",
        ],
      },
      {
        heading: "Co zrobiliśmy",
        paragraphs: [
          "Poprowadziliśmy proces rekrutacji od początku do końca — od doprecyzowania profilu, przez selekcję kandydatów, po organizację rozmów i wsparcie w finalnej decyzji o zatrudnieniu. Celem było nie tylko znalezienie kandydata, ale przeprowadzenie całości sprawnie i bez obciążania zespołu klienta.",
        ],
      },
      {
        heading: "Efekt",
        paragraphs: [
          "Stanowisko zostało obsadzone, a proces przebiegł sprawnie i przewidywalnie dla obu stron.",
        ],
      },
    ],
    quote: {
      text: "Zespół BQ pomógł nam znaleźć osobę odpowiedzialną za sprzedaż w kanale partnerskim i sprawnie przeprowadzić cały proces rekrutacji.",
      author: "Karolina Antonowicz",
      role: "CRO Messageflow",
      company: "Vercom",
    },
  },
  {
    slug: "hr-jako-partner-appchance",
    title: "HR pomiędzy konsultantem a działem wewnętrznym — Appchance",
    client: "Appchance",
    industry: "Software house",
    service: "Stałe wsparcie HR",
    excerpt:
      "Czego potrzebuje rosnąca firma technologiczna, gdy pojedynczy konsultant to za mało, a własny dział HR to za dużo? Roli, którą można na bieżąco oprzeć o zewnętrzny zespół.",
    challengeOneLine:
      "Potrzeba czegoś pomiędzy współpracą z konsultantem a wewnętrznym działem HR.",
    resultOneLine:
      "Stałe wsparcie HR pełnione na bieżąco przez zewnętrzny zespół.",
    facts: [
      { label: "Klient", value: "Appchance" },
      { label: "Branża", value: "Software house" },
      { label: "Zakres", value: "Bieżące wsparcie w tematach ludzi" },
      { label: "Model", value: "Zewnętrzny zespół HR" },
    ],
    sections: [
      {
        heading: "Sytuacja",
        paragraphs: [
          "Appchance to rosnący software house, w którym tematy ludzi zaczęły wymagać więcej uwagi, niż mógł dać pojedynczy konsultant od czasu do czasu — a jednocześnie budowanie pełnego, wewnętrznego działu HR byłoby krokiem na wyrost.",
        ],
      },
      {
        heading: "Co zrobiliśmy",
        paragraphs: [
          "Weszliśmy w rolę pomiędzy: zewnętrznego zespołu, który prowadzi tematy ludzi na bieżąco i jest dostępny wtedy, gdy pojawia się potrzeba — bez stałego kosztu i struktury budowanej na zapas. W praktyce oznacza to wsparcie w rekrutacjach, decyzjach personalnych i porządkowaniu sposobu pracy zespołu.",
        ],
      },
      {
        heading: "Efekt",
        paragraphs: [
          "Dziś pełnimy u klienta dokładnie taką rolę — elastycznego zespołu HR, który jest blisko biznesu, ale nie obciąża go niepotrzebną strukturą.",
        ],
      },
    ],
    quote: {
      text: "Szukaliśmy czegoś pomiędzy współpracą z konsultantem a wewnętrznym działem HR – dziś zespół BQ pełni u nas właśnie taką rolę.",
      author: "Grzegorz Skibiński",
      role: "CTO",
      company: "Appchance",
    },
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
