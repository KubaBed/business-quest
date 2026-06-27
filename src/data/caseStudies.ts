// Case studies — zaimportowane z eksportu WordPress (businessquest.pl).
// Treść i metryki pochodzą z realnych stron case study klienta.
// Uwaga redakcyjna: w cytatach ujednolicono nazwę zespołu na „BQ"/„zespół BQ"
// (spójnie z sekcją „Opinie" na stronie głównej); w eksporcie występowała
// wcześniejsza nazwa marki.

export interface CaseMetric {
  value: string;
  label: string;
}

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
  metrics?: CaseMetric[];
  sections: CaseSection[];
  quote?: { text: string; author: string; role: string; company: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "niestandardowe-podejscie-do-niestandardowej-potrzeby-rekrutacji-genealoga",
    title:
      "Niestandardowe podejście do niestandardowej potrzeby — rekrutacja genealoga",
    client: "Lexmotion",
    industry: "Kancelaria prawna",
    service: "Rekrutacja",
    excerpt:
      "Jak zatrudnić genealoga — specjalistę od researchu przodków — gdy nie istnieje gotowy rynek takich kandydatów? Historia rekrutacji dla kancelarii Lexmotion.",
    challengeOneLine:
      "Zatrudnienie genealoga — wąskiej specjalizacji bez gotowego rynku kandydatów.",
    resultOneLine:
      "15 kandydatów zgodnych z profilem i udane zatrudnienie genealoga.",
    facts: [
      { label: "Klient", value: "Lexmotion" },
      { label: "Branża", value: "Kancelaria prawna" },
      { label: "Zakres", value: "Rekrutacja" },
      { label: "Rola", value: "Genealog" },
    ],
    metrics: [
      { value: "15", label: "Kandydaci odpowiadający roli" },
      { value: "1", label: "Udane zatrudnienie" },
      { value: "86", label: "Kandydatów w procesie" },
    ],
    sections: [
      {
        heading: "Kontekst współpracy",
        paragraphs: [
          "Kancelaria Lexmotion pomaga osobom anglojęzycznym i hiszpańskojęzycznym ubiegać się o polskie obywatelstwo, aby mogły w pełni korzystać ze wszystkich praw Unii Europejskiej.",
          "Współpracę z kancelarią zaczęliśmy w czerwcu 2022 roku, kiedy ze względu na szybki rozwój organizacja stanęła przed wyzwaniem powiększenia zespołów obsługi klienta, administracji i researchu.",
        ],
      },
      {
        heading: "Wyzwanie",
        paragraphs: [
          "Zatrudnienie genealoga — osoby specjalizującej się w researchu na temat przodków osób ubiegających się o polskie obywatelstwo, z wcześniejszym doświadczeniem w tworzeniu drzew genealogicznych i zainteresowaniem historią. Zadania obejmowały:",
        ],
        bullets: [
          "stworzenie profilu kandydata oraz ogłoszenia",
          "promocję ogłoszenia",
          "aktywne poszukiwanie pasywnych kandydatów (Direct Search)",
          "przeprowadzenie pierwszego etapu rekrutacji",
          "koordynację całego procesu",
        ],
      },
      {
        heading: "Rozwiązanie",
        bullets: [
          "skupienie się na promocji ogłoszenia na forach i w grupach związanych z genealogią",
          "rozpoczęcie Direct Searchu kandydatów na LinkedIn",
          "promocja ogłoszenia na topowych jobboardach",
          "zaplanowanie procesu rekrutacji z weryfikacją kompetencji językowych oraz umiejętności researchu",
        ],
      },
      {
        heading: "Rezultat",
        bullets: [
          "15 kandydatów zgodnych z profilem",
          "1 zatrudnienie z sukcesem",
          "wdrożenie kandydatki do zespołu",
        ],
      },
    ],
    quote: {
      text: "Zespół BQ zrekrutował ponad połowę naszego obecnego składu i wzbogacił nasz zespół o utalentowane osoby, dzięki którym wspólnie tworzymy organizację o wspierającej kulturze i opartą na wartościach. Proces rekrutacji był bardzo dostosowany do naszych potrzeb, a zespół zawsze przyjmował nasz feedback i dostosowywał współpracę. Dobra komunikacja i świetne umiejętności rekrutacyjne zbudowały zaufanie, dzięki któremu zdecydowaliśmy się na stałą współpracę. Dziękujemy, że jesteście naszymi partnerami w zatrudnianiu talentów w Lexmotion!",
      author: "Małgorzata (Nowotyńska) Magierska",
      role: "Adwokat / Właścicielka",
      company: "Lexmotion",
    },
  },
  {
    slug: "wsparcie-hr-managera-contman",
    title: "Dedykowane wsparcie HR Managera w ramach „HR na godziny”",
    client: "Contman",
    industry: "IT — low-code i BPM",
    service: "HR na godziny",
    excerpt:
      "Płynne przejęcie obowiązków HR Managerki w firmie technologicznej — od rekrutacji po strategię. Współpraca, która z 3-miesięcznego testu przerodziła się w ponad 1,5 roku.",
    challengeOneLine:
      "Płynne przejęcie kompleksowych obowiązków HR Managerki — od zaraz.",
    resultOneLine:
      "Ponad 1,5 roku stałej współpracy, 5 zatrudnień i spójna strategia HR.",
    facts: [
      { label: "Klient", value: "Contman" },
      { label: "Branża", value: "IT (low-code, BPM)" },
      { label: "Zakres", value: "HR na godziny · Rekrutacja · Warsztaty" },
      { label: "Czas", value: "Ponad 1,5 roku" },
    ],
    metrics: [
      { value: "5", label: "Zatrudnione i wdrożone osoby" },
      { value: "626h", label: "Dedykowanych konsultacji" },
      { value: "1", label: "Spójna strategia dla organizacji" },
    ],
    sections: [
      {
        heading: "Kontekst współpracy",
        paragraphs: [
          "Contman od ponad 20 lat dostarcza rozwiązania pozwalające cyfryzować dokumenty i procesy w organizacjach, specjalizuje się także w narzędziach low-code i business process management w Polsce i na świecie.",
          "Współpracę rozpoczęliśmy w 2022 roku, kiedy ówczesna HR Managerka szukała osoby na swoje miejsce. Po kilku rozmowach rekrutacyjnych nie znalazła kandydatki odpowiadającej na wszystkie potrzeby firmy, więc postawiła na inną formę współpracy — „HR na godziny”. Po spotkaniu próbnym zdecydowaliśmy się na 3-miesięczny test, który z czasem przerodził się w stałą współpracę trwającą już ponad 1,5 roku.",
        ],
      },
      {
        heading: "Wyzwanie",
        paragraphs: [
          "Głównym zadaniem BQ było płynne przejęcie kompleksowo realizowanych obowiązków HR Managerki w krótkim czasie. Zadania obejmowały:",
        ],
        bullets: [
          "współpracę z liderami",
          "wsparcie zarządu w podejmowaniu decyzji",
          "zarządzanie rekrutacjami oraz procesami personalnymi (onboarding, offboarding, ewaluacje, rozwój) — dla 16-osobowego zespołu wprowadzającego nową, strategiczną usługę",
        ],
      },
      {
        heading: "Rozwiązanie",
        bullets: [
          "zaangażowanie liderów już na etapie kick-offu — spotkanie nie tylko z współwłaścicielem i HR Managerką, ale też z kluczowymi liderami",
          "start w modelu „HR na godziny” — powtarzalne wsparcie operacyjne połączone z mniejszymi projektami wdrożeniowymi",
          "konsultant z doświadczeniem w firmach IT, rozumiejący ich kontekst biznesowy",
          "budowanie relacji z zespołem poprzez regularne spotkania 1on1 i zbieranie feedbacku na bieżąco",
        ],
      },
      {
        heading: "Rezultat",
        paragraphs: ["W ciągu 1,5 roku udało się m.in.:"],
        bullets: [
          "wdrożyć proces ewaluacji pozwalający na obiektywną ocenę zespołu",
          "zatrudnić 5 osób (w tym dwie do rozwoju nowej usługi low-code)",
          "przeprowadzić offboarding ze skutecznym przekazaniem wiedzy",
          "wypracować cele strategiczne z zarządem",
          "przeprowadzić warsztaty z zespołem sprzedaży dot. ścieżki klienta i strategii",
          "wprowadzić nowe benefity oraz codzienną kulturę feedbacku",
        ],
      },
    ],
    quote: {
      text: "Współpraca z zespołem BQ w ramach usługi „HR na godziny” oparta jest na profesjonalnym podejściu, dobrym poznaniu potrzeb firmy i ciągłym dostosowywaniu rozwiązań do zmieniających się potrzeb biznesowych. Procesy rekrutacyjne prowadzone są ze szczególną uwagą na culture fit kandydatów do organizacji.",
      author: "Tomasz Czubkowski",
      role: "Co-Founder / CTO",
      company: "Contman",
    },
  },
  {
    slug: "hr-recruitment-consulting-vercom",
    title: "HR Recruitment Consulting w spółce giełdowej Vercom",
    client: "Vercom",
    industry: "Technologie / CPaaS",
    service: "Interim Management",
    excerpt:
      "Ponad dwa lata wsparcia notowanej na giełdzie Grupy Vercom w centralizacji rekrutacji i budowie zespołów — w czasie szybkiego wzrostu przez akwizycje.",
    challengeOneLine:
      "Centralizacja rekrutacji w grupie spółek rosnącej przez akwizycje.",
    resultOneLine:
      "28 zatrudnień, ułożony proces rekrutacji i strona kariery w grupie.",
    facts: [
      { label: "Klient", value: "Vercom (CPaaS)" },
      { label: "Branża", value: "Technologie / komunikacja" },
      { label: "Zakres", value: "Interim Management · Rekrutacja · Warsztaty" },
      { label: "Czas", value: "Ponad 2 lata" },
    ],
    metrics: [
      { value: "28", label: "Zatrudnione i wdrożone osoby" },
      { value: "20", label: "Podjętych inicjatyw" },
      { value: "2 lata", label: "Współpracy" },
    ],
    sections: [
      {
        heading: "Kontekst współpracy",
        paragraphs: [
          "Grupa Vercom tworzy globalne platformy komunikacyjne w chmurze (CPaaS), które umożliwiają firmom budowanie trwałych relacji z odbiorcami w wielu kanałach. Grupę rozpoznać można po usługach takich jak Emaillabs, Redlink, SerwerSMS, FreshMail, PushPushGo czy Mailerlite.",
          "Współpracę rozpoczęliśmy w styczniu 2021 roku i kontynuowaliśmy ją przez ponad dwa lata, wspierając grupę w budowaniu zespołu i rekrutacji.",
        ],
      },
      {
        heading: "Wyzwanie",
        bullets: [
          "centralizacja procesu rekrutacji",
          "współpraca z kilkoma spółkami w ramach jednej grupy",
          "szybki rozwój organizacji przez akwizycje",
          "wsparcie Zarządu w decyzjach w obszarze ludzkim",
        ],
      },
      {
        heading: "Rozwiązanie",
        bullets: [
          "rozpoczęcie współpracy z dwiema konsultantkami interimowymi — ze względu na skalę i tempo rozwoju organizacji",
          "dodatkowe wsparcie zespołu rekrutacji w momentach zwiększonych potrzeb",
          "konsultanci z doświadczeniem w skalujących się firmach IT, rozumiejący ich kontekst biznesowy",
        ],
      },
      {
        heading: "Rezultat",
        bullets: [
          "mapowanie kompetencji w całej grupie",
          "ułożenie procesu rekrutacji",
          "stworzenie strony kariery",
          "projekt employer brandingowy skierowany do studentów",
          "moderowanie warsztatów strategicznych dla managerów",
        ],
      },
    ],
    quote: {
      text: "Współpracę z zespołem HR cenię ze względu na neutralność w podejściu do kandydatów oraz zaangażowanie w udzielanie odpowiedzi i feedback.",
      author: "Michał Dąbrowski",
      role: "Head of Marketing",
      company: "Vercom",
    },
  },
  {
    slug: "operacyjne-wsparcie-zarzadu-appchance",
    title: "Operacyjne wsparcie Zarządu w obszarze ludzkim",
    client: "Appchance",
    industry: "Software house",
    service: "HR na godziny",
    excerpt:
      "Od pojedynczych rekrutacji do stałego, operacyjnego wsparcia Zarządu — uporządkowanie procesów ludzi w rosnącym software housie w 7 miesięcy.",
    challengeOneLine:
      "Bieżące wsparcie Zarządu w obszarze ludzkim i uporządkowanie procesów.",
    resultOneLine:
      "W 7 miesięcy wdrożone procesy onboardingu, ewaluacji i feedbacku.",
    facts: [
      { label: "Klient", value: "Appchance" },
      { label: "Branża", value: "Software house" },
      { label: "Zakres", value: "HR na godziny · Rekrutacja · Strategia" },
      { label: "Czas", value: "7 miesięcy" },
    ],
    metrics: [
      { value: "2", label: "Nowe wdrożone procesy" },
      { value: "377h", label: "Dedykowanych konsultacji" },
      { value: "22", label: "Spotkania z liderami" },
    ],
    sections: [
      {
        heading: "Kontekst współpracy",
        paragraphs: [
          "Appchance to software house specjalizujący się w projektowaniu i budowie aplikacji mobilnych oraz webowych. Łączy biznesowy profesjonalizm z nieformalnymi relacjami, a skuteczność w realizacji celów — z brakiem sztywnej hierarchii.",
          "Współpracę rozpoczęliśmy od kilku procesów rekrutacyjnych, a z czasem — ze względu na potrzebę ułożenia procesów wewnętrznych — rozszerzyliśmy ją o usługę „HR na godziny”.",
        ],
      },
      {
        heading: "Wyzwanie",
        paragraphs: [
          "Głównym zadaniem BQ było bieżące wsparcie Zarządu w obszarze ludzkim. Zadania obejmowały:",
        ],
        bullets: [
          "przeprowadzenie audytu obszaru ludzkiego",
          "współpracę z liderami",
          "prowadzenie rekrutacji",
          "wsparcie Zarządu w podejmowaniu decyzji",
          "zarządzanie procesami personalnymi (onboarding, offboarding, ewaluacje, rozwój)",
        ],
      },
      {
        heading: "Rozwiązanie",
        bullets: [
          "rozpoczęcie współpracy w modelu „HR na godziny” — stałe, operacyjne wsparcie z porządkowaniem procesów",
          "konsultant z doświadczeniem w firmach IT, rozumiejący ich kontekst biznesowy",
          "audyt dotychczasowych działań w obszarze ludzkim i wyznaczenie priorytetów",
          "zaangażowanie liderów we wprowadzane zmiany poprzez spotkania 1on1",
        ],
      },
      {
        heading: "Rezultat",
        paragraphs: ["W ciągu 7 miesięcy:"],
        bullets: [
          "wdrożony proces onboardingu i offboardingu",
          "wdrożony i funkcjonujący proces ewaluacji kompetencji",
          "wdrożony cykl feedbacku dot. potrzeb zespołu",
          "funkcjonujące profile kompetencji",
          "wdrożony Idea Box zbierający oddolne inicjatywy zespołu",
          "przeprowadzona rekrutacja do zespołu sprzedaży",
          "bieżące wsparcie dla Zarządu i liderów",
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
