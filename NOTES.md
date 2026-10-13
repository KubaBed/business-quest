# NOTES — Business Quest

## 2026-10-13 (sesja: podstrony usług)

- Zbudowane `/uslugi/rekrutacje`, `/uslugi/sparing-partner`, `/uslugi/procesy-hr` (trasa `src/app/uslugi/[slug]`, treść w `src/data/services.ts`, cennik w `ServicePricing.tsx`). Źródło: Google Doc „Karta usługi | Twój pierwszy zespół HR", zakładka „Opisy produktów na stronę"; poprawione tylko literówki/interpunkcja.
- Linki: karty na stronie głównej („Szczegóły i cennik"), stopka, `/kontakt?temat=<id>` preselekcjonuje temat formularza. Redirecty WP: `hr-na-godziny` → procesy-hr, `rekrutacja-do-sprzedazy` → rekrutacje; `/uslugi` → `/#uslugi` (307).
- Brakuje 4. podstrony „Twój pierwszy zespół HR" (klient jeszcze nie napisał). Do wyjaśnienia z klientem: „Pakiety od 5 do 20 godzin" vs tabela 1/10/20 h; success fee 4-10% czego (zakładka Cennik mówi: rocznego wynagrodzenia); tabela rekrutacji różni się od tej w zakładce „Cennik".

## 2026-06-19 (sesja: poprawki Zespół + Hero, deploy)

- **Sekcja Zespół**: usunięto bio ze strony głównej (desktop+mobile) — zostają imię/rola/LinkedIn + placeholder przycisk „Poczytaj więcej" (pusty, docelowo → strona „O nas"). Większe zdjęcia (PANEL_H `clamp(340px,46vh,560px)`), więcej miejsca na efekt scroll-split.
- Fixy layoutu Zespół: nagłówek nie chowa się pod navbarem (`sticky top-20`), panele nie ucinają się po rozjeździe (`clipPath: inset(0 -300px)` zamiast `overflow-hidden`), CEO uniesiona −28px bez nakładania na nagłówek. Zweryfikowane geometrycznie na 900px i 768px.
- **Hero**: kadr zdjęć `object-[center_30%]` (mniej przestrzeni nad głową, więcej sylwetki), szersza kolumna foto (grid `[1fr_1.1fr]`, max-w 460/600/720).
- **Vercel build fail** „npm run build exited with 1" = ESLint `react/no-unescaped-entities` na polskim cudzysłowie w ProblemSection — naprawione owinięciem w JSX expression `{`„…"`}`. Build lokalnie przechodzi.
- Pushnięte na `main`: `b7c3f47..ee2dccd..b4f7d05`. Repo GitHub działa, deploy Vercel.
- **TODO następna sesja**: strona `/o-nas` + podpięcie „Poczytaj więcej"; realne dane kontaktowe w CTA; ciemne logo klientów.
