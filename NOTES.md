# NOTES — Business Quest

## 2026-06-19 (sesja: poprawki Zespół + Hero, deploy)

- **Sekcja Zespół**: usunięto bio ze strony głównej (desktop+mobile) — zostają imię/rola/LinkedIn + placeholder przycisk „Poczytaj więcej" (pusty, docelowo → strona „O nas"). Większe zdjęcia (PANEL_H `clamp(340px,46vh,560px)`), więcej miejsca na efekt scroll-split.
- Fixy layoutu Zespół: nagłówek nie chowa się pod navbarem (`sticky top-20`), panele nie ucinają się po rozjeździe (`clipPath: inset(0 -300px)` zamiast `overflow-hidden`), CEO uniesiona −28px bez nakładania na nagłówek. Zweryfikowane geometrycznie na 900px i 768px.
- **Hero**: kadr zdjęć `object-[center_30%]` (mniej przestrzeni nad głową, więcej sylwetki), szersza kolumna foto (grid `[1fr_1.1fr]`, max-w 460/600/720).
- **Vercel build fail** „npm run build exited with 1" = ESLint `react/no-unescaped-entities` na polskim cudzysłowie w ProblemSection — naprawione owinięciem w JSX expression `{`„…"`}`. Build lokalnie przechodzi.
- Pushnięte na `main`: `b7c3f47..ee2dccd..b4f7d05`. Repo GitHub działa, deploy Vercel.
- **TODO następna sesja**: strona `/o-nas` + podpięcie „Poczytaj więcej"; realne dane kontaktowe w CTA; ciemne logo klientów.
