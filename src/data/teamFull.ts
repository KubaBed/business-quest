// Pełny zespół (strona „O nas") — treść z eksportu WordPress (businessquest.pl).
// photo: ścieżka do zdjęcia, jeśli dostępne; w przeciwnym razie karta używa
// monogramu z inicjałami na gradiencie marki.

export interface TeamMember {
  name: string;
  specialization: string; // tagi specjalizacji, np. "procesy / coaching"
  bio: string;
  photo?: string;
  linkedin?: string;
}

export const teamFull: TeamMember[] = [
  {
    name: "Jakub Bednarz",
    specialization: "project management / mentoring / szkolenia",
    bio: "Project Manager z wieloletnim doświadczeniem w branży IT i prawniczej. Z sukcesem prowadził dziesiątki projektów biznesowych z budżetem od kilkunastu tysięcy do kilku milionów złotych. W swojej karierze przeszkolił już kilkaset osób z tematyki projektowej. Certyfikowany Scrum Master.",
  },
  {
    name: "Zuzanna Woźniak",
    specialization: "strategia / procesy operacyjne / skalowanie i zarządzanie zmianą",
    bio: "Konsultant z ponad 10-letnim doświadczeniem we współpracy z różnej wielkości organizacjami z branży nowoczesnych technologii. Ekspertka w obszarze HR, operacji, strategii i celów biznesowych. W codziennej pracy kieruje się wartościami zbieżnymi z Management 3.0 i Radical Candor.",
    photo: "/images/team/zuzia.webp",
    linkedin: "https://www.linkedin.com/in/zuzawozprzyb/",
  },
  {
    name: "Alicja Piotrowska",
    specialization: "procesy / coaching i mentoring / zarządzanie ludźmi",
    bio: "Doświadczona konsultantka w projektach interimowych. Wspiera organizacje we wdrażaniu i zarządzaniu strategii i procesów HR oraz operacyjnych. Certyfikowana Coach (Certyfikat CCA), specjalistka w zakresie zarządzania projektami i zespołami.",
  },
  {
    name: "Katarzyna Żurek",
    specialization: "UX / project management / strategia / zarządzanie ludźmi",
    bio: "Zajmuje się projektowaniem doświadczeń użytkownika (UX) i zarządzaniem produktami oraz projektami — zarówno w startupach, jak i korporacjach. Łączy technologię z biznesem, tworząc strony internetowe oraz aplikacje webowe i mobilne. Pracowała jako konsultant HR/EB, wspierając firmy w zarządzaniu procesami i komunikacją. Prowadzi szkolenia i warsztaty dla zespołów i managerów.",
  },
  {
    name: "Joanna Nowak",
    specialization: "coaching / procesy / consulting",
    bio: "Doświadczona ekspertka w dziedzinie HR, trenerka i konsultantka biznesu, executive i team coach. Absolwentka psychologii klinicznej na Uniwersytecie SWPS, Analityczka Transakcyjna oraz certyfikowana praktyk Process Communication Model® (PCM).",
    photo: "/images/team/asia.webp",
    linkedin: "http://www.linkedin.com/in/joanna-nowakpcm",
  },
  {
    name: "Filip Walkowiak",
    specialization: "project management / doradztwo biznesowe / strategia sprzedaży",
    bio: "Doświadczony project manager w branży prawniczej, podatkowej, IT, pirotechnicznej oraz eventowej. W realizacji projektów skupia się na dobrym zrozumieniu wszystkich interesariuszy i szybkim testowaniu rozwiązań. Certyfikowany Product Owner Scrum Alliance.",
  },
  {
    name: "Karolina Turostowska",
    specialization: "procesy / szkolenia / coaching i mentoring / konsulting",
    bio: "Ekspertka HR z ponad 18-letnim doświadczeniem w branżach telco, farmacja, digital marketing i OZE. Certyfikowana Trenerka, Coachka oraz Analityczka Transakcyjna. Na co dzień wspiera kadrę zarządzającą w budowaniu angażującego środowiska pracy, w którym ludzie mają warunki do skutecznej realizacji celów.",
  },
  {
    name: "Marta Pigla",
    specialization: "rekrutacja / employer branding / konsulting",
    bio: "Psycholożka z wykształcenia, zawodowo HR-owiec z 10-letnim stażem, głównie w branży produkcyjnej. Prowadzi markę Growth Care, specjalizując się w rekrutacji, employer brandingu i komunikacji. Pracuje jako asesorka i coach kariery (ICF), odpowiada za EB i rekrutację w Fundacji TAKpełnosprawni. Promuje holistyczny rozwój i ścieżki karier o pozytywnym wpływie.",
    photo: "/images/team/marta.webp",
    linkedin: "https://www.linkedin.com/in/martapigla/",
  },
];
