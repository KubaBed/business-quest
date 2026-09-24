import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Polityka prywatności - businessQuest",
  description:
    "Jak Business Quest sp. z o.o. przetwarza dane osobowe osób, które kontaktują się z nami przez stronę, e-mail i formularze.",
};

const CONTACT_EMAIL = "zuzanna.wozniak@businessquest.pl";

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "1. Administrator danych",
    body: (
      <p>
        Administratorem Twoich danych osobowych jest Business Quest sp. z o.o.,
        ul. Szewska 10/5, 61-760 Poznań, NIP 7831919560. We wszystkich sprawach
        dotyczących danych osobowych napisz do nas na adres{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    ),
  },
  {
    title: "2. Jakie dane zbieramy i skąd",
    body: (
      <ul>
        <li>
          Dane, które podajesz, pisząc do nas e-mailem lub przez formularz
          kontaktowy na stronie: imię i nazwisko, nazwa firmy, adres e-mail,
          numer telefonu i treść wiadomości.
        </li>
        <li>
          Dane z formularzy kontaktowych w reklamach na Facebooku i Instagramie
          (Meta): zwykle imię i nazwisko, adres e-mail, numer telefonu, nazwa
          firmy i odpowiedzi na pytania w formularzu.
        </li>
        <li>
          Adres e-mail, jeśli zapiszesz się na nasz newsletter lub na webinar.
        </li>
        <li>
          Podstawowe dane techniczne (adres IP, typ przeglądarki, czas wizyty),
          które serwer zapisuje automatycznie w logach przy każdym wejściu na
          stronę.
        </li>
      </ul>
    ),
  },
  {
    title: "3. Po co i na jakiej podstawie",
    body: (
      <ul>
        <li>
          Odpowiedź na zapytanie i przygotowanie oferty: art. 6 ust. 1 lit. b
          RODO (działania przed zawarciem umowy) oraz lit. f (nasz prawnie
          uzasadniony interes, czyli kontakt z osobą, która nas o niego
          poprosiła).
        </li>
        <li>
          Realizacja umowy ze współpracującą z nami firmą: art. 6 ust. 1 lit. b
          RODO.
        </li>
        <li>
          Wysyłka newslettera i informacji o webinarach: art. 6 ust. 1 lit. a
          RODO (Twoja zgoda, którą możesz wycofać w każdej chwili).
        </li>
        <li>
          Obowiązki księgowe i podatkowe: art. 6 ust. 1 lit. c RODO.
        </li>
        <li>
          Bezpieczeństwo strony i ewentualne dochodzenie roszczeń: art. 6 ust. 1
          lit. f RODO.
        </li>
      </ul>
    ),
  },
  {
    title: "4. Jak długo przechowujemy dane",
    body: (
      <ul>
        <li>
          Korespondencję i dane z zapytań, które nie zakończyły się współpracą:
          do 12 miesięcy od ostatniego kontaktu.
        </li>
        <li>
          Dane związane z umową: przez czas współpracy, a potem do upływu
          terminów przedawnienia roszczeń i przez okres wymagany przepisami
          podatkowymi.
        </li>
        <li>Dane do newslettera: do wycofania zgody.</li>
        <li>Logi serwera: do 30 dni.</li>
      </ul>
    ),
  },
  {
    title: "5. Komu przekazujemy dane",
    body: (
      <>
        <p>
          Nie sprzedajemy danych. Korzystamy z usług firm, które przetwarzają
          je w naszym imieniu i na podstawie umów powierzenia:
        </p>
        <ul>
          <li>Google (poczta e-mail w usłudze Google Workspace),</li>
          <li>Vercel (hosting strony),</li>
          <li>Web3Forms (przekazywanie wiadomości z formularza kontaktowego na naszą skrzynkę),</li>
          <li>Meta Platforms (formularze w reklamach na Facebooku i Instagramie),</li>
          <li>MailerLite (wysyłka newslettera),</li>
          <li>biuro rachunkowe, jeśli dochodzi do współpracy.</li>
        </ul>
        <p>
          Część z tych firm może przetwarzać dane poza Europejskim Obszarem
          Gospodarczym, głównie w USA. Odbywa się to na podstawie decyzji Komisji
          Europejskiej o adekwatności (EU-US Data Privacy Framework) lub
          standardowych klauzul umownych.
        </p>
      </>
    ),
  },
  {
    title: "6. Twoje prawa",
    body: (
      <>
        <p>Masz prawo do:</p>
        <ul>
          <li>dostępu do swoich danych i otrzymania ich kopii,</li>
          <li>sprostowania danych,</li>
          <li>usunięcia danych,</li>
          <li>ograniczenia przetwarzania,</li>
          <li>przeniesienia danych,</li>
          <li>
            sprzeciwu wobec przetwarzania opartego na naszym prawnie
            uzasadnionym interesie,
          </li>
          <li>wycofania zgody w dowolnym momencie, bez wpływu na wcześniejsze przetwarzanie.</li>
        </ul>
        <p>
          Wystarczy napisać na <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          Możesz też złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych
          (ul. Stawki 2, 00-193 Warszawa).
        </p>
        <p>
          Podanie danych jest dobrowolne, ale bez nich nie odpowiemy na
          zapytanie. Nie podejmujemy wobec Ciebie decyzji w sposób
          zautomatyzowany ani nie profilujemy Cię.
        </p>
      </>
    ),
  },
  {
    title: "7. Pliki cookies",
    body: (
      <p>
        Strona nie używa cookies analitycznych ani marketingowych. Mogą pojawić
        się jedynie pliki niezbędne do jej technicznego działania. Jeśli dodamy
        narzędzia analityczne lub reklamowe, zaktualizujemy tę politykę i
        poprosimy Cię o zgodę.
      </p>
    ),
  },
  {
    title: "8. Zmiany polityki",
    body: (
      <p>
        Politykę aktualizujemy, gdy zmieniają się przepisy lub sposób, w jaki
        przetwarzamy dane. Aktualna wersja jest zawsze dostępna na tej stronie.
        Ostatnia aktualizacja: 24 września 2026 r.
      </p>
    ),
  },
];

export default function PolitykaPrywatnosciPage() {
  return (
    <>
      <PageHeader
        eyebrow="Polityka prywatności"
        crumbs={[{ label: "Start", href: "/" }, { label: "Polityka prywatności" }]}
        title={<>Polityka prywatności</>}
        lead="Kto przetwarza Twoje dane, w jakim celu i jakie masz prawa."
      />

      <article className="pb-20 lg:pb-28 bg-brand-bg">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-brand-text leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-2 [&_a]:text-magenta-deep [&_a]:underline">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-2xl font-bold tracking-tight leading-snug mt-10 mb-4 first:mt-0">
                {s.title}
              </h2>
              {s.body}
            </section>
          ))}
        </div>
      </article>
    </>
  );
}
