// Treść podstron usług pochodzi z dokumentu klienta „Karta usługi | Twój pierwszy
// zespół HR", zakładka „Opisy produktów na stronę" (stan z 2026-10-13).
// Poprawione tylko literówki i interpunkcja; zakresy liczbowe zapisane z "-".
// Pola id/icon/title/description/bullets zasilają karty na stronie głównej.

export interface ServiceOffering {
  title: string;
  text: string;
}

export interface PricePackage {
  name: string;
  price: string;
  rate: string;
  extra?: string;
}

export type PricingBlock =
  | {
      kind: "table";
      title: string;
      subtitle?: string;
      columns: string[];
      rows: string[][];
      note?: string;
    }
  | {
      kind: "packages";
      title: string;
      subtitle?: string;
      packages: PricePackage[];
      note?: string;
    }
  | { kind: "text"; title: string; paragraphs: string[] };

export interface Service {
  id: string;
  slug: string;
  icon: string;
  /** Tytuł karty na stronie głównej. */
  title: string;
  description: string;
  bullets: string[];
  /** Nagłówek podstrony (H1). */
  name: string;
  tagline: string;
  metaDescription: string;
  intro: string[];
  offeringsLabel: string;
  offerings: ServiceOffering[];
  pricingIntro?: string;
  pricing: PricingBlock[];
  /** Zdanie pod cennikiem z linkiem do innej usługi. */
  pricingAside?: { text: string; linkLabel: string; href: string };
  start: { title: string; paragraphs: string[]; ctaLabel: string };
  /** Slugi case studies pokazywanych na podstronie. */
  caseStudies: string[];
}

export const services: Service[] = [
  {
    id: "rekrutacje",
    slug: "rekrutacje",
    icon: "Users",
    title: "Rekrutacje i zatrudnianie",
    description:
      "Prowadzimy procesy, które zwykle zjadają najwięcej Twojego czasu i energii.",
    bullets: [
      "przygotowanie ogłoszeń rekrutacyjnych",
      "selekcja kandydatów",
      "organizacja procesu rozmów",
      "wsparcie w decyzji o zatrudnieniu",
    ],
    name: "Rekrutacje i zatrudnianie",
    tagline: "Prowadzimy rekrutację za Ciebie. Ty podejmujesz decyzję.",
    metaDescription:
      "Prowadzimy rekrutację za Ciebie: od profilu roli i ogłoszenia, przez selekcję, po rozmowy i shortlistę z rekomendacją. Decyzję o zatrudnieniu podejmujesz Ty.",
    intro: [
      "W małej firmie rekrutacja dzieje się obok wszystkiego innego, między klientami, sprzedażą i bieżącą pracą. Dlatego proces zwykle się przeciąga, a decyzja zapada pod presją czasu. Odciążymy Cię.",
      "Bierzemy na siebie prowadzenie procesu: od ustalenia, kogo naprawdę potrzebujesz, przez ogłoszenie i selekcję, po rozmowy i rekomendację. Ostateczną decyzję o zatrudnieniu podejmujesz Ty. Podejmujesz ją na podstawie uporządkowanego procesu skupionego wokół celu biznesowego, który jest dla Ciebie ważny.",
    ],
    offeringsLabel: "Zakres usługi",
    offerings: [
      {
        title: "Działamy z perspektywą celu",
        text: "Ustalamy, co sprawia, że wypełnienie wakatu jest potrzebne. Sprawdzamy, jaka rola pomoże Ci osiągnąć cel biznesowy, który wyznaczasz w organizacji.",
      },
      {
        title: "Prowadzimy rekrutację od ogłoszenia do oferty",
        text: "Ustalamy profil kandydata i zakres roli, przygotowujemy ogłoszenie, prowadzimy selekcję aplikacji, organizujemy rozmowy i przekazujemy Ci shortlistę z rekomendacją oraz uzasadnieniem.",
      },
      {
        title: "Wchodzimy w proces, który utknął",
        text: "Kilkanaście aplikacji i żadnej decyzji. Rekrutacja powtarzana po raz drugi na to samo stanowisko. Sprawdzamy, w którym miejscu proces nie zadziałał, i doprowadzamy go do końca.",
      },
      {
        title: "Przygotowujemy Cię do rozmów z kandydatami",
        text: "Scenariusz rozmowy, pytania, które dają konkretne informacje zamiast ogólników, i kryteria oceny. Tak, żeby po rozmowie dało się powiedzieć o kandydacie coś więcej niż „fajnie się rozmawiało”. :)",
      },
    ],
    pricingIntro:
      "Tę usługę realizujemy w dwóch formach. Wybór zależy od tego, czy rekrutacja jest jednorazowa, czy jest częścią szerszego wsparcia.",
    pricing: [
      {
        kind: "table",
        title: "Rekrutacja projektowa",
        subtitle: "Jednorazowy projekt rekrutacyjny",
        columns: [
          "Poziom roli",
          "Opłata początkowa",
          "Opłata za shortlistę",
          "Success fee",
        ],
        rows: [
          ["Junior / mid", "3 500-4 000 zł", "3 500-4 000 zł", "4-10%"],
          ["Mid / senior", "4 000-5 500 zł", "4 000-5 500 zł", "4-10%"],
          ["Senior / manager", "5 500-6 000 zł", "5 500-6 000 zł", "4-10%"],
          ["Manager", "6 000-8 000 zł", "6 000-8 000 zł", "4-10%"],
        ],
        note: "Widełki zależą od trudności roli i sytuacji na rynku. Ustalamy je przed startem, a nie w trakcie.",
      },
      {
        kind: "text",
        title: "HR na godziny: rekrutacja w ramach pakietu",
        paragraphs: [
          "Jeśli rekrutacja jest jednym z kilku tematów, którymi się dla Ciebie zajmujemy, wchodzi w pakiet godzinowy: 16 h obejmuje jedną rekrutację, 32 h dwie, a 64 h trzy. Powyżej tego ustalamy stałą opłatę za zatrudnienie.",
        ],
      },
    ],
    pricingAside: {
      text: "Pakiety godzinowe opisujemy szczegółowo przy usłudze",
      linkLabel: "Wdrożenie i operacyjne prowadzenie procesów HR",
      href: "/uslugi/procesy-hr#cennik",
    },
    start: {
      title: "Spotkanie kick-off",
      paragraphs: [
        "Zaczynamy od spotkania kick-off. Na nim ustalamy wstępne założenia potrzeby rekrutacyjnej.",
        "Po kick-offie dostajesz harmonogram procesu i wycenę.",
      ],
      ctaLabel: "Umów rozmowę",
    },
    caseStudies: [
      "niestandardowe-podejscie-do-niestandardowej-potrzeby-rekrutacji-genealoga",
    ],
  },
  {
    id: "sparing",
    slug: "sparing-partner",
    icon: "MessageCircle",
    title: "Twój sparing partner w decyzjach personalnych",
    description:
      "Druga perspektywa w momentach, w których trudno decydować w pojedynkę.",
    bullets: [
      "trudne rozmowy z pracownikami",
      "zmiana roli lub zakresu odpowiedzialności",
      "sytuacje konfliktowe w zespole",
      "decyzje o rozstaniu z pracownikiem",
      "rozmowy o wynagrodzeniach i zmianach w zespole",
    ],
    name: "Twój sparing partner",
    tagline:
      "Poszerzona perspektywa przy decyzjach, których nie chcesz podejmować sam.",
    metaDescription:
      "Druga perspektywa przy trudnych decyzjach personalnych: konflikt w zespole, trudna rozmowa, rozstanie z pracownikiem, rozmowa o wynagrodzeniu. Konsultacje godzinowe i pakiety.",
    intro: [
      "Część decyzji związanych z zespołem jest trudna nie dlatego, że nie wiesz, co zrobić. Jest trudna dlatego, że nie masz z kim tego przegadać, a przegadanie z kimś z wewnątrz jest niemożliwe. Potrzebujesz bezstronnego eksperta.",
      "Jesteśmy po to, żeby te decyzje miały drugą perspektywę: perspektywę kogoś z doświadczeniem z wielu firm i z dystansem do Twojej sytuacji. Czasem to jedna rozmowa przed trudnym spotkaniem. Czasem stały kontakt przez kilka miesięcy, bo tematów jest więcej.",
    ],
    offeringsLabel: "Przykłady",
    offerings: [
      {
        title: "Pomagamy rozwiązać konflikt w zespole",
        text: "Oddzielamy fakty od emocji, słuchamy obu stron i ustalamy, o co tak naprawdę toczy się spór. Przygotowujemy Cię do rozmowy albo prowadzimy ją razem z Tobą, tak żeby kończyła się konkretnymi ustaleniami, a nie chwilowym zawieszeniem broni.",
      },
      {
        title: "Pomagamy podejmować decyzje biznesowe z myślą o ludziach",
        text: "Nowy dział, reorganizacja, zmiana struktury, cięcie kosztów: sprawdzamy, co każda z tych decyzji oznacza dla zespołu, kogo dotknie najbardziej i jak ją przeprowadzić, żeby nie stracić osób, na których Ci zależy.",
      },
      {
        title: "Podpowiadamy, jak budować w zespole kompetencje i zaangażowanie",
        text: "Ustalamy, jakich umiejętności zespół potrzebuje teraz i za rok, kogo rozwijać i w jaki sposób, a także jak rozmawiać z ludźmi o ich rozwoju. Bez szkoleń dla samych szkoleń, a z planem, który da się wpisać w codzienną pracę.",
      },
      {
        title: "Przygotowujemy Cię do trudnej rozmowy",
        text: "Ustalamy fakty, o które chcesz się oprzeć, wpływ sytuacji na zespół i firmę, oczekiwania, które chcesz postawić, i możliwe reakcje drugiej strony. Jeśli potrzebujesz, jesteśmy na tej rozmowie razem z Tobą.",
      },
      {
        title: "Przeprowadzamy Cię przez decyzję o rozstaniu",
        text: "Od oceny, czy to rzeczywiście ten moment i czy wszystko, co było do zrobienia, zostało zrobione, przez przebieg samej rozmowy, po komunikację do zespołu i przekazanie obowiązków.",
      },
      {
        title: "Pomagamy ułożyć rozmowę o wynagrodzeniu lub zmianie roli",
        text: "Co możesz zaoferować, czego lepiej nie obiecywać i jak to powiedzieć, żeby nie zamknąć sobie drogi do kolejnej rozmowy za pół roku.",
      },
    ],
    pricing: [
      {
        kind: "packages",
        title: "Konsultacje godzinowe",
        packages: [
          { name: "Pojedyncza godzina", price: "350 zł", rate: "350 zł/h" },
          { name: "10 h", price: "3 000 zł", rate: "300 zł/h" },
          { name: "20 h", price: "5 600 zł", rate: "280 zł/h" },
        ],
        note: "Pakiety od 5 do 20 godzin, do wykorzystania w ciągu kwartału. Godziny wykorzystujesz wtedy, kiedy ich potrzebujesz. Nie musisz planować spotkań z góry.",
      },
    ],
    pricingAside: {
      text: "Jeśli przewidujesz, że tematów będzie więcej niż same rozmowy, sprawdź",
      linkLabel: "pakiety HR na godziny",
      href: "/uslugi/procesy-hr#cennik",
    },
    start: {
      title: "30 minut bezpłatnej konsultacji",
      paragraphs: [
        "Zaczynamy od pierwszej, bezpłatnej 30-minutowej konsultacji. Opowiadasz, z czym się mierzysz, a my mówimy wprost, czy i jak możemy pomóc oraz ile godzin realnie będzie potrzebne.",
        "Jeśli to jednorazowy temat, często wystarczy jedna rozmowa i nie proponujemy pakietu.",
      ],
      ctaLabel: "Umów bezpłatną konsultację",
    },
    caseStudies: ["operacyjne-wsparcie-zarzadu-appchance"],
  },
  {
    id: "procesy",
    slug: "procesy-hr",
    icon: "Layers",
    title: "Procesy HR — skuteczność operacyjna zespołu",
    description: "Porządkujemy sposób pracy zespołu, gdy firma rośnie.",
    bullets: [
      "doprecyzowanie zakresów odpowiedzialności",
      "uporządkowanie struktury zespołu",
      "ścieżki rozwoju",
      "podstawowe zasady współpracy",
    ],
    name: "Wdrożenie i operacyjne prowadzenie procesów HR",
    tagline:
      "Porządkujemy sposób pracy zespołu tak, żeby nie każda decyzja wracała do Ciebie.",
    metaDescription:
      "Porządkujemy sposób pracy zespołu w małej firmie: odpowiedzialności, strukturę, ścieżki rozwoju, zasady współpracy i oceny pracownicze. HR na godziny od 16 h.",
    intro: [
      "To, co działało przy trzech osobach, przestaje działać przy ośmiu. Zadania zaczynają wisieć między ludźmi, decyzje wracają na Twoje biurko, a kiedy coś nie zostaje zrobione, słyszysz: „myślałam, że robi to ktoś inny”.",
      "Porządkujemy sposób pracy zespołu: zakresy odpowiedzialności, strukturę, ścieżki rozwoju i zasady współpracy. Wprowadzamy tylko te rozwiązania, które realnie ułatwiają pracę i które jesteście w stanie utrzymać bez nas. Małe firmy nie potrzebują rozbudowanych systemów HR. Potrzebują jasności.",
    ],
    offeringsLabel: "Przykłady",
    offerings: [
      {
        title: "Porządkujemy odpowiedzialności w zespole",
        text: "Rozpisujemy konkretne działania i decyzje: kto je wykonuje, kto ostatecznie odpowiada, kogo konsultujemy, a kogo wystarczy poinformować.",
      },
      {
        title: "Układamy strukturę zespołu i ścieżki rozwoju",
        text: "Kto komu raportuje, jak wygląda przejście na kolejny poziom i czego na tym poziomie oczekujecie. To jest też odpowiedź na pytanie, które prędzej czy później usłyszysz: „co dalej, jeśli zostanę tu na kolejne dwa lata?”.",
      },
      {
        title: "Ustalamy zasady współpracy w zespole",
        text: "Jak przekazujecie sobie informację zwrotną, gdzie zapisujecie ustalenia, jaki macie rytm spotkań i co robicie, kiedy pojawia się błąd. Wszystko na jednej stronie, nie w regulaminie.",
      },
      {
        title: "Porządkujemy komunikację wewnętrzną",
        text: "Ustalamy, które informacje, jakim kanałem i od kogo mają trafiać do zespołu, żeby ludzie nie dowiadywali się o ważnych sprawach z tzw. kuchni. Wprowadzamy stały rytm spotkań i komunikatów, który działa także wtedy, gdy Ciebie nie ma w biurze.",
      },
      {
        title: "Tworzymy standardy marki pracodawcy",
        text: "Określamy, czym Twoja firma realnie przyciąga i zatrzymuje ludzi, i przekładamy to na spójny przekaz w ogłoszeniach, na stronie, w social mediach i podczas rozmów z kandydatami. Tak, żeby przyciągać najlepsze talenty z rynku.",
      },
      {
        title: "Tworzymy system ocen pracowniczych",
        text: "Ustalamy, co i jak oceniasz, jak często rozmawiasz z ludźmi o ich pracy i co z tych rozmów wynika: rozwój, podwyżka, zmiana roli. Projektujemy go tak, żeby był narzędziem do rozmowy, a nie coroczną formalnością, którą wszyscy chcą mieć za sobą.",
      },
    ],
    pricing: [
      {
        kind: "packages",
        title: "HR na godziny w modelu Freelancer HR",
        subtitle: "Wsparcie operacyjne",
        packages: [
          { name: "16 h", price: "4 000 zł", rate: "250 zł/h", extra: "1 rekrutacja" },
          { name: "32 h", price: "6 400 zł", rate: "200 zł/h", extra: "2 rekrutacje" },
          { name: "64 h", price: "8 000 zł", rate: "125 zł/h", extra: "3 rekrutacje" },
        ],
        note: "Przy większej liczbie rekrutacji ustalamy dodatkowo stałą opłatę za zatrudnienie, od 2 000 zł netto za osobę.",
      },
      {
        kind: "text",
        title: "Model elastyczny: stała współpraca",
        paragraphs: [
          "Stałe wynagrodzenie miesięczne, które wymiennie przeznaczasz na godziny konsultacji, opłatę rekrutacyjną albo szkolenie dla zespołu. Dobre rozwiązanie, kiedy wiesz, że tematy ludzi będą wracać regularnie, ale nie wiesz jeszcze, które z nich. Wycena po warsztacie kick-starter.",
        ],
      },
    ],
    start: {
      title: "Warsztat kick-starter",
      paragraphs: [
        "Zaczynamy od warsztatu kick-starter. Na nim sprawdzamy, jak dziś wygląda praca zespołu, gdzie wracają te same problemy i co warto uporządkować najpierw.",
        "Wychodzisz z niego z listą obszarów do zrobienia, ustaloną kolejnością i wyceną współpracy, nawet jeśli dalej zdecydujesz się działać samodzielnie.",
      ],
      ctaLabel: "Zapytaj o warsztat",
    },
    caseStudies: [
      "wsparcie-hr-managera-contman",
      "operacyjne-wsparcie-zarzadu-appchance",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
