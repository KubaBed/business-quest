// Wpisy blogowe.
// UWAGA: treści poniżej to wersje robocze (draft) napisane w tonie marki —
// do podmiany / weryfikacji realnymi wpisami z businessquest.pl.

export interface PostBlock {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO — do sortowania
  dateLabel: string; // czytelna data PL
  readingTime: string;
  category: string;
  content: PostBlock[];
}

export const posts: Post[] = [
  {
    slug: "pierwsza-rekrutacja-w-malej-firmie",
    title: "Pierwsza rekrutacja w małej firmie — od czego zacząć",
    excerpt:
      "Zanim opublikujesz ogłoszenie, warto odpowiedzieć sobie na kilka pytań. Dzięki nim pierwsza rekrutacja nie skończy się nietrafionym zatrudnieniem.",
    date: "2026-05-28",
    dateLabel: "28 maja 2026",
    readingTime: "5 min czytania",
    category: "Rekrutacja",
    content: [
      {
        paragraphs: [
          "Pierwsza rekrutacja to moment, w którym mała firma przestaje być projektem jednej osoby. To dobra wiadomość — i jednocześnie decyzja, której nie chce się powtarzać co kilka miesięcy, bo poprzednia osoba nie dowiozła.",
          "Zanim opublikujesz ogłoszenie, warto cofnąć się o krok. Najczęstszy błąd przy pierwszym zatrudnieniu nie polega na złym wyborze kandydata — tylko na niejasnym pomyśle, kogo i po co właściwie szukamy.",
        ],
      },
      {
        heading: "Zacznij od potrzeby, nie od stanowiska",
        paragraphs: [
          "„Potrzebuję człowieka do pomocy” to jeszcze nie jest profil rekrutacyjny. Spróbuj nazwać, które konkretnie zadania chcesz oddać i ile czasu zajmują Ci dziś tygodniowo. To pokaże, czy szukasz specjalisty, osoby do zadań różnych, czy może kogoś, kto z czasem przejmie część odpowiedzialności.",
        ],
        bullets: [
          "Jakie zadania chcę oddać w pierwszej kolejności?",
          "Co ta osoba musi umieć od pierwszego dnia, a czego nauczy się u nas?",
          "Po czym poznam za trzy miesiące, że to był dobry wybór?",
        ],
      },
      {
        heading: "Opisz realną pracę, nie wymarzony ideał",
        paragraphs: [
          "Ogłoszenia, które obiecują „dynamiczne środowisko” i wymagają dziesięciu kompetencji naraz, przyciągają przypadkowe zgłoszenia. W małej firmie działa coś odwrotnego: konkret. Napisz, jak wygląda tydzień na tym stanowisku, z kim osoba będzie pracować i na czym najbardziej Ci zależy.",
          "Szczerość na tym etapie oszczędza rozczarowań po obu stronach — i skraca proces, bo zgłaszają się ludzie, którzy naprawdę pasują.",
        ],
      },
      {
        heading: "Zaplanuj proces, zanim ruszą zgłoszenia",
        paragraphs: [
          "Ustal z góry, ile etapów będzie miała rekrutacja, kto rozmawia z kandydatami i w jakim czasie odpowiadasz. Kandydaci pamiętają firmy, które trzymają tempo i dają informację zwrotną — nawet gdy decyzja jest odmowna.",
        ],
      },
      {
        heading: "Kiedy warto poprosić o wsparcie",
        paragraphs: [
          "Jeśli rekrutacja ciągnie się tygodniami między innymi obowiązkami albo nie jesteś pewien, jak ocenić kandydatów, to dobry moment, żeby ktoś poprowadził proces razem z Tobą. W businessQuest robimy dokładnie to — od ogłoszenia, przez selekcję, po wsparcie w finalnej decyzji.",
        ],
      },
    ],
  },
  {
    slug: "twoj-pierwszy-zespol-hr",
    title: "Twój pierwszy zespół HR — czego naprawdę potrzebuje mała firma",
    excerpt:
      "Mała firma nie potrzebuje działu HR ani grubych procedur. Potrzebuje kogoś, kto poprowadzi tematy ludzi na bieżąco — i prostych rozwiązań, które da się utrzymać.",
    date: "2026-05-12",
    dateLabel: "12 maja 2026",
    readingTime: "4 min czytania",
    category: "HR dla małych firm",
    content: [
      {
        paragraphs: [
          "W małej firmie tematy ludzi nie mają swojego działu. Mają biurko właściciela. Rekrutacja, trudna rozmowa, decyzja o podwyżce, rosnące napięcie w zespole — wszystko to pojawia się między sprzedażą, klientami i finansami.",
          "Kiedy firma rośnie, pojawia się odruch: „chyba potrzebujemy HR-u”. Ale zwykle nie chodzi o cały dział ani o system, który trzeba obsługiwać. Chodzi o to, żeby te sprawy przestały lądować tylko na jednej osobie.",
        ],
      },
      {
        heading: "Czego mała firma nie potrzebuje",
        bullets: [
          "Rozbudowanych procedur, których nikt nie przeczyta.",
          "Narzędzi HR zaprojektowanych dla korporacji.",
          "Polityk personalnych na zapas, bez realnej potrzeby.",
        ],
      },
      {
        heading: "Czego potrzebuje naprawdę",
        paragraphs: [
          "Prostych rozwiązań, które realnie ułatwiają pracę i da się utrzymać na co dzień. I partnera, z którym można przegadać decyzje o zespole — i który pomaga je wprowadzić w życie, nie tylko nazwać.",
          "To jest idea „pierwszego zespołu HR”: wsparcie skrojone na skalę małej firmy. Pojawia się tam, gdzie jest potrzebne, i nie zostawia po sobie biurokracji.",
        ],
      },
      {
        heading: "Trzy obszary, w których to widać",
        bullets: [
          "Rekrutacje i zatrudnianie — procesy, które zwykle zjadają najwięcej czasu.",
          "Sparing partner w decyzjach personalnych — druga perspektywa, gdy trudno decydować w pojedynkę.",
          "Procesy HR — porządkowanie ról i sposobu pracy, gdy zespół się rozrasta.",
        ],
      },
      {
        paragraphs: [
          "Najważniejsze: rola takiego wsparcia nie kończy się na rekomendacji. Jeśli trzeba — prowadzimy rekrutację, przygotowujemy checklisty albo wdrażamy ustalenia w zespole. Tak, aby każda decyzja o ludziach nie wracała na Twoje biurko.",
        ],
      },
    ],
  },
  {
    slug: "trudna-rozmowa-z-pracownikiem",
    title: "Trudna rozmowa z pracownikiem — jak się do niej przygotować",
    excerpt:
      "Rozmowy o wynikach, zmianie roli czy rozstaniu odkładamy najdłużej. A im dłużej czekamy, tym trudniej. Kilka zasad, które pomagają przejść przez nie po ludzku.",
    date: "2026-04-22",
    dateLabel: "22 kwietnia 2026",
    readingTime: "6 min czytania",
    category: "Zarządzanie zespołem",
    content: [
      {
        paragraphs: [
          "Trudne rozmowy to ta część zarządzania, którą najłatwiej odkładać. Spadające wyniki, zmiana zakresu obowiązków, napięcie w zespole, czasem decyzja o rozstaniu — wszystkie mają jedną wspólną cechę: im dłużej zwlekamy, tym bardziej rosną.",
          "Dobra wiadomość jest taka, że trudna rozmowa nie musi być konfrontacją. Przy odrobinie przygotowania może być najzwyklejszą rozmową dwojga dorosłych ludzi o tym, co wymaga zmiany.",
        ],
      },
      {
        heading: "Przygotuj fakty, nie zarzuty",
        paragraphs: [
          "Zanim usiądziesz do rozmowy, zbierz konkrety: co dokładnie się dzieje, od kiedy, jaki ma to wpływ na pracę zespołu. Konkret rozbraja emocje. „Ostatnie trzy projekty oddaliśmy po terminie” brzmi inaczej niż „znów się nie wyrabiasz”.",
        ],
      },
      {
        heading: "Nazwij cel rozmowy",
        paragraphs: [
          "Zastanów się, z czym chcesz z niej wyjść. Czy to korekta i wspólny plan na kolejne tygodnie? Zmiana zakresu odpowiedzialności? A może faktycznie rozstanie? Jasny cel pomaga prowadzić rozmowę, zamiast w niej dryfować.",
        ],
      },
      {
        heading: "Zostaw przestrzeń na drugą stronę",
        paragraphs: [
          "Trudna rozmowa to nie monolog. Często to, co wygląda na brak zaangażowania, ma swoje przyczyny — przeciążenie, niejasne oczekiwania, sprawy prywatne. Pytanie „jak Ty to widzisz?” bywa najważniejszym zdaniem całego spotkania.",
        ],
        bullets: [
          "Mów o zachowaniach i faktach, nie o cechach charakteru.",
          "Słuchaj, zanim przejdziesz do rozwiązań.",
          "Zakończ ustaleniem konkretnych kroków i terminu, w którym do nich wrócicie.",
        ],
      },
      {
        heading: "Nie musisz w tym być sam",
        paragraphs: [
          "Łatwiej podjąć trudną decyzję, gdy można ją przegadać z kimś, kto ma doświadczenie i dystans do sytuacji. To jedna z ról, w których najczęściej jesteśmy obok naszych klientów — jako sparing partner przed rozmową i po niej.",
        ],
      },
    ],
  },
  {
    slug: "kiedy-siegnac-po-wsparcie-hr-z-zewnatrz",
    title: "Kiedy warto sięgnąć po wsparcie HR z zewnątrz",
    excerpt:
      "Nie trzeba czekać na kryzys. Najczęściej najlepszy moment przychodzi wtedy, gdy firma po prostu rośnie — a tematy zespołu zajmują coraz więcej czasu.",
    date: "2026-04-03",
    dateLabel: "3 kwietnia 2026",
    readingTime: "4 min czytania",
    category: "HR dla małych firm",
    content: [
      {
        paragraphs: [
          "Wsparcie HR z zewnątrz kojarzy się czasem z gaszeniem pożarów. W praktyce najlepszy moment, żeby po nie sięgnąć, rzadko ma związek z kryzysem. Najczęściej pojawia się wtedy, gdy firma rośnie i tematy ludzi zaczynają zajmować coraz więcej głowy.",
        ],
      },
      {
        heading: "Sygnały, które warto zauważyć",
        bullets: [
          "Sprawy zespołu wracają do Ciebie — rekrutacje, trudne rozmowy, decyzje o zmianach.",
          "Rekrutacje zabierają za dużo czasu albo kończą się nietrafionymi zatrudnieniami.",
          "Pojawiają się trudne decyzje personalne, których nie chcesz podejmować w pojedynkę.",
          "Sposób zarządzania przestał nadążać za firmą — to, co działało przy kilku osobach, zaczyna zgrzytać.",
          "Chcesz wsparcia w tematach ludzi, ale nie chcesz budować działu HR.",
        ],
      },
      {
        heading: "Dlaczego z zewnątrz, a nie własny dział",
        paragraphs: [
          "Mała firma rzadko potrzebuje etatowego HR-u w pełnym wymiarze. Potrzebuje za to elastycznego wsparcia — kogoś, kto poprowadzi temat, gdy się pojawi, i zniknie, gdy jest ogarnięty. Bez stałego kosztu i bez budowania struktury na zapas.",
          "Dodatkowa wartość to dystans i doświadczenie z wielu organizacji. Schematy problemów rozpoznaje się szybciej, gdy widziało się je w kilkunastu firmach — często zanim zdążą urosnąć.",
        ],
      },
      {
        heading: "Od czego zacząć",
        paragraphs: [
          "Nie trzeba od razu decydować o zakresie współpracy. Najprościej zacząć od rozmowy o tym, co teraz najbardziej zajmuje Ci głowę w temacie zespołu — i wspólnie zobaczyć, czy i jak możemy pomóc.",
        ],
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export const sortedPosts = [...posts].sort(
  (a, b) => +new Date(b.date) - +new Date(a.date)
);
